import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao — Portfolio",
  description: "A student from KLCIVS. 熱愛開發新技術。",
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
