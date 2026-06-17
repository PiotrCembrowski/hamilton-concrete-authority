import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { BASE_URL } from "@/lib/route-seo";
import { SERVICES } from "@/data/services";
import { CITIES_CONTENT } from "@/data/cities";
import { INDUSTRY_PAGES } from "@/data/industries";
import { ARTICLES } from "@/data/resources";

type Entry = MetadataRoute.Sitemap[number];
type ChangeFreq = NonNullable<Entry["changeFrequency"]>;

// Root has no trailing slash (next.config trailingSlash is unset = false), matching the
// canonical tags. Every URL is built from the single canonical host (BASE_URL = www).
const abs = (path: string) => (path === "/" ? BASE_URL : `${BASE_URL}${path}`);

// Real lastModified from each source's mtime (the brief's "file mtime" source), so dates
// reflect actual edits instead of a spammy uniform new Date(). Falls back to a stable
// content date if fs is unavailable in some build context, so the build never breaks.
const FALLBACK = new Date("2026-06-16T00:00:00Z");
function fileModified(relPath: string): Date {
  try {
    return statSync(join(process.cwd(), relPath)).mtime;
  } catch {
    return FALLBACK;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Source-file mtimes drive the data-derived groups.
  const servicesMod = fileModified("src/data/services.ts");
  const citiesMod = fileModified("src/data/cities.ts");
  const industriesMod = fileModified("src/data/industries.ts");
  const resourcesMod = fileModified("src/data/resources.ts");

  const entry = (path: string, lastModified: Date, changeFrequency: ChangeFreq, priority: number): Entry => ({
    url: abs(path),
    lastModified,
    changeFrequency,
    priority,
  });

  // Static, indexable pages. (No API/admin/preview/stub routes exist to exclude.)
  const staticPages: Entry[] = [
    entry("/", fileModified("app/page.tsx"), "weekly", 1.0),
    entry("/services", servicesMod, "monthly", 0.8),
    entry("/service-areas", citiesMod, "monthly", 0.8),
    entry("/industries", industriesMod, "monthly", 0.7),
    entry("/resources", resourcesMod, "monthly", 0.6),
    entry("/contact", fileModified("app/contact/page.tsx"), "yearly", 0.4),
  ];

  // Money pages — highest non-home priority.
  const servicePages = SERVICES.map((s) => entry(`/${s.slug}`, servicesMod, "monthly", 0.9));
  const cityPages = CITIES_CONTENT.map((c) => entry(c.path, citiesMod, "monthly", 0.8));
  const industryPages = INDUSTRY_PAGES.map((i) => entry(`/${i.slug}`, industriesMod, "monthly", 0.7));

  // Informational. Articles carry their own authored `updated` date.
  const articlePages = ARTICLES.map((a) => entry(a.path, new Date(a.updated), "monthly", 0.6));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...industryPages,
    ...articlePages,
  ];
}
