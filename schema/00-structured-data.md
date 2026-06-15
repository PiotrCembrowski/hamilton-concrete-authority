---
title: "Structured Data (JSON-LD) — Implementation Reference"
phase: "Phase 7 — Structured Data"
batch: 4
status: "Implemented in src/components/site/Schema.tsx + documented here"
last_updated: "2026-06-15"
go_live_blocker: "LocalBusiness telephone/address — REQUIRES HUMAN REVIEW (real NAP). The live build conditionally OMITS telephone while it is the {{REAL_PHONE}} token, and emits NO address (SAB). Do not hand-add a fake/partial NAP."
validation: "Validate every type with Google Rich Results Test + schema.org validator after deploy."
---

# Structured Data Reference

All JSON-LD is emitted server-side from `src/components/site/Schema.tsx`. This file documents the
exact shapes and the production-ready versions (with tokens) for the items that depend on real NAP.

## Coverage map

| Type | Emitted on | Source function |
|---|---|---|
| `LocalBusiness` (SAB) | every page (root layout) | `ORG_JSONLD` |
| `WebSite` | every page (root layout) | `WEBSITE_JSONLD` |
| `Service` | each of the 17 service pages | `serviceSchema()` |
| `FAQPage` (unique) | homepage, each service, each city, each article | `faqSchema()` |
| `BreadcrumbList` | service, city, article pages | `breadcrumbSchema()` |
| `Article` | each of the 7 resource articles | `articleSchema()` |

**No `aggregateRating` or `review` anywhere** — none are verifiable. Do not invent them.

## 1. LocalBusiness — Service Area Business pattern (production target)

The live code OMITS `telephone` while it is a token and emits NO `address`. The block below is the
**go-live target**: drop in the real values for the tokens, then it can publish. Until then, GBP
and citations are blocked.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hamiltoncountyconcreterepair.com/#business",
  "name": "Hamilton County Concrete Repair",
  "description": "Commercial concrete repair specialists serving property managers, HOAs, retail centers, and warehouses throughout Hamilton County, Indiana.",
  "url": "https://www.hamiltoncountyconcreterepair.com/",
  "email": "info@hamiltoncountyconcreterepair.com",
  "telephone": "{{REAL_PHONE}}",
  "priceRange": "$$",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Hamilton County, Indiana" },
    { "@type": "City", "name": "Carmel, IN" },
    { "@type": "City", "name": "Fishers, IN" },
    { "@type": "City", "name": "Noblesville, IN" },
    { "@type": "City", "name": "Westfield, IN" },
    { "@type": "City", "name": "Zionsville, IN" }
  ],
  "serviceType": [
    "Commercial Concrete Repair", "Sidewalk Repair", "Curb Repair",
    "Loading Dock Repair", "Concrete Replacement", "Parking Lot Concrete Repair",
    "Trip Hazard Removal", "Warehouse Floor Repair", "ADA Compliance Repairs",
    "Concrete Crack Repair", "Joint Repair & Sealing", "Dumpster Pad Repair",
    "Concrete Slab Leveling", "Spalling & Surface Restoration",
    "Bollard Repair & Installation", "Concrete Ramp Repair",
    "Concrete Steps & Stoop Repair"
  ]
}
```

Notes:
- **No `address`.** SAB with no public storefront. If a field ever demands one, use
  `{{BUSINESS_ADDRESS}}` and revisit — a partial/region-only PostalAddress was removed because it
  was both incomplete and untrustworthy.
- `areaServed` keeps **Zionsville** as a served `City` but the AdministrativeArea is Hamilton
  County only — Zionsville is Boone County and is not claimed as part of the county.
- `@id` is the canonical www host and is referenced by every `Service.provider`.

## 2. Service (per service page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Loading Dock Repair",
  "serviceType": "Loading Dock Repair",
  "description": "Loading dock concrete repair for warehouses and distribution centers across Hamilton County...",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.hamiltoncountyconcreterepair.com/#business", "name": "Hamilton County Concrete Repair" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Hamilton County, Indiana" },
    { "@type": "City", "name": "Carmel, IN" },
    { "@type": "City", "name": "Fishers, IN" },
    { "@type": "City", "name": "Noblesville, IN" },
    { "@type": "City", "name": "Westfield, IN" },
    { "@type": "City", "name": "Zionsville, IN" }
  ],
  "url": "https://www.hamiltoncountyconcreterepair.com/loading-dock-repair"
}
```

## 3. FAQPage (unique per page)

Built from each page's own FAQ set — no shared sitewide markup. The visible FAQ content matches the
markup 1:1 (a Rich Results requirement). Each carries a page-scoped `@id`.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.hamiltoncountyconcreterepair.com/loading-dock-repair#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a dock door have to be out of service for a pit or approach rebuild?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on scope and mix design, but we plan every dock job around minimizing that window..." }
    }
  ]
}
```

## 4. BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hamiltoncountyconcreterepair.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.hamiltoncountyconcreterepair.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Loading Dock Repair", "item": "https://www.hamiltoncountyconcreterepair.com/loading-dock-repair" }
  ]
}
```

City breadcrumbs use Home → Service Areas → {City}; article breadcrumbs use Home → Resources →
{Article}.

## 5. Article (per resource article)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Commercial Concrete Repair Cost Guide",
  "description": "What drives commercial concrete repair cost...",
  "dateModified": "2026-06-15",
  "mainEntityOfPage": "https://www.hamiltoncountyconcreterepair.com/resources/commercial-concrete-repair-cost-guide",
  "author": { "@type": "Organization", "name": "Hamilton County Concrete Repair" },
  "publisher": { "@type": "Organization", "name": "Hamilton County Concrete Repair" }
}
```

## 6. Pre-publish checklist

- [ ] Replace `{{REAL_PHONE}}` (and add a verified address only if you choose to expose one).
- [ ] Re-run Rich Results Test on one URL of each type (home, a service, a city, an article).
- [ ] Confirm all canonicals/`@id`/`url` use the **www** host (already set via `BASE_URL`).
- [ ] Confirm visible FAQ text matches FAQPage markup on each page (it is generated from one source).
- [ ] Do NOT add `aggregateRating`/`review` until real, verifiable reviews exist.
