// Mini « cookie jar » pour un client hors navigateur : garde les cookies posés par l'API (session,
// étape 2FA en attente, challenge WebAuthn…) et les renvoie aux requêtes suivantes, comme le ferait
// le navigateur. Un seul site (l'API configurée) : pas de gestion de domaine ni de chemin.

export class CookieJar {
  readonly #cookies = new Map<string, string>();

  get(name: string): string | undefined {
    return this.#cookies.get(name);
  }

  set(name: string, value: string): void {
    this.#cookies.set(name, value);
  }

  delete(name: string): void {
    this.#cookies.delete(name);
  }

  /** Valeur de l'en-tête `Cookie` à envoyer, ou `undefined` s'il n'y a rien. */
  header(): string | undefined {
    if (this.#cookies.size === 0) return undefined;
    return [...this.#cookies].map(([name, value]) => `${name}=${value}`).join('; ');
  }

  /** Enregistre les `Set-Cookie` d'une réponse (un cookie expiré ou vidé est supprimé). */
  store(headers: Headers): void {
    const lines = typeof headers.getSetCookie === 'function' ? headers.getSetCookie() : splitSetCookie(headers.get('set-cookie'));
    for (const line of lines) {
      const [pair = '', ...attributes] = line.split(';');
      const separator = pair.indexOf('=');
      if (separator <= 0) continue;
      const name = pair.slice(0, separator).trim();
      const value = pair.slice(separator + 1).trim();
      if (!value || attributes.some((attribute) => isExpired(attribute.trim()))) this.#cookies.delete(name);
      else this.#cookies.set(name, value);
    }
  }
}

function isExpired(attribute: string): boolean {
  const [key = '', value = ''] = attribute.split('=');
  if (key.toLowerCase() === 'max-age') return Number(value) <= 0;
  if (key.toLowerCase() === 'expires') {
    const date = Date.parse(attribute.slice(attribute.indexOf('=') + 1));
    return Number.isFinite(date) && date <= Date.now();
  }
  return false;
}

/** Repli pour un `Headers` sans `getSetCookie` : coupe sur les virgules qui ne sont pas dans une date. */
function splitSetCookie(raw: string | null): string[] {
  if (!raw) return [];
  return raw.split(/,(?=\s*[^;=\s]+=)/).map((part) => part.trim());
}
