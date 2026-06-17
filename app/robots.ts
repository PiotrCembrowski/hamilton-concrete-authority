import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/route-seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // This app has no public API, admin, preview, or stub routes to disallow, and
      // /_next/ is intentionally NOT blocked — Google needs those assets to render pages.
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
