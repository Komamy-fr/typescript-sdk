// Types utilitaires des méthodes générées (src/generated/operations.ts).

import type { operations } from './generated/openapi.js';

export interface RequestOptions {
  /** Annule la requête (et les nouvelles tentatives). */
  signal?: AbortSignal;
  /** En-têtes ajoutés à cette requête seulement. */
  headers?: Record<string, string>;
}

type Ops = operations;

/** Corps JSON attendu par une opération. */
export type JsonBody<Op extends keyof Ops> =
  NonNullable<Ops[Op]['requestBody']> extends { content: { 'application/json': infer Body } } ? Body : never;

/**
 * Corps `multipart/form-data` : un `FormData` prêt à l'emploi, ou un objet dont les champs
 * fichiers sont des `Blob`/`File` (converti en `FormData` par le client).
 */
export type MultipartBody<Op extends keyof Ops> =
  | FormData
  | (NonNullable<Ops[Op]['requestBody']> extends { content: { 'multipart/form-data': infer Body } }
      ? { [K in keyof Body]: Body[K] extends string ? string | Blob : Body[K] }
      : Record<string, string | Blob>);

type SuccessStatus = 200 | 201 | 202;

/** Corps JSON d'une réponse réussie (200, 201 ou 202) de l'opération. */
export type JsonResult<Op extends keyof Ops> = {
  [S in keyof Ops[Op]['responses']]: S extends SuccessStatus
    ? Ops[Op]['responses'][S] extends { content: { 'application/json': infer Body } }
      ? Body
      : never
    : never;
}[keyof Ops[Op]['responses']];
