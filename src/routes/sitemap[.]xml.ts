import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const paths = [
  "/",
  "/services",
  "/industries",
  "/service-areas",
  "/resources",
  "/case-studies",
  "/contact",
  "/commercial-concrete-repair",
  "/sidewalk-repair",
  "/curb-repair",
  "/loading-dock-repair",
  "/concrete-replacement",
  "/parking-lot-concrete-repair",
  "/trip-hazard-removal",
  "/warehouse-floor-repair",
  "/ada-compliance-repairs",
  "/concrete-repair-westfield-in",
  "/concrete-repair-carmel-in",
  "/concrete-repair-fishers-in",
  "/concrete-repair-noblesville-in",
  "/concrete-repair-zionsville-in",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
