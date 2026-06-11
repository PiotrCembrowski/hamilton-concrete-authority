import { CITIES, SERVICES } from "@/data/site";

export const BASE_URL = "https://hamiltoncountyconcreterepair.com";

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

const cityMetaBySlug: Record<string, RouteMeta> = {
  "concrete-repair-westfield-in": {
    title: "Commercial Concrete Repair in Westfield, IN — HCCR",
    description:
      "Commercial concrete repair in Westfield, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Westfield property managers.",
    canonical: "/concrete-repair-westfield-in",
  },
  "concrete-repair-carmel-in": {
    title: "Commercial Concrete Repair in Carmel, IN — HCCR",
    description:
      "Commercial concrete repair in Carmel, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Carmel property managers.",
    canonical: "/concrete-repair-carmel-in",
  },
  "concrete-repair-fishers-in": {
    title: "Commercial Concrete Repair in Fishers, IN — HCCR",
    description:
      "Commercial concrete repair in Fishers, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Fishers property managers.",
    canonical: "/concrete-repair-fishers-in",
  },
  "concrete-repair-noblesville-in": {
    title: "Commercial Concrete Repair in Noblesville, IN — HCCR",
    description:
      "Commercial concrete repair in Noblesville, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Noblesville property managers.",
    canonical: "/concrete-repair-noblesville-in",
  },
  "concrete-repair-zionsville-in": {
    title: "Commercial Concrete Repair in Zionsville, IN — HCCR",
    description:
      "Commercial concrete repair in Zionsville, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Zionsville property managers.",
    canonical: "/concrete-repair-zionsville-in",
  },
};

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