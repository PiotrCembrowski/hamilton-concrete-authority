---
title: "Technical SEO — Audit, Fixes Applied, and Backlog"
phase: "Phase 8 — Technical SEO Recommendations"
batch: 4
status: "High-impact items fixed in code; remainder prioritized below"
last_updated: "2026-06-15"
verify_on_live:
  - "Apex (non-www) 301-redirects to www (redirect DIRECTION)."
  - "Rich Results Test passes for LocalBusiness, Service, FAQPage, BreadcrumbList, Article."
  - "Deployed H1s match the repo (every template renders exactly one H1)."
---

# Technical SEO

Prioritized by **impact × effort**. Items marked ✅ are fixed in this codebase; ⏳ are backlog.

## Priority matrix

| Item | Impact | Effort | Status |
|---|---|---|---|
| Canonical host mismatch (apex → www) | High | XS | ✅ Fixed |
| Fake `555` phone propagation (incl. schema) | High | XS | ✅ Tokenized |
| Reused FAQs sitewide → unique per page | High | M | ✅ Fixed |
| Doorway city pages → unique local pages | High | L | ✅ Fixed |
| FAQPage schema only on homepage → per page | Med | S | ✅ Fixed |
| LocalBusiness SAB pattern (drop fake address) | Med | S | ✅ Fixed |
| Resource articles + sitemap inclusion | Med | M | ✅ Built |
| Real NAP → LocalBusiness/GBP/citations | High | — | ⏳ Blocked (human) |
| Images via `next/image` (CWV + image search) | Med | M | ⏳ Backlog |
| Sitemap priority/lastmod tuning | Low | S | ⏳ Backlog |
| Redirect-direction verification on live | High | XS | ⏳ Verify |

## 1. Canonical host mismatch — ✅ fixed (was high priority)

`BASE_URL` in `src/lib/route-seo.ts` was the **non-www apex**; it drives every canonical, `og:url`,
the sitemap, robots' sitemap line, and all schema `@id`/`url`. Changed to
`https://www.hamiltoncountyconcreterepair.com` (the serving host).

**⏳ VERIFY ON LIVE:** confirm the apex **301-redirects to www** (not the reverse, and not a 200 on
both). Canonical host and redirect target must agree, or the fix is only half-applied.

## 2. Fake phone — ✅ tokenized

`(317) 555-0214` (reserved 555 exchange) flowed from `SITE.phone` into header, footer, hero, both
templates, contact page, and `LocalBusiness.telephone`. Now `{{REAL_PHONE}}` at the single source
(`src/data/site.ts`); schema **omits** `telephone` while it's a token rather than publishing a
placeholder. Find-and-replace `{{REAL_PHONE}}` once a real tracking number exists. **REQUIRES HUMAN
REVIEW.**

## 3. JSON-LD validity — ✅ implemented, ⏳ verify on live

Per-page `Service`, `FAQPage`, `BreadcrumbList`, `Article`, plus `LocalBusiness` + `WebSite`
sitewide. See `/schema/00-structured-data.md`. After deploy, run the **Rich Results Test** on one
URL per type. Visible FAQ text is generated from the same source as the markup, so they match (a
Rich Results requirement).

## 4. H1 / hero — ✅ confirmed in code, ⏳ verify deployed

Every template renders exactly one `<h1>` (`ServicePageTemplate`, `CityPageTemplate`,
`ArticlePageTemplate`, and each static page). The brief's note that "the sidewalk page opens
without an H1" does **not** reproduce in the current repo — if the live page lacks one, the deploy
is stale; redeploy. Heading order is H1 → H2 (→ H3 in FAQ accordions) with no skips.

## 5. Duplicate content — ✅ resolved

- FAQs: were 6 identical questions on 10 pages. Now **unique per page** (services, cities, articles
  each have their own set); the homepage keeps a single general set that appears only there.
- City pages: were word-swap doorway templates. Now fully unique local content (see
  `/city-pages/*`). Nothing is swappable between cities.

## 6. Core Web Vitals & images — ⏳ backlog

- **No images exist yet.** Placeholders render via `FigurePlaceholder` (accessible, no broken
  `<img>`), each carrying the production filename + alt text. When real photos arrive, swap each for
  `next/image` with explicit `width`/`height`, modern format (AVIF/WebP), and default lazy loading.
  Image guidance/alt-text is documented per page in `/service-pages`, `/city-pages`, `/blog-strategy`.
- Pages are statically generated (SSG) with a small shared JS bundle (~102 KB first-load). Entrance
  animations are the main client-side cost; consider `prefers-reduced-motion` and trimming if Lab
  CWV shows INP/LCP pressure.
- After adding images, re-check LCP (hero images), CLS (reserve dimensions), and INP.

## 7. XML sitemap & robots — ✅ updated / fine

- `app/sitemap.ts` now includes the 7 article URLs (via `allSitePaths`), plus all services, cities,
  and static pages — **41 URLs**, all on www.
- ⏳ Optional: differentiate `priority`/`changeFrequency` by template (money pages > articles >
  utility) and add real `lastModified` per page. Low impact.
- `app/robots.ts` allows all and points to the (now www) sitemap — correct.

## 8. Indexability & mobile — ✅ fine

- All content pages are statically rendered and indexable; no accidental `noindex`.
- Layout is responsive (Tailwind) with a sticky mobile CTA; tap targets and viewport are handled.
- Fonts via `next/font` (self-hosted, no layout shift from font swap).

## 9. E-E-A-T / trust (cross-ref) — ⏳ human

Not strictly "technical," but blocks ranking ceiling: real NAP, a Google Business Profile, genuine
reviews, named credentials/insurance, and real project photos. All **REQUIRES HUMAN REVIEW**; none
were fabricated. Once NAP exists, LocalBusiness can publish and citation building can begin.

## 10. Build / deploy notes

- `BASE_URL` is the single host source — keep canonical, sitemap, robots, and schema in sync
  through it.
- Sandbox-only: the `motion` animation package 403s from this environment's private npm cache, so a
  **gitignored** local stub under `node_modules/motion` was used to run `next build` here. It is not
  committed and has no effect on production, where `motion@12.40.0` installs normally. The build is
  otherwise green: **41 static pages**.
