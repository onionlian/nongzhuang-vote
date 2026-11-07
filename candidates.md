# 濃妝投票所｜縣市長候選人名單與圖檔對照

網站實際使用的名單，從 index.html 的 DATA 產生。共 22 縣市、81 位。

- 號次與黨籍：中選會 2026-10-27 號次抽籤結果（[中央社號次一覽](https://www.cna.com.tw/news/aipl/202610275002.aspx)）
- 圖檔放在 img/（900×1200 WebP）；輪替版命名為 {縣市id}-{號次}-poster-{n}.webp、{縣市id}-{號次}-look-{n}.webp（n 從 2 起算；已重繪完成的候選人張數不限，待重繪的每人最多 4 張），並在 index.html 的 POSTER_ALTS、LOOK_ALTS 登記
- 原圖與重繪待辦在 source/（不進版控），見 source/重繪待辦.md
- 同一份資料的機器可讀版本：candidates.json

| 縣市 | 縣市 id | 號次 | 姓名 | 黨籍 | 外表檔名 | 競選照檔名 |
| --- | --- | --- | --- | --- | --- | --- |
| 台北市 | taipei | 1 | 郭璽 | 台灣麻將最大黨 | `taipei-1-look.webp` | `taipei-1-poster.webp` |
| 台北市 | taipei | 2 | 林志成 | 無黨籍 | `taipei-2-look.webp` | `taipei-2-poster.webp` |
| 台北市 | taipei | 3 | 沈伯洋 | 民主進步黨 | `taipei-3-look.webp` | `taipei-3-poster.webp` |
| 台北市 | taipei | 4 | 蕭文乾 | 臺灣SoR無法黨 | `taipei-4-look.webp` | `taipei-4-poster.webp` |
| 台北市 | taipei | 5 | 蔣萬安 | 中國國民黨 | `taipei-5-look.webp` | `taipei-5-poster.webp` |
| 台北市 | taipei | 6 | 唐新民 | 三勢團結促進聯盟 | `taipei-6-look.webp` | `taipei-6-poster.webp` |
| 新北市 | newtaipei | 1 | 蘇巧慧 | 民主進步黨 | `newtaipei-1-look.webp` | `newtaipei-1-poster.webp` |
| 新北市 | newtaipei | 2 | 蘇輝湟 | 無黨籍 | `newtaipei-2-look.webp` | `newtaipei-2-poster.webp` |
| 新北市 | newtaipei | 3 | 李四川 | 中國國民黨 | `newtaipei-3-look.webp` | `newtaipei-3-poster.webp` |
| 桃園市 | taoyuan | 1 | 黃世杰 | 民主進步黨 | `taoyuan-1-look.webp` | `taoyuan-1-poster.webp` |
| 桃園市 | taoyuan | 2 | 張善政 | 中國國民黨 | `taoyuan-2-look.webp` | `taoyuan-2-poster.webp` |
| 台中市 | taichung | 1 | 何欣純 | 民主進步黨 | `taichung-1-look.webp` | `taichung-1-poster.webp` |
| 台中市 | taichung | 2 | 洪麗華 | 司法正義黨 | `taichung-2-look.webp` | `taichung-2-poster.webp` |
| 台中市 | taichung | 3 | 江啟臣 | 中國國民黨 | `taichung-3-look.webp` | `taichung-3-poster.webp` |
| 台南市 | tainan | 1 | 蕭燐洪 | 臺灣SoR無法黨 | `tainan-1-look.webp` | `tainan-1-poster.webp` |
| 台南市 | tainan | 2 | 謝龍介 | 中國國民黨 | `tainan-2-look.webp` | `tainan-2-poster.webp` |
| 台南市 | tainan | 3 | 陳亭妃 | 民主進步黨 | `tainan-3-look.webp` | `tainan-3-poster.webp` |
| 台南市 | tainan | 4 | 葉人文 | 無黨籍 | `tainan-4-look.webp` | `tainan-4-poster.webp` |
| 高雄市 | kaohsiung | 1 | 張靜 | 司法改革黨 | `kaohsiung-1-look.webp` | `kaohsiung-1-poster.webp` |
| 高雄市 | kaohsiung | 2 | 王肇民 | 無黨籍 | `kaohsiung-2-look.webp` | `kaohsiung-2-poster.webp` |
| 高雄市 | kaohsiung | 3 | 柯志恩 | 中國國民黨 | `kaohsiung-3-look.webp` | `kaohsiung-3-poster.webp` |
| 高雄市 | kaohsiung | 4 | 洪方隆 | 無黨籍 | `kaohsiung-4-look.webp` | `kaohsiung-4-poster.webp` |
| 高雄市 | kaohsiung | 5 | 賴瑞隆 | 民主進步黨 | `kaohsiung-5-look.webp` | `kaohsiung-5-poster.webp` |
| 基隆市 | keelung | 1 | 童子瑋 | 民主進步黨 | `keelung-1-look.webp` | `keelung-1-poster.webp` |
| 基隆市 | keelung | 2 | 魏造文 | 無黨籍 | `keelung-2-look.webp` | `keelung-2-poster.webp` |
| 基隆市 | keelung | 3 | 謝國樑 | 中國國民黨 | `keelung-3-look.webp` | `keelung-3-poster.webp` |
| 新竹市 | hsinchucity | 1 | 高虹安 | 無黨籍 | `hsinchucity-1-look.webp` | `hsinchucity-1-poster.webp` |
| 新竹市 | hsinchucity | 2 | 何志勇 | 無黨籍 | `hsinchucity-2-look.webp` | `hsinchucity-2-poster.webp` |
| 新竹市 | hsinchucity | 3 | 莊競程 | 民主進步黨 | `hsinchucity-3-look.webp` | `hsinchucity-3-poster.webp` |
| 新竹縣 | hsinchucounty | 1 | 鄭朝方 | 民主進步黨 | `hsinchucounty-1-look.webp` | `hsinchucounty-1-poster.webp` |
| 新竹縣 | hsinchucounty | 2 | 徐欣瑩 | 中國國民黨 | `hsinchucounty-2-look.webp` | `hsinchucounty-2-poster.webp` |
| 新竹縣 | hsinchucounty | 3 | 朱定瑀 | 無黨籍 | `hsinchucounty-3-look.webp` | `hsinchucounty-3-poster.webp` |
| 苗栗縣 | miaoli | 1 | 陳品安 | 民主進步黨 | `miaoli-1-look.webp` | `miaoli-1-poster.webp` |
| 苗栗縣 | miaoli | 2 | 鍾東錦 | 中國國民黨 | `miaoli-2-look.webp` | `miaoli-2-poster.webp` |
| 彰化縣 | changhua | 1 | 陳素月 | 民主進步黨 | `changhua-1-look.webp` | `changhua-1-poster.webp` |
| 彰化縣 | changhua | 2 | 魏平政 | 中國國民黨 | `changhua-2-look.webp` | `changhua-2-poster.webp` |
| 彰化縣 | changhua | 3 | 邱建富 | 無黨籍 | `changhua-3-look.webp` | `changhua-3-poster.webp` |
| 彰化縣 | changhua | 4 | 陳重嘉 | 無黨籍 | `changhua-4-look.webp` | `changhua-4-poster.webp` |
| 南投縣 | nantou | 1 | 許淑華 | 中國國民黨 | `nantou-1-look.webp` | `nantou-1-poster.webp` |
| 南投縣 | nantou | 2 | 温世政 | 民主進步黨 | `nantou-2-look.webp` | `nantou-2-poster.webp` |
| 雲林縣 | yunlin | 1 | 吳炳輝 | 無黨籍 | `yunlin-1-look.webp` | `yunlin-1-poster.webp` |
| 雲林縣 | yunlin | 2 | 張嘉郡 | 中國國民黨 | `yunlin-2-look.webp` | `yunlin-2-poster.webp` |
| 雲林縣 | yunlin | 3 | 劉建國 | 民主進步黨 | `yunlin-3-look.webp` | `yunlin-3-poster.webp` |
| 雲林縣 | yunlin | 4 | 林佳瑜 | 無黨籍 | `yunlin-4-look.webp` | `yunlin-4-poster.webp` |
| 嘉義市 | chiayicity | 1 | 王義成 | 無黨籍 | `chiayicity-1-look.webp` | `chiayicity-1-poster.webp` |
| 嘉義市 | chiayicity | 2 | 陳愷璜 | 無黨籍 | `chiayicity-2-look.webp` | `chiayicity-2-poster.webp` |
| 嘉義市 | chiayicity | 3 | 張啓楷 | 台灣民眾黨 | `chiayicity-3-look.webp` | `chiayicity-3-poster.webp` |
| 嘉義市 | chiayicity | 4 | 王美惠 | 民主進步黨 | `chiayicity-4-look.webp` | `chiayicity-4-poster.webp` |
| 嘉義市 | chiayicity | 5 | 黃宏成台灣阿成世界偉人財神總統 | 無黨籍 | `chiayicity-5-look.webp` | `chiayicity-5-poster.webp` |
| 嘉義縣 | chiayicounty | 1 | 吳品叡 | 無黨籍 | `chiayicounty-1-look.webp` | `chiayicounty-1-poster.webp` |
| 嘉義縣 | chiayicounty | 2 | 蔡易餘 | 民主進步黨 | `chiayicounty-2-look.webp` | `chiayicounty-2-poster.webp` |
| 屏東縣 | pingtung | 1 | 蘇清泉 | 中國國民黨 | `pingtung-1-look.webp` | `pingtung-1-poster.webp` |
| 屏東縣 | pingtung | 2 | 周春米 | 民主進步黨 | `pingtung-2-look.webp` | `pingtung-2-poster.webp` |
| 宜蘭縣 | yilan | 1 | 林國漳 | 民主進步黨 | `yilan-1-look.webp` | `yilan-1-poster.webp` |
| 宜蘭縣 | yilan | 2 | 陳宏毅 | 無黨籍 | `yilan-2-look.webp` | `yilan-2-poster.webp` |
| 宜蘭縣 | yilan | 3 | 吳宗憲 | 中國國民黨 | `yilan-3-look.webp` | `yilan-3-poster.webp` |
| 宜蘭縣 | yilan | 4 | 劉燦輝 | 無黨籍 | `yilan-4-look.webp` | `yilan-4-poster.webp` |
| 宜蘭縣 | yilan | 5 | 楊鉯婷 | 無黨籍 | `yilan-5-look.webp` | `yilan-5-poster.webp` |
| 花蓮縣 | hualien | 1 | 魏嘉賢 | 無黨籍 | `hualien-1-look.webp` | `hualien-1-poster.webp` |
| 花蓮縣 | hualien | 2 | 張峻 | 無黨籍 | `hualien-2-look.webp` | `hualien-2-poster.webp` |
| 花蓮縣 | hualien | 3 | 游淑貞 | 中國國民黨 | `hualien-3-look.webp` | `hualien-3-poster.webp` |
| 花蓮縣 | hualien | 4 | 羅佩秦 | 台灣工黨 | `hualien-4-look.webp` | `hualien-4-poster.webp` |
| 台東縣 | taitung | 1 | 李吳穎智 | 無黨籍 | `taitung-1-look.webp` | `taitung-1-poster.webp` |
| 台東縣 | taitung | 2 | 陳瑩 | 民主進步黨 | `taitung-2-look.webp` | `taitung-2-poster.webp` |
| 台東縣 | taitung | 3 | 王志偉 | 無黨籍 | `taitung-3-look.webp` | `taitung-3-poster.webp` |
| 台東縣 | taitung | 4 | 吳秀華 | 中國國民黨 | `taitung-4-look.webp` | `taitung-4-poster.webp` |
| 澎湖縣 | penghu | 1 | 許智富 | 無黨籍 | `penghu-1-look.webp` | `penghu-1-poster.webp` |
| 澎湖縣 | penghu | 2 | 周倪安 | 台灣團結聯盟 | `penghu-2-look.webp` | `penghu-2-poster.webp` |
| 澎湖縣 | penghu | 3 | 葉竹林 | 無黨籍 | `penghu-3-look.webp` | `penghu-3-poster.webp` |
| 澎湖縣 | penghu | 4 | 吳淑瑾 | 民主進步黨 | `penghu-4-look.webp` | `penghu-4-poster.webp` |
| 澎湖縣 | penghu | 5 | 陳振中 | 中國國民黨 | `penghu-5-look.webp` | `penghu-5-poster.webp` |
| 澎湖縣 | penghu | 6 | 陳盡川 | 無黨籍 | `penghu-6-look.webp` | `penghu-6-poster.webp` |
| 金門縣 | kinmen | 1 | 張國威 | 無黨籍 | `kinmen-1-look.webp` | `kinmen-1-poster.webp` |
| 金門縣 | kinmen | 2 | 李文良 | 無黨籍 | `kinmen-2-look.webp` | `kinmen-2-poster.webp` |
| 金門縣 | kinmen | 3 | 洪和成 | 無黨籍 | `kinmen-3-look.webp` | `kinmen-3-poster.webp` |
| 金門縣 | kinmen | 4 | 張火木 | 無黨籍 | `kinmen-4-look.webp` | `kinmen-4-poster.webp` |
| 金門縣 | kinmen | 5 | 陳玉珍 | 中國國民黨 | `kinmen-5-look.webp` | `kinmen-5-poster.webp` |
| 金門縣 | kinmen | 6 | 梁文韜 | 無黨籍 | `kinmen-6-look.webp` | `kinmen-6-poster.webp` |
| 金門縣 | kinmen | 7 | 黃世團 | 無黨籍 | `kinmen-7-look.webp` | `kinmen-7-poster.webp` |
| 連江縣 | lienchiang | 1 | 王忠銘 | 中國國民黨 | `lienchiang-1-look.webp` | `lienchiang-1-poster.webp` |
| 連江縣 | lienchiang | 2 | 曹爾元 | 無黨籍 | `lienchiang-2-look.webp` | `lienchiang-2-poster.webp` |
