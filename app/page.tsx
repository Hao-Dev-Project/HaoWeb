'use client';

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
    // ★ 1. 修改 selection 顏色為藍色
    <main className="min-h-screen bg-[#1c1c1c] text-white font-sans selection:bg-blue-500/30 flex flex-col justify-between overflow-hidden">
      
      {/* --- 1. 頂部導覽列 (Navbar) --- */}
      <nav className="relative w-full max-w-7xl mx-auto p-6 md:p-8 flex items-center h-20">
        
        
        {/* 正中間的四個連結 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 text-xs md:text-sm font-medium text-neutral-400">
                    {/* 1. About 連結 */}
          <Link href="/about" className="hover:text-white transition-colors flex items-center gap-2">
            {/* 加了 hidden md:block -> 手機隱藏圖示 */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span>About</span> {/* 建議把 About me 改成 About，更短更俐落 */}
          </Link>

          {/* 2. Blog 連結 */}
          <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
            </svg>
            <span>Blog</span>
          </Link>

          {/* 3. Projects 連結 */}
          <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
            </svg>
            <span>Projects</span>
          </Link>
        </div>

        {/* 右側留空 */}
        <div className="ml-auto"></div>

      </nav>

      {/* --- 2. 中間主要內容 --- */}
      <div className="flex-1 flex items-center justify-center w-full px-6">
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* 左邊：文字區 */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            
            <div className="text-2xl md:text-3xl font-mono text-neutral-300">
              {/* ★ 2. Developer 改成藍色 (text-blue-400) */}
              HI! I'm a <span className="text-blue-400 font-bold">Developer</span>
            </div>

            {/* 超大標題 */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-2">
              <Typewriter
                options={{
                  strings: ['Hao.'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </h1>

            {/* 文字介紹 */}
            <div className="text-neutral-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              <p>
                A student from <span className="text-blue-400 font-bold">KLCIVS</span>.
              </p>
              <p className="mt-2">
               熱愛開發新技術。
               </p>
            </div>

            {/* 圓形社群按鈕 (全部改成藍色系) */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              
              {/* Blog Icon */}
              {/* ★ 3. 邊框、文字、Hover 背景都改成 Blue */}
              <Link href="/blog" className="w-12 h-12 rounded-full border border-blue-500/50 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </Link>

          
              {/* GitHub Icon */}
              <a href="https://github.com/Hao-Dev-Project" target="_blank" className="w-12 h-12 rounded-full border border-blue-500/50 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>

              {/* Mail Icon Button */}
              <button 
                onClick={handleCopy}
                className="relative w-12 h-12 rounded-full border border-blue-500/50 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                {/* 狀態切換 */}
                {isCopied ? (
                  <svg className="w-6 h-6 animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                )}

                {/* Copied 提示字 */}
                {/* ★ 4. 背景改為藍色 (bg-blue-500) */}
                {isCopied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg animate-fade-in-up whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* 裝飾背景圓 */}
                <div className="absolute inset-0 bg-blue-900/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                
                {/* 照片圓形裁切 */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#2d3748] shadow-2xl">
                   <Image 
                     src="/me.png" 
                     alt="Hao Avatar" 
                     fill 
                     className="object-cover"
                   />
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* --- 3. 底部版權 --- */}
      <footer className="w-full text-center py-6 text-neutral-600 text-xs border-t border-white/5">
        <div className="w-24 h-0.5 bg-neutral-700 mx-auto mb-4"></div>
        © 2026 Hao. All Rights Reserved.
      </footer>
    </main>
  );
}