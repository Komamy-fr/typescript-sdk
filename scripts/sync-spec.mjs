#!/usr/bin/env node
// Synchronise le SDK avec la spec OpenAPI de Komamy.
//
// 1. Lit la spec complète (URL publique par défaut, ou fichier local avec --from).
// 2. Normalise ce que la génération côté serveur laisse imparfait (voir `normalize`).
// 3. Écrit :
//    - openapi/komamy.openapi.json : la spec normalisée, versionnée pour relire les diffs ;
//    - src/generated/openapi.ts    : les types (openapi-typescript) ;
//    - src/generated/operations.ts : la table des opérations (méthode, chemin, accès, corps,
//      réponse) et l'interface `OperationMethods`, une méthode typée par `operationId`.
//
// Usage :
//   node scripts/sync-spec.mjs                         # depuis https://komamy.fr/api/openapi.json
//   node scripts/sync-spec.mjs --from ./openapi.json   # depuis un fichier ou un serveur local
//   node scripts/sync-spec.mjs --check                 # échoue si les fichiers générés ne sont plus à jour

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import openapiTS, { astToString } from 'openapi-typescript';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SPEC_OUT = path.join(ROOT, 'openapi/komamy.openapi.json');
const TYPES_OUT = path.join(ROOT, 'src/generated/openapi.ts');
const OPERATIONS_OUT = path.join(ROOT, 'src/generated/operations.ts');
const DEFAULT_SOURCE = 'https://komamy.fr/api/openapi.json';
const PUBLIC_SERVER = 'https://komamy.fr/api';
const METHODS = ['get', 'post', 'put', 'patch', 'delete'];

const args = process.argv.slice(2);
const check = args.includes('--check');
const fromIndex = args.indexOf('--from');
const source = fromIndex >= 0 ? args[fromIndex + 1] : (process.env.KOMAMY_OPENAPI_URL ?? DEFAULT_SOURCE);
if (!source) throw new Error('--from attend une URL ou un chemin de fichier.');

async function loadSpec(from) {
  if (/^https?:\/\//.test(from)) {
    const response = await fetch(from, { headers: { accept: 'application/json' } });
    if (!response.ok) throw new Error(`Spec introuvable (${response.status}) : ${from}`);
    return response.json();
  }
  return JSON.parse(await readFile(path.resolve(from), 'utf8'));
}

/** Corps d'erreur commun de l'API (API.md § « Erreurs »). */
const API_ERROR_SCHEMA = {
  type: 'object',
  description: 'Corps de toute réponse d’erreur. `code` est présent pour les erreurs liées aux clés API et aux quotas.',
  properties: {
    error: { type: 'string', description: 'Message lisible, en français.' },
    code: {
      type: 'string',
      description:
        '`API_KEY_IN_URL`, `INVALID_API_KEY`, `API_KEY_NOT_ALLOWED`, `INSUFFICIENT_SCOPE`, `RATE_LIMITED`, `RATE_LIMIT_UNAVAILABLE`…',
    },
  },
  required: ['error'],
};

const API_ERROR_REF = { $ref: '#/components/schemas/ApiError' };

/** Un schéma que le serveur n'a pas résolu (validateur Zod sérialisé tel quel, corrigé par komamy#211). */
function isUnresolvedSchema(schema) {
  return schema && typeof schema === 'object' && 'vendor' in schema && !('type' in schema) && !('$ref' in schema);
}

/**
 * Corrige une opération :
 * - toutes les réponses d'erreur pointent vers `ApiError` (y compris celles que le serveur
 *   publiait en `{ "vendor": "zod" }` avant komamy#211) ;
 * - les paramètres de requête décrits comme « Répétables » acceptent aussi un tableau (`?tag=a&tag=b`).
 */
function normalize(operation) {
  for (const [status, response] of Object.entries(operation.responses ?? {})) {
    const json = response?.content?.['application/json'];
    if (!json) continue;
    if (Number(status) >= 400 || isUnresolvedSchema(json.schema)) json.schema = API_ERROR_REF;
  }
  for (const parameter of operation.parameters ?? []) {
    if (parameter.in === 'query' && /^Répétable/.test(parameter.description ?? '') && parameter.schema?.type !== 'array') {
      parameter.schema = { anyOf: [parameter.schema, { type: 'array', items: parameter.schema }] };
      parameter.style = 'form';
      parameter.explode = true;
    }
  }
  return operation;
}

function normalizeSpec(full) {
  const spec = structuredClone(full);
  const paths = {};
  for (const route of Object.keys(spec.paths ?? {}).sort((a, b) => a.localeCompare(b))) {
    const item = spec.paths[route];
    paths[route] = {};
    for (const method of METHODS) {
      if (item[method]) paths[route][method] = normalize(item[method]);
    }
  }
  spec.paths = paths;
  spec.servers = [{ url: PUBLIC_SERVER }];
  spec.components ??= {};
  spec.components.schemas = { ...spec.components.schemas, ApiError: API_ERROR_SCHEMA };
  return spec;
}

/** Description de chaque opération pour le client (src/generated/operations.ts). */
function describeOperations(spec) {
  const operations = [];
  for (const [route, item] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(item)) {
      const id = operation.operationId;
      if (!id || !/^[A-Za-z_$][\w$]*$/.test(id)) throw new Error(`operationId manquant ou invalide : ${method} ${route}`);

      const parameters = operation.parameters ?? [];
      const hasPath = parameters.some((p) => p.in === 'path');
      const hasQuery = parameters.some((p) => p.in === 'query');
      const queryRequired = parameters.some((p) => p.in === 'query' && p.required);

      const bodyContent = operation.requestBody?.content ?? {};
      const bodyType = 'application/json' in bodyContent ? 'json' : 'multipart/form-data' in bodyContent ? 'multipart' : undefined;
      const bodySchema = bodyType && Object.values(bodyContent)[0]?.schema;
      const bodyRequired = Boolean(operation.requestBody?.required || bodySchema?.required?.length);

      const success = Object.entries(operation.responses ?? {}).filter(([status]) => /^2/.test(status));
      const jsonSuccess = success.some(([, response]) => response?.content?.['application/json']);
      const onlyNoContent = success.length > 0 && success.every(([status, response]) => status === '204' || !response?.content);
      const response = jsonSuccess ? 'json' : onlyNoContent && success.every(([status]) => status === '204') ? 'void' : 'raw';

      const access = operation['x-komamy-access'] ?? {};
      operations.push({
        id,
        method: method.toUpperCase(),
        path: route,
        summary: operation.summary ?? '',
        tag: operation.tags?.[0] ?? '',
        access: access.category ?? 'public',
        apiKeyScope: access.apiKeyScope,
        permissions: access.permissions,
        hasPath,
        hasQuery,
        queryRequired,
        bodyType,
        bodyRequired,
        response,
      });
    }
  }
  return operations.sort((a, b) => a.id.localeCompare(b.id));
}

const ACCESS_DOC = {
  public: 'Publique',
  session: 'Session (connexion requise)',
  admin: 'Administration',
  activity: 'Jeton de l’Activity Discord',
  internal: 'Interne',
};

function docComment(op) {
  const lines = [op.summary || `${op.method} ${op.path}`, '', `\`${op.method} ${op.path}\` · ${op.tag}`];
  let access = `Accès : ${ACCESS_DOC[op.access] ?? op.access}`;
  if (op.permissions?.length) access += ` (${op.permissions.map((p) => `\`${p}\``).join(' ou ')})`;
  if (op.apiKeyScope) access += `, ouverte aux clés API \`${op.apiKeyScope}\``;
  lines.push(access);
  return ['  /**', ...lines.map((line) => (line ? `   * ${line.replace(/\*\//g, '*\\/')}` : '   *')), '   */'].join('\n');
}

function paramsType(op) {
  const fields = [];
  const params = `operations['${op.id}']['parameters']`;
  if (op.hasPath) fields.push(`path: ${params}['path']`);
  if (op.hasQuery) fields.push(`query${op.queryRequired ? '' : '?'}: ${params}['query']`);
  if (op.bodyType === 'json') {
    fields.push(`body${op.bodyRequired ? '' : '?'}: JsonBody<'${op.id}'>`);
  } else if (op.bodyType === 'multipart') {
    fields.push(`body${op.bodyRequired ? '' : '?'}: MultipartBody<'${op.id}'>`);
  }
  if (fields.length === 0) return undefined;
  return { type: `{ ${fields.join('; ')} }`, required: op.hasPath || op.queryRequired || op.bodyRequired };
}

function resultType(op) {
  if (op.response === 'json') return `JsonResult<'${op.id}'>`;
  if (op.response === 'void') return 'void';
  return 'Response';
}

function renderOperations(operations) {
  const table = operations
    .map((op) => {
      const entry = {
        method: op.method,
        path: op.path,
        access: op.access,
        ...(op.apiKeyScope ? { apiKeyScope: op.apiKeyScope } : {}),
        ...(op.bodyType ? { body: op.bodyType } : {}),
        response: op.response,
      };
      return `  ${op.id}: ${JSON.stringify(entry)},`;
    })
    .join('\n');

  const methods = operations
    .map((op) => {
      const params = paramsType(op);
      const args = params
        ? `params${params.required ? '' : '?'}: ${params.type}, options?: RequestOptions`
        : 'params?: Record<string, never>, options?: RequestOptions';
      return `${docComment(op)}\n  ${op.id}(${args}): Promise<${resultType(op)}>;`;
    })
    .join('\n');

  return `// Généré par scripts/sync-spec.mjs à partir de openapi/komamy.openapi.json. Ne pas modifier à la main.
/* eslint-disable */

import type { operations } from './openapi.js';
import type { JsonBody, JsonResult, MultipartBody, RequestOptions } from '../operation-types.js';

/** Description de chaque opération de l'API, indexée par \`operationId\`. */
export const OPERATIONS = {
${table}
} as const satisfies Record<string, OperationDescriptor>;

export interface OperationDescriptor {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  /** Politique d'accès appliquée par le serveur (\`x-komamy-access\`). */
  access: 'public' | 'session' | 'admin' | 'activity' | 'internal';
  /** Permission de clé API qui ouvre l'opération aux clés, si elle l'est. */
  apiKeyScope?: string;
  body?: 'json' | 'multipart';
  /** \`json\` : corps JSON décodé ; \`void\` : pas de corps ; \`raw\` : \`Response\` brute (fichier, flux SSE…). */
  response: 'json' | 'void' | 'raw';
}

export type OperationId = keyof typeof OPERATIONS;

/** Une méthode par opération de l'API (${operations.length} au total), nommée d'après son \`operationId\`. */
export interface OperationMethods {
${methods}
}
`;
}

const spec = normalizeSpec(await loadSpec(source));
const operations = describeOperations(spec);
const specText = `${JSON.stringify(spec, null, 2)}\n`;
const typesText =
  '// Généré par scripts/sync-spec.mjs à partir de openapi/komamy.openapi.json. Ne pas modifier à la main.\n' +
  '/* eslint-disable */\n\n' +
  astToString(await openapiTS(spec, { alphabetize: true }));
const operationsText = renderOperations(operations);

const outputs = [
  [SPEC_OUT, specText],
  [TYPES_OUT, typesText],
  [OPERATIONS_OUT, operationsText],
];

if (check) {
  const stale = [];
  for (const [file, text] of outputs) {
    if ((await readFile(file, 'utf8').catch(() => '')) !== text) stale.push(path.relative(ROOT, file));
  }
  if (stale.length) {
    console.error(`La spec de ${source} a changé (${stale.join(', ')}) : lancer \`bun run sync-spec\` et relire le diff.`);
    process.exit(1);
  }
  console.log(`SDK à jour avec ${source} (${operations.length} opérations).`);
} else {
  for (const [file, text] of outputs) {
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, text);
  }
  console.log(`${operations.length} opérations écrites dans openapi/ et src/generated/.`);
}
