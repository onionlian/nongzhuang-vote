# 濃妝投票所

惡搞版縣市長選舉小遊戲，反轉自 [留白投票所](https://blindvote.app)：遮住名字與政見，分四輪只看政黨、口號、外表、競選照，最後開票。投票請認真看政見。

- 網址：https://onininon.com/nongzhuang-vote/
- `index.html`：整個遊戲（單一檔案）
- `img/`：外表與競選照，檔名 `{縣市}-{號次}-look.webp`、`{縣市}-{號次}-poster.webp`；競選照輪替版加 `-2`，並在 `index.html` 的 `POSTER_ALTS` 登記
- `worker/index.js`：統計 API（D1 資料庫 `nongzhuang-vote`）

## 統計

- 每局開票時送出四輪選擇，只存加總票數，不存個人資料。
- 依選罷法第 53 條，2026-11-18 00:00 到 11-28 16:00（台北時間）公開頁面只顯示局數。
- 禁止期間要看完整數字，直接查 D1：`npx wrangler d1 execute nongzhuang-vote --remote --command "SELECT * FROM tally WHERE county='taipei'"`

## 部署

推到 `release` 分支，Cloudflare Workers Builds 跑 `scripts/cf-deploy.sh`。本機試跑：`DRY_RUN=1 scripts/cf-deploy.sh`。
