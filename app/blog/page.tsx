// app/blog/page.tsx
'use client';
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { posts } from "../data";
export default function Blog() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-100 font-sans relative overflow-hidden flex flex-col">
      
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-700/20 rounded-full mix-blend-screen filter blur-[120px] opacity-80 animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>
        <div className="absolute -bottom-[10%] left-[15%] w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
      </div>

      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      
      <Navbar isDark={true} />

      <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 md:py-20 relative z-10 animate-fade-in-up">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Notes</span>.
          </h1>
          <p className="text-neutral-400 font-light">紀錄技術、比賽心得與生活中的點滴。</p>
        </header>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link href={`/blog/${index}`} key={index} className="group block h-full">
              <article className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 h-full flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:-translate-y-2">
                
                
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900/50">
                              <img 
                src={post.cover} 
                className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out ${post.imageClass ? post.imageClass : 'object-cover'}`} 
                alt={post.title} 
                />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                
                <div className="p-8 flex flex-col flex-1">
                  
                 
                  <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors h-[64px] leading-snug">
                    {post.title}
                  </h2>
                  
                  
                  <p className="text-neutral-200 text-[17px] mb-8 line-clamp-2 font-normal leading-relaxed h-[56px]">
                    {post.description}
                  </p>
                  
                  
                  <div className="mt-auto pt-6 border-t border-white/10">
                    
                    
                    <div className="flex gap-x-4 gap-y-2 flex-wrap min-h-[44px] mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={`${tag}-${tagIndex}`} className="text-[15px] font-semibold text-blue-400/90 group-hover:text-blue-300 transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </div>

                      
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

      <footer className="w-full text-center py-6 text-white/30 text-xs font-mono relative z-10 border-t border-white/5">
        <div className="w-24 h-0.5 bg-blue-500/50 mx-auto mb-4 rounded-full"></div>
        © 2026 Hao. All Rights Reserved.
      </footer>
    </main>
  );
}