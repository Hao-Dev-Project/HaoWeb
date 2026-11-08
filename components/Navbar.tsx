"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  { id: "projects", label: "作品" },
  { id: "contest", label: "競賽" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/blog") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const linkClass = "px-1 py-1 hover:text-warm-text transition-colors duration-300";

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/80 backdrop-blur-md border-b border-cream-300/80 shadow-[0_1px_12px_rgba(45,42,38,0.05)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="w-full max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="text-xl font-serif font-bold tracking-tight text-warm-text hover:text-amber-text transition-colors duration-300 flex items-center gap-1.5 group select-none"
        >
          {pathname !== "/" && (
            <span className="text-base text-warm-muted group-hover:text-amber-text group-hover:-translate-x-0.5 transition-all duration-300">
              ←
            </span>
          )}
          <span>Hao.</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-warm-sub select-none">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`/#${s.id}`}
              onClick={(e) => handleScrollClick(e, s.id)}
              className={linkClass}
            >
              {s.label}
            </Link>
          ))}
          <Link
            href="/blog"
            onClick={handleBlogClick}
            className={
              pathname?.startsWith("/blog")
                ? "px-1 py-1 text-terracotta-text font-semibold"
                : linkClass
            }
          >
            文章
          </Link>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={linkClass}
          >
            聯絡
          </Link>
        </div>
      </nav>
    </header>
  );
}
