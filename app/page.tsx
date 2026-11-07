"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

// Custom typewriter component to prevent ghost characters and layout shifts
function Typewriter({ onCycleComplete }: { onCycleComplete: () => void }) {
  const text = "Hao";
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        const nextText = text.substring(0, currentText.length + 1);
        setCurrentText(nextText);
        setTypingSpeed(150); // Regular typing speed

        if (nextText === text) {
          setTypingSpeed(1500); // Pause on complete word
          setIsDeleting(true);
        }
      } else {
        // Deleting
        const nextText = text.substring(0, currentText.length - 1);
        setCurrentText(nextText);
        setTypingSpeed(75); // Faster delete speed

        if (nextText === "") {
          setIsDeleting(false);
          onCycleComplete(); // Trigger cycle complete to reset the entire component cycle
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, onCycleComplete]);

  return (
    <span 
      className="inline-flex items-center" 
      style={{ transform: "translate3d(0,0,0)", willChange: "contents" }}
    >
      {currentText}
      <span className="ml-1 text-amber-accent font-light animate-[pulse_1s_infinite] select-none">|</span>
    </span>
  );
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-cream-100 text-warm-text font-sans flex flex-col relative overflow-hidden">
      {/* Subtle warm decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[15%] -right-[10%] w-[35rem] h-[35rem] bg-amber-accent/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-[20%] -left-[10%] w-[30rem] h-[30rem] bg-terracotta/8 rounded-full filter blur-[100px]"></div>
      </div>

      <Navbar />

      {/* Hero section taking full screen height initially */}
      <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-between w-full px-6 relative z-10 py-12 md:py-16">
        {/* Top spacer for flex balance */}
        <div className="h-0"></div>

        <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 my-auto">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black tracking-tight text-warm-text mb-2 py-1 min-h-[1.1em] flex items-center justify-center md:justify-start">
              {isMounted ? (
                <Typewriter 
                  key={cycleKey} 
                  onCycleComplete={() => setCycleKey((prev) => prev + 1)} 
                />
              ) : (
                "Hao"
              )}
            </h1>


          </div>

          {/* Avatar */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-accent/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cream-300 bg-cream-200 shadow-lg transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/me.png"
                  alt="Hao Avatar"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bouncing scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-warm-muted animate-bounce pointer-events-none select-none">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em]">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Contest Timeline section below Hero */}
      <div id="contest" className="max-w-3xl mx-auto w-full px-6 pb-12 md:pb-16 relative z-10">
        <section className="warm-card p-6 md:p-10 shadow-md">
          <h2 className="text-xl font-serif font-bold mb-8 flex items-center gap-3 text-warm-text">
            <span className="w-1 h-6 bg-gradient-to-b from-terracotta to-amber-accent rounded-full"></span>
            Contest
          </h2>

          <ul className="space-y-8 border-l-2 border-cream-300 pl-6 ml-2 py-2">
            {/* 經歷 1 */}
            <li className="relative">
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-amber-accent rounded-full shadow-sm"></div>
              <span className="text-xs text-warm-muted tracking-wider mb-1.5 block">
                2026.Feb
              </span>
              <h3 className="font-medium text-warm-text text-base mb-1.5">
                115電機電子群-全國專題實作及創意競賽
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-warm-sub">複賽 專題組</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-accent/10 text-amber-dark border border-amber-accent/20">
                  佳作
                </span>
              </div>
            </li>

            {/* 經歷 2 */}
            <li className="relative">
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-terracotta rounded-full shadow-sm"></div>
              <span className="text-xs text-warm-muted tracking-wider mb-1.5 block">
                2025.Dec
              </span>
              <h3 className="font-medium text-warm-text text-base mb-1.5">
                114全國高級中等學校技藝競賽
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-warm-sub">機器人職種</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-terracotta/10 text-terracotta border border-terracotta/20">
                  優勝五
                </span>
              </div>
            </li>

            {/* 經歷 3 */}
            <li className="relative">
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-amber-accent rounded-full shadow-sm"></div>
              <span className="text-xs text-warm-muted tracking-wider mb-1.5 block">
                2025.Apr
              </span>
              <h3 className="font-medium text-warm-text text-base mb-1.5">
                第65屆 第一分區科學展覽會
              </h3>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-accent/10 text-amber-dark border border-amber-accent/20">
                  佳作
                </span>
              </div>
            </li>

            {/* 經歷 4 */}
            <li className="relative">
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-amber-accent rounded-full shadow-sm"></div>
              <span className="text-xs text-warm-muted tracking-wider mb-1.5 block">
                2025.Mar
              </span>
              <h3 className="font-medium text-warm-text text-base mb-1.5">
                55屆 分區技能競賽
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-warm-sub">自主機器人職種</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-accent/10 text-amber-dark border border-amber-accent/20">
                  佳作 (6th)
                </span>
              </div>
            </li>

            {/* 經歷 5 */}
            <li className="relative">
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-amber-accent rounded-full shadow-sm"></div>
              <span className="text-xs text-warm-muted tracking-wider mb-1.5 block">
                2025.Feb
              </span>
              <h3 className="font-medium text-warm-text text-base mb-1.5">
                114電機電子群-全國專題實作及創意競賽
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-warm-sub">複賽 專題組</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-accent/10 text-amber-dark border border-amber-accent/20">
                  佳作
                </span>
              </div>
            </li>

            {/* 經歷 6 */}
            <li className="relative">
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-terracotta rounded-full shadow-sm"></div>
              <span className="text-xs text-warm-muted tracking-wider mb-1.5 block">
                2025.Feb
              </span>
              <h3 className="font-medium text-warm-text text-base mb-1.5">
                IEYI 世界青少年發明展台灣選拔賽
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-warm-sub">農糧技術類</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-terracotta/10 text-terracotta border border-terracotta/20">
                  銀牌
                </span>
              </div>
            </li>

            {/* 經歷 7 */}
            <li className="relative">
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-amber-accent rounded-full shadow-sm"></div>
              <span className="text-xs text-warm-muted tracking-wider mb-1.5 block">
                2024.Mar
              </span>
              <h3 className="font-medium text-warm-text text-base mb-1.5">
                54屆 分區技能競賽
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-warm-sub">機器人職種</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-accent/10 text-amber-dark border border-amber-accent/20">
                  佳作 (8th)
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Bouncing scroll indicator between Contest and Contact */}
      <div className="flex flex-col items-center gap-2 text-warm-muted animate-bounce pointer-events-none select-none py-12">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em]">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-3xl mx-auto w-full px-6 pb-24 md:pb-32 relative z-10">
        <section className="warm-card p-6 md:p-10 shadow-md text-center md:text-left">
          <h2 className="text-xl font-serif font-bold mb-6 flex items-center justify-center md:justify-start gap-3 text-warm-text">
            <span className="w-1 h-6 bg-gradient-to-b from-terracotta to-amber-accent rounded-full"></span>
            Contact
          </h2>
          <p className="text-warm-sub text-sm leading-relaxed mb-6 font-light">
            如果有任何合作提案、競賽交流或技術探討的機會，非常歡迎透過電子郵件與我聯絡。我會盡快回覆您！
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://mail.google.com/mail/?view=cm&to=haoweb67@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-white border border-cream-300 rounded-full text-warm-text hover:bg-terracotta hover:text-white hover:border-terracotta hover:shadow-md transition-all duration-300 select-none"
            >
              <svg className="w-4 h-4 text-warm-sub group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold tracking-wider">haoweb67@gmail.com</span>
            </a>
          </div>
        </section>
      </div>

      <footer className="w-full text-center py-8 text-warm-muted text-xs relative z-10 border-t border-cream-300">
        <div className="warm-divider mx-auto mb-4"></div>
        © 2026 Hao. All Rights Reserved.
      </footer>
    </main>
  );
}