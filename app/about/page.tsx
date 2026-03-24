import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 flex flex-col relative overflow-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-700/30 rounded-full mix-blend-screen filter blur-[120px] opacity-80 animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>
        <div className="absolute -bottom-[10%] left-[15%] w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
      </div>

      <div className="relative z-50">
        <Navbar isDark={true} />
      </div>

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 md:py-20 animate-fade-in-up relative z-10">
        
        <div className="mb-16 pl-2">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
            About Me.
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
            這裡是我分享技術與生活的地方。我喜歡將複雜的程式碼轉化為簡約優雅的介面，熱愛嘗試各項新技術。
          </p>
        </div>

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12">
          
          <div className="space-y-8">

            <section className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></span>
                Who am I?
              </h2>
              <div className="text-neutral-300 leading-relaxed space-y-4 font-light">
                <p>
                  我是 <span className="font-medium text-white">Hao</span>，目前就讀於 <span className="font-medium text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">基隆商工 (KLCIVS)</span>。
                </p>
                <p>
                  我有著雙重身分：白天是一名坐在教室的學生，晚上則是準備著各項競賽及學習新知的選手。
                </p>
              </div>
            </section>


            <section className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
                Contest
              </h2>
              
              <ul className="space-y-8 border-l border-white/20 pl-6 ml-2 py-2">
                
                {/* 經歷 1 */}
                <li className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                  <span className="text-xs font-mono text-white/50 tracking-wider mb-2 block">2025.Feb</span>
                  <h3 className="font-medium text-white text-base mb-2">115電機電子群-全國專題實作及創意競賽</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">複賽 專題組</span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 border border-white/5 text-blue-300 backdrop-blur-md">佳作</span>
                  </div>
                </li>

                {/* 經歷 2 */}
                <li className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]"></div>
                  <span className="text-xs font-mono text-white/50 tracking-wider mb-2 block">2025.Dec</span>
                  <h3 className="font-medium text-white text-base mb-2">114全國高級中等學校技藝競賽</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">機器人職種</span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 border border-white/5 text-yellow-300 backdrop-blur-md">優勝五</span>
                  </div>
                </li>

                {/* 經歷 3 */}
                <li className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                  <span className="text-xs font-mono text-white/50 tracking-wider mb-2 block">2025.Apr</span>
                  <h3 className="font-medium text-white text-base mb-2">第65屆 第一分區科學展覽會</h3>
                  <div><span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 border border-white/5 text-blue-300 backdrop-blur-md">佳作</span></div>
                </li>

                {/* 經歷 4 */}
                <li className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                  <span className="text-xs font-mono text-white/50 tracking-wider mb-2 block">2025.Mar</span>
                  <h3 className="font-medium text-white text-base mb-2">55屆 分區技能競賽</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">自主機器人職種</span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 border border-white/5 text-blue-300 backdrop-blur-md">佳作 (6th)</span>
                  </div>
                </li>

                {/* 經歷 5 */}
                <li className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                  <span className="text-xs font-mono text-white/50 tracking-wider mb-2 block">2025.Feb</span>
                  <h3 className="font-medium text-white text-base mb-2">114電機電子群-全國專題實作及創意競賽</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">複賽 專題組</span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 border border-white/5 text-blue-300 backdrop-blur-md">佳作</span>
                  </div>
                </li>

                {/* 經歷 6 */}
                <li className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-slate-300 rounded-full shadow-[0_0_10px_rgba(203,213,225,0.6)]"></div>
                  <span className="text-xs font-mono text-white/50 tracking-wider mb-2 block">2025.Feb</span>
                  <h3 className="font-medium text-white text-base mb-2">IEYI 世界青少年發明展台灣選拔賽</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">農糧技術類</span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 border border-white/5 text-slate-300 backdrop-blur-md">銀牌</span>
                  </div>
                </li>

                {/* 經歷 7 */}
                <li className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                  <span className="text-xs font-mono text-white/50 tracking-wider mb-2 block">2024.Mar</span>
                  <h3 className="font-medium text-white text-base mb-2">54屆 分區技能競賽</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">機器人職種</span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 border border-white/5 text-blue-300 backdrop-blur-md">佳作 (8th)</span>
                  </div>
                </li>

              </ul>
            </section>
          </div>

          <div className="flex flex-col gap-8">

            <section className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative w-40 h-40 rounded-full ring-2 ring-white/20 overflow-hidden bg-white/5 backdrop-blur-md shadow-2xl">
                  <img src="/me.png" alt="Hao" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" /> 
                </div>
              </div>
            </section>


            <section className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all hover:bg-white/[0.05] w-full">
              <h2 className="text-xs font-mono mb-8 text-white/50 tracking-widest uppercase text-center">
                正在學習...
              </h2>
              
              <div className="flex justify-center items-center gap-8 md:gap-10 transition-all"> 
                
                {/* Next.js */}
                <div className="group/icon relative flex flex-col items-center">
                  <img 
                    src="https://skillicons.dev/icons?i=nextjs&theme=dark" 
                    alt="Next.js" 
                    className="w-14 h-14 md:w-16 md:h-16 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                  />
                  <span className="mt-3 text-[10px] font-mono text-white/30 opacity-0 group-hover/icon:opacity-100 transition-opacity">Web</span>
                </div>

                {/* C++ */}
                <div className="group/icon relative flex flex-col items-center">
                  <img 
                    src="https://skillicons.dev/icons?i=cpp&theme=dark" 
                    alt="C++" 
                    className="w-14 h-14 md:w-16 md:h-16 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_15px_rgba(0,115,190,0.5)]" 
                  />
                  <span className="mt-3 text-[10px] font-mono text-white/30 opacity-0 group-hover/icon:opacity-100 transition-opacity">Control</span>
                </div>

                {/* Android Studio */}
                <div className="group/icon relative flex flex-col items-center">
                  <img 
                    src="https://skillicons.dev/icons?i=androidstudio&theme=dark" 
                    alt="Android Studio" 
                    className="w-14 h-14 md:w-16 md:h-16 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_15px_rgba(61,220,132,0.4)]" 
                  />
                  <span className="mt-3 text-[10px] font-mono text-white/30 opacity-0 group-hover/icon:opacity-100 transition-opacity">Mobile</span>
                </div>

              </div>
            </section> 
          </div>

        </div>
      </div>

      <footer className="w-full py-8 mt-auto relative z-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-white/40 text-xs font-mono text-center">
          © 2026 Hao. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}