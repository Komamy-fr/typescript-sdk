import type { ApiErrorBody } from './types.js';

/** Codes d'erreur documentés pour les clés API et les quotas (API.md § « Clés API »). */
export type KomamyErrorCode =
  | 'API_KEY_IN_URL'
  | 'INVALID_API_KEY'
  | 'API_KEY_NOT_ALLOWED'
  | 'INSUFFICIENT_SCOPE'
  | 'RATE_LIMITED'
  | 'RATE_LIMIT_UNAVAILABLE'
  | (string & {});

/** Classe de base de toutes les erreurs levées par le SDK. */
export class KomamyError extends Error {
  override name = 'KomamyError';
}

/** Réponse HTTP non 2xx de l'API. */
export class KomamyApiError extends KomamyError {
  override name = 'KomamyApiError';
  /** Statut HTTP. */
  readonly status: number;
  /** Code machine (`INVALID_API_KEY`, `RATE_LIMITED`…), absent pour les erreurs génériques (404, 400…). */
  readonly code: KomamyErrorCode | undefined;
  /** Délai conseillé avant de réessayer (`Retry-After`, en secondes), si le serveur l'a indiqué. */
  readonly retryAfterSeconds: number | undefined;
  /** Corps brut de la réponse (JSON décodé si possible). */
  readonly body: ApiErrorBody | unknown;
  /** Méthode et chemin de la requête, pour le diagnostic (jamais la clé). */
  readonly request: { method: string; path: string };

  constructor(init: {
    status: number;
    message: string;
    code?: string | undefined;
    retryAfterSeconds?: number | undefined;
    body: unknown;
    request: { method: string; path: string };
  }) {
    super(init.message);
    this.status = init.status;
    this.code = init.code;
    this.retryAfterSeconds = init.retryAfterSeconds;
    this.body = init.body;
    this.request = init.request;
  }

  /** 404 : ressource inexistante ou non publique. */
  get isNotFound(): boolean {
    return this.status === 404;
  }

  /** 401/403 liés à la clé : invalide, non autorisée sur cette opération, ou permission manquante. */
  get isAuthError(): boolean {
    return this.code === 'INVALID_API_KEY' || this.code === 'API_KEY_NOT_ALLOWED' || this.code === 'INSUFFICIENT_SCOPE';
  }

  /** 429 ou 503 de quota : la requête peut être rejouée après `retryAfterSeconds`. */
  get isRetryable(): boolean {
    return this.status === 429 || this.status === 503;
  }
}

/** Le serveur n'a pas répondu dans le délai imparti (`timeoutMs`). */
export class KomamyTimeoutError extends KomamyError {
  override name = 'KomamyTimeoutError';
}

/** Échec réseau avant toute réponse HTTP (DNS, connexion refusée, TLS…). */
export class KomamyConnectionError extends KomamyError {
  override name = 'KomamyConnectionError';
}
