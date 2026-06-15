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
