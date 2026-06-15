import type { RichService } from "./content-types";

// Backward-compatible shape: the original ServiceItem fields (slug, title, short,
// description, bullets, metaTitle, metaDescription) are all still present, so every
// existing consumer (Footer, ServicesGrid, route-seo, Schema, city template) keeps working.
// The rich fields drive the deepened service pages and the markdown deliverables.
export type ServiceItem = RichService;

export const SERVICES: RichService[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. Commercial Concrete Repair — category hub. Targets the head term and links
  //    DOWN to specific service pages. Must NOT target crack/spalling/joint primaries.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "commercial-concrete-repair",
    title: "Commercial Concrete Repair",
    short: "Full-service repair for commercial pavement, slabs, and structural concrete.",
    description:
      "Comprehensive commercial concrete repair across Hamilton County for property managers, facility directors, and commercial owners. One accountable partner for sidewalks, parking areas, loading docks, warehouse floors, and ADA access — scheduled around your operations.",
    bullets: [
      "Structural slab and pavement repair",
      "Spalling, scaling, and surface restoration",
      "Crack injection and joint resealing",
      "Engineered specifications and line-item reporting",
    ],
    metaTitle: "Commercial Concrete Repair in Hamilton County, IN",
    metaDescription:
      "Commercial concrete repair for property managers, HOAs & facilities across Hamilton County, IN. Phased, documented work. Request a free site assessment.",
    h1: "Commercial Concrete Repair in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete repair Hamilton County IN",
    secondaryKeywords: [
      "commercial concrete contractor Hamilton County",
      "commercial concrete restoration Indiana",
      "concrete repair for property managers Indianapolis",
    ],
    sections: [
      {
        h2: "One concrete partner for the whole property — and the whole portfolio",
        paragraphs: [
          "Most concrete problems land on a property manager's desk as a liability note, a tenant complaint, or a line in next year's capital plan. You do not need three different contractors and three different invoices to close them out. We handle the full range of commercial concrete repair across Hamilton County under a single point of contact, from a hairline crack at a retail entrance to a failed loading dock pit at a distribution center.",
          "Every engagement is run like a documented project, not a patch job. One project manager owns the scope from the first walkthrough through the closeout photos, so you are never chasing a crew for an update or guessing what was actually done. For owners and managers running several buildings, that consistency is the point: the same inspection method, the same proposal format, and the same warranty language across every site.",
        ],
      },
      {
        h2: "What we repair",
        paragraphs: [
          "This page is the front door to our commercial scope. Each surface below has its own dedicated process, crew approach, and proposal detail — follow the link for specifics, or send us the whole list and we will prioritize it for you.",
        ],
        bullets: [
          "Sidewalks, walkways, and pedestrian connectors — cracking, settlement, and lifted panels",
          "Curbs, gutters, and parking islands — drainage and edge protection",
          "Parking lot concrete sections, drive lanes, and entrance aprons",
          "Loading docks — pits, approach slabs, leveler embeds, and bumper blocks",
          "Warehouse and industrial floors — joints, spalls, and forklift-rated slabs",
          "ADA ramps, transitions, and detectable warnings",
          "Targeted crack repair, joint sealing, spalling restoration, and slab leveling",
          "Full removal and replacement when a surface is past the point of repair",
        ],
      },
      {
        h2: "Why central-Indiana concrete fails faster than the spec sheet promised",
        paragraphs: [
          "Concrete in Hamilton County lives a harder life than concrete in milder climates. The region runs through dozens of freeze-thaw cycles every winter: water wicks into the surface, freezes, expands, and pries the matrix apart a fraction of a millimeter at a time. Add the chloride from winter de-icing on retail lots and entrances, and you get the scaling and spalling that turns a clean walkway into a claim risk.",
          "Below the slab, central Indiana's glacial-till clay soils shrink in drought and swell with moisture. That seasonal movement is the quiet driver behind heaved sidewalk panels, settled approach slabs, and the diagonal cracks that reappear after a cheap patch. Repairs that ignore the base — and most low-bid patches do — fail again within a season or two. We scope the cause, not just the symptom.",
        ],
      },
      {
        h2: "Repair first, replace when the numbers justify it",
        paragraphs: [
          "Replacement is the most expensive line item on any concrete budget, and it is not always the right one. When the base is stable and the damage is localized, targeted repair restores safety and appearance for a fraction of replacement cost and defers the capital hit by years. When a slab has lost its base, broken into multiple unstable pieces, or failed across a wide area, repair becomes throwing good money after bad.",
          "We tell you which one you are looking at, in writing, with the reasoning attached — so a board, an owner, or a regional director can sign off without a second opinion. That honest call is what keeps clients coming back across multiple budget cycles.",
        ],
      },
      {
        h2: "Built around your operations, your tenants, and your hours",
        paragraphs: [
          "A repair that shuts down a tenant's storefront or blocks a dock door during shipping creates a different kind of cost. We plan around it. Most scopes are phased and run at night, on weekends, or in sections so the property stays open and operating. Concrete cure times are sequenced so you know exactly when each area returns to traffic.",
          "Before crews mobilize, you get a schedule that names the work windows, the closures, and the re-open times. Tenants and stakeholders can be notified with real dates, not vague ranges.",
        ],
      },
      {
        h2: "Documentation that protects you after the crew leaves",
        paragraphs: [
          "For a commercial property, the paperwork is part of the deliverable. Every project closes with before-and-after documentation, the scope as actually built, and a written warranty. If a trip-and-fall claim or an ADA complaint surfaces later, you have dated evidence that the condition was identified and remediated to standard.",
          "That record is also a capital-planning asset. Over a few cycles it becomes a clear history of what was repaired, when, and why — the backbone of a defensible reserve study and next year's budget request.",
        ],
      },
      {
        h2: "What drives the scope — and the number on your proposal",
        paragraphs: [
          "Two questions decide most of a commercial concrete budget: how much of the surface is genuinely failing, and how hard it is to work around your operation. Square footage and repair depth set the base; access, after-hours or phased scheduling, traffic control, and finish requirements move it from there. A wide-open lot repaired on a weekend prices very differently from the same work threaded around live tenant traffic and a tight delivery schedule — and we would rather show you that math than bury it.",
          "Our proposal breaks the property into discrete scopes and line-items each one, so you can see what every dollar buys, separate the must-do safety and ADA items from work that can wait a cycle, and approve in phases if the budget demands it. The on-site assessment that produces it is free, and nothing in it is padded to be negotiated down later. For multi-property owners, the same format repeats across sites so comparisons and approvals stay simple.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take on smaller commercial scopes, or only large projects?",
        a: "Both. A single lifted sidewalk panel at a medical office and a multi-phase parking-area rebuild get the same documented process — they just differ in scale and schedule. If a scope is genuinely tiny, we will tell you whether it is worth a dedicated mobilization or better bundled with other work on the property.",
      },
      {
        q: "Can you run concrete repairs across several properties as one program?",
        a: "Yes, and it is where managers see the most value. We can inspect a portfolio on a set cadence, prioritize scopes by safety and lifecycle, and deliver one consolidated proposal and reporting format across every site so budgeting and approvals stay consistent.",
      },
      {
        q: "What is actually included in a commercial concrete assessment?",
        a: "An on-site walkthrough with you or your maintenance lead, condition documentation of each area, a written scope tied to safety, ADA, and lifecycle priorities, and a line-item proposal you can take to ownership or a board. There is no charge and no obligation for the assessment itself.",
      },
      {
        q: "Will the proposal be detailed enough to take to a board or owner?",
        a: "That is what it is built for. Proposals are line-itemed by area and scope so a board member or regional director can see exactly what each dollar buys, separate must-do safety items from deferrable ones, and approve in phases if the budget requires it.",
      },
    ],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "commercial sidewalk repair" },
      { href: "/parking-lot-concrete-repair", anchor: "parking lot concrete repair" },
      { href: "/loading-dock-repair", anchor: "loading dock repair" },
      { href: "/ada-compliance-repairs", anchor: "ADA access repairs" },
      { href: "/resources/concrete-repair-vs-replacement", anchor: "when repair beats replacement" },
      { href: "/resources/commercial-concrete-repair-cost-guide", anchor: "how commercial concrete repair is priced" },
    ],
    related: ["concrete-replacement", "sidewalk-repair", "parking-lot-concrete-repair", "warehouse-floor-repair"],
    images: [
      {
        position: "hero",
        filename: "commercial-concrete-repair-hamilton-county-crew.jpg",
        alt: "Commercial concrete repair crew restoring a slab at a Hamilton County, Indiana property",
        caption: "Documented commercial concrete repair across Hamilton County, IN.",
      },
      {
        position: "before/after",
        filename: "commercial-concrete-repair-before-after.jpg",
        alt: "Before and after of a repaired commercial concrete entrance in Hamilton County, Indiana",
        caption: "Before/after: localized repair restores safety without full replacement.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. Sidewalk Repair — owns panel/section repair & replacement. Cross-links to
  //    trip-hazard (liability) and ADA (compliance) without absorbing their primaries.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "sidewalk-repair",
    title: "Sidewalk Repair",
    short: "Eliminate trip hazards and restore safe, ADA-compliant pedestrian access.",
    description:
      "Commercial sidewalk repair for retail centers, HOAs, office parks, and medical campuses across Hamilton County. We replace failed panels, correct settlement and heave, and restore safe, code-aligned pedestrian routes with minimal disruption.",
    bullets: [
      "Panel replacement and section repair",
      "Settlement and frost-heave correction",
      "ADA-compliant transitions and slopes",
      "Trip-hazard remediation with documentation",
    ],
    metaTitle: "Commercial Sidewalk Repair — Hamilton County, IN",
    metaDescription:
      "Commercial sidewalk repair, panel replacement & settlement correction for retail, HOA, and office properties across Hamilton County, IN. Request an assessment.",
    h1: "Commercial Sidewalk Repair in Hamilton County, Indiana",
    primaryKeyword: "commercial sidewalk repair Hamilton County IN",
    secondaryKeywords: [
      "commercial sidewalk replacement Indianapolis",
      "sidewalk panel replacement Hamilton County",
      "HOA sidewalk repair Indiana",
      "retail center sidewalk repair",
    ],
    sections: [
      {
        h2: "The sidewalk is where small concrete problems become claims",
        paragraphs: [
          "Pedestrian concrete is the most-walked, most-watched, and most-litigated surface on a commercial property. A lifted panel at a shopping center entrance, a cracked connector between a medical office and its lot, or a settled section along an HOA's common walk is not just an eyesore — it is a documented hazard sitting in the open until someone trips on it. Repairing sidewalks promptly is one of the cheapest forms of liability control a property manager has.",
          "We repair commercial sidewalks across Hamilton County for the property types where foot traffic and exposure are highest: multi-tenant retail, office parks, apartment communities, HOAs, and medical campuses. The work is scoped to fix the cause, restore a safe walking surface, and leave you with the paperwork to prove it.",
        ],
      },
      {
        h2: "What actually fails in central-Indiana sidewalks",
        paragraphs: [
          "Most sidewalk failure here traces back to two forces. The first is frost heave: water collects under or beside a panel, freezes, and lifts it, leaving a vertical lip at the joint — the classic toe-catcher. The second is settlement, where the sub-base consolidates or erodes and the panel drops, pooling water and cracking under load. Central Indiana's clay soils make both worse, swelling and shrinking with the seasons until joints no longer line up.",
          "De-icing salt accelerates the surface side of the problem, scaling the top layer until aggregate shows through and edges crumble. We read which mechanism is at work before we quote, because a panel that heaved from a drainage problem will heave again if the drainage is not addressed.",
        ],
      },
      {
        h2: "Repair methods, matched to the failure",
        paragraphs: [
          "Not every bad panel needs to be torn out. We match the method to the condition and to your budget priorities:",
        ],
        bullets: [
          "Full-depth panel replacement where a section is broken, badly settled, or spalled through",
          "Saw-cut section repair to isolate and replace only the failed portion of a long run",
          "Re-grading and base correction so a replaced panel does not repeat its predecessor's failure",
          "Transition and flush-joint work where the walk meets ramps, drives, and entrances",
        ],
      },
      {
        h2: "Where sidewalk repair meets trip hazards and ADA",
        paragraphs: [
          "Sidewalk work overlaps two adjacent concerns, and we keep them straight. When the problem is a single vertical offset that can be ground or lifted flush rather than replaced, that is targeted trip-hazard removal — often faster and cheaper than replacement. When a walk, ramp, or transition no longer meets accessibility standards for slope or cross-slope, that is an ADA compliance repair with its own code requirements.",
          "We scope all three together so you are not paying for a replaced panel that still fails an ADA cross-slope check, or grinding a hazard on a panel that needs to come out anyway. One walkthrough, one coordinated plan.",
        ],
      },
      {
        h2: "Scheduled so the storefront stays open",
        paragraphs: [
          "Sidewalks sit directly in front of tenants and patients. We phase the work — section by section, after hours, or over a weekend — so entrances stay usable and you are not fielding tenant complaints about a blocked door. Temporary safe routing and signage are part of the plan, not an afterthought.",
        ],
      },
      {
        h2: "Documentation built for premises-liability defense",
        paragraphs: [
          "Every sidewalk scope closes with dated before-and-after photos and a record of what was remediated. If a slip-and-fall claim arrives months later, that file is the difference between a defensible position and an open question. For HOAs and managed portfolios, the running record also feeds your reserve planning and annual inspection cadence.",
        ],
      },
      {
        h2: "What a sidewalk scope is priced on",
        paragraphs: [
          "Sidewalk pricing tracks a few honest variables: how many panels or sections are failing, whether each is a grind, a partial repair, or a full replacement, how much base correction the failure demands, and how exposed the work is to foot traffic. A run of clean grinds is inexpensive and fast; full-depth replacements with base and drainage correction cost more because they fix the cause, not just the surface. Knowing which is which is exactly what the assessment sorts out.",
          "You receive a line-item count of the conditions — graded by severity and liability — so the worst trip and ADA risks can be funded first and the cosmetic items scheduled into a later budget. That triage is especially useful for HOAs and managed retail, where a long walkway network is rarely a single decision. The walkthrough and the proposal are free, and the documentation doubles as your dated record that the conditions were identified.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you decide whether a sidewalk panel should be ground flush or replaced?",
        a: "It comes down to the cause and the offset. A clean vertical lip on an otherwise sound panel is usually a candidate for grinding or lifting — fast and inexpensive. A panel that is cracked through, spalled, or settled because its base is gone needs replacement, because grinding only buys a season before it moves again. We make that call on-site and put the reasoning in the proposal.",
      },
      {
        q: "Can you replace a single panel without disturbing the connected sidewalk run?",
        a: "Yes. We saw-cut clean joints to isolate the failed panel or section, replace to matching elevation, and restore the transitions so the new work is flush with what stays. Neighboring panels are protected during demolition.",
      },
      {
        q: "Our sidewalks keep failing in the same spots every year. Why?",
        a: "Recurring failure in a fixed location almost always means the sub-base or drainage was never corrected — water is still collecting and heaving or undermining the panel. We address the base and grade as part of the repair so the fix holds, rather than replacing the surface over the same unresolved problem.",
      },
      {
        q: "Do you handle sidewalk repairs for HOA and apartment common areas specifically?",
        a: "Frequently. HOA and apartment walks carry constant resident traffic and concentrated liability, so we are set up to inspect them on a cadence, prioritize the worst offsets first, and deliver a multi-year scope a board can budget against rather than one big surprise bill.",
      },
    ],
    internalLinks: [
      { href: "/trip-hazard-removal", anchor: "grinding a single trip hazard flush" },
      { href: "/ada-compliance-repairs", anchor: "ADA slope and transition requirements" },
      { href: "/concrete-replacement", anchor: "full removal and replacement" },
      { href: "/resources/retail-center-sidewalk-maintenance-guide", anchor: "keeping retail sidewalks claim-free" },
      { href: "/resources/property-manager-concrete-inspection-checklist", anchor: "inspection checklist for walkways" },
    ],
    related: ["trip-hazard-removal", "ada-compliance-repairs", "curb-repair", "concrete-replacement"],
    images: [
      {
        position: "hero",
        filename: "commercial-sidewalk-repair-hamilton-county.jpg",
        alt: "Crew replacing a cracked commercial sidewalk panel at a Hamilton County, Indiana retail center",
        caption: "Panel replacement and trip-hazard repair for commercial walkways.",
      },
      {
        position: "before/after",
        filename: "sidewalk-panel-replacement-before-after.jpg",
        alt: "Before and after of a settled commercial sidewalk panel replaced flush in Indiana",
        caption: "Before/after: a heaved panel removed and reset to a safe, flush grade.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Curb Repair — drainage + parking-island edge protection.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "curb-repair",
    title: "Curb Repair",
    short: "Curb, gutter, and ribbon repair that holds up to commercial traffic.",
    description:
      "Concrete curb, gutter, and parking-island repair for commercial properties across Hamilton County. We restore drainage flow lines, protect landscape islands, and rebuild curb damaged by plows, trucks, and freeze-thaw.",
    bullets: [
      "Curb and gutter replacement",
      "Parking island and landscape-edge repair",
      "Drainage and flow-line correction",
      "Curb-to-ramp and apron transitions",
    ],
    metaTitle: "Commercial Curb & Gutter Repair — Hamilton County",
    metaDescription:
      "Concrete curb, gutter & parking-island repair for commercial lots across Hamilton County, IN. Protect drainage and curb appeal. Request a free assessment.",
    h1: "Commercial Curb & Gutter Repair in Hamilton County, Indiana",
    primaryKeyword: "commercial curb and gutter repair Hamilton County",
    secondaryKeywords: [
      "parking lot curb repair Indianapolis",
      "concrete curb replacement Hamilton County",
      "parking island repair Indiana",
      "commercial gutter and flow line repair",
    ],
    sections: [
      {
        h2: "Curbs do more work than they get credit for",
        paragraphs: [
          "A curb is not decoration. It directs stormwater to inlets, protects landscape islands and pedestrians from vehicles, defines traffic flow, and holds the edge of the pavement together. When a curb is broken, crumbling, or sunken, all of that quietly stops working — water sheets across the lot and pools, islands erode, and the property starts to look neglected from the road.",
          "We repair and replace concrete curb, gutter, and ribbon across Hamilton County commercial lots, from a single plow-damaged section to a full perimeter that has reached the end of its life.",
        ],
      },
      {
        h2: "What tears curbs apart here",
        paragraphs: [
          "Snowplows are the usual suspect: a blade catches a curb edge and chips, cracks, or shears it off, especially where a contractor does not know the lot. Heavy trucks tracking turns ride up over curbs and break them. And the same freeze-thaw and clay movement that damages slabs heaves and cracks curb sections, opening gaps that send water under the pavement instead of into the drain.",
          "Integral curb-and-gutter is especially unforgiving: once the gutter pan cracks, water gets under the pavement edge and undermines the lot from the perimeter inward. Catching it early keeps a curb repair from becoming a pavement repair.",
        ],
      },
      {
        h2: "Drainage is the part most repairs miss",
        paragraphs: [
          "Replacing a curb to the wrong elevation is worse than leaving it — it creates a birdbath that holds water against the pavement and freezes into a hazard. We shoot grades and rebuild the flow line so water actually reaches the inlets. Where curbs meet ramps, aprons, and drive entrances, we tie the transitions in cleanly so there is no lip and no ponding.",
        ],
        bullets: [
          "Curb and integral curb-and-gutter replacement to correct grade",
          "Flow-line correction so water drains to inlets, not into the base",
          "Parking-island and landscape-edge curb repair",
          "Clean transitions at ramps, aprons, and drive entrances",
        ],
      },
      {
        h2: "Curb appeal is literal for a commercial property",
        paragraphs: [
          "For retail and office assets, the curb is the first thing a prospective tenant, customer, or buyer sees from the street. Crisp, intact curb lines read as a well-run property; broken, patched, weed-filled curbs read as deferred maintenance and pull down perceived value. Curb repair is one of the lowest-cost ways to lift how an asset presents.",
        ],
      },
      {
        h2: "Scheduled to keep the lot moving",
        paragraphs: [
          "Curb work happens at the edges of the lot, which makes it easier to phase without closing the property. We sequence sections so drive lanes and parking stay available, protect fresh concrete from traffic through cure, and keep the site clean as we go.",
        ],
      },
      {
        h2: "What a curb scope depends on",
        paragraphs: [
          "Curb cost comes down to linear footage, curb type, and how much the failure has spread into the pavement and drainage. Replacing a few plow-sheared sections of standard curb is straightforward; rebuilding integral curb-and-gutter to correct a flow line, or curb that has let water undermine the adjacent pavement, is a larger scope because it is fixing more than the curb. Profile matching and clean tie-ins to ramps and aprons factor in as well.",
          "We line-item the curb work by section and by type so you can see where a true drainage problem justifies the spend versus where a cosmetic chip can wait. Because curb work happens at the lot's edges, it is usually easy to phase across budget cycles without closing the property. The assessment is free, and we will flag any spot where a failing curb is quietly driving a future pavement repair.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you match new curb to the existing curb profile and height?",
        a: "Yes. We form replacement curb to the existing profile — straight curb, integral curb-and-gutter, or rolled curb — and tie it into the runs that remain so the line stays consistent. Where the original height created a drainage or snow-stacking problem, we will flag it and recommend a corrected profile.",
      },
      {
        q: "A plow contractor keeps damaging the same curbs every winter. Can repair help?",
        a: "We can rebuild the damaged sections and, where it makes sense, recommend more visible curb markers or reflectors so plow operators can see the edges. Repeated damage in the same spot is often a sightline or staking issue as much as a concrete one.",
      },
      {
        q: "Do broken curbs really affect the rest of the parking lot?",
        a: "Often, yes. A cracked curb or gutter pan lets water under the pavement edge, where it undermines the base and accelerates lot failure from the perimeter inward. Fixing curb and flow line early is frequently what prevents a much larger pavement repair later.",
      },
      {
        q: "Can you repair the concrete curb around landscape and parking islands?",
        a: "That is a routine scope for us. Island curbs take constant abuse from vehicles and plows and are where erosion shows first. We rebuild the curb edge, restore the line, and tie it back to the surrounding pavement so the island holds.",
      },
    ],
    internalLinks: [
      { href: "/parking-lot-concrete-repair", anchor: "parking lot concrete sections and drive lanes" },
      { href: "/ada-compliance-repairs", anchor: "curb ramps and accessible transitions" },
      { href: "/concrete-replacement", anchor: "full curb-line replacement" },
      { href: "/resources/common-causes-of-concrete-failure", anchor: "how water undermines pavement edges" },
    ],
    related: ["parking-lot-concrete-repair", "ada-compliance-repairs", "concrete-replacement", "trip-hazard-removal"],
    images: [
      {
        position: "hero",
        filename: "commercial-curb-repair-hamilton-county.jpg",
        alt: "New concrete curb and gutter formed at a Hamilton County, Indiana commercial parking lot",
        caption: "Curb, gutter, and island repair that restores drainage and curb appeal.",
      },
      {
        position: "before/after",
        filename: "curb-gutter-repair-before-after.jpg",
        alt: "Before and after of a plow-damaged commercial curb rebuilt in central Indiana",
        caption: "Before/after: a sheared curb section rebuilt to grade and flow line.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Loading Dock Repair — heavy-duty pits/approach/embeds for active facilities.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "loading-dock-repair",
    title: "Loading Dock Repair",
    short: "Heavy-duty dock pit, approach, and apron repair for active facilities.",
    description:
      "Loading dock concrete repair for warehouses and distribution centers across Hamilton County. We rebuild dock pits, approach slabs, leveler embeds, and bumper blocks — engineered for continuous freight and sequenced around your shipping windows.",
    bullets: [
      "Dock pit and apron reconstruction",
      "Approach slab replacement",
      "Leveler embed and bumper-block repair",
      "Work scheduled around shipping windows",
    ],
    metaTitle: "Loading Dock Concrete Repair — Hamilton County, IN",
    metaDescription:
      "Loading dock concrete repair for warehouses & distribution centers in Hamilton County, IN. Dock pits, approach slabs, embeds. Minimize downtime — request a quote.",
    h1: "Loading Dock Concrete Repair in Hamilton County, Indiana",
    primaryKeyword: "loading dock concrete repair Indiana",
    secondaryKeywords: [
      "dock pit repair Hamilton County",
      "loading dock approach slab replacement",
      "dock leveler embed repair Indianapolis",
      "warehouse loading dock repair",
    ],
    sections: [
      {
        h2: "The hardest-working concrete on the property",
        paragraphs: [
          "A loading dock takes punishment nothing else on the site sees: trailers slamming into bumpers, dock plates pounding the edge, jack and forklift wheels hammering the approach, and de-icing salt dragged in on every winter delivery. When that concrete fails, freight stops — and in a distribution operation, downtime at a dock door is measured in dollars per minute.",
          "We rebuild loading dock concrete across Hamilton County's warehouse and distribution corridors, with a process built around one priority: get the door back in service on a schedule you can plan shipping around.",
        ],
      },
      {
        h2: "Where docks break down",
        paragraphs: [
          "Most dock failures concentrate in a few predictable places. The dock edge and leveler embed take the impact and work loose. The approach slab — the apron the trailer backs over — cracks and settles under repeated heavy axle loads, and that settlement pulls the dock seal out of alignment. The pit floor and walls spall and crack. And bumper blocks shear off, exposing the structure to direct trailer impact.",
        ],
        bullets: [
          "Dock pit floor and wall reconstruction",
          "Approach and apron slab replacement under heavy axle loads",
          "Leveler embed angle reset and re-anchoring",
          "Bumper block replacement and impact protection",
          "Drive-approach drainage so meltwater and salt do not pool at the door",
        ],
      },
      {
        h2: "Engineered for freight, not foot traffic",
        paragraphs: [
          "Dock concrete cannot be poured like a sidewalk and put back into service. We design these repairs for continuous heavy load — appropriate slab thickness, reinforcement, mix design, and edge armoring — so the rebuilt approach and pit handle fully loaded trailers and lift traffic without re-failing at the joint. Where a leveler is involved, we coordinate the embed and angle so the equipment seats correctly when it goes back in.",
          "Cure schedule matters as much as the pour. We sequence the work and use the right mix so the door returns to service as fast as the engineering safely allows, and we tell you that timeline up front.",
        ],
      },
      {
        h2: "Sequenced around your shipping windows",
        paragraphs: [
          "A multi-door dock rarely has to close all at once. We phase the work door by door, run it during off-shifts or scheduled downtime, and keep adjacent positions live so inbound and outbound freight keeps moving. For single-door operations, we plan the closure against your lightest shipping window and hold to the re-open commitment.",
          "You get the closure-and-reopen schedule before we mobilize, so dispatch, carriers, and tenants can be notified with real dates.",
        ],
      },
      {
        h2: "One vendor for the concrete, coordinated with your equipment",
        paragraphs: [
          "Dock repairs often touch both concrete and dock equipment. We handle the concrete scope — pit, approach, embed setting, bumpers — and coordinate cleanly with your dock-door or leveler service provider so the handoff does not become your problem to manage. The result is a dock position that goes back into service correct, not just patched.",
        ],
      },
      {
        h2: "What sets the cost of a dock repair",
        paragraphs: [
          "Dock pricing is driven by which elements have failed and how fast the door must come back. A bumper-block swap is minor; rebuilding a pit floor, replacing an approach slab under heavy axle loads, and resetting a leveler embed is a significant scope because it is structural and time-critical. Mix selection matters too — rapid-set materials that return a door to service in hours cost more than standard mixes that need days, and that trade-off is yours to make.",
          "Our proposal separates each dock position and each element so you can prioritize the doors hurting throughput and stage the rest. We name the closure-and-reopen window per door up front, so the cost includes the schedule, not just the concrete. The assessment is free, and we coordinate the timeline with your dispatch and your dock-equipment provider so nothing falls between vendors.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a dock door have to be out of service for a pit or approach rebuild?",
        a: "It depends on scope and mix design, but we plan every dock job around minimizing that window and commit to a return-to-service date before we start. Multi-door docks usually stay partially operational because we phase door by door; single-door closures are scheduled against your lightest shipping period.",
      },
      {
        q: "Can you repair the approach slab without removing the dock leveler?",
        a: "Often the leveler stays, but if the embed or supporting slab is part of the failure, the leveler has to be lifted or coordinated so the new concrete and embed seat correctly. We assess that on-site and coordinate with your equipment service provider so the leveler works properly when the door reopens.",
      },
      {
        q: "Our dock seals keep failing and trailers do not sit flush anymore. Is that a concrete problem?",
        a: "Frequently it is. When the approach slab settles, the trailer no longer presents to the door at the right height or angle, which tears up seals and creates gaps. Correcting the approach grade often resolves a 'door' problem that equipment service alone could not fix.",
      },
      {
        q: "Do you replace the bumper blocks and protect the new edge from re-damage?",
        a: "Yes. New or reset bumper blocks are part of the scope where they are sheared or missing, and we armor the dock edge appropriately so the rebuilt concrete is protected from the next trailer impact rather than taking it directly.",
      },
    ],
    internalLinks: [
      { href: "/warehouse-floor-repair", anchor: "the warehouse floor inside the dock" },
      { href: "/parking-lot-concrete-repair", anchor: "the truck court and drive approach" },
      { href: "/concrete-replacement", anchor: "full slab replacement" },
      { href: "/concrete-repair-fishers-in", anchor: "dock repair in the Fishers I-69 corridor" },
    ],
    related: ["warehouse-floor-repair", "parking-lot-concrete-repair", "concrete-replacement", "concrete-joint-repair-sealing"],
    images: [
      {
        position: "hero",
        filename: "loading-dock-repair-hamilton-county-distribution.jpg",
        alt: "Rebuilt loading dock pit and approach slab at a Hamilton County, Indiana distribution center",
        caption: "Dock pit, approach, and embed repair engineered for continuous freight.",
      },
      {
        position: "before/after",
        filename: "dock-approach-slab-before-after.jpg",
        alt: "Before and after of a cracked loading dock approach slab replaced in central Indiana",
        caption: "Before/after: a settled approach slab rebuilt so trailers seat flush again.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 5. Concrete Replacement — full tear-out & replace. Distinct from repair.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "concrete-replacement",
    title: "Concrete Replacement",
    short: "Full demo and replacement when repair is no longer cost-effective.",
    description:
      "Full-depth commercial concrete removal and replacement across Hamilton County — slabs, sidewalks, drive lanes, and pads. Engineered base, reinforcement, and jointing for a surface that lasts, not a patch that comes back.",
    bullets: [
      "Tear-out, haul-off, and disposal",
      "Engineered sub-base preparation",
      "Reinforced placement and proper jointing",
      "Phased to keep the property operating",
    ],
    metaTitle: "Commercial Concrete Replacement — Hamilton County",
    metaDescription:
      "Full-depth commercial concrete replacement across Hamilton County, IN — slabs, sidewalks, drives & pads. Engineered base and jointing. Request an assessment.",
    h1: "Commercial Concrete Replacement in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete replacement Hamilton County",
    secondaryKeywords: [
      "commercial concrete removal and replacement Indianapolis",
      "tear out and replace concrete slab",
      "commercial slab replacement Indiana",
      "parking lot concrete replacement Hamilton County",
    ],
    sections: [
      {
        h2: "When repair stops making financial sense",
        paragraphs: [
          "Repair is almost always the cheaper first move — but there is a point where patching a surface is throwing money at a problem that will keep coming back. When a slab has broken into multiple unstable pieces, lost the base that supports it, or deteriorated across a wide enough area that you are repairing it every year, replacement is the lower lifetime cost. We are direct about where that line is, because recommending an unnecessary tear-out is the fastest way to lose a client's trust.",
          "We handle full-depth removal and replacement of commercial concrete across Hamilton County: sidewalks and walkways, parking-lot sections and drive lanes, dumpster and equipment pads, dock approaches, and interior slabs.",
        ],
      },
      {
        h2: "The base is the part you are actually paying for",
        paragraphs: [
          "Anyone can pour concrete. What separates a 20-year replacement from one that cracks in two winters is everything underneath it. Central Indiana's clay soils move with moisture, so a replacement that is placed on a poorly compacted or under-drained base will telegraph that movement straight back into the new slab. We treat sub-base preparation as the core of the job: removing failed material, correcting drainage, compacting to spec, and building up the right base section for the load the surface will carry.",
        ],
        bullets: [
          "Full-depth saw-cutting and clean removal of failed concrete",
          "Excavation and correction of failed or saturated sub-base",
          "Engineered compaction and base section sized to the load",
          "Drainage correction so water leaves the base instead of pooling under it",
        ],
      },
      {
        h2: "Reinforcement and jointing that controls the cracking",
        paragraphs: [
          "Concrete will crack; the engineering question is where. We place reinforcement appropriate to the use — from welded wire to rebar mats for heavy-load areas — and we lay out control joints so the inevitable shrinkage cracks fall along planned lines instead of randomly across the surface. Proper joint spacing and depth is unglamorous and is exactly what cheap installs skip, which is why their slabs map-crack within a couple of seasons.",
          "Mix design is matched to the application and the season, including air entrainment to survive Indiana's freeze-thaw cycling, so the new surface is built for the climate it has to live in.",
        ],
      },
      {
        h2: "Phased so the property keeps running",
        paragraphs: [
          "Replacement is more disruptive than repair, which makes scheduling the difference between a smooth project and a tenant revolt. We section the work so parts of the lot, the walkway network, or the dock stay open while other areas are torn out and replaced, and we sequence pours and cure times so areas reopen predictably. You get a phasing plan with closure and re-open dates before any concrete comes out.",
        ],
      },
      {
        h2: "Documented from demolition to closeout",
        paragraphs: [
          "Because replacement is a capital-level expense, the documentation matters to whoever approved the spend. We record the base preparation, reinforcement, and finished work, and close out with as-built scope and a written warranty — the evidence an owner, board, or asset manager needs to show the money bought a 20-year asset, not a 2-year patch.",
        ],
      },
      {
        h2: "What drives a replacement budget",
        paragraphs: [
          "Replacement cost is mostly below the surface. Demolition and haul-off, the amount of failed sub-base that has to be excavated and rebuilt, drainage correction, reinforcement, and the area replaced are the real drivers — the finished concrete is the visible part of a larger job. Thicker, heavier-load slabs and tight, traffic-bound sites cost more; open areas replaced in one phase cost less. We are explicit about where the money goes so the number is not a black box.",
          "Because replacement is a capital expense, the proposal is built for approval: line-itemed by area, with the base and reinforcement scope spelled out, and structured so the safety-critical sections can be funded now and the rest phased across budget years. The assessment is free, and where leveling or targeted repair could defer the spend, we will say so rather than quote a tear-out you do not yet need.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you decide between replacing concrete and repairing it?",
        a: "We look at the base condition, how widespread the damage is, and how many times the area has already been repaired. Localized damage over a stable base is a repair. A slab that has lost its base, broken into multiple moving pieces, or is failing across a wide area is a replacement, because repeated patching of it costs more over a few years than replacing it once. We show you the reasoning in writing.",
      },
      {
        q: "Why did our last concrete replacement crack again so quickly?",
        a: "Almost always the base or the jointing, not the concrete itself. If the failed sub-base was not corrected, or control joints were spaced or cut wrong, a new slab will crack on the same schedule as the old one. Our replacements correct the base and lay out jointing deliberately, which is what makes the difference in longevity.",
      },
      {
        q: "How long before replaced concrete can take vehicle or forklift traffic?",
        a: "Pedestrian traffic typically returns within a day or two; full vehicle and heavy equipment loading needs longer for the concrete to gain strength, and the exact window depends on the mix and conditions. We give you the return-to-service dates by area as part of the phasing plan so you can schedule around them.",
      },
      {
        q: "Can you replace only the worst sections now and phase the rest into next year's budget?",
        a: "Yes, and we often recommend it. We can prioritize the sections that are safety or liability issues for immediate replacement and scope the remainder as a phased program across budget cycles, so a large capital number becomes a manageable multi-year plan.",
      },
    ],
    internalLinks: [
      { href: "/commercial-concrete-repair", anchor: "targeted repair where the base is still sound" },
      { href: "/resources/concrete-repair-vs-replacement", anchor: "the repair-versus-replacement decision" },
      { href: "/resources/commercial-concrete-repair-cost-guide", anchor: "what replacement costs versus repair" },
      { href: "/parking-lot-concrete-repair", anchor: "parking-lot section replacement" },
    ],
    related: ["commercial-concrete-repair", "parking-lot-concrete-repair", "sidewalk-repair", "concrete-slab-leveling"],
    images: [
      {
        position: "hero",
        filename: "commercial-concrete-replacement-hamilton-county.jpg",
        alt: "Full-depth commercial concrete slab replacement in progress at a Hamilton County, Indiana property",
        caption: "Full-depth replacement with engineered base, reinforcement, and jointing.",
      },
      {
        position: "before/after",
        filename: "concrete-replacement-before-after.jpg",
        alt: "Before and after of a failed commercial concrete slab fully replaced in central Indiana",
        caption: "Before/after: a map-cracked slab removed and rebuilt for a 20-year life.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 6. Parking Lot Concrete Repair — drive lanes/sections/aprons. Dumpster pads
  //    are deliberately handed off to the dumpster-pad page (cannibalization rule).
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "parking-lot-concrete-repair",
    title: "Parking Lot Concrete Repair",
    short: "Concrete sections, drive lanes, and entry pads built to last.",
    description:
      "Concrete repair for commercial parking lots across Hamilton County — drive lanes, entrance aprons, and failed sections. Phased to keep the lot open, engineered to stop the spread, and finished stripe-ready.",
    bullets: [
      "Drive-lane and entrance-apron repair",
      "Failed concrete section replacement",
      "Stripe-ready surface finishes",
      "Phased work to keep the lot open",
    ],
    metaTitle: "Parking Lot Concrete Repair — Hamilton County, IN",
    metaDescription:
      "Concrete repair for commercial parking lots across Hamilton County, IN — drive lanes, aprons & failed sections. Phased to stay open. Request an assessment.",
    h1: "Commercial Parking Lot Concrete Repair in Hamilton County, Indiana",
    primaryKeyword: "parking lot concrete repair Hamilton County IN",
    secondaryKeywords: [
      "commercial parking lot concrete repair Indianapolis",
      "concrete parking lot section replacement",
      "drive lane concrete repair Hamilton County",
      "parking lot concrete contractor Indiana",
    ],
    sections: [
      {
        h2: "Your lot is your most visible — and most trafficked — asset",
        paragraphs: [
          "The parking lot is the first and last thing every customer, tenant, and visitor touches, and it absorbs more daily load than any other exterior surface. Concrete sections in a lot — drive lanes, entrance aprons, loading zones, and pads — fail under that traffic in ways that spread: one broken panel becomes three when the edges are left unsupported, and a pothole at an entrance apron becomes a tire-and-suspension complaint, then a claim.",
          "We repair commercial concrete parking areas across Hamilton County, targeting the failed sections before they multiply and keeping the lot open while we do it.",
        ],
      },
      {
        h2: "Concrete sections, not the whole asphalt lot",
        paragraphs: [
          "Many Hamilton County commercial lots are asphalt with concrete at the high-stress points — entrance aprons, drive lanes, drive-through lanes, trash and equipment pads, and ramp transitions — because concrete holds up where asphalt ruts and shoves. Those concrete sections are exactly what we repair and replace. Where a concrete drive lane or apron has cracked, settled, or spalled, we isolate and rebuild it to stop the failure from undermining the surrounding pavement.",
        ],
        bullets: [
          "Entrance and drive-through apron repair where turning loads concentrate",
          "Drive-lane and traffic-aisle concrete section replacement",
          "Settled or heaved panel correction and base repair",
          "Stripe-ready finishes so re-striping follows cleanly",
        ],
      },
      {
        h2: "Stop the spread, then schedule the rest",
        paragraphs: [
          "Concrete failure in a lot is progressive. Water gets into a crack, the base softens, edges break under load, and the failure widens every freeze-thaw cycle. The cost-effective move is to address the active failures now — the ones creating hazards or undermining good pavement — and to phase the cosmetic or lower-priority sections into a planned budget. We help you triage the lot that way instead of quoting one intimidating number for everything.",
        ],
      },
      {
        h2: "Done in phases so you never close the lot",
        paragraphs: [
          "A closed lot is lost business and frustrated tenants. We work the lot in sections — coning off and rebuilding one area while traffic flows around it, running higher-impact work overnight or on weekends, and protecting fresh concrete through cure so it is not driven on early. You get a phasing plan that shows which areas are affected and when each returns to service.",
          "When the concrete is back in service, the surfaces are left clean and stripe-ready so your striping contractor can follow without rework.",
        ],
      },
      {
        h2: "Coordinated with the rest of the lot's concrete",
        paragraphs: [
          "Parking-area repair rarely lives alone. The same walkthrough usually turns up curb and flow-line damage feeding water into the pavement, a dumpster pad that has been crushed by collection trucks, or ADA parking and access aisles that no longer meet slope requirements. We scope them together so the lot is addressed as a system, not a series of disconnected tickets.",
        ],
      },
      {
        h2: "How we scope and stage a lot",
        paragraphs: [
          "Lot pricing depends on how many concrete sections are failing, whether each is a repair or a full replacement, how much base is compromised, and how the work has to be staged around traffic. Active failures undermining good pavement are the priority dollars; cosmetic sections can wait. After-hours and weekend phasing to keep the lot open adds cost but protects your tenants and customers — a trade most managers gladly make.",
          "We deliver the lot as a triaged, line-itemed scope: stop-the-spread items first, then a phased plan for the rest you can spread across budget cycles. Surfaces are left stripe-ready so striping follows cleanly with no rework. The assessment is free, and the same walkthrough flags the curb, dumpster-pad, and ADA items feeding into the lot's condition so nothing is addressed in isolation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you repair the concrete sections in an otherwise asphalt parking lot?",
        a: "Yes — that is one of our most common parking-lot scopes. Concrete is typically used at the entrance aprons, drive lanes, drive-throughs, and pads where asphalt fails, and those are exactly the sections we isolate, repair, or replace without disturbing the surrounding asphalt.",
      },
      {
        q: "Can parking-lot concrete repair really be done without closing the lot?",
        a: "In nearly every case. We phase the work section by section and run higher-impact areas overnight or on weekends, coning off the active area while traffic flows around it. You will lose a few spaces or a lane temporarily, not the lot.",
      },
      {
        q: "One section of our concrete keeps failing and spreading. Why does it keep growing?",
        a: "Concrete failure spreads when the base is compromised and the broken edges are left unsupported — each freeze-thaw cycle works water deeper and breaks off a little more. Repairing the active section and correcting the base underneath it is what stops the progression; cosmetic patching over it does not.",
      },
      {
        q: "Will the repaired areas be ready for re-striping?",
        a: "Yes. We finish repaired and replaced sections stripe-ready and coordinate timing so your striping contractor can lay down fresh markings once the concrete has cured, with no extra prep on their end.",
      },
    ],
    internalLinks: [
      { href: "/curb-repair", anchor: "curb and flow-line repair feeding the lot" },
      { href: "/dumpster-pad-repair", anchor: "crushed dumpster pad repair" },
      { href: "/ada-compliance-repairs", anchor: "ADA parking and access-aisle compliance" },
      { href: "/concrete-replacement", anchor: "full section replacement" },
    ],
    related: ["curb-repair", "dumpster-pad-repair", "concrete-replacement", "ada-compliance-repairs"],
    images: [
      {
        position: "hero",
        filename: "parking-lot-concrete-repair-hamilton-county.jpg",
        alt: "Commercial parking lot concrete drive-lane section being replaced in Hamilton County, Indiana",
        caption: "Drive-lane, apron, and section repair that keeps the lot open.",
      },
      {
        position: "before/after",
        filename: "parking-lot-section-repair-before-after.jpg",
        alt: "Before and after of a failed commercial parking lot concrete section in central Indiana",
        caption: "Before/after: a spreading failed section isolated and rebuilt.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 7. Trip Hazard Removal — liability/grinding/documentation. NOT general sidewalk.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "trip-hazard-removal",
    title: "Trip Hazard Removal",
    short: "Liability-focused remediation of uneven sidewalks and walkways.",
    description:
      "Trip-hazard removal for commercial sidewalks across Hamilton County. We document, grind, or replace uneven walking surfaces — turning premises-liability exposure into a dated, defensible record, often in a single visit.",
    bullets: [
      "Hazard survey and dated documentation",
      "Precision grinding of vertical offsets",
      "Panel replacement where grinding will not hold",
      "Liability-defensible closeout records",
    ],
    metaTitle: "Trip Hazard Removal — Hamilton County, IN",
    metaDescription:
      "Commercial concrete trip-hazard removal across Hamilton County, IN. Grinding, documentation & liability-defensible records. Reduce slip-and-fall risk fast.",
    h1: "Concrete Trip Hazard Removal in Hamilton County, Indiana",
    primaryKeyword: "concrete trip hazard removal commercial",
    secondaryKeywords: [
      "sidewalk trip hazard repair Hamilton County",
      "trip hazard grinding Indianapolis",
      "uneven sidewalk liability repair Indiana",
      "slip and fall concrete remediation",
    ],
    sections: [
      {
        h2: "A trip hazard is a claim waiting for a date",
        paragraphs: [
          "Uneven sidewalk and walkway surfaces are one of the most common premises-liability exposures a commercial property carries. A vertical offset of as little as a quarter to half an inch is enough to catch a toe, and once someone falls, the question is no longer whether the hazard existed — it is whether you knew about it and what you did. Trip-hazard removal is the fastest, cheapest way to move a known defect from open exposure to documented remediation.",
          "We remediate trip hazards on commercial sidewalks, plazas, and walkways across Hamilton County, with an emphasis on speed and on the paper trail that protects you.",
        ],
      },
      {
        h2: "Survey and documentation first",
        paragraphs: [
          "We start by walking the property and cataloging every offset — location, height, and a photograph — so you have a dated record of the conditions before any work begins. That survey does two things: it scopes the remediation accurately, and it gives risk management and your insurer evidence that the property is being actively monitored and corrected rather than ignored.",
          "For larger portfolios and HOAs, that survey becomes a baseline you can re-run on a cadence, turning trip-hazard control into a documented program instead of a reaction to the last complaint.",
        ],
      },
      {
        h2: "Grinding: most hazards gone in a single visit",
        paragraphs: [
          "When a panel is otherwise sound and the problem is a vertical lip at a joint, precision grinding bevels the offset down to a compliant, walkable transition — no demolition, no concrete cure, no closure. A crew can clear dozens of hazards across a property in a day, which is why grinding is usually the first tool we reach for. It is dramatically less expensive and less disruptive than replacing the panel, and for the great majority of offsets it is the correct, lasting fix.",
        ],
        bullets: [
          "Vertical offsets beveled to a safe, compliant slope",
          "No closure or cure time — the walk is usable immediately",
          "Dozens of hazards cleared per visit on larger properties",
          "A finished, uniform surface rather than a patched one",
        ],
      },
      {
        h2: "When grinding is not the answer",
        paragraphs: [
          "Grinding fixes a lip; it does not fix a panel that is cracked through, badly spalled, or settling because its base is failing. Grinding a panel like that only resets the clock until it moves again. We are honest about which hazards are grind candidates and which need panel replacement, so you are not paying twice — once to grind it and again to replace it next year.",
          "Where replacement is the right call, we fold it into the same documented scope so the hazard is closed out properly and the record reflects it.",
        ],
      },
      {
        h2: "A closeout file your risk manager will thank you for",
        paragraphs: [
          "Every remediation closes with before-and-after photos tied to the original survey, so each hazard has a documented start and end state with dates. That file is exactly what defends a premises-liability claim and what demonstrates, to an insurer or ownership, that the property runs a real hazard-control process.",
        ],
      },
      {
        h2: "What a remediation visit covers",
        paragraphs: [
          "Trip-hazard pricing is unusually favorable because grinding needs no demolition or cure — a crew can correct dozens of offsets in a single visit, so cost tracks the number and severity of hazards more than anything else. The variables are how many require grinding versus the few that need panel replacement, and whether you want a one-time pass or a documented program re-run on a cadence. Either way it is among the lowest-cost liability control a property buys.",
          "Each visit produces a dated survey and before-and-after record, line-itemed so you can see exactly what was corrected and what, if anything, needs replacement instead. For portfolios and HOAs, that survey becomes the baseline for an annual program your insurer and ownership will appreciate. The assessment is free, and the documentation is built specifically to support a premises-liability defense.",
        ],
      },
    ],
    faqs: [
      {
        q: "At what height does a sidewalk offset become a trip hazard worth fixing?",
        a: "As a practical risk-management rule, vertical offsets around a quarter inch and up are worth addressing, and many accessibility standards treat changes above that range as requiring a bevel or correction. We document every offset we find and prioritize the ones most likely to catch a foot or fail an accessibility check.",
      },
      {
        q: "Is grinding a trip hazard a permanent fix or just a temporary one?",
        a: "On a sound panel, grinding is a permanent, finished correction — the offset is gone and the surface is uniform. It is only temporary if the underlying panel is actively moving because its base is failing, in which case we will tell you up front that the panel needs replacement instead.",
      },
      {
        q: "How quickly can you remediate hazards across a property?",
        a: "Grinding requires no cure time, so most properties are cleared in a single visit — a crew can correct dozens of offsets in a day and the surfaces are walkable immediately. Properties with panels that need replacement take longer, but those are usually the minority.",
      },
      {
        q: "What documentation do we get for insurance and liability purposes?",
        a: "You receive a dated survey of every hazard found and before-and-after photos of each correction, tied together as a closeout file. It is built specifically to show that conditions were identified and remediated on a date certain, which is what supports a premises-liability defense.",
      },
    ],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "panel replacement for failed sidewalk sections" },
      { href: "/ada-compliance-repairs", anchor: "ADA transition and slope correction" },
      { href: "/resources/property-manager-concrete-inspection-checklist", anchor: "a self-survey checklist for walkways" },
      { href: "/resources/retail-center-sidewalk-maintenance-guide", anchor: "trip-hazard control at retail centers" },
    ],
    related: ["sidewalk-repair", "ada-compliance-repairs", "concrete-slab-leveling", "curb-repair"],
    images: [
      {
        position: "hero",
        filename: "trip-hazard-grinding-hamilton-county-sidewalk.jpg",
        alt: "Precision grinding of a commercial sidewalk trip hazard at a Hamilton County, Indiana property",
        caption: "Precision grinding removes most offsets in a single visit — no closure.",
      },
      {
        position: "before/after",
        filename: "trip-hazard-removal-before-after.jpg",
        alt: "Before and after of a beveled sidewalk trip hazard on a commercial walkway in Indiana",
        caption: "Before/after: a toe-catching lip ground to a safe, compliant transition.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 8. Warehouse Floor Repair — interior slab/joint/forklift. Cross-links joint page.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "warehouse-floor-repair",
    title: "Warehouse Floor Repair",
    short: "Joint repair, slab restoration, and surface protection for industrial floors.",
    description:
      "Industrial warehouse floor repair across Hamilton County — joint armoring, crack and spall repair, and surface restoration that protects forklifts, product, and uptime. Sequenced around your racking and shifts.",
    bullets: [
      "Joint armoring and re-fill",
      "Crack and spall repair",
      "Surface densification and restoration",
      "Forklift-traffic-ready cures",
    ],
    metaTitle: "Warehouse Floor Repair — Hamilton County, IN",
    metaDescription:
      "Industrial warehouse floor repair across Hamilton County, IN — joint armoring, crack & spall repair, surface restoration. Protect forklifts and uptime.",
    h1: "Warehouse & Industrial Floor Repair in Hamilton County, Indiana",
    primaryKeyword: "warehouse floor repair Indiana",
    secondaryKeywords: [
      "industrial concrete floor repair Hamilton County",
      "warehouse slab crack repair",
      "forklift floor joint repair Indianapolis",
      "distribution center floor repair Indiana",
    ],
    sections: [
      {
        h2: "A failing floor taxes everything that rolls across it",
        paragraphs: [
          "In a warehouse or distribution center, the floor is production infrastructure. Spalled joints and cracks beat up forklift wheels and bearings, jar operators, shake loads, and slow every pass a lift makes across the building. Left alone, a chipped joint widens, the edges break down further, and what started as a maintenance item becomes a safety and equipment-cost problem that compounds shift after shift.",
          "We repair industrial concrete floors across Hamilton County's warehouse and distribution corridors — the Fishers I-69 area, Noblesville's industrial parks, and the logistics space feeding the broader Indianapolis market — with an approach built around keeping the operation moving.",
        ],
      },
      {
        h2: "Joints take the worst of it",
        paragraphs: [
          "The single highest-impact repair in most warehouses is the floor joints. Hard forklift wheels hammer the joint edges until they spall and break down, and once the edge is gone the wheel slams into the gap on every crossing, accelerating the damage and the wear on the equipment. We rebuild and armor spalled joints with appropriate semi-rigid fillers and edge repair so the wheels roll across a supported, continuous surface again.",
        ],
        bullets: [
          "Spalled joint-edge rebuild and semi-rigid joint filling",
          "Random crack repair and stabilization",
          "Surface spall and pop-out repair in traffic aisles",
          "Surface densification for dusting, worn slabs",
        ],
      },
      {
        h2: "Cracks and spalls, repaired for load",
        paragraphs: [
          "Random cracking in a warehouse slab is not just cosmetic — under repeated heavy load the crack edges break down and widen, and the slab can begin to fault vertically across the crack, creating the same wheel-impact problem as a bad joint. We repair and stabilize cracks so they carry load across the break, and we repair surface spalls and pop-outs in the high-traffic aisles where they matter most. The goal is a floor that supports the wheel everywhere it travels.",
        ],
      },
      {
        h2: "Cured for the lift schedule, not the calendar",
        paragraphs: [
          "Repairs are only useful if the floor goes back into service on time. We select materials with cure profiles matched to how fast you need lift traffic back on the repaired area — including rapid-set options where a section has to carry forklifts again within hours, not days. We tell you the return-to-service window for each repair so you can route traffic and stage work around it.",
        ],
      },
      {
        h2: "Sequenced around racking, inventory, and shifts",
        paragraphs: [
          "Warehouse floor work happens inside a live operation, around fixed racking and moving inventory. We sequence the work aisle by aisle and zone by zone, coordinate with your team on what can be cleared and when, and run repairs during off-shifts or planned downtime where the location demands it. The objective is real repairs to the floor with the smallest possible footprint on throughput.",
        ],
      },
      {
        h2: "Scoping a floor without stopping the operation",
        paragraphs: [
          "Floor pricing follows linear feet of joint, the number of cracks and spalls, the repair materials, and how fast each area must carry lift traffic again. Rebuilding spalled joint edges with semi-rigid filler across long aisles is the bulk of most scopes; rapid-set materials that return an aisle to service in hours cost more than standard ones, and that urgency is yours to set zone by zone. Working around fixed racking and live inventory shapes the schedule as much as the concrete.",
          "We scope the floor aisle by aisle and zone by zone, line-itemed so you can prioritize the joints and cracks doing the most damage to equipment and throughput. Return-to-service windows are named per repair so production can route around them. The assessment is free, and we will tell you where densification or restoration beats replacement so a worn floor does not become an unnecessary capital project.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do our warehouse floor joints keep spalling no matter how often we patch them?",
        a: "Hard forklift wheels pound joint edges, and a thin cosmetic patch has nothing to bond to and no edge support, so it pops right back out. Lasting joint repair rebuilds the spalled edge and fills the joint with a semi-rigid material that supports the wheel across the gap rather than just filling the hole. That edge support is what makes it hold.",
      },
      {
        q: "How fast can a repaired floor section take forklift traffic again?",
        a: "It depends on the repair material. For areas that cannot be down long, we use rapid-set products that carry lift traffic again within hours; standard repairs need longer to reach full strength. We give you the return-to-service window per repair so you can route traffic around the cure.",
      },
      {
        q: "Can you repair the floor without us emptying the whole warehouse?",
        a: "Yes. We work aisle by aisle and zone by zone around your racking and inventory, coordinating with your team on what needs to be cleared in each area. A full shutdown is rarely necessary — we sequence the work to keep the rest of the floor in operation.",
      },
      {
        q: "Our slab is dusting and wearing in the main travel lanes. Can that be fixed without replacement?",
        a: "Often, yes. A worn, dusting surface can frequently be restored with densification and surface repair rather than replacement, which hardens the surface and cuts the dust. We assess whether the slab is a restoration candidate or genuinely past it, and recommend the lower lifetime-cost path.",
      },
    ],
    internalLinks: [
      { href: "/concrete-joint-repair-sealing", anchor: "control and construction joint repair" },
      { href: "/loading-dock-repair", anchor: "the loading dock the floor feeds" },
      { href: "/concrete-crack-repair", anchor: "structural crack repair" },
      { href: "/resources/warehouse-floor-maintenance-guide", anchor: "a warehouse floor maintenance plan" },
    ],
    related: ["concrete-joint-repair-sealing", "loading-dock-repair", "concrete-crack-repair", "concrete-spalling-repair"],
    images: [
      {
        position: "hero",
        filename: "warehouse-floor-repair-hamilton-county.jpg",
        alt: "Industrial warehouse floor joint repair underway at a Hamilton County, Indiana distribution center",
        caption: "Joint armoring and slab repair that protects forklifts and uptime.",
      },
      {
        position: "before/after",
        filename: "warehouse-joint-repair-before-after.jpg",
        alt: "Before and after of a spalled forklift floor joint rebuilt in a central Indiana warehouse",
        caption: "Before/after: a spalled joint rebuilt so lift wheels roll across it cleanly.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 9. ADA Compliance Repairs — code compliance (slope, cross-slope, warnings).
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "ada-compliance-repairs",
    title: "ADA Compliance Repairs",
    short: "Bring sidewalks, ramps, and transitions into ADA conformance.",
    description:
      "ADA compliance concrete repairs for commercial properties across Hamilton County. We correct non-conforming ramp slopes, cross-slopes, landings, and detectable warnings — reducing accessibility-liability exposure with documented results.",
    bullets: [
      "Ramp running-slope and landing correction",
      "Cross-slope remediation at walks and entrances",
      "Detectable warning (truncated dome) installation",
      "Documented compliance reporting",
    ],
    metaTitle: "ADA Compliance Concrete Repairs — Hamilton County",
    metaDescription:
      "ADA compliance concrete repairs across Hamilton County, IN — ramp slopes, cross-slopes, landings & detectable warnings. Reduce liability with documentation.",
    h1: "ADA Compliance Concrete Repairs in Hamilton County, Indiana",
    primaryKeyword: "ADA concrete compliance repair",
    secondaryKeywords: [
      "ADA sidewalk compliance Indianapolis",
      "ADA ramp slope correction Hamilton County",
      "detectable warning installation Indiana",
      "ADA cross slope remediation",
    ],
    sections: [
      {
        h2: "Accessibility is a legal standard, not a finish detail",
        paragraphs: [
          "Accessible routes, ramps, and parking are governed by the ADA Standards for Accessible Design, and the exposure for getting them wrong is real: ADA Title III access complaints and lawsuits target commercial properties whose ramps are too steep, whose cross-slopes shed a wheelchair toward traffic, or whose curb ramps lack detectable warnings. Unlike a cosmetic crack, a non-compliant ramp is a defined, measurable violation sitting in plain view.",
          "We assess and correct ADA concrete conditions on commercial properties across Hamilton County, focused on the elements that most often fall out of conformance and most often draw complaints.",
        ],
      },
      {
        h2: "Where properties most often fall out of compliance",
        paragraphs: [
          "Accessibility problems are usually about a few precise dimensions, and they creep in through both original construction and later settlement. The most common findings:",
        ],
        bullets: [
          "Curb and entrance ramps exceeding the maximum running slope",
          "Cross-slopes on walks and accessible routes that exceed the limit",
          "Landings that are too short, too sloped, or missing at the top of a ramp",
          "Missing, damaged, or non-contrasting detectable warnings at curb ramps",
          "Vertical offsets and gaps along the accessible route that exceed allowances",
        ],
      },
      {
        h2: "Measured, corrected, and verified",
        paragraphs: [
          "We do not eyeball accessibility. We measure the running slope, cross-slope, landing dimensions, and offsets against the applicable standard, identify exactly what is out of conformance, and correct the concrete to bring those dimensions back within range — re-pouring ramp runs and landings to the right slope, grinding or re-grading cross-slopes, and installing compliant detectable warnings. After the work, we verify the corrected dimensions so there is a measured record of conformance.",
          "Where settlement caused the problem, we address the base so the corrected slope does not drift back out of tolerance with the next season of soil movement.",
        ],
      },
      {
        h2: "Detectable warnings done right",
        paragraphs: [
          "Truncated-dome detectable warnings are a frequent gap — either missing entirely at curb ramps, worn down, or installed without the required visual contrast. We install compliant detectable warning surfaces at curb ramps and transitions, set correctly into the concrete and positioned to standard, so a common and easily-cited deficiency is closed out.",
        ],
      },
      {
        h2: "Documentation that demonstrates good-faith compliance",
        paragraphs: [
          "For accessibility, the record matters as much as the repair. We document the pre-existing conditions, the corrections made, and the verified post-repair dimensions, giving you evidence of good-faith remediation. If an access complaint arrives, that file shows the property identified and corrected the conditions to standard on a date certain — exactly the posture you want to be in.",
          "Important: we correct concrete to the applicable accessibility dimensions and document the result. A full ADA legal compliance determination for a property should involve your own counsel or a certified accessibility specialist — we make the concrete conform and give you the records to support it.",
        ],
      },
      {
        h2: "What an ADA correction scope includes",
        paragraphs: [
          "ADA pricing depends on what is out of conformance and how it has to be corrected. Adding missing detectable warnings or grinding a slightly excessive cross-slope is modest; re-pouring a ramp run and landing to the correct running slope is a larger scope because the structure has to change, not just the surface. The number of non-conforming elements across the property — counted and measured during the assessment — sets the rest.",
          "Our proposal line-items each non-conforming element with its measured deficiency and the correction, so you can fund the most-cited risks first and document a good-faith remediation program. The assessment is free, and it includes the measurements that justify each item. As noted above, we correct the concrete to the applicable dimensions and document the result; a full legal compliance determination belongs with your counsel or an accessibility specialist.",
        ],
      },
    ],
    faqs: [
      {
        q: "What ADA concrete issues do you most often correct on commercial properties?",
        a: "The recurring ones are curb and entrance ramps that are too steep, cross-slopes on walkways that exceed the limit, ramp landings that are too small or too sloped, and missing or worn detectable warnings at curb ramps. These are the elements most frequently cited in access complaints, and all of them are correctable in concrete.",
      },
      {
        q: "Can a non-compliant ramp slope be corrected without rebuilding the whole ramp?",
        a: "Sometimes a cross-slope or minor offset can be corrected by grinding or targeted re-grading, but a running slope that exceeds the maximum usually has to be re-poured to the correct grade, because you cannot grind enough material away without undermining the structure. We measure first and recommend the least-invasive correction that actually achieves conformance.",
      },
      {
        q: "Do you install the truncated-dome detectable warnings at curb ramps?",
        a: "Yes. We install compliant detectable warning surfaces — set into the concrete at the correct position with proper contrast — at curb ramps and transitions. Missing or worn detectable warnings are one of the most commonly cited deficiencies, and they are straightforward for us to close out.",
      },
      {
        q: "Will you certify that our property is fully ADA compliant?",
        a: "We correct concrete elements to the applicable accessibility dimensions and document the verified results, which demonstrates good-faith remediation of those conditions. A full legal ADA compliance determination for an entire property is properly made by your counsel or a certified accessibility specialist; our role is to make the concrete conform and give you the supporting records.",
      },
    ],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "sidewalk panel and route repair" },
      { href: "/trip-hazard-removal", anchor: "vertical offset removal along the route" },
      { href: "/curb-repair", anchor: "curb ramp and transition work" },
      { href: "/resources/ada-compliance-sidewalk-requirements", anchor: "ADA sidewalk and ramp requirements explained" },
    ],
    related: ["sidewalk-repair", "trip-hazard-removal", "curb-repair", "concrete-ramp-repair"],
    images: [
      {
        position: "hero",
        filename: "ada-compliance-repair-hamilton-county-ramp.jpg",
        alt: "ADA-compliant curb ramp with detectable warnings rebuilt at a Hamilton County, Indiana property",
        caption: "Ramp slope, cross-slope, and detectable-warning correction, measured and verified.",
      },
      {
        position: "before/after",
        filename: "ada-ramp-correction-before-after.jpg",
        alt: "Before and after of a non-compliant ADA ramp corrected to slope in central Indiana",
        caption: "Before/after: a too-steep ramp re-poured to a compliant running slope.",
      },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  // 10. Concrete Crack Repair (NEW) — defect-specific. Distinct from hub & spalling.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "concrete-crack-repair",
    title: "Concrete Crack Repair",
    short: "Injection, routing, and stitching that stops cracks from spreading.",
    description:
      "Commercial concrete crack repair across Hamilton County. We diagnose whether a crack is structural or cosmetic, treat the cause, and seal it with the right method — injection, routing, or stitching — before water and load make it worse.",
    bullets: [
      "Structural epoxy crack injection",
      "Polyurethane injection for water-active cracks",
      "Rout-and-seal for surface cracks",
      "Stitching and stabilization of moving cracks",
    ],
    metaTitle: "Commercial Concrete Crack Repair — Hamilton County",
    metaDescription:
      "Commercial concrete crack repair in Hamilton County, IN — injection, routing & stitching for slabs and pavement. Stop the spread. Request an assessment.",
    h1: "Commercial Concrete Crack Repair in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete crack repair",
    secondaryKeywords: [
      "concrete crack injection Hamilton County",
      "structural crack repair Indianapolis",
      "epoxy crack injection commercial",
      "slab crack repair Indiana",
    ],
    isNew: true,
    sections: [
      {
        h2: "A crack is a symptom — the question is of what",
        paragraphs: [
          "Cracks are the most common and most misread concrete defect on a commercial property. Some are harmless shrinkage that will never move again; others are the visible edge of a structural or base problem that will keep opening until it is addressed. Sealing them all the same way is how money gets wasted — caulking a moving structural crack does nothing, and over-engineering a dormant hairline is just as pointless.",
          "We repair cracks in commercial slabs, walls, and pavement across Hamilton County, and the first thing we do is figure out which kind you actually have before we quote a method.",
        ],
      },
      {
        h2: "Structural, non-structural, active, dormant",
        paragraphs: [
          "We sort cracks along two axes. The first is structural versus non-structural: does the crack compromise the slab's ability to carry load, or is it a surface and serviceability issue? The second is active versus dormant: is the crack still moving with load or temperature, or has it stabilized? A dormant non-structural crack can simply be sealed against water. An active structural crack needs the underlying cause — base movement, overload, missing control joints — addressed, or any repair will reopen.",
        ],
      },
      {
        h2: "The right method for the crack in front of us",
        paragraphs: [
          "Method follows diagnosis. We carry the full range so we are not forcing one approach onto every crack:",
        ],
        bullets: [
          "Epoxy injection to structurally re-bond and restore load transfer across a sound, dormant crack",
          "Polyurethane injection to seal and stop water movement through active or wet cracks",
          "Rout-and-seal to widen, clean, and flexibly seal surface cracks against water and de-icer",
          "Stitching and stabilization where a crack needs mechanical reinforcement across the break",
        ],
      },
      {
        h2: "Cracks are how water gets in — and water is the real enemy",
        paragraphs: [
          "In central Indiana, an open crack is an invitation for the freeze-thaw cycle to do its worst. Water enters, freezes, expands, and levers the crack wider every winter, while below the slab that same water erodes and softens the base. A crack sealed promptly is cheap insurance; the same crack ignored for two seasons becomes a spalled, faulted, water-undermined repair that costs many times more.",
        ],
      },
      {
        h2: "Documented, and monitored where it matters",
        paragraphs: [
          "We document crack repairs with location and method, and for cracks we judge to be potentially active, we can establish simple monitoring so you know whether movement has truly stopped. That record tells you — and an engineer or owner, if one is involved — whether a slab is stabilizing or whether something larger is developing underneath it.",
        ],
      },
      {
        h2: "What determines the crack-repair approach and cost",
        paragraphs: [
          "Crack pricing is set by the method the diagnosis calls for, the total length, and access. Rout-and-seal of surface cracks is economical; structural epoxy injection and stitching of active cracks cost more because they restore load transfer and require precise work. The bigger cost variable is whether the cause has to be addressed — a moving crack over a failing base is a base scope as much as a crack scope, and we are clear about that distinction before you commit.",
          "The proposal line-items the cracks by method and, where movement is suspected, includes monitoring so you are not paying to seal something that needs a structural answer. The assessment is free, and it sorts the cosmetic shrinkage cracks you can leave from the ones worth treating now before water and freeze-thaw widen them. That triage keeps a crack scope from quietly becoming a replacement.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you tell whether the cracks in our slab are structural or just cosmetic?",
        a: "We look at the crack's width, pattern, location relative to loads and joints, and whether it is still moving. Random fine cracking away from load paths is usually shrinkage; cracks that are wide, faulted vertically, follow load lines, or keep reopening point to a structural or base issue. We give you that read before recommending a repair method.",
      },
      {
        q: "Will sealing a crack actually keep it from coming back?",
        a: "If the crack is dormant, yes — a properly injected or rout-and-sealed crack stays closed. If the crack is still moving because of base movement or overload, sealing alone will not hold; the cause has to be addressed too. That is why we diagnose movement first rather than just filling every crack.",
      },
      {
        q: "Do we need epoxy or polyurethane injection?",
        a: "Epoxy is rigid and structural — it re-bonds a sound, dormant crack so the slab carries load across it again. Polyurethane is flexible and water-driven — it is the choice for sealing active or wet cracks where the priority is stopping water rather than structural re-bonding. We match the material to what the crack is doing.",
      },
      {
        q: "Can you repair a crack in a slab that is still moving or settling?",
        a: "We can stabilize and seal it, but only as part of addressing why it is moving — for example correcting the base, adding load transfer, or relieving the stress with proper jointing. Repairing the crack without addressing the movement just resets the clock, and we will tell you that rather than sell you a repair that will fail.",
      },
    ],
    internalLinks: [
      { href: "/concrete-spalling-repair", anchor: "surface spalling and scaling repair" },
      { href: "/concrete-joint-repair-sealing", anchor: "control and expansion joint sealing" },
      { href: "/concrete-replacement", anchor: "replacement when a slab is past repair" },
      { href: "/resources/common-causes-of-concrete-failure", anchor: "why commercial concrete cracks here" },
    ],
    related: ["concrete-joint-repair-sealing", "concrete-spalling-repair", "warehouse-floor-repair", "concrete-replacement"],
    images: [
      {
        position: "hero",
        filename: "concrete-crack-repair-hamilton-county.jpg",
        alt: "Epoxy crack injection on a commercial concrete slab in Hamilton County, Indiana",
        caption: "Crack injection, routing, and stitching matched to the diagnosis.",
      },
      {
        position: "before/after",
        filename: "concrete-crack-injection-before-after.jpg",
        alt: "Before and after of an injected structural crack in a central Indiana commercial slab",
        caption: "Before/after: an active crack sealed and stabilized against water and load.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 11. Concrete Joint Repair & Sealing (NEW) — control/expansion/construction joints.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "concrete-joint-repair-sealing",
    title: "Joint Repair & Sealing",
    short: "Control, expansion, and construction joint repair for floors and pavement.",
    description:
      "Commercial concrete joint repair and sealing across Hamilton County. We rebuild spalled joint edges and reseal control, construction, and expansion joints with the right filler or sealant — so joints keep doing their job instead of becoming the problem.",
    bullets: [
      "Spalled joint-edge rebuild",
      "Semi-rigid filler for interior floor joints",
      "Flexible sealant for exterior expansion joints",
      "Interior and exterior joint programs",
    ],
    metaTitle: "Concrete Joint Repair & Sealing — Hamilton County",
    metaDescription:
      "Commercial concrete joint repair & sealing across Hamilton County, IN — control, expansion & construction joints, plus armored floor joints. Request an assessment.",
    h1: "Commercial Concrete Joint Repair & Sealing in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete joint repair and sealing",
    secondaryKeywords: [
      "control joint repair Hamilton County",
      "expansion joint sealing commercial",
      "concrete joint sealant replacement Indianapolis",
      "armored floor joint repair Indiana",
    ],
    isNew: true,
    sections: [
      {
        h2: "Joints are engineered to move — until they stop working",
        paragraphs: [
          "Concrete joints are not flaws; they are where the slab is designed to crack, shrink, and expand on purpose. A joint does its job only as long as its seal or filler is intact and its edges are sound. Once the sealant fails or the edges spall, the joint flips from solution to liability: water gets under the slab, debris jams the gap, and on a warehouse floor the joint edge starts destroying forklift wheels.",
          "We repair and reseal joints in commercial floors and pavement across Hamilton County, matching the treatment to the joint type and what the slab on either side has to do.",
        ],
      },
      {
        h2: "Different joints, different failures",
        paragraphs: [
          "Treating every joint the same is the most common mistake we see. The joints around a commercial property each fail differently and need different answers:",
        ],
        bullets: [
          "Control (contraction) joints — cut to direct shrinkage cracking; edges spall under traffic",
          "Construction joints — where pours meet; lose load transfer and fault vertically",
          "Expansion/isolation joints — absorb thermal movement; sealant dries, cracks, and pulls free",
          "Floor joints under forklift traffic — need rigid edge support, not soft caulk",
        ],
      },
      {
        h2: "Filler or sealant — they are not the same product",
        paragraphs: [
          "Interior floor joints carrying hard-wheel traffic need a semi-rigid filler that supports the joint edges so wheels roll across without impact — a flexible caulk there fails almost immediately. Exterior expansion joints need exactly the opposite: a flexible sealant that stretches and compresses with thermal movement without tearing. Choosing the wrong one is why so many resealed joints fail within a season. We select the material to the joint's actual job.",
        ],
      },
      {
        h2: "A failed joint seal is the start of a bigger repair",
        paragraphs: [
          "An open or failed joint is rarely just cosmetic. Outside, it channels water straight under the slab, where central Indiana's freeze-thaw cycling and clay base turn it into settlement and cracking. Inside, a spalled floor joint hammers equipment and widens with every pass. Resealing and rebuilding joints on a sensible cadence is one of the cheapest forms of slab protection there is — it is maintenance that prevents replacement.",
        ],
      },
      {
        h2: "Programs for interior floors and exterior pavement",
        paragraphs: [
          "For warehouses and manufacturing floors, we focus on armored, supported joints that survive lift traffic and a re-fill schedule that keeps them that way. For exterior pavement, plazas, and structures, we focus on watertight expansion and control joints that keep water out of the base. Either way, you get a documented scope you can fold into a maintenance plan rather than a string of emergency fixes.",
        ],
      },
      {
        h2: "Scoping a joint program",
        paragraphs: [
          "Joint pricing tracks linear footage, joint type, the material specified, and how much edge rebuild the spalling demands. Resealing intact exterior joints is straightforward; rebuilding spalled interior floor-joint edges and re-filling with semi-rigid material across a warehouse is a larger scope because the edges, not just the gap, have to be restored. Interior and exterior joints use different materials, and that selection affects both cost and longevity.",
          "We line-item the joints by run and by treatment so you can fund the failing seals letting water under the slab — or the spalled floor joints chewing up equipment — before the lower-priority runs. Joint work is ideal to fold into a maintenance cadence rather than handle as emergencies, and we will recommend an interval based on what we find. The assessment is free.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between a joint sealant and a joint filler?",
        a: "A filler is semi-rigid and supports the joint edges so hard wheels roll across without impact — it is for interior floor joints under forklift traffic. A sealant is flexible and stretches with movement — it is for exterior expansion joints that open and close with temperature. Using a soft sealant where you need a rigid filler, or vice versa, is the usual reason a resealed joint fails fast.",
      },
      {
        q: "Why do our exterior expansion joints keep cracking and pulling loose?",
        a: "Usually one of two reasons: the wrong sealant for the amount of movement the joint sees, or the joint was not cleaned and prepped to bond properly. Expansion joints move constantly with Indiana's temperature swings, and a sealant that cannot handle that movement — or never bonded — tears free. We re-prep and reseal with a material rated for the joint's actual movement.",
      },
      {
        q: "How often should commercial concrete joints be resealed?",
        a: "It depends on exposure and traffic, but exterior joints generally need attention every few years as sealant weathers, and interior floor joints need re-fill when the filler wears or the edges begin to spall. The point is to catch them before the seal fails completely and water or impact starts damaging the slab — we can set a cadence based on what we find.",
      },
      {
        q: "Can resealing joints really prevent bigger slab damage?",
        a: "Yes — it is one of the highest-return maintenance items on a slab. Sealed exterior joints keep water out of the base, preventing the settlement and cracking that lead to replacement; supported interior joints stop the edge spalling that destroys both the joint and your equipment. Joint maintenance is cheap relative to the slab repairs it prevents.",
      },
    ],
    internalLinks: [
      { href: "/warehouse-floor-repair", anchor: "warehouse and industrial floor repair" },
      { href: "/concrete-crack-repair", anchor: "crack repair where joints were missing" },
      { href: "/parking-lot-concrete-repair", anchor: "exterior pavement repair" },
      { href: "/resources/warehouse-floor-maintenance-guide", anchor: "a floor-joint maintenance plan" },
    ],
    related: ["warehouse-floor-repair", "concrete-crack-repair", "concrete-spalling-repair", "parking-lot-concrete-repair"],
    images: [
      {
        position: "hero",
        filename: "concrete-joint-repair-sealing-hamilton-county.jpg",
        alt: "Semi-rigid filler being applied to a warehouse floor control joint in Hamilton County, Indiana",
        caption: "Joint-edge rebuild and resealing matched to each joint's job.",
      },
      {
        position: "before/after",
        filename: "warehouse-joint-sealing-before-after.jpg",
        alt: "Before and after of a spalled, resealed concrete floor joint in a central Indiana facility",
        caption: "Before/after: a spalled, open joint rebuilt and filled to support traffic.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 12. Dumpster Pad Repair (NEW) — carved out of parking-lot scope.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "dumpster-pad-repair",
    title: "Dumpster Pad Repair",
    short: "Heavy-duty trash enclosure pads built to survive collection trucks.",
    description:
      "Commercial dumpster pad repair and replacement across Hamilton County. We rebuild crushed, cracked, and ponding trash-enclosure pads to the thickness and reinforcement that front-load and roll-off trucks actually demand.",
    bullets: [
      "Crushed and cracked pad replacement",
      "Reinforced, full-depth construction for truck loads",
      "Approach apron in front of the enclosure",
      "Drainage correction to stop ponding",
    ],
    metaTitle: "Dumpster Pad Repair & Replacement — Hamilton County",
    metaDescription:
      "Commercial dumpster pad repair & replacement across Hamilton County, IN — built to survive collection trucks. Stop cracking and ponding. Request an assessment.",
    h1: "Commercial Dumpster Pad Repair & Replacement in Hamilton County, Indiana",
    primaryKeyword: "dumpster pad repair and replacement",
    secondaryKeywords: [
      "commercial dumpster pad concrete Hamilton County",
      "trash enclosure pad replacement",
      "dumpster pad contractor Indianapolis",
      "concrete dumpster pad Indiana",
    ],
    isNew: true,
    sections: [
      {
        h2: "The most abused slab on the property",
        paragraphs: [
          "A dumpster pad is a small slab asked to do a brutal job. Several times a week a fully loaded collection truck sets heavy point loads on it, drags steel containers across it, dumps hydraulic and brake loads onto it, and grinds it under tight turns. Most pads were never built for that, so they crack, sink, and crater — and once a pad fails, the enclosure leans, the gate stops latching, and the whole corner of the property looks neglected.",
          "We repair and replace commercial dumpster and trash-enclosure pads across Hamilton County, built for the loads they actually take rather than the loads a standard lot slab assumes.",
        ],
      },
      {
        h2: "Why dumpster pads fail when the rest of the lot is fine",
        paragraphs: [
          "It is almost always under-design. A pad poured at standard sidewalk or light-duty lot thickness simply cannot carry a loaded packer truck's axle and the concentrated load of container wheels and lift forks. Add the repeated impact of containers being slammed down and the twisting of trucks turning in tight, and the slab fatigues and breaks where nothing else on the lot does. Replacing it to the same spec just buys another short life.",
        ],
      },
      {
        h2: "Built for the load, not the average",
        paragraphs: [
          "We rebuild dumpster pads to handle the real duty cycle:",
        ],
        bullets: [
          "Full-depth, thickened slab sized for loaded collection-truck axles",
          "Reinforcement appropriate to concentrated container and lift loads",
          "An engineered, compacted base so the heavy slab has something to sit on",
          "A reinforced approach apron where the truck stages and the front axle bears",
        ],
      },
      {
        h2: "Drainage and sanitation are part of the job",
        paragraphs: [
          "A dumpster pad that ponds is both a code and a sanitation problem — standing water mixes with leachate and runs where it should not. We grade replacement pads so liquids drain to where your site is designed to handle them, not toward the building or across the lot. Where local requirements call for containment or specific drainage at the enclosure, we build to it.",
        ],
      },
      {
        h2: "Sequenced so waste pickup never stops",
        paragraphs: [
          "Tenants notice immediately when trash service is interrupted. We coordinate the work around your collection schedule — temporary staging, off-day pours, and cure timing — so containers stay serviceable and haulers can still reach them. You get a plan that names the down window and the return-to-service date before we start.",
        ],
      },
      {
        h2: "What a pad rebuild is priced on",
        paragraphs: [
          "Pad pricing is driven by area, the slab thickness and reinforcement the truck loads actually require, how much failed base has to be rebuilt, and whether a reinforced approach apron is included. Rebuilding to a real heavy-duty spec costs more than the under-built pad it replaces — which is precisely why the original failed — but it is what stops you from repaving the same corner every couple of years. Drainage and any enclosure tie-ins factor in as well.",
          "The proposal spells out the thickness, reinforcement, and base scope so you can see you are buying a pad built for collection trucks, not a patch. We coordinate the schedule around your hauler so trash service is not interrupted, and we name the down window up front. The assessment is free, and the same visit flags the enclosure curbs and bollards that protect the new pad.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does our dumpster pad keep cracking when the rest of the parking lot is fine?",
        a: "Because it carries loads the rest of the lot never sees — a loaded collection truck plus the concentrated weight of containers and lift forks, repeated several times a week. A pad poured at normal lot or sidewalk thickness fatigues and breaks under that duty cycle. The fix is rebuilding it thicker, reinforced, and on a proper base, not patching it to the same under-built spec.",
      },
      {
        q: "How thick does a commercial dumpster pad really need to be?",
        a: "Thicker and more heavily reinforced than a standard lot slab, because it has to carry loaded-truck axle loads and concentrated container loads. The exact thickness depends on your truck type and frequency, which we confirm on-site — but under-thickness is the single most common reason pads fail, so we size it to the actual load rather than a default.",
      },
      {
        q: "Can you replace the pad without interrupting our trash collection?",
        a: "Yes. We coordinate around your hauler's schedule with temporary staging and time the pour and cure to your lightest service window, so containers stay serviceable. You get the down window and return-to-service date up front so you can notify tenants and your hauler.",
      },
      {
        q: "Do we need a concrete approach apron in front of the enclosure?",
        a: "Usually, yes. The truck's front axle and staging position bear just outside the enclosure, and if that area is asphalt or thin concrete it ruts and fails, dragging the pad down with it. A reinforced approach apron carries that staging load and protects the investment in the pad itself.",
      },
    ],
    internalLinks: [
      { href: "/parking-lot-concrete-repair", anchor: "the surrounding parking-lot concrete" },
      { href: "/concrete-replacement", anchor: "full-depth slab replacement" },
      { href: "/curb-repair", anchor: "enclosure curbs and bollard protection" },
      { href: "/resources/commercial-concrete-repair-cost-guide", anchor: "what a pad rebuild typically costs" },
    ],
    related: ["parking-lot-concrete-repair", "concrete-replacement", "bollard-repair-installation", "curb-repair"],
    images: [
      {
        position: "hero",
        filename: "dumpster-pad-replacement-hamilton-county.jpg",
        alt: "Reinforced commercial dumpster pad being replaced at a Hamilton County, Indiana retail center",
        caption: "Full-depth, reinforced pads built for loaded collection trucks.",
      },
      {
        position: "before/after",
        filename: "dumpster-pad-repair-before-after.jpg",
        alt: "Before and after of a cracked, crushed dumpster pad rebuilt in central Indiana",
        caption: "Before/after: a cratered pad rebuilt to carry the real truck loads.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 13. Concrete Slab Leveling / Mudjacking (NEW) — lift vs replace. Method intent.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "concrete-slab-leveling",
    title: "Concrete Slab Leveling",
    short: "Lift settled slabs and sidewalks back to grade — without full replacement.",
    description:
      "Commercial concrete leveling and mudjacking across Hamilton County. We lift settled slabs, sidewalks, and approaches back to grade with mudjacking or polyurethane foam — restoring drainage and removing trip hazards at a fraction of replacement cost.",
    bullets: [
      "Traditional mudjacking (slurry) lifting",
      "Polyurethane foam slab lifting",
      "Trip-hazard and ponding correction by lifting",
      "Void filling and base stabilization",
    ],
    metaTitle: "Commercial Concrete Leveling (Mudjacking) — Hamilton",
    metaDescription:
      "Commercial concrete leveling & mudjacking in Hamilton County, IN — lift settled slabs without full replacement. Fast and low-disruption. Request a quote.",
    h1: "Commercial Concrete Leveling & Mudjacking in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete leveling mudjacking",
    secondaryKeywords: [
      "polyurethane concrete lifting Hamilton County",
      "slab jacking Indianapolis",
      "settled slab leveling commercial",
      "concrete raising Indiana",
    ],
    isNew: true,
    sections: [
      {
        h2: "If the slab is sound, lift it — do not replace it",
        paragraphs: [
          "When a slab has settled but is still in one structurally sound piece, tearing it out and repouring is often the most expensive way to solve a problem that leveling can fix in an afternoon. Leveling — also called slab jacking or mudjacking — raises the settled slab back to grade by filling the void beneath it, restoring drainage and removing the trip hazard without the cost, downtime, and cure time of replacement.",
          "We level commercial slabs, sidewalks, approaches, and pads across Hamilton County, and we are straight about when lifting is the right call versus when a slab is too far gone to save.",
        ],
      },
      {
        h2: "Why slabs settle here in the first place",
        paragraphs: [
          "Central Indiana's clay soils shrink and swell with moisture, and that movement — combined with poorly compacted backfill, eroded base, or water washing fines out from under a slab — leaves voids the slab eventually drops into. Settlement concentrates where water collects: at downspout discharges, along curb lines, at approach slabs, and where utility trenches were backfilled. Lifting the slab without filling and stabilizing that void just invites it to settle again, so we treat the void, not only the surface.",
        ],
      },
      {
        h2: "Mudjacking or polyurethane foam",
        paragraphs: [
          "We offer both lifting methods because each fits different situations:",
        ],
        bullets: [
          "Mudjacking pumps a cementitious slurry beneath the slab — proven, economical, and well suited to heavy slabs",
          "Polyurethane foam injects a lightweight expanding resin — fast-setting, minimal weight added, smaller injection holes, quick return to service",
          "Foam's light weight is an advantage over weak soils; slurry's mass and economy suit large, heavy slabs",
          "Either way, the void is filled and the slab is supported, not just nudged up",
        ],
      },
      {
        h2: "Where leveling works — and where it does not",
        paragraphs: [
          "Leveling is the right tool for a sound slab that has settled as a unit. It is the wrong tool for a slab that has broken into multiple pieces, lost large sections, or deteriorated through spalling and cracking — lifting a broken slab just produces an uneven, broken, lifted slab. We assess the slab honestly: if it can be saved by lifting, that is the low-cost answer; if it cannot, we will tell you replacement is the better spend rather than sell you a lift that will not hold.",
        ],
      },
      {
        h2: "Faster, cheaper, and far less disruptive",
        paragraphs: [
          "The case for leveling is straightforward: it is typically a fraction of replacement cost, leaves no demolition or haul-off, and returns the surface to service quickly — often the same day with polyurethane. For a property manager weighing a trip-hazard correction or a drainage fix against a tight budget, leveling frequently turns a capital-level problem into a maintenance-level one.",
        ],
      },
      {
        h2: "What leveling costs depend on",
        paragraphs: [
          "Leveling pricing is set by the area lifted, how much void has to be filled, the method, and access. Polyurethane foam costs more per hole than mudjacking slurry but uses smaller holes, sets in minutes, and returns the area to service fast; slurry is more economical on large, heavy slabs. The cost almost always lands well below replacing the same slab — which is the entire point — as long as the slab is sound enough to lift.",
          "We line-item the slabs by area and method and are explicit about which are leveling candidates and which are not, because lifting a broken slab wastes your money. The assessment is free, and it tells you plainly whether leveling defers a replacement by years or whether the slab is genuinely past saving. For trip-hazard and drainage fixes on a budget, leveling frequently turns a capital problem into a maintenance one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is concrete leveling actually cheaper than replacing the slab?",
        a: "In most cases, substantially — leveling is commonly a fraction of replacement cost because there is no demolition, haul-off, base rebuild, or new concrete, and no extended cure. The savings only hold if the slab is sound enough to lift; a broken or badly deteriorated slab is not a leveling candidate, and we will tell you when replacement is the better value.",
      },
      {
        q: "Mudjacking or polyurethane foam — which is right for us?",
        a: "Mudjacking uses a cementitious slurry and is economical and well suited to large, heavy slabs. Polyurethane foam is lightweight, sets fast, uses smaller holes, and returns the area to service quickly, which makes it strong over weaker soils and where downtime must be minimal. We recommend based on your slab, soil, and how fast you need it back.",
      },
      {
        q: "How soon can a leveled slab carry traffic again?",
        a: "Polyurethane foam typically allows return to service within hours, since it cures quickly; mudjacking slurry needs a bit longer to set. Either is dramatically faster than replacement, which requires demolition, base work, pouring, and concrete cure before the area can take load.",
      },
      {
        q: "Our slab is both cracked and settled — can it still be leveled?",
        a: "It depends on how badly it is cracked. A slab with a few stable cracks can often be lifted and the cracks then repaired; a slab broken into multiple moving pieces cannot be leveled into a sound surface and is a replacement. We assess the slab's integrity before recommending lifting, because leveling a broken slab just gives you a lifted broken slab.",
      },
    ],
    internalLinks: [
      { href: "/concrete-replacement", anchor: "replacement when a slab is past lifting" },
      { href: "/trip-hazard-removal", anchor: "trip-hazard correction by grinding" },
      { href: "/sidewalk-repair", anchor: "sidewalk panel repair" },
      { href: "/resources/concrete-repair-vs-replacement", anchor: "lift, repair, or replace" },
    ],
    related: ["concrete-replacement", "trip-hazard-removal", "sidewalk-repair", "concrete-crack-repair"],
    images: [
      {
        position: "hero",
        filename: "concrete-slab-leveling-hamilton-county.jpg",
        alt: "Polyurethane foam lifting a settled commercial concrete slab in Hamilton County, Indiana",
        caption: "Lifting settled slabs back to grade — mudjacking or polyurethane foam.",
      },
      {
        position: "before/after",
        filename: "slab-leveling-before-after.jpg",
        alt: "Before and after of a settled commercial walkway lifted level in central Indiana",
        caption: "Before/after: a settled, ponding slab raised to grade without replacement.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 14. Concrete Spalling & Surface Restoration (NEW) — surface defect intent.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "concrete-spalling-repair",
    title: "Spalling & Surface Restoration",
    short: "Repair freeze-thaw and de-icer scaling before it eats the slab.",
    description:
      "Commercial concrete spalling and surface restoration across Hamilton County. We repair scaled, flaking, and pop-out-damaged surfaces, then address the freeze-thaw and de-icer causes so the repaired surface lasts.",
    bullets: [
      "Spall, scale, and pop-out repair",
      "Surface restoration and overlay",
      "Cause control — sealing and drainage",
      "Entrances, walkways, and structure decks",
    ],
    metaTitle: "Concrete Spalling & Surface Repair — Hamilton County",
    metaDescription:
      "Commercial concrete spalling & surface repair in Hamilton County, IN — restore freeze-thaw and de-icer scaling before it spreads. Request an assessment.",
    h1: "Commercial Concrete Spalling & Surface Restoration in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete spalling repair",
    secondaryKeywords: [
      "concrete surface restoration Hamilton County",
      "freeze thaw scaling repair Indianapolis",
      "de-icer spalling repair commercial",
      "concrete resurfacing Indiana",
    ],
    isNew: true,
    sections: [
      {
        h2: "When the top of the slab starts letting go",
        paragraphs: [
          "Spalling and scaling are what it looks like when the surface of the concrete fails — flaking, peeling, and breaking away to expose the aggregate underneath. It is one of the most common conditions on central-Indiana commercial property, and it is progressive: once the surface skin is gone, water and salt reach deeper, and what was a cosmetic blemish at a retail entrance becomes a rough, deteriorating, claim-prone surface.",
          "We restore spalled and scaled commercial surfaces across Hamilton County and, just as importantly, address what caused them so the repair is not eaten away the following winter.",
        ],
      },
      {
        h2: "Why surfaces fail here: freeze-thaw plus chemistry",
        paragraphs: [
          "The central-Indiana surface story is a combination. Dozens of freeze-thaw cycles a winter drive water into the surface pores, freeze it, and pop the surface apart. De-icing salts accelerate it chemically and by increasing how often the surface cycles through freezing. And where the original concrete was finished poorly — overworked, sealed wrong, or placed without adequate air entrainment — the surface had little resistance to begin with. Read together, those tell us whether a surface can be restored or is destined to keep scaling.",
        ],
      },
      {
        h2: "Repair, resurface, or replace",
        paragraphs: [
          "Spalling is a spectrum, and the right answer depends on how deep it goes:",
        ],
        bullets: [
          "Shallow scaling and pop-outs — patch and restore the affected areas",
          "Widespread surface loss on a sound slab — a bonded overlay or resurfacing to give a new wearing surface",
          "Spalling that has reached reinforcement or undermined the slab — partial or full replacement",
          "Honest triage so you are not overlaying a slab that needs replacing, or replacing one that only needs resurfacing",
        ],
      },
      {
        h2: "Fix the cause, not just the surface",
        paragraphs: [
          "Restoring a surface without addressing why it spalled is a short-term repair. Where it applies, we pair the restoration with cause control: a quality penetrating sealer to slow water and chloride intrusion, drainage correction so meltwater is not sitting on the surface, and guidance on de-icing practice so aggressive chlorides are not poured onto vulnerable concrete every storm. That is the difference between a surface that holds and one that re-scales.",
        ],
      },
      {
        h2: "Where it matters most",
        paragraphs: [
          "Spalling shows up first and worst exactly where it is most visible and most consequential — building entrances, plaza and walkway surfaces, parking-structure decks, and the salt-soaked aprons by doors and drives. Those are the surfaces that shape how a property is perceived and where rough, broken concrete turns into a slip or trip complaint, so they are where we focus the restoration.",
        ],
      },
      {
        h2: "Scoping a surface restoration",
        paragraphs: [
          "Spalling pricing depends on area, how deep the surface loss goes, and whether the answer is patching, a bonded overlay, or partial replacement. Shallow scaling is inexpensive to restore; widespread surface loss needing an overlay, or spalling that has reached reinforcement, costs more because it is a bigger or deeper repair. Adding cause control — sealing and drainage correction — is a small line that protects the larger one.",
          "The proposal line-items the surfaces by treatment so you can fund the visible, high-traffic entrances and walkways first and schedule the rest. We are candid about whether a surface is a restoration candidate or genuinely past it, so you are not overlaying a slab that needs replacing. The assessment is free, and it includes the sealing-and-drainage recommendations that keep a restored surface from re-scaling next winter.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between spalling, scaling, and pop-outs?",
        a: "They are related surface failures. Scaling is the flaking and peeling of the top surface, usually from freeze-thaw and de-icers. Spalling is larger fragments breaking away, often deeper and sometimes over corroding reinforcement. Pop-outs are small conical craters where a bit of aggregate near the surface expanded and broke free. We identify which you have because the depth determines whether it is a patch, an overlay, or a replacement.",
      },
      {
        q: "Will a surface repair on spalled concrete last, or just flake off again?",
        a: "It lasts if two things are true: the slab beneath is sound, and the cause is addressed. A bonded overlay or patch on a solid slab, paired with sealing and drainage correction, gives a durable new wearing surface. Skipping the cause — leaving water ponding and salt pounding the surface — is what makes a restoration flake off, so we treat both.",
      },
      {
        q: "Can sealing keep our concrete from spalling next winter?",
        a: "A quality penetrating sealer meaningfully slows the water and chloride intrusion that drive freeze-thaw spalling, especially on newer or restored surfaces, and is one of the most cost-effective protections available. It is not magic on already-failing concrete, but as part of restoring a surface and on sound concrete it materially extends life against Indiana winters.",
      },
      {
        q: "Is spalled concrete a structural problem or just cosmetic?",
        a: "It starts cosmetic but does not stay that way. Once the surface is open, water and salt reach deeper and, on structural slabs and decks, can eventually reach and corrode reinforcement — which is a structural concern. Addressing spalling while it is still shallow keeps it from progressing into a far more expensive repair.",
      },
    ],
    internalLinks: [
      { href: "/concrete-crack-repair", anchor: "crack repair for the same slab" },
      { href: "/warehouse-floor-repair", anchor: "interior floor surface restoration" },
      { href: "/sidewalk-repair", anchor: "walkway and entrance repair" },
      { href: "/resources/common-causes-of-concrete-failure", anchor: "how freeze-thaw and salt damage concrete" },
    ],
    related: ["concrete-crack-repair", "sidewalk-repair", "warehouse-floor-repair", "concrete-replacement"],
    images: [
      {
        position: "hero",
        filename: "concrete-spalling-repair-hamilton-county.jpg",
        alt: "Restoration of a spalled commercial concrete entrance in Hamilton County, Indiana",
        caption: "Surface restoration paired with cause control so the repair lasts.",
      },
      {
        position: "before/after",
        filename: "concrete-spalling-before-after.jpg",
        alt: "Before and after of a scaled, spalled concrete walkway resurfaced in central Indiana",
        caption: "Before/after: a scaled entrance restored to a sound wearing surface.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 15. Bollard Repair & Installation (NEW) — safety/security adjacency.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "bollard-repair-installation",
    title: "Bollard Repair & Installation",
    short: "Protect storefronts, equipment, and pedestrians with properly set bollards.",
    description:
      "Commercial bollard repair and installation across Hamilton County. We reset, replace, and install concrete-footed safety bollards that protect storefronts, utilities, dock corners, and pedestrians — set deep enough to actually do their job.",
    bullets: [
      "Safety bollard installation with concrete footings",
      "Knocked-over and leaning bollard reset",
      "Rusted pipe bollard replacement",
      "Storefront, drive-through, and utility protection",
    ],
    metaTitle: "Commercial Bollard Repair & Installation — Hamilton Co",
    metaDescription:
      "Commercial bollard repair & installation across Hamilton County, IN — protect storefronts, equipment & pedestrians with properly footed bollards. Request a quote.",
    h1: "Commercial Bollard Repair & Installation in Hamilton County, Indiana",
    primaryKeyword: "commercial bollard repair and installation",
    secondaryKeywords: [
      "storefront bollard installation Hamilton County",
      "safety bollard concrete repair",
      "pipe bollard replacement Indianapolis",
      "concrete bollard footing Indiana",
    ],
    isNew: true,
    sections: [
      {
        h2: "A missing bollard is a claim and a repair bill waiting to happen",
        paragraphs: [
          "Bollards are easy to overlook until a vehicle finds what they were protecting. A car through a storefront window, a delivery truck into a gas meter, a distracted driver into the pedestrian path at an entrance — these are exactly the events properly placed bollards prevent, and they are the events that generate the biggest, most disruptive claims a property faces. Bollards are cheap insurance against expensive incidents.",
          "We repair, reset, and install bollards on commercial properties across Hamilton County, with the part that actually matters done right: the concrete footing that lets a bollard stop a vehicle instead of folding over.",
        ],
      },
      {
        h2: "Where bollards earn their keep",
        paragraphs: [
          "The right locations are predictable once you look at a property through a risk lens:",
        ],
        bullets: [
          "Storefront glass and entrances facing parking — preventing vehicle-into-building incidents",
          "Drive-through lanes, order points, and pickup zones",
          "Gas meters, electrical equipment, fire risers, and utilities along drive lanes",
          "Dock corners, building columns, and equipment exposed to truck traffic",
          "Pedestrian gathering points where vehicles and people meet",
        ],
      },
      {
        h2: "Set right, or do not bother",
        paragraphs: [
          "A bollard is only as good as its footing. A post grouted into a shallow hole or bolted to the surface looks like protection but shears or tips at the first real impact. We install bollards with concrete footings deep and wide enough to resist vehicle impact, either by core-drilling and setting into existing slab with proper embedment or by excavating and pouring a new footing. The visible pipe is the small part; the concrete below grade is what does the work.",
        ],
      },
      {
        h2: "Repair, reset, or replace",
        paragraphs: [
          "Existing bollards fail in familiar ways, and each has a right answer. A bollard knocked loose or leaning from impact needs its footing assessed and reset — often the post is fine but the concrete failed. A pipe rusted through at the base needs replacement. A footing that cracked the surrounding slab needs the concrete repaired along with the bollard. We sort which is which so you are not repainting a bollard that no longer has a sound footing under it.",
        ],
      },
      {
        h2: "Protection that still looks intentional",
        paragraphs: [
          "Bollards are visible, so they should look deliberate rather than industrial-by-accident. We finish installations cleanly — consistent spacing and height, optional sleeves or covers, and paint that matches a property's standard — so the protection reads as a well-run property rather than a patchwork of mismatched posts.",
        ],
      },
      {
        h2: "What a bollard scope depends on",
        paragraphs: [
          "Bollard pricing is driven by the number of bollards, whether each is a new footing or a core-drill into sound slab, the footing depth the protection requires, and finish. Resetting a few impact-damaged posts is minor; installing a run of properly footed bollards to protect a storefront or a utility line is a larger scope because the below-grade footing — the part that actually stops a vehicle — is the real work. Covers, sleeves, and paint matching are modest add-ons.",
          "We line-item the bollards by location and method so you can protect the highest-risk points — storefront glass, gas meters, dock corners — first and phase the rest. The assessment is free and is essentially a quick risk walk of the property: where a vehicle could reach something it should not. We size each footing to the protection needed rather than to whatever is fastest to set.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do our bollards keep getting knocked loose?",
        a: "Almost always because the footing is too shallow or the bollard was surface-mounted rather than embedded in adequate concrete. A bollard that tips or shears on impact never had the below-grade footing to resist it. Resetting them with proper concrete footings — deep and wide enough for real impact — is what stops the recurring damage.",
      },
      {
        q: "How deep does a bollard footing need to be to actually stop a vehicle?",
        a: "Deep and wide enough that the concrete footing, not just the pipe, resists the impact — the exact dimensions depend on the threat and the bollard, but shallow-set posts are the most common failure we see. We size the footing to the protection you need rather than to whatever hole is quickest to dig.",
      },
      {
        q: "Can you add bollards to an existing concrete slab without tearing it up?",
        a: "Often yes — we can core-drill the existing slab and set bollards with proper embedment where the slab is thick and sound enough to provide the footing. Where it is not, we excavate and pour a dedicated footing. We assess the slab on-site and choose the method that gives real impact resistance.",
      },
      {
        q: "Do bollards in front of our storefront actually help with liability?",
        a: "They directly reduce the risk of vehicle-into-building and vehicle-into-pedestrian incidents at the exact points where they are most likely, which is both a safety and a liability benefit. Documented protective measures at known risk points also demonstrate a property is being managed responsibly — worth discussing specifics with your insurer.",
      },
    ],
    internalLinks: [
      { href: "/parking-lot-concrete-repair", anchor: "the parking-lot concrete around them" },
      { href: "/dumpster-pad-repair", anchor: "enclosure and dock-corner protection" },
      { href: "/curb-repair", anchor: "curb and island protection" },
      { href: "/loading-dock-repair", anchor: "dock-corner and column protection" },
    ],
    related: ["parking-lot-concrete-repair", "curb-repair", "dumpster-pad-repair", "loading-dock-repair"],
    images: [
      {
        position: "hero",
        filename: "bollard-installation-hamilton-county-storefront.jpg",
        alt: "Concrete-footed safety bollards installed in front of a Hamilton County, Indiana storefront",
        caption: "Bollards set in real footings — protection that holds on impact.",
      },
      {
        position: "before/after",
        filename: "bollard-repair-before-after.jpg",
        alt: "Before and after of a knocked-over storefront bollard reset in central Indiana",
        caption: "Before/after: a sheared bollard reset in a proper concrete footing.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 16. Concrete Ramp Repair (NEW) — VEHICULAR/loading ramps only. ADA pedestrian
  //     ramps stay on /ada-compliance-repairs (cannibalization guardrail).
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "concrete-ramp-repair",
    title: "Concrete Ramp Repair",
    short: "Drive, dock, and parking-structure ramp repair built for load and traction.",
    description:
      "Commercial concrete ramp repair across Hamilton County — drive ramps, dock ramps, and parking-structure ramps. We restore load capacity, traction, and drainage on the surfaces that take weight and weather at the worst angle. (ADA pedestrian ramps: see our ADA repairs.)",
    bullets: [
      "Drive and approach ramp repair",
      "Dock and loading ramp restoration",
      "Parking-structure ramp spall and crack repair",
      "Traction finishing and drainage correction",
    ],
    metaTitle: "Commercial Concrete Ramp Repair — Hamilton County",
    metaDescription:
      "Commercial vehicular & loading ramp concrete repair across Hamilton County, IN — drive, dock & garage ramps restored for heavy traffic. Request a quote.",
    h1: "Commercial Concrete Ramp Repair in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete ramp repair",
    secondaryKeywords: [
      "loading ramp concrete repair Hamilton County",
      "parking garage ramp repair Indianapolis",
      "vehicular concrete ramp repair",
      "dock ramp repair Indiana",
    ],
    isNew: true,
    sections: [
      {
        h2: "Ramps take load and weather at the worst possible angle",
        paragraphs: [
          "A ramp is concrete asked to carry full traffic loads while tilted, which stacks every failure mode at once: vehicles brake and accelerate on it, water and de-icer run down and pool at the bottom, and the sloped surface wears its traction smooth right where vehicles need grip most. When a ramp deteriorates, it is not just unsightly — it becomes a traction and drainage hazard on a surface where a slip or a stuck vehicle has real consequences.",
          "We repair vehicular and loading ramps across Hamilton County: drive and approach ramps, dock ramps, parking-structure ramps, and equipment ramps. (Pedestrian ADA curb and entrance ramps are governed by accessibility standards and are handled on our ADA repairs page — we will point you there if that is what you need.)",
        ],
      },
      {
        h2: "The ramps we restore",
        paragraphs: [
          "Different ramps fail in different ways, and we cover the vehicular range:",
        ],
        bullets: [
          "Drive and approach ramps at entrances, grade changes, and below-grade access",
          "Dock and loading ramps that take trucks, trailers, and heavy lift traffic",
          "Parking-structure ramps spalling from traffic, water, and salt carried up by vehicles",
          "Equipment and trailer ramps subject to concentrated point loads",
        ],
      },
      {
        h2: "Why ramps fail faster than flat slabs",
        paragraphs: [
          "Gravity is the problem. Water and dissolved de-icer sheet down the slope and concentrate at the base of the ramp, so that is where you see the worst spalling, cracking, and base washout. The braking and accelerating forces of vehicles put more stress on the surface than flat driving does. And on parking structures, vehicles carry salt-laden slush up the ramps and deposit it exactly on the sloped decks. We address the base of the ramp and the drainage there, because fixing the surface without fixing where the water goes just restarts the cycle.",
        ],
      },
      {
        h2: "Traction is a safety requirement, not a finish preference",
        paragraphs: [
          "A smooth ramp is a hazard. As the surface wears, vehicles lose grip on the slope — a problem that turns dangerous in an Indiana winter. We finish ramp repairs with appropriate traction, whether a broomed texture, grooving, or a non-slip surface treatment matched to the slope and traffic, so the restored ramp is safe to climb and descend loaded and in bad weather.",
        ],
      },
      {
        h2: "Drainage and base, not just the wearing surface",
        paragraphs: [
          "Because so much ramp failure is water-driven, we treat drainage as part of the repair. That means correcting how water leaves the base of the ramp, addressing the washed-out or settled base before resurfacing, and tying the ramp cleanly into the flat surfaces at top and bottom so there is no lip or ponding at the transitions. The objective is a ramp that sheds water and carries load, not one that looks new for a season and then fails at the bottom again.",
        ],
      },
      {
        h2: "What sets the cost of a ramp repair",
        paragraphs: [
          "Ramp pricing tracks the area, the depth of the spalling or cracking, how much base and drainage correction the bottom of the ramp needs, and the traction finish specified. Resurfacing a sound ramp deck is modest; rebuilding a washed-out base at the foot of a drive ramp, or repairing structure-ramp spalling that has reached reinforcement, is a larger scope. Traction treatment is a small but non-negotiable line on any sloped surface.",
          "The proposal separates the wearing-surface repair from the base-and-drainage work so you can see where the durable fix really is — usually at the bottom where water concentrates. The assessment is free, and it confirms whether you have a vehicular ramp we handle here or a pedestrian ADA ramp that belongs on the ADA scope. Either way you get a clear, line-itemed path rather than a single lump number.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you repair pedestrian ADA ramps, or only vehicle ramps?",
        a: "This service covers vehicular and loading ramps — drive ramps, dock ramps, and parking-structure ramps. Pedestrian curb and entrance ramps are governed by ADA accessibility standards for slope, cross-slope, and detectable warnings, and we handle those on our ADA compliance repairs page. Tell us which you have and we will route the work correctly.",
      },
      {
        q: "Why does the bottom of our drive ramp keep cracking and holding water?",
        a: "Because water and de-icer run down the ramp and concentrate at the base, eroding the sub-base and pooling where the slope meets the flat. That undermines the slab and drives the cracking you keep seeing. The lasting fix corrects the drainage and the base at the bottom of the ramp, not just the visible surface — otherwise it returns.",
      },
      {
        q: "Can you improve traction on an existing steep concrete ramp?",
        a: "Yes. We can restore or add traction with grooving, a broomed texture, or a non-slip surface treatment appropriate to the ramp's slope and traffic. Worn-smooth ramps are a real winter hazard here, and improving traction is often part of why a ramp needs attention in the first place.",
      },
      {
        q: "Our parking-structure ramp is spalling — can it be repaired in place?",
        a: "Usually, yes. Structure ramps spall heavily because vehicles carry salt and slush onto them, but the spalling can often be repaired and the surface restored in place, paired with sealing to slow the chloride intrusion that caused it. Where spalling has reached reinforcement, we assess whether deeper structural repair is needed and advise accordingly.",
      },
    ],
    internalLinks: [
      { href: "/loading-dock-repair", anchor: "the loading dock the ramp serves" },
      { href: "/ada-compliance-repairs", anchor: "ADA pedestrian ramp compliance" },
      { href: "/concrete-spalling-repair", anchor: "spalling and surface restoration" },
      { href: "/concrete-replacement", anchor: "ramp replacement when repair is past it" },
    ],
    related: ["loading-dock-repair", "ada-compliance-repairs", "concrete-spalling-repair", "concrete-replacement"],
    images: [
      {
        position: "hero",
        filename: "concrete-ramp-repair-hamilton-county.jpg",
        alt: "Repaired commercial drive ramp with restored traction at a Hamilton County, Indiana property",
        caption: "Vehicular ramp repair restoring load, traction, and drainage.",
      },
      {
        position: "before/after",
        filename: "loading-ramp-repair-before-after.jpg",
        alt: "Before and after of a spalled loading ramp restored in central Indiana",
        caption: "Before/after: a spalled, ponding ramp base rebuilt and re-textured.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 17. Commercial Concrete Steps & Stoop Repair (NEW) — entrance stairs/stoops.
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "commercial-concrete-steps-repair",
    title: "Concrete Steps & Stoop Repair",
    short: "Restore safe, presentable entrance stairs and stoops at commercial properties.",
    description:
      "Commercial concrete steps and stoop repair across Hamilton County. We restore crumbling treads, settled stoops, and broken nosings at retail, office, and medical entrances — keeping a high-traffic, high-liability surface safe and presentable.",
    bullets: [
      "Tread, riser, and nosing restoration",
      "Settled stoop lifting or rebuild",
      "Stoop-to-building separation repair",
      "Handrail-area and slip-resistance work",
    ],
    metaTitle: "Commercial Concrete Steps & Stoop Repair — Hamilton",
    metaDescription:
      "Commercial concrete steps & stoop repair across Hamilton County, IN — restore safe, presentable entrance stairs at retail, office & medical sites. Request a visit.",
    h1: "Commercial Concrete Steps & Stoop Repair in Hamilton County, Indiana",
    primaryKeyword: "commercial concrete steps and stoop repair",
    secondaryKeywords: [
      "commercial entry steps repair Hamilton County",
      "concrete stoop replacement Indianapolis",
      "retail entrance step repair Indiana",
      "commercial stair repair",
    ],
    isNew: true,
    sections: [
      {
        h2: "Entrance steps are the highest-liability square footage you own",
        paragraphs: [
          "Concrete steps and stoops sit at the front door, take concentrated foot traffic, and put people at a height — which makes them the spot where deterioration most quickly becomes a fall and a claim. A crumbling tread edge, an uneven riser, or a settled stoop at a retail or medical entrance is not a cosmetic issue; it is a hazard directly in the path of every customer, patient, and tenant who enters.",
          "We restore commercial concrete steps and stoops across Hamilton County, focused on the entrances where traffic and exposure are highest and first impressions are made.",
        ],
      },
      {
        h2: "What actually fails on steps and stoops",
        paragraphs: [
          "Step failure follows a familiar pattern, and the front edge takes the worst of it:",
        ],
        bullets: [
          "Spalled, crumbling tread surfaces and broken nosings (the front edge that carries every footfall)",
          "Settled or tilted stoops that have dropped away from level",
          "Separation where the stoop has pulled away from the building",
          "Cracked stringers and side walls on built-up stairs",
          "Loose or failing handrail anchorage where the concrete around it has deteriorated",
        ],
      },
      {
        h2: "Restore or rebuild — matched to the damage",
        paragraphs: [
          "Not every set of bad steps needs demolition. Where the structure is sound and the damage is surface-level, we restore treads, rebuild nosings, and patch risers to a safe, uniform finish. Where a stoop has settled as a unit, lifting it back to level can be the efficient fix. Where steps are structurally compromised, separating from the building, or too deteriorated to restore, a full rebuild is the right call — and we will tell you which situation you are in.",
        ],
      },
      {
        h2: "Safety and code at a regulated surface",
        paragraphs: [
          "Steps are governed by safety expectations that casual patching ignores: risers and treads should be uniform so people do not catch a foot on an odd step, nosings need to be sound and visible, handrails need concrete solid enough to anchor to, and the surface needs slip resistance — especially on Indiana's wet and icy days. We restore steps with those requirements in mind. Where an entrance also involves accessibility — a ramp, a landing, or transitions alongside the steps — we coordinate that with the applicable ADA work so the whole entrance is addressed, not just the stairs.",
        ],
      },
      {
        h2: "The front door sets the tone for the asset",
        paragraphs: [
          "Entrance steps are the most-seen concrete on the property — the surface a prospective tenant, customer, or patient encounters before anything else. Crisp, sound, well-finished steps signal a maintained, professionally run property; crumbling, patched, mismatched steps say the opposite before anyone reaches the door. Step restoration is a small scope with an outsized effect on how an asset presents.",
        ],
      },
      {
        h2: "What a step restoration scope covers",
        paragraphs: [
          "Step pricing depends on the number of treads and risers, whether the answer is surface restoration or a structural rebuild, the condition of the stoop and its base, and handrail and finish requirements. Restoring spalled treads and nosings on sound stairs is modest; rebuilding a settled, separating stoop and its base is a larger scope because the structure and the cause both have to be addressed. Matching the finish to an existing entrance adds a little care, and cost, to the work.",
          "We line-item the steps and stoop by element so you can fund the active safety issues — broken nosings, uneven risers, a separating stoop — first. The assessment is free, and it tells you honestly whether resurfacing will hold or whether the structure underneath calls for a rebuild. Where the entrance also involves a ramp or landing, we coordinate it with the applicable ADA work so the whole approach is handled together.",
        ],
      },
    ],
    faqs: [
      {
        q: "The treads on our entrance steps are crumbling — can they be resurfaced instead of replaced?",
        a: "Often, yes. If the steps are structurally sound and the damage is to the surface and nosings, we can restore the treads and rebuild the front edges to a safe, uniform finish rather than demolishing the stairs. We assess whether the structure underneath is solid first, because resurfacing over compromised steps is not a real fix.",
      },
      {
        q: "Our stoop is pulling away from the building — is that serious?",
        a: "It can be. Separation usually means the stoop has settled because its base or backfill gave way, which both creates a trip lip at the threshold and can let water against the building. It is worth addressing promptly — depending on the cause we either lift and stabilize the stoop or rebuild it, and correct the base so it does not drop again.",
      },
      {
        q: "Do repaired commercial steps need to meet specific riser and tread requirements?",
        a: "Commercial stairs are expected to have uniform risers and treads, sound nosings, adequate handrail anchorage, and slip resistance — irregular steps are a leading trip cause and a code concern. We restore steps to a safe, uniform configuration with those requirements in mind, and coordinate any accessibility elements at the entrance with the applicable ADA work.",
      },
      {
        q: "Can you match the new step concrete to our existing entrance?",
        a: "We work to blend repairs into the existing entrance — matching finish and profile as closely as concrete restoration allows — so the result looks intentional rather than patched. Where steps are being rebuilt, we form them to the existing layout and finish so they read as part of the original entrance.",
      },
    ],
    internalLinks: [
      { href: "/concrete-spalling-repair", anchor: "tread spalling and surface restoration" },
      { href: "/ada-compliance-repairs", anchor: "accessible ramps and landings at the entrance" },
      { href: "/sidewalk-repair", anchor: "the walkway leading to the steps" },
      { href: "/concrete-slab-leveling", anchor: "lifting a settled stoop" },
    ],
    related: ["sidewalk-repair", "ada-compliance-repairs", "concrete-spalling-repair", "concrete-slab-leveling"],
    images: [
      {
        position: "hero",
        filename: "concrete-steps-stoop-repair-hamilton-county.jpg",
        alt: "Restored commercial concrete entrance steps at a Hamilton County, Indiana office building",
        caption: "Tread, nosing, and stoop restoration at high-traffic entrances.",
      },
      {
        position: "before/after",
        filename: "concrete-steps-repair-before-after.jpg",
        alt: "Before and after of crumbling commercial entrance steps restored in central Indiana",
        caption: "Before/after: spalled treads and nosings restored to a safe, uniform finish.",
      },
    ],
  },
];
