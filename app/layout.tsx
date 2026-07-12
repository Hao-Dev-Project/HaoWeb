import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao 個人網頁",
  description: "Hao 的個人作品集與技術部落格。熱愛機器人、邊緣運算與機電整合開發。",
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
