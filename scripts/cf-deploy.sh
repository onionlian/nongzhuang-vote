#!/usr/bin/env bash
# 把濃妝投票所部署到 Cloudflare Workers（https://onininon.com/nongzhuang-vote/），再確認線上頁面已是這次的版本。
# 由 Cloudflare Workers Builds 在 release 分支有新提交時當部署指令跑（CLOUDFLARE_API_TOKEN、CLOUDFLARE_ACCOUNT_ID 由它提供）；
# 沒有建置指令。wrangler 4 要 Node 22 以上（.node-version）。
# DRY_RUN=1 只做資料夾並跑 wrangler deploy --dry-run（不用金鑰，不上傳）。
set -euo pipefail
cd "$(dirname "$0")/.."
WRANGLER=(npx --yes wrangler@4.148.0)
prefix=nongzhuang-vote

rm -rf cf-dist
mkdir -p "cf-dist/$prefix/img"
cp -a index.html "cf-dist/$prefix/"
find img -maxdepth 1 -type f -name '*.webp' -exec cp -a {} "cf-dist/$prefix/img/" \;

# 圖檔名沒帶雜湊，瀏覽器存 1 小時；頁面每次重新驗證
cat > cf-dist/_headers <<HEADERS
/$prefix/img/*
  Cache-Control: public, max-age=3600
HEADERS

if [ -n "${DRY_RUN:-}" ]; then
  "${WRANGLER[@]}" deploy --dry-run
  exit 0
fi

[ -n "${CLOUDFLARE_API_TOKEN:-}" ] || { echo "::error::Missing CLOUDFLARE_API_TOKEN"; exit 1; }
[ -n "${CLOUDFLARE_ACCOUNT_ID:-}" ] || { echo "::error::Missing CLOUDFLARE_ACCOUNT_ID"; exit 1; }
"${WRANGLER[@]}" deploy --message "${WORKERS_CI_BRANCH:-manual} ${WORKERS_CI_COMMIT_SHA:-}"

url="https://onininon.com/$prefix/"
want=$(sha256sum index.html | cut -d' ' -f1)
for i in $(seq 1 12); do
  got=$(curl -fsS "$url" | sha256sum | cut -d' ' -f1 || true)
  if [ "$got" = "$want" ]; then echo "Live page $url matches index.html"; exit 0; fi
  sleep 5
done
echo "::error::$url does not match index.html"; exit 1
