// Types publics du SDK, tous dérivés de la spec générée (src/generated/openapi.ts) :
// une évolution de l'API se répercute ici à la prochaine synchronisation, sans copie à la main.

import type { components, operations } from './generated/openapi.js';

type JsonOk<Op extends keyof operations> = operations[Op]['responses'] extends {
  200: { content: { 'application/json': infer Body } };
}
  ? Body
  : never;

type Query<Op extends keyof operations> = operations[Op]['parameters'] extends { query?: infer Q } ? NonNullable<Q> : never;

type Item<T> = T extends readonly (infer U)[] ? U : never;

/** Corps d'erreur commun de l'API. */
export type ApiErrorBody = components['schemas']['ApiError'];

/** `GET /projects` : une page du catalogue. */
export type ProjectListResponse = JsonOk<'getProjects'>;
/** Filtres et tri de `GET /projects`. */
export type ProjectListParams = Query<'getProjects'>;
/** Œuvre telle qu'elle apparaît dans le catalogue et les fiches. */
export type Project = Item<ProjectListResponse['projects']>;

/** `GET /projects/{slug}` : fiche d'une œuvre (chapitres sans pages avec une clé API). */
export type ProjectDetailResponse = JsonOk<'getProjectsBySlug'>;
/** Chapitre publié d'une œuvre. */
export type Chapter = Item<ProjectDetailResponse['chapters']>;
/** Chapitre programmé (date de sortie annoncée). */
export type UpcomingChapter = Item<ProjectDetailResponse['upcomingChapters']>;

/** `GET /projects/latest-chapters` : dernières sorties, groupées par œuvre. */
export type LatestChaptersResponse = JsonOk<'getProjectsLatestChapters'>;
export type LatestChaptersParams = Query<'getProjectsLatestChapters'>;
export type Release = Item<LatestChaptersResponse['releases']>;

/** `GET /teams`. */
export type TeamListResponse = JsonOk<'getTeams'>;
export type TeamListItem = Item<TeamListResponse['teams']>;
/** `GET /teams/{slug}`. */
export type TeamDetailResponse = JsonOk<'getTeamsBySlug'>;
export type Team = TeamDetailResponse['team'];

/** `GET /authors`. */
export type AuthorListResponse = JsonOk<'getAuthors'>;
export type AuthorListItem = Item<AuthorListResponse['authors']>;
/** `GET /authors/{slug}`. */
export type AuthorDetailResponse = JsonOk<'getAuthorsBySlug'>;
export type Author = AuthorDetailResponse['author'];

/** `GET /tags`. */
export type TagListResponse = JsonOk<'getTags'>;
export type Tag = Item<TagListResponse['tags']>;

/** `GET /stats`. */
export type StatsResponse = JsonOk<'getStats'>;
export type SiteStats = StatsResponse['stats'];

/** Permissions qu'une clé API peut porter (toutes en lecture seule). */
export type ApiKeyScope = 'projects:read' | 'chapters:read' | 'teams:read' | 'authors:read' | 'tags:read' | 'stats:read';

/** En-têtes `RateLimit-*` de la dernière réponse : fenêtre de quota la plus contraignante. */
export interface RateLimitInfo {
  /** Nombre de requêtes autorisées dans la fenêtre. */
  limit: number;
  /** Requêtes restantes dans la fenêtre. */
  remaining: number;
  /** Secondes avant la remise à zéro de la fenêtre. */
  resetSeconds: number;
}
