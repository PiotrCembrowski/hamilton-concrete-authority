import type { MetadataRoute } from "next";
import { BASE_URL, allSitePaths } from "@/lib/route-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return allSitePaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}