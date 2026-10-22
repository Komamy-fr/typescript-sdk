// Vérifié par `bun run typecheck` : les exemples du README compilent.
import { KomamyClient, type JsonResult } from '../src/index.js';

export async function readmeExamples(bytes: Uint8Array<ArrayBuffer>, instanceId: string) {
  const komamy = new KomamyClient();
  const login = await komamy.auth.login('pseudo', 'mot de passe');
  if ('requiresTotp' in login) await komamy.auth.verifyTotp('123456');
  const { user } = await komamy.api.getAuthMe();
  const { team } = await komamy.api.getTeamsBySlug({ path: { slug: 'mon-equipe' } });
  const results = await komamy.api.getSearch({ query: { q: 'tour' } });
  const { comment } = await komamy.api.postProjectsBySlugComments({
    path: { slug: 'tour-de-dieu' },
    body: { content: 'Super chapitre !' },
  });
  await komamy.api.postAdminProjects({ body: { slug: 'nouvelle-oeuvre', title: 'Nouvelle œuvre' } });
  await komamy.api.postAuthAvatar({ body: { avatar: new Blob([bytes], { type: 'image/png' }) } });
  const room = await komamy.api.getDiscordActivityRoomsByInstanceId({ path: { instanceId } });
  const events = await komamy.api.getMeEvents();
  const { projects } = await komamy.projects.list({ sortBy: 'recent', tag: ['Action', 'Fantasy'], seriesStatus: 'ONGOING', pageSize: 20 });
  const { author } = await komamy.authors.get('un-auteur');
  type Me = JsonResult<'getAuthMe'>['user'];
  const me: Me = user;
  return { me, team, results, comment, room, events: events.body, projects, author };
}
