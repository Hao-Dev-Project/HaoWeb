# Hao 個人網站

我的個人作品集與技術部落格，記錄做過的機器人、專題作品和比賽經驗。

🔗 **網站：** https://hao-web.vercel.app/

## 內容

- **精選作品**：智慧三角警示立牌、多功能醫療輔助機器人、智慧遠端監控養殖系統
- **競賽紀錄**：技能競賽、工科技藝競賽、全國專題競賽、科展、IEYI 發明展等得獎紀錄
- **文章**：每項比賽與專題的開發過程和心得

## 使用技術

- [Next.js](https://nextjs.org/)（App Router）＋ React ＋ TypeScript
- Tailwind CSS
- react-markdown ＋ highlight.js（文章內容與程式碼高亮）
- 部署在 [Vercel](https://vercel.com/)，推送到 `main` 分支會自動更新網站

## 專案結構

```
app/
├── page.tsx              首頁（作品、競賽紀錄）
├── blog/page.tsx         文章列表
├── blog/[id]/page.tsx    文章內頁
├── data/posts.json       所有文章內容
└── globals.css           全站樣式
components/
├── Navbar.tsx            導覽列
├── Footer.tsx            頁尾與聯絡資訊
├── Typewriter.tsx        首頁打字效果
└── ProgressBar.tsx       文章閱讀進度條
public/                   圖片
```

## 本機開發

```bash
npm install
npm run dev
```

開啟 http://localhost:3000 即可預覽。

## 新增文章

1. 把封面圖片放進 `public/`
2. 在 `app/data/posts.json` 最後面新增一筆資料：

```json
{
    "title": "文章標題",
    "date": "2026.Mar",
    "author": "Hao",
    "category": "專題競賽",
    "description": "顯示在文章卡片上的簡短介紹",
    "tags": ["Robot", "LabVIEW"],
    "cover": "/封面檔名.jpg",
    "content": "# 標題\n\n內文（Markdown 格式）"
}
```

3. 如果要出現在首頁，再到 `app/page.tsx` 的 `projects` 或 `contests` 加上對應項目

## 聯絡

haoweb67@gmail.com
