---
title: "SEO Audit — Hamilton County Concrete Repair (HCCR)"
phase: "Phase 1 — Analyze the Existing Website"
batch: 1
status: "Draft for human review"
last_updated: "2026-06-15"
site: "https://www.hamiltoncountyconcreterepair.com/"
serving_host: "www (apex vs www redirect direction REQUIRES HUMAN REVIEW — see Technical SEO)"
audience: "Commercial property/facility decision-makers (B2B). NOT homeowners."
geography: "Hamilton County, INDIANA (Indianapolis metro). NOT Ohio."
basis: "Source of truth = the Next.js codebase in this repo (the deployed app). Live URLs returned HTTP 403 to non-browser clients (WAF), so live-only checks are flagged for human verification."
related:
  - "/seo-audit/url-action-map.md"
  - "/keyword-research/keyword-map.md"
---

# SEO Audit — Hamilton County Concrete Repair

## 1. Scope & method

This audit is grounded in the actual application code in this repository, which is the
deployed site. Content is data-driven: nearly all copy originates in `src/data/site.ts`
and is rendered through a small set of templates (`ServicePageTemplate`,
`CityPageTemplate`, `Sections.tsx`). That means a content problem in one constant
propagates to many URLs — which is the central theme of this audit.

Live-page checks that cannot be confirmed from code (rendered `<head>` canonical tag,
301 redirect direction, Rich Results validation) are explicitly tagged **VERIFY ON LIVE**.
The public URLs returned `HTTP 403` to automated fetches (bot protection), so a human on a
normal browser/Search Console should confirm those few items.

## 2. Site inventory

Every indexable URL, the template that renders it, and an estimate of how much *unique*
on-page text it actually contains (excluding boilerplate repeated on other URLs).

| URL | Type | Rendered by | Unique on-page words (est.) | Notes |
|---|---|---|---|---|
| `/` | Home | `Hero` + `Sections.tsx` | ~250 | Strong. Emits the only `FAQPage` schema on the site. |
| `/services` | Service hub | `app/services/page.tsx` | ~60 | Card grid of the 9 services. Good hub skeleton. |
| `/industries` | Listing | `app/industries/page.tsx` | ~120 | 8 industry blurbs. Thin but on-brand. |
| `/service-areas` | City hub | `app/service-areas/page.tsx` | ~60 | Links the 5 city pages. |
| `/resources` | Resource index | `app/resources/page.tsx` | ~40 | **7 guide cards, all linking to `/contact`. No article pages exist.** |
| `/case-studies` | Proof | `Sections.tsx` (`CASE_STUDIES`) | ~220 | 5 generic studies, round-number metrics, no city ties, no placeholder tags. |
| `/contact` | Conversion | `app/contact/page.tsx` | ~70 | Estimate form + NAP block. |
| `/commercial-concrete-repair` | Service | `ServicePageTemplate` | ~55 | Unique text = `description` + 4 bullets only. |
| `/sidewalk-repair` | Service | `ServicePageTemplate` | ~55 | Same template; ~50 unique words. |
| `/curb-repair` | Service | `ServicePageTemplate` | ~50 | " |
| `/loading-dock-repair` | Service | `ServicePageTemplate` | ~55 | " |
| `/concrete-replacement` | Service | `ServicePageTemplate` | ~50 | " |
| `/parking-lot-concrete-repair` | Service | `ServicePageTemplate` | ~55 | Mentions dumpster pads — cannibalization seed (see keyword map). |
| `/trip-hazard-removal` | Service | `ServicePageTemplate` | ~55 | Overlaps sidewalk + ADA. |
| `/warehouse-floor-repair` | Service | `ServicePageTemplate` | ~55 | Mentions joints — overlaps a candidate net-new page. |
| `/ada-compliance-repairs` | Service | `ServicePageTemplate` | ~55 | Overlaps sidewalk + trip-hazard. |
| `/concrete-repair-westfield-in` | City | `CityPageTemplate` | **~0** | Fully word-swapped on `{city}`. Doorway pattern. |
| `/concrete-repair-carmel-in` | City | `CityPageTemplate` | **~0** | " |
| `/concrete-repair-fishers-in` | City | `CityPageTemplate` | **~0** | " |
| `/concrete-repair-noblesville-in` | City | `CityPageTemplate` | **~0** | " |
| `/concrete-repair-zionsville-in` | City | `CityPageTemplate` | **~0** | " + **Zionsville is Boone County, not Hamilton** (modeled as Hamilton in data & schema). |

**"Ghost" resource slugs** (present in `RESOURCES` at `src/data/site.ts:280`, but no
`/resources/[slug]` route exists, so they 404 / are unreachable as pages):
`commercial-concrete-repair-cost-guide`, `concrete-repair-vs-replacement`,
`ada-compliance-sidewalk-requirements`, `common-causes-of-concrete-failure`,
`warehouse-floor-maintenance-guide`, `property-manager-concrete-inspection-checklist`,
`retail-center-sidewalk-maintenance-guide`.

## 3. Major strengths

1. **Correct, disciplined positioning.** "A Commercial Partner — Not a Residential Crew"
   (`Sections.tsx:132`). Voice is consistently B2B, liability/ADA/capital-planning aware.
   No residential drift anywhere in the data or templates.
2. **Correct Indiana geography in the data.** Cities are Carmel, Fishers, Noblesville,
   Westfield, Zionsville (`src/data/site.ts:207`). No Ohio/Cincinnati references found.
3. **Sound technical foundation.** Static generation via `generateStaticParams`
   (`app/[slug]/page.tsx:53`), per-route metadata, `app/sitemap.ts`, `app/robots.ts`,
   and four schema types already wired (LocalBusiness, WebSite, Service, BreadcrumbList).
4. **Conversion architecture is everywhere.** `EstimateForm` on every template, dual CTA
   (Request Assessment + phone), `StickyMobileCTA`, "response within one business day"
   reassurance. The funnel exists; it just needs content feeding it.
5. **Clean information architecture skeleton.** Services hub, Service-Areas hub, Industries,
   Case Studies, Resources are all present and linked in header/footer.
6. **Brand voice is genuinely good** — documentation-grade, specific to property managers,
   free of the usual contractor clichés. This is an asset to preserve in every rewrite.

## 4. Major weaknesses

Ordered by SEO impact. Each cites evidence in the code.

1. **Service pages are thin and 80%+ boilerplate.** Each service page's only unique content
   is `description` + four `bullets` (~50–70 words). Everything below the hero — the
   "Engineered for Commercial Conditions" block, the six-item checklist, the city chips, the
   related-services grid — is *identical across all nine pages* (`ServicePageTemplate.tsx:70`
   onward). Against the 1,000–1,500-word target, these are thin pages competing on near-empty.

2. **City pages are textbook doorway pages.** `CityPageTemplate` accepts a single `city`
   string and swaps it into otherwise-identical copy: "Trusted by {city} property managers…"
   (`CityPageTemplate.tsx:33`), "Why {city} Properties Choose Us" (`:53`). Every sentence is
   word-swappable to another city. This is precisely the pattern Google's doorway-page and
   Helpful-Content systems target. **Highest-risk issue on the site.**

3. **The same six FAQs appear on ten pages.** `FAQSection` renders the shared `FAQS` array
   (`src/data/site.ts:253`) on the homepage *and* every service page (`ServicePageTemplate.tsx:149`).
   Duplicate Q&A content sitewide; no page-specific FAQ value.

4. **FAQ schema is mismatched to content.** `FAQPage` JSON-LD is emitted **only on the
   homepage** (`app/page.tsx:38`), while the same FAQs are *visible* on nine service pages
   that emit **no** FAQ schema. So the one page with FAQ markup duplicates content shown
   elsewhere, and nine eligible pages forgo the rich-result entirely.

5. **Canonical host mismatch (confirmed in code).** `BASE_URL = "https://hamiltoncountyconcreterepair.com"`
   — the **non-www apex** — at `src/lib/route-seo.ts:3`. That constant feeds `metadataBase`
   (`app/layout.tsx:23`), every `alternates.canonical` and `og:url` (`app/[slug]/page.tsx:27`),
   the sitemap (`app/sitemap.ts:6`), the robots sitemap line (`app/robots.ts:10`), and every
   schema `@id`/`url` (`Schema.tsx:6`). The brand/serving host is **www**. If www serves and
   canonicals point to apex, Google receives conflicting host signals. **High priority, ~1-line fix** once redirect direction is confirmed. **VERIFY ON LIVE:** which host 301s to which.

6. **Resource Center is non-functional.** Seven guide titles render as cards whose only link
   is `/contact` ("Request from team", `app/resources/page.tsx:47`). There are no article
   pages. The single most linkable, highest-intent informational asset — the **Cost Guide** —
   does not exist. This is the biggest *missed* opportunity on the site.

7. **A fake phone number is propagated everywhere, including schema.** `phone: "(317) 555-0214"`
   / `tel:+13175550214` (`src/data/site.ts:4`) renders in the header, footer, hero, both page
   templates, the final CTA, and the contact page — and is injected into LocalBusiness
   `telephone` (`Schema.tsx:9`). `555-01xx` is a reserved fictitious exchange. This blocks
   trustworthy NAP, Google Business Profile, and citation building. **REQUIRES HUMAN REVIEW**
   (real tracking number). All generated deliverables use the `{{REAL_PHONE}}` token instead.

8. **E-E-A-T is thin.** No verifiable address or phone, no reviews/testimonials, no named
   team or credentials, no license/insurance numbers, no project photography. Case studies use
   round-number "metrics" (`CASE_STUDIES`, `src/data/site.ts:215`) presented as fact with no
   "placeholder" labeling — a trust *and* an anti-fabrication problem.

9. **Zero images.** `next/image` is unused; there are no hero, project, or before/after
   images anywhere. Beyond the visual-trust gap, the site forgoes image search and the
   before/after proof that converts facility managers. (So "image optimization" here is a
   *forward-looking* recommendation, not a fix to existing assets.)

10. **Zionsville is mislabeled as Hamilton County.** It is rendered as a Hamilton County city
    in the data, in `areaServed` as `{ "@type": "City", name: "Zionsville, IN" }`
    (`Schema.tsx:14`), and on its city page ("Local Hamilton County crews",
    `CityPageTemplate.tsx:57`). Zionsville is in **Boone County**. Per the brief, target it but
    frame it as "nearby Zionsville," and keep it out of the Hamilton-County authority claim.

11. **Internal linking is grid-only and has gaps.** All internal links are templated card
    grids; there are no contextual in-body links. Resources link *only* to `/contact` (not to
    the services they support). City pages don't link to resources or to relevant local
    context. There is no service→resource or resource→service linking — the topical silo isn't
    wired.

12. **LocalBusiness schema is wrong for a Service-Area Business.** It carries a partial
    `PostalAddress` (region/country only, `Schema.tsx:16`) and the fake `telephone`. A SAB
    should omit `address` until a real verifiable one exists and rely on `areaServed`. As-is it
    is both incomplete and untrustworthy, and should not be treated as live-ready.

## 5. FAQ reuse — explicitly flagged (brief asked for this)

Confirmed: a single six-item `FAQS` array (`src/data/site.ts:253`) is the *only* FAQ source
on the site. It is rendered on the homepage and on all nine service pages. The questions are
generic ("How much does commercial concrete repair cost?", "How long do repairs last?") and
not specific to any service or city. Remediation (Phases 3–4): author a **unique** FAQ set per
service page and per city page — no question reused on any other URL — and emit a matching,
**unique** `FAQPage` schema per page (Phase 7).

## 6. E-E-A-T & trust signals

| Signal | Present? | Note |
|---|---|---|
| Verifiable NAP (name/address/phone) | ❌ | Name only. Phone is fake; no address. **REQUIRES HUMAN REVIEW.** |
| Reviews / ratings | ❌ | None. Do not fabricate. Plan a review-collection step post-NAP. |
| Testimonials | ❌ | None. |
| Named team / credentials / bios | ❌ | None. Add an About/credentials block (license #, insurance, years). **REQUIRES HUMAN REVIEW.** |
| Project proof (photos, before/after) | ❌ | None. Highest-converting missing asset for this audience. |
| Case studies | ⚠️ | Present but generic and unlabeled. Tag invented specifics `[PLACEHOLDER — REPLACE WITH REAL PROJECT]`. |
| Insurance / licensing statements | ⚠️ | "Fully insured" claimed in UI; no number. **REQUIRES HUMAN REVIEW.** |

## 7. Technical SEO issues (summary — full treatment in Phase 8)

- **Canonical host mismatch** — confirmed (see Weakness #5). High priority, low effort.
- **FAQ schema only on homepage; absent on service pages** — confirmed. Medium/low effort.
- **LocalBusiness = SAB pattern not followed; fake phone in schema** — confirmed.
- **Sitemap omits resource articles** (they don't exist yet) and uses uniform priority/changefreq
  (`app/sitemap.ts`). Low priority until articles ship.
- **H1 presence** — In *this codebase* every template renders exactly one `<h1>`
  (`ServicePageTemplate.tsx:34`, `CityPageTemplate.tsx:29`, static pages each have one). The
  brief's note that "the sidewalk page appears to open without an H1" does **not** reproduce in
  current code. **VERIFY ON LIVE** — the deployed build may lag the repo; if so, redeploy.
- **Images / Core Web Vitals** — no images today; when added, use `next/image` with explicit
  sizing and modern formats (forward-looking).
- **Duplicate-content risk** — reused FAQs (10 pages) and near-duplicate city pages (5).
  Addressed by Phases 3–4.

## 8. Quick wins (high impact ÷ low effort)

| # | Action | Effort | Impact | Where |
|---|---|---|---|---|
| 1 | Align canonical/`metadataBase`/sitemap/schema host to the true serving host; confirm one 301 direction | XS (1 const) | High | `src/lib/route-seo.ts:3` |
| 2 | Replace the fake `555` phone with `{{REAL_PHONE}}` token at the single source so nothing ships a fake NAP | XS | High (trust) | `src/data/site.ts:4` |
| 3 | Reframe Zionsville as "nearby Zionsville (Boone County)"; remove from Hamilton `areaServed` City list | XS | Med | `Schema.tsx:14`, city page |
| 4 | Build the **Cost Guide** article first (highest-intent, most linkable) | M | High | new `/resources/[slug]` |
| 5 | Give each service page a unique FAQ set + per-page `FAQPage` schema; stop homepage-only FAQ markup | M | Med/High | Phases 3 & 7 |
| 6 | De-duplicate service-page bodies (unique 1,000–1,500-word content) | L | High | Phase 3 |

## 9. Highest-impact opportunities

1. **Convert the 5 doorway city pages into genuinely local pages** — real corridors, districts,
   roads, and Indiana failure drivers — to escape doorway risk and win "{service} {city} IN".
2. **Deepen the 9 service pages** to unique, decision-maker-grade content with page-specific
   FAQs, internal links, and Service + FAQPage schema.
3. **Stand up the Resource Center** (7 articles → 12-month calendar) to build topical authority
   and pass internal links *down* to money pages. Cost Guide first.
4. **Add 3–5 net-new service pages** with distinct intent (crack repair, joint sealing,
   dumpster pad, slab leveling/mudjacking, spalling restoration) — see keyword map for
   cannibalization control.
5. **Once real NAP exists:** complete LocalBusiness schema, launch GBP, and build citations
   (all currently blocked).

## 10. URL action map (authoritative file: `/seo-audit/url-action-map.md`)

Summary of recommended action per existing URL (full table, with target keyword and batch, in
the dedicated file — this map governs every later phase):

- **keep-as-is / light-touch:** `/`, `/services`, `/industries`, `/service-areas`, `/contact`
- **rewrite-and-expand:** all 9 service pages; all 5 city pages; `/case-studies` (add city
  ties + placeholder tags); `/resources` (turn index into a real hub)
- **build (net-new):** 7 resource articles (`/resources/[slug]` route) + a selected subset of
  net-new service pages
- **merge:** none required today — but enforce intent boundaries (sidewalk ↔ trip-hazard ↔ ADA;
  parking-lot ↔ dumpster-pad) to prevent cannibalization

## 11. Anti-fabrication register (REQUIRES HUMAN REVIEW)

- **Phone:** real tracking number → replace `{{REAL_PHONE}}`.
- **Address:** none published; use `{{BUSINESS_ADDRESS}}` only where a field demands it.
  LocalBusiness/GBP/citations blocked until real NAP exists.
- **Redirect direction (www vs apex):** confirm on live before flipping `BASE_URL`.
- **License #, insurance carrier, years in business, crew size:** unverified — do not invent.
- **Reviews / ratings / testimonials:** none exist — do not fabricate; no `aggregateRating`.
- **Case-study specifics (SF, dates, clients, outcomes):** tag every invented detail
  `[PLACEHOLDER — REPLACE WITH REAL PROJECT]`.
- **Keyword volumes / difficulty / traffic:** none used as fact anywhere; priorities are
  reasoned judgment (see keyword research) until a real Ahrefs/GSC export is supplied.
