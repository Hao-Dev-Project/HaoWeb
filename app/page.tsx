import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import postsData from "@/app/data/posts.json";

// Find a blog post by its cover image (unique per post), so links survive reordering.
function postHref(cover: string) {
  const idx = postsData.findIndex((p) => p.cover === cover);
  return idx >= 0 ? `/blog/${idx}` : "/blog";
}

const projects = [
  {
    title: "智慧三角警示立牌",
    award: "第 65 屆科展、115 全國專題",
    description:
      "駕駛不用下車，按下遙控器，立牌就會自己走到車後定位並避開障礙物。第二代加上即時影像回傳，在車內用手機就能看到車後路況。",
    tags: ["LabVIEW", "Raspberry Pi 4", "Android Studio", "FFmpeg"],
    cover: "/115.jpg",
    imageClass: "object-cover",
  },
  {
    title: "多功能醫療輔助機器人",
    award: "114 全國專題複賽佳作",
    description: "自主導航送藥、遠端監控和避障，希望分擔護理人員重複性高的工作。",
    tags: ["LabVIEW", "TCP/UDP", "陀螺儀"],
    cover: "/114mr.jpg",
    imageClass: "object-contain bg-cream-200",
  },
  {
    title: "智慧遠端監控養殖系統",
    award: "2025 IEYI 臺灣選拔賽銀牌",
    description: "監測魚塭水質與水位，數值異常時自動換水，並用 LINE 即時通知。",
    tags: ["IoT", "感測器", "LINE 通知"],
    cover: "/2025ieyi.png",
    imageClass: "object-contain bg-cream-200",
  },
];

type Contest = {
  date: string;
  name: string;
  detail?: string;
  award: string;
  cover: string;
};

const contests: Contest[] = [
  { date: "2026.Feb", name: "115 全國專題實作及創意競賽（電機電子群）", detail: "複賽・專題組", award: "佳作", cover: "/115.jpg" },
  { date: "2025.Dec", name: "114 全國高級中等學校工業類技藝競賽", detail: "機器人職種", award: "優勝五", cover: "/114.jpg" },
  { date: "2025.Apr", name: "第 65 屆第一分區科學展覽會", award: "佳作", cover: "/65.png" },
  { date: "2025.Mar", name: "第 55 屆分區技能競賽", detail: "自主機器人職種", award: "佳作（第六名）", cover: "/55.jpeg" },
  { date: "2025.Feb", name: "114 全國專題實作及創意競賽（電機電子群）", detail: "複賽・專題組", award: "佳作", cover: "/114mr.jpg" },
  { date: "2025.Feb", name: "IEYI 世界青少年發明展臺灣選拔賽", detail: "農糧技術類", award: "銀牌", cover: "/2025ieyi.png" },
  { date: "2024.Mar", name: "第 54 屆分區技能競賽", detail: "機器人職種", award: "佳作（第八名）", cover: "/54.png" },
];

function SectionTitle({ en, zh }: { en: string; zh: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-text mb-2">{en}</p>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-text">{zh}</h2>
      <div className="warm-divider mt-4"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-100 text-warm-text font-sans flex flex-col relative overflow-x-clip">
      {/* Subtle warm decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[35rem] h-[35rem] bg-amber-accent/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-[45%] -left-[10%] w-[30rem] h-[30rem] bg-terracotta/8 rounded-full filter blur-[100px]"></div>
      </div>

      <Navbar />

      {/* Hero */}
      <section className="min-h-[calc(100svh-5rem)] flex flex-col items-center justify-between w-full px-6 md:px-8 relative z-10 pt-8 pb-10 md:pt-12">
        <div className="h-0"></div>

        <div className="max-w-[60rem] w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 my-auto">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-serif font-black tracking-tight text-warm-text leading-none min-h-[1.1em] flex items-center justify-center md:justify-start">
              <Typewriter text="Hao" />
            </h1>
            <p className="mt-5 text-warm-sub leading-relaxed max-w-md mx-auto md:mx-0">
              這裡記錄我做過的專題、參加過的比賽，以及過程中學到的東西。
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-warm-text text-cream-50 text-sm font-semibold hover:bg-terracotta-text transition-colors duration-300"
              >
                看作品
              </a>
              <Link
                href="/blog"
                className="px-6 py-3 rounded-full border border-cream-400 bg-white/60 text-warm-text text-sm font-semibold hover:bg-white hover:border-warm-muted transition-colors duration-300"
              >
                讀文章
              </Link>
            </div>

          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-accent/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cream-300 bg-cream-200 shadow-lg transition-transform duration-500 group-hover:scale-105">
                <Image src="/me.png" alt="Hao 的照片" fill priority sizes="(min-width: 768px) 288px, 208px" className="object-cover scale-110" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2 text-warm-muted animate-bounce pointer-events-none select-none" aria-hidden="true">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto w-full px-6 md:px-8 py-12 md:py-16 relative z-10 scroll-mt-20">
        <SectionTitle en="Projects" zh="作品" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Link
              key={p.title}
              href={postHref(p.cover)}
              className={`group warm-card warm-card-hover overflow-hidden flex flex-col ${
                i === 0 ? "md:col-span-2 md:flex-row" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden bg-cream-200 ${
                  i === 0 ? "aspect-[16/10] md:aspect-auto md:w-3/5 md:min-h-[22rem]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 600px, 100vw" : "(min-width: 768px) 480px, 100vw"}
                  className={`${p.imageClass} group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
              </div>
              <div className={`p-6 md:p-8 flex flex-col ${i === 0 ? "md:w-2/5 md:justify-center" : "flex-1"}`}>
                <h3 className={`font-serif font-bold text-warm-text mb-3 group-hover:text-amber-text transition-colors ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                  {p.title}
                </h3>
                <p className="text-sm text-warm-sub leading-relaxed mb-3">{p.description}</p>
                <p className="text-xs text-warm-muted mb-5">{p.award}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-cream-200 text-warm-sub border border-cream-300">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 text-sm font-semibold text-amber-text group-hover:text-terracotta-text transition-colors">
                  看開發過程 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contest timeline */}
      <section id="contest" className="max-w-5xl mx-auto w-full px-6 md:px-8 py-12 md:py-16 relative z-10 scroll-mt-20">
        <SectionTitle en="Contest" zh="比賽經歷" />

        <div className="warm-card p-4 md:p-6">
          <ul className="divide-y divide-cream-300">
            {contests.map((c) => (
              <li key={c.name}>
                <Link
                  href={postHref(c.cover)}
                  className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-3 md:px-4 py-4 rounded-xl hover:bg-white/80 transition-colors duration-300"
                >
                  <time className="text-xs font-medium text-warm-muted tracking-wider sm:w-20 shrink-0">{c.date}</time>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-warm-text group-hover:text-amber-text transition-colors">{c.name}</h3>
                    {c.detail && <p className="text-sm text-warm-sub mt-0.5">{c.detail}</p>}
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-cream-200 text-warm-sub border-cream-300"
                    >
                      {c.award}
                    </span>
                    <span className="text-warm-muted group-hover:text-amber-text group-hover:translate-x-0.5 transition-all" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex-1"></div>
      <Footer />
    </main>
  );
}
