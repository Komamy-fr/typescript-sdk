// Généré par scripts/sync-spec.mjs à partir de openapi/komamy.openapi.json. Ne pas modifier à la main.
/* eslint-disable */

import type { operations } from './openapi.js';
import type { JsonBody, JsonResult, MultipartBody, RequestOptions } from '../operation-types.js';

/** Description de chaque opération de l'API, indexée par `operationId`. */
export const OPERATIONS = {
  deleteAdminArticleCommentsById: {"method":"DELETE","path":"/admin/article-comments/{id}","access":"admin","response":"json"},
  deleteAdminAuthorsById: {"method":"DELETE","path":"/admin/authors/{id}","access":"session","response":"json"},
  deleteAdminBlogCommentsById: {"method":"DELETE","path":"/admin/blog/comments/{id}","access":"admin","response":"json"},
  deleteAdminBlogPostsById: {"method":"DELETE","path":"/admin/blog/posts/{id}","access":"admin","response":"json"},
  deleteAdminCommentsById: {"method":"DELETE","path":"/admin/comments/{id}","access":"admin","response":"json"},
  deleteAdminDiscordChannelsById: {"method":"DELETE","path":"/admin/discord/channels/{id}","access":"admin","response":"json"},
  deleteAdminDocumentationById: {"method":"DELETE","path":"/admin/documentation/{id}","access":"admin","response":"json"},
  deleteAdminProjectsBySlug: {"method":"DELETE","path":"/admin/projects/{slug}","access":"admin","response":"json"},
  deleteAdminProjectsBySlugChaptersByChapterId: {"method":"DELETE","path":"/admin/projects/{slug}/chapters/{chapterId}","access":"session","response":"json"},
  deleteAdminProjectsBySlugChaptersByChapterIdMangadex: {"method":"DELETE","path":"/admin/projects/{slug}/chapters/{chapterId}/mangadex","access":"session","response":"json"},
  deleteAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId: {"method":"DELETE","path":"/admin/projects/{slug}/chapters/{chapterId}/page-notes/{noteId}","access":"session","response":"json"},
  deleteAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId: {"method":"DELETE","path":"/admin/projects/{slug}/chapters/{chapterId}/translation-notes/{noteId}","access":"session","response":"json"},
  deleteAdminProjectsBySlugChaptersByChapterIdUpload: {"method":"DELETE","path":"/admin/projects/{slug}/chapters/{chapterId}/upload","access":"session","response":"json"},
  deleteAdminProjectsBySlugEditorFontsByFontId: {"method":"DELETE","path":"/admin/projects/{slug}/editor-fonts/{fontId}","access":"session","response":"json"},
  deleteAdminProjectsBySlugEditorStylesByStyleId: {"method":"DELETE","path":"/admin/projects/{slug}/editor-styles/{styleId}","access":"session","response":"json"},
  deleteAdminProjectsBySlugOverridesByUserId: {"method":"DELETE","path":"/admin/projects/{slug}/overrides/{userId}","access":"admin","response":"json"},
  deleteAdminRolesById: {"method":"DELETE","path":"/admin/roles/{id}","access":"admin","response":"json"},
  deleteAdminTagsById: {"method":"DELETE","path":"/admin/tags/{id}","access":"admin","response":"json"},
  deleteAdminTasksById: {"method":"DELETE","path":"/admin/tasks/{id}","access":"admin","response":"json"},
  deleteAdminTasksByIdAssigneesByUserId: {"method":"DELETE","path":"/admin/tasks/{id}/assignees/{userId}","access":"admin","response":"json"},
  deleteAdminTasksByIdCommentsByCommentId: {"method":"DELETE","path":"/admin/tasks/{id}/comments/{commentId}","access":"admin","response":"json"},
  deleteAdminTasksByIdLabelsByLabelId: {"method":"DELETE","path":"/admin/tasks/{id}/labels/{labelId}","access":"admin","response":"json"},
  deleteAdminTasksByIdSubtasksBySubtaskId: {"method":"DELETE","path":"/admin/tasks/{id}/subtasks/{subtaskId}","access":"admin","response":"json"},
  deleteAdminTeamsById: {"method":"DELETE","path":"/admin/teams/{id}","access":"session","response":"json"},
  deleteAdminTeamsByIdMembersByUserId: {"method":"DELETE","path":"/admin/teams/{id}/members/{userId}","access":"session","response":"json"},
  deleteAdminTeamsByIdRolesByRoleId: {"method":"DELETE","path":"/admin/teams/{id}/roles/{roleId}","access":"session","response":"json"},
  deleteAdminTicketsById: {"method":"DELETE","path":"/admin/tickets/{id}","access":"admin","response":"json"},
  deleteAdminTierListCommentsById: {"method":"DELETE","path":"/admin/tier-list-comments/{id}","access":"admin","response":"json"},
  deleteAdminUploadsById: {"method":"DELETE","path":"/admin/uploads/{id}","access":"session","response":"json"},
  deleteAdminUsersById: {"method":"DELETE","path":"/admin/users/{id}","access":"admin","response":"json"},
  deleteAdminUsersNotesByNoteId: {"method":"DELETE","path":"/admin/users/notes/{noteId}","access":"admin","response":"json"},
  deleteArticlesById: {"method":"DELETE","path":"/articles/{id}","access":"admin","response":"json"},
  deleteArticlesBySlugCommentsByCommentId: {"method":"DELETE","path":"/articles/{slug}/comments/{commentId}","access":"session","response":"json"},
  deleteAuthPasskeysById: {"method":"DELETE","path":"/auth/passkeys/{id}","access":"session","response":"json"},
  deleteAuthSessionsById: {"method":"DELETE","path":"/auth/sessions/{id}","access":"session","response":"json"},
  deleteAuthTotp: {"method":"DELETE","path":"/auth/totp","access":"session","body":"json","response":"json"},
  deleteChatMessagesByMessageId: {"method":"DELETE","path":"/chat/messages/{messageId}","access":"session","response":"json"},
  deleteCollectionsById: {"method":"DELETE","path":"/collections/{id}","access":"session","response":"json"},
  deleteCollectionsByIdItemsByProjectId: {"method":"DELETE","path":"/collections/{id}/items/{projectId}","access":"session","response":"json"},
  deleteCommunityCommentsById: {"method":"DELETE","path":"/community/comments/{id}","access":"session","response":"json"},
  deleteCommunityPostsById: {"method":"DELETE","path":"/community/posts/{id}","access":"session","response":"json"},
  deleteCommunityThemesById: {"method":"DELETE","path":"/community-themes/{id}","access":"session","response":"void"},
  deleteDiscordAccount: {"method":"DELETE","path":"/discord/account","access":"session","response":"json"},
  deleteDiscordRoles: {"method":"DELETE","path":"/discord/roles","access":"session","response":"json"},
  deleteE2eeBackupVersionByVersion: {"method":"DELETE","path":"/e2ee/backup/version/{version}","access":"session","response":"json"},
  deleteE2eeDevicesByDeviceId: {"method":"DELETE","path":"/e2ee/devices/{deviceId}","access":"session","response":"json"},
  deleteMeAccount: {"method":"DELETE","path":"/me/account","access":"session","body":"json","response":"json"},
  deleteMeApiKeysById: {"method":"DELETE","path":"/me/api-keys/{id}","access":"session","response":"json"},
  deleteMeBlocksByUserId: {"method":"DELETE","path":"/me/blocks/{userId}","access":"session","response":"json"},
  deleteMeNotifications: {"method":"DELETE","path":"/me/notifications","access":"session","response":"json"},
  deleteMeNotificationsById: {"method":"DELETE","path":"/me/notifications/{id}","access":"session","response":"json"},
  deleteMePushSubscriptions: {"method":"DELETE","path":"/me/push-subscriptions","access":"session","body":"json","response":"json"},
  deleteMeThemesById: {"method":"DELETE","path":"/me/themes/{id}","access":"session","response":"void"},
  deleteMeThemesByIdDraft: {"method":"DELETE","path":"/me/themes/{id}/draft","access":"session","response":"json"},
  deleteMeThemesByIdPublish: {"method":"DELETE","path":"/me/themes/{id}/publish","access":"session","response":"json"},
  deleteProjectsBySlugCommentsByCommentId: {"method":"DELETE","path":"/projects/{slug}/comments/{commentId}","access":"session","response":"json"},
  deleteProjectsBySlugRating: {"method":"DELETE","path":"/projects/{slug}/rating","access":"session","response":"json"},
  deleteTeamRequestsById: {"method":"DELETE","path":"/team-requests/{id}","access":"session","response":"json"},
  deleteTeamsBySlugAgendaByEntryId: {"method":"DELETE","path":"/teams/{slug}/agenda/{entryId}","access":"session","response":"json"},
  deleteTeamsBySlugDiscordChannelsByChannelRef: {"method":"DELETE","path":"/teams/{slug}/discord/channels/{channelRef}","access":"session","response":"json"},
  deleteTeamsBySlugDiscordGuildsByGuildRef: {"method":"DELETE","path":"/teams/{slug}/discord/guilds/{guildRef}","access":"session","response":"json"},
  deleteTeamsBySlugDiscordGuildsByGuildRefRoleMenu: {"method":"DELETE","path":"/teams/{slug}/discord/guilds/{guildRef}/role-menu","access":"session","response":"json"},
  deleteTeamsBySlugFeedByPostId: {"method":"DELETE","path":"/teams/{slug}/feed/{postId}","access":"session","response":"json"},
  deleteTeamsBySlugMangadexAccount: {"method":"DELETE","path":"/teams/{slug}/mangadex/account","access":"session","response":"json"},
  deleteTierListsById: {"method":"DELETE","path":"/tier-lists/{id}","access":"session","response":"json"},
  deleteTierListsByIdCollaboratorsByUserId: {"method":"DELETE","path":"/tier-lists/{id}/collaborators/{userId}","access":"session","response":"json"},
  deleteTierListsByIdCommentsByCommentId: {"method":"DELETE","path":"/tier-lists/{id}/comments/{commentId}","access":"session","response":"json"},
  deleteTierListsByIdFavorite: {"method":"DELETE","path":"/tier-lists/{id}/favorite","access":"session","response":"json"},
  deleteTierListsByIdItemsByProjectId: {"method":"DELETE","path":"/tier-lists/{id}/items/{projectId}","access":"session","response":"json"},
  getActivity: {"method":"GET","path":"/activity","access":"public","response":"json"},
  getAdminArticleCommentsByIdHistory: {"method":"GET","path":"/admin/article-comments/{id}/history","access":"admin","response":"json"},
  getAdminAuditLog: {"method":"GET","path":"/admin/audit-log","access":"admin","response":"json"},
  getAdminAuthors: {"method":"GET","path":"/admin/authors","access":"session","response":"json"},
  getAdminAuthorsById: {"method":"GET","path":"/admin/authors/{id}","access":"session","response":"json"},
  getAdminAuthorsByIdStats: {"method":"GET","path":"/admin/authors/{id}/stats","access":"session","response":"json"},
  getAdminAuthorsByIdStatsDashboard: {"method":"GET","path":"/admin/authors/{id}/stats/dashboard","access":"session","response":"json"},
  getAdminAuthorsOptions: {"method":"GET","path":"/admin/authors/options","access":"session","response":"json"},
  getAdminBlogCommentsByIdHistory: {"method":"GET","path":"/admin/blog/comments/{id}/history","access":"admin","response":"json"},
  getAdminCleanupEmptyChapters: {"method":"GET","path":"/admin/cleanup/empty-chapters","access":"admin","response":"json"},
  getAdminCleanupOrphanFiles: {"method":"GET","path":"/admin/cleanup/orphan-files","access":"admin","response":"json"},
  getAdminCleanupUnusedAccounts: {"method":"GET","path":"/admin/cleanup/unused-accounts","access":"admin","response":"json"},
  getAdminCommentsByIdHistory: {"method":"GET","path":"/admin/comments/{id}/history","access":"admin","response":"json"},
  getAdminDashboard: {"method":"GET","path":"/admin/dashboard","access":"admin","response":"json"},
  getAdminDiscord: {"method":"GET","path":"/admin/discord","access":"admin","response":"json"},
  getAdminDiscordGuildsByIdChannels: {"method":"GET","path":"/admin/discord/guilds/{id}/channels","access":"admin","response":"json"},
  getAdminDocumentationByIdRevisions: {"method":"GET","path":"/admin/documentation/{id}/revisions","access":"admin","response":"json"},
  getAdminEventThemes: {"method":"GET","path":"/admin/event-themes","access":"admin","response":"json"},
  getAdminHealth: {"method":"GET","path":"/admin/health","access":"admin","response":"json"},
  getAdminHealthStorage: {"method":"GET","path":"/admin/health/storage","access":"admin","response":"json"},
  getAdminIncompleteProjects: {"method":"GET","path":"/admin/incomplete-projects","access":"admin","response":"json"},
  getAdminIncompleteProjectsAnilistBannersByMediaId: {"method":"GET","path":"/admin/incomplete-projects/anilist-banners/{mediaId}","access":"admin","response":"raw"},
  getAdminIncompleteProjectsByIdSuggestions: {"method":"GET","path":"/admin/incomplete-projects/{id}/suggestions","access":"admin","response":"json"},
  getAdminLicenseCheck: {"method":"GET","path":"/admin/license-check","access":"admin","response":"json"},
  getAdminLicenseCheckStream: {"method":"GET","path":"/admin/license-check/stream","access":"admin","response":"raw"},
  getAdminMangadexCoversByMangaIdByFileName: {"method":"GET","path":"/admin/mangadex-covers/{mangaId}/{fileName}","access":"session","response":"raw"},
  getAdminMangadexImports: {"method":"GET","path":"/admin/mangadex/imports","access":"session","response":"json"},
  getAdminMangadexImportsById: {"method":"GET","path":"/admin/mangadex/imports/{id}","access":"session","response":"json"},
  getAdminMangadexProjectsBySlugSync: {"method":"GET","path":"/admin/mangadex/projects/{slug}/sync","access":"session","response":"json"},
  getAdminMangadexSearch: {"method":"GET","path":"/admin/mangadex/search","access":"session","response":"json"},
  getAdminMangadexSeriesByMangaId: {"method":"GET","path":"/admin/mangadex/series/{mangaId}","access":"session","response":"json"},
  getAdminMangadexStats: {"method":"GET","path":"/admin/mangadex/stats","access":"session","response":"json"},
  getAdminMangadexTeamsByTeamIdImportAll: {"method":"GET","path":"/admin/mangadex/teams/{teamId}/import-all","access":"session","response":"json"},
  getAdminMangadexTeamsByTeamIdSeries: {"method":"GET","path":"/admin/mangadex/teams/{teamId}/series","access":"session","response":"json"},
  getAdminModerationQueue: {"method":"GET","path":"/admin/moderation/queue","access":"admin","response":"json"},
  getAdminProgression: {"method":"GET","path":"/admin/progression","access":"admin","response":"json"},
  getAdminProjects: {"method":"GET","path":"/admin/projects","access":"session","response":"json"},
  getAdminProjectsBySlug: {"method":"GET","path":"/admin/projects/{slug}","access":"session","response":"json"},
  getAdminProjectsBySlugChaptersByChapterIdMangadex: {"method":"GET","path":"/admin/projects/{slug}/chapters/{chapterId}/mangadex","access":"session","response":"json"},
  getAdminProjectsBySlugChaptersByChapterIdPageEdits: {"method":"GET","path":"/admin/projects/{slug}/chapters/{chapterId}/page-edits","access":"session","response":"json"},
  getAdminProjectsBySlugChaptersByChapterIdPageNotes: {"method":"GET","path":"/admin/projects/{slug}/chapters/{chapterId}/page-notes","access":"session","response":"json"},
  getAdminProjectsBySlugEditorFonts: {"method":"GET","path":"/admin/projects/{slug}/editor-fonts","access":"session","response":"json"},
  getAdminProjectsBySlugEditorStyles: {"method":"GET","path":"/admin/projects/{slug}/editor-styles","access":"session","response":"json"},
  getAdminProjectsBySlugInpaintModel: {"method":"GET","path":"/admin/projects/{slug}/inpaint-model","access":"session","response":"raw"},
  getAdminProjectsBySlugMangadex: {"method":"GET","path":"/admin/projects/{slug}/mangadex","access":"session","response":"json"},
  getAdminProjectsBySlugOverrides: {"method":"GET","path":"/admin/projects/{slug}/overrides","access":"admin","response":"json"},
  getAdminProjectsBySlugStatsDashboard: {"method":"GET","path":"/admin/projects/{slug}/stats/dashboard","access":"session","response":"json"},
  getAdminProjectsMangadexLookup: {"method":"GET","path":"/admin/projects/mangadex-lookup","access":"session","response":"json"},
  getAdminProjectsTeamOptions: {"method":"GET","path":"/admin/projects/team-options","access":"session","response":"json"},
  getAdminProjectsTitleMatches: {"method":"GET","path":"/admin/projects/title-matches","access":"session","response":"json"},
  getAdminRoles: {"method":"GET","path":"/admin/roles","access":"admin","response":"json"},
  getAdminSanctionsUsersByUserId: {"method":"GET","path":"/admin/sanctions/users/{userId}","access":"admin","response":"json"},
  getAdminSearch: {"method":"GET","path":"/admin/search","access":"admin","response":"json"},
  getAdminSettings: {"method":"GET","path":"/admin/settings","access":"admin","response":"json"},
  getAdminSettingsSite: {"method":"GET","path":"/admin/settings/site","access":"admin","response":"json"},
  getAdminTags: {"method":"GET","path":"/admin/tags","access":"admin","response":"json"},
  getAdminTasks: {"method":"GET","path":"/admin/tasks","access":"admin","response":"json"},
  getAdminTasksById: {"method":"GET","path":"/admin/tasks/{id}","access":"admin","response":"json"},
  getAdminTasksLabels: {"method":"GET","path":"/admin/tasks/labels","access":"admin","response":"json"},
  getAdminTeamRequests: {"method":"GET","path":"/admin/team-requests","access":"admin","response":"json"},
  getAdminTeamRequestsCount: {"method":"GET","path":"/admin/team-requests/count","access":"admin","response":"json"},
  getAdminTeams: {"method":"GET","path":"/admin/teams","access":"session","response":"json"},
  getAdminTeamsById: {"method":"GET","path":"/admin/teams/{id}","access":"session","response":"json"},
  getAdminTeamsByIdCapabilities: {"method":"GET","path":"/admin/teams/{id}/capabilities","access":"session","response":"json"},
  getAdminTeamsByIdMemberCandidates: {"method":"GET","path":"/admin/teams/{id}/member-candidates","access":"session","response":"json"},
  getAdminTeamsByIdMembers: {"method":"GET","path":"/admin/teams/{id}/members","access":"session","response":"json"},
  getAdminTeamsByIdMembersByUserIdRoles: {"method":"GET","path":"/admin/teams/{id}/members/{userId}/roles","access":"session","response":"json"},
  getAdminTeamsByIdRoles: {"method":"GET","path":"/admin/teams/{id}/roles","access":"session","response":"json"},
  getAdminTeamsMine: {"method":"GET","path":"/admin/teams/mine","access":"session","response":"json"},
  getAdminTickets: {"method":"GET","path":"/admin/tickets","access":"admin","response":"json"},
  getAdminTicketsMacros: {"method":"GET","path":"/admin/tickets/macros","access":"admin","response":"json"},
  getAdminTierListCommentsByIdHistory: {"method":"GET","path":"/admin/tier-list-comments/{id}/history","access":"admin","response":"json"},
  getAdminTrending: {"method":"GET","path":"/admin/trending","access":"admin","response":"json"},
  getAdminUploads: {"method":"GET","path":"/admin/uploads","access":"session","response":"json"},
  getAdminUploadsById: {"method":"GET","path":"/admin/uploads/{id}","access":"session","response":"json"},
  getAdminUsers: {"method":"GET","path":"/admin/users","access":"admin","response":"json"},
  getAdminUsersByIdOverview: {"method":"GET","path":"/admin/users/{id}/overview","access":"admin","response":"json"},
  getAdminUsersByIdRoles: {"method":"GET","path":"/admin/users/{id}/roles","access":"admin","response":"json"},
  getAdminUsersStaff: {"method":"GET","path":"/admin/users/staff","access":"admin","response":"json"},
  getArticles: {"method":"GET","path":"/articles","access":"public","response":"json"},
  getArticlesById: {"method":"GET","path":"/articles/{id}","access":"admin","response":"json"},
  getArticlesBySlug: {"method":"GET","path":"/articles/{slug}","access":"public","response":"json"},
  getArticlesBySlugComments: {"method":"GET","path":"/articles/{slug}/comments","access":"public","response":"json"},
  getAuthMe: {"method":"GET","path":"/auth/me","access":"session","response":"json"},
  getAuthors: {"method":"GET","path":"/authors","access":"public","apiKeyScope":"authors:read","response":"json"},
  getAuthorsBySlug: {"method":"GET","path":"/authors/{slug}","access":"public","apiKeyScope":"authors:read","response":"json"},
  getAuthorsBySlugStats: {"method":"GET","path":"/authors/{slug}/stats","access":"public","response":"json"},
  getAuthPasskeys: {"method":"GET","path":"/auth/passkeys","access":"session","response":"json"},
  getAuthRecovery: {"method":"GET","path":"/auth/recovery","access":"session","response":"json"},
  getAuthSessions: {"method":"GET","path":"/auth/sessions","access":"session","response":"json"},
  getAuthTotp: {"method":"GET","path":"/auth/totp","access":"session","response":"json"},
  getChat: {"method":"GET","path":"/chat","access":"session","response":"json"},
  getChatByIdMessages: {"method":"GET","path":"/chat/{id}/messages","access":"session","response":"json"},
  getChatDirectByUserId: {"method":"GET","path":"/chat/direct/{userId}","access":"session","response":"json"},
  getChatUnreadCount: {"method":"GET","path":"/chat/unread-count","access":"session","response":"json"},
  getCollections: {"method":"GET","path":"/collections","access":"public","response":"json"},
  getCollectionsById: {"method":"GET","path":"/collections/{id}","access":"public","response":"json"},
  getCollectionsMine: {"method":"GET","path":"/collections/mine","access":"session","response":"json"},
  getCommunityOverview: {"method":"GET","path":"/community/overview","access":"public","response":"json"},
  getCommunityPosts: {"method":"GET","path":"/community/posts","access":"public","response":"json"},
  getCommunityPostsById: {"method":"GET","path":"/community/posts/{id}","access":"public","response":"json"},
  getCommunityPostsByIdComments: {"method":"GET","path":"/community/posts/{id}/comments","access":"public","response":"json"},
  getCommunityTags: {"method":"GET","path":"/community/tags","access":"public","response":"json"},
  getCommunityThemes: {"method":"GET","path":"/community-themes","access":"public","response":"json"},
  getCommunityThemesById: {"method":"GET","path":"/community-themes/{id}","access":"public","response":"json"},
  getDiscordAccount: {"method":"GET","path":"/discord/account","access":"session","response":"json"},
  getDiscordActivityConfig: {"method":"GET","path":"/discord/activity/config","access":"public","response":"json"},
  getDiscordActivityOptions: {"method":"GET","path":"/discord/activity/options","access":"activity","response":"json"},
  getDiscordActivityRoomsByInstanceId: {"method":"GET","path":"/discord/activity/rooms/{instanceId}","access":"activity","response":"json"},
  getDiscordActivityRoomsByInstanceIdCoversBySlug: {"method":"GET","path":"/discord/activity/rooms/{instanceId}/covers/{slug}","access":"activity","response":"raw"},
  getDiscordActivityRoomsByInstanceIdQuizCover: {"method":"GET","path":"/discord/activity/rooms/{instanceId}/quiz/cover","access":"activity","response":"raw"},
  getDiscordActivityRoomsByInstanceIdReadingPagesByIndex: {"method":"GET","path":"/discord/activity/rooms/{instanceId}/reading/pages/{index}","access":"activity","response":"raw"},
  getDiscordActivityWorks: {"method":"GET","path":"/discord/activity/works","access":"activity","response":"json"},
  getDiscordOauthCallback: {"method":"GET","path":"/discord/oauth/callback","access":"public","response":"raw"},
  getDocumentation: {"method":"GET","path":"/documentation","access":"public","response":"json"},
  getE2eeAccountDataByType: {"method":"GET","path":"/e2ee/account-data/{type}","access":"session","response":"json"},
  getE2eeBackupKeys: {"method":"GET","path":"/e2ee/backup/keys","access":"session","response":"json"},
  getE2eeBackupVersion: {"method":"GET","path":"/e2ee/backup/version","access":"session","response":"json"},
  getE2eeDevices: {"method":"GET","path":"/e2ee/devices","access":"session","response":"json"},
  getE2eeStatus: {"method":"GET","path":"/e2ee/status","access":"session","response":"json"},
  getE2eeSync: {"method":"GET","path":"/e2ee/sync","access":"session","response":"json"},
  getEventThemes: {"method":"GET","path":"/event-themes","access":"public","response":"json"},
  getFaviconsByHost: {"method":"GET","path":"/favicons/{host}","access":"public","response":"raw"},
  getGifsSearch: {"method":"GET","path":"/gifs/search","access":"session","response":"json"},
  getGifsTrending: {"method":"GET","path":"/gifs/trending","access":"session","response":"json"},
  getHomeLayout: {"method":"GET","path":"/home-layout","access":"public","response":"json"},
  getLeaderboard: {"method":"GET","path":"/leaderboard","access":"public","response":"json"},
  getMeApiKeys: {"method":"GET","path":"/me/api-keys","access":"session","response":"json"},
  getMeBlocks: {"method":"GET","path":"/me/blocks","access":"session","response":"json"},
  getMeComments: {"method":"GET","path":"/me/comments","access":"session","response":"json"},
  getMeContinueReading: {"method":"GET","path":"/me/continue-reading","access":"session","response":"json"},
  getMeEvents: {"method":"GET","path":"/me/events","access":"session","response":"raw"},
  getMeExportData: {"method":"GET","path":"/me/export-data","access":"session","response":"json"},
  getMeFavorites: {"method":"GET","path":"/me/favorites","access":"session","response":"json"},
  getMeHistory: {"method":"GET","path":"/me/history","access":"session","response":"json"},
  getMeLevel: {"method":"GET","path":"/me/level","access":"session","response":"json"},
  getMeLibrary: {"method":"GET","path":"/me/library","access":"session","response":"json"},
  getMeLibrarySummary: {"method":"GET","path":"/me/library/summary","access":"session","response":"json"},
  getMeNotifications: {"method":"GET","path":"/me/notifications","access":"session","response":"json"},
  getMeNotificationsUnreadCount: {"method":"GET","path":"/me/notifications/unread-count","access":"session","response":"json"},
  getMePreferences: {"method":"GET","path":"/me/preferences","access":"session","response":"json"},
  getMeProgression: {"method":"GET","path":"/me/progression","access":"session","response":"json"},
  getMeProgressionEvents: {"method":"GET","path":"/me/progression/events","access":"session","response":"json"},
  getMeThemes: {"method":"GET","path":"/me/themes","access":"session","response":"json"},
  getMeThemesActive: {"method":"GET","path":"/me/themes/active","access":"session","response":"json"},
  getMeThemesById: {"method":"GET","path":"/me/themes/{id}","access":"session","response":"json"},
  getMeTickets: {"method":"GET","path":"/me/tickets","access":"session","response":"json"},
  getProjects: {"method":"GET","path":"/projects","access":"public","apiKeyScope":"projects:read","response":"json"},
  getProjectsBySlug: {"method":"GET","path":"/projects/{slug}","access":"public","apiKeyScope":"projects:read","response":"json"},
  getProjectsBySlugChaptersByChapterSlug: {"method":"GET","path":"/projects/{slug}/chapters/{chapterSlug}","access":"public","response":"json"},
  getProjectsBySlugChaptersByChapterSlugComments: {"method":"GET","path":"/projects/{slug}/chapters/{chapterSlug}/comments","access":"public","response":"json"},
  getProjectsBySlugComments: {"method":"GET","path":"/projects/{slug}/comments","access":"public","response":"json"},
  getProjectsBySlugDailyViews: {"method":"GET","path":"/projects/{slug}/daily-views","access":"public","response":"json"},
  getProjectsBySlugMostLikedChapters: {"method":"GET","path":"/projects/{slug}/most-liked-chapters","access":"public","response":"json"},
  getProjectsBySlugRelated: {"method":"GET","path":"/projects/{slug}/related","access":"public","response":"json"},
  getProjectsBySlugStats: {"method":"GET","path":"/projects/{slug}/stats","access":"public","response":"json"},
  getProjectsBySlugWikiPages: {"method":"GET","path":"/projects/{slug}/wiki/pages","access":"public","response":"json"},
  getProjectsBySlugWikiPagesByPageSlug: {"method":"GET","path":"/projects/{slug}/wiki/pages/{pageSlug}","access":"public","response":"json"},
  getProjectsBySlugWikiRevisions: {"method":"GET","path":"/projects/{slug}/wiki/revisions","access":"session","response":"json"},
  getProjectsFeatured: {"method":"GET","path":"/projects/featured","access":"public","response":"json"},
  getProjectsLatestChapters: {"method":"GET","path":"/projects/latest-chapters","access":"public","apiKeyScope":"chapters:read","response":"json"},
  getProjectsMostLiked: {"method":"GET","path":"/projects/most-liked","access":"public","response":"json"},
  getProjectsNewSeries: {"method":"GET","path":"/projects/new-series","access":"public","response":"json"},
  getProjectsRandom: {"method":"GET","path":"/projects/random","access":"public","response":"json"},
  getProjectsRecentComments: {"method":"GET","path":"/projects/recent-comments","access":"public","response":"json"},
  getProjectsTrending: {"method":"GET","path":"/projects/trending","access":"public","response":"json"},
  getSearch: {"method":"GET","path":"/search","access":"public","response":"json"},
  getSearchSuggest: {"method":"GET","path":"/search/suggest","access":"public","response":"json"},
  getSiteSettings: {"method":"GET","path":"/site-settings","access":"public","response":"json"},
  getSiteSettingsStatus: {"method":"GET","path":"/site-settings/status","access":"public","response":"json"},
  getStats: {"method":"GET","path":"/stats","access":"public","apiKeyScope":"stats:read","response":"json"},
  getTags: {"method":"GET","path":"/tags","access":"public","apiKeyScope":"tags:read","response":"json"},
  getTagsByTag: {"method":"GET","path":"/tags/{tag}","access":"public","response":"json"},
  getTeamRequestsMine: {"method":"GET","path":"/team-requests/mine","access":"session","response":"json"},
  getTeamRequestsSlugCheck: {"method":"GET","path":"/team-requests/slug-check","access":"session","response":"json"},
  getTeams: {"method":"GET","path":"/teams","access":"public","apiKeyScope":"teams:read","response":"json"},
  getTeamsBySlug: {"method":"GET","path":"/teams/{slug}","access":"public","apiKeyScope":"teams:read","response":"json"},
  getTeamsBySlugAchievements: {"method":"GET","path":"/teams/{slug}/achievements","access":"public","response":"json"},
  getTeamsBySlugAgenda: {"method":"GET","path":"/teams/{slug}/agenda","access":"public","response":"json"},
  getTeamsBySlugDiscord: {"method":"GET","path":"/teams/{slug}/discord","access":"session","response":"json"},
  getTeamsBySlugDiscordGuildsByGuildRefChannels: {"method":"GET","path":"/teams/{slug}/discord/guilds/{guildRef}/channels","access":"session","response":"json"},
  getTeamsBySlugDiscordGuildsByGuildRefHealth: {"method":"GET","path":"/teams/{slug}/discord/guilds/{guildRef}/health","access":"session","response":"json"},
  getTeamsBySlugDiscordGuildsByGuildRefRoles: {"method":"GET","path":"/teams/{slug}/discord/guilds/{guildRef}/roles","access":"session","response":"json"},
  getTeamsBySlugFeed: {"method":"GET","path":"/teams/{slug}/feed","access":"public","response":"json"},
  getTeamsBySlugMangadex: {"method":"GET","path":"/teams/{slug}/mangadex","access":"session","response":"json"},
  getTeamsBySlugStats: {"method":"GET","path":"/teams/{slug}/stats","access":"session","response":"json"},
  getTeamsBySlugStatsDashboard: {"method":"GET","path":"/teams/{slug}/stats/dashboard","access":"session","response":"json"},
  getTierLists: {"method":"GET","path":"/tier-lists","access":"public","response":"json"},
  getTierListsById: {"method":"GET","path":"/tier-lists/{id}","access":"public","response":"json"},
  getTierListsByIdComments: {"method":"GET","path":"/tier-lists/{id}/comments","access":"public","response":"json"},
  getTierListsByIdShareJpg: {"method":"GET","path":"/tier-lists/{id}/share.jpg","access":"public","response":"raw"},
  getTierListsByIdSimilar: {"method":"GET","path":"/tier-lists/{id}/similar","access":"public","response":"json"},
  getTierListsByIdVersions: {"method":"GET","path":"/tier-lists/{id}/versions","access":"session","response":"json"},
  getTierListsByIdVersionsByVersionId: {"method":"GET","path":"/tier-lists/{id}/versions/{versionId}","access":"session","response":"json"},
  getTierListsMine: {"method":"GET","path":"/tier-lists/mine","access":"session","response":"json"},
  getTierListsStats: {"method":"GET","path":"/tier-lists/stats","access":"public","response":"json"},
  getToolsInpaintModel: {"method":"GET","path":"/tools/inpaint-model","access":"session","response":"raw"},
  getUploadsInfo: {"method":"GET","path":"/uploads/info","access":"public","response":"json"},
  getUsersById: {"method":"GET","path":"/users/{id}","access":"public","response":"json"},
  getUsersMe: {"method":"GET","path":"/users/me","access":"session","response":"json"},
  getUsersSearch: {"method":"GET","path":"/users/search","access":"session","response":"json"},
  patchAdminDiscordChannelsById: {"method":"PATCH","path":"/admin/discord/channels/{id}","access":"admin","body":"json","response":"json"},
  patchAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId: {"method":"PATCH","path":"/admin/projects/{slug}/chapters/{chapterId}/page-notes/{noteId}","access":"session","body":"json","response":"json"},
  patchAdminTasksById: {"method":"PATCH","path":"/admin/tasks/{id}","access":"admin","body":"json","response":"json"},
  patchAdminTasksByIdSubtasksBySubtaskId: {"method":"PATCH","path":"/admin/tasks/{id}/subtasks/{subtaskId}","access":"admin","body":"json","response":"json"},
  patchDiscordAccount: {"method":"PATCH","path":"/discord/account","access":"session","response":"json"},
  patchTeamsBySlugDiscordChannelsByChannelRef: {"method":"PATCH","path":"/teams/{slug}/discord/channels/{channelRef}","access":"session","body":"json","response":"json"},
  postAdminArticleCommentsByIdRestore: {"method":"POST","path":"/admin/article-comments/{id}/restore","access":"admin","response":"json"},
  postAdminAuthors: {"method":"POST","path":"/admin/authors","access":"session","body":"json","response":"json"},
  postAdminAuthorsBulkDelete: {"method":"POST","path":"/admin/authors/bulk/delete","access":"admin","response":"json"},
  postAdminAuthorsByIdAvatar: {"method":"POST","path":"/admin/authors/{id}/avatar","access":"session","body":"multipart","response":"json"},
  postAdminAuthorsByIdBanner: {"method":"POST","path":"/admin/authors/{id}/banner","access":"session","body":"multipart","response":"json"},
  postAdminBlogCommentsByIdRestore: {"method":"POST","path":"/admin/blog/comments/{id}/restore","access":"admin","response":"json"},
  postAdminBlogPostsByIdRestore: {"method":"POST","path":"/admin/blog/posts/{id}/restore","access":"admin","response":"json"},
  postAdminCleanupOrphanFilesDelete: {"method":"POST","path":"/admin/cleanup/orphan-files/delete","access":"admin","body":"json","response":"json"},
  postAdminCleanupUnusedAccountsDelete: {"method":"POST","path":"/admin/cleanup/unused-accounts/delete","access":"admin","body":"json","response":"json"},
  postAdminCommentsByIdRestore: {"method":"POST","path":"/admin/comments/{id}/restore","access":"admin","response":"json"},
  postAdminDiscordDeliveriesByIdRetry: {"method":"POST","path":"/admin/discord/deliveries/{id}/retry","access":"admin","response":"json"},
  postAdminDiscordGuildsByIdChannels: {"method":"POST","path":"/admin/discord/guilds/{id}/channels","access":"admin","body":"json","response":"json"},
  postAdminDiscordGuildsByIdReview: {"method":"POST","path":"/admin/discord/guilds/{id}/review","access":"admin","body":"json","response":"json"},
  postAdminDocumentation: {"method":"POST","path":"/admin/documentation","access":"admin","body":"json","response":"json"},
  postAdminIncompleteProjectsByIdApply: {"method":"POST","path":"/admin/incomplete-projects/{id}/apply","access":"admin","body":"json","response":"json"},
  postAdminMangadexImport: {"method":"POST","path":"/admin/mangadex/import","access":"session","body":"json","response":"raw"},
  postAdminMangadexImports: {"method":"POST","path":"/admin/mangadex/imports","access":"session","body":"json","response":"json"},
  postAdminMangadexProjectsBySlugSyncRun: {"method":"POST","path":"/admin/mangadex/projects/{slug}/sync/run","access":"session","body":"json","response":"json"},
  postAdminMangadexTeamsByTeamIdImportAll: {"method":"POST","path":"/admin/mangadex/teams/{teamId}/import-all","access":"session","response":"json"},
  postAdminModerationReportsByTicketIdResolve: {"method":"POST","path":"/admin/moderation/reports/{ticketId}/resolve","access":"admin","body":"json","response":"json"},
  postAdminModerationWikiByRevisionIdReview: {"method":"POST","path":"/admin/moderation/wiki/{revisionId}/review","access":"admin","body":"json","response":"json"},
  postAdminProjects: {"method":"POST","path":"/admin/projects","access":"session","body":"json","response":"json"},
  postAdminProjectsBulkVisibility: {"method":"POST","path":"/admin/projects/bulk/visibility","access":"admin","body":"json","response":"json"},
  postAdminProjectsBySlugChapters: {"method":"POST","path":"/admin/projects/{slug}/chapters","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugChaptersBulkDelete: {"method":"POST","path":"/admin/projects/{slug}/chapters/bulk/delete","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugChaptersBulkStatus: {"method":"POST","path":"/admin/projects/{slug}/chapters/bulk/status","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugChaptersBulkTeams: {"method":"POST","path":"/admin/projects/{slug}/chapters/bulk/teams","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugChaptersBulkVolume: {"method":"POST","path":"/admin/projects/{slug}/chapters/bulk/volume","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugChaptersByChapterIdMangadex: {"method":"POST","path":"/admin/projects/{slug}/chapters/{chapterId}/mangadex","access":"session","response":"json"},
  postAdminProjectsBySlugChaptersByChapterIdPageEditsExport: {"method":"POST","path":"/admin/projects/{slug}/chapters/{chapterId}/page-edits/export","access":"session","response":"json"},
  postAdminProjectsBySlugChaptersByChapterIdPageEditsPresence: {"method":"POST","path":"/admin/projects/{slug}/chapters/{chapterId}/page-edits/presence","access":"session","response":"json"},
  postAdminProjectsBySlugChaptersByChapterIdPageNotes: {"method":"POST","path":"/admin/projects/{slug}/chapters/{chapterId}/page-notes","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugChaptersByChapterIdPages: {"method":"POST","path":"/admin/projects/{slug}/chapters/{chapterId}/pages","access":"session","response":"json"},
  postAdminProjectsBySlugChaptersByChapterIdTranslationNotes: {"method":"POST","path":"/admin/projects/{slug}/chapters/{chapterId}/translation-notes","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugChaptersReorder: {"method":"POST","path":"/admin/projects/{slug}/chapters/reorder","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugEditorFonts: {"method":"POST","path":"/admin/projects/{slug}/editor-fonts","access":"session","response":"json"},
  postAdminProjectsBySlugEditorStyles: {"method":"POST","path":"/admin/projects/{slug}/editor-styles","access":"session","body":"json","response":"json"},
  postAdminProjectsBySlugMangadexCover: {"method":"POST","path":"/admin/projects/{slug}/mangadex-cover","access":"session","body":"json","response":"json"},
  postAdminRoles: {"method":"POST","path":"/admin/roles","access":"admin","body":"json","response":"json"},
  postAdminSanctionsByIdRevoke: {"method":"POST","path":"/admin/sanctions/{id}/revoke","access":"admin","response":"json"},
  postAdminSanctionsUsersByUserId: {"method":"POST","path":"/admin/sanctions/users/{userId}","access":"admin","body":"json","response":"json"},
  postAdminSettingsDiscordWebhookTest: {"method":"POST","path":"/admin/settings/discord-webhook/test","access":"admin","body":"json","response":"json"},
  postAdminTags: {"method":"POST","path":"/admin/tags","access":"admin","body":"json","response":"json"},
  postAdminTagsBulkDelete: {"method":"POST","path":"/admin/tags/bulk/delete","access":"admin","body":"json","response":"json"},
  postAdminTagsByIdMerge: {"method":"POST","path":"/admin/tags/{id}/merge","access":"admin","body":"json","response":"json"},
  postAdminTasks: {"method":"POST","path":"/admin/tasks","access":"admin","body":"json","response":"json"},
  postAdminTasksByIdAssignees: {"method":"POST","path":"/admin/tasks/{id}/assignees","access":"admin","body":"json","response":"json"},
  postAdminTasksByIdComments: {"method":"POST","path":"/admin/tasks/{id}/comments","access":"admin","body":"json","response":"json"},
  postAdminTasksByIdLabels: {"method":"POST","path":"/admin/tasks/{id}/labels","access":"admin","body":"json","response":"json"},
  postAdminTasksByIdRestore: {"method":"POST","path":"/admin/tasks/{id}/restore","access":"admin","response":"json"},
  postAdminTasksByIdSubtasks: {"method":"POST","path":"/admin/tasks/{id}/subtasks","access":"admin","body":"json","response":"json"},
  postAdminTasksLabels: {"method":"POST","path":"/admin/tasks/labels","access":"admin","body":"json","response":"json"},
  postAdminTeamRequestsByIdApprove: {"method":"POST","path":"/admin/team-requests/{id}/approve","access":"admin","response":"json"},
  postAdminTeamRequestsByIdReject: {"method":"POST","path":"/admin/team-requests/{id}/reject","access":"admin","body":"json","response":"json"},
  postAdminTeamRequestsByIdRequestInfo: {"method":"POST","path":"/admin/team-requests/{id}/request-info","access":"admin","body":"json","response":"json"},
  postAdminTeams: {"method":"POST","path":"/admin/teams","access":"admin","body":"json","response":"json"},
  postAdminTeamsByIdAvatar: {"method":"POST","path":"/admin/teams/{id}/avatar","access":"session","body":"multipart","response":"json"},
  postAdminTeamsByIdBanner: {"method":"POST","path":"/admin/teams/{id}/banner","access":"session","body":"multipart","response":"json"},
  postAdminTeamsByIdMembers: {"method":"POST","path":"/admin/teams/{id}/members","access":"session","body":"json","response":"json"},
  postAdminTeamsByIdRoles: {"method":"POST","path":"/admin/teams/{id}/roles","access":"session","body":"json","response":"json"},
  postAdminTeamsByIdTransferOwnership: {"method":"POST","path":"/admin/teams/{id}/transfer-ownership","access":"session","body":"json","response":"json"},
  postAdminTicketsById: {"method":"POST","path":"/admin/tickets/{id}","access":"admin","body":"json","response":"json"},
  postAdminTicketsByIdReply: {"method":"POST","path":"/admin/tickets/{id}/reply","access":"admin","body":"json","response":"json"},
  postAdminTierListCommentsByIdRestore: {"method":"POST","path":"/admin/tier-list-comments/{id}/restore","access":"admin","response":"json"},
  postAdminTrendingRecompute: {"method":"POST","path":"/admin/trending/recompute","access":"admin","response":"json"},
  postAdminUploads: {"method":"POST","path":"/admin/uploads","access":"session","body":"json","response":"json"},
  postAdminUploadsByIdCancel: {"method":"POST","path":"/admin/uploads/{id}/cancel","access":"session","response":"json"},
  postAdminUploadsByIdClaim: {"method":"POST","path":"/admin/uploads/{id}/claim","access":"session","body":"json","response":"json"},
  postAdminUploadsByIdFinalize: {"method":"POST","path":"/admin/uploads/{id}/finalize","access":"session","body":"json","response":"json"},
  postAdminUploadsByIdHeartbeat: {"method":"POST","path":"/admin/uploads/{id}/heartbeat","access":"session","body":"json","response":"json"},
  postAdminUploadsByIdInterrupt: {"method":"POST","path":"/admin/uploads/{id}/interrupt","access":"session","body":"json","response":"json"},
  postAdminUploadsByIdPagesByPosition: {"method":"POST","path":"/admin/uploads/{id}/pages/{position}","access":"session","response":"json"},
  postAdminUploadsByIdPagesByPositionFail: {"method":"POST","path":"/admin/uploads/{id}/pages/{position}/fail","access":"session","body":"json","response":"json"},
  postAdminUploadsByIdPagesByPositionSkip: {"method":"POST","path":"/admin/uploads/{id}/pages/{position}/skip","access":"session","response":"json"},
  postAdminUploadsClear: {"method":"POST","path":"/admin/uploads/clear","access":"session","body":"json","response":"json"},
  postAdminUsers: {"method":"POST","path":"/admin/users","access":"admin","body":"json","response":"json"},
  postAdminUsersBulkDelete: {"method":"POST","path":"/admin/users/bulk/delete","access":"admin","body":"json","response":"json"},
  postAdminUsersBulkStatus: {"method":"POST","path":"/admin/users/bulk/status","access":"admin","body":"json","response":"json"},
  postAdminUsersByIdNotes: {"method":"POST","path":"/admin/users/{id}/notes","access":"admin","body":"json","response":"json"},
  postAdminUsersByIdSessionsRevoke: {"method":"POST","path":"/admin/users/{id}/sessions/revoke","access":"admin","response":"json"},
  postArticles: {"method":"POST","path":"/articles","access":"admin","body":"json","response":"json"},
  postArticlesBulkDelete: {"method":"POST","path":"/articles/bulk/delete","access":"admin","body":"json","response":"json"},
  postArticlesBulkStatus: {"method":"POST","path":"/articles/bulk/status","access":"admin","body":"json","response":"json"},
  postArticlesBySlugComments: {"method":"POST","path":"/articles/{slug}/comments","access":"admin","body":"json","response":"json"},
  postArticlesBySlugCommentsByCommentIdLike: {"method":"POST","path":"/articles/{slug}/comments/{commentId}/like","access":"session","response":"json"},
  postArticlesBySlugCommentsByCommentIdReport: {"method":"POST","path":"/articles/{slug}/comments/{commentId}/report","access":"session","body":"json","response":"json"},
  postAuthAvatar: {"method":"POST","path":"/auth/avatar","access":"session","body":"multipart","response":"json"},
  postAuthBanner: {"method":"POST","path":"/auth/banner","access":"session","body":"multipart","response":"json"},
  postAuthChangePassword: {"method":"POST","path":"/auth/change-password","access":"session","body":"json","response":"json"},
  postAuthChangeUsername: {"method":"POST","path":"/auth/change-username","access":"session","body":"json","response":"json"},
  postAuthLogin: {"method":"POST","path":"/auth/login","access":"public","body":"json","response":"json"},
  postAuthLogout: {"method":"POST","path":"/auth/logout","access":"public","response":"json"},
  postAuthorsBySlugFollow: {"method":"POST","path":"/authors/{slug}/follow","access":"session","response":"json"},
  postAuthPasskeysLoginOptions: {"method":"POST","path":"/auth/passkeys/login-options","access":"public","response":"json"},
  postAuthPasskeysLoginVerify: {"method":"POST","path":"/auth/passkeys/login-verify","access":"public","body":"json","response":"json"},
  postAuthPasskeysRegisterOptions: {"method":"POST","path":"/auth/passkeys/register-options","access":"session","response":"json"},
  postAuthPasskeysRegisterVerify: {"method":"POST","path":"/auth/passkeys/register-verify","access":"session","body":"json","response":"json"},
  postAuthRecovery: {"method":"POST","path":"/auth/recovery","access":"session","body":"json","response":"json"},
  postAuthRecoveryRedeem: {"method":"POST","path":"/auth/recovery/redeem","access":"public","body":"json","response":"json"},
  postAuthRegister: {"method":"POST","path":"/auth/register","access":"public","body":"json","response":"json"},
  postAuthSessionsRevokeOthers: {"method":"POST","path":"/auth/sessions/revoke-others","access":"session","response":"json"},
  postAuthTotpConfirm: {"method":"POST","path":"/auth/totp/confirm","access":"session","body":"json","response":"json"},
  postAuthTotpLoginVerify: {"method":"POST","path":"/auth/totp/login-verify","access":"public","body":"json","response":"json"},
  postAuthTotpSetup: {"method":"POST","path":"/auth/totp/setup","access":"session","body":"json","response":"json"},
  postChatByIdEncryption: {"method":"POST","path":"/chat/{id}/encryption","access":"session","response":"json"},
  postChatByIdMessages: {"method":"POST","path":"/chat/{id}/messages","access":"session","body":"json","response":"json"},
  postChatByIdTyping: {"method":"POST","path":"/chat/{id}/typing","access":"session","response":"void"},
  postChatDirectByUserIdConversation: {"method":"POST","path":"/chat/direct/{userId}/conversation","access":"session","response":"json"},
  postChatMessages: {"method":"POST","path":"/chat/messages","access":"session","body":"json","response":"json"},
  postChatMessagesByMessageIdReport: {"method":"POST","path":"/chat/messages/{messageId}/report","access":"session","body":"json","response":"json"},
  postChatSupportByTicketId: {"method":"POST","path":"/chat/support/{ticketId}","access":"session","response":"json"},
  postChatTeamByTeamId: {"method":"POST","path":"/chat/team/{teamId}","access":"session","response":"json"},
  postChatTeamByTeamIdContact: {"method":"POST","path":"/chat/team/{teamId}/contact","access":"session","response":"json"},
  postCollections: {"method":"POST","path":"/collections","access":"session","body":"json","response":"json"},
  postCollectionsByIdItems: {"method":"POST","path":"/collections/{id}/items","access":"session","body":"json","response":"json"},
  postCommunityAuthorsByUserIdFollow: {"method":"POST","path":"/community/authors/{userId}/follow","access":"session","response":"json"},
  postCommunityCommentsByIdLike: {"method":"POST","path":"/community/comments/{id}/like","access":"session","response":"json"},
  postCommunityCommentsByIdReport: {"method":"POST","path":"/community/comments/{id}/report","access":"session","body":"json","response":"json"},
  postCommunityPosts: {"method":"POST","path":"/community/posts","access":"session","body":"json","response":"json"},
  postCommunityPostsByIdComments: {"method":"POST","path":"/community/posts/{id}/comments","access":"admin","body":"json","response":"json"},
  postCommunityPostsByIdReact: {"method":"POST","path":"/community/posts/{id}/react","access":"session","response":"json"},
  postCommunityThemesByIdInstall: {"method":"POST","path":"/community-themes/{id}/install","access":"session","body":"json","response":"json"},
  postCommunityThemesByIdReport: {"method":"POST","path":"/community-themes/{id}/report","access":"session","body":"json","response":"json"},
  postDiscordActivityFavorites: {"method":"POST","path":"/discord/activity/favorites","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdPick: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/pick","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdQuiz: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/quiz","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdQuizAnswer: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/quiz/answer","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdReading: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/reading","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdReadingHost: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/reading/host","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdReadingReact: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/reading/react","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdReset: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/reset","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdSwipe: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/swipe","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdSwipeReveal: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/swipe/reveal","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdTierlist: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/tierlist","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdTierlistReveal: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/tierlist/reveal","access":"activity","response":"json"},
  postDiscordActivityRoomsByInstanceIdTierlistSave: {"method":"POST","path":"/discord/activity/rooms/{instanceId}/tierlist/save","access":"activity","response":"json"},
  postDiscordActivityToken: {"method":"POST","path":"/discord/activity/token","access":"public","response":"json"},
  postDiscordInteractions: {"method":"POST","path":"/discord/interactions","access":"internal","response":"json"},
  postDiscordLink: {"method":"POST","path":"/discord/link","access":"session","response":"json"},
  postDiscordRolesSync: {"method":"POST","path":"/discord/roles/sync","access":"session","response":"json"},
  postE2eeBackupVersion: {"method":"POST","path":"/e2ee/backup/version","access":"session","response":"json"},
  postE2eeDevices: {"method":"POST","path":"/e2ee/devices","access":"session","response":"json"},
  postE2eeKeysClaim: {"method":"POST","path":"/e2ee/keys/claim","access":"session","response":"json"},
  postE2eeKeysQuery: {"method":"POST","path":"/e2ee/keys/query","access":"session","response":"json"},
  postE2eeKeysSignatures: {"method":"POST","path":"/e2ee/keys/signatures","access":"session","response":"json"},
  postE2eeKeysSigning: {"method":"POST","path":"/e2ee/keys/signing","access":"session","response":"json"},
  postE2eeKeysUpload: {"method":"POST","path":"/e2ee/keys/upload","access":"session","response":"json"},
  postE2eeReset: {"method":"POST","path":"/e2ee/reset","access":"session","response":"json"},
  postMeApiKeys: {"method":"POST","path":"/me/api-keys","access":"session","body":"json","response":"json"},
  postMeApiKeysByIdRotate: {"method":"POST","path":"/me/api-keys/{id}/rotate","access":"session","response":"json"},
  postMeContentImages: {"method":"POST","path":"/me/content-images","access":"session","response":"json"},
  postMeLibrarySeen: {"method":"POST","path":"/me/library/seen","access":"session","response":"json"},
  postMeNotificationsByIdRead: {"method":"POST","path":"/me/notifications/{id}/read","access":"session","response":"json"},
  postMeNotificationsRead: {"method":"POST","path":"/me/notifications/read","access":"session","body":"json","response":"json"},
  postMeNotificationsReadAll: {"method":"POST","path":"/me/notifications/read-all","access":"session","response":"json"},
  postMePushSubscriptions: {"method":"POST","path":"/me/push-subscriptions","access":"session","body":"json","response":"json"},
  postMeThemes: {"method":"POST","path":"/me/themes","access":"session","body":"json","response":"json"},
  postMeThemesByIdDuplicate: {"method":"POST","path":"/me/themes/{id}/duplicate","access":"session","body":"json","response":"json"},
  postMeThemesByIdPublish: {"method":"POST","path":"/me/themes/{id}/publish","access":"session","response":"json"},
  postMeThemesByIdSave: {"method":"POST","path":"/me/themes/{id}/save","access":"session","body":"json","response":"json"},
  postMeThemesByIdSync: {"method":"POST","path":"/me/themes/{id}/sync","access":"session","response":"json"},
  postProjectsBySlugChaptersByChapterSlugComments: {"method":"POST","path":"/projects/{slug}/chapters/{chapterSlug}/comments","access":"admin","body":"json","response":"json"},
  postProjectsBySlugChaptersByChapterSlugLike: {"method":"POST","path":"/projects/{slug}/chapters/{chapterSlug}/like","access":"session","response":"json"},
  postProjectsBySlugChaptersByChapterSlugProgress: {"method":"POST","path":"/projects/{slug}/chapters/{chapterSlug}/progress","access":"session","body":"json","response":"json"},
  postProjectsBySlugChaptersByChapterSlugRead: {"method":"POST","path":"/projects/{slug}/chapters/{chapterSlug}/read","access":"session","response":"json"},
  postProjectsBySlugChaptersByChapterSlugView: {"method":"POST","path":"/projects/{slug}/chapters/{chapterSlug}/view","access":"public","response":"json"},
  postProjectsBySlugChaptersReadBulk: {"method":"POST","path":"/projects/{slug}/chapters/read-bulk","access":"session","body":"json","response":"json"},
  postProjectsBySlugComments: {"method":"POST","path":"/projects/{slug}/comments","access":"admin","body":"json","response":"json"},
  postProjectsBySlugCommentsByCommentIdLike: {"method":"POST","path":"/projects/{slug}/comments/{commentId}/like","access":"session","response":"json"},
  postProjectsBySlugFavorite: {"method":"POST","path":"/projects/{slug}/favorite","access":"session","response":"json"},
  postProjectsBySlugRating: {"method":"POST","path":"/projects/{slug}/rating","access":"session","body":"json","response":"json"},
  postProjectsBySlugTickets: {"method":"POST","path":"/projects/{slug}/tickets","access":"session","body":"json","response":"json"},
  postProjectsBySlugView: {"method":"POST","path":"/projects/{slug}/view","access":"public","response":"json"},
  postProjectsBySlugWikiPages: {"method":"POST","path":"/projects/{slug}/wiki/pages","access":"session","body":"json","response":"json"},
  postProjectsBySlugWikiPagesByPageSlugCategory: {"method":"POST","path":"/projects/{slug}/wiki/pages/{pageSlug}/category","access":"session","body":"json","response":"json"},
  postProjectsBySlugWikiPagesByPageSlugRevisions: {"method":"POST","path":"/projects/{slug}/wiki/pages/{pageSlug}/revisions","access":"session","body":"json","response":"json"},
  postProjectsBySlugWikiPagesByPageSlugTitle: {"method":"POST","path":"/projects/{slug}/wiki/pages/{pageSlug}/title","access":"session","body":"json","response":"json"},
  postProjectsBySlugWikiRevisionsByIdReview: {"method":"POST","path":"/projects/{slug}/wiki/revisions/{id}/review","access":"session","body":"json","response":"json"},
  postTeamRequests: {"method":"POST","path":"/team-requests","access":"session","body":"json","response":"json"},
  postTeamsBySlugAgenda: {"method":"POST","path":"/teams/{slug}/agenda","access":"session","body":"json","response":"json"},
  postTeamsBySlugDiscordChannelsByChannelRefTest: {"method":"POST","path":"/teams/{slug}/discord/channels/{channelRef}/test","access":"session","response":"json"},
  postTeamsBySlugDiscordConnect: {"method":"POST","path":"/teams/{slug}/discord/connect","access":"session","response":"json"},
  postTeamsBySlugDiscordGuildsByGuildRefChannels: {"method":"POST","path":"/teams/{slug}/discord/guilds/{guildRef}/channels","access":"session","response":"json"},
  postTeamsBySlugDiscordGuildsByGuildRefPreview: {"method":"POST","path":"/teams/{slug}/discord/guilds/{guildRef}/preview","access":"session","body":"json","response":"json"},
  postTeamsBySlugDiscordGuildsByGuildRefRoleMenu: {"method":"POST","path":"/teams/{slug}/discord/guilds/{guildRef}/role-menu","access":"session","body":"json","response":"json"},
  postTeamsBySlugDiscordGuildsByGuildRefRoles: {"method":"POST","path":"/teams/{slug}/discord/guilds/{guildRef}/roles","access":"session","body":"json","response":"json"},
  postTeamsBySlugFeed: {"method":"POST","path":"/teams/{slug}/feed","access":"session","body":"json","response":"json"},
  postTeamsBySlugFeedByPostIdReact: {"method":"POST","path":"/teams/{slug}/feed/{postId}/react","access":"session","response":"json"},
  postTeamsBySlugFeedByPostIdVote: {"method":"POST","path":"/teams/{slug}/feed/{postId}/vote","access":"session","body":"json","response":"json"},
  postTeamsBySlugFollow: {"method":"POST","path":"/teams/{slug}/follow","access":"session","response":"json"},
  postTeamsBySlugReleasePlan: {"method":"POST","path":"/teams/{slug}/release-plan","access":"session","body":"json","response":"json"},
  postTickets: {"method":"POST","path":"/tickets","access":"session","body":"json","response":"json"},
  postTierLists: {"method":"POST","path":"/tier-lists","access":"session","body":"json","response":"json"},
  postTierListsByIdCollaborators: {"method":"POST","path":"/tier-lists/{id}/collaborators","access":"session","body":"json","response":"json"},
  postTierListsByIdComments: {"method":"POST","path":"/tier-lists/{id}/comments","access":"admin","body":"json","response":"json"},
  postTierListsByIdCommentsByCommentIdLike: {"method":"POST","path":"/tier-lists/{id}/comments/{commentId}/like","access":"session","response":"json"},
  postTierListsByIdCommentsByCommentIdReport: {"method":"POST","path":"/tier-lists/{id}/comments/{commentId}/report","access":"session","body":"json","response":"json"},
  postTierListsByIdFavorite: {"method":"POST","path":"/tier-lists/{id}/favorite","access":"session","response":"json"},
  postTierListsByIdVersionsByVersionIdRestore: {"method":"POST","path":"/tier-lists/{id}/versions/{versionId}/restore","access":"session","body":"json","response":"json"},
  postToolsConvert: {"method":"POST","path":"/tools/convert","access":"session","response":"raw"},
  postToolsMerge: {"method":"POST","path":"/tools/merge","access":"session","response":"raw"},
  postToolsNormalize: {"method":"POST","path":"/tools/normalize","access":"session","response":"raw"},
  postToolsQualityCheck: {"method":"POST","path":"/tools/quality-check","access":"session","response":"json"},
  postToolsSplit: {"method":"POST","path":"/tools/split","access":"session","response":"raw"},
  postToolsWatermark: {"method":"POST","path":"/tools/watermark","access":"session","response":"raw"},
  putAdminArticleCommentsById: {"method":"PUT","path":"/admin/article-comments/{id}","access":"admin","body":"json","response":"json"},
  putAdminAuthorsById: {"method":"PUT","path":"/admin/authors/{id}","access":"session","body":"json","response":"json"},
  putAdminBlogCommentsById: {"method":"PUT","path":"/admin/blog/comments/{id}","access":"admin","body":"json","response":"json"},
  putAdminBlogPostsById: {"method":"PUT","path":"/admin/blog/posts/{id}","access":"admin","body":"json","response":"json"},
  putAdminCommentsById: {"method":"PUT","path":"/admin/comments/{id}","access":"admin","body":"json","response":"json"},
  putAdminDiscordChannelsByIdEvents: {"method":"PUT","path":"/admin/discord/channels/{id}/events","access":"admin","body":"json","response":"json"},
  putAdminDocumentationById: {"method":"PUT","path":"/admin/documentation/{id}","access":"admin","body":"json","response":"json"},
  putAdminDocumentationOrder: {"method":"PUT","path":"/admin/documentation/order","access":"admin","body":"json","response":"json"},
  putAdminEventThemesByThemeId: {"method":"PUT","path":"/admin/event-themes/{themeId}","access":"admin","body":"json","response":"json"},
  putAdminMangadexProjectsBySlugSync: {"method":"PUT","path":"/admin/mangadex/projects/{slug}/sync","access":"session","body":"json","response":"json"},
  putAdminProjectsBySlug: {"method":"PUT","path":"/admin/projects/{slug}","access":"session","body":"json","response":"json"},
  putAdminProjectsBySlugChaptersByChapterId: {"method":"PUT","path":"/admin/projects/{slug}/chapters/{chapterId}","access":"session","body":"json","response":"json"},
  putAdminProjectsBySlugChaptersByChapterIdPageEdits: {"method":"PUT","path":"/admin/projects/{slug}/chapters/{chapterId}/page-edits","access":"session","response":"json"},
  putAdminProjectsBySlugChaptersByChapterIdPages: {"method":"PUT","path":"/admin/projects/{slug}/chapters/{chapterId}/pages","access":"session","body":"json","response":"json"},
  putAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId: {"method":"PUT","path":"/admin/projects/{slug}/chapters/{chapterId}/translation-notes/{noteId}","access":"session","body":"json","response":"json"},
  putAdminProjectsBySlugOverridesByUserId: {"method":"PUT","path":"/admin/projects/{slug}/overrides/{userId}","access":"admin","body":"json","response":"json"},
  putAdminRolesById: {"method":"PUT","path":"/admin/roles/{id}","access":"admin","body":"json","response":"json"},
  putAdminSettings: {"method":"PUT","path":"/admin/settings","access":"admin","body":"json","response":"json"},
  putAdminSettingsSite: {"method":"PUT","path":"/admin/settings/site","access":"admin","body":"json","response":"json"},
  putAdminTagsById: {"method":"PUT","path":"/admin/tags/{id}","access":"admin","body":"json","response":"json"},
  putAdminTeamsById: {"method":"PUT","path":"/admin/teams/{id}","access":"session","body":"json","response":"json"},
  putAdminTeamsByIdMembersByUserId: {"method":"PUT","path":"/admin/teams/{id}/members/{userId}","access":"session","body":"json","response":"json"},
  putAdminTeamsByIdMembersByUserIdRoles: {"method":"PUT","path":"/admin/teams/{id}/members/{userId}/roles","access":"session","body":"json","response":"json"},
  putAdminTeamsByIdRolesByRoleId: {"method":"PUT","path":"/admin/teams/{id}/roles/{roleId}","access":"session","body":"json","response":"json"},
  putAdminTicketsMacros: {"method":"PUT","path":"/admin/tickets/macros","access":"admin","body":"json","response":"json"},
  putAdminTierListCommentsById: {"method":"PUT","path":"/admin/tier-list-comments/{id}","access":"admin","body":"json","response":"json"},
  putAdminUsersById: {"method":"PUT","path":"/admin/users/{id}","access":"admin","body":"json","response":"json"},
  putAdminUsersByIdRoles: {"method":"PUT","path":"/admin/users/{id}/roles","access":"admin","body":"json","response":"json"},
  putArticlesById: {"method":"PUT","path":"/articles/{id}","access":"admin","body":"json","response":"json"},
  putArticlesBySlugCommentsByCommentId: {"method":"PUT","path":"/articles/{slug}/comments/{commentId}","access":"session","body":"json","response":"json"},
  putAuthPasskeysById: {"method":"PUT","path":"/auth/passkeys/{id}","access":"session","body":"json","response":"json"},
  putChatByIdHidden: {"method":"PUT","path":"/chat/{id}/hidden","access":"session","body":"json","response":"json"},
  putChatByIdRead: {"method":"PUT","path":"/chat/{id}/read","access":"session","response":"json"},
  putChatMessagesByMessageId: {"method":"PUT","path":"/chat/messages/{messageId}","access":"session","body":"json","response":"json"},
  putCollectionsById: {"method":"PUT","path":"/collections/{id}","access":"session","body":"json","response":"json"},
  putCommunityCommentsById: {"method":"PUT","path":"/community/comments/{id}","access":"session","body":"json","response":"json"},
  putCommunityPostsById: {"method":"PUT","path":"/community/posts/{id}","access":"session","body":"json","response":"json"},
  putCommunityThemesByIdLike: {"method":"PUT","path":"/community-themes/{id}/like","access":"session","body":"json","response":"json"},
  putCommunityThemesByIdModeration: {"method":"PUT","path":"/community-themes/{id}/moderation","access":"session","body":"json","response":"json"},
  putDiscordAccountProjectsByProjectId: {"method":"PUT","path":"/discord/account/projects/{projectId}","access":"session","response":"json"},
  putDiscordActivityRoomsByInstanceIdMode: {"method":"PUT","path":"/discord/activity/rooms/{instanceId}/mode","access":"activity","response":"json"},
  putDiscordActivityRoomsByInstanceIdReadingChapter: {"method":"PUT","path":"/discord/activity/rooms/{instanceId}/reading/chapter","access":"activity","response":"json"},
  putDiscordActivityRoomsByInstanceIdReadingPage: {"method":"PUT","path":"/discord/activity/rooms/{instanceId}/reading/page","access":"activity","response":"json"},
  putDiscordActivityRoomsByInstanceIdSwipeAnswer: {"method":"PUT","path":"/discord/activity/rooms/{instanceId}/swipe/answer","access":"activity","response":"json"},
  putDiscordActivityRoomsByInstanceIdTierlistRank: {"method":"PUT","path":"/discord/activity/rooms/{instanceId}/tierlist/rank","access":"activity","response":"json"},
  putDiscordActivityRoomsByInstanceIdVote: {"method":"PUT","path":"/discord/activity/rooms/{instanceId}/vote","access":"activity","response":"json"},
  putE2eeAccountDataByType: {"method":"PUT","path":"/e2ee/account-data/{type}","access":"session","response":"json"},
  putE2eeBackupKeys: {"method":"PUT","path":"/e2ee/backup/keys","access":"session","response":"json"},
  putE2eeSendToDeviceByTypeByTxnId: {"method":"PUT","path":"/e2ee/send-to-device/{type}/{txnId}","access":"session","response":"json"},
  putMeBlocksByUserId: {"method":"PUT","path":"/me/blocks/{userId}","access":"session","response":"json"},
  putMeCosmetics: {"method":"PUT","path":"/me/cosmetics","access":"session","body":"json","response":"json"},
  putMePreferences: {"method":"PUT","path":"/me/preferences","access":"session","body":"json","response":"json"},
  putMeThemesActive: {"method":"PUT","path":"/me/themes/active","access":"session","body":"json","response":"json"},
  putMeThemesByIdDraft: {"method":"PUT","path":"/me/themes/{id}/draft","access":"session","body":"json","response":"json"},
  putProjectsBySlugCommentsByCommentId: {"method":"PUT","path":"/projects/{slug}/comments/{commentId}","access":"session","body":"json","response":"json"},
  putTeamRequestsById: {"method":"PUT","path":"/team-requests/{id}","access":"session","body":"json","response":"json"},
  putTeamsBySlugAgendaByEntryId: {"method":"PUT","path":"/teams/{slug}/agenda/{entryId}","access":"session","body":"json","response":"json"},
  putTeamsBySlugDiscordChannelsByChannelRefEvents: {"method":"PUT","path":"/teams/{slug}/discord/channels/{channelRef}/events","access":"session","response":"json"},
  putTeamsBySlugDiscordChannelsByChannelRefProjects: {"method":"PUT","path":"/teams/{slug}/discord/channels/{channelRef}/projects","access":"session","body":"json","response":"json"},
  putTeamsBySlugDiscordChannelsByChannelRefRole: {"method":"PUT","path":"/teams/{slug}/discord/channels/{channelRef}/role","access":"session","body":"json","response":"json"},
  putTeamsBySlugDiscordGuildsByGuildRefProjectsByProjectIdRole: {"method":"PUT","path":"/teams/{slug}/discord/guilds/{guildRef}/projects/{projectId}/role","access":"session","body":"json","response":"json"},
  putTeamsBySlugDiscordGuildsByGuildRefSettings: {"method":"PUT","path":"/teams/{slug}/discord/guilds/{guildRef}/settings","access":"session","body":"json","response":"json"},
  putTeamsBySlugMangadexAccount: {"method":"PUT","path":"/teams/{slug}/mangadex/account","access":"session","body":"json","response":"json"},
  putTierListsById: {"method":"PUT","path":"/tier-lists/{id}","access":"session","body":"json","response":"json"},
  putTierListsByIdCommentsByCommentId: {"method":"PUT","path":"/tier-lists/{id}/comments/{commentId}","access":"session","body":"json","response":"json"},
  putTierListsByIdItems: {"method":"PUT","path":"/tier-lists/{id}/items","access":"session","body":"json","response":"json"},
  putTierListsByIdLayout: {"method":"PUT","path":"/tier-lists/{id}/layout","access":"session","body":"json","response":"json"},
  putUsersMe: {"method":"PUT","path":"/users/me","access":"session","body":"json","response":"json"},
} as const satisfies Record<string, OperationDescriptor>;

export interface OperationDescriptor {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  /** Politique d'accès appliquée par le serveur (`x-komamy-access`). */
  access: 'public' | 'session' | 'admin' | 'activity' | 'internal';
  /** Permission de clé API qui ouvre l'opération aux clés, si elle l'est. */
  apiKeyScope?: string;
  body?: 'json' | 'multipart';
  /** `json` : corps JSON décodé ; `void` : pas de corps ; `raw` : `Response` brute (fichier, flux SSE…). */
  response: 'json' | 'void' | 'raw';
}

export type OperationId = keyof typeof OPERATIONS;

/** Une méthode par opération de l'API (549 au total), nommée d'après son `operationId`. */
export interface OperationMethods {
  /**
   * Supprimer un commentaire d'article
   *
   * `DELETE /admin/article-comments/{id}` · Admin — Commentaires d'articles
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  deleteAdminArticleCommentsById(params: { path: operations['deleteAdminArticleCommentsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminArticleCommentsById'>>;
  /**
   * Supprimer un auteur
   *
   * `DELETE /admin/authors/{id}` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  deleteAdminAuthorsById(params: { path: operations['deleteAdminAuthorsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminAuthorsById'>>;
  /**
   * Supprimer un commentaire
   *
   * `DELETE /admin/blog/comments/{id}` · Admin — Blog communautaire
   * Accès : Administration (`MANAGE_BLOG`)
   */
  deleteAdminBlogCommentsById(params: { path: operations['deleteAdminBlogCommentsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminBlogCommentsById'>>;
  /**
   * Supprimer un post
   *
   * `DELETE /admin/blog/posts/{id}` · Admin — Blog communautaire
   * Accès : Administration (`MANAGE_BLOG`)
   */
  deleteAdminBlogPostsById(params: { path: operations['deleteAdminBlogPostsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminBlogPostsById'>>;
  /**
   * Supprimer un commentaire
   *
   * `DELETE /admin/comments/{id}` · Admin — Commentaires
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  deleteAdminCommentsById(params: { path: operations['deleteAdminCommentsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminCommentsById'>>;
  /**
   * Retirer un salon des annonces
   *
   * `DELETE /admin/discord/channels/{id}` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  deleteAdminDiscordChannelsById(params: { path: operations['deleteAdminDiscordChannelsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminDiscordChannelsById'>>;
  /**
   * Supprimer une page de documentation
   *
   * `DELETE /admin/documentation/{id}` · Admin — Documentation
   * Accès : Administration (`MANAGE_DOCS`)
   */
  deleteAdminDocumentationById(params: { path: operations['deleteAdminDocumentationById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminDocumentationById'>>;
  /**
   * Supprimer un projet
   *
   * `DELETE /admin/projects/{slug}` · Admin — Projets
   * Accès : Administration (`DELETE_WEBCOMICS`)
   */
  deleteAdminProjectsBySlug(params: { path: operations['deleteAdminProjectsBySlug']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlug'>>;
  /**
   * Supprimer un chapitre
   *
   * `DELETE /admin/projects/{slug}/chapters/{chapterId}` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  deleteAdminProjectsBySlugChaptersByChapterId(params: { path: operations['deleteAdminProjectsBySlugChaptersByChapterId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugChaptersByChapterId'>>;
  /**
   * Retirer un chapitre de la file d’envoi vers MangaDex
   *
   * `DELETE /admin/projects/{slug}/chapters/{chapterId}/mangadex` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  deleteAdminProjectsBySlugChaptersByChapterIdMangadex(params: { path: operations['deleteAdminProjectsBySlugChaptersByChapterIdMangadex']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugChaptersByChapterIdMangadex'>>;
  /**
   * Supprime une note de vérification
   *
   * `DELETE /admin/projects/{slug}/chapters/{chapterId}/page-notes/{noteId}` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  deleteAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId(params: { path: operations['deleteAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId'>>;
  /**
   * Supprime une note de traduction
   *
   * `DELETE /admin/projects/{slug}/chapters/{chapterId}/translation-notes/{noteId}` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  deleteAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId(params: { path: operations['deleteAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId'>>;
  /**
   * Abandonner un envoi de chapitre
   *
   * `DELETE /admin/projects/{slug}/chapters/{chapterId}/upload` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  deleteAdminProjectsBySlugChaptersByChapterIdUpload(params: { path: operations['deleteAdminProjectsBySlugChaptersByChapterIdUpload']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugChaptersByChapterIdUpload'>>;
  /**
   * Supprime une police de l'équipe
   *
   * `DELETE /admin/projects/{slug}/editor-fonts/{fontId}` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  deleteAdminProjectsBySlugEditorFontsByFontId(params: { path: operations['deleteAdminProjectsBySlugEditorFontsByFontId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugEditorFontsByFontId'>>;
  /**
   * Supprime un style de texte de l'équipe
   *
   * `DELETE /admin/projects/{slug}/editor-styles/{styleId}` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  deleteAdminProjectsBySlugEditorStylesByStyleId(params: { path: operations['deleteAdminProjectsBySlugEditorStylesByStyleId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugEditorStylesByStyleId'>>;
  /**
   * Retirer une dérogation de permissions
   *
   * `DELETE /admin/projects/{slug}/overrides/{userId}` · Admin — Projets
   * Accès : Administration (`MANAGE_ROLES`)
   */
  deleteAdminProjectsBySlugOverridesByUserId(params: { path: operations['deleteAdminProjectsBySlugOverridesByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminProjectsBySlugOverridesByUserId'>>;
  /**
   * Supprimer un rôle global
   *
   * `DELETE /admin/roles/{id}` · Admin — Rôles
   * Accès : Administration (`MANAGE_ROLES`)
   */
  deleteAdminRolesById(params: { path: operations['deleteAdminRolesById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminRolesById'>>;
  /**
   * Supprimer un tag
   *
   * `DELETE /admin/tags/{id}` · Admin — Tags
   * Accès : Administration (`MANAGE_TAGS` ou `DELETE_TAGS`)
   */
  deleteAdminTagsById(params: { path: operations['deleteAdminTagsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTagsById'>>;
  /**
   * Supprimer une tâche (suppression douce, restaurable)
   *
   * `DELETE /admin/tasks/{id}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  deleteAdminTasksById(params: { path: operations['deleteAdminTasksById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTasksById'>>;
  /**
   * Retirer un responsable
   *
   * `DELETE /admin/tasks/{id}/assignees/{userId}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  deleteAdminTasksByIdAssigneesByUserId(params: { path: operations['deleteAdminTasksByIdAssigneesByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTasksByIdAssigneesByUserId'>>;
  /**
   * Supprimer un commentaire (suppression douce)
   *
   * `DELETE /admin/tasks/{id}/comments/{commentId}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  deleteAdminTasksByIdCommentsByCommentId(params: { path: operations['deleteAdminTasksByIdCommentsByCommentId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTasksByIdCommentsByCommentId'>>;
  /**
   * Retirer un label
   *
   * `DELETE /admin/tasks/{id}/labels/{labelId}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  deleteAdminTasksByIdLabelsByLabelId(params: { path: operations['deleteAdminTasksByIdLabelsByLabelId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTasksByIdLabelsByLabelId'>>;
  /**
   * Supprimer une sous-tâche
   *
   * `DELETE /admin/tasks/{id}/subtasks/{subtaskId}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  deleteAdminTasksByIdSubtasksBySubtaskId(params: { path: operations['deleteAdminTasksByIdSubtasksBySubtaskId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTasksByIdSubtasksBySubtaskId'>>;
  /**
   * Supprimer une équipe
   *
   * `DELETE /admin/teams/{id}` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  deleteAdminTeamsById(params: { path: operations['deleteAdminTeamsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTeamsById'>>;
  /**
   * Retirer un membre
   *
   * `DELETE /admin/teams/{id}/members/{userId}` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  deleteAdminTeamsByIdMembersByUserId(params: { path: operations['deleteAdminTeamsByIdMembersByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTeamsByIdMembersByUserId'>>;
  /**
   * Supprimer un rôle d'équipe
   *
   * `DELETE /admin/teams/{id}/roles/{roleId}` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  deleteAdminTeamsByIdRolesByRoleId(params: { path: operations['deleteAdminTeamsByIdRolesByRoleId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTeamsByIdRolesByRoleId'>>;
  /**
   * Supprimer un signalement
   *
   * `DELETE /admin/tickets/{id}` · Admin — Signalements
   * Accès : Administration (`DELETE_TICKETS`)
   */
  deleteAdminTicketsById(params: { path: operations['deleteAdminTicketsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTicketsById'>>;
  /**
   * Supprimer un commentaire de tier list
   *
   * `DELETE /admin/tier-list-comments/{id}` · Admin — Commentaires de tier lists
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  deleteAdminTierListCommentsById(params: { path: operations['deleteAdminTierListCommentsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminTierListCommentsById'>>;
  /**
   * Retirer un envoi fini
   *
   * `DELETE /admin/uploads/{id}` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  deleteAdminUploadsById(params: { path: operations['deleteAdminUploadsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminUploadsById'>>;
  /**
   * Supprimer un utilisateur
   *
   * `DELETE /admin/users/{id}` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  deleteAdminUsersById(params: { path: operations['deleteAdminUsersById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminUsersById'>>;
  /**
   * Supprimer une note interne
   *
   * `DELETE /admin/users/notes/{noteId}` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  deleteAdminUsersNotesByNoteId(params: { path: operations['deleteAdminUsersNotesByNoteId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAdminUsersNotesByNoteId'>>;
  /**
   * Supprimer un article
   *
   * `DELETE /articles/{id}` · Articles
   * Accès : Administration (`DELETE_ARTICLES`)
   */
  deleteArticlesById(params: { path: operations['deleteArticlesById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteArticlesById'>>;
  /**
   * Supprimer un commentaire
   *
   * `DELETE /articles/{slug}/comments/{commentId}` · Articles
   * Accès : Session (connexion requise)
   */
  deleteArticlesBySlugCommentsByCommentId(params: { path: operations['deleteArticlesBySlugCommentsByCommentId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteArticlesBySlugCommentsByCommentId'>>;
  /**
   * Supprimer un passkey
   *
   * `DELETE /auth/passkeys/{id}` · Passkeys
   * Accès : Session (connexion requise)
   */
  deleteAuthPasskeysById(params: { path: operations['deleteAuthPasskeysById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAuthPasskeysById'>>;
  /**
   * Déconnecte un appareil précis
   *
   * `DELETE /auth/sessions/{id}` · Sessions
   * Accès : Session (connexion requise)
   */
  deleteAuthSessionsById(params: { path: operations['deleteAuthSessionsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteAuthSessionsById'>>;
  /**
   * Désactive la 2FA
   *
   * `DELETE /auth/totp` · 2FA (TOTP)
   * Accès : Session (connexion requise)
   */
  deleteAuthTotp(params: { body: JsonBody<'deleteAuthTotp'> }, options?: RequestOptions): Promise<JsonResult<'deleteAuthTotp'>>;
  /**
   * Supprimer un message
   *
   * `DELETE /chat/messages/{messageId}` · Chat
   * Accès : Session (connexion requise)
   */
  deleteChatMessagesByMessageId(params: { path: operations['deleteChatMessagesByMessageId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteChatMessagesByMessageId'>>;
  /**
   * Supprimer une collection
   *
   * `DELETE /collections/{id}` · Collections
   * Accès : Session (connexion requise)
   */
  deleteCollectionsById(params: { path: operations['deleteCollectionsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteCollectionsById'>>;
  /**
   * Retirer un projet d'une collection
   *
   * `DELETE /collections/{id}/items/{projectId}` · Collections
   * Accès : Session (connexion requise)
   */
  deleteCollectionsByIdItemsByProjectId(params: { path: operations['deleteCollectionsByIdItemsByProjectId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteCollectionsByIdItemsByProjectId'>>;
  /**
   * Supprimer un commentaire
   *
   * `DELETE /community/comments/{id}` · Communauté
   * Accès : Session (connexion requise)
   */
  deleteCommunityCommentsById(params: { path: operations['deleteCommunityCommentsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteCommunityCommentsById'>>;
  /**
   * Supprimer un post
   *
   * `DELETE /community/posts/{id}` · Communauté
   * Accès : Session (connexion requise)
   */
  deleteCommunityPostsById(params: { path: operations['deleteCommunityPostsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteCommunityPostsById'>>;
  /**
   * Retirer un thème de la galerie
   *
   * `DELETE /community-themes/{id}` · Thèmes communautaires
   * Accès : Session (connexion requise)
   */
  deleteCommunityThemesById(params: { path: operations['deleteCommunityThemesById']['parameters']['path'] }, options?: RequestOptions): Promise<void>;
  /**
   * Délier mon compte Discord
   *
   * `DELETE /discord/account` · Discord
   * Accès : Session (connexion requise)
   */
  deleteDiscordAccount(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'deleteDiscordAccount'>>;
  /**
   * Désactiver mes rôles Discord
   *
   * `DELETE /discord/roles` · Discord
   * Accès : Session (connexion requise)
   */
  deleteDiscordRoles(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'deleteDiscordRoles'>>;
  /**
   * Supprime la sauvegarde des clés
   *
   * `DELETE /e2ee/backup/version/{version}` · Chiffrement
   * Accès : Session (connexion requise)
   */
  deleteE2eeBackupVersionByVersion(params: { path: operations['deleteE2eeBackupVersionByVersion']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteE2eeBackupVersionByVersion'>>;
  /**
   * Supprime un de mes appareils de chiffrement
   *
   * `DELETE /e2ee/devices/{deviceId}` · Chiffrement
   * Accès : Session (connexion requise)
   */
  deleteE2eeDevicesByDeviceId(params: { path: operations['deleteE2eeDevicesByDeviceId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteE2eeDevicesByDeviceId'>>;
  /**
   * Supprimer définitivement mon compte
   *
   * `DELETE /me/account` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMeAccount(params: { body: JsonBody<'deleteMeAccount'> }, options?: RequestOptions): Promise<JsonResult<'deleteMeAccount'>>;
  /**
   * Révoquer une clé API
   *
   * `DELETE /me/api-keys/{id}` · Clés API
   * Accès : Session (connexion requise)
   */
  deleteMeApiKeysById(params: { path: operations['deleteMeApiKeysById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteMeApiKeysById'>>;
  /**
   * Débloquer un utilisateur
   *
   * `DELETE /me/blocks/{userId}` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMeBlocksByUserId(params: { path: operations['deleteMeBlocksByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteMeBlocksByUserId'>>;
  /**
   * Supprimer toutes mes notifications
   *
   * `DELETE /me/notifications` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMeNotifications(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'deleteMeNotifications'>>;
  /**
   * Supprimer une notification
   *
   * `DELETE /me/notifications/{id}` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMeNotificationsById(params: { path: operations['deleteMeNotificationsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteMeNotificationsById'>>;
  /**
   * Se désabonner des notifications push
   *
   * `DELETE /me/push-subscriptions` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMePushSubscriptions(params: { body: JsonBody<'deleteMePushSubscriptions'> }, options?: RequestOptions): Promise<JsonResult<'deleteMePushSubscriptions'>>;
  /**
   * Supprimer un thème
   *
   * `DELETE /me/themes/{id}` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMeThemesById(params: { path: operations['deleteMeThemesById']['parameters']['path'] }, options?: RequestOptions): Promise<void>;
  /**
   * Abandonner les modifications en cours
   *
   * `DELETE /me/themes/{id}/draft` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMeThemesByIdDraft(params: { path: operations['deleteMeThemesByIdDraft']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteMeThemesByIdDraft'>>;
  /**
   * Retirer un thème de la galerie communautaire
   *
   * `DELETE /me/themes/{id}/publish` · Mon compte
   * Accès : Session (connexion requise)
   */
  deleteMeThemesByIdPublish(params: { path: operations['deleteMeThemesByIdPublish']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteMeThemesByIdPublish'>>;
  /**
   * Supprimer un commentaire
   *
   * `DELETE /projects/{slug}/comments/{commentId}` · Projets
   * Accès : Session (connexion requise)
   */
  deleteProjectsBySlugCommentsByCommentId(params: { path: operations['deleteProjectsBySlugCommentsByCommentId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteProjectsBySlugCommentsByCommentId'>>;
  /**
   * Retirer sa note
   *
   * `DELETE /projects/{slug}/rating` · Projets
   * Accès : Session (connexion requise)
   */
  deleteProjectsBySlugRating(params: { path: operations['deleteProjectsBySlugRating']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteProjectsBySlugRating'>>;
  /**
   * Annuler ma demande de team
   *
   * `DELETE /team-requests/{id}` · Demandes de team
   * Accès : Session (connexion requise)
   */
  deleteTeamRequestsById(params: { path: operations['deleteTeamRequestsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTeamRequestsById'>>;
  /**
   * Supprimer une entrée d'agenda
   *
   * `DELETE /teams/{slug}/agenda/{entryId}` · Équipes
   * Accès : Session (connexion requise)
   */
  deleteTeamsBySlugAgendaByEntryId(params: { path: operations['deleteTeamsBySlugAgendaByEntryId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTeamsBySlugAgendaByEntryId'>>;
  /**
   * Retirer un salon d’annonce de la team
   *
   * `DELETE /teams/{slug}/discord/channels/{channelRef}` · Équipes
   * Accès : Session (connexion requise)
   */
  deleteTeamsBySlugDiscordChannelsByChannelRef(params: { path: operations['deleteTeamsBySlugDiscordChannelsByChannelRef']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTeamsBySlugDiscordChannelsByChannelRef'>>;
  /**
   * Détacher un serveur Discord de la team
   *
   * `DELETE /teams/{slug}/discord/guilds/{guildRef}` · Équipes
   * Accès : Session (connexion requise)
   */
  deleteTeamsBySlugDiscordGuildsByGuildRef(params: { path: operations['deleteTeamsBySlugDiscordGuildsByGuildRef']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTeamsBySlugDiscordGuildsByGuildRef'>>;
  /**
   * Retirer le menu des rôles d’un serveur de la team
   *
   * `DELETE /teams/{slug}/discord/guilds/{guildRef}/role-menu` · Équipes
   * Accès : Session (connexion requise)
   */
  deleteTeamsBySlugDiscordGuildsByGuildRefRoleMenu(params: { path: operations['deleteTeamsBySlugDiscordGuildsByGuildRefRoleMenu']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTeamsBySlugDiscordGuildsByGuildRefRoleMenu'>>;
  /**
   * Supprimer un post de feed
   *
   * `DELETE /teams/{slug}/feed/{postId}` · Équipes
   * Accès : Session (connexion requise)
   */
  deleteTeamsBySlugFeedByPostId(params: { path: operations['deleteTeamsBySlugFeedByPostId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTeamsBySlugFeedByPostId'>>;
  /**
   * Détacher le compte MangaDex de la team
   *
   * `DELETE /teams/{slug}/mangadex/account` · Équipes
   * Accès : Session (connexion requise)
   */
  deleteTeamsBySlugMangadexAccount(params: { path: operations['deleteTeamsBySlugMangadexAccount']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTeamsBySlugMangadexAccount'>>;
  /**
   * Supprimer une tier list
   *
   * `DELETE /tier-lists/{id}` · Tier Lists
   * Accès : Session (connexion requise)
   */
  deleteTierListsById(params: { path: operations['deleteTierListsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTierListsById'>>;
  /**
   * Retirer un collaborateur
   *
   * `DELETE /tier-lists/{id}/collaborators/{userId}` · Tier Lists
   * Accès : Session (connexion requise)
   */
  deleteTierListsByIdCollaboratorsByUserId(params: { path: operations['deleteTierListsByIdCollaboratorsByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTierListsByIdCollaboratorsByUserId'>>;
  /**
   * Supprimer un commentaire
   *
   * `DELETE /tier-lists/{id}/comments/{commentId}` · Tier Lists
   * Accès : Session (connexion requise)
   */
  deleteTierListsByIdCommentsByCommentId(params: { path: operations['deleteTierListsByIdCommentsByCommentId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTierListsByIdCommentsByCommentId'>>;
  /**
   * Retirer une tier list des favoris
   *
   * `DELETE /tier-lists/{id}/favorite` · Tier Lists
   * Accès : Session (connexion requise)
   */
  deleteTierListsByIdFavorite(params: { path: operations['deleteTierListsByIdFavorite']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTierListsByIdFavorite'>>;
  /**
   * Retirer un projet d'une tier list
   *
   * `DELETE /tier-lists/{id}/items/{projectId}` · Tier Lists
   * Accès : Session (connexion requise)
   */
  deleteTierListsByIdItemsByProjectId(params: { path: operations['deleteTierListsByIdItemsByProjectId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'deleteTierListsByIdItemsByProjectId'>>;
  /**
   * Fil d'activité de l'accueil
   *
   * `GET /activity` · Site
   * Accès : Publique
   */
  getActivity(params?: { query?: operations['getActivity']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getActivity'>>;
  /**
   * Historique d'édition
   *
   * `GET /admin/article-comments/{id}/history` · Admin — Commentaires d'articles
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  getAdminArticleCommentsByIdHistory(params: { path: operations['getAdminArticleCommentsByIdHistory']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminArticleCommentsByIdHistory'>>;
  /**
   * Journal d'audit des actions sensibles
   *
   * `GET /admin/audit-log` · Admin — Journal d'audit
   * Accès : Administration (`ADMINISTRATOR`)
   */
  getAdminAuditLog(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminAuditLog'>>;
  /**
   * Liste paginée des auteurs
   *
   * `GET /admin/authors` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  getAdminAuthors(params?: { query?: operations['getAdminAuthors']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminAuthors'>>;
  /**
   * Auteur par id
   *
   * `GET /admin/authors/{id}` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  getAdminAuthorsById(params: { path: operations['getAdminAuthorsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminAuthorsById'>>;
  /**
   * Statistiques d'un auteur
   *
   * `GET /admin/authors/{id}/stats` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  getAdminAuthorsByIdStats(params: { path: operations['getAdminAuthorsByIdStats']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminAuthorsByIdStats'>>;
  /**
   * Tableau de bord statistiques d'un auteur
   *
   * `GET /admin/authors/{id}/stats/dashboard` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  getAdminAuthorsByIdStatsDashboard(params: { path: operations['getAdminAuthorsByIdStatsDashboard']['parameters']['path']; query?: operations['getAdminAuthorsByIdStatsDashboard']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminAuthorsByIdStatsDashboard'>>;
  /**
   * Auteurs à créditer sur un projet
   *
   * `GET /admin/authors/options` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  getAdminAuthorsOptions(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminAuthorsOptions'>>;
  /**
   * Historique d'édition d'un commentaire
   *
   * `GET /admin/blog/comments/{id}/history` · Admin — Blog communautaire
   * Accès : Administration (`MANAGE_BLOG`)
   */
  getAdminBlogCommentsByIdHistory(params: { path: operations['getAdminBlogCommentsByIdHistory']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminBlogCommentsByIdHistory'>>;
  /**
   * Chapitres sans page
   *
   * `GET /admin/cleanup/empty-chapters` · Admin — Nettoyage
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminCleanupEmptyChapters(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminCleanupEmptyChapters'>>;
  /**
   * Fichiers orphelins
   *
   * `GET /admin/cleanup/orphan-files` · Admin — Nettoyage
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminCleanupOrphanFiles(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminCleanupOrphanFiles'>>;
  /**
   * Comptes jamais utilisés
   *
   * `GET /admin/cleanup/unused-accounts` · Admin — Nettoyage
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminCleanupUnusedAccounts(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminCleanupUnusedAccounts'>>;
  /**
   * Historique d'édition
   *
   * `GET /admin/comments/{id}/history` · Admin — Commentaires
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  getAdminCommentsByIdHistory(params: { path: operations['getAdminCommentsByIdHistory']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminCommentsByIdHistory'>>;
  /**
   * Statistiques du tableau de bord admin
   *
   * `GET /admin/dashboard` · Admin — Tableau de bord
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  getAdminDashboard(params?: { query?: operations['getAdminDashboard']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminDashboard'>>;
  /**
   * Serveurs, salons et derniers envois Discord
   *
   * `GET /admin/discord` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  getAdminDiscord(params?: { query?: operations['getAdminDiscord']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminDiscord'>>;
  /**
   * Salons texte d’un serveur (via le bot)
   *
   * `GET /admin/discord/guilds/{id}/channels` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  getAdminDiscordGuildsByIdChannels(params: { path: operations['getAdminDiscordGuildsByIdChannels']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminDiscordGuildsByIdChannels'>>;
  /**
   * Historique d’une page de documentation
   *
   * `GET /admin/documentation/{id}/revisions` · Admin — Documentation
   * Accès : Administration (`MANAGE_DOCS`)
   */
  getAdminDocumentationByIdRevisions(params: { path: operations['getAdminDocumentationByIdRevisions']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminDocumentationByIdRevisions'>>;
  /**
   * Lister les thèmes événementiels
   *
   * `GET /admin/event-themes` · Admin — Thèmes événementiels
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminEventThemes(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminEventThemes'>>;
  /**
   * État du site
   *
   * `GET /admin/health` · Admin — Santé du site
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminHealth(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminHealth'>>;
  /**
   * Espace de stockage occupé
   *
   * `GET /admin/health/storage` · Admin — Santé du site
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminHealthStorage(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminHealthStorage'>>;
  /**
   * Œuvres aux fiches incomplètes
   *
   * `GET /admin/incomplete-projects` · Admin — Fiches incomplètes
   * Accès : Administration (`MANAGE_WEBCOMICS`)
   */
  getAdminIncompleteProjects(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminIncompleteProjects'>>;
  /**
   * Bannière AniList (proxy d’aperçu)
   *
   * `GET /admin/incomplete-projects/anilist-banners/{mediaId}` · Admin — Fiches incomplètes
   * Accès : Administration (`MANAGE_WEBCOMICS`)
   */
  getAdminIncompleteProjectsAnilistBannersByMediaId(params: { path: operations['getAdminIncompleteProjectsAnilistBannersByMediaId']['parameters']['path'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Suggestions pour compléter une fiche
   *
   * `GET /admin/incomplete-projects/{id}/suggestions` · Admin — Fiches incomplètes
   * Accès : Administration (`MANAGE_WEBCOMICS`)
   */
  getAdminIncompleteProjectsByIdSuggestions(params: { path: operations['getAdminIncompleteProjectsByIdSuggestions']['parameters']['path']; query?: operations['getAdminIncompleteProjectsByIdSuggestions']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminIncompleteProjectsByIdSuggestions'>>;
  /**
   * Vérifier si une série est déjà éditée en France
   *
   * `GET /admin/license-check` · Admin — Vérification de licence
   * Accès : Administration (`CHECK_LICENSES`)
   */
  getAdminLicenseCheck(params: { query: operations['getAdminLicenseCheck']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminLicenseCheck'>>;
  /**
   * Vérifier une licence, résultats au fil de l’eau (SSE)
   *
   * `GET /admin/license-check/stream` · Admin — Vérification de licence
   * Accès : Administration (`CHECK_LICENSES`)
   */
  getAdminLicenseCheckStream(params: { query: operations['getAdminLicenseCheckStream']['parameters']['query'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Miniature d'une couverture MangaDex (proxy)
   *
   * `GET /admin/mangadex-covers/{mangaId}/{fileName}` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexCoversByMangaIdByFileName(params: { path: operations['getAdminMangadexCoversByMangaIdByFileName']['parameters']['path']; query?: operations['getAdminMangadexCoversByMangaIdByFileName']['parameters']['query'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Imports MangaDex récents
   *
   * `GET /admin/mangadex/imports` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexImports(params?: { query?: operations['getAdminMangadexImports']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexImports'>>;
  /**
   * État d'un import MangaDex
   *
   * `GET /admin/mangadex/imports/{id}` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexImportsById(params: { path: operations['getAdminMangadexImportsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexImportsById'>>;
  /**
   * Mise à jour automatique d'une œuvre depuis MangaDex
   *
   * `GET /admin/mangadex/projects/{slug}/sync` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexProjectsBySlugSync(params: { path: operations['getAdminMangadexProjectsBySlugSync']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexProjectsBySlugSync'>>;
  /**
   * Rechercher une série MangaDex
   *
   * `GET /admin/mangadex/search` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexSearch(params: { query: operations['getAdminMangadexSearch']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexSearch'>>;
  /**
   * Aperçu d'une série MangaDex
   *
   * `GET /admin/mangadex/series/{mangaId}` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexSeriesByMangaId(params: { path: operations['getAdminMangadexSeriesByMangaId']['parameters']['path']; query: operations['getAdminMangadexSeriesByMangaId']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexSeriesByMangaId'>>;
  /**
   * Métriques des imports MangaDex
   *
   * `GET /admin/mangadex/stats` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexStats(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexStats'>>;
  /**
   * Avancement de l'import de toutes les séries d'une équipe
   *
   * `GET /admin/mangadex/teams/{teamId}/import-all` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexTeamsByTeamIdImportAll(params: { path: operations['getAdminMangadexTeamsByTeamIdImportAll']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexTeamsByTeamIdImportAll'>>;
  /**
   * Séries MangaDex du groupe d'une équipe
   *
   * `GET /admin/mangadex/teams/{teamId}/series` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  getAdminMangadexTeamsByTeamIdSeries(params: { path: operations['getAdminMangadexTeamsByTeamIdSeries']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminMangadexTeamsByTeamIdSeries'>>;
  /**
   * File de modération
   *
   * `GET /admin/moderation/queue` · Admin — Modération
   * Accès : Administration (`MODERATE_COMMENTS` ou `MANAGE_TICKETS` ou `MANAGE_WIKI`)
   */
  getAdminModerationQueue(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminModerationQueue'>>;
  /**
   * Progression des lecteurs
   *
   * `GET /admin/progression` · Admin — Progression
   * Accès : Administration (`MANAGE_USERS`)
   */
  getAdminProgression(params?: { query?: operations['getAdminProgression']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProgression'>>;
  /**
   * Liste paginée des projets
   *
   * `GET /admin/projects` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjects(params?: { query?: operations['getAdminProjects']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjects'>>;
  /**
   * Projet pour édition
   *
   * `GET /admin/projects/{slug}` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlug(params: { path: operations['getAdminProjectsBySlug']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlug'>>;
  /**
   * État de l’envoi d’un chapitre vers MangaDex
   *
   * `GET /admin/projects/{slug}/chapters/{chapterId}/mangadex` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugChaptersByChapterIdMangadex(params: { path: operations['getAdminProjectsBySlugChaptersByChapterIdMangadex']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugChaptersByChapterIdMangadex'>>;
  /**
   * Édits en cours des pages d'un chapitre
   *
   * `GET /admin/projects/{slug}/chapters/{chapterId}/page-edits` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugChaptersByChapterIdPageEdits(params: { path: operations['getAdminProjectsBySlugChaptersByChapterIdPageEdits']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugChaptersByChapterIdPageEdits'>>;
  /**
   * Notes de vérification des pages d'un chapitre
   *
   * `GET /admin/projects/{slug}/chapters/{chapterId}/page-notes` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugChaptersByChapterIdPageNotes(params: { path: operations['getAdminProjectsBySlugChaptersByChapterIdPageNotes']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugChaptersByChapterIdPageNotes'>>;
  /**
   * Polices de l'équipe du projet
   *
   * `GET /admin/projects/{slug}/editor-fonts` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugEditorFonts(params: { path: operations['getAdminProjectsBySlugEditorFonts']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugEditorFonts'>>;
  /**
   * Styles de texte de l'équipe du projet
   *
   * `GET /admin/projects/{slug}/editor-styles` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugEditorStyles(params: { path: operations['getAdminProjectsBySlugEditorStyles']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugEditorStyles'>>;
  /**
   * Modèle d'inpainting du clean IA
   *
   * `GET /admin/projects/{slug}/inpaint-model` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugInpaintModel(params: { path: operations['getAdminProjectsBySlugInpaintModel']['parameters']['path'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Publication MangaDex d’une œuvre
   *
   * `GET /admin/projects/{slug}/mangadex` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugMangadex(params: { path: operations['getAdminProjectsBySlugMangadex']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugMangadex'>>;
  /**
   * Dérogations de permissions sur ce projet
   *
   * `GET /admin/projects/{slug}/overrides` · Admin — Projets
   * Accès : Administration (`MANAGE_ROLES`)
   */
  getAdminProjectsBySlugOverrides(params: { path: operations['getAdminProjectsBySlugOverrides']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugOverrides'>>;
  /**
   * Tableau de bord statistiques d'une œuvre
   *
   * `GET /admin/projects/{slug}/stats/dashboard` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjectsBySlugStatsDashboard(params: { path: operations['getAdminProjectsBySlugStatsDashboard']['parameters']['path']; query?: operations['getAdminProjectsBySlugStatsDashboard']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsBySlugStatsDashboard'>>;
  /**
   * Métadonnées MangaDex d'une série (remplissage automatique)
   *
   * `GET /admin/projects/mangadex-lookup` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjectsMangadexLookup(params: { query: operations['getAdminProjectsMangadexLookup']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsMangadexLookup'>>;
  /**
   * Teams du filtre du listing
   *
   * `GET /admin/projects/team-options` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjectsTeamOptions(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsTeamOptions'>>;
  /**
   * Œuvres portant déjà un de ces titres
   *
   * `GET /admin/projects/title-matches` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  getAdminProjectsTitleMatches(params: { query: operations['getAdminProjectsTitleMatches']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminProjectsTitleMatches'>>;
  /**
   * Liste des rôles globaux
   *
   * `GET /admin/roles` · Admin — Rôles
   * Accès : Administration (`MANAGE_ROLES`)
   */
  getAdminRoles(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminRoles'>>;
  /**
   * Historique des sanctions d'un compte
   *
   * `GET /admin/sanctions/users/{userId}` · Admin — Sanctions
   * Accès : Administration (`MANAGE_USERS` ou `MODERATE_COMMENTS`)
   */
  getAdminSanctionsUsersByUserId(params: { path: operations['getAdminSanctionsUsersByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminSanctionsUsersByUserId'>>;
  /**
   * Recherche globale admin (utilisateurs, projets, tickets)
   *
   * `GET /admin/search` · Admin — Recherche
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  getAdminSearch(params: { query: operations['getAdminSearch']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminSearch'>>;
  /**
   * Lire les réglages du site
   *
   * `GET /admin/settings` · Admin — Réglages
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminSettings(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminSettings'>>;
  /**
   * Lire la maintenance, le bandeau et les inscriptions
   *
   * `GET /admin/settings/site` · Admin — Réglages
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  getAdminSettingsSite(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminSettingsSite'>>;
  /**
   * Liste des tags
   *
   * `GET /admin/tags` · Admin — Tags
   * Accès : Administration (`MANAGE_TAGS`)
   */
  getAdminTags(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminTags'>>;
  /**
   * Liste paginée des tâches (filtrable/triable)
   *
   * `GET /admin/tasks` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  getAdminTasks(params?: { query?: operations['getAdminTasks']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTasks'>>;
  /**
   * Détail d’une tâche (avec commentaires et historique)
   *
   * `GET /admin/tasks/{id}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  getAdminTasksById(params: { path: operations['getAdminTasksById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTasksById'>>;
  /**
   * Liste des labels réutilisables
   *
   * `GET /admin/tasks/labels` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  getAdminTasksLabels(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminTasksLabels'>>;
  /**
   * Lister les demandes de team
   *
   * `GET /admin/team-requests` · Admin — Demandes de team
   * Accès : Administration (`MANAGE_TEAMS`)
   */
  getAdminTeamRequests(params?: { query?: operations['getAdminTeamRequests']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeamRequests'>>;
  /**
   * Nombre de demandes de team en attente
   *
   * `GET /admin/team-requests/count` · Admin — Demandes de team
   * Accès : Administration (`MANAGE_TEAMS`)
   */
  getAdminTeamRequestsCount(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminTeamRequestsCount'>>;
  /**
   * Liste paginée des équipes
   *
   * `GET /admin/teams` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeams(params?: { query?: operations['getAdminTeams']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeams'>>;
  /**
   * Équipe par id
   *
   * `GET /admin/teams/{id}` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeamsById(params: { path: operations['getAdminTeamsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeamsById'>>;
  /**
   * Droits du visiteur sur une équipe
   *
   * `GET /admin/teams/{id}/capabilities` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeamsByIdCapabilities(params: { path: operations['getAdminTeamsByIdCapabilities']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeamsByIdCapabilities'>>;
  /**
   * Comptes ajoutables comme membres
   *
   * `GET /admin/teams/{id}/member-candidates` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeamsByIdMemberCandidates(params: { path: operations['getAdminTeamsByIdMemberCandidates']['parameters']['path']; query?: operations['getAdminTeamsByIdMemberCandidates']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeamsByIdMemberCandidates'>>;
  /**
   * Liste des membres
   *
   * `GET /admin/teams/{id}/members` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeamsByIdMembers(params: { path: operations['getAdminTeamsByIdMembers']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeamsByIdMembers'>>;
  /**
   * Rôles d'équipe d'un membre
   *
   * `GET /admin/teams/{id}/members/{userId}/roles` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeamsByIdMembersByUserIdRoles(params: { path: operations['getAdminTeamsByIdMembersByUserIdRoles']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeamsByIdMembersByUserIdRoles'>>;
  /**
   * Rôles d'équipe
   *
   * `GET /admin/teams/{id}/roles` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeamsByIdRoles(params: { path: operations['getAdminTeamsByIdRoles']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTeamsByIdRoles'>>;
  /**
   * Mes équipes
   *
   * `GET /admin/teams/mine` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  getAdminTeamsMine(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminTeamsMine'>>;
  /**
   * Liste paginée des signalements
   *
   * `GET /admin/tickets` · Admin — Signalements
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  getAdminTickets(params?: { query?: operations['getAdminTickets']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTickets'>>;
  /**
   * Réponses types
   *
   * `GET /admin/tickets/macros` · Admin — Signalements
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  getAdminTicketsMacros(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminTicketsMacros'>>;
  /**
   * Historique d'édition
   *
   * `GET /admin/tier-list-comments/{id}/history` · Admin — Commentaires de tier lists
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  getAdminTierListCommentsByIdHistory(params: { path: operations['getAdminTierListCommentsByIdHistory']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTierListCommentsByIdHistory'>>;
  /**
   * Détail du classement des tendances
   *
   * `GET /admin/trending` · Admin — Tendances
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  getAdminTrending(params?: { query?: operations['getAdminTrending']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminTrending'>>;
  /**
   * Mes envois et imports
   *
   * `GET /admin/uploads` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  getAdminUploads(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminUploads'>>;
  /**
   * Détail d’un envoi
   *
   * `GET /admin/uploads/{id}` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  getAdminUploadsById(params: { path: operations['getAdminUploadsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminUploadsById'>>;
  /**
   * Liste paginée des utilisateurs
   *
   * `GET /admin/users` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  getAdminUsers(params?: { query?: operations['getAdminUsers']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getAdminUsers'>>;
  /**
   * Fiche utilisateur
   *
   * `GET /admin/users/{id}/overview` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  getAdminUsersByIdOverview(params: { path: operations['getAdminUsersByIdOverview']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminUsersByIdOverview'>>;
  /**
   * Rôles globaux d'un utilisateur
   *
   * `GET /admin/users/{id}/roles` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS` ou `MANAGE_ROLES`)
   */
  getAdminUsersByIdRoles(params: { path: operations['getAdminUsersByIdRoles']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAdminUsersByIdRoles'>>;
  /**
   * Liste du staff
   *
   * `GET /admin/users/staff` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  getAdminUsersStaff(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAdminUsersStaff'>>;
  /**
   * Liste des articles
   *
   * `GET /articles` · Articles
   * Accès : Publique
   */
  getArticles(params?: { query?: operations['getArticles']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getArticles'>>;
  /**
   * Article par id (admin/modérateur)
   *
   * `GET /articles/{id}` · Articles
   * Accès : Administration (`PUBLISH_ARTICLES`)
   */
  getArticlesById(params: { path: operations['getArticlesById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getArticlesById'>>;
  /**
   * Article par slug
   *
   * `GET /articles/{slug}` · Articles
   * Accès : Publique
   */
  getArticlesBySlug(params: { path: operations['getArticlesBySlug']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getArticlesBySlug'>>;
  /**
   * Commentaires d'un article
   *
   * `GET /articles/{slug}/comments` · Articles
   * Accès : Publique
   */
  getArticlesBySlugComments(params: { path: operations['getArticlesBySlugComments']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getArticlesBySlugComments'>>;
  /**
   * Profil de l'utilisateur connecté
   *
   * `GET /auth/me` · Auth
   * Accès : Session (connexion requise)
   */
  getAuthMe(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAuthMe'>>;
  /**
   * Liste des auteurs
   *
   * `GET /authors` · Auteurs
   * Accès : Publique, ouverte aux clés API `authors:read`
   */
  getAuthors(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAuthors'>>;
  /**
   * Détails d'un auteur
   *
   * `GET /authors/{slug}` · Auteurs
   * Accès : Publique, ouverte aux clés API `authors:read`
   */
  getAuthorsBySlug(params: { path: operations['getAuthorsBySlug']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAuthorsBySlug'>>;
  /**
   * Statistiques publiques d'un auteur
   *
   * `GET /authors/{slug}/stats` · Auteurs
   * Accès : Publique
   */
  getAuthorsBySlugStats(params: { path: operations['getAuthorsBySlugStats']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getAuthorsBySlugStats'>>;
  /**
   * Mes passkeys
   *
   * `GET /auth/passkeys` · Passkeys
   * Accès : Session (connexion requise)
   */
  getAuthPasskeys(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAuthPasskeys'>>;
  /**
   * Statut de mes codes de récupération
   *
   * `GET /auth/recovery` · Récupération de compte
   * Accès : Session (connexion requise)
   */
  getAuthRecovery(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAuthRecovery'>>;
  /**
   * Mes sessions actives
   *
   * `GET /auth/sessions` · Sessions
   * Accès : Session (connexion requise)
   */
  getAuthSessions(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAuthSessions'>>;
  /**
   * Statut de la 2FA sur mon compte
   *
   * `GET /auth/totp` · 2FA (TOTP)
   * Accès : Session (connexion requise)
   */
  getAuthTotp(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getAuthTotp'>>;
  /**
   * Mes conversations
   *
   * `GET /chat` · Chat
   * Accès : Session (connexion requise)
   */
  getChat(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getChat'>>;
  /**
   * Messages d'une conversation
   *
   * `GET /chat/{id}/messages` · Chat
   * Accès : Session (connexion requise)
   */
  getChatByIdMessages(params: { path: operations['getChatByIdMessages']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getChatByIdMessages'>>;
  /**
   * État d’une conversation directe
   *
   * `GET /chat/direct/{userId}` · Chat
   * Accès : Session (connexion requise)
   */
  getChatDirectByUserId(params: { path: operations['getChatDirectByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getChatDirectByUserId'>>;
  /**
   * Nombre de messages non lus
   *
   * `GET /chat/unread-count` · Chat
   * Accès : Session (connexion requise)
   */
  getChatUnreadCount(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getChatUnreadCount'>>;
  /**
   * Collections publiques
   *
   * `GET /collections` · Collections
   * Accès : Publique
   */
  getCollections(params?: { query?: operations['getCollections']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getCollections'>>;
  /**
   * Détail d'une collection
   *
   * `GET /collections/{id}` · Collections
   * Accès : Publique
   */
  getCollectionsById(params: { path: operations['getCollectionsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getCollectionsById'>>;
  /**
   * Mes collections
   *
   * `GET /collections/mine` · Collections
   * Accès : Session (connexion requise)
   */
  getCollectionsMine(params?: { query?: operations['getCollectionsMine']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getCollectionsMine'>>;
  /**
   * Aperçu du hub Communauté
   *
   * `GET /community/overview` · Communauté
   * Accès : Publique
   */
  getCommunityOverview(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getCommunityOverview'>>;
  /**
   * Fil du blog communautaire
   *
   * `GET /community/posts` · Communauté
   * Accès : Publique
   */
  getCommunityPosts(params?: { query?: operations['getCommunityPosts']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getCommunityPosts'>>;
  /**
   * Détails d'un post
   *
   * `GET /community/posts/{id}` · Communauté
   * Accès : Publique
   */
  getCommunityPostsById(params: { path: operations['getCommunityPostsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getCommunityPostsById'>>;
  /**
   * Commentaires d'un post
   *
   * `GET /community/posts/{id}/comments` · Communauté
   * Accès : Publique
   */
  getCommunityPostsByIdComments(params: { path: operations['getCommunityPostsByIdComments']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getCommunityPostsByIdComments'>>;
  /**
   * Tags populaires du forum
   *
   * `GET /community/tags` · Communauté
   * Accès : Publique
   */
  getCommunityTags(params?: { query?: operations['getCommunityTags']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getCommunityTags'>>;
  /**
   * Galerie des thèmes communautaires
   *
   * `GET /community-themes` · Thèmes communautaires
   * Accès : Publique
   */
  getCommunityThemes(params?: { query?: operations['getCommunityThemes']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getCommunityThemes'>>;
  /**
   * Un thème de la galerie
   *
   * `GET /community-themes/{id}` · Thèmes communautaires
   * Accès : Publique
   */
  getCommunityThemesById(params: { path: operations['getCommunityThemesById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getCommunityThemesById'>>;
  /**
   * Mon compte Discord lié
   *
   * `GET /discord/account` · Discord
   * Accès : Session (connexion requise)
   */
  getDiscordAccount(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getDiscordAccount'>>;
  /**
   * Activity : identifiant de l’application
   *
   * `GET /discord/activity/config` · Discord
   * Accès : Publique
   */
  getDiscordActivityConfig(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getDiscordActivityConfig'>>;
  /**
   * Activity : genres et ambiances proposés
   *
   * `GET /discord/activity/options` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  getDiscordActivityOptions(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getDiscordActivityOptions'>>;
  /**
   * Activity : état de la partie
   *
   * `GET /discord/activity/rooms/{instanceId}` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  getDiscordActivityRoomsByInstanceId(params: { path: operations['getDiscordActivityRoomsByInstanceId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getDiscordActivityRoomsByInstanceId'>>;
  /**
   * Activity : couverture d’une œuvre de la partie
   *
   * `GET /discord/activity/rooms/{instanceId}/covers/{slug}` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  getDiscordActivityRoomsByInstanceIdCoversBySlug(params: { path: operations['getDiscordActivityRoomsByInstanceIdCoversBySlug']['parameters']['path'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Activity : couverture à deviner
   *
   * `GET /discord/activity/rooms/{instanceId}/quiz/cover` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  getDiscordActivityRoomsByInstanceIdQuizCover(params: { path: operations['getDiscordActivityRoomsByInstanceIdQuizCover']['parameters']['path'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Activity : page du chapitre lu
   *
   * `GET /discord/activity/rooms/{instanceId}/reading/pages/{index}` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  getDiscordActivityRoomsByInstanceIdReadingPagesByIndex(params: { path: operations['getDiscordActivityRoomsByInstanceIdReadingPagesByIndex']['parameters']['path'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Activity : chercher une œuvre à lire ensemble
   *
   * `GET /discord/activity/works` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  getDiscordActivityWorks(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getDiscordActivityWorks'>>;
  /**
   * Retour de Discord après autorisation
   *
   * `GET /discord/oauth/callback` · Discord
   * Accès : Publique
   */
  getDiscordOauthCallback(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Pages de la documentation du site
   *
   * `GET /documentation` · Site
   * Accès : Publique
   */
  getDocumentation(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getDocumentation'>>;
  /**
   * Secrets chiffrés par la clé de récupération
   *
   * `GET /e2ee/account-data/{type}` · Chiffrement
   * Accès : Session (connexion requise)
   */
  getE2eeAccountDataByType(params: { path: operations['getE2eeAccountDataByType']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getE2eeAccountDataByType'>>;
  /**
   * Clés chiffrées de la sauvegarde
   *
   * `GET /e2ee/backup/keys` · Chiffrement
   * Accès : Session (connexion requise)
   */
  getE2eeBackupKeys(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getE2eeBackupKeys'>>;
  /**
   * Sauvegarde des clés courante
   *
   * `GET /e2ee/backup/version` · Chiffrement
   * Accès : Session (connexion requise)
   */
  getE2eeBackupVersion(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getE2eeBackupVersion'>>;
  /**
   * Mes appareils de chiffrement
   *
   * `GET /e2ee/devices` · Chiffrement
   * Accès : Session (connexion requise)
   */
  getE2eeDevices(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getE2eeDevices'>>;
  /**
   * État du chiffrement pour cette connexion
   *
   * `GET /e2ee/status` · Chiffrement
   * Accès : Session (connexion requise)
   */
  getE2eeStatus(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getE2eeStatus'>>;
  /**
   * Ce qui attend l’appareil
   *
   * `GET /e2ee/sync` · Chiffrement
   * Accès : Session (connexion requise)
   */
  getE2eeSync(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getE2eeSync'>>;
  /**
   * Thèmes événementiels en cours
   *
   * `GET /event-themes` · Site
   * Accès : Publique
   */
  getEventThemes(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getEventThemes'>>;
  /**
   * Favicon d'un domaine (liens externes)
   *
   * `GET /favicons/{host}` · Favicons
   * Accès : Publique
   */
  getFaviconsByHost(params: { path: operations['getFaviconsByHost']['parameters']['path'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Recherche de GIFs (GIPHY)
   *
   * `GET /gifs/search` · GIFs
   * Accès : Session (connexion requise)
   */
  getGifsSearch(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getGifsSearch'>>;
  /**
   * GIFs tendance (GIPHY)
   *
   * `GET /gifs/trending` · GIFs
   * Accès : Session (connexion requise)
   */
  getGifsTrending(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getGifsTrending'>>;
  /**
   * Disposition de la page d'accueil
   *
   * `GET /home-layout` · Site
   * Accès : Publique
   */
  getHomeLayout(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getHomeLayout'>>;
  /**
   * Classement public par points
   *
   * `GET /leaderboard` · Site
   * Accès : Publique
   */
  getLeaderboard(params?: { query?: operations['getLeaderboard']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getLeaderboard'>>;
  /**
   * Mes clés API
   *
   * `GET /me/api-keys` · Clés API
   * Accès : Session (connexion requise)
   */
  getMeApiKeys(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeApiKeys'>>;
  /**
   * Utilisateurs que j’ai bloqués
   *
   * `GET /me/blocks` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeBlocks(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeBlocks'>>;
  /**
   * Mes commentaires
   *
   * `GET /me/comments` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeComments(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeComments'>>;
  /**
   * Continuer la lecture
   *
   * `GET /me/continue-reading` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeContinueReading(params?: { query?: operations['getMeContinueReading']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getMeContinueReading'>>;
  /**
   * Flux des événements temps réel
   *
   * `GET /me/events` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeEvents(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Exporter mes données (RGPD)
   *
   * `GET /me/export-data` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeExportData(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeExportData'>>;
  /**
   * Mes favoris
   *
   * `GET /me/favorites` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeFavorites(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeFavorites'>>;
  /**
   * Historique de lecture
   *
   * `GET /me/history` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeHistory(params?: { query?: operations['getMeHistory']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getMeHistory'>>;
  /**
   * Mon niveau et mes derniers gains
   *
   * `GET /me/level` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeLevel(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeLevel'>>;
  /**
   * Ma bibliothèque
   *
   * `GET /me/library` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeLibrary(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeLibrary'>>;
  /**
   * Nouvelles sorties non lues
   *
   * `GET /me/library/summary` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeLibrarySummary(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeLibrarySummary'>>;
  /**
   * Mes notifications
   *
   * `GET /me/notifications` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeNotifications(params?: { query?: operations['getMeNotifications']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getMeNotifications'>>;
  /**
   * Nombre de notifications non lues
   *
   * `GET /me/notifications/unread-count` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeNotificationsUnreadCount(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeNotificationsUnreadCount'>>;
  /**
   * Mes préférences
   *
   * `GET /me/preferences` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMePreferences(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMePreferences'>>;
  /**
   * Ma progression
   *
   * `GET /me/progression` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeProgression(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeProgression'>>;
  /**
   * Historique de mon XP
   *
   * `GET /me/progression/events` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeProgressionEvents(params?: { query?: operations['getMeProgressionEvents']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getMeProgressionEvents'>>;
  /**
   * Mes thèmes personnels
   *
   * `GET /me/themes` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeThemes(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeThemes'>>;
  /**
   * Mon thème personnel actif
   *
   * `GET /me/themes/active` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeThemesActive(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeThemesActive'>>;
  /**
   * Un de mes thèmes
   *
   * `GET /me/themes/{id}` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeThemesById(params: { path: operations['getMeThemesById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getMeThemesById'>>;
  /**
   * Mes signalements
   *
   * `GET /me/tickets` · Mon compte
   * Accès : Session (connexion requise)
   */
  getMeTickets(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getMeTickets'>>;
  /**
   * Catalogue (liste paginée)
   *
   * `GET /projects` · Projets
   * Accès : Publique, ouverte aux clés API `projects:read`
   */
  getProjects(params?: { query?: operations['getProjects']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjects'>>;
  /**
   * Détails complets d'un projet
   *
   * `GET /projects/{slug}` · Projets
   * Accès : Publique, ouverte aux clés API `projects:read`
   */
  getProjectsBySlug(params: { path: operations['getProjectsBySlug']['parameters']['path']; query?: operations['getProjectsBySlug']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlug'>>;
  /**
   * Détails d'un chapitre
   *
   * `GET /projects/{slug}/chapters/{chapterSlug}` · Projets
   * Accès : Publique
   */
  getProjectsBySlugChaptersByChapterSlug(params: { path: operations['getProjectsBySlugChaptersByChapterSlug']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugChaptersByChapterSlug'>>;
  /**
   * Commentaires d'un chapitre
   *
   * `GET /projects/{slug}/chapters/{chapterSlug}/comments` · Projets
   * Accès : Publique
   */
  getProjectsBySlugChaptersByChapterSlugComments(params: { path: operations['getProjectsBySlugChaptersByChapterSlugComments']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugChaptersByChapterSlugComments'>>;
  /**
   * Commentaires d'un projet
   *
   * `GET /projects/{slug}/comments` · Projets
   * Accès : Publique
   */
  getProjectsBySlugComments(params: { path: operations['getProjectsBySlugComments']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugComments'>>;
  /**
   * Vues quotidiennes de la fiche projet
   *
   * `GET /projects/{slug}/daily-views` · Projets
   * Accès : Publique
   */
  getProjectsBySlugDailyViews(params: { path: operations['getProjectsBySlugDailyViews']['parameters']['path']; query?: operations['getProjectsBySlugDailyViews']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugDailyViews'>>;
  /**
   * Chapitres les plus aimés d'un projet
   *
   * `GET /projects/{slug}/most-liked-chapters` · Projets
   * Accès : Publique
   */
  getProjectsBySlugMostLikedChapters(params: { path: operations['getProjectsBySlugMostLikedChapters']['parameters']['path']; query?: operations['getProjectsBySlugMostLikedChapters']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugMostLikedChapters'>>;
  /**
   * Projets recommandés
   *
   * `GET /projects/{slug}/related` · Projets
   * Accès : Publique
   */
  getProjectsBySlugRelated(params: { path: operations['getProjectsBySlugRelated']['parameters']['path']; query?: operations['getProjectsBySlugRelated']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugRelated'>>;
  /**
   * Statistiques publiques d'une œuvre
   *
   * `GET /projects/{slug}/stats` · Projets
   * Accès : Publique
   */
  getProjectsBySlugStats(params: { path: operations['getProjectsBySlugStats']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugStats'>>;
  /**
   * Liste des pages wiki du projet
   *
   * `GET /projects/{slug}/wiki/pages` · Projets
   * Accès : Publique
   */
  getProjectsBySlugWikiPages(params: { path: operations['getProjectsBySlugWikiPages']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugWikiPages'>>;
  /**
   * Contenu d'une page wiki
   *
   * `GET /projects/{slug}/wiki/pages/{pageSlug}` · Projets
   * Accès : Publique
   */
  getProjectsBySlugWikiPagesByPageSlug(params: { path: operations['getProjectsBySlugWikiPagesByPageSlug']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugWikiPagesByPageSlug'>>;
  /**
   * Historique des révisions du wiki (réviseurs uniquement)
   *
   * `GET /projects/{slug}/wiki/revisions` · Projets
   * Accès : Session (connexion requise)
   */
  getProjectsBySlugWikiRevisions(params: { path: operations['getProjectsBySlugWikiRevisions']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsBySlugWikiRevisions'>>;
  /**
   * Œuvres à la une
   *
   * `GET /projects/featured` · Projets
   * Accès : Publique
   */
  getProjectsFeatured(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getProjectsFeatured'>>;
  /**
   * Derniers chapitres publiés, regroupés par projet
   *
   * `GET /projects/latest-chapters` · Projets
   * Accès : Publique, ouverte aux clés API `chapters:read`
   */
  getProjectsLatestChapters(params?: { query?: operations['getProjectsLatestChapters']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsLatestChapters'>>;
  /**
   * Chapitres les plus aimés
   *
   * `GET /projects/most-liked` · Projets
   * Accès : Publique
   */
  getProjectsMostLiked(params?: { query?: operations['getProjectsMostLiked']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsMostLiked'>>;
  /**
   * Nouvelles séries
   *
   * `GET /projects/new-series` · Projets
   * Accès : Publique
   */
  getProjectsNewSeries(params?: { query?: operations['getProjectsNewSeries']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsNewSeries'>>;
  /**
   * Une œuvre au hasard
   *
   * `GET /projects/random` · Projets
   * Accès : Publique
   */
  getProjectsRandom(params?: { query?: operations['getProjectsRandom']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsRandom'>>;
  /**
   * Derniers commentaires
   *
   * `GET /projects/recent-comments` · Projets
   * Accès : Publique
   */
  getProjectsRecentComments(params?: { query?: operations['getProjectsRecentComments']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsRecentComments'>>;
  /**
   * Œuvres tendance
   *
   * `GET /projects/trending` · Projets
   * Accès : Publique
   */
  getProjectsTrending(params?: { query?: operations['getProjectsTrending']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getProjectsTrending'>>;
  /**
   * Recherche globale
   *
   * `GET /search` · Recherche
   * Accès : Publique
   */
  getSearch(params?: { query?: operations['getSearch']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getSearch'>>;
  /**
   * Suggestions de recherche (autocomplete)
   *
   * `GET /search/suggest` · Recherche
   * Accès : Publique
   */
  getSearchSuggest(params?: { query?: operations['getSearchSuggest']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getSearchSuggest'>>;
  /**
   * Réglages publics du site
   *
   * `GET /site-settings` · Site
   * Accès : Publique
   */
  getSiteSettings(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getSiteSettings'>>;
  /**
   * État du site (maintenance, bandeau, inscriptions)
   *
   * `GET /site-settings/status` · Site
   * Accès : Publique
   */
  getSiteSettingsStatus(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getSiteSettingsStatus'>>;
  /**
   * Statistiques du site
   *
   * `GET /stats` · Site
   * Accès : Publique, ouverte aux clés API `stats:read`
   */
  getStats(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getStats'>>;
  /**
   * Liste des tags
   *
   * `GET /tags` · Tags
   * Accès : Publique, ouverte aux clés API `tags:read`
   */
  getTags(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getTags'>>;
  /**
   * Contenu associé à un tag
   *
   * `GET /tags/{tag}` · Tags
   * Accès : Publique
   */
  getTagsByTag(params: { path: operations['getTagsByTag']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTagsByTag'>>;
  /**
   * Mes demandes de team
   *
   * `GET /team-requests/mine` · Demandes de team
   * Accès : Session (connexion requise)
   */
  getTeamRequestsMine(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getTeamRequestsMine'>>;
  /**
   * Vérifier une adresse de team
   *
   * `GET /team-requests/slug-check` · Demandes de team
   * Accès : Session (connexion requise)
   */
  getTeamRequestsSlugCheck(params: { query: operations['getTeamRequestsSlugCheck']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getTeamRequestsSlugCheck'>>;
  /**
   * Liste des équipes
   *
   * `GET /teams` · Équipes
   * Accès : Publique, ouverte aux clés API `teams:read`
   */
  getTeams(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getTeams'>>;
  /**
   * Détails d'une équipe
   *
   * `GET /teams/{slug}` · Équipes
   * Accès : Publique, ouverte aux clés API `teams:read`
   */
  getTeamsBySlug(params: { path: operations['getTeamsBySlug']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlug'>>;
  /**
   * Succès (badges) d'une équipe
   *
   * `GET /teams/{slug}/achievements` · Équipes
   * Accès : Publique
   */
  getTeamsBySlugAchievements(params: { path: operations['getTeamsBySlugAchievements']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugAchievements'>>;
  /**
   * Agenda d'une équipe
   *
   * `GET /teams/{slug}/agenda` · Équipes
   * Accès : Publique
   */
  getTeamsBySlugAgenda(params: { path: operations['getTeamsBySlugAgenda']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugAgenda'>>;
  /**
   * Serveurs Discord reliés à la team
   *
   * `GET /teams/{slug}/discord` · Équipes
   * Accès : Session (connexion requise)
   */
  getTeamsBySlugDiscord(params: { path: operations['getTeamsBySlugDiscord']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugDiscord'>>;
  /**
   * Salons texte d’un serveur Discord de la team (via le bot)
   *
   * `GET /teams/{slug}/discord/guilds/{guildRef}/channels` · Équipes
   * Accès : Session (connexion requise)
   */
  getTeamsBySlugDiscordGuildsByGuildRefChannels(params: { path: operations['getTeamsBySlugDiscordGuildsByGuildRefChannels']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugDiscordGuildsByGuildRefChannels'>>;
  /**
   * Permissions qui manquent au bot sur un serveur de la team
   *
   * `GET /teams/{slug}/discord/guilds/{guildRef}/health` · Équipes
   * Accès : Session (connexion requise)
   */
  getTeamsBySlugDiscordGuildsByGuildRefHealth(params: { path: operations['getTeamsBySlugDiscordGuildsByGuildRefHealth']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugDiscordGuildsByGuildRefHealth'>>;
  /**
   * Rôles d’un serveur Discord de la team (via le bot)
   *
   * `GET /teams/{slug}/discord/guilds/{guildRef}/roles` · Équipes
   * Accès : Session (connexion requise)
   */
  getTeamsBySlugDiscordGuildsByGuildRefRoles(params: { path: operations['getTeamsBySlugDiscordGuildsByGuildRefRoles']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugDiscordGuildsByGuildRefRoles'>>;
  /**
   * Feed d'une équipe
   *
   * `GET /teams/{slug}/feed` · Équipes
   * Accès : Publique
   */
  getTeamsBySlugFeed(params: { path: operations['getTeamsBySlugFeed']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugFeed'>>;
  /**
   * Compte MangaDex de la team
   *
   * `GET /teams/{slug}/mangadex` · Équipes
   * Accès : Session (connexion requise)
   */
  getTeamsBySlugMangadex(params: { path: operations['getTeamsBySlugMangadex']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugMangadex'>>;
  /**
   * Statistiques d'une équipe
   *
   * `GET /teams/{slug}/stats` · Équipes
   * Accès : Session (connexion requise)
   */
  getTeamsBySlugStats(params: { path: operations['getTeamsBySlugStats']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugStats'>>;
  /**
   * Tableau de bord statistiques d'une équipe
   *
   * `GET /teams/{slug}/stats/dashboard` · Équipes
   * Accès : Session (connexion requise)
   */
  getTeamsBySlugStatsDashboard(params: { path: operations['getTeamsBySlugStatsDashboard']['parameters']['path']; query?: operations['getTeamsBySlugStatsDashboard']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getTeamsBySlugStatsDashboard'>>;
  /**
   * Catalogue des tier lists publiques
   *
   * `GET /tier-lists` · Tier Lists
   * Accès : Publique
   */
  getTierLists(params?: { query?: operations['getTierLists']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getTierLists'>>;
  /**
   * Détail d'une tier list
   *
   * `GET /tier-lists/{id}` · Tier Lists
   * Accès : Publique
   */
  getTierListsById(params: { path: operations['getTierListsById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTierListsById'>>;
  /**
   * Commentaires d'une tier list
   *
   * `GET /tier-lists/{id}/comments` · Tier Lists
   * Accès : Publique
   */
  getTierListsByIdComments(params: { path: operations['getTierListsByIdComments']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTierListsByIdComments'>>;
  /**
   * Image de partage
   *
   * `GET /tier-lists/{id}/share.jpg` · Tier Lists
   * Accès : Publique
   */
  getTierListsByIdShareJpg(params: { path: operations['getTierListsByIdShareJpg']['parameters']['path'] }, options?: RequestOptions): Promise<Response>;
  /**
   * Tier lists similaires
   *
   * `GET /tier-lists/{id}/similar` · Tier Lists
   * Accès : Publique
   */
  getTierListsByIdSimilar(params: { path: operations['getTierListsByIdSimilar']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTierListsByIdSimilar'>>;
  /**
   * Historique des versions
   *
   * `GET /tier-lists/{id}/versions` · Tier Lists
   * Accès : Session (connexion requise)
   */
  getTierListsByIdVersions(params: { path: operations['getTierListsByIdVersions']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTierListsByIdVersions'>>;
  /**
   * Détail d’une version
   *
   * `GET /tier-lists/{id}/versions/{versionId}` · Tier Lists
   * Accès : Session (connexion requise)
   */
  getTierListsByIdVersionsByVersionId(params: { path: operations['getTierListsByIdVersionsByVersionId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getTierListsByIdVersionsByVersionId'>>;
  /**
   * Mes tier lists
   *
   * `GET /tier-lists/mine` · Tier Lists
   * Accès : Session (connexion requise)
   */
  getTierListsMine(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getTierListsMine'>>;
  /**
   * Chiffres du catalogue
   *
   * `GET /tier-lists/stats` · Tier Lists
   * Accès : Publique
   */
  getTierListsStats(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getTierListsStats'>>;
  /**
   * Modèle d'inpainting du clean IA (Atelier)
   *
   * `GET /tools/inpaint-model` · Outils
   * Accès : Session (connexion requise)
   */
  getToolsInpaintModel(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Informations sur une image hébergée
   *
   * `GET /uploads/info` · Fichiers
   * Accès : Publique
   */
  getUploadsInfo(params: { query: operations['getUploadsInfo']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getUploadsInfo'>>;
  /**
   * Profil public complet
   *
   * `GET /users/{id}` · Utilisateurs
   * Accès : Publique
   */
  getUsersById(params: { path: operations['getUsersById']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'getUsersById'>>;
  /**
   * Utilisateur connecté (alias)
   *
   * `GET /users/me` · Utilisateurs
   * Accès : Session (connexion requise)
   */
  getUsersMe(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'getUsersMe'>>;
  /**
   * Rechercher un utilisateur (destinataire de message)
   *
   * `GET /users/search` · Utilisateurs
   * Accès : Session (connexion requise)
   */
  getUsersSearch(params: { query: operations['getUsersSearch']['parameters']['query'] }, options?: RequestOptions): Promise<JsonResult<'getUsersSearch'>>;
  /**
   * Couper ou réactiver les annonces d’un salon
   *
   * `PATCH /admin/discord/channels/{id}` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  patchAdminDiscordChannelsById(params: { path: operations['patchAdminDiscordChannelsById']['parameters']['path']; body: JsonBody<'patchAdminDiscordChannelsById'> }, options?: RequestOptions): Promise<JsonResult<'patchAdminDiscordChannelsById'>>;
  /**
   * Marque une note comme réglée (ou la rouvre)
   *
   * `PATCH /admin/projects/{slug}/chapters/{chapterId}/page-notes/{noteId}` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  patchAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId(params: { path: operations['patchAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId']['parameters']['path']; body: JsonBody<'patchAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId'> }, options?: RequestOptions): Promise<JsonResult<'patchAdminProjectsBySlugChaptersByChapterIdPageNotesByNoteId'>>;
  /**
   * Modifier une tâche (titre, description, statut, urgence, avancement, échéance)
   *
   * `PATCH /admin/tasks/{id}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  patchAdminTasksById(params: { path: operations['patchAdminTasksById']['parameters']['path']; body?: JsonBody<'patchAdminTasksById'> }, options?: RequestOptions): Promise<JsonResult<'patchAdminTasksById'>>;
  /**
   * Modifier une sous-tâche (titre, coché, position)
   *
   * `PATCH /admin/tasks/{id}/subtasks/{subtaskId}` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  patchAdminTasksByIdSubtasksBySubtaskId(params: { path: operations['patchAdminTasksByIdSubtasksBySubtaskId']['parameters']['path']; body?: JsonBody<'patchAdminTasksByIdSubtasksBySubtaskId'> }, options?: RequestOptions): Promise<JsonResult<'patchAdminTasksByIdSubtasksBySubtaskId'>>;
  /**
   * Activer ou couper les MP Discord
   *
   * `PATCH /discord/account` · Discord
   * Accès : Session (connexion requise)
   */
  patchDiscordAccount(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'patchDiscordAccount'>>;
  /**
   * Mettre en pause ou reprendre les annonces d’un salon de la team
   *
   * `PATCH /teams/{slug}/discord/channels/{channelRef}` · Équipes
   * Accès : Session (connexion requise)
   */
  patchTeamsBySlugDiscordChannelsByChannelRef(params: { path: operations['patchTeamsBySlugDiscordChannelsByChannelRef']['parameters']['path']; body: JsonBody<'patchTeamsBySlugDiscordChannelsByChannelRef'> }, options?: RequestOptions): Promise<JsonResult<'patchTeamsBySlugDiscordChannelsByChannelRef'>>;
  /**
   * Restaurer un commentaire d'article supprimé
   *
   * `POST /admin/article-comments/{id}/restore` · Admin — Commentaires d'articles
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  postAdminArticleCommentsByIdRestore(params: { path: operations['postAdminArticleCommentsByIdRestore']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminArticleCommentsByIdRestore'>>;
  /**
   * Créer un auteur
   *
   * `POST /admin/authors` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  postAdminAuthors(params: { body: JsonBody<'postAdminAuthors'> }, options?: RequestOptions): Promise<JsonResult<'postAdminAuthors'>>;
  /**
   * Supprimer plusieurs auteurs
   *
   * `POST /admin/authors/bulk/delete` · Admin — Auteurs
   * Accès : Administration (`DELETE_AUTHORS`)
   */
  postAdminAuthorsBulkDelete(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postAdminAuthorsBulkDelete'>>;
  /**
   * Changer l'avatar d'un auteur
   *
   * `POST /admin/authors/{id}/avatar` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  postAdminAuthorsByIdAvatar(params: { path: operations['postAdminAuthorsByIdAvatar']['parameters']['path']; body: MultipartBody<'postAdminAuthorsByIdAvatar'> }, options?: RequestOptions): Promise<JsonResult<'postAdminAuthorsByIdAvatar'>>;
  /**
   * Changer la bannière d'un auteur
   *
   * `POST /admin/authors/{id}/banner` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  postAdminAuthorsByIdBanner(params: { path: operations['postAdminAuthorsByIdBanner']['parameters']['path']; body: MultipartBody<'postAdminAuthorsByIdBanner'> }, options?: RequestOptions): Promise<JsonResult<'postAdminAuthorsByIdBanner'>>;
  /**
   * Restaurer un commentaire supprimé
   *
   * `POST /admin/blog/comments/{id}/restore` · Admin — Blog communautaire
   * Accès : Administration (`MANAGE_BLOG`)
   */
  postAdminBlogCommentsByIdRestore(params: { path: operations['postAdminBlogCommentsByIdRestore']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminBlogCommentsByIdRestore'>>;
  /**
   * Restaurer un post supprimé
   *
   * `POST /admin/blog/posts/{id}/restore` · Admin — Blog communautaire
   * Accès : Administration (`MANAGE_BLOG`)
   */
  postAdminBlogPostsByIdRestore(params: { path: operations['postAdminBlogPostsByIdRestore']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminBlogPostsByIdRestore'>>;
  /**
   * Supprimer des fichiers orphelins
   *
   * `POST /admin/cleanup/orphan-files/delete` · Admin — Nettoyage
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  postAdminCleanupOrphanFilesDelete(params: { body: JsonBody<'postAdminCleanupOrphanFilesDelete'> }, options?: RequestOptions): Promise<JsonResult<'postAdminCleanupOrphanFilesDelete'>>;
  /**
   * Supprimer des comptes jamais utilisés
   *
   * `POST /admin/cleanup/unused-accounts/delete` · Admin — Nettoyage
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  postAdminCleanupUnusedAccountsDelete(params: { body: JsonBody<'postAdminCleanupUnusedAccountsDelete'> }, options?: RequestOptions): Promise<JsonResult<'postAdminCleanupUnusedAccountsDelete'>>;
  /**
   * Restaurer un commentaire supprimé
   *
   * `POST /admin/comments/{id}/restore` · Admin — Commentaires
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  postAdminCommentsByIdRestore(params: { path: operations['postAdminCommentsByIdRestore']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminCommentsByIdRestore'>>;
  /**
   * Renvoyer un envoi Discord
   *
   * `POST /admin/discord/deliveries/{id}/retry` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  postAdminDiscordDeliveriesByIdRetry(params: { path: operations['postAdminDiscordDeliveriesByIdRetry']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminDiscordDeliveriesByIdRetry'>>;
  /**
   * Configurer un salon depuis le site
   *
   * `POST /admin/discord/guilds/{id}/channels` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  postAdminDiscordGuildsByIdChannels(params: { path: operations['postAdminDiscordGuildsByIdChannels']['parameters']['path']; body: JsonBody<'postAdminDiscordGuildsByIdChannels'> }, options?: RequestOptions): Promise<JsonResult<'postAdminDiscordGuildsByIdChannels'>>;
  /**
   * Valider ou bloquer un serveur Discord
   *
   * `POST /admin/discord/guilds/{id}/review` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  postAdminDiscordGuildsByIdReview(params: { path: operations['postAdminDiscordGuildsByIdReview']['parameters']['path']; body: JsonBody<'postAdminDiscordGuildsByIdReview'> }, options?: RequestOptions): Promise<JsonResult<'postAdminDiscordGuildsByIdReview'>>;
  /**
   * Créer une page de documentation
   *
   * `POST /admin/documentation` · Admin — Documentation
   * Accès : Administration (`MANAGE_DOCS`)
   */
  postAdminDocumentation(params: { body: JsonBody<'postAdminDocumentation'> }, options?: RequestOptions): Promise<JsonResult<'postAdminDocumentation'>>;
  /**
   * Appliquer des suggestions
   *
   * `POST /admin/incomplete-projects/{id}/apply` · Admin — Fiches incomplètes
   * Accès : Administration (`MANAGE_WEBCOMICS`)
   */
  postAdminIncompleteProjectsByIdApply(params: { path: operations['postAdminIncompleteProjectsByIdApply']['parameters']['path']; body?: JsonBody<'postAdminIncompleteProjectsByIdApply'> }, options?: RequestOptions): Promise<JsonResult<'postAdminIncompleteProjectsByIdApply'>>;
  /**
   * Importer des chapitres MangaDex
   *
   * `POST /admin/mangadex/import` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  postAdminMangadexImport(params: { body: JsonBody<'postAdminMangadexImport'> }, options?: RequestOptions): Promise<Response>;
  /**
   * Lancer un import MangaDex en tâche de fond
   *
   * `POST /admin/mangadex/imports` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  postAdminMangadexImports(params: { body: JsonBody<'postAdminMangadexImports'> }, options?: RequestOptions): Promise<JsonResult<'postAdminMangadexImports'>>;
  /**
   * Vérifier maintenant les nouveaux chapitres MangaDex
   *
   * `POST /admin/mangadex/projects/{slug}/sync/run` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  postAdminMangadexProjectsBySlugSyncRun(params: { path: operations['postAdminMangadexProjectsBySlugSyncRun']['parameters']['path']; body?: JsonBody<'postAdminMangadexProjectsBySlugSyncRun'> }, options?: RequestOptions): Promise<JsonResult<'postAdminMangadexProjectsBySlugSyncRun'>>;
  /**
   * Importer toutes les séries MangaDex d'une équipe
   *
   * `POST /admin/mangadex/teams/{teamId}/import-all` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  postAdminMangadexTeamsByTeamIdImportAll(params: { path: operations['postAdminMangadexTeamsByTeamIdImportAll']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminMangadexTeamsByTeamIdImportAll'>>;
  /**
   * Traiter un signalement
   *
   * `POST /admin/moderation/reports/{ticketId}/resolve` · Admin — Modération
   * Accès : Administration (`MODERATE_COMMENTS` ou `MANAGE_TICKETS`)
   */
  postAdminModerationReportsByTicketIdResolve(params: { path: operations['postAdminModerationReportsByTicketIdResolve']['parameters']['path']; body: JsonBody<'postAdminModerationReportsByTicketIdResolve'> }, options?: RequestOptions): Promise<JsonResult<'postAdminModerationReportsByTicketIdResolve'>>;
  /**
   * Valider ou rejeter une révision de wiki
   *
   * `POST /admin/moderation/wiki/{revisionId}/review` · Admin — Modération
   * Accès : Administration (`MANAGE_WIKI`)
   */
  postAdminModerationWikiByRevisionIdReview(params: { path: operations['postAdminModerationWikiByRevisionIdReview']['parameters']['path']; body: JsonBody<'postAdminModerationWikiByRevisionIdReview'> }, options?: RequestOptions): Promise<JsonResult<'postAdminModerationWikiByRevisionIdReview'>>;
  /**
   * Créer un projet
   *
   * `POST /admin/projects` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjects(params: { body: JsonBody<'postAdminProjects'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjects'>>;
  /**
   * Changer la visibilité de plusieurs projets
   *
   * `POST /admin/projects/bulk/visibility` · Admin — Projets
   * Accès : Administration (`MANAGE_WEBCOMICS`)
   */
  postAdminProjectsBulkVisibility(params: { body: JsonBody<'postAdminProjectsBulkVisibility'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBulkVisibility'>>;
  /**
   * Ajouter un chapitre
   *
   * `POST /admin/projects/{slug}/chapters` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChapters(params: { path: operations['postAdminProjectsBySlugChapters']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChapters'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChapters'>>;
  /**
   * Supprimer plusieurs chapitres
   *
   * `POST /admin/projects/{slug}/chapters/bulk/delete` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersBulkDelete(params: { path: operations['postAdminProjectsBySlugChaptersBulkDelete']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChaptersBulkDelete'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersBulkDelete'>>;
  /**
   * Changer le statut de plusieurs chapitres
   *
   * `POST /admin/projects/{slug}/chapters/bulk/status` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersBulkStatus(params: { path: operations['postAdminProjectsBySlugChaptersBulkStatus']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChaptersBulkStatus'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersBulkStatus'>>;
  /**
   * Ajouter, retirer ou remplacer les équipes de plusieurs chapitres
   *
   * `POST /admin/projects/{slug}/chapters/bulk/teams` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersBulkTeams(params: { path: operations['postAdminProjectsBySlugChaptersBulkTeams']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChaptersBulkTeams'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersBulkTeams'>>;
  /**
   * Assigner un tome à plusieurs chapitres
   *
   * `POST /admin/projects/{slug}/chapters/bulk/volume` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersBulkVolume(params: { path: operations['postAdminProjectsBySlugChaptersBulkVolume']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChaptersBulkVolume'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersBulkVolume'>>;
  /**
   * Publier un chapitre sur MangaDex
   *
   * `POST /admin/projects/{slug}/chapters/{chapterId}/mangadex` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersByChapterIdMangadex(params: { path: operations['postAdminProjectsBySlugChaptersByChapterIdMangadex']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersByChapterIdMangadex'>>;
  /**
   * Remplace des pages du chapitre par leur version éditée
   *
   * `POST /admin/projects/{slug}/chapters/{chapterId}/page-edits/export` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersByChapterIdPageEditsExport(params: { path: operations['postAdminProjectsBySlugChaptersByChapterIdPageEditsExport']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersByChapterIdPageEditsExport'>>;
  /**
   * Signale la page ouverte dans l'éditeur
   *
   * `POST /admin/projects/{slug}/chapters/{chapterId}/page-edits/presence` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersByChapterIdPageEditsPresence(params: { path: operations['postAdminProjectsBySlugChaptersByChapterIdPageEditsPresence']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersByChapterIdPageEditsPresence'>>;
  /**
   * Épingle une note de vérification sur une page
   *
   * `POST /admin/projects/{slug}/chapters/{chapterId}/page-notes` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersByChapterIdPageNotes(params: { path: operations['postAdminProjectsBySlugChaptersByChapterIdPageNotes']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChaptersByChapterIdPageNotes'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersByChapterIdPageNotes'>>;
  /**
   * Envoyer une page d'un chapitre
   *
   * `POST /admin/projects/{slug}/chapters/{chapterId}/pages` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersByChapterIdPages(params: { path: operations['postAdminProjectsBySlugChaptersByChapterIdPages']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersByChapterIdPages'>>;
  /**
   * Ajoute une note de traduction
   *
   * `POST /admin/projects/{slug}/chapters/{chapterId}/translation-notes` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersByChapterIdTranslationNotes(params: { path: operations['postAdminProjectsBySlugChaptersByChapterIdTranslationNotes']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChaptersByChapterIdTranslationNotes'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersByChapterIdTranslationNotes'>>;
  /**
   * Réordonner les chapitres d'une œuvre
   *
   * `POST /admin/projects/{slug}/chapters/reorder` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugChaptersReorder(params: { path: operations['postAdminProjectsBySlugChaptersReorder']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugChaptersReorder'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugChaptersReorder'>>;
  /**
   * Ajoute une police pour l'équipe
   *
   * `POST /admin/projects/{slug}/editor-fonts` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugEditorFonts(params: { path: operations['postAdminProjectsBySlugEditorFonts']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugEditorFonts'>>;
  /**
   * Enregistre un style de texte pour l'équipe
   *
   * `POST /admin/projects/{slug}/editor-styles` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugEditorStyles(params: { path: operations['postAdminProjectsBySlugEditorStyles']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugEditorStyles'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugEditorStyles'>>;
  /**
   * Appliquer la couverture d'une série MangaDex
   *
   * `POST /admin/projects/{slug}/mangadex-cover` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  postAdminProjectsBySlugMangadexCover(params: { path: operations['postAdminProjectsBySlugMangadexCover']['parameters']['path']; body: JsonBody<'postAdminProjectsBySlugMangadexCover'> }, options?: RequestOptions): Promise<JsonResult<'postAdminProjectsBySlugMangadexCover'>>;
  /**
   * Créer un rôle global
   *
   * `POST /admin/roles` · Admin — Rôles
   * Accès : Administration (`MANAGE_ROLES`)
   */
  postAdminRoles(params: { body: JsonBody<'postAdminRoles'> }, options?: RequestOptions): Promise<JsonResult<'postAdminRoles'>>;
  /**
   * Lever une sanction
   *
   * `POST /admin/sanctions/{id}/revoke` · Admin — Sanctions
   * Accès : Administration (`MANAGE_USERS` ou `MODERATE_COMMENTS`)
   */
  postAdminSanctionsByIdRevoke(params: { path: operations['postAdminSanctionsByIdRevoke']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminSanctionsByIdRevoke'>>;
  /**
   * Prononcer une sanction
   *
   * `POST /admin/sanctions/users/{userId}` · Admin — Sanctions
   * Accès : Administration (`MANAGE_USERS` ou `MODERATE_COMMENTS`)
   */
  postAdminSanctionsUsersByUserId(params: { path: operations['postAdminSanctionsUsersByUserId']['parameters']['path']; body: JsonBody<'postAdminSanctionsUsersByUserId'> }, options?: RequestOptions): Promise<JsonResult<'postAdminSanctionsUsersByUserId'>>;
  /**
   * Tester le webhook Discord
   *
   * `POST /admin/settings/discord-webhook/test` · Admin — Réglages
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  postAdminSettingsDiscordWebhookTest(params: { body: JsonBody<'postAdminSettingsDiscordWebhookTest'> }, options?: RequestOptions): Promise<JsonResult<'postAdminSettingsDiscordWebhookTest'>>;
  /**
   * Créer un tag
   *
   * `POST /admin/tags` · Admin — Tags
   * Accès : Administration (`MANAGE_TAGS`)
   */
  postAdminTags(params: { body: JsonBody<'postAdminTags'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTags'>>;
  /**
   * Supprimer plusieurs tags
   *
   * `POST /admin/tags/bulk/delete` · Admin — Tags
   * Accès : Administration (`MANAGE_TAGS` ou `DELETE_TAGS`)
   */
  postAdminTagsBulkDelete(params: { body: JsonBody<'postAdminTagsBulkDelete'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTagsBulkDelete'>>;
  /**
   * Fusionner un tag doublon
   *
   * `POST /admin/tags/{id}/merge` · Admin — Tags
   * Accès : Administration (`MANAGE_TAGS` ou `DELETE_TAGS`)
   */
  postAdminTagsByIdMerge(params: { path: operations['postAdminTagsByIdMerge']['parameters']['path']; body: JsonBody<'postAdminTagsByIdMerge'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTagsByIdMerge'>>;
  /**
   * Créer une tâche
   *
   * `POST /admin/tasks` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  postAdminTasks(params: { body: JsonBody<'postAdminTasks'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTasks'>>;
  /**
   * Ajouter un responsable
   *
   * `POST /admin/tasks/{id}/assignees` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  postAdminTasksByIdAssignees(params: { path: operations['postAdminTasksByIdAssignees']['parameters']['path']; body: JsonBody<'postAdminTasksByIdAssignees'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTasksByIdAssignees'>>;
  /**
   * Ajouter un commentaire
   *
   * `POST /admin/tasks/{id}/comments` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  postAdminTasksByIdComments(params: { path: operations['postAdminTasksByIdComments']['parameters']['path']; body: JsonBody<'postAdminTasksByIdComments'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTasksByIdComments'>>;
  /**
   * Associer un label
   *
   * `POST /admin/tasks/{id}/labels` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  postAdminTasksByIdLabels(params: { path: operations['postAdminTasksByIdLabels']['parameters']['path']; body: JsonBody<'postAdminTasksByIdLabels'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTasksByIdLabels'>>;
  /**
   * Annuler la suppression d’une tâche
   *
   * `POST /admin/tasks/{id}/restore` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  postAdminTasksByIdRestore(params: { path: operations['postAdminTasksByIdRestore']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminTasksByIdRestore'>>;
  /**
   * Créer une sous-tâche
   *
   * `POST /admin/tasks/{id}/subtasks` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  postAdminTasksByIdSubtasks(params: { path: operations['postAdminTasksByIdSubtasks']['parameters']['path']; body: JsonBody<'postAdminTasksByIdSubtasks'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTasksByIdSubtasks'>>;
  /**
   * Créer un label
   *
   * `POST /admin/tasks/labels` · Admin — Tâches
   * Accès : Administration (`MANAGE_TASKS`)
   */
  postAdminTasksLabels(params: { body: JsonBody<'postAdminTasksLabels'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTasksLabels'>>;
  /**
   * Accepter une demande de team
   *
   * `POST /admin/team-requests/{id}/approve` · Admin — Demandes de team
   * Accès : Administration (`MANAGE_TEAMS`)
   */
  postAdminTeamRequestsByIdApprove(params: { path: operations['postAdminTeamRequestsByIdApprove']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamRequestsByIdApprove'>>;
  /**
   * Refuser une demande de team
   *
   * `POST /admin/team-requests/{id}/reject` · Admin — Demandes de team
   * Accès : Administration (`MANAGE_TEAMS`)
   */
  postAdminTeamRequestsByIdReject(params: { path: operations['postAdminTeamRequestsByIdReject']['parameters']['path']; body: JsonBody<'postAdminTeamRequestsByIdReject'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamRequestsByIdReject'>>;
  /**
   * Demander des précisions sur une demande de team
   *
   * `POST /admin/team-requests/{id}/request-info` · Admin — Demandes de team
   * Accès : Administration (`MANAGE_TEAMS`)
   */
  postAdminTeamRequestsByIdRequestInfo(params: { path: operations['postAdminTeamRequestsByIdRequestInfo']['parameters']['path']; body: JsonBody<'postAdminTeamRequestsByIdRequestInfo'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamRequestsByIdRequestInfo'>>;
  /**
   * Créer une équipe
   *
   * `POST /admin/teams` · Admin — Équipes
   * Accès : Administration (`MANAGE_TEAMS`)
   */
  postAdminTeams(params: { body: JsonBody<'postAdminTeams'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeams'>>;
  /**
   * Changer l'avatar d'une équipe
   *
   * `POST /admin/teams/{id}/avatar` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  postAdminTeamsByIdAvatar(params: { path: operations['postAdminTeamsByIdAvatar']['parameters']['path']; body: MultipartBody<'postAdminTeamsByIdAvatar'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamsByIdAvatar'>>;
  /**
   * Changer la bannière d'une équipe
   *
   * `POST /admin/teams/{id}/banner` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  postAdminTeamsByIdBanner(params: { path: operations['postAdminTeamsByIdBanner']['parameters']['path']; body: MultipartBody<'postAdminTeamsByIdBanner'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamsByIdBanner'>>;
  /**
   * Ajouter un membre
   *
   * `POST /admin/teams/{id}/members` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  postAdminTeamsByIdMembers(params: { path: operations['postAdminTeamsByIdMembers']['parameters']['path']; body: JsonBody<'postAdminTeamsByIdMembers'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamsByIdMembers'>>;
  /**
   * Créer un rôle d'équipe
   *
   * `POST /admin/teams/{id}/roles` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  postAdminTeamsByIdRoles(params: { path: operations['postAdminTeamsByIdRoles']['parameters']['path']; body: JsonBody<'postAdminTeamsByIdRoles'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamsByIdRoles'>>;
  /**
   * Transférer la propriété
   *
   * `POST /admin/teams/{id}/transfer-ownership` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  postAdminTeamsByIdTransferOwnership(params: { path: operations['postAdminTeamsByIdTransferOwnership']['parameters']['path']; body: JsonBody<'postAdminTeamsByIdTransferOwnership'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTeamsByIdTransferOwnership'>>;
  /**
   * Modifier un signalement
   *
   * `POST /admin/tickets/{id}` · Admin — Signalements
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  postAdminTicketsById(params: { path: operations['postAdminTicketsById']['parameters']['path']; body?: JsonBody<'postAdminTicketsById'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTicketsById'>>;
  /**
   * Répondre au demandeur
   *
   * `POST /admin/tickets/{id}/reply` · Admin — Signalements
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  postAdminTicketsByIdReply(params: { path: operations['postAdminTicketsByIdReply']['parameters']['path']; body: JsonBody<'postAdminTicketsByIdReply'> }, options?: RequestOptions): Promise<JsonResult<'postAdminTicketsByIdReply'>>;
  /**
   * Restaurer un commentaire de tier list supprimé
   *
   * `POST /admin/tier-list-comments/{id}/restore` · Admin — Commentaires de tier lists
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  postAdminTierListCommentsByIdRestore(params: { path: operations['postAdminTierListCommentsByIdRestore']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminTierListCommentsByIdRestore'>>;
  /**
   * Recalculer les tendances maintenant
   *
   * `POST /admin/trending/recompute` · Admin — Tendances
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  postAdminTrendingRecompute(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postAdminTrendingRecompute'>>;
  /**
   * Préparer un ajout de pages
   *
   * `POST /admin/uploads` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploads(params: { body: JsonBody<'postAdminUploads'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUploads'>>;
  /**
   * Annuler un envoi
   *
   * `POST /admin/uploads/{id}/cancel` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdCancel(params: { path: operations['postAdminUploadsByIdCancel']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdCancel'>>;
  /**
   * Prendre en main un envoi
   *
   * `POST /admin/uploads/{id}/claim` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdClaim(params: { path: operations['postAdminUploadsByIdClaim']['parameters']['path']; body: JsonBody<'postAdminUploadsByIdClaim'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdClaim'>>;
  /**
   * Valider un envoi
   *
   * `POST /admin/uploads/{id}/finalize` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdFinalize(params: { path: operations['postAdminUploadsByIdFinalize']['parameters']['path']; body: JsonBody<'postAdminUploadsByIdFinalize'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdFinalize'>>;
  /**
   * Renouveler le bail d’un envoi
   *
   * `POST /admin/uploads/{id}/heartbeat` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdHeartbeat(params: { path: operations['postAdminUploadsByIdHeartbeat']['parameters']['path']; body: JsonBody<'postAdminUploadsByIdHeartbeat'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdHeartbeat'>>;
  /**
   * Interrompre un envoi
   *
   * `POST /admin/uploads/{id}/interrupt` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdInterrupt(params: { path: operations['postAdminUploadsByIdInterrupt']['parameters']['path']; body: JsonBody<'postAdminUploadsByIdInterrupt'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdInterrupt'>>;
  /**
   * Envoyer une page
   *
   * `POST /admin/uploads/{id}/pages/{position}` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdPagesByPosition(params: { path: operations['postAdminUploadsByIdPagesByPosition']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdPagesByPosition'>>;
  /**
   * Signaler une page impossible à préparer
   *
   * `POST /admin/uploads/{id}/pages/{position}/fail` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdPagesByPositionFail(params: { path: operations['postAdminUploadsByIdPagesByPositionFail']['parameters']['path']; body: JsonBody<'postAdminUploadsByIdPagesByPositionFail'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdPagesByPositionFail'>>;
  /**
   * Écarter une page
   *
   * `POST /admin/uploads/{id}/pages/{position}/skip` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsByIdPagesByPositionSkip(params: { path: operations['postAdminUploadsByIdPagesByPositionSkip']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsByIdPagesByPositionSkip'>>;
  /**
   * Retirer les envois finis
   *
   * `POST /admin/uploads/clear` · Admin — Uploads
   * Accès : Session (connexion requise)
   */
  postAdminUploadsClear(params?: { body?: JsonBody<'postAdminUploadsClear'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUploadsClear'>>;
  /**
   * Créer un utilisateur
   *
   * `POST /admin/users` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  postAdminUsers(params: { body: JsonBody<'postAdminUsers'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUsers'>>;
  /**
   * Supprimer plusieurs utilisateurs
   *
   * `POST /admin/users/bulk/delete` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  postAdminUsersBulkDelete(params: { body: JsonBody<'postAdminUsersBulkDelete'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUsersBulkDelete'>>;
  /**
   * Changer le statut de plusieurs utilisateurs
   *
   * `POST /admin/users/bulk/status` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  postAdminUsersBulkStatus(params: { body: JsonBody<'postAdminUsersBulkStatus'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUsersBulkStatus'>>;
  /**
   * Ajouter une note interne
   *
   * `POST /admin/users/{id}/notes` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  postAdminUsersByIdNotes(params: { path: operations['postAdminUsersByIdNotes']['parameters']['path']; body: JsonBody<'postAdminUsersByIdNotes'> }, options?: RequestOptions): Promise<JsonResult<'postAdminUsersByIdNotes'>>;
  /**
   * Déconnecter un compte partout
   *
   * `POST /admin/users/{id}/sessions/revoke` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  postAdminUsersByIdSessionsRevoke(params: { path: operations['postAdminUsersByIdSessionsRevoke']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAdminUsersByIdSessionsRevoke'>>;
  /**
   * Créer un article
   *
   * `POST /articles` · Articles
   * Accès : Administration (`PUBLISH_ARTICLES`)
   */
  postArticles(params: { body: JsonBody<'postArticles'> }, options?: RequestOptions): Promise<JsonResult<'postArticles'>>;
  /**
   * Supprimer plusieurs articles
   *
   * `POST /articles/bulk/delete` · Articles
   * Accès : Administration (`DELETE_ARTICLES`)
   */
  postArticlesBulkDelete(params: { body: JsonBody<'postArticlesBulkDelete'> }, options?: RequestOptions): Promise<JsonResult<'postArticlesBulkDelete'>>;
  /**
   * Changer le statut de plusieurs articles
   *
   * `POST /articles/bulk/status` · Articles
   * Accès : Administration (`PUBLISH_ARTICLES`)
   */
  postArticlesBulkStatus(params: { body: JsonBody<'postArticlesBulkStatus'> }, options?: RequestOptions): Promise<JsonResult<'postArticlesBulkStatus'>>;
  /**
   * Commenter un article
   *
   * `POST /articles/{slug}/comments` · Articles
   * Accès : Administration (`COMMENT`)
   */
  postArticlesBySlugComments(params: { path: operations['postArticlesBySlugComments']['parameters']['path']; body: JsonBody<'postArticlesBySlugComments'> }, options?: RequestOptions): Promise<JsonResult<'postArticlesBySlugComments'>>;
  /**
   * Basculer le like sur un commentaire
   *
   * `POST /articles/{slug}/comments/{commentId}/like` · Articles
   * Accès : Session (connexion requise)
   */
  postArticlesBySlugCommentsByCommentIdLike(params: { path: operations['postArticlesBySlugCommentsByCommentIdLike']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postArticlesBySlugCommentsByCommentIdLike'>>;
  /**
   * Signaler un commentaire
   *
   * `POST /articles/{slug}/comments/{commentId}/report` · Articles
   * Accès : Session (connexion requise)
   */
  postArticlesBySlugCommentsByCommentIdReport(params: { path: operations['postArticlesBySlugCommentsByCommentIdReport']['parameters']['path']; body: JsonBody<'postArticlesBySlugCommentsByCommentIdReport'> }, options?: RequestOptions): Promise<JsonResult<'postArticlesBySlugCommentsByCommentIdReport'>>;
  /**
   * Changer son avatar
   *
   * `POST /auth/avatar` · Auth
   * Accès : Session (connexion requise)
   */
  postAuthAvatar(params: { body: MultipartBody<'postAuthAvatar'> }, options?: RequestOptions): Promise<JsonResult<'postAuthAvatar'>>;
  /**
   * Changer sa bannière
   *
   * `POST /auth/banner` · Auth
   * Accès : Session (connexion requise)
   */
  postAuthBanner(params: { body: MultipartBody<'postAuthBanner'> }, options?: RequestOptions): Promise<JsonResult<'postAuthBanner'>>;
  /**
   * Changer son mot de passe
   *
   * `POST /auth/change-password` · Auth
   * Accès : Session (connexion requise)
   */
  postAuthChangePassword(params: { body: JsonBody<'postAuthChangePassword'> }, options?: RequestOptions): Promise<JsonResult<'postAuthChangePassword'>>;
  /**
   * Changer son pseudo
   *
   * `POST /auth/change-username` · Auth
   * Accès : Session (connexion requise)
   */
  postAuthChangeUsername(params: { body: JsonBody<'postAuthChangeUsername'> }, options?: RequestOptions): Promise<JsonResult<'postAuthChangeUsername'>>;
  /**
   * Connexion
   *
   * `POST /auth/login` · Auth
   * Accès : Publique
   */
  postAuthLogin(params: { body: JsonBody<'postAuthLogin'> }, options?: RequestOptions): Promise<JsonResult<'postAuthLogin'>>;
  /**
   * Déconnexion
   *
   * `POST /auth/logout` · Auth
   * Accès : Publique
   */
  postAuthLogout(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postAuthLogout'>>;
  /**
   * Basculer le suivi d'un auteur
   *
   * `POST /authors/{slug}/follow` · Auteurs
   * Accès : Session (connexion requise)
   */
  postAuthorsBySlugFollow(params: { path: operations['postAuthorsBySlugFollow']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postAuthorsBySlugFollow'>>;
  /**
   * Préparer une connexion par passkey
   *
   * `POST /auth/passkeys/login-options` · Passkeys
   * Accès : Publique
   */
  postAuthPasskeysLoginOptions(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postAuthPasskeysLoginOptions'>>;
  /**
   * Vérifier une connexion par passkey
   *
   * `POST /auth/passkeys/login-verify` · Passkeys
   * Accès : Publique
   */
  postAuthPasskeysLoginVerify(params: { body: JsonBody<'postAuthPasskeysLoginVerify'> }, options?: RequestOptions): Promise<JsonResult<'postAuthPasskeysLoginVerify'>>;
  /**
   * Préparer l'enregistrement d'un nouveau passkey
   *
   * `POST /auth/passkeys/register-options` · Passkeys
   * Accès : Session (connexion requise)
   */
  postAuthPasskeysRegisterOptions(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postAuthPasskeysRegisterOptions'>>;
  /**
   * Vérifier et enregistrer un nouveau passkey
   *
   * `POST /auth/passkeys/register-verify` · Passkeys
   * Accès : Session (connexion requise)
   */
  postAuthPasskeysRegisterVerify(params: { body: JsonBody<'postAuthPasskeysRegisterVerify'> }, options?: RequestOptions): Promise<JsonResult<'postAuthPasskeysRegisterVerify'>>;
  /**
   * Régénère mes codes de récupération
   *
   * `POST /auth/recovery` · Récupération de compte
   * Accès : Session (connexion requise)
   */
  postAuthRecovery(params: { body: JsonBody<'postAuthRecovery'> }, options?: RequestOptions): Promise<JsonResult<'postAuthRecovery'>>;
  /**
   * Échange un code de récupération contre un nouveau mot de passe
   *
   * `POST /auth/recovery/redeem` · Récupération de compte
   * Accès : Publique
   */
  postAuthRecoveryRedeem(params: { body: JsonBody<'postAuthRecoveryRedeem'> }, options?: RequestOptions): Promise<JsonResult<'postAuthRecoveryRedeem'>>;
  /**
   * Inscription
   *
   * `POST /auth/register` · Auth
   * Accès : Publique
   */
  postAuthRegister(params: { body: JsonBody<'postAuthRegister'> }, options?: RequestOptions): Promise<JsonResult<'postAuthRegister'>>;
  /**
   * Déconnecte tous les autres appareils
   *
   * `POST /auth/sessions/revoke-others` · Sessions
   * Accès : Session (connexion requise)
   */
  postAuthSessionsRevokeOthers(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postAuthSessionsRevokeOthers'>>;
  /**
   * Confirme l’enrôlement 2FA
   *
   * `POST /auth/totp/confirm` · 2FA (TOTP)
   * Accès : Session (connexion requise)
   */
  postAuthTotpConfirm(params: { body: JsonBody<'postAuthTotpConfirm'> }, options?: RequestOptions): Promise<JsonResult<'postAuthTotpConfirm'>>;
  /**
   * Valide le code TOTP après un login mot de passe (étape 2)
   *
   * `POST /auth/totp/login-verify` · Auth
   * Accès : Publique
   */
  postAuthTotpLoginVerify(params: { body: JsonBody<'postAuthTotpLoginVerify'> }, options?: RequestOptions): Promise<JsonResult<'postAuthTotpLoginVerify'>>;
  /**
   * Démarre l’enrôlement 2FA
   *
   * `POST /auth/totp/setup` · 2FA (TOTP)
   * Accès : Session (connexion requise)
   */
  postAuthTotpSetup(params: { body: JsonBody<'postAuthTotpSetup'> }, options?: RequestOptions): Promise<JsonResult<'postAuthTotpSetup'>>;
  /**
   * Chiffrer une conversation de bout en bout
   *
   * `POST /chat/{id}/encryption` · Chat
   * Accès : Session (connexion requise)
   */
  postChatByIdEncryption(params: { path: operations['postChatByIdEncryption']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postChatByIdEncryption'>>;
  /**
   * Envoyer un message
   *
   * `POST /chat/{id}/messages` · Chat
   * Accès : Session (connexion requise)
   */
  postChatByIdMessages(params: { path: operations['postChatByIdMessages']['parameters']['path']; body?: JsonBody<'postChatByIdMessages'> }, options?: RequestOptions): Promise<JsonResult<'postChatByIdMessages'>>;
  /**
   * Signaler « en train d'écrire »
   *
   * `POST /chat/{id}/typing` · Chat
   * Accès : Session (connexion requise)
   */
  postChatByIdTyping(params: { path: operations['postChatByIdTyping']['parameters']['path'] }, options?: RequestOptions): Promise<void>;
  /**
   * Ouvrir une conversation directe
   *
   * `POST /chat/direct/{userId}/conversation` · Chat
   * Accès : Session (connexion requise)
   */
  postChatDirectByUserIdConversation(params: { path: operations['postChatDirectByUserIdConversation']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postChatDirectByUserIdConversation'>>;
  /**
   * Démarrer/continuer une conversation directe
   *
   * `POST /chat/messages` · Chat
   * Accès : Session (connexion requise)
   */
  postChatMessages(params: { body: JsonBody<'postChatMessages'> }, options?: RequestOptions): Promise<JsonResult<'postChatMessages'>>;
  /**
   * Signaler un message
   *
   * `POST /chat/messages/{messageId}/report` · Chat
   * Accès : Session (connexion requise)
   */
  postChatMessagesByMessageIdReport(params: { path: operations['postChatMessagesByMessageIdReport']['parameters']['path']; body: JsonBody<'postChatMessagesByMessageIdReport'> }, options?: RequestOptions): Promise<JsonResult<'postChatMessagesByMessageIdReport'>>;
  /**
   * Canal de support d'un ticket
   *
   * `POST /chat/support/{ticketId}` · Chat
   * Accès : Session (connexion requise)
   */
  postChatSupportByTicketId(params: { path: operations['postChatSupportByTicketId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postChatSupportByTicketId'>>;
  /**
   * Conversation de groupe d'une équipe
   *
   * `POST /chat/team/{teamId}` · Chat
   * Accès : Session (connexion requise)
   */
  postChatTeamByTeamId(params: { path: operations['postChatTeamByTeamId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postChatTeamByTeamId'>>;
  /**
   * Contacter une équipe
   *
   * `POST /chat/team/{teamId}/contact` · Chat
   * Accès : Session (connexion requise)
   */
  postChatTeamByTeamIdContact(params: { path: operations['postChatTeamByTeamIdContact']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postChatTeamByTeamIdContact'>>;
  /**
   * Créer une collection
   *
   * `POST /collections` · Collections
   * Accès : Session (connexion requise)
   */
  postCollections(params: { body: JsonBody<'postCollections'> }, options?: RequestOptions): Promise<JsonResult<'postCollections'>>;
  /**
   * Ajouter un projet à une collection
   *
   * `POST /collections/{id}/items` · Collections
   * Accès : Session (connexion requise)
   */
  postCollectionsByIdItems(params: { path: operations['postCollectionsByIdItems']['parameters']['path']; body: JsonBody<'postCollectionsByIdItems'> }, options?: RequestOptions): Promise<JsonResult<'postCollectionsByIdItems'>>;
  /**
   * Suivre/ne plus suivre un auteur de post
   *
   * `POST /community/authors/{userId}/follow` · Communauté
   * Accès : Session (connexion requise)
   */
  postCommunityAuthorsByUserIdFollow(params: { path: operations['postCommunityAuthorsByUserIdFollow']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postCommunityAuthorsByUserIdFollow'>>;
  /**
   * Basculer le like sur un commentaire
   *
   * `POST /community/comments/{id}/like` · Communauté
   * Accès : Session (connexion requise)
   */
  postCommunityCommentsByIdLike(params: { path: operations['postCommunityCommentsByIdLike']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postCommunityCommentsByIdLike'>>;
  /**
   * Signaler un commentaire
   *
   * `POST /community/comments/{id}/report` · Communauté
   * Accès : Session (connexion requise)
   */
  postCommunityCommentsByIdReport(params: { path: operations['postCommunityCommentsByIdReport']['parameters']['path']; body: JsonBody<'postCommunityCommentsByIdReport'> }, options?: RequestOptions): Promise<JsonResult<'postCommunityCommentsByIdReport'>>;
  /**
   * Publier un post
   *
   * `POST /community/posts` · Communauté
   * Accès : Session (connexion requise)
   */
  postCommunityPosts(params: { body: JsonBody<'postCommunityPosts'> }, options?: RequestOptions): Promise<JsonResult<'postCommunityPosts'>>;
  /**
   * Commenter un post
   *
   * `POST /community/posts/{id}/comments` · Communauté
   * Accès : Administration (`COMMENT`)
   */
  postCommunityPostsByIdComments(params: { path: operations['postCommunityPostsByIdComments']['parameters']['path']; body: JsonBody<'postCommunityPostsByIdComments'> }, options?: RequestOptions): Promise<JsonResult<'postCommunityPostsByIdComments'>>;
  /**
   * Réagir à un post
   *
   * `POST /community/posts/{id}/react` · Communauté
   * Accès : Session (connexion requise)
   */
  postCommunityPostsByIdReact(params: { path: operations['postCommunityPostsByIdReact']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postCommunityPostsByIdReact'>>;
  /**
   * Installer un thème dans « Mes thèmes »
   *
   * `POST /community-themes/{id}/install` · Thèmes communautaires
   * Accès : Session (connexion requise)
   */
  postCommunityThemesByIdInstall(params: { path: operations['postCommunityThemesByIdInstall']['parameters']['path']; body?: JsonBody<'postCommunityThemesByIdInstall'> }, options?: RequestOptions): Promise<JsonResult<'postCommunityThemesByIdInstall'>>;
  /**
   * Signaler un thème
   *
   * `POST /community-themes/{id}/report` · Thèmes communautaires
   * Accès : Session (connexion requise)
   */
  postCommunityThemesByIdReport(params: { path: operations['postCommunityThemesByIdReport']['parameters']['path']; body: JsonBody<'postCommunityThemesByIdReport'> }, options?: RequestOptions): Promise<JsonResult<'postCommunityThemesByIdReport'>>;
  /**
   * Activity : ajouter une œuvre à mes favoris
   *
   * `POST /discord/activity/favorites` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityFavorites(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityFavorites'>>;
  /**
   * Activity : proposer une œuvre
   *
   * `POST /discord/activity/rooms/{instanceId}/pick` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdPick(params: { path: operations['postDiscordActivityRoomsByInstanceIdPick']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdPick'>>;
  /**
   * Activity : lancer « Devine l’œuvre »
   *
   * `POST /discord/activity/rooms/{instanceId}/quiz` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdQuiz(params: { path: operations['postDiscordActivityRoomsByInstanceIdQuiz']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdQuiz'>>;
  /**
   * Activity : répondre
   *
   * `POST /discord/activity/rooms/{instanceId}/quiz/answer` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdQuizAnswer(params: { path: operations['postDiscordActivityRoomsByInstanceIdQuizAnswer']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdQuizAnswer'>>;
  /**
   * Activity : lancer une lecture ensemble
   *
   * `POST /discord/activity/rooms/{instanceId}/reading` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdReading(params: { path: operations['postDiscordActivityRoomsByInstanceIdReading']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdReading'>>;
  /**
   * Activity : prendre la main
   *
   * `POST /discord/activity/rooms/{instanceId}/reading/host` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdReadingHost(params: { path: operations['postDiscordActivityRoomsByInstanceIdReadingHost']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdReadingHost'>>;
  /**
   * Activity : réagir
   *
   * `POST /discord/activity/rooms/{instanceId}/reading/react` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdReadingReact(params: { path: operations['postDiscordActivityRoomsByInstanceIdReadingReact']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdReadingReact'>>;
  /**
   * Activity : nouvelle manche
   *
   * `POST /discord/activity/rooms/{instanceId}/reset` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdReset(params: { path: operations['postDiscordActivityRoomsByInstanceIdReset']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdReset'>>;
  /**
   * Activity : lancer un swipe
   *
   * `POST /discord/activity/rooms/{instanceId}/swipe` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdSwipe(params: { path: operations['postDiscordActivityRoomsByInstanceIdSwipe']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdSwipe'>>;
  /**
   * Activity : révéler le swipe
   *
   * `POST /discord/activity/rooms/{instanceId}/swipe/reveal` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdSwipeReveal(params: { path: operations['postDiscordActivityRoomsByInstanceIdSwipeReveal']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdSwipeReveal'>>;
  /**
   * Activity : lancer une tier list à plusieurs
   *
   * `POST /discord/activity/rooms/{instanceId}/tierlist` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdTierlist(params: { path: operations['postDiscordActivityRoomsByInstanceIdTierlist']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdTierlist'>>;
  /**
   * Activity : révéler la tier list
   *
   * `POST /discord/activity/rooms/{instanceId}/tierlist/reveal` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdTierlistReveal(params: { path: operations['postDiscordActivityRoomsByInstanceIdTierlistReveal']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdTierlistReveal'>>;
  /**
   * Activity : enregistrer la tier list sur Komamy
   *
   * `POST /discord/activity/rooms/{instanceId}/tierlist/save` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  postDiscordActivityRoomsByInstanceIdTierlistSave(params: { path: operations['postDiscordActivityRoomsByInstanceIdTierlistSave']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityRoomsByInstanceIdTierlistSave'>>;
  /**
   * Activity : échange du code OAuth2
   *
   * `POST /discord/activity/token` · Discord
   * Accès : Publique
   */
  postDiscordActivityToken(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postDiscordActivityToken'>>;
  /**
   * Endpoint des interactions Discord
   *
   * `POST /discord/interactions` · Discord
   * Accès : Interne
   */
  postDiscordInteractions(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postDiscordInteractions'>>;
  /**
   * Commencer la liaison d’un compte Discord
   *
   * `POST /discord/link` · Discord
   * Accès : Session (connexion requise)
   */
  postDiscordLink(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postDiscordLink'>>;
  /**
   * Actualiser mes rôles Discord
   *
   * `POST /discord/roles/sync` · Discord
   * Accès : Session (connexion requise)
   */
  postDiscordRolesSync(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postDiscordRolesSync'>>;
  /**
   * Crée une sauvegarde des clés
   *
   * `POST /e2ee/backup/version` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeBackupVersion(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeBackupVersion'>>;
  /**
   * Rattache l’appareil de chiffrement du navigateur à cette connexion
   *
   * `POST /e2ee/devices` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeDevices(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeDevices'>>;
  /**
   * Réclame des pré-clés
   *
   * `POST /e2ee/keys/claim` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeKeysClaim(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeKeysClaim'>>;
  /**
   * Clés publiques de comptes
   *
   * `POST /e2ee/keys/query` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeKeysQuery(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeKeysQuery'>>;
  /**
   * Publie des signatures
   *
   * `POST /e2ee/keys/signatures` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeKeysSignatures(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeKeysSignatures'>>;
  /**
   * Publie l’identité du compte (clés de signature croisée)
   *
   * `POST /e2ee/keys/signing` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeKeysSigning(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeKeysSigning'>>;
  /**
   * Publie les clés publiques de l’appareil
   *
   * `POST /e2ee/keys/upload` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeKeysUpload(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeKeysUpload'>>;
  /**
   * Réinitialise le chiffrement du compte
   *
   * `POST /e2ee/reset` · Chiffrement
   * Accès : Session (connexion requise)
   */
  postE2eeReset(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postE2eeReset'>>;
  /**
   * Créer une clé API
   *
   * `POST /me/api-keys` · Clés API
   * Accès : Session (connexion requise)
   */
  postMeApiKeys(params: { body: JsonBody<'postMeApiKeys'> }, options?: RequestOptions): Promise<JsonResult<'postMeApiKeys'>>;
  /**
   * Renouveler une clé API
   *
   * `POST /me/api-keys/{id}/rotate` · Clés API
   * Accès : Session (connexion requise)
   */
  postMeApiKeysByIdRotate(params: { path: operations['postMeApiKeysByIdRotate']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postMeApiKeysByIdRotate'>>;
  /**
   * Uploader une image pour un contenu Markdown
   *
   * `POST /me/content-images` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeContentImages(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postMeContentImages'>>;
  /**
   * Marquer la bibliothèque comme vue
   *
   * `POST /me/library/seen` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeLibrarySeen(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postMeLibrarySeen'>>;
  /**
   * Marquer une notification comme lue
   *
   * `POST /me/notifications/{id}/read` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeNotificationsByIdRead(params: { path: operations['postMeNotificationsByIdRead']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postMeNotificationsByIdRead'>>;
  /**
   * Marquer des notifications comme lues
   *
   * `POST /me/notifications/read` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeNotificationsRead(params: { body: JsonBody<'postMeNotificationsRead'> }, options?: RequestOptions): Promise<JsonResult<'postMeNotificationsRead'>>;
  /**
   * Marquer toutes les notifications comme lues
   *
   * `POST /me/notifications/read-all` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeNotificationsReadAll(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postMeNotificationsReadAll'>>;
  /**
   * S'abonner aux notifications push
   *
   * `POST /me/push-subscriptions` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMePushSubscriptions(params: { body: JsonBody<'postMePushSubscriptions'> }, options?: RequestOptions): Promise<JsonResult<'postMePushSubscriptions'>>;
  /**
   * Créer ou importer un thème
   *
   * `POST /me/themes` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeThemes(params: { body: JsonBody<'postMeThemes'> }, options?: RequestOptions): Promise<JsonResult<'postMeThemes'>>;
  /**
   * Dupliquer un thème
   *
   * `POST /me/themes/{id}/duplicate` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeThemesByIdDuplicate(params: { path: operations['postMeThemesByIdDuplicate']['parameters']['path']; body?: JsonBody<'postMeThemesByIdDuplicate'> }, options?: RequestOptions): Promise<JsonResult<'postMeThemesByIdDuplicate'>>;
  /**
   * Publier un thème dans la galerie communautaire
   *
   * `POST /me/themes/{id}/publish` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeThemesByIdPublish(params: { path: operations['postMeThemesByIdPublish']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postMeThemesByIdPublish'>>;
  /**
   * Enregistrer une version
   *
   * `POST /me/themes/{id}/save` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeThemesByIdSave(params: { path: operations['postMeThemesByIdSave']['parameters']['path']; body: JsonBody<'postMeThemesByIdSave'> }, options?: RequestOptions): Promise<JsonResult<'postMeThemesByIdSave'>>;
  /**
   * Mettre à jour un thème installé depuis la galerie
   *
   * `POST /me/themes/{id}/sync` · Mon compte
   * Accès : Session (connexion requise)
   */
  postMeThemesByIdSync(params: { path: operations['postMeThemesByIdSync']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postMeThemesByIdSync'>>;
  /**
   * Commenter un chapitre
   *
   * `POST /projects/{slug}/chapters/{chapterSlug}/comments` · Projets
   * Accès : Administration (`COMMENT`)
   */
  postProjectsBySlugChaptersByChapterSlugComments(params: { path: operations['postProjectsBySlugChaptersByChapterSlugComments']['parameters']['path']; body: JsonBody<'postProjectsBySlugChaptersByChapterSlugComments'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugChaptersByChapterSlugComments'>>;
  /**
   * Basculer le like sur un chapitre
   *
   * `POST /projects/{slug}/chapters/{chapterSlug}/like` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugChaptersByChapterSlugLike(params: { path: operations['postProjectsBySlugChaptersByChapterSlugLike']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugChaptersByChapterSlugLike'>>;
  /**
   * Sauvegarder la progression de lecture
   *
   * `POST /projects/{slug}/chapters/{chapterSlug}/progress` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugChaptersByChapterSlugProgress(params: { path: operations['postProjectsBySlugChaptersByChapterSlugProgress']['parameters']['path']; body: JsonBody<'postProjectsBySlugChaptersByChapterSlugProgress'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugChaptersByChapterSlugProgress'>>;
  /**
   * Basculer le statut lu/non-lu
   *
   * `POST /projects/{slug}/chapters/{chapterSlug}/read` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugChaptersByChapterSlugRead(params: { path: operations['postProjectsBySlugChaptersByChapterSlugRead']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugChaptersByChapterSlugRead'>>;
  /**
   * Incrémenter les vues du chapitre
   *
   * `POST /projects/{slug}/chapters/{chapterSlug}/view` · Projets
   * Accès : Publique
   */
  postProjectsBySlugChaptersByChapterSlugView(params: { path: operations['postProjectsBySlugChaptersByChapterSlugView']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugChaptersByChapterSlugView'>>;
  /**
   * Marquer/démarquer plusieurs chapitres comme lus
   *
   * `POST /projects/{slug}/chapters/read-bulk` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugChaptersReadBulk(params: { path: operations['postProjectsBySlugChaptersReadBulk']['parameters']['path']; body: JsonBody<'postProjectsBySlugChaptersReadBulk'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugChaptersReadBulk'>>;
  /**
   * Commenter un projet
   *
   * `POST /projects/{slug}/comments` · Projets
   * Accès : Administration (`COMMENT`)
   */
  postProjectsBySlugComments(params: { path: operations['postProjectsBySlugComments']['parameters']['path']; body: JsonBody<'postProjectsBySlugComments'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugComments'>>;
  /**
   * Basculer le like sur un commentaire
   *
   * `POST /projects/{slug}/comments/{commentId}/like` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugCommentsByCommentIdLike(params: { path: operations['postProjectsBySlugCommentsByCommentIdLike']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugCommentsByCommentIdLike'>>;
  /**
   * Basculer le favori sur un projet
   *
   * `POST /projects/{slug}/favorite` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugFavorite(params: { path: operations['postProjectsBySlugFavorite']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugFavorite'>>;
  /**
   * Noter un projet
   *
   * `POST /projects/{slug}/rating` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugRating(params: { path: operations['postProjectsBySlugRating']['parameters']['path']; body: JsonBody<'postProjectsBySlugRating'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugRating'>>;
  /**
   * Signaler un projet (ou un commentaire)
   *
   * `POST /projects/{slug}/tickets` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugTickets(params: { path: operations['postProjectsBySlugTickets']['parameters']['path']; body: JsonBody<'postProjectsBySlugTickets'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugTickets'>>;
  /**
   * Incrémenter les vues de la fiche projet
   *
   * `POST /projects/{slug}/view` · Projets
   * Accès : Publique
   */
  postProjectsBySlugView(params: { path: operations['postProjectsBySlugView']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugView'>>;
  /**
   * Proposer une nouvelle page wiki
   *
   * `POST /projects/{slug}/wiki/pages` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugWikiPages(params: { path: operations['postProjectsBySlugWikiPages']['parameters']['path']; body: JsonBody<'postProjectsBySlugWikiPages'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugWikiPages'>>;
  /**
   * Changer la catégorie d'une page wiki (réviseurs uniquement)
   *
   * `POST /projects/{slug}/wiki/pages/{pageSlug}/category` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugWikiPagesByPageSlugCategory(params: { path: operations['postProjectsBySlugWikiPagesByPageSlugCategory']['parameters']['path']; body: JsonBody<'postProjectsBySlugWikiPagesByPageSlugCategory'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugWikiPagesByPageSlugCategory'>>;
  /**
   * Proposer une révision sur une page wiki existante
   *
   * `POST /projects/{slug}/wiki/pages/{pageSlug}/revisions` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugWikiPagesByPageSlugRevisions(params: { path: operations['postProjectsBySlugWikiPagesByPageSlugRevisions']['parameters']['path']; body: JsonBody<'postProjectsBySlugWikiPagesByPageSlugRevisions'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugWikiPagesByPageSlugRevisions'>>;
  /**
   * Renommer une page wiki (réviseurs uniquement)
   *
   * `POST /projects/{slug}/wiki/pages/{pageSlug}/title` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugWikiPagesByPageSlugTitle(params: { path: operations['postProjectsBySlugWikiPagesByPageSlugTitle']['parameters']['path']; body: JsonBody<'postProjectsBySlugWikiPagesByPageSlugTitle'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugWikiPagesByPageSlugTitle'>>;
  /**
   * Valider ou rejeter une révision du wiki
   *
   * `POST /projects/{slug}/wiki/revisions/{id}/review` · Projets
   * Accès : Session (connexion requise)
   */
  postProjectsBySlugWikiRevisionsByIdReview(params: { path: operations['postProjectsBySlugWikiRevisionsByIdReview']['parameters']['path']; body: JsonBody<'postProjectsBySlugWikiRevisionsByIdReview'> }, options?: RequestOptions): Promise<JsonResult<'postProjectsBySlugWikiRevisionsByIdReview'>>;
  /**
   * Demander la création d’une team
   *
   * `POST /team-requests` · Demandes de team
   * Accès : Session (connexion requise)
   */
  postTeamRequests(params: { body: JsonBody<'postTeamRequests'> }, options?: RequestOptions): Promise<JsonResult<'postTeamRequests'>>;
  /**
   * Ajouter une entrée d'agenda
   *
   * `POST /teams/{slug}/agenda` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugAgenda(params: { path: operations['postTeamsBySlugAgenda']['parameters']['path']; body: JsonBody<'postTeamsBySlugAgenda'> }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugAgenda'>>;
  /**
   * Envoyer un message de test dans un salon de la team
   *
   * `POST /teams/{slug}/discord/channels/{channelRef}/test` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugDiscordChannelsByChannelRefTest(params: { path: operations['postTeamsBySlugDiscordChannelsByChannelRefTest']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugDiscordChannelsByChannelRefTest'>>;
  /**
   * Connecter un serveur Discord à la team
   *
   * `POST /teams/{slug}/discord/connect` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugDiscordConnect(params: { path: operations['postTeamsBySlugDiscordConnect']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugDiscordConnect'>>;
  /**
   * Configurer un salon du serveur Discord de la team
   *
   * `POST /teams/{slug}/discord/guilds/{guildRef}/channels` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugDiscordGuildsByGuildRefChannels(params: { path: operations['postTeamsBySlugDiscordGuildsByGuildRefChannels']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugDiscordGuildsByGuildRefChannels'>>;
  /**
   * Aperçu d’une annonce de sortie avec une mise en forme
   *
   * `POST /teams/{slug}/discord/guilds/{guildRef}/preview` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugDiscordGuildsByGuildRefPreview(params: { path: operations['postTeamsBySlugDiscordGuildsByGuildRefPreview']['parameters']['path']; body?: JsonBody<'postTeamsBySlugDiscordGuildsByGuildRefPreview'> }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugDiscordGuildsByGuildRefPreview'>>;
  /**
   * Publier le menu des rôles d’un serveur de la team
   *
   * `POST /teams/{slug}/discord/guilds/{guildRef}/role-menu` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugDiscordGuildsByGuildRefRoleMenu(params: { path: operations['postTeamsBySlugDiscordGuildsByGuildRefRoleMenu']['parameters']['path']; body: JsonBody<'postTeamsBySlugDiscordGuildsByGuildRefRoleMenu'> }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugDiscordGuildsByGuildRefRoleMenu'>>;
  /**
   * Créer un rôle sur le serveur Discord de la team
   *
   * `POST /teams/{slug}/discord/guilds/{guildRef}/roles` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugDiscordGuildsByGuildRefRoles(params: { path: operations['postTeamsBySlugDiscordGuildsByGuildRefRoles']['parameters']['path']; body: JsonBody<'postTeamsBySlugDiscordGuildsByGuildRefRoles'> }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugDiscordGuildsByGuildRefRoles'>>;
  /**
   * Publier un post de feed
   *
   * `POST /teams/{slug}/feed` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugFeed(params: { path: operations['postTeamsBySlugFeed']['parameters']['path']; body?: JsonBody<'postTeamsBySlugFeed'> }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugFeed'>>;
  /**
   * Réagir à un post de feed
   *
   * `POST /teams/{slug}/feed/{postId}/react` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugFeedByPostIdReact(params: { path: operations['postTeamsBySlugFeedByPostIdReact']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugFeedByPostIdReact'>>;
  /**
   * Voter à un sondage du feed
   *
   * `POST /teams/{slug}/feed/{postId}/vote` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugFeedByPostIdVote(params: { path: operations['postTeamsBySlugFeedByPostIdVote']['parameters']['path']; body: JsonBody<'postTeamsBySlugFeedByPostIdVote'> }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugFeedByPostIdVote'>>;
  /**
   * Basculer le suivi d'une équipe
   *
   * `POST /teams/{slug}/follow` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugFollow(params: { path: operations['postTeamsBySlugFollow']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugFollow'>>;
  /**
   * Appliquer un planning de sorties
   *
   * `POST /teams/{slug}/release-plan` · Équipes
   * Accès : Session (connexion requise)
   */
  postTeamsBySlugReleasePlan(params: { path: operations['postTeamsBySlugReleasePlan']['parameters']['path']; body: JsonBody<'postTeamsBySlugReleasePlan'> }, options?: RequestOptions): Promise<JsonResult<'postTeamsBySlugReleasePlan'>>;
  /**
   * Créer un ticket de support
   *
   * `POST /tickets` · Tickets
   * Accès : Session (connexion requise)
   */
  postTickets(params: { body: JsonBody<'postTickets'> }, options?: RequestOptions): Promise<JsonResult<'postTickets'>>;
  /**
   * Créer une tier list
   *
   * `POST /tier-lists` · Tier Lists
   * Accès : Session (connexion requise)
   */
  postTierLists(params: { body: JsonBody<'postTierLists'> }, options?: RequestOptions): Promise<JsonResult<'postTierLists'>>;
  /**
   * Inviter un collaborateur
   *
   * `POST /tier-lists/{id}/collaborators` · Tier Lists
   * Accès : Session (connexion requise)
   */
  postTierListsByIdCollaborators(params: { path: operations['postTierListsByIdCollaborators']['parameters']['path']; body: JsonBody<'postTierListsByIdCollaborators'> }, options?: RequestOptions): Promise<JsonResult<'postTierListsByIdCollaborators'>>;
  /**
   * Commenter une tier list
   *
   * `POST /tier-lists/{id}/comments` · Tier Lists
   * Accès : Administration (`COMMENT`)
   */
  postTierListsByIdComments(params: { path: operations['postTierListsByIdComments']['parameters']['path']; body: JsonBody<'postTierListsByIdComments'> }, options?: RequestOptions): Promise<JsonResult<'postTierListsByIdComments'>>;
  /**
   * Basculer le like sur un commentaire
   *
   * `POST /tier-lists/{id}/comments/{commentId}/like` · Tier Lists
   * Accès : Session (connexion requise)
   */
  postTierListsByIdCommentsByCommentIdLike(params: { path: operations['postTierListsByIdCommentsByCommentIdLike']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postTierListsByIdCommentsByCommentIdLike'>>;
  /**
   * Signaler un commentaire
   *
   * `POST /tier-lists/{id}/comments/{commentId}/report` · Tier Lists
   * Accès : Session (connexion requise)
   */
  postTierListsByIdCommentsByCommentIdReport(params: { path: operations['postTierListsByIdCommentsByCommentIdReport']['parameters']['path']; body: JsonBody<'postTierListsByIdCommentsByCommentIdReport'> }, options?: RequestOptions): Promise<JsonResult<'postTierListsByIdCommentsByCommentIdReport'>>;
  /**
   * Mettre une tier list en favori
   *
   * `POST /tier-lists/{id}/favorite` · Tier Lists
   * Accès : Session (connexion requise)
   */
  postTierListsByIdFavorite(params: { path: operations['postTierListsByIdFavorite']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'postTierListsByIdFavorite'>>;
  /**
   * Restaurer une version
   *
   * `POST /tier-lists/{id}/versions/{versionId}/restore` · Tier Lists
   * Accès : Session (connexion requise)
   */
  postTierListsByIdVersionsByVersionIdRestore(params: { path: operations['postTierListsByIdVersionsByVersionIdRestore']['parameters']['path']; body: JsonBody<'postTierListsByIdVersionsByVersionIdRestore'> }, options?: RequestOptions): Promise<JsonResult<'postTierListsByIdVersionsByVersionIdRestore'>>;
  /**
   * Convertit une ou plusieurs images vers un autre format
   *
   * `POST /tools/convert` · Outils
   * Accès : Session (connexion requise)
   */
  postToolsConvert(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Fusionne plusieurs images en une seule planche verticale
   *
   * `POST /tools/merge` · Outils
   * Accès : Session (connexion requise)
   */
  postToolsMerge(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Corrige contraste/luminosité/saturation en lot
   *
   * `POST /tools/normalize` · Outils
   * Accès : Session (connexion requise)
   */
  postToolsNormalize(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Analyse la qualité d'un lot d'images avant publication
   *
   * `POST /tools/quality-check` · Outils
   * Accès : Session (connexion requise)
   */
  postToolsQualityCheck(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'postToolsQualityCheck'>>;
  /**
   * Découpe une image en plusieurs tranches (archive ZIP)
   *
   * `POST /tools/split` · Outils
   * Accès : Session (connexion requise)
   */
  postToolsSplit(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Ajoute un filigrane texte à une ou plusieurs images
   *
   * `POST /tools/watermark` · Outils
   * Accès : Session (connexion requise)
   */
  postToolsWatermark(params?: Record<string, never>, options?: RequestOptions): Promise<Response>;
  /**
   * Masquer/afficher un commentaire d'article
   *
   * `PUT /admin/article-comments/{id}` · Admin — Commentaires d'articles
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  putAdminArticleCommentsById(params: { path: operations['putAdminArticleCommentsById']['parameters']['path']; body: JsonBody<'putAdminArticleCommentsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminArticleCommentsById'>>;
  /**
   * Modifier un auteur
   *
   * `PUT /admin/authors/{id}` · Admin — Auteurs
   * Accès : Session (connexion requise)
   */
  putAdminAuthorsById(params: { path: operations['putAdminAuthorsById']['parameters']['path']; body: JsonBody<'putAdminAuthorsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminAuthorsById'>>;
  /**
   * Masquer/afficher un commentaire
   *
   * `PUT /admin/blog/comments/{id}` · Admin — Blog communautaire
   * Accès : Administration (`MANAGE_BLOG`)
   */
  putAdminBlogCommentsById(params: { path: operations['putAdminBlogCommentsById']['parameters']['path']; body: JsonBody<'putAdminBlogCommentsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminBlogCommentsById'>>;
  /**
   * Masquer/afficher un post
   *
   * `PUT /admin/blog/posts/{id}` · Admin — Blog communautaire
   * Accès : Administration (`MANAGE_BLOG`)
   */
  putAdminBlogPostsById(params: { path: operations['putAdminBlogPostsById']['parameters']['path']; body: JsonBody<'putAdminBlogPostsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminBlogPostsById'>>;
  /**
   * Masquer/afficher un commentaire
   *
   * `PUT /admin/comments/{id}` · Admin — Commentaires
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  putAdminCommentsById(params: { path: operations['putAdminCommentsById']['parameters']['path']; body: JsonBody<'putAdminCommentsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminCommentsById'>>;
  /**
   * Choisir les annonces d’un salon
   *
   * `PUT /admin/discord/channels/{id}/events` · Admin — Discord
   * Accès : Administration (`MANAGE_DISCORD`)
   */
  putAdminDiscordChannelsByIdEvents(params: { path: operations['putAdminDiscordChannelsByIdEvents']['parameters']['path']; body: JsonBody<'putAdminDiscordChannelsByIdEvents'> }, options?: RequestOptions): Promise<JsonResult<'putAdminDiscordChannelsByIdEvents'>>;
  /**
   * Modifier une page de documentation
   *
   * `PUT /admin/documentation/{id}` · Admin — Documentation
   * Accès : Administration (`MANAGE_DOCS`)
   */
  putAdminDocumentationById(params: { path: operations['putAdminDocumentationById']['parameters']['path']; body: JsonBody<'putAdminDocumentationById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminDocumentationById'>>;
  /**
   * Réordonner les pages de documentation
   *
   * `PUT /admin/documentation/order` · Admin — Documentation
   * Accès : Administration (`MANAGE_DOCS`)
   */
  putAdminDocumentationOrder(params: { body: JsonBody<'putAdminDocumentationOrder'> }, options?: RequestOptions): Promise<JsonResult<'putAdminDocumentationOrder'>>;
  /**
   * Enregistrer un thème événementiel
   *
   * `PUT /admin/event-themes/{themeId}` · Admin — Thèmes événementiels
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  putAdminEventThemesByThemeId(params: { path: operations['putAdminEventThemesByThemeId']['parameters']['path']; body: JsonBody<'putAdminEventThemesByThemeId'> }, options?: RequestOptions): Promise<JsonResult<'putAdminEventThemesByThemeId'>>;
  /**
   * Régler la mise à jour automatique d'une œuvre depuis MangaDex
   *
   * `PUT /admin/mangadex/projects/{slug}/sync` · Admin — Import MangaDex
   * Accès : Session (connexion requise)
   */
  putAdminMangadexProjectsBySlugSync(params: { path: operations['putAdminMangadexProjectsBySlugSync']['parameters']['path']; body: JsonBody<'putAdminMangadexProjectsBySlugSync'> }, options?: RequestOptions): Promise<JsonResult<'putAdminMangadexProjectsBySlugSync'>>;
  /**
   * Modifier un projet
   *
   * `PUT /admin/projects/{slug}` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  putAdminProjectsBySlug(params: { path: operations['putAdminProjectsBySlug']['parameters']['path']; body?: JsonBody<'putAdminProjectsBySlug'> }, options?: RequestOptions): Promise<JsonResult<'putAdminProjectsBySlug'>>;
  /**
   * Modifier un chapitre
   *
   * `PUT /admin/projects/{slug}/chapters/{chapterId}` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  putAdminProjectsBySlugChaptersByChapterId(params: { path: operations['putAdminProjectsBySlugChaptersByChapterId']['parameters']['path']; body?: JsonBody<'putAdminProjectsBySlugChaptersByChapterId'> }, options?: RequestOptions): Promise<JsonResult<'putAdminProjectsBySlugChaptersByChapterId'>>;
  /**
   * Enregistre l'édit d'une page
   *
   * `PUT /admin/projects/{slug}/chapters/{chapterId}/page-edits` · Admin — Éditeur de pages
   * Accès : Session (connexion requise)
   */
  putAdminProjectsBySlugChaptersByChapterIdPageEdits(params: { path: operations['putAdminProjectsBySlugChaptersByChapterIdPageEdits']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putAdminProjectsBySlugChaptersByChapterIdPageEdits'>>;
  /**
   * Mettre en place les pages d'un chapitre
   *
   * `PUT /admin/projects/{slug}/chapters/{chapterId}/pages` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  putAdminProjectsBySlugChaptersByChapterIdPages(params: { path: operations['putAdminProjectsBySlugChaptersByChapterIdPages']['parameters']['path']; body: JsonBody<'putAdminProjectsBySlugChaptersByChapterIdPages'> }, options?: RequestOptions): Promise<JsonResult<'putAdminProjectsBySlugChaptersByChapterIdPages'>>;
  /**
   * Modifie une note de traduction
   *
   * `PUT /admin/projects/{slug}/chapters/{chapterId}/translation-notes/{noteId}` · Admin — Projets
   * Accès : Session (connexion requise)
   */
  putAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId(params: { path: operations['putAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId']['parameters']['path']; body?: JsonBody<'putAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId'> }, options?: RequestOptions): Promise<JsonResult<'putAdminProjectsBySlugChaptersByChapterIdTranslationNotesByNoteId'>>;
  /**
   * Poser une dérogation de permissions
   *
   * `PUT /admin/projects/{slug}/overrides/{userId}` · Admin — Projets
   * Accès : Administration (`MANAGE_ROLES`)
   */
  putAdminProjectsBySlugOverridesByUserId(params: { path: operations['putAdminProjectsBySlugOverridesByUserId']['parameters']['path']; body: JsonBody<'putAdminProjectsBySlugOverridesByUserId'> }, options?: RequestOptions): Promise<JsonResult<'putAdminProjectsBySlugOverridesByUserId'>>;
  /**
   * Modifier un rôle global
   *
   * `PUT /admin/roles/{id}` · Admin — Rôles
   * Accès : Administration (`MANAGE_ROLES`)
   */
  putAdminRolesById(params: { path: operations['putAdminRolesById']['parameters']['path']; body: JsonBody<'putAdminRolesById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminRolesById'>>;
  /**
   * Modifier les réglages du site
   *
   * `PUT /admin/settings` · Admin — Réglages
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  putAdminSettings(params?: { body?: JsonBody<'putAdminSettings'> }, options?: RequestOptions): Promise<JsonResult<'putAdminSettings'>>;
  /**
   * Modifier la maintenance, le bandeau et les inscriptions
   *
   * `PUT /admin/settings/site` · Admin — Réglages
   * Accès : Administration (`MANAGE_SETTINGS`)
   */
  putAdminSettingsSite(params: { body: JsonBody<'putAdminSettingsSite'> }, options?: RequestOptions): Promise<JsonResult<'putAdminSettingsSite'>>;
  /**
   * Modifier un tag
   *
   * `PUT /admin/tags/{id}` · Admin — Tags
   * Accès : Administration (`MANAGE_TAGS`)
   */
  putAdminTagsById(params: { path: operations['putAdminTagsById']['parameters']['path']; body?: JsonBody<'putAdminTagsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminTagsById'>>;
  /**
   * Modifier une équipe
   *
   * `PUT /admin/teams/{id}` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  putAdminTeamsById(params: { path: operations['putAdminTeamsById']['parameters']['path']; body: JsonBody<'putAdminTeamsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminTeamsById'>>;
  /**
   * Modifier le rôle d'un membre
   *
   * `PUT /admin/teams/{id}/members/{userId}` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  putAdminTeamsByIdMembersByUserId(params: { path: operations['putAdminTeamsByIdMembersByUserId']['parameters']['path']; body: JsonBody<'putAdminTeamsByIdMembersByUserId'> }, options?: RequestOptions): Promise<JsonResult<'putAdminTeamsByIdMembersByUserId'>>;
  /**
   * Modifier les rôles d'équipe d'un membre
   *
   * `PUT /admin/teams/{id}/members/{userId}/roles` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  putAdminTeamsByIdMembersByUserIdRoles(params: { path: operations['putAdminTeamsByIdMembersByUserIdRoles']['parameters']['path']; body: JsonBody<'putAdminTeamsByIdMembersByUserIdRoles'> }, options?: RequestOptions): Promise<JsonResult<'putAdminTeamsByIdMembersByUserIdRoles'>>;
  /**
   * Modifier un rôle d'équipe
   *
   * `PUT /admin/teams/{id}/roles/{roleId}` · Admin — Équipes
   * Accès : Session (connexion requise)
   */
  putAdminTeamsByIdRolesByRoleId(params: { path: operations['putAdminTeamsByIdRolesByRoleId']['parameters']['path']; body?: JsonBody<'putAdminTeamsByIdRolesByRoleId'> }, options?: RequestOptions): Promise<JsonResult<'putAdminTeamsByIdRolesByRoleId'>>;
  /**
   * Enregistrer les réponses types
   *
   * `PUT /admin/tickets/macros` · Admin — Signalements
   * Accès : Administration (`MANAGE_TICKETS`)
   */
  putAdminTicketsMacros(params: { body: JsonBody<'putAdminTicketsMacros'> }, options?: RequestOptions): Promise<JsonResult<'putAdminTicketsMacros'>>;
  /**
   * Masquer/afficher un commentaire de tier list
   *
   * `PUT /admin/tier-list-comments/{id}` · Admin — Commentaires de tier lists
   * Accès : Administration (`MODERATE_COMMENTS`)
   */
  putAdminTierListCommentsById(params: { path: operations['putAdminTierListCommentsById']['parameters']['path']; body: JsonBody<'putAdminTierListCommentsById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminTierListCommentsById'>>;
  /**
   * Modifier un utilisateur
   *
   * `PUT /admin/users/{id}` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS`)
   */
  putAdminUsersById(params: { path: operations['putAdminUsersById']['parameters']['path']; body?: JsonBody<'putAdminUsersById'> }, options?: RequestOptions): Promise<JsonResult<'putAdminUsersById'>>;
  /**
   * Modifier les rôles globaux d'un utilisateur
   *
   * `PUT /admin/users/{id}/roles` · Admin — Utilisateurs
   * Accès : Administration (`MANAGE_USERS` ou `MANAGE_ROLES`)
   */
  putAdminUsersByIdRoles(params: { path: operations['putAdminUsersByIdRoles']['parameters']['path']; body: JsonBody<'putAdminUsersByIdRoles'> }, options?: RequestOptions): Promise<JsonResult<'putAdminUsersByIdRoles'>>;
  /**
   * Modifier un article
   *
   * `PUT /articles/{id}` · Articles
   * Accès : Administration (`PUBLISH_ARTICLES`)
   */
  putArticlesById(params: { path: operations['putArticlesById']['parameters']['path']; body?: JsonBody<'putArticlesById'> }, options?: RequestOptions): Promise<JsonResult<'putArticlesById'>>;
  /**
   * Modifier un commentaire
   *
   * `PUT /articles/{slug}/comments/{commentId}` · Articles
   * Accès : Session (connexion requise)
   */
  putArticlesBySlugCommentsByCommentId(params: { path: operations['putArticlesBySlugCommentsByCommentId']['parameters']['path']; body: JsonBody<'putArticlesBySlugCommentsByCommentId'> }, options?: RequestOptions): Promise<JsonResult<'putArticlesBySlugCommentsByCommentId'>>;
  /**
   * Renommer un passkey
   *
   * `PUT /auth/passkeys/{id}` · Passkeys
   * Accès : Session (connexion requise)
   */
  putAuthPasskeysById(params: { path: operations['putAuthPasskeysById']['parameters']['path']; body: JsonBody<'putAuthPasskeysById'> }, options?: RequestOptions): Promise<JsonResult<'putAuthPasskeysById'>>;
  /**
   * Masquer ou réafficher une conversation
   *
   * `PUT /chat/{id}/hidden` · Chat
   * Accès : Session (connexion requise)
   */
  putChatByIdHidden(params: { path: operations['putChatByIdHidden']['parameters']['path']; body: JsonBody<'putChatByIdHidden'> }, options?: RequestOptions): Promise<JsonResult<'putChatByIdHidden'>>;
  /**
   * Marquer une conversation comme lue
   *
   * `PUT /chat/{id}/read` · Chat
   * Accès : Session (connexion requise)
   */
  putChatByIdRead(params: { path: operations['putChatByIdRead']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putChatByIdRead'>>;
  /**
   * Modifier un message
   *
   * `PUT /chat/messages/{messageId}` · Chat
   * Accès : Session (connexion requise)
   */
  putChatMessagesByMessageId(params: { path: operations['putChatMessagesByMessageId']['parameters']['path']; body?: JsonBody<'putChatMessagesByMessageId'> }, options?: RequestOptions): Promise<JsonResult<'putChatMessagesByMessageId'>>;
  /**
   * Modifier une collection
   *
   * `PUT /collections/{id}` · Collections
   * Accès : Session (connexion requise)
   */
  putCollectionsById(params: { path: operations['putCollectionsById']['parameters']['path']; body?: JsonBody<'putCollectionsById'> }, options?: RequestOptions): Promise<JsonResult<'putCollectionsById'>>;
  /**
   * Modifier un commentaire
   *
   * `PUT /community/comments/{id}` · Communauté
   * Accès : Session (connexion requise)
   */
  putCommunityCommentsById(params: { path: operations['putCommunityCommentsById']['parameters']['path']; body: JsonBody<'putCommunityCommentsById'> }, options?: RequestOptions): Promise<JsonResult<'putCommunityCommentsById'>>;
  /**
   * Modifier un post
   *
   * `PUT /community/posts/{id}` · Communauté
   * Accès : Session (connexion requise)
   */
  putCommunityPostsById(params: { path: operations['putCommunityPostsById']['parameters']['path']; body: JsonBody<'putCommunityPostsById'> }, options?: RequestOptions): Promise<JsonResult<'putCommunityPostsById'>>;
  /**
   * Aimer un thème (ou ne plus l’aimer)
   *
   * `PUT /community-themes/{id}/like` · Thèmes communautaires
   * Accès : Session (connexion requise)
   */
  putCommunityThemesByIdLike(params: { path: operations['putCommunityThemesByIdLike']['parameters']['path']; body: JsonBody<'putCommunityThemesByIdLike'> }, options?: RequestOptions): Promise<JsonResult<'putCommunityThemesByIdLike'>>;
  /**
   * Masquer ou réafficher un thème (modération)
   *
   * `PUT /community-themes/{id}/moderation` · Thèmes communautaires
   * Accès : Session (connexion requise)
   */
  putCommunityThemesByIdModeration(params: { path: operations['putCommunityThemesByIdModeration']['parameters']['path']; body: JsonBody<'putCommunityThemesByIdModeration'> }, options?: RequestOptions): Promise<JsonResult<'putCommunityThemesByIdModeration'>>;
  /**
   * MP Discord pour une œuvre suivie
   *
   * `PUT /discord/account/projects/{projectId}` · Discord
   * Accès : Session (connexion requise)
   */
  putDiscordAccountProjectsByProjectId(params: { path: operations['putDiscordAccountProjectsByProjectId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putDiscordAccountProjectsByProjectId'>>;
  /**
   * Activity : changer d’écran
   *
   * `PUT /discord/activity/rooms/{instanceId}/mode` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  putDiscordActivityRoomsByInstanceIdMode(params: { path: operations['putDiscordActivityRoomsByInstanceIdMode']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putDiscordActivityRoomsByInstanceIdMode'>>;
  /**
   * Activity : changer de chapitre
   *
   * `PUT /discord/activity/rooms/{instanceId}/reading/chapter` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  putDiscordActivityRoomsByInstanceIdReadingChapter(params: { path: operations['putDiscordActivityRoomsByInstanceIdReadingChapter']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putDiscordActivityRoomsByInstanceIdReadingChapter'>>;
  /**
   * Activity : tourner la page
   *
   * `PUT /discord/activity/rooms/{instanceId}/reading/page` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  putDiscordActivityRoomsByInstanceIdReadingPage(params: { path: operations['putDiscordActivityRoomsByInstanceIdReadingPage']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putDiscordActivityRoomsByInstanceIdReadingPage'>>;
  /**
   * Activity : dire oui ou non
   *
   * `PUT /discord/activity/rooms/{instanceId}/swipe/answer` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  putDiscordActivityRoomsByInstanceIdSwipeAnswer(params: { path: operations['putDiscordActivityRoomsByInstanceIdSwipeAnswer']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putDiscordActivityRoomsByInstanceIdSwipeAnswer'>>;
  /**
   * Activity : classer une œuvre
   *
   * `PUT /discord/activity/rooms/{instanceId}/tierlist/rank` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  putDiscordActivityRoomsByInstanceIdTierlistRank(params: { path: operations['putDiscordActivityRoomsByInstanceIdTierlistRank']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putDiscordActivityRoomsByInstanceIdTierlistRank'>>;
  /**
   * Activity : voter
   *
   * `PUT /discord/activity/rooms/{instanceId}/vote` · Discord
   * Accès : Jeton de l’Activity Discord
   */
  putDiscordActivityRoomsByInstanceIdVote(params: { path: operations['putDiscordActivityRoomsByInstanceIdVote']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putDiscordActivityRoomsByInstanceIdVote'>>;
  /**
   * Enregistre les secrets chiffrés par la clé de récupération
   *
   * `PUT /e2ee/account-data/{type}` · Chiffrement
   * Accès : Session (connexion requise)
   */
  putE2eeAccountDataByType(params: { path: operations['putE2eeAccountDataByType']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putE2eeAccountDataByType'>>;
  /**
   * Ajoute des clés chiffrées à la sauvegarde
   *
   * `PUT /e2ee/backup/keys` · Chiffrement
   * Accès : Session (connexion requise)
   */
  putE2eeBackupKeys(params?: Record<string, never>, options?: RequestOptions): Promise<JsonResult<'putE2eeBackupKeys'>>;
  /**
   * Relaie des messages chiffrés à des appareils
   *
   * `PUT /e2ee/send-to-device/{type}/{txnId}` · Chiffrement
   * Accès : Session (connexion requise)
   */
  putE2eeSendToDeviceByTypeByTxnId(params: { path: operations['putE2eeSendToDeviceByTypeByTxnId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putE2eeSendToDeviceByTypeByTxnId'>>;
  /**
   * Bloquer un utilisateur
   *
   * `PUT /me/blocks/{userId}` · Mon compte
   * Accès : Session (connexion requise)
   */
  putMeBlocksByUserId(params: { path: operations['putMeBlocksByUserId']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putMeBlocksByUserId'>>;
  /**
   * Choisir mon cadre d’avatar
   *
   * `PUT /me/cosmetics` · Mon compte
   * Accès : Session (connexion requise)
   */
  putMeCosmetics(params: { body: JsonBody<'putMeCosmetics'> }, options?: RequestOptions): Promise<JsonResult<'putMeCosmetics'>>;
  /**
   * Modifier mes préférences
   *
   * `PUT /me/preferences` · Mon compte
   * Accès : Session (connexion requise)
   */
  putMePreferences(params?: { body?: JsonBody<'putMePreferences'> }, options?: RequestOptions): Promise<JsonResult<'putMePreferences'>>;
  /**
   * Appliquer un thème personnel ou revenir au thème officiel
   *
   * `PUT /me/themes/active` · Mon compte
   * Accès : Session (connexion requise)
   */
  putMeThemesActive(params: { body: JsonBody<'putMeThemesActive'> }, options?: RequestOptions): Promise<JsonResult<'putMeThemesActive'>>;
  /**
   * Sauvegarder les modifications en cours
   *
   * `PUT /me/themes/{id}/draft` · Mon compte
   * Accès : Session (connexion requise)
   */
  putMeThemesByIdDraft(params: { path: operations['putMeThemesByIdDraft']['parameters']['path']; body: JsonBody<'putMeThemesByIdDraft'> }, options?: RequestOptions): Promise<JsonResult<'putMeThemesByIdDraft'>>;
  /**
   * Modifier un commentaire
   *
   * `PUT /projects/{slug}/comments/{commentId}` · Projets
   * Accès : Session (connexion requise)
   */
  putProjectsBySlugCommentsByCommentId(params: { path: operations['putProjectsBySlugCommentsByCommentId']['parameters']['path']; body: JsonBody<'putProjectsBySlugCommentsByCommentId'> }, options?: RequestOptions): Promise<JsonResult<'putProjectsBySlugCommentsByCommentId'>>;
  /**
   * Modifier ou renvoyer ma demande de team
   *
   * `PUT /team-requests/{id}` · Demandes de team
   * Accès : Session (connexion requise)
   */
  putTeamRequestsById(params: { path: operations['putTeamRequestsById']['parameters']['path']; body: JsonBody<'putTeamRequestsById'> }, options?: RequestOptions): Promise<JsonResult<'putTeamRequestsById'>>;
  /**
   * Modifier une entrée d'agenda
   *
   * `PUT /teams/{slug}/agenda/{entryId}` · Équipes
   * Accès : Session (connexion requise)
   */
  putTeamsBySlugAgendaByEntryId(params: { path: operations['putTeamsBySlugAgendaByEntryId']['parameters']['path']; body?: JsonBody<'putTeamsBySlugAgendaByEntryId'> }, options?: RequestOptions): Promise<JsonResult<'putTeamsBySlugAgendaByEntryId'>>;
  /**
   * Choisir les annonces d’un salon de la team
   *
   * `PUT /teams/{slug}/discord/channels/{channelRef}/events` · Équipes
   * Accès : Session (connexion requise)
   */
  putTeamsBySlugDiscordChannelsByChannelRefEvents(params: { path: operations['putTeamsBySlugDiscordChannelsByChannelRefEvents']['parameters']['path'] }, options?: RequestOptions): Promise<JsonResult<'putTeamsBySlugDiscordChannelsByChannelRefEvents'>>;
  /**
   * Œuvres annoncées dans un salon de la team
   *
   * `PUT /teams/{slug}/discord/channels/{channelRef}/projects` · Équipes
   * Accès : Session (connexion requise)
   */
  putTeamsBySlugDiscordChannelsByChannelRefProjects(params: { path: operations['putTeamsBySlugDiscordChannelsByChannelRefProjects']['parameters']['path']; body: JsonBody<'putTeamsBySlugDiscordChannelsByChannelRefProjects'> }, options?: RequestOptions): Promise<JsonResult<'putTeamsBySlugDiscordChannelsByChannelRefProjects'>>;
  /**
   * Rôle à mentionner avec chaque annonce d’un salon de la team
   *
   * `PUT /teams/{slug}/discord/channels/{channelRef}/role` · Équipes
   * Accès : Session (connexion requise)
   */
  putTeamsBySlugDiscordChannelsByChannelRefRole(params: { path: operations['putTeamsBySlugDiscordChannelsByChannelRefRole']['parameters']['path']; body: JsonBody<'putTeamsBySlugDiscordChannelsByChannelRefRole'> }, options?: RequestOptions): Promise<JsonResult<'putTeamsBySlugDiscordChannelsByChannelRefRole'>>;
  /**
   * Rôle à mentionner pour une œuvre de la team
   *
   * `PUT /teams/{slug}/discord/guilds/{guildRef}/projects/{projectId}/role` · Équipes
   * Accès : Session (connexion requise)
   */
  putTeamsBySlugDiscordGuildsByGuildRefProjectsByProjectIdRole(params: { path: operations['putTeamsBySlugDiscordGuildsByGuildRefProjectsByProjectIdRole']['parameters']['path']; body: JsonBody<'putTeamsBySlugDiscordGuildsByGuildRefProjectsByProjectIdRole'> }, options?: RequestOptions): Promise<JsonResult<'putTeamsBySlugDiscordGuildsByGuildRefProjectsByProjectIdRole'>>;
  /**
   * Mise en forme des annonces et œuvres sensibles d’un serveur de la team
   *
   * `PUT /teams/{slug}/discord/guilds/{guildRef}/settings` · Équipes
   * Accès : Session (connexion requise)
   */
  putTeamsBySlugDiscordGuildsByGuildRefSettings(params: { path: operations['putTeamsBySlugDiscordGuildsByGuildRefSettings']['parameters']['path']; body?: JsonBody<'putTeamsBySlugDiscordGuildsByGuildRefSettings'> }, options?: RequestOptions): Promise<JsonResult<'putTeamsBySlugDiscordGuildsByGuildRefSettings'>>;
  /**
   * Relier le compte MangaDex de la team
   *
   * `PUT /teams/{slug}/mangadex/account` · Équipes
   * Accès : Session (connexion requise)
   */
  putTeamsBySlugMangadexAccount(params: { path: operations['putTeamsBySlugMangadexAccount']['parameters']['path']; body: JsonBody<'putTeamsBySlugMangadexAccount'> }, options?: RequestOptions): Promise<JsonResult<'putTeamsBySlugMangadexAccount'>>;
  /**
   * Modifier une tier list
   *
   * `PUT /tier-lists/{id}` · Tier Lists
   * Accès : Session (connexion requise)
   */
  putTierListsById(params: { path: operations['putTierListsById']['parameters']['path']; body?: JsonBody<'putTierListsById'> }, options?: RequestOptions): Promise<JsonResult<'putTierListsById'>>;
  /**
   * Modifier un commentaire
   *
   * `PUT /tier-lists/{id}/comments/{commentId}` · Tier Lists
   * Accès : Session (connexion requise)
   */
  putTierListsByIdCommentsByCommentId(params: { path: operations['putTierListsByIdCommentsByCommentId']['parameters']['path']; body: JsonBody<'putTierListsByIdCommentsByCommentId'> }, options?: RequestOptions): Promise<JsonResult<'putTierListsByIdCommentsByCommentId'>>;
  /**
   * Classer un projet dans un rang
   *
   * `PUT /tier-lists/{id}/items` · Tier Lists
   * Accès : Session (connexion requise)
   */
  putTierListsByIdItems(params: { path: operations['putTierListsByIdItems']['parameters']['path']; body: JsonBody<'putTierListsByIdItems'> }, options?: RequestOptions): Promise<JsonResult<'putTierListsByIdItems'>>;
  /**
   * Enregistrer le classement complet
   *
   * `PUT /tier-lists/{id}/layout` · Tier Lists
   * Accès : Session (connexion requise)
   */
  putTierListsByIdLayout(params: { path: operations['putTierListsByIdLayout']['parameters']['path']; body: JsonBody<'putTierListsByIdLayout'> }, options?: RequestOptions): Promise<JsonResult<'putTierListsByIdLayout'>>;
  /**
   * Modifier mon profil public
   *
   * `PUT /users/me` · Utilisateurs
   * Accès : Session (connexion requise)
   */
  putUsersMe(params?: { body?: JsonBody<'putUsersMe'> }, options?: RequestOptions): Promise<JsonResult<'putUsersMe'>>;
}
