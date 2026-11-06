// 每個縣市產生自己的網址 /nongzhuang-vote/<縣市>/（SEO 與分享預覽用），內容同 index.html，只換 title、description、canonical、og。
// 用法：node scripts/build-pages.mjs <輸出資料夾>（cf-deploy.sh 會帶 cf-dist/nongzhuang-vote）
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const out = process.argv[2] || 'cf-dist/nongzhuang-vote';
const ORIGIN = 'https://onininon.com/nongzhuang-vote/';
const html = readFileSync('index.html', 'utf8');
const counties = [...html.matchAll(/\{id:"([a-z]+)",name:"([^"]+)"/g)].map(m => ({ id: m[1], name: m[2] }));
if (counties.length !== 22) throw new Error(`expected 22 counties, got ${counties.length}`);
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const sub = (src, re, val) => { if (!re.test(src)) throw new Error(`missing ${re}`); return src.replace(re, val); };
for (const c of counties) {
  const title = `${c.name}長｜濃妝投票所`;
  const desc = `2026 ${c.name}長選舉惡搞小遊戲：把名字和政見蓋起來，只看政黨、口號、外表、競選照，選出你的${c.name}長。純屬惡搞，投票請認真看政見。`;
  const url = `${ORIGIN}${c.id}/`;
  let p = html;
  p = sub(p, /<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  p = sub(p, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`);
  p = sub(p, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  p = sub(p, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(title)}">`);
  p = sub(p, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(desc)}">`);
  p = sub(p, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  mkdirSync(`${out}/${c.id}`, { recursive: true });
  writeFileSync(`${out}/${c.id}/index.html`, p);
}
const today = new Date().toISOString().slice(0, 10);
const urls = [ORIGIN, ...counties.map(c => `${ORIGIN}${c.id}/`)];
writeFileSync(`${out}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
console.log(`wrote ${counties.length} county pages + sitemap.xml`);
