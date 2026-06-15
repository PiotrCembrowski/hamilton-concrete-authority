---
title: "Internal Linking Architecture & Silo Structure"
phase: "Phase 6 — Internal Linking Architecture"
batch: 4
status: "Implemented in templates + documented here"
last_updated: "2026-06-15"
implemented_in:
  - "src/components/site/ServicePageTemplate.tsx (service → cities, related services, contextual resource links)"
  - "src/components/site/CityPageTemplate.tsx (city → services, contextual links)"
  - "src/components/site/ArticlePageTemplate.tsx (article → service/city money pages)"
  - "src/data/services.ts, cities.ts, resources.ts (per-page internalLinks with varied anchors)"
  - "src/components/site/Footer.tsx, Header.tsx (sitewide nav)"
---

# Internal Linking Architecture

## 1. Silo model

Three content tiers, with equity flowing **down** to the transactional money pages and **across**
between services and the cities where they're delivered.

```
                         Home (/)
                            │
        ┌───────────────────┼────────────────────┐
        ▼                   ▼                     ▼
  /services (hub)    /service-areas (hub)    /resources (hub)
        │                   │                     │
        ▼                   ▼                     ▼
  17 SERVICE pages  ◄──►  5 CITY pages       7 ARTICLE pages
        ▲                   ▲                     │
        └───────────────────┴─────────────────────┘
              articles link DOWN to services & cities
```

- **/commercial-concrete-repair** is the service **category hub**: it links down to every specific
  service and is the only page targeting the head term. It must never compete with the
  defect-specific pages (crack, spalling, joint) for their primaries.
- **/services**, **/service-areas**, **/resources** are listing hubs (parent nodes) that link to
  every child and are linked from the global header/footer.
- Money pages = the 17 service pages + 5 city pages. Everything is engineered to push relevance
  and equity to them.

## 2. Parent → child relationships

| Parent | Children | Mechanism |
|---|---|---|
| `/services` | 17 service pages | Card grid (existing) |
| `/service-areas` | 5 city pages | Card grid (existing) |
| `/resources` | 7 article pages | Card grid (now links to real articles, not `/contact`) |
| `/commercial-concrete-repair` (hub) | specific services | "What we repair" in-body list + related grid |
| Footer | top services, all cities, hubs | Sitewide |

## 3. Cross-links (the part that builds topical authority)

| From | To | Where | Example anchor |
|---|---|---|---|
| Service page | the 5 city pages | "Across Hamilton County" chips | "Carmel, IN" |
| Service page | 3–4 related services | Related grid | service title |
| Service page | 1–2 supporting articles | In-body "Related coverage" callout | "when repair beats replacement" |
| City page | relevant services | "Popular in {city}" callout + full services grid | "loading dock concrete repair" |
| City page | 1 supporting article | "Popular in {city}" callout | "warehouse floor maintenance planning" |
| Article | 3–5 money pages | "Keep reading" sidebar + in-body | "leveling as a lower-cost alternative" |
| Article | sibling article | Internal links | "the repair-versus-replacement decision" |

Each page's links live in its data (`internalLinks` array) with **pre-written, varied anchor
text** — see §5.

## 4. Cannibalization-safe cross-linking rules

These mirror `/seo-audit/url-action-map.md` and must hold:

1. Sidewalk ↔ Trip-Hazard ↔ ADA interlink with **descriptive** anchors that respect each page's
   distinct intent (section repair vs. liability grinding vs. code compliance) — never identical
   anchors pointing three ways.
2. Parking-Lot links to Dumpster-Pad (and vice-versa) but neither uses the other's primary as
   anchor.
3. Warehouse-Floor ↔ Joint-Repair cross-link; warehouse owns "forklift/interior slab," joint page
   owns "control/expansion joint sealing."
4. The hub (`/commercial-concrete-repair`) links down with specific anchors ("commercial sidewalk
   repair"), never absorbing a child's primary.

## 5. Anchor-text policy

- **Varied and descriptive**, not repeated exact-match. Each page targets one primary keyword but
  is linked to with several *different* anchors from different sources (e.g., `/sidewalk-repair`
  is reached via "commercial sidewalk repair," "panel replacement for failed sidewalk sections,"
  "sidewalk and panel repair," "retail sidewalk panel repair").
- **No over-optimization**: avoid linking to a page from 17 places with the identical exact-match
  anchor — that reads as manipulation. The per-page `internalLinks` anchors are deliberately
  phrased as natural reading cues.
- **Commercial framing** in anchors where natural ("liability," "ADA," "line-item," "capital").

### Representative anchor sets (already in the data)

| Target page | Sample varied anchors used across the site |
|---|---|
| `/concrete-replacement` | "full removal and replacement", "what proper replacement involves", "replacement when a slab is past lifting" |
| `/trip-hazard-removal` | "grinding a single trip hazard flush", "the lowest-cost liability fix", "remediating the trip hazards you find" |
| `/ada-compliance-repairs` | "ADA access correction", "ADA slope and transition requirements", "correcting ADA deficiencies" |
| `/concrete-slab-leveling` | "leveling as a lower-cost alternative", "lifting a settled stoop", "lifting settled new-construction slabs" |

## 6. Priority link paths to build authority fast

1. **Cost Guide → every service** (it's the most linkable asset; ensure each service page links
   *to* it and it links *to* each relevant service). Already wired both directions.
2. **City → highest-value local service** (e.g., Fishers → loading dock / warehouse floor; Carmel
   → sidewalk / ADA). Already reflected in each city's `internalLinks`.
3. **Hub → all services** so the category page consolidates and distributes topical relevance.

## 7. Gaps closed vs. the audit

- Resources previously linked **only** to `/contact`; they now link to the services they support.
- City pages previously linked to services only via a generic grid; they now add contextual,
  varied-anchor links to the most relevant services and a supporting article.
- Services now carry in-body contextual links (not just template grids), including to resources.
