import { SITE, SERVICES, CITIES, FAQS } from "@/data/site";
import { BASE_URL } from "@/lib/route-seo";
import type { FAQ } from "@/data/content-types";

export const ORG_ID = `${BASE_URL}/#business`;

// Phone/address are NOT real yet (see src/data/site.ts). We must not emit a
// placeholder token or a fake/partial address into structured data, so both are
// included conditionally. Replace {{REAL_PHONE}} and add a verified address, then
// LocalBusiness, Google Business Profile, and citations can go live.
const REAL_PHONE = SITE.phone.includes("{{") ? undefined : SITE.phone;

// Service Area Business pattern: areaServed instead of a public address.
// Carmel, Fishers, Noblesville, and Westfield are in Hamilton County; Zionsville
// is served but sits in Boone County, so it is listed as a served city without
// being claimed as part of the county.
const ORG = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  name: SITE.name,
  description:
    "Commercial concrete repair specialists serving property managers, HOAs, retail centers, and warehouses throughout Hamilton County, Indiana.",
  url: `${BASE_URL}/`,
  email: SITE.email,
  ...(REAL_PHONE ? { telephone: REAL_PHONE } : {}),
  priceRange: "$$",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Hamilton County, Indiana" },
    ...CITIES.map((c) => ({ "@type": "City", name: `${c.name}, IN` })),
  ],
  serviceType: SERVICES.map((s) => s.title),
  // NOTE: no `address` and no `aggregateRating` — none verifiable yet. Do not invent.
};

export const ORG_JSONLD = ORG;

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: `${BASE_URL}/`,
};

export function serviceSchema(s: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.description,
    provider: { "@type": "LocalBusiness", "@id": ORG_ID, name: SITE.name },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hamilton County, Indiana" },
      ...CITIES.map((c) => ({ "@type": "City", name: `${c.name}, IN` })),
    ],
    url: `${BASE_URL}/${s.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE_URL}${it.path}`,
    })),
  };
}

// Unique per page — pass the page's own FAQs and a stable @id (the page URL).
export function faqSchema(faqs: FAQ[], pagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}${pagePath}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(a: {
  path: string;
  title: string;
  metaDescription: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.metaDescription,
    dateModified: a.updated,
    mainEntityOfPage: `${BASE_URL}${a.path}`,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

// Homepage-only FAQ schema. The reusable site-wide FAQ block has been retired in
// favor of unique, per-page FAQs; the homepage keeps its own general set (FAQS),
// which now appears on the homepage only.
export const FAQ_JSONLD = faqSchema(FAQS, "/");
