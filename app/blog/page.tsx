// app/blog/page.tsx
'use client';
import Link from "next/link";
import Navbar from "@/components/Navbar";

const posts = [
  {
    date: "2026.Feb",
    title: "115全國專題競賽-歷程與心得",
    description: "這篇文章分享我在準備 115 全國專題賽時，從創作動機到成果展出的...",
    tags: ["Robot", "Android Studio", "Raspberry pi 4", "Triangle Robot"],
    category: "Contest",
    cover: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
  },
  {
    date: "2025.Dec",
    title: "114工科技藝競賽-心路歷程",
    description: "從一年級開始參加機器人直到高三...",
    tags: ["Robot", "Labview"],
    category: "Contest",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
  },
   {
    date: "2025.Apr",
    title: "65屆北一區科展-競賽紀錄",
    description: "傳統三角故障警示牌 vs 自動化部署三角警示牌...",
    tags: ["Robot", "Triangle Robot"],
    category: "Project",
    cover: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
  },
  {
    date: "2025.Mar",
    title: "55分區技能競賽-競賽紀錄",
    description: "分區技能競賽是一場青年好手的競賽殿堂...",
    tags: ["Robot", "Labview"],
    category: "Contest",
    cover: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=600&auto=format&fit=crop",
  },
  {
    date: "2025.Feb",
    title: "114全國專題競賽-歷程與心得",
    description: "這篇文章分享我在準備 114 全國專題賽時，從創作動機到成果展出的...",
    tags: ["Robot", "Labview", "medical"],
    category: "Contest",
    cover: "/114mr.jpg",
    imageClass: "object-contain bg-[#0a0a0a]",
  },
  {
    date: "2025.Feb",
    title: "2025IEYI青少年發明展-歷程與心得",
    description: "這篇文章分享我在準備設計魚菜共生的產品，數據統計...",
    tags: ["Aquaponics", "tech", "Fish"],
    category: "Project",
    cover: "/2025ieyi.png",
    imageClass: "object-contain bg-[#0a0a0a]",
  },
  {
    date: "2024.Mar",
    title: "54分區技能競賽-競賽紀錄",
    description: "高中開學半年第一次參加競賽，需要學習許多...",
    tags: ["Robot", "Labview"],
    category: "Contest",
    cover: "/54.png",
    imageClass: "object-contain bg-[#0a0a0a]",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-100 font-sans relative overflow-hidden flex flex-col">
      
      {/* 1. 環境光球 (與首頁宇宙同步) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-700/20 rounded-full mix-blend-screen filter blur-[120px] opacity-80 animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>
        <div className="absolute -bottom-[10%] left-[15%] w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
      </div>

      {/* 科技網格背景 */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* 使用統一的 Navbar 組件 */}
      <Navbar isDark={true} />

      <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 md:py-20 relative z-10 animate-fade-in-up">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Notes</span>.
          </h1>
          <p className="text-neutral-400 font-light">紀錄技術、比賽心得與生活中的點滴。</p>
        </header>

        {/* 2. 毛玻璃卡片 Grid 佈局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link href={`/blog/${index}`} key={index} className="group block h-full">
              <article className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 h-full flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:-translate-y-2">
                
                {/* 封面圖區域：維持你的 aspect-ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900/50">
                  <img 
                    src={post.cover}
                    className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out ${post.imageClass || 'object-cover'}`}
                    alt={post.title}
                  />
                  {/* 毛玻璃分類標籤 */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                                {/* 文字內容區域 */}
                <div className="p-8 flex flex-col flex-1">
                  
                  {/* 標題：保持原樣，稍微調整行距 */}
                  <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors h-[64px] leading-snug">
                    {post.title}
                  </h2>
                  
                  {/* 描述：【重點優化】加大字體並換成更清晰的顏色，增加字重 */}
                  <p className="text-neutral-200 text-[17px] mb-8 line-clamp-2 font-normal leading-relaxed h-[56px]">
                    {post.description}
                  </p>
                  
                  {/* 底部 Tags 與 日期 */}
                  <div className="mt-auto pt-6 border-t border-white/10">
                    
                    {/* Tags：【重點優化】加粗字體，並給予更明顯的顏色區隔 */}
                    <div className="flex gap-x-4 gap-y-2 flex-wrap min-h-[44px] mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={`${tag}-${tagIndex}`} className="text-[15px] font-semibold text-blue-400/90 group-hover:text-blue-300 transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {/* 互動按鈕 */}
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </div>

                      {/* 日期：【重點優化】字體變大，並使用更亮的灰色 */}
                      <time className="text-sm font-bold font-mono text-neutral-400 tracking-tight">
                        {post.date}
                      </time>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <footer className="w-full text-center py-12 text-white/10 text-xs font-mono relative z-10 border-t border-white/5 mt-auto">
        © 2026 Hao. All Rights Reserved.
      </footer>
    </main>
  );
}