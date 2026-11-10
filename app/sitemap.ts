import type { MetadataRoute } from "next";
import postsData from "@/app/data/posts.json";

const BASE = "https://haoge.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: "monthly", priority: 0.8 },
    ...postsData.map((_, i) => ({
      url: `${BASE}/blog/${i}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
