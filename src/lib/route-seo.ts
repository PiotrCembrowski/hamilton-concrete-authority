import { CITIES, SERVICES } from "@/data/site";
import { CITIES_CONTENT } from "@/data/cities";
import { ARTICLES } from "@/data/resources";
import { INDUSTRY_PAGES } from "@/data/industries";

// Canonical/serving host. The site serves on www, so canonicals, og:url, the
// sitemap, robots, and schema must all use www to avoid a host-signal mismatch.
// VERIFY ON LIVE: confirm the apex (non-www) 301-redirects to this host.
export const BASE_URL = "https://www.hamiltoncountyconcreterepair.com";

type RouteMeta = {
  title: string;
  description: string;
  canonical: string;
};

const staticRouteMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Commercial Concrete Repair in Hamilton County, Indiana | HCCR",
    description:
      "Commercial concrete repair, sidewalk repair, loading dock repair, and ADA upgrades for property managers and commercial owners throughout Hamilton County, IN.",
    canonical: "/",
  },
  "/services": {
    title: "Commercial Concrete Repair Services — Hamilton County, IN",
    description:
      "Full list of commercial concrete repair services for Hamilton County, Indiana — sidewalks, curbs, loading docks, warehouse floors, ADA, and more.",
    canonical: "/services",
  },
  "/industries": {
    title: "Industries Served — Hamilton County Concrete Repair",
    description:
      "Commercial concrete repair for retail centers, warehouses, HOAs, office parks, medical, and municipal properties in Hamilton County, IN.",
    canonical: "/industries",
  },
  "/service-areas": {
    title: "Service Areas — Hamilton County, Indiana",
    description:
      "Commercial concrete repair across Hamilton County, IN — Westfield, Carmel, Fishers, Noblesville, and Zionsville.",
    canonical: "/service-areas",
  },
  "/resources": {
    title: "Resource Center — Commercial Concrete Repair Guides",
    description:
      "Guides and checklists for property managers — cost guide, repair vs replacement, ADA compliance, warehouse maintenance, and more.",
    canonical: "/resources",
  },
  "/case-studies": {
    title: "Case Studies — Commercial Concrete Repair Projects",
    description:
      "Real commercial concrete repair projects — retail, warehouse, HOA, office, and medical — completed throughout Hamilton County, IN.",
    canonical: "/case-studies",
  },
  "/contact": {
    title: "Request a Free Assessment — Hamilton County Concrete Repair",
    description:
      "Request a free on-site commercial concrete repair assessment in Hamilton County, IN. Response within one business day.",
    canonical: "/contact",
  },
};

// Derived from the rich city content (src/data/cities.ts) so metadata always
// matches the page. Keyed by full URL slug, e.g. "concrete-repair-carmel-in".
const cityMetaBySlug: Record<string, RouteMeta> = Object.fromEntries(
  CITIES_CONTENT.map((c) => [
    `concrete-repair-${c.slug}-in`,
    { title: c.metaTitle, description: c.metaDescription, canonical: c.path },
  ]),
);

// Property-type ("industry") pages, keyed by top-level slug.
const industryMetaBySlug: Record<string, RouteMeta> = Object.fromEntries(
  INDUSTRY_PAGES.map((i) => [
    i.slug,
    { title: i.metaTitle, description: i.metaDescription, canonical: `/${i.slug}` },
  ]),
);

export function getIndustryMetaBySlug(slug: string): RouteMeta | undefined {
  return industryMetaBySlug[slug];
}

export function isIndustrySlug(slug: string): boolean {
  return slug in industryMetaBySlug;
}

export const allSitePaths = [
  "/",
  "/services",
  "/industries",
  "/service-areas",
  "/resources",
  "/case-studies",
  "/contact",
  ...SERVICES.map((s) => `/${s.slug}`),
  ...CITIES.map((c) => `/concrete-repair-${c.slug}-in`),
  ...ARTICLES.map((a) => a.path),
  ...INDUSTRY_PAGES.map((i) => `/${i.slug}`),
];

export function getStaticRouteMeta(pathname: string): RouteMeta | undefined {
  return staticRouteMeta[pathname];
}

export function getServiceMetaBySlug(slug: string): RouteMeta | undefined {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return undefined;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `/${service.slug}`,
  };
}

export function getCityMetaBySlug(slug: string): RouteMeta | undefined {
  return cityMetaBySlug[slug];
}

export function isServiceSlug(slug: string): boolean {
  return SERVICES.some((s) => s.slug === slug);
}

export function isCitySlug(slug: string): boolean {
  return slug in cityMetaBySlug;
}