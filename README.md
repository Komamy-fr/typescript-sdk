# komamy-sdk

SDK TypeScript de l'**API de [Komamy](https://komamy.fr)** : les 549 opérations documentées sur
[/api/docs](https://komamy.fr/api/docs), toutes typées, plus des raccourcis pour l'API publique
(catalogue, chapitres, équipes, auteurs, tags, statistiques).

Les types et la liste des opérations sont générés depuis la spec OpenAPI du site
(`/api/openapi.json`) : le SDK ne contient aucune forme de réponse recopiée à la main.

- Node 20.3+, Bun, Deno, Cloudflare Workers (tout runtime avec `fetch` et `AbortSignal.any`)
- Zéro dépendance à l'exécution, ESM uniquement
- Trois modes d'accès : clé API, session de compte, jeton de l'Activity Discord
- Erreurs typées, nouvelles tentatives sur quota dépassé, pagination du catalogue

## Installation

Le paquet n'est pas encore publié sur npm. En attendant, depuis GitHub :

```sh
bun add github:Komamy-fr/typescript-sdk
# ou
npm install github:Komamy-fr/typescript-sdk
```

## Accès

Chaque opération de l'API a une politique d'accès (indiquée dans /api/docs et dans
l'autocomplétion du SDK) :

| Accès            | Opérations | Ce qu'il faut                                          |
| ---------------- | ---------- | ------------------------------------------------------ |
| Publique         | 71         | Rien. 9 d'entre elles acceptent aussi une clé API.     |
| Session          | 319        | Un compte : `auth.login()` ou un jeton de session      |
| Administration   | 133        | Un compte avec la permission d'administration demandée |
| Activity Discord | 25         | Un jeton de l'Activity (`activityToken`)               |
| Interne          | 1          | Rappel OAuth Discord, pas destiné à un client          |

### Clé API (intégrations, lecture seule)

Créez une clé dans **Réglages › Développeurs** sur komamy.fr, en ne cochant que les permissions
utiles. Elle n'est affichée qu'une fois.

| Permission      | Méthodes du SDK                                     |
| --------------- | --------------------------------------------------- |
| `projects:read` | `projects.list`, `projects.listAll`, `projects.get` |
| `chapters:read` | `projects.latestChapters`                           |
| `teams:read`    | `teams.list`, `teams.get`                           |
| `authors:read`  | `authors.list`, `authors.get`                       |
| `tags:read`     | `tags.list`                                         |
| `stats:read`    | `stats.get`                                         |

Le client n'envoie la clé qu'aux opérations qui l'acceptent ; les autres opérations publiques
(recherche, profils…) sont appelées anonymement.

> **Ne mettez jamais une clé dans le JavaScript d'une page web** : n'importe quel visiteur
> pourrait la lire. Le client refuse une clé dans un navigateur (option
> `dangerouslyAllowBrowser` pour passer outre).

### Session (compte Komamy)

```ts
const komamy = new KomamyClient();

const login = await komamy.auth.login('pseudo', 'mot de passe');
if ('requiresTotp' in login) await komamy.auth.verifyTotp('123456'); // compte avec 2FA

const { user } = await komamy.api.getAuthMe();

// Garder la session pour plus tard (c'est un secret, comme un mot de passe)
const saved = komamy.session;
const later = new KomamyClient({ session: saved, onSessionChange: (s) => save(s) });

await komamy.auth.logout();
```

Une session agit **avec tous les droits du compte**, administration comprise : réservez-la à vos
propres scripts, ne la confiez pas à un service tiers. Le serveur renouvelle parfois le cookie ;
`onSessionChange` est appelé à chaque changement pour que vous puissiez le sauvegarder.

### Activity Discord

```ts
const komamy = new KomamyClient({ activityToken });
const room = await komamy.api.getDiscordActivityRoomsByInstanceId({ path: { instanceId } });
```

## Utilisation

### Toute l'API : `client.api`

Une méthode par opération, nommée d'après son `operationId` (celui affiché dans /api/docs). Elle
prend `{ path, query, body }` selon l'opération :

```ts
// GET /teams/{slug}
const { team } = await komamy.api.getTeamsBySlug({ path: { slug: 'mon-equipe' } });

// GET /search?q=…
const results = await komamy.api.getSearch({ query: { q: 'tour' } });

// POST /projects/{slug}/comments (session)
const { comment } = await komamy.api.postProjectsBySlugComments({
  path: { slug: 'tour-de-dieu' },
  body: { content: 'Super chapitre !' },
});

// POST /admin/projects (administration)
await komamy.api.postAdminProjects({ body: { slug: 'nouvelle-oeuvre', title: 'Nouvelle œuvre' } });

// Envoi de fichier (multipart) : Blob/File, ou un FormData déjà prêt
await komamy.api.postAuthAvatar({ body: { avatar: new Blob([bytes], { type: 'image/png' }) } });
```

Ce que renvoie une méthode dépend de l'opération :

- le **corps JSON** typé de la réponse (la grande majorité) ;
- `undefined` pour une réponse vide (204) ;
- la **`Response` brute** pour un fichier (images, modèle d'inpainting) ou un flux SSE
  (`getMeEvents`, `postAdminMangadexImport`), à lire avec `response.body`.

L'éditeur affiche pour chaque méthode son résumé, sa route et sa politique d'accès.
`OPERATIONS` décrit toutes les opérations (méthode, chemin, accès, corps, réponse) et
`client.call(operationId, params)` les appelle sans typage, par exemple depuis une liste.

### Raccourcis de l'API publique

```ts
import { KomamyClient } from 'komamy-sdk';

// Lit KOMAMY_API_KEY dans l'environnement si `apiKey` n'est pas passé.
const komamy = new KomamyClient({ apiKey: process.env.KOMAMY_API_KEY });

const { projects, total } = await komamy.projects.list({
  sortBy: 'recent',
  tag: ['Action', 'Fantasy'], // filtres répétables : tableau ou valeur seule
  seriesStatus: 'ONGOING',
  pageSize: 20,
});

// Tout le catalogue, œuvre par œuvre (une requête par page de 50)
for await (const project of komamy.projects.listAll({ sortBy: 'alphabetical' })) {
  console.log(project.title, project.chapterCount);
}

const { project, chapters, upcomingChapters } = await komamy.projects.get('tour-de-dieu');
const { releases } = await komamy.projects.latestChapters({ limit: 10 });
const { teams } = await komamy.teams.list();
const { author } = await komamy.authors.get('un-auteur');
const { tags } = await komamy.tags.list();
const { stats } = await komamy.stats.get();
```

Les types courants sont exportés (`Project`, `Chapter`, `Team`, `Author`, `Tag`, `SiteStats`,
`ProjectListParams`…), ainsi que les types bruts de la spec (`paths`, `operations`, `components`)
et les aides `JsonResult<'operationId'>` / `JsonBody<'operationId'>` :

```ts
import type { JsonResult } from 'komamy-sdk';
type Me = JsonResult<'getAuthMe'>['user'];
```

### Options

```ts
new KomamyClient({
  apiKey: 'kom_live_…',
  session: '…', // jeton d'une connexion précédente
  activityToken: '…',
  baseUrl: 'https://komamy.fr/api', // instance auto-hébergée ou serveur local
  timeoutMs: 30_000, // par tentative, 0 pour aucun délai
  maxRetries: 2, // sur 429/503, et sur erreur réseau pour les lectures
  maxRetryDelayMs: 60_000, // au-delà, l'erreur est levée plutôt que d'attendre
  headers: { 'x-mon-en-tete': '…' },
  onRateLimit: ({ limit, remaining, resetSeconds }) => {},
  onSessionChange: (session) => {},
  fetch: customFetch,
});
```

Chaque méthode accepte un dernier argument `{ signal, headers }` pour annuler la requête ou
ajouter des en-têtes.

### Quotas

Par clé : 60 requêtes par minute et 10 000 par jour (valeurs par défaut du site). Le quota
restant de la dernière réponse est lisible dans `komamy.rateLimit`. Sur `429` ou `503`, le
client attend le délai indiqué par `Retry-After` puis réessaie (jusqu'à `maxRetries` fois) ;
si ce délai dépasse `maxRetryDelayMs` (quota du jour épuisé, typiquement), l'erreur est levée
tout de suite. Une écriture (POST, PUT, DELETE) coupée par une erreur réseau n'est jamais
rejouée : elle a pu être traitée.

### Erreurs

```ts
import { KomamyApiError, KomamyTimeoutError, KomamyConnectionError } from 'komamy-sdk';

try {
  await komamy.teams.get('inconnue');
} catch (error) {
  if (error instanceof KomamyApiError) {
    error.status; // 404
    error.message; // message du serveur, en français
    error.code; // 'INVALID_API_KEY' | 'INSUFFICIENT_SCOPE' | 'RATE_LIMITED' | … | undefined
    error.retryAfterSeconds;
    error.isNotFound; // 404
    error.isAuthError; // clé invalide, opération fermée aux clés, permission manquante
    error.isRetryable; // 429 / 503
  }
}
```

| Statut | `code`                   | Cas                                            |
| ------ | ------------------------ | ---------------------------------------------- |
| 400    | —                        | Paramètres ou corps invalides                  |
| 401    | `INVALID_API_KEY`        | Clé inconnue, expirée ou révoquée              |
| 401    | —                        | Session absente ou expirée                     |
| 403    | `INSUFFICIENT_SCOPE`     | Clé sans la permission demandée                |
| 403    | `API_KEY_NOT_ALLOWED`    | Opération non ouverte aux clés                 |
| 403    | —                        | Compte sans la permission demandée             |
| 404    | —                        | Ressource inexistante ou non publique          |
| 429    | `RATE_LIMITED`           | Quota dépassé (`Retry-After`)                  |
| 503    | `RATE_LIMIT_UNAVAILABLE` | Compteur de quotas injoignable (`Retry-After`) |

## Maintenance : suivre l'API

`openapi/komamy.openapi.json` est la spec du site, normalisée ; `src/generated/openapi.ts` (types,
par [openapi-typescript](https://openapi-ts.dev)) et `src/generated/operations.ts` (table des
opérations et signatures de `client.api`) en sont tirés. Les trois sont versionnés.

```sh
bun run sync-spec                                                  # depuis https://komamy.fr/api/openapi.json
bun run sync-spec -- --from http://localhost:3000/api/openapi.json # serveur Komamy local
bun run check-spec                                                 # échoue si la spec publiée a changé
```

Après une synchronisation : relire le diff, puis `bun run typecheck && bun run test`. Une
nouvelle route du site apparaît automatiquement dans `client.api`. La CI lance `check-spec`
chaque lundi pour signaler une dérive.

Le script normalise au passage la spec : toutes les réponses d'erreur pointent vers `ApiError`,
et les filtres « répétables » acceptent `valeur | valeur[]`. Il suppose une spec sans références
orphelines (corrigé côté site par komamy#211) : tant que ce correctif n'est pas en production,
synchronisez depuis un serveur local à jour plutôt que depuis komamy.fr.

## Développement

```sh
bun install
bun run typecheck
bun run test
bun run build   # dist/
```
