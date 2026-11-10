import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao 個人網頁",
  description: "Hao 的個人網站，記錄機器人專題、比賽經歷和學習筆記。",
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
