"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-cream-300/30 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-amber-accent to-terracotta transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
