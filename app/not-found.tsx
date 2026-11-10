import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream-100 text-warm-text font-sans flex flex-col relative overflow-x-clip">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-text mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">找不到這個頁面</h1>
        <p className="text-warm-sub mb-8 max-w-sm leading-relaxed">
          這個網址可能打錯了，或是頁面已經搬走了。
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="px-6 py-3 rounded-full bg-warm-text text-cream-50 text-sm font-semibold hover:bg-terracotta-text transition-colors duration-300">
            回首頁
          </Link>
          <Link href="/blog" className="px-6 py-3 rounded-full border border-cream-400 bg-white/60 text-warm-text text-sm font-semibold hover:bg-white transition-colors duration-300">
            看文章
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
