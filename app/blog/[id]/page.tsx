import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import postsData from "@/app/data/posts.json";
import ProgressBar from "@/components/ProgressBar";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-light.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const postId = parseInt(id);
  const post = postsData[postId];
  
  if (!post) {
    return {
      title: "找不到文章 — Hao 個人網頁",
    };
  }

  return {
    title: `${post.title} — Hao 個人網頁`,
    description: post.description || "Hao 的技術與比賽學習筆記。",
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = parseInt(id);
  const post = postsData[postId];

  if (!post) {
    notFound();
    return null;
  }

  const readingTime = Math.ceil((post.content?.length || 0) / 400);

  return (
    <main className="min-h-screen bg-cream-100 text-warm-text font-sans relative overflow-hidden flex flex-col animate-none">
      <ProgressBar />
      {/* Subtle warm decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[15%] w-[35rem] h-[35rem] bg-amber-accent/8 rounded-full filter blur-[100px]"></div>
      </div>

      <Navbar />

      <article className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20 relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-medium tracking-wider text-warm-sub bg-white/60 border border-cream-300 rounded-full hover:bg-white hover:text-warm-text transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-amber-accent/10 border border-amber-accent/20 text-amber-dark rounded-full text-xs font-semibold uppercase tracking-widest">
              {post.category || "Blog"}
            </span>
            <time className="text-sm text-warm-muted">{post.date} • {readingTime} 分鐘閱讀</time>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-4 text-warm-text leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string, idx: number) => (
              <span key={idx} className="text-sm text-amber-accent font-medium">
                #{tag}
              </span>
            ))}
          </div>
          <div className="warm-divider"></div>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-cream-200 border border-cream-300 mb-8 shadow-md">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none prose-warm prose-headings:font-serif prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline prose-pre:bg-cream-50 prose-pre:border prose-pre:border-cream-300 prose-pre:rounded-xl prose-blockquote:border-l-amber-accent">
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              code({ node, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                const lang = match ? match[1] : "";
                
                if (lang === "diagram1") {
                  return (
                    <div className="w-full overflow-x-auto pb-4 my-8">
                      <div className="flex flex-col items-center gap-4 text-xs font-semibold not-prose min-w-[540px] w-full select-none mx-auto whitespace-normal">
                        {/* Start capsule */}
                        <div className="px-6 py-2 bg-white border border-cream-300 rounded-full text-warm-text shadow-sm tracking-wider text-center min-w-[120px]">
                          開始
                        </div>
                        
                        {/* Arrow */}
                        <svg className="w-5 h-5 text-amber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                        </svg>
                        
                        {/* Process */}
                        <div className="px-5 py-3 bg-white border border-cream-300 rounded-md text-warm-text shadow-sm text-center min-w-[180px]">
                          LINX Initialize
                        </div>
                        
                        {/* Arrow */}
                        <svg className="w-5 h-5 text-amber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                        </svg>
                        
                        {/* Process */}
                        <div className="px-5 py-3 bg-white border border-cream-300 rounded-md text-warm-text shadow-sm text-center min-w-[180px]">
                          進入 While Loop 迴圈
                        </div>
                        
                        {/* Arrow */}
                        <svg className="w-5 h-5 text-amber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                        </svg>
                        
                        {/* Process */}
                        <div className="px-5 py-3 bg-white border border-cream-300 rounded-md text-warm-text shadow-sm text-center min-w-[180px]">
                          Read Ultrasonic VI 讀取前方距離
                        </div>
                        
                        {/* Arrow */}
                        <svg className="w-5 h-5 text-amber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                        </svg>
                        
                        {/* Decision Diamond */}
                        <div className="relative w-28 h-28 flex items-center justify-center my-2">
                          <div className="absolute inset-0 rotate-45 border border-cream-300 bg-white shadow-sm rounded-sm"></div>
                          <div className="relative text-[10px] text-warm-text font-bold text-center px-2">
                            距離 &lt; 30 cm?
                          </div>
                        </div>
                        
                        {/* Split paths */}
                        <div className="w-full max-w-[520px] flex flex-row items-stretch justify-between relative mt-2">
                          {/* Left branch: Yes */}
                          <div className="flex-1 min-w-0 flex flex-col items-center border-r border-dashed border-cream-300 pr-4">
                            <div className="text-[10px] text-red-600 font-bold mb-3 tracking-wider">True</div>
                            <div className="p-3 bg-white border border-cream-300 rounded-md text-warm-text shadow-sm text-center w-full max-w-[240px] break-all">
                              LINX Write Port: Low
                            </div>
                            <svg className="w-5 h-5 text-amber-accent my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                            </svg>
                            <div className="p-3 bg-white border border-cream-300 rounded-md text-warm-text shadow-sm text-center w-full max-w-[240px] break-all">
                              控制繼電器馬達煞車
                            </div>
                          </div>
                          
                          {/* Right branch: No */}
                          <div className="flex-1 min-w-0 flex flex-col items-center pl-4">
                            <div className="text-[10px] text-green-600 font-bold mb-3 tracking-wider">False</div>
                            <div className="p-3 bg-white border border-cream-300 rounded-md text-warm-text shadow-sm text-center w-full max-w-[240px] break-all">
                              執行 autoCorrectHeading.vi
                            </div>
                            <svg className="w-5 h-5 text-amber-accent my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                            </svg>
                            <div className="p-3 bg-white border border-cream-300 rounded-md text-warm-text shadow-sm text-center w-full max-w-[240px] break-all">
                              輸出 LINX PWM 調整左右輪速
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (lang === "diagram2") {
                  return (
                    <div className="my-8 flex flex-col items-center gap-4 text-xs font-semibold not-prose w-full select-none whitespace-normal">
                      {/* Start capsule */}
                      <div className="px-6 py-2 bg-white border border-cream-300 rounded-full text-warm-text shadow-sm tracking-wider text-center min-w-[180px]">
                        Shift Register 傳遞狀態
                      </div>
                      
                      {/* Arrow */}
                      <svg className="w-5 h-5 text-amber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-4-4m4 4l4-4" />
                      </svg>
                      
                      {/* Decision Diamond */}
                      <div className="relative w-32 h-32 flex items-center justify-center my-2">
                        <div className="absolute inset-0 rotate-45 border border-cream-300 bg-white shadow-sm rounded-sm"></div>
                        <div className="relative text-[10px] text-warm-text font-bold text-center px-1">
                          Case Structure<br />條件選擇器
                        </div>
                      </div>
                      
                      {/* Split paths into 3 branches */}
                      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        {/* Branch 1 */}
                        <div className="flex flex-col items-center p-4 bg-white border border-cream-300 rounded-md shadow-sm">
                          <div className="text-[10px] text-amber-dark font-bold mb-3 tracking-wider">STATE_INIT</div>
                          <div className="w-full border-t border-cream-200 pt-3 text-[11px] text-warm-sub space-y-2 leading-relaxed text-center">
                            <div>呼叫感測器初始化 VI</div>
                            <div>清除馬達暫存器脈衝</div>
                            <div className="text-amber-accent font-bold pt-1">➔ 轉移: STATE_TRACK_LINE</div>
                          </div>
                        </div>
                        
                        {/* Branch 2 */}
                        <div className="flex flex-col items-center p-4 bg-white border border-cream-300 rounded-md shadow-sm">
                          <div className="text-[10px] text-terracotta font-bold mb-3 tracking-wider">STATE_TRACK_LINE</div>
                          <div className="w-full border-t border-cream-200 pt-3 text-[11px] text-warm-sub space-y-2 leading-relaxed text-center">
                            <div>讀取 7 路灰階感測器</div>
                            <div>Formula Node 計算 PID</div>
                            <div className="text-amber-accent font-bold pt-1">➔ 轉移: 判斷前方障礙物</div>
                          </div>
                        </div>
                        
                        {/* Branch 3 */}
                        <div className="flex flex-col items-center p-4 bg-white border border-cream-300 rounded-md shadow-sm">
                          <div className="text-[10px] text-warm-text font-bold mb-3 tracking-wider">STATE_GRIP_CARGO</div>
                          <div className="w-full border-t border-cream-200 pt-3 text-[11px] text-warm-sub space-y-2 leading-relaxed text-center">
                            <div>輸出氣壓缸數位訊號</div>
                            <div>驅動電磁閥閉合夾爪</div>
                            <div className="text-amber-accent font-bold pt-1">➔ 轉移: STATE_DOCK_BASE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {post.content || ""}
          </ReactMarkdown>
        </div>

        {/* Previous / Next Navigation */}
        {(() => {
          const prevPost = postId > 0 ? postsData[postId - 1] : null;
          const nextPost = postId < postsData.length - 1 ? postsData[postId + 1] : null;

          return (
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-16 pt-8 border-t border-cream-300">
              {prevPost ? (
                <Link
                  href={`/blog/${postId - 1}`}
                  className="flex-1 p-4 bg-white/60 border border-cream-300 rounded-xl hover:bg-white transition-all duration-300 text-left group"
                >
                  <div className="text-xs text-warm-sub mb-1 flex items-center gap-1">
                    <span>←</span> Previous
                  </div>
                  <div className="text-sm font-serif font-bold text-warm-text group-hover:text-amber-accent transition-colors line-clamp-1">
                    {prevPost.title}
                  </div>
                </Link>
              ) : (
                <div className="flex-1 hidden sm:block"></div>
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${postId + 1}`}
                  className="flex-1 p-4 bg-white/60 border border-cream-300 rounded-xl hover:bg-white transition-all duration-300 text-right group"
                >
                  <div className="text-xs text-warm-sub mb-1 flex items-center justify-end gap-1">
                    Next <span>→</span>
                  </div>
                  <div className="text-sm font-serif font-bold text-warm-text group-hover:text-amber-accent transition-colors line-clamp-1">
                    {nextPost.title}
                  </div>
                </Link>
              ) : (
                <div className="flex-1 hidden sm:block"></div>
              )}
            </div>
          );
        })()}
      </article>

      <footer className="w-full text-center py-8 text-warm-muted text-xs border-t border-cream-300">
        <div className="warm-divider mx-auto mb-4"></div>
        © 2026 Hao. All Rights Reserved.
      </footer>
    </main>
  );
}