// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-blue-100 flex flex-col relative overflow-hidden">
      
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <nav className="w-full max-w-7xl mx-auto p-6 md:p-8 flex items-center justify-between h-20 relative z-10">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-600 transition-colors">
          Hao.
        </Link>

        <div className="flex items-center gap-3 md:gap-8 text-xs md:text-sm font-medium text-neutral-500">
          <Link href="/about" className="text-blue-600 font-bold">About</Link>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <Link href="/projects" className="hover:text-black transition-colors">Projects</Link>
        </div>
        <div className="w-6"></div>
      </nav>

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 md:py-20 animate-fade-in-up relative z-10">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-neutral-900">
            About <span className="text-blue-600">Me</span>.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
            這裡是我分享技術與生活的地方。我喜歡將複雜的程式碼轉化為簡約優雅的介面。
          </p>
        </div>

        
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16">
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Who am I?
              </h2>
              <div className="text-neutral-600 leading-7 space-y-4">
                <p>
                  我是 <span className="font-bold text-black">Hao</span>，目前就讀於 <span className="font-bold text-blue-600 underline underline-offset-4 decoration-blue-100">基隆商工 (KLCIVS)</span>。
                </p>
                <p>
                  我有著雙重身分：白天是一名 <span className="text-neutral-900 font-medium">坐在教室的學生</span>，晚上則是探索著 <span className="text-neutral-900 font-medium">機器人</span> 的選手。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-neutral-200 rounded-full"></span>
                Contest
              </h2>
              <ul className="space-y-8 border-l-2 border-neutral-200 pl-8 ml-3 py-2">
                <li className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-[#fafafa]"></span>
                  </span>
                  <span className="text-xs font-bold text-red-500 tracking-wider mb-1 block">2026.Feb</span>
                  <h3 className="font-bold text-neutral-900 text-lg">115電機電子群-全國專題實作及創意競賽</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-neutral-600">複賽 專題組</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-600 border border-red-200">參賽中</span>
                  </div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-yellow-500 rounded-full border-4 border-[#fafafa] shadow-sm"></div>
                  <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Dec</span>
                  <h3 className="font-bold text-neutral-900 text-lg">114全國高級中等學校技藝競賽</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-neutral-600">機器人職種</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-50 text-yellow-700 border border-yellow-200">優勝五</span>
                  </div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-[#fafafa]"></div>
                  <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Apr</span>
                  <h3 className="font-bold text-neutral-900 text-base">第65屆 第一分區科學展覽會</h3>
                  <div className="mt-1"><span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">佳作</span></div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-[#fafafa]"></div>
                  <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Mar</span>
                  <h3 className="font-bold text-neutral-900 text-base">55屆 分區技能競賽</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-neutral-600">自主機器人職種</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">佳作 (6th)</span>
                  </div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-[#fafafa]"></div>
                  <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Feb</span>
                  <h3 className="font-bold text-neutral-900 text-base">114電機電子群-全國專題實作及創意競賽</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-neutral-600">複賽 專題組</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">佳作</span>
                  </div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[39px] top-2 w-4 h-4 bg-slate-400 rounded-full border-2 border-[#fafafa]"></div>
                  <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2025.Feb</span>
                  <h3 className="font-bold text-neutral-900 text-base">IEYI 世界青少年發明展台灣選拔賽</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-neutral-600">農糧技術類</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-600 border border-slate-300">銀牌</span>
                  </div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[39px] top-2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-[#fafafa]"></div>
                  <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1 block">2024.Mar</span>
                  <h3 className="font-bold text-neutral-900 text-base">54屆 分區技能競賽</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-neutral-600">機器人職種</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">佳作 (8th)</span>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <div className="flex flex-col gap-10">
            
            <section className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
                  <img src="/me.png" alt="Hao" className="w-full h-full object-cover" /> 
                </div>
              </div>
            </section>

            
            <section className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm w-full md:w-fit mx-auto md:mx-0">
              <h2 className="text-xs font-bold mb-5 text-neutral-400 tracking-widest uppercase">正在學習</h2>
              <div className="max-w-[220px]"> 
                <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,c,cpp,androidstudio,kotlin,python,arduino,linux,git&perline=4" alt="My Skills" />
              </div>
            </section> 
          </div>

        </div>
      </div>

      <footer className="w-full text-center py-8 text-neutral-400 text-xs mt-auto relative z-10">
        © 2026 Hao. All Rights Reserved.
      </footer>
    </main>
  );
}