"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/blog") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between h-20 relative z-50">
      <Link
        href="/"
        className="text-xl font-serif font-bold tracking-tight text-warm-text hover:text-amber-accent transition-colors duration-300 flex items-center gap-1.5 group select-none"
      >
        {pathname !== "/" && (
          <span className="text-base text-warm-muted group-hover:text-amber-accent group-hover:-translate-x-0.5 transition-all duration-300">
            ←
          </span>
        )}
        <span>Hao.</span>
      </Link>

      <div className="flex items-center gap-3 sm:gap-5 md:gap-6 text-xs sm:text-sm font-medium text-warm-sub select-none">
        <Link
          href="/#contest"
          onClick={(e) => handleScrollClick(e, "contest")}
          className="hover:text-warm-text transition-colors duration-300"
        >
          Contest
        </Link>
        {/* Thin vertical line divider matching text height with higher contrast */}
        <span className="w-[1.5px] h-3.5 bg-warm-sub/40 pointer-events-none"></span>
        <Link
          href="/#contact"
          onClick={(e) => handleScrollClick(e, "contact")}
          className="hover:text-warm-text transition-colors duration-300"
        >
          Contact
        </Link>
        {/* Thin vertical line divider matching text height with higher contrast */}
        <span className="w-[1.5px] h-3.5 bg-warm-sub/40 pointer-events-none"></span>
        <Link
          href="/blog"
          onClick={handleBlogClick}
          className={`transition-colors duration-300 ${
            pathname?.includes("/blog")
              ? "text-terracotta font-semibold"
              : "hover:text-warm-text"
          }`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}