import { describe, expect, expectTypeOf, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  KomamyApiError,
  KomamyClient,
  KomamyConnectionError,
  KomamyError,
  KomamyTimeoutError,
  OPERATIONS,
  SDK_VERSION,
} from '../src/index.js';

const KEY = 'kom_live_' + 'A'.repeat(43);

type Call = { url: URL; init: RequestInit };

function mockFetch(...responses: (Response | Error | (() => Response | Promise<Response>))[]) {
  const calls: Call[] = [];
  const fn = vi.fn(async (input: URL | RequestInfo, init?: RequestInit) => {
    calls.push({ url: new URL(String(input)), init: init ?? {} });
    const next = responses.shift();
    if (!next) throw new Error('requête inattendue');
    if (next instanceof Error) throw next;
    return typeof next === 'function' ? next() : next;
  });
  return { fetch: fn as unknown as typeof fetch, calls };
}

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', ...headers } });
}

function header(call: Call | undefined, name: string) {
  return new Headers(call?.init.headers).get(name);
}

describe('construction', () => {
  it('refuse une clé mal formée', () => {
    expect(() => new KomamyClient({ apiKey: 'kom_live_court' })).toThrow(KomamyError);
  });

  it('lit KOMAMY_API_KEY si aucune clé n’est passée', async () => {
    vi.stubEnv('KOMAMY_API_KEY', KEY);
    const { fetch, calls } = mockFetch(json({ tags: [] }));
    await new KomamyClient({ fetch }).tags.list();
    expect(header(calls[0], 'x-api-key')).toBe(KEY);
    vi.unstubAllEnvs();
  });

  it('apiKey: undefined explicite désactive la variable d’environnement', async () => {
    vi.stubEnv('KOMAMY_API_KEY', KEY);
    const { fetch, calls } = mockFetch(json({ tags: [] }));
    await new KomamyClient({ fetch, apiKey: undefined }).tags.list();
    expect(header(calls[0], 'x-api-key')).toBeNull();
    vi.unstubAllEnvs();
  });

  it('refuse une clé dans un navigateur sauf autorisation explicite', () => {
    vi.stubGlobal('window', { document: {} });
    try {
      expect(() => new KomamyClient({ apiKey: KEY })).toThrow(/navigateur/);
      expect(() => new KomamyClient({ apiKey: KEY, dangerouslyAllowBrowser: true })).not.toThrow();
      expect(() => new KomamyClient()).not.toThrow();
    } finally {
      vi.unstubAllGlobals();
    }
  });
});

describe('requêtes', () => {
  it('envoie la clé en en-tête, jamais dans l’URL, avec un User-Agent', async () => {
    const { fetch, calls } = mockFetch(json({ stats: { projectCount: 1 } }));
    const client = new KomamyClient({ apiKey: KEY, fetch });
    const result = await client.stats.get();
    expect(result.stats.projectCount).toBe(1);
    expect(calls[0]?.url.href).toBe('https://komamy.fr/api/stats');
    expect(header(calls[0], 'x-api-key')).toBe(KEY);
    expect(header(calls[0], 'user-agent')).toBe(`komamy-sdk/${SDK_VERSION}`);
    expect(calls[0]?.url.search).not.toContain(KEY);
  });

  it('sérialise les filtres répétables et ignore les valeurs absentes', async () => {
    const { fetch, calls } = mockFetch(json({ projects: [], total: 0, page: 1, pageSize: 10, hiddenCount: 0 }));
    await new KomamyClient({ fetch, baseUrl: 'http://localhost:3000/api/' }).projects.list({
      tag: ['Action', 'Drame'],
      seriesStatus: 'ONGOING',
      sortBy: 'recent',
      pageSize: 10,
      search: undefined,
    });
    const url = calls[0]!.url;
    expect(url.origin + url.pathname).toBe('http://localhost:3000/api/projects');
    expect(url.searchParams.getAll('tag')).toEqual(['Action', 'Drame']);
    expect(url.searchParams.get('seriesStatus')).toBe('ONGOING');
    expect(url.searchParams.has('search')).toBe(false);
  });

  it('encode le slug', async () => {
    const { fetch, calls } = mockFetch(json({ team: {}, projects: [], latestChapters: [] }));
    await new KomamyClient({ fetch }).teams.get('a/b c');
    expect(calls[0]?.url.pathname).toBe('/api/teams/a%2Fb%20c');
  });

  it('refuse un slug vide', async () => {
    const { fetch } = mockFetch();
    await expect(new KomamyClient({ fetch }).authors.get('')).rejects.toThrow(/slug/);
  });

  it('expose le quota restant', async () => {
    const onRateLimit = vi.fn();
    const { fetch } = mockFetch(
      json({ tags: [] }, 200, { 'RateLimit-Limit': '60', 'RateLimit-Remaining': '59', 'RateLimit-Reset': '42' }),
    );
    const client = new KomamyClient({ fetch, onRateLimit });
    await client.tags.list();
    expect(client.rateLimit).toEqual({ limit: 60, remaining: 59, resetSeconds: 42 });
    expect(onRateLimit).toHaveBeenCalledWith({ limit: 60, remaining: 59, resetSeconds: 42 });
  });
});

describe('erreurs', () => {
  it('traduit le corps d’erreur en KomamyApiError', async () => {
    const { fetch } = mockFetch(json({ error: 'Cette clé n’a pas la permission « teams:read ».', code: 'INSUFFICIENT_SCOPE' }, 403));
    const error = await new KomamyClient({ fetch, apiKey: KEY }).teams.list().catch((e: unknown) => e);
    expect(error).toBeInstanceOf(KomamyApiError);
    expect(error).toMatchObject({ status: 403, code: 'INSUFFICIENT_SCOPE', isAuthError: true, isRetryable: false });
    expect((error as KomamyApiError).request).toEqual({ method: 'GET', path: '/teams' });
    expect((error as Error).message).toContain('teams:read');
  });

  it('404 sans code, corps non JSON', async () => {
    const { fetch } = mockFetch(new Response('Not Found', { status: 404 }));
    const error = (await new KomamyClient({ fetch }).projects.get('inconnu').catch((e: unknown) => e)) as KomamyApiError;
    expect(error.isNotFound).toBe(true);
    expect(error.code).toBeUndefined();
    expect(error.body).toBe('Not Found');
  });

  it('réessaie après 429 en suivant Retry-After', async () => {
    vi.useFakeTimers();
    try {
      const { fetch, calls } = mockFetch(
        json({ error: 'Trop de requêtes', code: 'RATE_LIMITED' }, 429, { 'Retry-After': '2' }),
        json({ tags: [] }),
      );
      const promise = new KomamyClient({ fetch, apiKey: KEY }).tags.list();
      await vi.advanceTimersByTimeAsync(1999);
      expect(calls).toHaveLength(1);
      await vi.advanceTimersByTimeAsync(1);
      await expect(promise).resolves.toEqual({ tags: [] });
      expect(calls).toHaveLength(2);
    } finally {
      vi.useRealTimers();
    }
  });

  it('ne réessaie pas si Retry-After dépasse maxRetryDelayMs', async () => {
    const { fetch, calls } = mockFetch(json({ error: 'Quota du jour', code: 'RATE_LIMITED' }, 429, { 'Retry-After': '3600' }));
    const error = (await new KomamyClient({ fetch }).tags.list().catch((e: unknown) => e)) as KomamyApiError;
    expect(error.code).toBe('RATE_LIMITED');
    expect(error.retryAfterSeconds).toBe(3600);
    expect(calls).toHaveLength(1);
  });

  it('abandonne après maxRetries', async () => {
    const unavailable = () => json({ error: 'Compteur indisponible', code: 'RATE_LIMIT_UNAVAILABLE' }, 503, { 'Retry-After': '0' });
    const { fetch, calls } = mockFetch(unavailable, unavailable);
    const error = await new KomamyClient({ fetch, maxRetries: 1 }).stats.get().catch((e: unknown) => e);
    expect(error).toMatchObject({ status: 503, code: 'RATE_LIMIT_UNAVAILABLE' });
    expect(calls).toHaveLength(2);
  });

  it('ne réessaie pas une 401', async () => {
    const { fetch, calls } = mockFetch(json({ error: 'Clé API invalide', code: 'INVALID_API_KEY' }, 401));
    await expect(new KomamyClient({ fetch, apiKey: KEY }).tags.list()).rejects.toMatchObject({ code: 'INVALID_API_KEY' });
    expect(calls).toHaveLength(1);
  });

  it('erreur réseau : KomamyConnectionError après les tentatives', async () => {
    const { fetch, calls } = mockFetch(new TypeError('fetch failed'));
    await expect(new KomamyClient({ fetch, maxRetries: 0 }).tags.list()).rejects.toBeInstanceOf(KomamyConnectionError);
    expect(calls).toHaveLength(1);
  });

  it('délai dépassé : KomamyTimeoutError', async () => {
    const fetch = ((_url: URL, init: RequestInit) =>
      new Promise((_, reject) => init.signal?.addEventListener('abort', () => reject(init.signal?.reason)))) as typeof globalThis.fetch;
    await expect(new KomamyClient({ fetch, timeoutMs: 20, maxRetries: 0 }).tags.list()).rejects.toBeInstanceOf(KomamyTimeoutError);
  });

  it('annulation par l’appelant : l’erreur d’abandon remonte telle quelle, sans nouvelle tentative', async () => {
    const controller = new AbortController();
    const fetch = vi.fn(
      (_url: URL, init: RequestInit) =>
        new Promise<Response>((_, reject) => init.signal?.addEventListener('abort', () => reject(init.signal?.reason))),
    );
    const promise = new KomamyClient({ fetch: fetch as unknown as typeof globalThis.fetch }).tags.list({ signal: controller.signal });
    controller.abort();
    await expect(promise).rejects.toMatchObject({ name: 'AbortError' });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('pagination', () => {
  it('listAll parcourt toutes les pages', async () => {
    const page = (n: number, ids: number[]) => json({ projects: ids.map((id) => ({ id })), total: 5, page: n, pageSize: 2, hiddenCount: 0 });
    const { fetch, calls } = mockFetch(page(1, [1, 2]), page(2, [3, 4]), page(3, [5]));
    const ids: number[] = [];
    for await (const project of new KomamyClient({ fetch }).projects.listAll({ pageSize: 2, sortBy: 'alphabetical' })) {
      ids.push(project.id);
    }
    expect(ids).toEqual([1, 2, 3, 4, 5]);
    expect(calls.map((c) => c.url.searchParams.get('page'))).toEqual(['1', '2', '3']);
    expect(calls.every((c) => c.url.searchParams.get('sortBy') === 'alphabetical')).toBe(true);
  });

  it('listAll s’arrête sur une page vide', async () => {
    const { fetch, calls } = mockFetch(json({ projects: [], total: 10, page: 1, pageSize: 50, hiddenCount: 0 }));
    const all = [];
    for await (const project of new KomamyClient({ fetch }).projects.listAll()) all.push(project);
    expect(all).toEqual([]);
    expect(calls[0]?.url.searchParams.get('pageSize')).toBe('50');
  });
});

describe('API complète', () => {
  it('expose une méthode par opération de la spec', () => {
    const spec = JSON.parse(readFileSync(new URL('../openapi/komamy.openapi.json', import.meta.url), 'utf8')) as {
      paths: Record<string, Record<string, { operationId: string }>>;
    };
    const operationIds = Object.values(spec.paths).flatMap((item) => Object.values(item).map((op) => op.operationId));
    expect(operationIds.length).toBeGreaterThan(500);
    expect(Object.keys(OPERATIONS).sort()).toEqual([...operationIds].sort());
    const client = new KomamyClient({ fetch: (() => {}) as unknown as typeof fetch });
    for (const id of operationIds) expect(typeof (client.api as unknown as Record<string, unknown>)[id], id).toBe('function');
  });

  it('les raccourcis publics pointent vers des opérations ouvertes aux clés', () => {
    for (const id of ['getProjects', 'getProjectsBySlug', 'getProjectsLatestChapters', 'getTeams', 'getTeamsBySlug', 'getAuthors', 'getAuthorsBySlug', 'getTags', 'getStats'] as const) {
      expect(OPERATIONS[id], id).toHaveProperty('apiKeyScope');
    }
  });

  it('n’envoie la clé qu’aux opérations qui l’acceptent', async () => {
    const { fetch, calls } = mockFetch(json({ results: [] }), json({ tags: [] }));
    const client = new KomamyClient({ fetch, apiKey: KEY });
    await client.api.getSearch({ query: { q: 'tour' } });
    await client.api.getTags();
    expect(header(calls[0], 'x-api-key')).toBeNull();
    expect(calls[0]?.url.searchParams.get('q')).toBe('tour');
    expect(header(calls[1], 'x-api-key')).toBe(KEY);
  });

  it('envoie un corps JSON avec chemin et méthode', async () => {
    const { fetch, calls } = mockFetch(json({ comment: { id: 1 } }, 201));
    const client = new KomamyClient({ fetch, session: 'jeton' });
    const result = await client.api.postProjectsBySlugComments({ path: { slug: 'tour-de-dieu' }, body: { content: 'Super !' } });
    expect(result).toEqual({ comment: { id: 1 } });
    expect(calls[0]?.init.method).toBe('POST');
    expect(calls[0]?.url.pathname).toBe('/api/projects/tour-de-dieu/comments');
    expect(header(calls[0], 'content-type')).toBe('application/json');
    expect(JSON.parse(String(calls[0]?.init.body))).toEqual({ content: 'Super !' });
    expect(header(calls[0], 'cookie')).toBe('komamy_session=jeton');
  });

  it('convertit un corps multipart en FormData', async () => {
    const { fetch, calls } = mockFetch(json({ user: { id: 1 } }));
    await new KomamyClient({ fetch, session: 'jeton' }).api.postAuthAvatar({ body: { avatar: new Blob(['png'], { type: 'image/png' }) } });
    const body = calls[0]?.init.body;
    expect(body).toBeInstanceOf(FormData);
    expect((body as FormData).get('avatar')).toBeInstanceOf(Blob);
    expect(header(calls[0], 'content-type')).toBeNull();
  });

  it('réponse vide : undefined ; fichier ou flux : Response brute', async () => {
    const { fetch } = mockFetch(new Response(null, { status: 204 }), new Response('jpeg', { headers: { 'content-type': 'image/jpeg' } }));
    const client = new KomamyClient({ fetch, session: 'jeton' });
    await expect(client.api.postChatByIdTyping({ path: { id: 3 } })).resolves.toBeUndefined();
    const image = await client.api.getTierListsByIdShareJpg({ path: { id: 7 } });
    expect(image).toBeInstanceOf(Response);
    expect(await image.text()).toBe('jpeg');
  });

  it('jeton de l’Activity en Bearer, seulement sur les opérations activity', async () => {
    const { fetch, calls } = mockFetch(json({ room: {} }), json({ tags: [] }));
    const client = new KomamyClient({ fetch, activityToken: 'act' });
    await client.api.getDiscordActivityRoomsByInstanceId({ path: { instanceId: 'i-1' } });
    await client.api.getTags();
    expect(header(calls[0], 'authorization')).toBe('Bearer act');
    expect(header(calls[1], 'authorization')).toBeNull();
  });

  it('ne rejoue pas une écriture après une erreur réseau', async () => {
    const { fetch, calls } = mockFetch(new TypeError('fetch failed'), json({}));
    await expect(new KomamyClient({ fetch, session: 'jeton' }).api.postChatByIdTyping({ path: { id: 1 } })).rejects.toBeInstanceOf(
      KomamyConnectionError,
    );
    expect(calls).toHaveLength(1);
  });

  it('typage : paramètres et réponses tirés de la spec', () => {
    const client = new KomamyClient({ fetch: (() => {}) as unknown as typeof fetch });
    expectTypeOf(client.api.getAuthMe).returns.resolves.toHaveProperty('user');
    expectTypeOf(client.api.getTeamsBySlug).parameter(0).toEqualTypeOf<{ path: { slug: string } }>();
    expectTypeOf(client.api.getTierListsByIdShareJpg).returns.resolves.toEqualTypeOf<Response>();
    // @ts-expect-error le slug est obligatoire
    void (() => client.api.getTeamsBySlug());
  });
});

describe('session', () => {
  it('login garde le cookie de session et le renvoie ensuite', async () => {
    const onSessionChange = vi.fn();
    const { fetch, calls } = mockFetch(
      new Response(JSON.stringify({ user: { id: 1 } }), {
        headers: { 'content-type': 'application/json', 'set-cookie': 'komamy_session=abc.def; Path=/; HttpOnly; SameSite=Lax' },
      }),
      json({ user: { id: 1, permissions: [] } }),
    );
    const client = new KomamyClient({ fetch, apiKey: KEY, onSessionChange });
    const login = await client.auth.login('clement', 'secret');
    expect(login).toEqual({ user: { id: 1 } });
    expect(JSON.parse(String(calls[0]?.init.body))).toEqual({ username: 'clement', password: 'secret' });
    expect(client.session).toBe('abc.def');
    expect(onSessionChange).toHaveBeenCalledWith('abc.def');
    await client.api.getAuthMe();
    expect(header(calls[1], 'cookie')).toBe('komamy_session=abc.def');
    expect(header(calls[1], 'x-api-key')).toBeNull();
  });

  it('2FA : le cookie temporaire est renvoyé à verifyTotp', async () => {
    const { fetch, calls } = mockFetch(
      new Response(JSON.stringify({ requiresTotp: true }), {
        headers: { 'content-type': 'application/json', 'set-cookie': 'komamy_2fa_pending=tmp; Path=/; HttpOnly' },
      }),
      () => {
        const headers = new Headers({ 'content-type': 'application/json' });
        headers.append('set-cookie', 'komamy_2fa_pending=; Max-Age=0; Path=/');
        headers.append('set-cookie', 'komamy_session=sess; Path=/; HttpOnly');
        return new Response(JSON.stringify({ user: { id: 1 } }), { headers });
      },
    );
    const client = new KomamyClient({ fetch });
    expect(await client.auth.login('clement', 'secret')).toEqual({ requiresTotp: true });
    await client.auth.verifyTotp('123456');
    expect(header(calls[1], 'cookie')).toBe('komamy_2fa_pending=tmp');
    expect(client.session).toBe('sess');
  });

  it('logout oublie la session, même si le serveur échoue', async () => {
    const { fetch } = mockFetch(json({ error: 'Erreur' }, 500));
    const client = new KomamyClient({ fetch, session: 'jeton' });
    await expect(client.auth.logout()).rejects.toBeInstanceOf(KomamyApiError);
    expect(client.session).toBeUndefined();
  });
});

describe('version', () => {
  it('SDK_VERSION suit package.json', () => {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as { version: string };
    expect(SDK_VERSION).toBe(pkg.version);
  });
});
