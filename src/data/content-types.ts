// Shared content types for the SEO content hub.
// Authored once here, rendered by the app templates AND exported to the
// /service-pages, /city-pages, and /blog-strategy markdown deliverables by
// scripts/gen-seo-docs.ts. Single source of truth — no divergence.

export type FAQ = { q: string; a: string };

export type ContentSection = {
  h2: string;
  /** Body paragraphs. Plain prose strings; rendered as <p>. */
  paragraphs: string[];
  /** Optional bulleted list rendered after the paragraphs. */
  bullets?: string[];
};

/**
 * A planned image slot. There are no real photos yet, so the app renders an
 * on-brand, accessible placeholder carrying this guidance; a developer swaps in
 * a next/image with the documented alt text once a real asset exists.
 */
export type ImageSlot = {
  /** Where on the page this belongs, e.g. "hero", "before/after", "inline". */
  position: string;
  /** Suggested production filename, e.g. "loading-dock-repair-fishers-before.jpg". */
  filename: string;
  /** Geo/service-specific alt text to use on the real image. */
  alt: string;
  /** Short visible caption. */
  caption: string;
};

export type InternalLink = {
  /** Destination path, e.g. "/sidewalk-repair". */
  href: string;
  /** Recommended, varied (non-exact-match) anchor text. */
  anchor: string;
};

export type RichService = {
  slug: string;
  title: string;
  /** One-line summary used in card grids and related-service blocks. */
  short: string;
  /** Hero subhead / lead. */
  description: string;
  /** "What's included" hero checklist. */
  bullets: string[];
  metaTitle: string; // < 60 chars
  metaDescription: string; // < 155 chars
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Long-form body, 1,000–1,500 words across these sections. */
  sections: ContentSection[];
  /** Unique to this page — no question reused on any other page. */
  faqs: FAQ[];
  /** Contextual internal links with recommended anchors. */
  internalLinks: InternalLink[];
  /** Related service slugs surfaced at the foot of the page. */
  related: string[];
  images: ImageSlot[];
  /** Marks net-new pages (vs. rewrites of pre-existing URLs). */
  isNew?: boolean;
};

export type CityProject = {
  title: string;
  /** Always invented until real data exists — rendered with a visible PLACEHOLDER tag. */
  summary: string;
  metrics: string[];
};

export type RichCity = {
  slug: string; // city slug, e.g. "carmel"
  name: string;
  /** Full URL path, e.g. "/concrete-repair-carmel-in". */
  path: string;
  /** True for Zionsville — framed as "nearby", not part of Hamilton County. */
  nearby?: boolean;
  county: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Unique opener — nothing word-swappable to another city. */
  intro: string;
  sections: ContentSection[];
  /** Genuine local commercial corridors / districts / roads referenced. */
  localContext: string[];
  faqs: FAQ[];
  internalLinks: InternalLink[];
  project: CityProject;
  images: ImageSlot[];
};

export type RichArticle = {
  slug: string; // e.g. "commercial-concrete-repair-cost-guide"
  path: string; // "/resources/commercial-concrete-repair-cost-guide"
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  /** Short deck under the H1. */
  excerpt: string;
  sections: ContentSection[];
  faqs: FAQ[];
  internalLinks: InternalLink[];
  /** CTA line tailored to the article. */
  cta: string;
  images: ImageSlot[];
  /** ISO date for article schema / front-matter. */
  updated: string;
};

/**
 * Property-type ("industry") page — frames concrete repair around an asset class
 * (HOA, retail center, medical, office park, multifamily) and links DOWN to the
 * service pages. Targets "{property type} concrete repair {area}" intent without
 * competing with any service page's primary keyword.
 */
export type RichIndustry = {
  slug: string; // top-level slug, e.g. "hoa-concrete-repair"
  title: string;
  /** The asset class in prose, e.g. "HOA & COA communities". */
  industryName: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  sections: ContentSection[];
  faqs: FAQ[];
  internalLinks: InternalLink[];
  /** Service slugs most relevant to this asset class. */
  relatedServices: string[];
  images: ImageSlot[];
};
