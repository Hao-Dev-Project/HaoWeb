export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full relative z-10 border-t border-cream-300 bg-cream-50/60 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left">
        <div className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-warm-text">聯絡我</h2>
          <p className="text-sm text-warm-sub leading-relaxed max-w-md">
            想交流比賽經驗、討論技術，或有合作機會，都歡迎寫信給我，我會盡快回覆。
          </p>
        </div>
        <a
          href="mailto:hi@haoge.dev"
          className="group inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-cream-300 rounded-full text-warm-text hover:bg-terracotta-text hover:text-white hover:border-terracotta-text hover:shadow-md transition-all duration-300 select-none"
        >
          <svg className="w-4 h-4 text-warm-sub group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">hi@haoge.dev</span>
        </a>
      </div>
      <div className="text-center pb-8 text-warm-muted text-xs">© 2026 Hao. All Rights Reserved.</div>
    </footer>
  );
}
