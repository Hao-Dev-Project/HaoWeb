"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import postsData from "@/app/data/posts.json";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [refreshKey, setRefreshKey] = useState(0);

  // Trigger page fade-in animation again on navbar re-click and reset category
  useEffect(() => {
    const handleRefresh = () => {
      setRefreshKey((prev) => prev + 1);
      setSelectedCategory("全部");
    };
    window.addEventListener("refresh-blog", handleRefresh);
    return () => window.removeEventListener("refresh-blog", handleRefresh);
  }, []);

  // Dynamically extract categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(postsData.map((p) => p.category).filter(Boolean)));
    return ["全部", ...cats];
  }, []);

  // Filter posts based on category state (ordered newest first)
  const filteredPosts = useMemo(() => {
    const posts = selectedCategory === "全部"
      ? postsData
      : postsData.filter((p) => p.category === selectedCategory);
    return [...posts].reverse();
  }, [selectedCategory]);

  // Estimate reading time (400 chars/min in Chinese)
  const getReadingTime = (content: string = "") => {
    const length = content.length;
    const minutes = Math.ceil(length / 400);
    return `${minutes} 分鐘閱讀`;
  };

  return (
    <main key={refreshKey} className="min-h-screen bg-cream-100 text-warm-text font-sans relative overflow-x-clip flex flex-col">
      {/* Subtle warm decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[35rem] h-[35rem] bg-amber-accent/8 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[30rem] h-[30rem] bg-terracotta/5 rounded-full filter blur-[100px]"></div>
      </div>

      <Navbar />

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 md:py-20 relative z-10">
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-black mb-4 tracking-tight text-warm-text">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-accent to-terracotta">
              Notes
            </span>
            .
          </h1>
          <div className="warm-divider mb-4"></div>
          <p className="text-warm-sub font-light">
            記錄我的比賽、專題和技術筆記。
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-amber-text border-amber-text text-white shadow-sm"
                  : "bg-white/60 border-cream-300 text-warm-sub hover:bg-white hover:text-warm-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => {
            // Find the original index of the post in postsData to link correctly
            const originalIndex = postsData.findIndex((p) => p.title === post.title);

            return (
              <Link href={`/blog/${originalIndex}`} key={originalIndex} className="group block h-full">
                <article className="warm-card warm-card-hover overflow-hidden flex flex-col h-full">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-200">
                    <img
                      src={post.cover}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      alt={post.title}
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-semibold text-warm-text border border-cream-300 rounded-full uppercase tracking-widest">
                      {post.category || "Blog"}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-serif font-bold text-warm-text mb-2 line-clamp-2 group-hover:text-amber-text transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-warm-sub text-sm mb-4 line-clamp-2 font-light leading-relaxed">
                      {post.description || ""}
                    </p>
                    <div className="mt-auto pt-4 border-t border-cream-300">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-amber-text group-hover:text-terracotta-text transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-xs text-warm-muted font-medium">
                        <time>{post.date}</time>
                        <span>{getReadingTime(post.content)}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}