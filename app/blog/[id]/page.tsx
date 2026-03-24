import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../data";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css"; 

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id);
  const post = posts[postId];

if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 flex flex-col relative overflow-hidden">
      
      {/* 宇宙背景光球 */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-700/20 rounded-full mix-blend-screen filter blur-[120px] opacity-80 animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>
      </div>

      <div className="relative z-50">
        <Navbar isDark={true} />
      </div>

      <article className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20 relative z-10 animate-fade-in-up">
        

        
            <Link href="/blog" className="relative inline-flex items-center justify-center px-4 py-1.5 mb-12 overflow-hidden font-mono text-xs font-medium tracking-widest text-neutral-400 bg-white/5 border border-white/10 rounded-lg group hover:border-transparent">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Blog
            </span>
            </Link>

    
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md">
              {post.category}
            </span>
            <time className="text-sm font-mono text-neutral-500 tracking-wider">
              {post.date}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-10">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-sm font-mono text-neutral-400">
                #{tag}
              </span>
            ))}
          </div>
        </header>

  
        <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/10 mb-16 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <img 
            src={post.cover} 
            alt={post.title}
            className={`w-full h-full ${post.imageClass || 'object-cover'}`}
          />
        </div>


        <div className="prose prose-invert prose-lg max-w-none prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {(post as any).content || ''}
        </ReactMarkdown>
        </div>
      </article>

      <footer className="w-full text-center py-12 text-white/10 text-xs font-mono relative z-10 border-t border-white/5 mt-auto">
        © 2026 Hao. Curated in the Glass Universe.
      </footer>
    </main>
  );
}