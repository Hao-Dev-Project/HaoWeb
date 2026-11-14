import type { Metadata } from "next";
import "./globals.css";

const description = "Hao（haoge）的個人網站，記錄機器人專題、比賽經歷和學習筆記。";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "haoge.dev",
      alternateName: ["haoge", "Hao 個人網頁"],
      url: "https://haoge.dev",
    },
    {
      "@type": "Person",
      name: "Hao",
      alternateName: "haoge",
      url: "https://haoge.dev",
      image: "https://haoge.dev/og.png",
      sameAs: ["https://github.com/Hao-Dev-Project"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://haoge.dev"),
  title: "Hao｜haoge.dev",
  description,
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "haoge.dev",
    title: "Hao｜haoge.dev",
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hao 的 Q 版頭貼" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className="antialiased relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
