import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文章｜haoge.dev",
  alternates: { canonical: "/blog" },
  description: "Hao 的比賽、專題和技術筆記。",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
