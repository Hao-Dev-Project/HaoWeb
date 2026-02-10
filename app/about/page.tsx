// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100 flex flex-col">
      
      {/* --- 1. 導覽列 (白色簡約版) --- */}
      <nav className="w-full max-w-7xl mx-auto p-6 md:p-8 flex items-center justify-between h-20">
        
        {/* 左上角 Logo (回到首頁) */}
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-600 transition-colors">
          Hao.
        </Link>

        {/* 中間連結 (深灰色字體) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
          <Link href="/about" className="text-blue-600 font-bold flex items-center gap-2">
             About me
          </Link>
          <Link href="/blog" className="hover:text-black transition-colors flex items-center gap-2">
             Blog
          </Link>
          <Link href="/projects" className="hover:text-black transition-colors flex items-center gap-2">
             Projects
          </Link>
        </div>

        {/* 右側裝飾 (可以放個小 icon 或留空) */}
        <div className="w-6"></div>
      </nav>

      {/* --- 2. 主要內容 --- */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20 animate-fade-in-up">
        
        {/* 標題區 */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-neutral-900">
            About <span className="text-blue-600">Me</span>.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
            這裡是我分享技術與生活的地方。我喜歡將複雜的程式碼轉化為簡約優雅的介面，同時也沉迷於機器人控制的精準藝術。
          </p>
        </div>

        {/* 兩欄佈局：左邊介紹，右邊技能 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          
          {/* 左欄：詳細介紹 */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Who am I?
              </h2>
              <p className="text-neutral-600 leading-7">
                我是 <span className="font-bold text-black">Hao</span>，目前就讀於 <span className="font-bold text-blue-600">基隆商工 (KLCIVS)</span>。
                <br /><br />
                我有著雙重身分：白天是一名 <b>坐在教室的學生</b> ，晚上則是探索著 <b>機器人</b> 的選手。
                <br /><br />
                我相信技術的本質是解決問題，而簡約的設計能讓解決方案更迷人。
              </p>
            </section>

            {/* 經歷/獎項 (放入你的真實資料) */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-neutral-200 rounded-full"></span>
                Contest
              </h2>
              <ul className="space-y-8 border-l-2 border-neutral-200 pl-8 ml-3 py-2">

  {/* 2026 Feb - 參賽中 (紅色呼吸燈特效) */}
  <li className="relative">
    <span className="absolute -left-[41px] top-1 flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
    </span>
    <span className="text-xs font-bold text-red-500 tracking-wider mb-1 block">2026.Feb</span>
    <h3 className="font-bold text-neutral-900 text-lg">
      115電機電子群-全國專題實作及創意競賽
    </h3>
    <div className="mt-2 flex items-center gap-2">
      <span className="text-sm text-neutral-600">複賽 專題組</span>
      <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-600 border border-red-200">
        參賽中
      </span>
    </div>
  </li>

  {/* 2025 Dec - 優勝五 (金色榮耀) */}
  <li className="relative">
    <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-yellow-500 rounded-full border-4 border-white shadow-md"></div>
    <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Dec</span>
    <h3 className="font-bold text-neutral-900 text-lg">
      114全國高級中等學校技藝競賽
    </h3>
    <div className="mt-2 flex items-center gap-2">
      <span className="text-sm text-neutral-600">機器人職種</span>
      <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-700 border border-yellow-300 flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        優勝五
      </span>
    </div>
  </li>

  {/* 2025 Apr - 科展 佳作 */}
  <li className="relative">
    <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-white"></div>
    <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Apr</span>
    <h3 className="font-bold text-neutral-900 text-base">
      第65屆 第一分區科學展覽會
    </h3>
    <div className="mt-1">
       <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
         佳作
       </span>
    </div>
  </li>

  {/* 2025 Mar - 自主機器人 佳作 (6th) */}
  <li className="relative">
    <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-white"></div>
    <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Mar</span>
    <h3 className="font-bold text-neutral-900 text-base">
      55屆 分區技能競賽
    </h3>
    <div className="mt-1 flex items-center gap-2">
      <span className="text-sm text-neutral-600">自主機器人職種</span>
      <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
        佳作 (6th)
      </span>
    </div>
  </li>

  {/* 2025 Feb - 專題實作 佳作 */}
  <li className="relative">
    <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-white"></div>
    <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Feb</span>
    <h3 className="font-bold text-neutral-900 text-base">
      114電機電子群-全國專題實作及創意競賽
    </h3>
    <div className="mt-1 flex items-center gap-2">
      <span className="text-sm text-neutral-600">複賽 專題組</span>
      <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
        佳作
      </span>
    </div>
  </li>

  {/* 2025 Feb - 發明展 銀牌 (銀色) */}
  <li className="relative">
    <div className="absolute -left-[39px] top-2 w-4 h-4 bg-slate-400 rounded-full border-2 border-white"></div>
    <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Feb</span>
    <h3 className="font-bold text-neutral-900 text-base">
      IEYI 世界青少年發明展台灣選拔賽
    </h3>
    <div className="mt-1 flex items-center gap-2">
      <span className="text-sm text-neutral-600">農糧技術類</span>
      <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-600 border border-slate-300">
        銀牌
      </span>
    </div>
  </li>

  {/* 2024 Mar - 機器人 佳作 (8th) */}
  <li className="relative">
    <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-white"></div>
    <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2024.Mar</span>
    <h3 className="font-bold text-neutral-900 text-base">
      54屆 分區技能競賽
    </h3>
    <div className="mt-1 flex items-center gap-2">
      <span className="text-sm text-neutral-600">機器人職種</span>
      <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
        佳作 (8th)
      </span>
    </div>
  </li>

</ul>
            </section>
          </div>

          {/* 右欄：技能與照片 */}
          <div className="space-y-10">
            
            {/* 技能牆 (使用 Skill Icons) */}
            <section className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              <h2 className="text-lg font-bold mb-6">正在學習</h2>
              <div className="flex flex-wrap gap-3">
                {/* 這裡直接引用 Skill Icons 圖片 */}
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,c,cpp,androidstudio,kotlin,python,arduino,linux,git&perline=6" alt="My Skills" />
              </a>
              </div>
            </section>         
          </div>
        </div>
      </div>

      {/* --- 3. 底部 (白色版) --- */}
      <footer className="w-full text-center py-8 text-neutral-400 text-xs mt-auto">
        © 2026 Hao. All Rights Reserved.
      </footer>

    </main>
  );
}