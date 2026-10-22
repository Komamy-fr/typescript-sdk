import { OPERATIONS, type OperationDescriptor, type OperationId, type OperationMethods } from './generated/operations.js';
import { CookieJar } from './cookies.js';
import { KomamyApiError, KomamyConnectionError, KomamyError, KomamyTimeoutError } from './errors.js';
import type { JsonBody, JsonResult, RequestOptions } from './operation-types.js';
import type {
  AuthorDetailResponse,
  AuthorListResponse,
  LatestChaptersParams,
  LatestChaptersResponse,
  Project,
  ProjectDetailResponse,
  ProjectListParams,
  ProjectListResponse,
  RateLimitInfo,
  StatsResponse,
  TagListResponse,
  TeamDetailResponse,
  TeamListResponse,
} from './types.js';
import { SDK_VERSION } from './version.js';

export const DEFAULT_BASE_URL = 'https://komamy.fr/api';

/** En-tête qui porte la clé. Jamais dans l'URL : le serveur refuse `?api_key=` (400 `API_KEY_IN_URL`). */
export const API_KEY_HEADER = 'X-API-Key';

/** Format d'une clé de production (`kom_live_` + 43 caractères base64url). */
export const API_KEY_PATTERN = /^kom_live_[A-Za-z0-9_-]{43}$/;

/** Cookie de session du site, posé par `POST /auth/login`. */
export const SESSION_COOKIE_NAME = 'komamy_session';

/** Taille de page maximale acceptée par `GET /projects`. */
export const MAX_PAGE_SIZE = 50;

export interface KomamyClientOptions {
  /**
   * Clé API (`kom_live_…`), créée dans Réglages › Développeurs. Lecture seule : elle n'est envoyée
   * qu'aux opérations qui l'acceptent. Par défaut : variable d'environnement `KOMAMY_API_KEY`.
   */
  apiKey?: string | undefined;
  /**
   * Jeton de session (valeur du cookie `komamy_session`) d'une connexion précédente, relu par
   * exemple depuis `client.session` après `auth.login()`. Donne accès aux opérations « session » et
   * « administration » avec les droits du compte.
   */
  session?: string | undefined;
  /** Jeton de l'Activity Discord (`POST /discord/activity/token`), pour les opérations `activity`. */
  activityToken?: string | undefined;
  /** URL de base de l'API, `/api` compris. Défaut : `https://komamy.fr/api`. */
  baseUrl?: string;
  /** Implémentation de `fetch` (tests, proxy, runtime sans `fetch` global). Défaut : `globalThis.fetch`. */
  fetch?: typeof fetch;
  /** Délai maximal d'une tentative, en millisecondes. Défaut : 30 000. `0` : pas de délai. */
  timeoutMs?: number;
  /**
   * Nouvelles tentatives sur 429/503 et, pour les lectures (GET), sur erreur réseau. Défaut : 2.
   * Le SDK attend `Retry-After` quand le serveur l'indique, sinon un délai exponentiel.
   */
  maxRetries?: number;
  /** Attente maximale acceptée avant une nouvelle tentative, en ms : au-delà, l'erreur est levée. Défaut : 60 000. */
  maxRetryDelayMs?: number;
  /** En-têtes ajoutés à chaque requête. */
  headers?: Record<string, string>;
  /** Appelé après chaque réponse qui porte des en-têtes `RateLimit-*`. */
  onRateLimit?: (info: RateLimitInfo) => void;
  /** Appelé quand le serveur pose, renouvelle ou supprime le cookie de session (pour le sauvegarder). */
  onSessionChange?: (session: string | undefined) => void;
  /**
   * Une clé API ne doit jamais être embarquée dans le JavaScript d'une page web (n'importe quel
   * visiteur pourrait la lire). Le client refuse donc une clé dans un navigateur, sauf si cette
   * option est à `true` (outil interne, extension, page locale…).
   */
  dangerouslyAllowBrowser?: boolean;
}

/** Paramètres d'un appel générique (`client.call`). */
export interface CallParams {
  path?: Record<string, string | number>;
  query?: object;
  body?: unknown;
}

type QueryValue = string | number | boolean | readonly (string | number | boolean)[] | undefined | null;

/** Réponse de `auth.login` : session ouverte, ou code TOTP à fournir via `auth.verifyTotp`. */
export type LoginResult = JsonResult<'postAuthLogin'>;

const RETRYABLE_STATUSES = new Set([429, 503]);

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof (window as { document?: unknown }).document !== 'undefined';
}

function readEnv(name: string): string | undefined {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  return env?.[name] || undefined;
}

function parseIntHeader(headers: Headers, name: string): number | undefined {
  const raw = headers.get(name);
  if (raw === null || raw.trim() === '') return undefined;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? value : undefined;
}

function sleep(ms: number, signal: AbortSignal | undefined): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(signal.reason);
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason);
    };
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

function toFormData(body: unknown): FormData {
  if (body instanceof FormData) return body;
  const form = new FormData();
  for (const [name, value] of Object.entries((body ?? {}) as Record<string, unknown>)) {
    if (value === undefined || value === null) continue;
    for (const item of Array.isArray(value) ? value : [value]) {
      form.append(name, item instanceof Blob ? item : typeof item === 'object' ? JSON.stringify(item) : String(item));
    }
  }
  return form;
}

/**
 * Client de l'API Komamy : toutes les opérations de la spec OpenAPI (`client.api.<operationId>`),
 * plus des raccourcis pour l'API publique (`client.projects`, `client.teams`…).
 *
 * ```ts
 * const komamy = new KomamyClient({ apiKey: process.env.KOMAMY_API_KEY });
 * const { projects } = await komamy.projects.list({ sortBy: 'recent', pageSize: 10 });
 *
 * await komamy.auth.login('pseudo', 'mot de passe');
 * const { user } = await komamy.api.getAuthMe();
 * ```
 */
export class KomamyClient {
  readonly baseUrl: string;
  readonly #apiKey: string | undefined;
  #activityToken: string | undefined;
  readonly #cookies = new CookieJar();
  readonly #fetch: typeof fetch;
  readonly #timeoutMs: number;
  readonly #maxRetries: number;
  readonly #maxRetryDelayMs: number;
  readonly #headers: Record<string, string>;
  readonly #onRateLimit: ((info: RateLimitInfo) => void) | undefined;
  readonly #onSessionChange: ((session: string | undefined) => void) | undefined;
  #lastRateLimit: RateLimitInfo | undefined;

  /**
   * Toutes les opérations de l'API, une méthode par `operationId` (voir /api/docs). Chaque méthode
   * prend `{ path, query, body }` selon l'opération et renvoie le corps JSON typé de la réponse,
   * `undefined` pour une réponse vide, ou la `Response` brute pour un fichier ou un flux.
   */
  readonly api: OperationMethods;

  constructor(options: KomamyClientOptions = {}) {
    const apiKey = 'apiKey' in options ? options.apiKey : readEnv('KOMAMY_API_KEY');
    if (apiKey !== undefined && !API_KEY_PATTERN.test(apiKey)) {
      throw new KomamyError('Clé API mal formée : une clé Komamy commence par « kom_live_ » suivi de 43 caractères.');
    }
    if (apiKey && isBrowser() && !options.dangerouslyAllowBrowser) {
      throw new KomamyError(
        'Clé API refusée dans un navigateur : n’importe quel visiteur pourrait la lire. Appelez l’API depuis un serveur, ' +
          'ou passez `dangerouslyAllowBrowser: true` si la page n’est jamais publique.',
      );
    }
    const fetchImpl = options.fetch ?? globalThis.fetch;
    if (typeof fetchImpl !== 'function') {
      throw new KomamyError('Aucune implémentation de fetch disponible : passez l’option `fetch` (Node 18+ en fournit une).');
    }

    this.baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, '');
    this.#apiKey = apiKey;
    this.#activityToken = options.activityToken;
    if (options.session) this.#cookies.set(SESSION_COOKIE_NAME, options.session);
    this.#fetch = fetchImpl;
    this.#timeoutMs = options.timeoutMs ?? 30_000;
    this.#maxRetries = Math.max(0, options.maxRetries ?? 2);
    this.#maxRetryDelayMs = options.maxRetryDelayMs ?? 60_000;
    this.#headers = { ...options.headers };
    this.#onRateLimit = options.onRateLimit;
    this.#onSessionChange = options.onSessionChange;

    const methods: Record<string, (params?: CallParams, options?: RequestOptions) => Promise<unknown>> = {};
    for (const id of Object.keys(OPERATIONS) as OperationId[]) {
      methods[id] = (params, requestOptions) => this.call(id, params, requestOptions);
    }
    this.api = methods as unknown as OperationMethods;
  }

  /** Quota restant d'après la dernière réponse, si le serveur l'a indiqué. */
  get rateLimit(): RateLimitInfo | undefined {
    return this.#lastRateLimit;
  }

  /** Jeton de session courant (cookie `komamy_session`), à conserver pour rouvrir la session plus tard. */
  get session(): string | undefined {
    return this.#cookies.get(SESSION_COOKIE_NAME);
  }

  /** Connexion, 2FA et déconnexion. La session obtenue sert ensuite à tous les appels du client. */
  readonly auth = {
    /**
     * Connexion par pseudo et mot de passe (`POST /auth/login`). Si le compte a la 2FA, la réponse
     * vaut `{ requiresTotp: true }` : appeler ensuite `auth.verifyTotp(code)`.
     */
    login: (username: string, password: string, options?: RequestOptions): Promise<LoginResult> =>
      this.call('postAuthLogin', { body: { username, password } satisfies JsonBody<'postAuthLogin'> }, options),
    /** Deuxième étape de connexion pour un compte avec 2FA (`POST /auth/totp/login-verify`). */
    verifyTotp: (code: string, options?: RequestOptions): Promise<JsonResult<'postAuthTotpLoginVerify'>> =>
      this.call('postAuthTotpLoginVerify', { body: { code } }, options),
    /** Révoque la session courante (`POST /auth/logout`) et l'oublie localement. */
    logout: async (options?: RequestOptions): Promise<void> => {
      try {
        await this.call('postAuthLogout', {}, options);
      } finally {
        this.setSession(undefined);
      }
    },
  };

  /** Remplace (ou efface avec `undefined`) le jeton de session utilisé par le client. */
  setSession(session: string | undefined): void {
    const before = this.session;
    if (session) this.#cookies.set(SESSION_COOKIE_NAME, session);
    else this.#cookies.delete(SESSION_COOKIE_NAME);
    if (before !== this.session) this.#onSessionChange?.(this.session);
  }

  /** Remplace le jeton de l'Activity Discord. */
  setActivityToken(token: string | undefined): void {
    this.#activityToken = token;
  }

  /** Œuvres publiques : catalogue, fiches et dernières sorties. */
  readonly projects = {
    /** Une page du catalogue (`GET /projects`). Permission `projects:read`. */
    list: (params: ProjectListParams = {}, options?: RequestOptions): Promise<ProjectListResponse> =>
      this.call('getProjects', { query: params }, options),

    /**
     * Parcourt tout le catalogue page par page (`GET /projects`), œuvre par œuvre.
     * Chaque page coûte une requête de quota : `pageSize` vaut 50 par défaut ici (le maximum).
     */
    listAll: (params: Omit<ProjectListParams, 'page'> = {}, options?: RequestOptions): AsyncGenerator<Project> =>
      this.#paginate(params, options),

    /** Fiche d'une œuvre par son slug (`GET /projects/{slug}`). Permission `projects:read`. */
    get: (slug: string, options?: RequestOptions): Promise<ProjectDetailResponse> =>
      this.call('getProjectsBySlug', { path: { slug } }, options),

    /** Dernières sorties, groupées par œuvre (`GET /projects/latest-chapters`). Permission `chapters:read`. */
    latestChapters: (params: LatestChaptersParams = {}, options?: RequestOptions): Promise<LatestChaptersResponse> =>
      this.call('getProjectsLatestChapters', { query: params }, options),
  };

  /** Équipes de traduction. Permission `teams:read`. */
  readonly teams = {
    /** Toutes les équipes, avec leur nombre d'œuvres publiées (`GET /teams`). */
    list: (options?: RequestOptions): Promise<TeamListResponse> => this.call('getTeams', {}, options),
    /** Fiche d'une équipe, ses œuvres et ses dernières sorties (`GET /teams/{slug}`). */
    get: (slug: string, options?: RequestOptions): Promise<TeamDetailResponse> =>
      this.call('getTeamsBySlug', { path: { slug } }, options),
  };

  /** Auteurs. Permission `authors:read`. */
  readonly authors = {
    /** Tous les auteurs, avec leur nombre d'œuvres publiées (`GET /authors`). */
    list: (options?: RequestOptions): Promise<AuthorListResponse> => this.call('getAuthors', {}, options),
    /** Fiche d'un auteur, ses œuvres et ses dernières sorties (`GET /authors/{slug}`). */
    get: (slug: string, options?: RequestOptions): Promise<AuthorDetailResponse> =>
      this.call('getAuthorsBySlug', { path: { slug } }, options),
  };

  /** Tags du catalogue. Permission `tags:read`. */
  readonly tags = {
    /** Tous les tags (`GET /tags`). */
    list: (options?: RequestOptions): Promise<TagListResponse> => this.call('getTags', {}, options),
  };

  /** Statistiques publiques. Permission `stats:read`. */
  readonly stats = {
    /** Compteurs agrégés du site (`GET /stats`). */
    get: (options?: RequestOptions): Promise<StatsResponse> => this.call('getStats', {}, options),
  };

  /** Appelle une opération par son `operationId`. Préférer `client.api.<operationId>`, typé. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async call<T = any>(id: OperationId, params: CallParams = {}, options: RequestOptions = {}): Promise<T> {
    const operation: OperationDescriptor | undefined = OPERATIONS[id];
    if (!operation) throw new KomamyError(`Opération inconnue : ${id}.`);

    const url = this.#buildUrl(operation.path, params.path, params.query as Record<string, QueryValue> | undefined);
    const headers: Record<string, string> = { accept: 'application/json', ...this.#headers, ...options.headers };
    if (!isBrowser()) headers['user-agent'] ??= `komamy-sdk/${SDK_VERSION}`;

    // La clé n'est présentée qu'aux opérations qui l'acceptent, et seulement hors session : ailleurs
    // le serveur la refuserait (`API_KEY_NOT_ALLOWED`) même quand l'opération est publique.
    if (this.#apiKey && operation.apiKeyScope && !this.session) headers[API_KEY_HEADER] = this.#apiKey;
    if (operation.access === 'activity' && this.#activityToken) headers.authorization = `Bearer ${this.#activityToken}`;

    let body: BodyInit | undefined;
    if (params.body !== undefined && operation.body === 'json') {
      headers['content-type'] = 'application/json';
      body = JSON.stringify(params.body);
    } else if (params.body !== undefined && operation.body === 'multipart') {
      body = toFormData(params.body);
    }

    const response = await this.#send(operation.method, operation.path, url, headers, body, options.signal);
    if (operation.response === 'raw') return response as T;
    if (response.status === 204 || operation.response === 'void') {
      await response.body?.cancel();
      return undefined as T;
    }
    const text = await response.text();
    return (text ? JSON.parse(text) : undefined) as T;
  }

  #buildUrl(route: string, pathParams?: Record<string, string | number>, query?: Record<string, QueryValue>): URL {
    const resolved = route.replace(/\{(\w+)\}/g, (_, name: string) => {
      const value = pathParams?.[name];
      if (value === undefined || value === '') throw new KomamyError(`Paramètre « ${name} » manquant pour ${route}.`);
      return encodeURIComponent(String(value));
    });
    const url = new URL(this.baseUrl + resolved);
    for (const [name, value] of Object.entries(query ?? {})) {
      if (value === undefined || value === null) continue;
      for (const item of Array.isArray(value) ? value : [value]) url.searchParams.append(name, String(item));
    }
    return url;
  }

  async #send(
    method: string,
    route: string,
    url: URL,
    headers: Record<string, string>,
    body: BodyInit | undefined,
    signal: AbortSignal | undefined,
  ): Promise<Response> {
    const request = { method, path: route };

    for (let attempt = 0; ; attempt++) {
      let response: Response;
      const timeout = this.#timeoutMs > 0 ? AbortSignal.timeout(this.#timeoutMs) : undefined;
      const signals = [signal, timeout].filter((s): s is AbortSignal => s !== undefined);
      const cookie = this.#cookies.header();
      try {
        response = await this.#fetch(url, {
          method,
          headers: cookie ? { ...headers, cookie } : headers,
          body,
          signal: signals.length > 1 ? AbortSignal.any(signals) : signals[0],
        });
      } catch (cause) {
        if (signal?.aborted) throw cause;
        const error = timeout?.aborted
          ? new KomamyTimeoutError(`Pas de réponse de ${method} ${route} après ${this.#timeoutMs} ms.`, { cause })
          : new KomamyConnectionError(`Échec réseau sur ${method} ${route} : ${(cause as Error)?.message ?? cause}`, {
              cause,
            });
        // Une écriture a pu être traitée avant la coupure : seules les lectures sont rejouées.
        const delay = method === 'GET' ? this.#retryDelay(attempt, undefined) : undefined;
        if (delay === undefined) throw error;
        await sleep(delay, signal);
        continue;
      }

      this.#recordCookies(response.headers);
      this.#recordRateLimit(response.headers);
      if (response.ok) return response;

      const error = await this.#toApiError(response, request);
      // 429/503 : la requête n'a pas été traitée (quota, maintenance), on peut la rejouer.
      const delay = RETRYABLE_STATUSES.has(response.status) ? this.#retryDelay(attempt, error.retryAfterSeconds) : undefined;
      if (delay === undefined) throw error;
      await sleep(delay, signal);
    }
  }

  /** Délai avant la tentative suivante, ou `undefined` s'il ne faut plus réessayer. */
  #retryDelay(attempt: number, retryAfterSeconds: number | undefined): number | undefined {
    if (attempt >= this.#maxRetries) return undefined;
    const delay = retryAfterSeconds !== undefined ? retryAfterSeconds * 1000 : 500 * 2 ** attempt;
    return delay <= this.#maxRetryDelayMs ? delay : undefined;
  }

  #recordCookies(headers: Headers) {
    const before = this.session;
    this.#cookies.store(headers);
    if (before !== this.session) this.#onSessionChange?.(this.session);
  }

  #recordRateLimit(headers: Headers) {
    const limit = parseIntHeader(headers, 'RateLimit-Limit');
    const remaining = parseIntHeader(headers, 'RateLimit-Remaining');
    const resetSeconds = parseIntHeader(headers, 'RateLimit-Reset');
    if (limit === undefined || remaining === undefined || resetSeconds === undefined) return;
    this.#lastRateLimit = { limit, remaining, resetSeconds };
    this.#onRateLimit?.(this.#lastRateLimit);
  }

  async #toApiError(response: Response, request: { method: string; path: string }): Promise<KomamyApiError> {
    const text = await response.text().catch(() => '');
    let body: unknown = text;
    try {
      body = text ? JSON.parse(text) : undefined;
    } catch {
      // Corps non JSON (proxy, page d'erreur) : gardé tel quel.
    }
    const json = body && typeof body === 'object' ? (body as { error?: unknown; code?: unknown }) : {};
    return new KomamyApiError({
      status: response.status,
      message:
        typeof json.error === 'string' ? json.error : `${request.method} ${request.path} : HTTP ${response.status}`,
      code: typeof json.code === 'string' ? json.code : undefined,
      retryAfterSeconds: parseIntHeader(response.headers, 'Retry-After'),
      body,
      request,
    });
  }

  async *#paginate(params: Omit<ProjectListParams, 'page'>, options?: RequestOptions): AsyncGenerator<Project> {
    const pageSize = params.pageSize ?? MAX_PAGE_SIZE;
    for (let page = 1; ; page++) {
      const result = await this.projects.list({ ...params, pageSize, page }, options);
      yield* result.projects;
      if (result.projects.length === 0 || page * result.pageSize >= result.total) return;
    }
  }
}
