import type { RichCaseStudy } from "./content-types";

// UNPUBLISHED — this data is intentionally NOT imported or rendered anywhere. The
// /case-studies index, the /case-studies/[slug] pages, the homepage section, and the
// nav/footer/sitemap links were removed because every entry below is an ILLUSTRATIVE
// PLACEHOLDER (no real client, square footage, date, or outcome). The data is retained
// here so the section can be re-published quickly once real, verifiable projects and
// photos exist — at which point re-add the route, template, nav links, and sitemap entries.
// Do NOT render any of this as fact until it is replaced with real projects.
export const CASE_STUDIES_CONTENT: RichCaseStudy[] = [
  {
    slug: "retail-center-sidewalk-replacement-fishers",
    path: "/case-studies/retail-center-sidewalk-replacement-fishers",
    title: "Retail Center Sidewalk Replacement — Fishers",
    industry: "Retail",
    cityName: "Fishers",
    serviceSlug: "sidewalk-repair",
    metaTitle: "Case Study: Retail Sidewalk Replacement, Fishers IN",
    metaDescription:
      "How a multi-tenant Fishers retail center replaced failing storefront sidewalks in nightly windows with zero tenant downtime. (Illustrative.)",
    h1: "Retail Center Sidewalk Replacement in Fishers, Indiana",
    summary:
      "Failing storefront sidewalks replaced across a multi-tenant Fishers retail center — in nightly work windows, with no tenant disruption.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "The challenge",
        paragraphs: [
          "A multi-tenant retail center near the Fishers District faced a storefront sidewalk that had reached the end of its life — scaled and spalled from years of winter de-icing, with several settled panels opening trip-hazard offsets directly in the customer path. With active tenants depending on uninterrupted foot traffic, the property manager needed the concrete replaced without closing storefronts or losing the center's curb appeal during the work.",
        ],
      },
      {
        h2: "The scope",
        paragraphs: [
          "We documented the full storefront run, separating the panels that could be ground flush from those that had to be removed and replaced. The scope centered on full-depth replacement of the worst sections — corrected to a proper, drained sub-base so the new panels would not repeat their predecessors' settlement — plus ADA-aware transitions where the walk met entrances and the parking field.",
        ],
      },
      {
        h2: "How we worked it",
        paragraphs: [
          "All demolition and pours ran in nightly windows after the center closed, section by section, so every storefront stayed open and accessible through the day. Fresh concrete was protected through cure and the surfaces left clean and ready for the tenants each morning. The work was sequenced so no tenant ever lost its entrance for a business day.",
        ],
      },
      {
        h2: "The outcome",
        paragraphs: [
          "The center regained a clean, safe, presentable storefront walk with corrected drainage and ADA transitions, and the property manager received dated before-and-after documentation supporting the center's premises-liability position.",
        ],
      },
    ],
    metrics: ["Storefront run replaced", "Nightly windows — zero tenant downtime", "ADA transitions added"],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "commercial sidewalk repair" },
      { href: "/concrete-repair-fishers-in", anchor: "concrete repair in Fishers" },
      { href: "/retail-center-concrete-repair", anchor: "retail center concrete repair" },
    ],
    images: [
      {
        position: "before/after",
        filename: "case-retail-sidewalk-fishers-before-after.jpg",
        alt: "Before and after of a replaced retail center storefront sidewalk in Fishers, Indiana",
        caption: "Before/after: failing storefront panels replaced over nightly windows.",
      },
    ],
  },
  {
    slug: "warehouse-loading-dock-restoration-fishers",
    path: "/case-studies/warehouse-loading-dock-restoration-fishers",
    title: "Warehouse Loading Dock Restoration — Fishers",
    industry: "Industrial / Distribution",
    cityName: "Fishers",
    serviceSlug: "loading-dock-repair",
    metaTitle: "Case Study: Loading Dock Restoration, Fishers IN",
    metaDescription:
      "How a Fishers I-69 distribution center rebuilt failing dock pits and approach slabs while keeping freight on schedule. (Illustrative.)",
    h1: "Warehouse Loading Dock Restoration in Fishers, Indiana",
    summary:
      "Deteriorated dock pits and approach slabs rebuilt at an I-69 corridor distribution center — phased to preserve the shipping schedule.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "The challenge",
        paragraphs: [
          "A distribution facility in the Fishers I-69 corridor had several dock positions failing where it hurt most: cracked, settled approach slabs that had pulled dock seals out of alignment, and spalled pit edges chewing up equipment. Shutting the whole dock was not an option — inbound and outbound freight had to keep moving on schedule throughout.",
        ],
      },
      {
        h2: "The scope",
        paragraphs: [
          "The scope covered full reconstruction of the worst dock approach slabs — engineered for continuous loaded-trailer axle loads — along with pit-edge repair and bumper-block replacement. Approach grades were corrected so trailers would seat flush against the door again, resolving the seal-alignment problem the settlement had caused.",
        ],
      },
      {
        h2: "How we worked it",
        paragraphs: [
          "We phased the work door by door, scheduling each closure against the facility's lightest shipping windows and keeping adjacent dock positions live so freight never stopped. Rapid-set materials returned each rebuilt position to service as quickly as the engineering safely allowed, and the closure-and-reopen schedule was committed before mobilization so dispatch could plan around it.",
        ],
      },
      {
        h2: "The outcome",
        paragraphs: [
          "The facility regained sound, freight-ready dock positions with trailers seating flush again, and the operation absorbed the work without a disruption to its shipping commitments.",
        ],
      },
    ],
    metrics: ["Multiple dock positions rebuilt", "Phased around shipping windows", "Trailer seal alignment restored"],
    internalLinks: [
      { href: "/loading-dock-repair", anchor: "loading dock concrete repair" },
      { href: "/concrete-repair-fishers-in", anchor: "Fishers I-69 corridor concrete repair" },
      { href: "/warehouse-floor-repair", anchor: "warehouse floor repair" },
    ],
    images: [
      {
        position: "before/after",
        filename: "case-dock-restoration-fishers-before-after.jpg",
        alt: "Before and after of a rebuilt loading dock approach slab at a Fishers, Indiana distribution center",
        caption: "Before/after: a settled dock approach rebuilt so trailers seat flush.",
      },
    ],
  },
  {
    slug: "hoa-common-area-concrete-program-noblesville",
    path: "/case-studies/hoa-common-area-concrete-program-noblesville",
    title: "HOA Common-Area Concrete Program — Noblesville",
    industry: "HOA",
    cityName: "Noblesville",
    serviceSlug: "sidewalk-repair",
    metaTitle: "Case Study: HOA Concrete Program, Noblesville IN",
    metaDescription:
      "How a Noblesville HOA turned a sprawling common-area sidewalk liability into a documented, reserve-friendly multi-year program. (Illustrative case study.)",
    h1: "HOA Common-Area Concrete Program in Noblesville, Indiana",
    summary:
      "A sprawling common-area sidewalk liability turned into a documented, prioritized, multi-year program a Noblesville HOA board could budget.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "The challenge",
        paragraphs: [
          "A Noblesville community association faced thousands of linear feet of aging common-area sidewalk, a long list of resident trip-hazard complaints, and a reserve budget that could not absorb replacing it all at once. The board needed a way to control the liability and the spend without a painful special assessment.",
        ],
      },
      {
        h2: "The scope",
        paragraphs: [
          "We inspected the full common-area walkway network and graded every condition by severity and liability. The scope split into two parts: immediate, low-cost grinding of the toe-catching vertical offsets across the community, and a prioritized, line-itemed plan for panel replacement phased across multiple budget years.",
        ],
      },
      {
        h2: "How we worked it",
        paragraphs: [
          "The trip hazards were ground flush in a single low-disruption pass, documented with dated before-and-after records for the association's files. The replacement work was then sequenced into annual phases the board could fund from the reserve, with the same inspection and reporting format repeating each cycle so the program stayed predictable.",
        ],
      },
      {
        h2: "The outcome",
        paragraphs: [
          "The association converted an open-ended liability into a budgeted, defensible program — the worst hazards cleared immediately, the larger work scheduled predictably, and a maintenance history that feeds directly into the reserve study.",
        ],
      },
    ],
    metrics: ["Community-wide hazard survey", "Trip hazards ground in one pass", "Multi-year reserve-friendly plan"],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "common-area sidewalk repair" },
      { href: "/trip-hazard-removal", anchor: "trip-hazard remediation" },
      { href: "/hoa-concrete-repair", anchor: "HOA concrete repair programs" },
    ],
    images: [
      {
        position: "before/after",
        filename: "case-hoa-sidewalk-noblesville-before-after.jpg",
        alt: "Before and after of HOA common-area sidewalk trip-hazard repair in Noblesville, Indiana",
        caption: "Before/after: community trip hazards ground flush in a single pass.",
      },
    ],
  },
  {
    slug: "office-park-trip-hazard-removal-carmel",
    path: "/case-studies/office-park-trip-hazard-removal-carmel",
    title: "Office Park Trip Hazard Removal — Carmel",
    industry: "Office",
    cityName: "Carmel",
    serviceSlug: "trip-hazard-removal",
    metaTitle: "Case Study: Office Trip Hazard Removal, Carmel IN",
    metaDescription:
      "How a Class-A Carmel office park cleared dozens of documented sidewalk trip hazards across its entry network in one weekend. (Illustrative.)",
    h1: "Office Park Trip Hazard Removal in Carmel, Indiana",
    summary:
      "Dozens of documented trip hazards cleared across a Class-A Carmel office park's entry network — in a single weekend, no weekday disruption.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "The challenge",
        paragraphs: [
          "A Class-A office park on Carmel's Meridian corridor had accumulated numerous sidewalk offsets across its entry and walkway network from seasonal heave and settlement. For a premium property, the hazards were both a liability and an image problem — and any remediation had to avoid disrupting tenants during the workweek.",
        ],
      },
      {
        h2: "The scope",
        paragraphs: [
          "We surveyed and cataloged every offset across the property — location, height, and a photograph each — to scope the remediation accurately and establish a dated baseline. The vast majority were sound panels with a vertical lip, making them candidates for precision grinding rather than replacement.",
        ],
      },
      {
        h2: "How we worked it",
        paragraphs: [
          "Because grinding needs no cure time, the entire remediation ran over a single weekend with the property effectively untouched come Monday. Each corrected offset was photographed against the original survey, producing a complete, dated closeout file for the property's risk management.",
        ],
      },
      {
        h2: "The outcome",
        paragraphs: [
          "The office park eliminated its catalogued trip hazards in one weekend, with no weekday tenant disruption and a liability-defensible record of every correction — protecting both the property's image and its premises-liability position.",
        ],
      },
    ],
    metrics: ["Full property hazard survey", "Cleared in a single weekend", "Liability documentation delivered"],
    internalLinks: [
      { href: "/trip-hazard-removal", anchor: "trip-hazard removal and grinding" },
      { href: "/concrete-repair-carmel-in", anchor: "concrete repair in Carmel" },
      { href: "/office-park-concrete-repair", anchor: "office park concrete repair" },
    ],
    images: [
      {
        position: "before/after",
        filename: "case-office-trip-hazard-carmel-before-after.jpg",
        alt: "Before and after of an office park sidewalk trip hazard ground flush in Carmel, Indiana",
        caption: "Before/after: a toe-catching offset beveled to a safe transition.",
      },
    ],
  },
  {
    slug: "medical-facility-ada-upgrades-carmel",
    path: "/case-studies/medical-facility-ada-upgrades-carmel",
    title: "Medical Facility ADA Upgrades — Carmel",
    industry: "Medical",
    cityName: "Carmel",
    serviceSlug: "ada-compliance-repairs",
    metaTitle: "Case Study: Medical ADA Concrete Upgrades, Carmel",
    metaDescription:
      "How a Carmel medical facility brought patient entries into ADA conformance — slopes, landings, detectable warnings — while staying open. (Illustrative.)",
    h1: "Medical Facility ADA Concrete Upgrades in Carmel, Indiana",
    summary:
      "Patient-entry walkways brought into ADA conformance at a Carmel medical facility — corrected slopes, landings, and detectable warnings, open throughout.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "The challenge",
        paragraphs: [
          "A medical facility near Carmel's 116th-and-Meridian healthcare cluster had patient-entry concrete that no longer met accessibility standards — a ramp running slope and a cross-slope out of tolerance, an undersized landing, and worn detectable warnings. Because the entries serve patients with limited mobility, the deficiencies were both a compliance exposure and a real access barrier, and the facility could not close.",
        ],
      },
      {
        h2: "The scope",
        paragraphs: [
          "We measured the patient-entry route against the applicable accessibility dimensions, identified exactly what was out of conformance, and scoped the corrections: re-pouring the ramp run and landing to the correct slopes, re-grading the cross-slope on the approach walk, and installing compliant detectable warnings with proper contrast.",
        ],
      },
      {
        h2: "How we worked it",
        paragraphs: [
          "A compliant temporary accessible route kept patients moving while each entry was corrected, with the work phased around clinic hours and dust controlled given the setting. After the corrections, we verified the slopes, cross-slopes, and landing dimensions and documented the results.",
        ],
      },
      {
        h2: "The outcome",
        paragraphs: [
          "The facility's patient entries were brought into conformance with verified, documented dimensions — improving real access for patients and giving the property evidence of good-faith ADA remediation, all without closing the facility. (A full legal compliance determination remains the role of the facility's counsel or an accessibility specialist.)",
        ],
      },
    ],
    metrics: ["Patient entries corrected", "Detectable warnings installed", "Open throughout the work"],
    internalLinks: [
      { href: "/ada-compliance-repairs", anchor: "ADA compliance concrete repair" },
      { href: "/medical-facility-ada-concrete", anchor: "medical facility ADA concrete" },
      { href: "/concrete-repair-carmel-in", anchor: "concrete repair in Carmel" },
    ],
    images: [
      {
        position: "before/after",
        filename: "case-medical-ada-carmel-before-after.jpg",
        alt: "Before and after of an ADA-corrected patient entry ramp at a Carmel, Indiana medical facility",
        caption: "Before/after: a non-compliant patient-entry ramp re-poured to slope.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): RichCaseStudy | undefined {
  return CASE_STUDIES_CONTENT.find((c) => c.slug === slug);
}
