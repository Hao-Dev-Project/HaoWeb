import type { Metadata } from "next";
import "./globals.css";

const description = "Hao 的個人網站，記錄機器人專題、比賽經歷和學習筆記。";

export const metadata: Metadata = {
  metadataBase: new URL("https://haoge.dev"),
  title: "Hao 個人網頁",
  description,
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "Hao 個人網頁",
    title: "Hao 個人網頁",
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
        {children}
      </body>
    </html>
  );
}
