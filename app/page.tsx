'use client';
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    const email = "haodev.web@gmail.com";
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 flex flex-col justify-between relative overflow-hidden">
      
     
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-700/20 rounded-full mix-blend-screen filter blur-[120px] opacity-80 animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>
      </div>

      <div className="relative z-50">
        <Navbar isDark={true} />
      </div>

      <div className="flex-1 flex items-center justify-center w-full px-6 relative z-10 animate-fade-in-up">
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="text-xl md:text-2xl font-mono text-white/50 tracking-widest uppercase flex items-center justify-center md:justify-start gap-3">
            
              
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2 py-1">
              <Typewriter options={{ strings: ['Hao.'], autoStart: true, loop: true, delay: 100, deleteSpeed: 50 }} />
            </h1>
            
            <div className="text-neutral-300 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-light space-y-3">
              <p>
                A student from <span className="text-blue-400 font-bold">KLCIVS</span>.
              </p>
              <p className="text-neutral-400">
                熱愛開發新技術。
              </p>
            </div>

            
            <div className="flex items-center justify-center md:justify-start gap-5 pt-6">
              
              
              <Link href="/blog" className="w-12 h-12 rounded-full border border-blue-500/50 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </Link>

              
              <a href="https://github.com/Hao-Dev-Project" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-blue-500/50 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>

              
              <button 
                onClick={handleCopy}
                className="relative w-12 h-12 rounded-full border border-blue-500/50 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                {isCopied ? (
                  <svg className="w-6 h-6 animate-scale-in text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                )}
                {isCopied && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl animate-fade-in-up whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-700"></div>
              
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/me.png" 
                  alt="Hao Avatar" 
                  fill 
                  className="object-cover scale-110" 
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <footer className="w-full text-center py-6 text-white/30 text-xs font-mono relative z-10 border-t border-white/5">
        <div className="w-24 h-0.5 bg-blue-500/50 mx-auto mb-4 rounded-full"></div>
        © 2026 Hao. All Rights Reserved.
      </footer>
    </main>
  );
}