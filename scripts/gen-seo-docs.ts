/**
 * Generates the Phase 9 markdown deliverables from the same typed content the app
 * renders, so the docs in /service-pages, /city-pages, and /blog-strategy never
 * drift from production. Run with: bun scripts/gen-seo-docs.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SERVICES } from "../src/data/services";
import { CITIES } from "../src/data/site";
import { CITIES_CONTENT } from "../src/data/cities";
import { ARTICLES } from "../src/data/resources";
import type {
  ContentSection,
  FAQ,
  ImageSlot,
  InternalLink,
} from "../src/data/content-types";

// Mirrors src/lib/route-seo.ts BASE_URL (the www serving host).
const BASE_URL = "https://www.hamiltoncountyconcreterepair.com";
const ROOT = join(import.meta.dir, "..");

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

function sectionsMd(sections: ContentSection[]): string {
  return sections
    .map((sec) => {
      const paras = sec.paragraphs.join("\n\n");
      const bullets = sec.bullets ? "\n\n" + sec.bullets.map((b) => `- ${b}`).join("\n") : "";
      return `## ${sec.h2}\n\n${paras}${bullets}`;
    })
    .join("\n\n");
}

function faqMd(faqs: FAQ[]): string {
  return faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");
}

function linksMd(links: InternalLink[]): string {
  return links.map((l) => `- [${l.anchor}](${l.href})`).join("\n");
}

function imagesMd(images: ImageSlot[]): string {
  return images
    .map(
      (img) =>
        `- **${img.position}** — \`${img.filename}\`\n  - Alt: "${img.alt}"\n  - Caption: ${img.caption}`,
    )
    .join("\n");
}

function jsonLd(obj: unknown): string {
  return "```json\n" + JSON.stringify(obj, null, 2) + "\n```";
}

function serviceSchema(s: { slug: string; title: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.description,
    provider: { "@type": "LocalBusiness", "@id": `${BASE_URL}/#business`, name: "Hamilton County Concrete Repair" },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hamilton County, Indiana" },
      ...CITIES.map((c) => ({ "@type": "City", name: `${c.name}, IN` })),
    ],
    url: `${BASE_URL}/${s.slug}`,
  };
}

function faqSchema(faqs: FAQ[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}${path}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function breadcrumbSchema(items: { name: string; path: string }[]) {
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

function write(dir: string, file: string, content: string) {
  const full = join(ROOT, dir);
  mkdirSync(full, { recursive: true });
  writeFileSync(join(full, file), content.trimStart() + "\n");
}

// ── Service pages ────────────────────────────────────────────────────────────
let serviceWords = 0;
for (const s of SERVICES) {
  const path = `/${s.slug}`;
  const body = sectionsMd(s.sections);
  const words = wordCount(s.description + " " + s.sections.flatMap((x) => x.paragraphs.concat(x.bullets ?? [])).join(" "));
  serviceWords += words;
  const md = `---
title: "${s.title}"
page_type: service
slug: "${s.slug}"
url: "${BASE_URL}${path}"
status: "${s.isNew ? "NEW — net-new commercial service page" : "Rewrite & expand of existing page"}"
batch: 2
last_updated: "2026-06-15"
primary_keyword: "${s.primaryKeyword}"
secondary_keywords:
${s.secondaryKeywords.map((k) => `  - "${k}"`).join("\n")}
meta_title: "${s.metaTitle}"   # ${s.metaTitle.length} chars
meta_description: "${s.metaDescription}"   # ${s.metaDescription.length} chars
h1: "${s.h1}"
word_count_estimate: ${words}
---

# ${s.h1}

> Hero subhead: ${s.description}

**What's included:** ${s.bullets.join(" · ")}

${body}

## Conversion CTAs

- **Primary:** Request a free on-site assessment — a specialist walks the property and delivers a **line-item proposal** within one business day.
- **Liability/ADA framing:** Document the condition now so a known defect becomes a dated, remediated record (premises-liability and ADA exposure).
- **Phone:** Call \`{{REAL_PHONE}}\` to talk through scope. (REQUIRES HUMAN REVIEW — real tracking number.)

## FAQ (unique to this page)

${faqMd(s.faqs)}

## Internal links (recommended, contextual, varied anchors)

${linksMd(s.internalLinks)}

**Related services:** ${s.related.map((r) => `[${r}](/${r})`).join(" · ")}

## Image placements (alt-text guidance)

${imagesMd(s.images)}

## JSON-LD — Service

${jsonLd(serviceSchema(s))}

## JSON-LD — FAQPage (unique)

${jsonLd(faqSchema(s.faqs, path))}

## JSON-LD — BreadcrumbList

${jsonLd(breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.title, path },
  ]))}
`;
  write("service-pages", `${s.slug}.md`, md);
}

console.log(`✓ service-pages: ${SERVICES.length} files (~${Math.round(serviceWords / SERVICES.length)} avg words/page)`);

// ── City pages ───────────────────────────────────────────────────────────────
let cityWords = 0;
for (const c of CITIES_CONTENT) {
  const body = sectionsMd(c.sections);
  const words = wordCount(
    c.intro + " " + c.sections.flatMap((x) => x.paragraphs.concat(x.bullets ?? [])).join(" ") + " " + c.faqs.flatMap((f) => [f.q, f.a]).join(" "),
  );
  cityWords += words;
  const md = `---
title: "Commercial Concrete Repair in ${c.name}, IN"
page_type: city
slug: "concrete-repair-${c.slug}-in"
url: "${BASE_URL}${c.path}"
county: "${c.county}"${c.nearby ? "\nnearby: true   # Boone County — framed as nearby, NOT part of Hamilton County" : ""}
status: "Rewrite of thin/doorway city page — now fully localized"
batch: 3
last_updated: "2026-06-15"
primary_keyword: "${c.primaryKeyword}"
secondary_keywords:
${c.secondaryKeywords.map((k) => `  - "${k}"`).join("\n")}
meta_title: "${c.metaTitle}"   # ${c.metaTitle.length} chars
meta_description: "${c.metaDescription}"   # ${c.metaDescription.length} chars
h1: "${c.h1}"
word_count_estimate: ${words}
---

# ${c.h1}

> Hero intro: ${c.intro}

**${c.name} commercial corridors covered:**
${c.localContext.map((l) => `- ${l}`).join("\n")}

${body}

## Project example

> **[PLACEHOLDER — REPLACE WITH REAL PROJECT]** — invented illustration; do not publish as fact until replaced with a real, verifiable ${c.name} project.

**${c.project.title}**

${c.project.summary}

- ${c.project.metrics.join("\n- ")}

## Conversion CTA (unique to ${c.name})

Request a free on-site assessment in ${c.name} — a specialist walks the property and delivers a line-item proposal within one business day. Call \`{{REAL_PHONE}}\` (REQUIRES HUMAN REVIEW — real number).

## FAQ (unique to ${c.name})

${faqMd(c.faqs)}

## Internal links (recommended, contextual)

${linksMd(c.internalLinks)}

## Image placements (alt-text guidance)

${imagesMd(c.images)}

## JSON-LD — FAQPage (unique)

${jsonLd(faqSchema(c.faqs, c.path))}

## JSON-LD — BreadcrumbList

${jsonLd(breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: c.name, path: c.path },
  ]))}
`;
  write("city-pages", `concrete-repair-${c.slug}-in.md`, md);
}
console.log(`✓ city-pages: ${CITIES_CONTENT.length} files (~${Math.round(cityWords / CITIES_CONTENT.length)} avg words/page)`);

// ── Blog / resource articles + 12-month calendar ─────────────────────────────
for (const a of ARTICLES) {
  const md = `---
title: "${a.title}"
page_type: resource_article
slug: "${a.slug}"
url: "${BASE_URL}${a.path}"
status: "Built — replaces empty Resource Center stub"
batch: 4
last_updated: "${a.updated}"
primary_keyword: "${a.primaryKeyword}"
secondary_keywords:
${a.secondaryKeywords.map((k) => `  - "${k}"`).join("\n")}
search_intent: "${a.searchIntent}"
meta_title: "${a.metaTitle}"   # ${a.metaTitle.length} chars
meta_description: "${a.metaDescription}"   # ${a.metaDescription.length} chars
h1: "${a.h1}"
---

# ${a.h1}

> ${a.excerpt}

${sectionsMd(a.sections)}

## FAQ (unique)

${faqMd(a.faqs)}

## CTA

${a.cta}

## Internal links (supports money pages)

${linksMd(a.internalLinks)}

## Image placement

${imagesMd(a.images)}

## JSON-LD — Article

${jsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.metaDescription,
    dateModified: a.updated,
    mainEntityOfPage: `${BASE_URL}${a.path}`,
    author: { "@type": "Organization", name: "Hamilton County Concrete Repair" },
    publisher: { "@type": "Organization", name: "Hamilton County Concrete Repair" },
  })}

## JSON-LD — FAQPage (unique)

${jsonLd(faqSchema(a.faqs, a.path))}
`;
  write("blog-strategy", `${a.slug}.md`, md);
}

// 5 net-new article ideas (months 8–12) — calendar-only, not yet built as pages.
const FUTURE_IDEAS = [
  {
    month: "September",
    title: "Minimizing Tenant Disruption During Commercial Concrete Repair",
    keyword: "minimize tenant disruption concrete repair",
    intent: "T4 informational — property managers protecting tenant relationships",
    supports: "/parking-lot-concrete-repair, /sidewalk-repair, /commercial-concrete-repair",
    outline: "Phasing and after-hours work; communication templates for tenants; safe routing/signage; cure-time scheduling; case for the premium of staying open.",
    cta: "Request a phased scope that keeps your property open.",
  },
  {
    month: "October",
    title: "Winterizing Commercial Concrete: De-Icing, Sealing & Salt-Damage Prevention",
    keyword: "protect commercial concrete winter salt damage",
    intent: "T4 informational, seasonal (pre-winter)",
    supports: "/concrete-spalling-repair, /sidewalk-repair, /resources/common-causes-of-concrete-failure",
    outline: "How chlorides and freeze-thaw damage concrete; sealing before winter; smarter de-icer choices; protecting young/scaling concrete; entrance focus.",
    cta: "Get vulnerable surfaces sealed before the first freeze.",
  },
  {
    month: "November",
    title: "Concrete in Capital Planning: Reserve Studies & Multi-Year Budgeting",
    keyword: "concrete capital planning reserve study",
    intent: "T3 commercial investigation — owners/boards budgeting next year",
    supports: "/concrete-replacement, /resources/commercial-concrete-repair-cost-guide",
    outline: "Concrete as a reserve line; condition data feeding reserve studies; phasing replacement across cycles; documentation for boards; deferring vs. funding.",
    cta: "Build next year's concrete budget on a real condition assessment.",
  },
  {
    month: "December",
    title: "Writing an RFP & Spec for Commercial Concrete Repair",
    keyword: "commercial concrete repair RFP spec",
    intent: "T4 informational — procurement-stage property managers",
    supports: "/commercial-concrete-repair, /concrete-replacement",
    outline: "What to specify (base prep, jointing, reinforcement, mix, cure); how to require line-item bids; comparing apples-to-apples; insurance/warranty clauses; red flags.",
    cta: "Have us scope the project so your RFP reflects what the job actually needs.",
  },
  {
    month: "March",
    title: "The Best Time of Year for Commercial Concrete Repair in Indiana",
    keyword: "best time of year concrete repair Indiana",
    intent: "T4 informational, seasonal (book spring/summer work)",
    supports: "/commercial-concrete-repair, /concrete-replacement, /parking-lot-concrete-repair",
    outline: "How Indiana weather constrains pours and cures; spring damage reveals; booking ahead of peak; what can be done year-round; cold-weather methods.",
    cta: "Book spring and summer concrete work before the calendar fills.",
  },
];

// 12-month calendar: 7 built articles slotted by seasonality + the 5 future ideas.
const calendarRows: { month: string; title: string; status: string; keyword: string; supports: string }[] = [
  { month: "January", title: ARTICLES[0].title, status: "Built", keyword: ARTICLES[0].primaryKeyword, supports: "all service pages (cost)" },
  { month: "February", title: ARTICLES[1].title, status: "Built", keyword: ARTICLES[1].primaryKeyword, supports: "/concrete-replacement, /commercial-concrete-repair" },
  { month: "March", title: FUTURE_IDEAS[4].title, status: "Planned", keyword: FUTURE_IDEAS[4].keyword, supports: FUTURE_IDEAS[4].supports },
  { month: "April", title: ARTICLES[3].title, status: "Built", keyword: ARTICLES[3].primaryKeyword, supports: "most service pages (diagnosis)" },
  { month: "May", title: ARTICLES[5].title, status: "Built", keyword: ARTICLES[5].primaryKeyword, supports: "/trip-hazard-removal, /sidewalk-repair, /ada-compliance-repairs" },
  { month: "June", title: ARTICLES[2].title, status: "Built", keyword: ARTICLES[2].primaryKeyword, supports: "/ada-compliance-repairs, /sidewalk-repair" },
  { month: "July", title: ARTICLES[6].title, status: "Built", keyword: ARTICLES[6].primaryKeyword, supports: "/sidewalk-repair, /trip-hazard-removal" },
  { month: "August", title: ARTICLES[4].title, status: "Built", keyword: ARTICLES[4].primaryKeyword, supports: "/warehouse-floor-repair, /concrete-joint-repair-sealing" },
  { month: "September", title: FUTURE_IDEAS[0].title, status: "Planned", keyword: FUTURE_IDEAS[0].keyword, supports: FUTURE_IDEAS[0].supports },
  { month: "October", title: FUTURE_IDEAS[1].title, status: "Planned", keyword: FUTURE_IDEAS[1].keyword, supports: FUTURE_IDEAS[1].supports },
  { month: "November", title: FUTURE_IDEAS[2].title, status: "Planned", keyword: FUTURE_IDEAS[2].keyword, supports: FUTURE_IDEAS[2].supports },
  { month: "December", title: FUTURE_IDEAS[3].title, status: "Planned", keyword: FUTURE_IDEAS[3].keyword, supports: FUTURE_IDEAS[3].supports },
];

const calendarMd = `---
title: "12-Month Commercial Concrete Content Calendar"
phase: "Phase 5 — Blog / Resource Strategy"
batch: 4
status: "7 built (Resource Center) + 5 planned"
last_updated: "2026-06-15"
note: "Rolling 12-month plan. Months are seasonal anchors, not fixed dates. Cost Guide is the priority/foundation asset; every article links DOWN to the money pages it supports."
---

# 12-Month Commercial Concrete Content Calendar

All articles are written for commercial decision-makers (property/facility managers, HOA/COA
boards, owners) and exist to earn links and pass equity to the service and city pages.

## Calendar

| Month | Article | Status | Primary keyword | Supports |
|---|---|---|---|---|
${calendarRows.map((r) => `| ${r.month} | ${r.title} | ${r.status} | ${r.keyword} | ${r.supports} |`).join("\n")}

## Built articles (live in the Resource Center)

${ARTICLES.map((a) => `### ${a.title}
- **URL:** ${a.path}
- **Primary keyword:** ${a.primaryKeyword}
- **Search intent:** ${a.searchIntent}
- **Outline:** ${a.sections.map((s) => s.h2).join(" → ")}
- **Internal links:** ${a.internalLinks.map((l) => l.href).join(", ")}
- **CTA:** ${a.cta}
`).join("\n")}

## Planned articles (months not covered by the 7 built)

${FUTURE_IDEAS.map((f) => `### ${f.month}: ${f.title}
- **Target keyword:** ${f.keyword}
- **Search intent:** ${f.intent}
- **Supports:** ${f.supports}
- **Outline:** ${f.outline}
- **CTA:** ${f.cta}
`).join("\n")}

## Sequencing rationale

- **Cost Guide first (January):** highest-intent, most linkable, and the asset every other piece
  references. It anchors the cluster.
- **Seasonality:** post-winter damage pieces (Causes of Failure, Inspection Checklist) land in
  spring when managers are walking properties; Winterizing lands in October; "Best Time of Year"
  in late winter to capture spring booking; Capital Planning / RFP in Q4 budget season.
- **Service support:** every article links down to the service and city pages it reinforces, so
  informational traffic and links compound into rankings for the transactional money pages.
`;
write("blog-strategy", "00-content-calendar.md", calendarMd);
console.log(`✓ blog-strategy: ${ARTICLES.length} article files + 12-month calendar`);
