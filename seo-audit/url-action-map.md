---
title: "URL Action Map — governs Phases 2–8"
phase: "Phase 1 — Analyze the Existing Website"
batch: 1
status: "Draft for human review"
last_updated: "2026-06-15"
note: "This map is authoritative. No later phase may create a second URL that competes with an existing one for the same primary keyword. Reuse existing slugs."
legend:
  keep: "Leave URL/slug; only minor non-content tweaks if any."
  rewrite-expand: "Keep URL/slug; replace thin/duplicate body with unique, deep content."
  build: "Net-new URL — no equivalent exists today."
  merge: "Fold into another URL (none required now)."
---

# URL Action Map

## Existing pages → action

| URL (existing) | Type | Action | Primary keyword (target) | Batch | Notes / guardrails |
|---|---|---|---|---|---|
| `/` | Home | **keep** | commercial concrete repair Hamilton County IN | 4 (schema only) | Move/keep single `FAQPage` schema; no body rewrite needed. |
| `/services` | Service hub | **keep** (light) | commercial concrete repair services Hamilton County | 2 | Optional: add 1–2 sentence intro per card. Acts as silo parent. |
| `/industries` | Listing | **keep** | commercial concrete repair by property type | — | Deepen later (optional); not in current scope. |
| `/service-areas` | City hub | **keep** (light) | concrete repair service areas Hamilton County IN | 3 | Silo parent for city pages. Add "nearby Zionsville" framing. |
| `/resources` | Resource index | **rewrite-expand** | commercial concrete repair guides / resources | 4 | Turn stub cards into links to real articles; add short descriptions. |
| `/case-studies` | Proof | **rewrite-expand** | commercial concrete repair case studies Indiana | 4 | Tie studies to cities; tag invented specifics `[PLACEHOLDER — REPLACE WITH REAL PROJECT]`. |
| `/contact` | Conversion | **keep** | request concrete repair assessment Hamilton County | — | Swap fake phone → `{{REAL_PHONE}}`. |
| `/commercial-concrete-repair` | Service | **rewrite-expand** | commercial concrete repair Hamilton County IN | 2 | Position as the category/hub page; do NOT target "crack" or "spalling" as primary (those get their own pages). |
| `/sidewalk-repair` | Service | **rewrite-expand** | commercial sidewalk repair Indianapolis / Hamilton County | 2 | Own panel replacement & section repair. Cross-link, don't overlap, trip-hazard & ADA. |
| `/curb-repair` | Service | **rewrite-expand** | commercial curb & gutter repair Hamilton County | 2 | Drainage + parking-island angle. |
| `/loading-dock-repair` | Service | **rewrite-expand** | loading dock concrete repair Indiana | 2 | Dock pit/approach/leveler embeds. |
| `/concrete-replacement` | Service | **rewrite-expand** | commercial concrete replacement Hamilton County | 2 | Full tear-out & replace; distinct from repair (restoration). |
| `/parking-lot-concrete-repair` | Service | **rewrite-expand** | parking lot concrete repair Hamilton County IN | 2 | **Carve dumpster pads OUT** of primary; cross-link to (net-new) dumpster-pad page. |
| `/trip-hazard-removal` | Service | **rewrite-expand** | concrete trip hazard removal / repair (commercial) | 2 | Liability/grinding/documentation angle — NOT general sidewalk repair. |
| `/warehouse-floor-repair` | Service | **rewrite-expand** | warehouse / industrial concrete floor repair | 2 | Interior slab/joint/forklift angle; cross-link to (net-new) joint-sealing page. |
| `/ada-compliance-repairs` | Service | **rewrite-expand** | ADA concrete compliance repair (sidewalks/ramps) | 2 | Code compliance: slope, cross-slope, detectable warnings, landings. |
| `/concrete-repair-westfield-in` | City | **rewrite-expand** | commercial concrete repair Westfield IN | 3 | Grand Park, SR-32, US-31 corridor. Unique local context required. |
| `/concrete-repair-carmel-in` | City | **rewrite-expand** | commercial concrete repair Carmel IN | 3 | Meridian/US-31 corridor, City Center, Arts & Design District, roundabouts. |
| `/concrete-repair-fishers-in` | City | **rewrite-expand** | commercial concrete repair Fishers IN | 3 | Nickel Plate District, I-69 Exit 5, 116th St, industrial/office parks. |
| `/concrete-repair-noblesville-in` | City | **rewrite-expand** | commercial concrete repair Noblesville IN | 3 | Historic square, SR-37/SR-32, Hamilton Town Center, county seat. |
| `/concrete-repair-zionsville-in` | City | **rewrite-expand** | commercial concrete repair Zionsville IN | 3 | **Frame as "nearby Zionsville," Boone County** — not part of Hamilton County. Brick Street/Village. |

## Net-new pages → build

| URL (proposed) | Type | Action | Primary keyword (target) | Batch | Distinct-intent justification |
|---|---|---|---|---|---|
| `/resources/commercial-concrete-repair-cost-guide` | Article | **build** | commercial concrete repair cost | 4 | Informational; highest-intent + most linkable. Priority article. |
| `/resources/concrete-repair-vs-replacement` | Article | **build** | concrete repair vs replacement | 4 | Decision-stage informational; supports both service pages. |
| `/resources/ada-compliance-sidewalk-requirements` | Article | **build** | ADA sidewalk compliance requirements | 4 | Supports `/ada-compliance-repairs` + `/sidewalk-repair`. |
| `/resources/common-causes-of-concrete-failure` | Article | **build** | causes of commercial concrete failure | 4 | Top-of-funnel; links down to most service pages. |
| `/resources/warehouse-floor-maintenance-guide` | Article | **build** | warehouse floor maintenance | 4 | Supports `/warehouse-floor-repair`. |
| `/resources/property-manager-concrete-inspection-checklist` | Article | **build** | concrete inspection checklist (property managers) | 4 | Linkable lead magnet; supports all services. |
| `/resources/retail-center-sidewalk-maintenance-guide` | Article | **build** | retail center sidewalk maintenance | 4 | Supports sidewalk/trip-hazard + retail industry. |
| `/concrete-crack-repair` | Service | **build (recommend)** | commercial concrete crack repair | 2 | Distinct defect-intent; high search demand; hub links down to it. |
| `/concrete-joint-repair-sealing` | Service | **build (recommend)** | concrete joint repair & sealing (commercial) | 2 | Control/expansion joint + sealant intent across pavement & floors. |
| `/dumpster-pad-repair` | Service | **build (recommend)** | dumpster pad repair / replacement | 2 | Commercial-only; clean separation from parking-lot page. |
| `/concrete-slab-leveling` | Service | **build (optional)** | commercial concrete leveling / mudjacking | 2 | Settlement remediation method-intent (lift vs replace). |
| `/concrete-spalling-repair` | Service | **build (optional)** | concrete spalling & surface restoration | 2 | Freeze-thaw/de-icer surface damage; distinct from crack/structural. |
| `/bollard-repair-installation` | Service | **build (optional)** | bollard repair & installation (commercial) | 2 | Safety/security adjacency; lower volume — confirm demand. |
| `/concrete-ramp-repair` | Service | **build (optional)** | commercial concrete ramp repair | 2 | Overlaps ADA — only build if scoped to loading/vehicular ramps, not ADA ramps. |
| `/commercial-concrete-steps-repair` | Service | **build (optional)** | commercial concrete steps & stoop repair | 2 | Entry steps/stoops for retail/office; confirm demand. |

**Recommended net-new service set (to reach the 10–15 target without thin pages):** the three
**(recommend)** pages — crack repair, joint repair & sealing, dumpster pad — plus up to two of
the **(optional)** set (slab leveling and spalling are the strongest). That yields **12–14
service pages total**. Bollard / ramp / steps are held unless the human confirms real local
demand, to avoid thin or overlapping pages.

## Cannibalization guardrails (must hold across all batches)

1. **`/commercial-concrete-repair` is the category hub** — it targets the head term and links
   *down*; it must not also target crack, spalling, joint, or slab-leveling primaries.
2. **Sidewalk ↔ Trip-hazard ↔ ADA** are three distinct intents: section/panel replacement vs.
   liability-driven hazard remediation vs. code compliance. Keep primaries separate; cross-link.
3. **Parking-lot ↔ Dumpster-pad** — move all dumpster-pad targeting to the dumpster-pad page;
   parking-lot keeps drive lanes/sections/aprons.
4. **Warehouse-floor ↔ Joint-repair** — warehouse page owns interior slab + forklift context;
   joint page owns control/expansion joint repair & sealing broadly. Cross-link, don't duplicate.
5. **Replacement ↔ Repair** — replacement = full tear-out; repair = restoration. The
   repair-vs-replacement *article* is informational and must not target either service primary.
6. **Ramp** net-new only if scoped to vehicular/loading ramps; ADA pedestrian ramps stay on the
   ADA page.
