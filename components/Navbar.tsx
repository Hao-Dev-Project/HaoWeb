"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ isDark = true }: { isDark?: boolean }) {
  const pathname = usePathname();

  const textColor = isDark ? "text-neutral-400" : "text-neutral-500";
  const activeColor = "text-blue-500 font-bold"; 
  const hoverColor = isDark ? "hover:text-white" : "hover:text-black";
  const logoColor = isDark ? "text-white" : "text-black";

  return (
    <nav className="w-full max-w-7xl mx-auto p-6 md:p-8 flex items-center justify-between h-20 relative z-50">

      <Link href="/" className={`text-xl font-bold tracking-tighter transition-colors ${logoColor} hover:text-blue-500`}>
        Hao.
      </Link>

      <div className={`flex items-center gap-6 md:gap-10 text-xs md:text-sm font-medium ${textColor}`}>
        <Link 
          href="/about" 
          className={`transition-colors ${pathname === "/about" ? activeColor : hoverColor}`}
        >
          About
        </Link>
        <Link 
          href="/blog" 
          className={`transition-colors ${pathname.includes("/blog") ? activeColor : hoverColor}`}
        >
          Blog
        </Link>
        <Link 
          href="/projects" 
          className={`transition-colors ${pathname === "/projects" ? activeColor : hoverColor}`}
        >
          Projects
        </Link>
      </div>


      <div className="w-6 hidden md:block"></div>
    </nav>
  );
}