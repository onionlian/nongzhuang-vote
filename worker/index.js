// 濃妝投票所的統計後端，跟靜態網頁同一個 Worker。
// /nongzhuang-vote/api/* 進這裡，其他路徑都是 cf-dist/ 的靜態檔。
//
// POST api/vote   {county, picks:{party,slogan,look,poster}}  每局開票時送一次，只加總，不存個人資料。
// GET  api/stats?county=taipei                                回傳該縣市每輪每個號次的票數。
//
// 選罷法第 53 條：投票日前十日起至投票時間截止前不得發布民調。
// BLACKOUT 期間 stats 只回局數；帶 ?key=<STATS_KEY>（wrangler secret）的請求不受限，給站長自己看。
// 每個 IP 每小時最多 VOTES_PER_HOUR 局（IP 用每日換鹽的雜湊，不存原始 IP，兩天後刪）。

const BASE = '/nongzhuang-vote/api/';
const BLACKOUT_FROM = Date.parse('2026-11-18T00:00:00+08:00');
const BLACKOUT_TO = Date.parse('2026-11-28T16:00:00+08:00');
const ROUNDS = ['party', 'slogan', 'look', 'poster'];
// 各縣市候選人數，號次超出範圍的票不收
const COUNTIES = {
  taipei: 6, newtaipei: 3, taoyuan: 2, taichung: 3, tainan: 4, kaohsiung: 5, keelung: 3,
  hsinchucity: 3, hsinchucounty: 3, miaoli: 2, changhua: 4, nantou: 2, yunlin: 4,
  chiayicity: 5, chiayicounty: 2, pingtung: 2, yilan: 5, hualien: 4, taitung: 4,
  penghu: 6, kinmen: 7, lienchiang: 2,
};
const VOTES_PER_HOUR = 30;

const SCHEMA = [
  'CREATE TABLE IF NOT EXISTS tally (county TEXT NOT NULL, round TEXT NOT NULL, n INTEGER NOT NULL, votes INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (county, round, n))',
  'CREATE TABLE IF NOT EXISTS plays (county TEXT PRIMARY KEY, n INTEGER NOT NULL DEFAULT 0)',
  'CREATE TABLE IF NOT EXISTS limits (who TEXT NOT NULL, hour INTEGER NOT NULL, n INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (who, hour))',
];
let ready = false;
async function setup(env) {
  if (ready) return;
  await env.DB.batch(SCHEMA.map((s) => env.DB.prepare(s)));
  ready = true;
}

const json = (data, status = 200, extra = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...extra } });

export const inBlackout = (now = Date.now()) => now >= BLACKOUT_FROM && now < BLACKOUT_TO;

async function whoHash(req) {
  const ip = req.headers.get('cf-connecting-ip') || '';
  const day = new Date().toISOString().slice(0, 10);
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`nzv:${day}:${ip}`));
  return [...new Uint8Array(buf)].slice(0, 12).map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function vote(req, env) {
  // 只收同站送出的 JSON
  const origin = req.headers.get('origin');
  if (origin && !/^https:\/\/(www\.)?onininon\.com$/.test(origin)) return json({ error: 'origin' }, 403);
  let body;
  try { body = await req.json(); } catch { return json({ error: 'json' }, 400); }
  const county = String(body?.county || '');
  const max = COUNTIES[county];
  if (!max) return json({ error: 'county' }, 400);

  const who = await whoHash(req);
  const hour = Math.floor(Date.now() / 3600000);
  const lim = await env.DB.prepare(
    'INSERT INTO limits (who, hour, n) VALUES (?, ?, 1) ON CONFLICT (who, hour) DO UPDATE SET n = n + 1 RETURNING n'
  ).bind(who, hour).first();
  if ((lim?.n || 0) > VOTES_PER_HOUR) return json({ ok: false, limited: true }, 429);

  const stmts = [env.DB.prepare('INSERT INTO plays (county, n) VALUES (?, 1) ON CONFLICT (county) DO UPDATE SET n = n + 1').bind(county)];
  for (const r of ROUNDS) {
    const n = body?.picks?.[r];
    if (Number.isInteger(n) && n >= 1 && n <= max) {
      stmts.push(env.DB.prepare(
        'INSERT INTO tally (county, round, n, votes) VALUES (?, ?, ?, 1) ON CONFLICT (county, round, n) DO UPDATE SET votes = votes + 1'
      ).bind(county, r, n));
    }
  }
  if (Math.random() < 0.02) stmts.push(env.DB.prepare('DELETE FROM limits WHERE hour < ?').bind(hour - 48));
  await env.DB.batch(stmts);
  return json({ ok: true });
}

async function stats(url, env) {
  const county = url.searchParams.get('county') || '';
  if (!COUNTIES[county]) return json({ error: 'county' }, 400);
  const owner = env.STATS_KEY && url.searchParams.get('key') === env.STATS_KEY;
  const p = await env.DB.prepare('SELECT n FROM plays WHERE county = ?').bind(county).first();
  const plays = p?.n || 0;
  const noStore = { 'cache-control': 'no-store' };
  if (inBlackout() && !owner) return json({ county, plays, hidden: true }, 200, noStore);
  const { results } = await env.DB.prepare('SELECT round, n, votes FROM tally WHERE county = ?').bind(county).all();
  const rounds = {};
  for (const r of results) (rounds[r.round] ||= {})[r.n] = r.votes;
  return json({ county, plays, hidden: false, rounds }, 200, owner ? noStore : { 'cache-control': 'public, max-age=30' });
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (!url.pathname.startsWith(BASE)) return env.ASSETS.fetch(req);
    await setup(env);
    const route = url.pathname.slice(BASE.length);
    try {
      if (route === 'vote' && req.method === 'POST') return await vote(req, env);
      if (route === 'stats' && req.method === 'GET') return await stats(url, env);
      return json({ error: 'not found' }, 404);
    } catch (e) {
      console.error(e);
      return json({ error: 'server' }, 500);
    }
  },
};
