import type { RichArticle } from "./content-types";

// The 7 Resource Center articles — informational assets that link DOWN to the
// money pages. No fabricated dollar figures are stated as fact (see Cost Guide:
// relative framing + a REQUIRES HUMAN REVIEW note for inserting verified local
// pricing). FAQ questions are unique across the site.
export const ARTICLES: RichArticle[] = [
  // 1 ── Cost Guide (priority asset) ───────────────────────────────────────────
  {
    slug: "commercial-concrete-repair-cost-guide",
    path: "/resources/commercial-concrete-repair-cost-guide",
    title: "Commercial Concrete Repair Cost Guide",
    metaTitle: "Commercial Concrete Repair Cost Guide — HCCR",
    metaDescription:
      "What drives commercial concrete repair cost — how it's priced, repair vs. replacement economics, and how to read a line-item proposal. A guide for managers.",
    h1: "Commercial Concrete Repair Cost Guide for Property Managers",
    primaryKeyword: "commercial concrete repair cost",
    secondaryKeywords: [
      "concrete repair cost per square foot commercial",
      "parking lot concrete repair cost",
      "how much does commercial concrete repair cost",
    ],
    searchIntent:
      "Commercial investigation (T3): budget-holders scoping cost before requesting quotes. Supports every service page.",
    excerpt:
      "There is no single price for commercial concrete repair — but there is a clear logic to how it's priced. Here is how to estimate, compare quotes, and budget.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "Why there is no single price for commercial concrete repair",
        paragraphs: [
          "Anyone who quotes commercial concrete repair sight-unseen is guessing. The same square footage can vary several-fold in price depending on what is actually wrong, what is under the slab, and how the work has to be staged around your operation. A surface that needs grinding costs a fraction of one that needs full-depth replacement with base correction — even though they look similar from across the lot.",
          "This guide will not hand you a magic per-square-foot number, because that number would be misleading. What it will do is show you the cost drivers, the pricing logic, and how to read a proposal — so you can budget intelligently and tell a fair quote from a bad one.",
        ],
      },
      {
        h2: "How commercial concrete repair is actually priced",
        paragraphs: [
          "Commercial concrete is generally priced by measured quantity and scope, not by a flat rate. Slab and pavement work is typically priced by the square foot; curb and joint work by the linear foot; and discrete items — dock pits, dumpster pads, bollards, steps — as defined line items. On top of the quantities sit the project-level costs:",
        ],
        bullets: [
          "Mobilization — getting crews and equipment to the site (a fixed cost that makes tiny one-off scopes expensive per unit)",
          "Access and staging — how easy the work area is to reach and protect",
          "Scheduling — after-hours, weekend, and phased work to keep you open carries a premium",
          "Demolition and disposal — removing and hauling failed concrete",
          "Base and drainage correction — the hidden cost that separates a lasting repair from a quick patch",
          "Finish and matching — higher for visible, finish-sensitive surfaces",
        ],
      },
      {
        h2: "The cost drivers that move your number the most",
        paragraphs: [
          "If you want to predict roughly where a project lands, look at these first. Square footage and repair depth set the base. Base condition is the wildcard — a stable sub-base is cheap to build on; a failed, saturated one adds excavation and rebuild. Access and phasing can swing a number substantially: the same repair costs far more threaded around live tenant traffic on weekend nights than done in one daytime pass on an empty lot. And urgency drives material choice — rapid-set products that return a surface to service in hours cost more than standard mixes.",
        ],
      },
      {
        h2: "Repair, level, or replace — the cost hierarchy",
        paragraphs: [
          "The single biggest lever on cost is which intervention the condition actually requires. From least to most expensive, broadly:",
        ],
        bullets: [
          "Trip-hazard grinding — the cheapest fix; no demolition or cure",
          "Crack and joint repair — targeted, material-driven",
          "Surface (spalling) restoration — patch or overlay on a sound slab",
          "Slab leveling / mudjacking — lifts a sound settled slab for a fraction of replacement",
          "Section repair / panel replacement — full-depth, localized",
          "Full removal and replacement — the most expensive, reserved for slabs past saving",
        ],
      },
      {
        h2: "Illustrative ranges (read the caveat first)",
        paragraphs: [
          "We have deliberately not printed dollar figures here. Local material, labor, and disposal pricing changes, and a published number that is wrong for your project does you more harm than good. The honest move is to base a budget on a real, measured proposal.",
          "REQUIRES HUMAN REVIEW: if you want indicative ranges on this page, insert verified current figures for the Hamilton County / Indianapolis market (ideally from your own recent project history), clearly labeled as general ranges that vary by project — never as a quote.",
        ],
      },
      {
        h2: "How to read a line-item proposal",
        paragraphs: [
          "A good commercial concrete proposal is itemized by area and scope so you can see what each dollar buys, separate the must-do safety and ADA items from work that can wait, and approve in phases if the budget requires it. Be wary of a single lump sum with no breakdown — it hides where the money goes and makes phasing impossible. The base preparation and jointing scope should be spelled out, because that is exactly what cheap bids omit and what determines whether the repair lasts.",
        ],
      },
      {
        h2: "Budgeting across a property — and a portfolio",
        paragraphs: [
          "Concrete is well suited to phased capital planning. The defensible approach is to inspect, triage by safety and lifecycle, fund the liability items now, and schedule the rest across budget cycles. For owners and managers running several properties, a consistent inspection cadence and proposal format turns concrete from a series of surprises into a predictable reserve line — and gives a board or owner the documentation to approve it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does commercial concrete repair cost per square foot?",
        a: "It varies too widely to quote responsibly without seeing the site — the same square footage can differ several-fold depending on repair depth, base condition, access, and scheduling. Slab work is generally priced per square foot, but the per-foot number only means something once those drivers are known. The reliable path is a free, measured assessment and a line-item proposal.",
      },
      {
        q: "Is it cheaper to repair or to replace commercial concrete?",
        a: "Repair is almost always cheaper in the short term and is the right call when the base is stable and damage is localized. Replacement becomes the lower lifetime cost only when a slab has lost its base or is failing across a wide area, because repeated patching of it eventually costs more than replacing it once. Leveling often sits between the two, lifting a sound settled slab for a fraction of replacement.",
      },
      {
        q: "Why do concrete repair quotes vary so much between contractors?",
        a: "Usually because they are not quoting the same scope. A low bid frequently skips base correction, proper jointing, or disposal — the unglamorous work that makes a repair last — so it is cheaper now and fails sooner. Comparing quotes line by line, especially the base preparation, is how you tell a real scope from a patch priced to win.",
      },
      {
        q: "How can we budget concrete repair across several properties at once?",
        a: "Inspect them on a consistent cadence, triage every scope by safety and lifecycle, fund the liability items first, and phase the rest across budget cycles using one consistent proposal format. That turns concrete into a predictable reserve line across the portfolio and gives ownership the documentation to approve spending.",
      },
    ],
    internalLinks: [
      { href: "/resources/concrete-repair-vs-replacement", anchor: "the repair-versus-replacement decision in depth" },
      { href: "/concrete-replacement", anchor: "what full replacement involves" },
      { href: "/concrete-slab-leveling", anchor: "leveling as a lower-cost alternative" },
      { href: "/commercial-concrete-repair", anchor: "our commercial repair services" },
      { href: "/trip-hazard-removal", anchor: "the lowest-cost liability fix" },
    ],
    cta: "Skip the guesswork — request a free on-site assessment and get a real line-item proposal you can budget against.",
    images: [
      {
        position: "hero",
        filename: "commercial-concrete-repair-cost-guide.jpg",
        alt: "Property manager reviewing a commercial concrete repair line-item proposal in Hamilton County, Indiana",
        caption: "How commercial concrete repair is priced — and how to read a proposal.",
      },
    ],
  },

  // 2 ── Repair vs Replacement ─────────────────────────────────────────────────
  {
    slug: "concrete-repair-vs-replacement",
    path: "/resources/concrete-repair-vs-replacement",
    title: "Concrete Repair vs. Replacement",
    metaTitle: "Concrete Repair vs. Replacement — Decision Guide",
    metaDescription:
      "When to repair commercial concrete and when to replace it — the base condition, damage spread, and lifetime-cost tests that decide. A guide for managers.",
    h1: "Commercial Concrete Repair vs. Replacement: How to Decide",
    primaryKeyword: "concrete repair vs replacement",
    secondaryKeywords: [
      "when to replace vs repair concrete",
      "repair or replace commercial concrete",
      "cost of repair vs replacement concrete",
    ],
    searchIntent:
      "Commercial investigation (T3): decision-stage. Supports /concrete-replacement and /commercial-concrete-repair.",
    excerpt:
      "Replacement is the most expensive line on any concrete budget — and not always the right one. Here is the framework we use to decide, and how to apply it.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "The question that saves the most money",
        paragraphs: [
          "Whether to repair or replace is the single most consequential call on a concrete budget, because the gap between the two is enormous. Repair the wrong slab and you will be back next year; replace a slab that only needed repair and you have spent several times what you had to. The decision is not about how bad the surface looks — it is about what is underneath and how far the damage has spread.",
        ],
      },
      {
        h2: "The three tests we apply",
        paragraphs: [
          "We make the call against three questions, in order:",
        ],
        bullets: [
          "Is the base stable? A sound, well-drained sub-base supports repair. A failed, saturated, or eroded base argues for replacement, because anything placed on it will move.",
          "Is the damage localized or widespread? Isolated cracks, spalls, and panels are repairs. Failure across a wide area is a replacement.",
          "How many times has it already been repaired? A surface you have patched repeatedly is telling you the cause was never addressed — and repeated patching usually costs more over a few years than replacing once.",
        ],
      },
      {
        h2: "When repair is clearly right",
        paragraphs: [
          "Repair is the correct, cost-effective answer for the majority of commercial concrete problems: localized cracks over a stable base, surface spalling on a sound slab, a handful of settled or heaved panels, spalled joints, and trip hazards. In these cases targeted repair restores safety and appearance for a fraction of replacement cost and defers the capital expense by years. There is also a middle option people forget: slab leveling lifts a sound but settled slab back to grade for far less than tearing it out.",
        ],
      },
      {
        h2: "When replacement is the better spend",
        paragraphs: [
          "Replacement earns its cost when the slab has lost the base that supports it, has broken into multiple unstable pieces, has deteriorated across a wide enough area that you are repairing it continuously, or has spalling deep enough to have reached and compromised reinforcement. In those cases repair is throwing good money after bad — the honest recommendation is full removal and replacement done right, with corrected base and proper jointing so the new surface actually lasts.",
        ],
      },
      {
        h2: "Running the lifetime-cost math",
        paragraphs: [
          "The trap is comparing only the upfront numbers. A repair is cheaper today, but if it will fail in two seasons because the base is gone, its true cost is the repair plus the replacement you will still have to do. The right comparison is cost over the expected service life: a $1 repair that lasts a decade beats a series of cheaper patches that do not, and a replacement that prevents annual repairs can pay for itself across a few budget cycles. A good contractor will show you that math rather than just the sticker.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can part of a slab be repaired and part replaced?",
        a: "Yes, and it is often the most cost-effective answer. We frequently replace the sections that have lost their base or broken up while repairing the localized cracks and spalls elsewhere on the same slab, rather than treating the whole area as one decision. The proposal line-items each so you can see and approve the split.",
      },
      {
        q: "How do I know if my contractor is recommending replacement unnecessarily?",
        a: "Ask them to show the reasoning — specifically the base condition and how widespread the damage is. A trustworthy recommendation explains why repair will or will not hold, points to the base and the spread, and is willing to phase or to repair where it can. A blanket 'replace everything' with no breakdown is a flag.",
      },
      {
        q: "Does leveling count as repair or replacement?",
        a: "Leveling is a repair-side option that sits between patching and replacement. It lifts a sound but settled slab back to grade by filling the void beneath it, restoring drainage and removing trip hazards for a fraction of replacement cost — as long as the slab is structurally intact. A broken slab is not a leveling candidate.",
      },
    ],
    internalLinks: [
      { href: "/commercial-concrete-repair", anchor: "our commercial repair scope" },
      { href: "/concrete-replacement", anchor: "what proper replacement involves" },
      { href: "/concrete-slab-leveling", anchor: "leveling a settled slab" },
      { href: "/resources/commercial-concrete-repair-cost-guide", anchor: "the cost side of the decision" },
    ],
    cta: "Not sure which side of the line your concrete is on? A free assessment will tell you — in writing, with the reasoning attached.",
    images: [
      {
        position: "hero",
        filename: "concrete-repair-vs-replacement.jpg",
        alt: "Comparison of repaired versus replaced commercial concrete on a Hamilton County, Indiana property",
        caption: "The base condition and damage spread decide repair versus replacement.",
      },
    ],
  },

  // 3 ── ADA Sidewalk Requirements ─────────────────────────────────────────────
  {
    slug: "ada-compliance-sidewalk-requirements",
    path: "/resources/ada-compliance-sidewalk-requirements",
    title: "ADA Compliance: Sidewalk & Ramp Requirements",
    metaTitle: "ADA Sidewalk & Ramp Requirements — Manager's Guide",
    metaDescription:
      "The ADA sidewalk and curb-ramp basics property managers get cited for — running slope, cross-slope, landings, and detectable warnings — in plain language.",
    h1: "ADA Sidewalk & Ramp Requirements: A Property Manager's Guide",
    primaryKeyword: "ADA sidewalk compliance requirements",
    secondaryKeywords: [
      "ADA sidewalk slope requirements",
      "ADA curb ramp requirements commercial",
      "detectable warning requirements",
    ],
    searchIntent:
      "Informational (T4): managers checking exposure. Supports /ada-compliance-repairs and /sidewalk-repair.",
    excerpt:
      "The accessible-route deficiencies that draw ADA complaints are usually a few specific dimensions. Here are the ones property managers most need to understand.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "Why accessible routes draw complaints",
        paragraphs: [
          "Accessible routes, curb ramps, and parking are governed by the ADA Standards for Accessible Design, and they are a common target for Title III access complaints precisely because the deficiencies are measurable and visible. A ramp that is too steep or a curb ramp missing detectable warnings is not a judgment call — it is a defined dimension that is either met or not, which makes it easy to cite and hard to defend after the fact.",
          "This is an orientation for property managers, not a legal determination. Use it to understand where your exposure tends to concentrate; a definitive compliance review belongs with your counsel or a certified accessibility specialist.",
        ],
      },
      {
        h2: "Running slope and cross-slope",
        paragraphs: [
          "Two slopes matter on an accessible route. Running slope is the grade in the direction of travel; on a ramp it is capped (commonly expressed as a maximum like 1:12 for ramps), and exceeding it is one of the most-cited problems. Cross-slope is the side-to-side grade across the path of travel, which is held to a tight limit so a wheelchair is not pulled sideways. Cross-slope failures often appear over time as a walk or ramp settles, which is why they recur on older or poorly-based concrete.",
        ],
      },
      {
        h2: "Landings, width, and surface",
        paragraphs: [
          "Ramps need level landings at the top and bottom (and at turns) sized to standard, so a person can pause and maneuver without rolling. The accessible route must maintain a minimum clear width and a firm, stable, slip-resistant surface free of the vertical offsets and gaps that catch wheels and feet. A settled panel that opens a half-inch lip on an accessible route is both a trip hazard and an accessibility deficiency.",
        ],
      },
      {
        h2: "Detectable warnings (truncated domes)",
        paragraphs: [
          "Curb ramps and certain transitions require detectable warning surfaces — the truncated-dome panels that signal the edge of the pedestrian way to people with vision impairments. They are a frequent deficiency: missing entirely, worn flat, or installed without the required visual contrast. Because they are so visible and so binary, they are among the easiest items to be cited for and among the most straightforward to correct.",
        ],
      },
      {
        h2: "How settlement turns compliant concrete non-compliant",
        paragraphs: [
          "A property built to standard does not necessarily stay compliant. Central Indiana's freeze-thaw and clay soils move concrete, and a ramp or walk that met its slopes when poured can drift out of tolerance as it settles or heaves. That is why accessibility should be part of routine concrete inspection, not a one-time sign-off — and why correcting a slope problem properly means addressing the base so it does not move back out of conformance.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is responsible for ADA compliance on a leased commercial property?",
        a: "Both landlords and tenants can carry ADA Title III obligations depending on the lease and what each controls, and a complaint can name either or both. That shared exposure is exactly why documented remediation of the concrete — with dated records of the corrected dimensions — matters to whoever holds the risk. Allocation of responsibility is a question for your counsel and your lease.",
      },
      {
        q: "Can a too-steep ramp be fixed without a full rebuild?",
        a: "A cross-slope or minor offset can sometimes be corrected by grinding or targeted re-grading, but a running slope that exceeds the maximum usually has to be re-poured to grade — you cannot grind enough away without undermining the ramp. The right answer depends on measured numbers, which is why an accessibility-aware assessment comes first.",
      },
      {
        q: "Are detectable warnings really required, and how often do they get cited?",
        a: "Detectable warnings are required at curb ramps and certain transitions, and because they are highly visible and either present-and-compliant or not, they are one of the most commonly cited accessibility deficiencies. Missing, worn, or non-contrasting domes are a frequent and easily-corrected finding.",
      },
    ],
    internalLinks: [
      { href: "/ada-compliance-repairs", anchor: "ADA concrete correction" },
      { href: "/sidewalk-repair", anchor: "accessible-route sidewalk repair" },
      { href: "/trip-hazard-removal", anchor: "vertical offset removal" },
      { href: "/resources/property-manager-concrete-inspection-checklist", anchor: "an inspection checklist that includes ADA" },
    ],
    cta: "Worried about an accessible route on your property? Request an assessment — we measure the slopes, identify what is out of conformance, and document the corrections.",
    images: [
      {
        position: "hero",
        filename: "ada-sidewalk-ramp-requirements.jpg",
        alt: "ADA-compliant curb ramp with detectable warnings at a Hamilton County, Indiana commercial property",
        caption: "Slope, cross-slope, landings, and detectable warnings — the usual citations.",
      },
    ],
  },

  // 4 ── Common Causes of Concrete Failure ─────────────────────────────────────
  {
    slug: "common-causes-of-concrete-failure",
    path: "/resources/common-causes-of-concrete-failure",
    title: "Common Causes of Commercial Concrete Failure",
    metaTitle: "Why Commercial Concrete Fails — Causes & Fixes",
    metaDescription:
      "Freeze-thaw, clay soils, road salt, poor base, and bad jointing — the real reasons commercial concrete fails in central Indiana, and how to address each.",
    h1: "Why Commercial Concrete Fails in Central Indiana",
    primaryKeyword: "causes of commercial concrete failure",
    secondaryKeywords: [
      "why does commercial concrete crack",
      "freeze thaw concrete damage",
      "expansive clay soil concrete damage Indiana",
    ],
    searchIntent:
      "Informational (T4): top-of-funnel diagnosis. Links down to most service pages.",
    excerpt:
      "Most commercial concrete failure in Hamilton County traces to five forces. Understanding which one is at work is what separates a lasting repair from a repeat.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "Failure has a cause — and the cause decides the fix",
        paragraphs: [
          "Concrete does not break at random. Nearly every failure on a central-Indiana commercial property traces to one or more of five forces, and identifying which is at work is the whole game — repair the symptom while ignoring the cause and you will be back at the same spot next season. Here is what is actually breaking your concrete, and what each one demands.",
        ],
      },
      {
        h2: "1. Freeze-thaw cycling",
        paragraphs: [
          "Central Indiana runs through dozens of freeze-thaw cycles a winter. Water works into the surface and into cracks and joints, freezes, expands, and pries the concrete apart a fraction at a time. It is the engine behind surface scaling and spalling and behind the steady widening of any crack or joint that is left open. Air-entrained concrete and intact sealers resist it; tight, watertight joints and prompt crack sealing starve it.",
        ],
      },
      {
        h2: "2. Expansive clay soils",
        paragraphs: [
          "The glacial-till clay soils under most of Hamilton County shrink in drought and swell with moisture, and that seasonal movement is the quiet driver behind heaved sidewalk panels, settled approach slabs, and cracks that reappear after a patch. Concrete is strong in compression and weak in the tension this movement creates, so it cracks and faults. Repairs that ignore the soil and base movement simply move with it and fail again.",
        ],
      },
      {
        h2: "3. Road salt and de-icing chemicals",
        paragraphs: [
          "The chlorides in winter de-icers attack concrete two ways: they accelerate surface scaling by increasing how often the surface cycles through freezing, and over time they penetrate to reinforcing steel and corrode it, which expands and spalls the concrete from within. Entrances, drive aprons, and parking near doors take the heaviest salt load and show this damage first.",
        ],
      },
      {
        h2: "4. Poor sub-base and drainage",
        paragraphs: [
          "What is under the slab matters more than the slab. A poorly compacted, under-drained, or eroded base leaves the concrete unsupported, and unsupported concrete cracks and settles under load. Water is usually the culprit — pooling against the slab, washing fines out from under it, or never draining away from the base. A large share of 'concrete' problems are really drainage problems wearing a concrete costume.",
        ],
      },
      {
        h2: "5. Bad jointing and installation",
        paragraphs: [
          "Concrete will crack; jointing decides where. Control joints cut to the right depth and spacing direct that cracking along planned lines. When joints are missing, too shallow, or spaced wrong — the hallmarks of a cheap install — the slab map-cracks randomly within a couple of seasons. Overworked finishing and the wrong mix for the exposure compound it. Much of what looks like premature failure is really an installation that skipped the unglamorous fundamentals.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is cracking always a sign of a serious problem?",
        a: "No. Some cracking is harmless shrinkage that has stabilized and only needs sealing against water. The concern is cracking that is wide, faulted vertically, follows load paths, or keeps reopening — those point to a base or structural cause that has to be addressed, not just filled. Telling the two apart is the first step of any sensible repair.",
      },
      {
        q: "Can we prevent freeze-thaw and salt damage entirely?",
        a: "Not entirely in this climate, but you can dramatically slow it: keep joints sealed and cracks closed so water cannot get in, maintain a quality penetrating sealer on vulnerable surfaces, ensure water drains away from the concrete, and avoid piling aggressive de-icers on young or already-scaling concrete. Those steps meaningfully extend service life against Indiana winters.",
      },
      {
        q: "Why does the same spot keep failing after we repair it?",
        a: "Recurring failure in a fixed location almost always means the cause — usually the base or the drainage — was never corrected, so the repair is sitting on the same unresolved problem. Addressing the sub-base, the water, and the jointing as part of the repair is what finally stops the cycle.",
      },
    ],
    internalLinks: [
      { href: "/concrete-crack-repair", anchor: "crack repair matched to the cause" },
      { href: "/concrete-spalling-repair", anchor: "freeze-thaw and salt surface repair" },
      { href: "/concrete-replacement", anchor: "base correction during replacement" },
      { href: "/concrete-joint-repair-sealing", anchor: "sealing joints to keep water out" },
    ],
    cta: "Seeing one of these on your property? A free assessment identifies the cause, not just the symptom — so the repair actually holds.",
    images: [
      {
        position: "hero",
        filename: "causes-of-concrete-failure.jpg",
        alt: "Freeze-thaw and clay-soil concrete damage on a commercial property in central Indiana",
        caption: "Five forces drive most commercial concrete failure in Hamilton County.",
      },
    ],
  },

  // 5 ── Warehouse Floor Maintenance ───────────────────────────────────────────
  {
    slug: "warehouse-floor-maintenance-guide",
    path: "/resources/warehouse-floor-maintenance-guide",
    title: "Warehouse Floor Maintenance Guide",
    metaTitle: "Warehouse Floor Maintenance Guide — HCCR",
    metaDescription:
      "Protect forklifts, product, and uptime: a practical warehouse concrete floor maintenance plan covering joints, cracks, surface wear, and inspection cadence.",
    h1: "Warehouse Floor Maintenance: Protecting Forklifts, Product, and Uptime",
    primaryKeyword: "warehouse floor maintenance",
    secondaryKeywords: [
      "industrial concrete floor maintenance",
      "warehouse floor joint maintenance",
      "forklift floor care",
    ],
    searchIntent:
      "Informational (T4): facility managers planning upkeep. Supports /warehouse-floor-repair and /concrete-joint-repair-sealing.",
    excerpt:
      "A warehouse floor is production infrastructure. A little planned maintenance on joints and cracks prevents the equipment damage and downtime that neglect guarantees.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "Treat the floor as equipment, not as scenery",
        paragraphs: [
          "In a distribution or manufacturing operation, the floor is part of the machinery — every forklift pass depends on it. Yet it is the asset most often ignored until a joint has spalled wide enough to damage wheels and jar operators. A modest, planned maintenance program on the floor costs a fraction of the equipment wear, product damage, and downtime that neglect produces.",
        ],
      },
      {
        h2: "Joints are the priority, every time",
        paragraphs: [
          "The highest-return maintenance item in almost any warehouse is the floor joints. Hard polyurethane and steel forklift wheels pound joint edges until they spall; once the edge is gone, the wheel slams into the gap on every crossing, accelerating both the concrete damage and the wear on the equipment. Keeping joints filled with the correct semi-rigid material — and rebuilding spalled edges before they widen — supports the wheel across the gap and stops the cascade.",
        ],
      },
      {
        h2: "Catch cracks before they fault",
        paragraphs: [
          "Random cracks in a warehouse slab are not just cosmetic. Under repeated heavy load the crack edges break down and the slab can begin to fault vertically across the crack, creating the same wheel-impact problem as a bad joint. Stabilizing and filling cracks while they are tight is cheap; letting them open, spall, and fault turns a sealant-sized job into a slab repair.",
        ],
      },
      {
        h2: "Surface wear, dusting, and densification",
        paragraphs: [
          "A slab that is dusting, polishing unevenly, or wearing in the main travel lanes is losing its surface. Left alone it keeps shedding fines (hard on product and air quality) and roughens. Often the fix is densification and surface repair rather than replacement, which hardens the wear surface and cuts the dust — a maintenance-level intervention that defers a capital one.",
        ],
      },
      {
        h2: "An inspection cadence that fits the operation",
        paragraphs: [
          "The point of a cadence is to catch joints and cracks while they are still cheap to address. Walk the high-traffic aisles and dock areas on a set schedule, log spalled joints, opening cracks, and surface wear, and prioritize the items in the heaviest-traffic lanes. The aim is a short, recurring punch list handled on planned downtime — not a reactive scramble when a joint has failed badly enough to stop a lift.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should we inspect a warehouse floor?",
        a: "Frequency depends on traffic, but the main travel aisles and dock areas warrant a regular walkthrough — quarterly is a reasonable default for a busy operation — to catch spalled joints and opening cracks while they are still small. The heavier the lift traffic, the more often it pays to look.",
      },
      {
        q: "Can floor repairs be done without shutting down the warehouse?",
        a: "Almost always. The work is sequenced aisle by aisle and zone by zone around racking and inventory, and rapid-set materials can return a repaired area to lift traffic within hours where downtime must be minimal. A full shutdown is rarely necessary.",
      },
      {
        q: "Is a dusting floor a maintenance issue or a replacement issue?",
        a: "Usually maintenance. A dusting or surface-worn slab can often be restored with densification and surface repair, which hardens the wear surface and cuts the dust, rather than replaced. Replacement is reserved for slabs that have failed structurally, not merely worn on top.",
      },
    ],
    internalLinks: [
      { href: "/warehouse-floor-repair", anchor: "warehouse and industrial floor repair" },
      { href: "/concrete-joint-repair-sealing", anchor: "floor joint repair and filling" },
      { href: "/concrete-crack-repair", anchor: "stabilizing slab cracks" },
      { href: "/loading-dock-repair", anchor: "the loading dock the floor feeds" },
    ],
    cta: "Want a floor program instead of fire drills? Request an assessment — we will walk the aisles and hand you a prioritized maintenance scope.",
    images: [
      {
        position: "hero",
        filename: "warehouse-floor-maintenance-guide.jpg",
        alt: "Forklift crossing a maintained warehouse floor joint at a Hamilton County, Indiana facility",
        caption: "Joints first: the highest-return maintenance item on any warehouse floor.",
      },
    ],
  },

  // 6 ── Property Manager Inspection Checklist ─────────────────────────────────
  {
    slug: "property-manager-concrete-inspection-checklist",
    path: "/resources/property-manager-concrete-inspection-checklist",
    title: "Property Manager's Concrete Inspection Checklist",
    metaTitle: "Concrete Inspection Checklist for Property Managers",
    metaDescription:
      "A practical walkthrough checklist for spotting commercial concrete trip hazards, ADA issues, and failures before they become claims or capital surprises.",
    h1: "A Concrete Inspection Checklist for Property Managers",
    primaryKeyword: "concrete inspection checklist property managers",
    secondaryKeywords: [
      "commercial concrete inspection",
      "trip hazard inspection checklist",
      "property condition concrete walkthrough",
    ],
    searchIntent:
      "Informational (T4): linkable lead magnet. Supports trip-hazard, sidewalk, and ADA pages.",
    excerpt:
      "You do not need to be an engineer to catch the concrete problems that turn into claims. Here is what to look for on a walkthrough — and when to call a specialist.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "What a manager can — and should — catch",
        paragraphs: [
          "Most concrete problems that become liability claims or capital surprises are visible months before they hit, if someone is looking. A property manager does not need engineering training to catch them — just a consistent walkthrough and a sense of what each sign means. Use this as a recurring self-inspection, and escalate the items below to a specialist.",
        ],
      },
      {
        h2: "Walkways and entrances",
        paragraphs: [
          "Pedestrian concrete is where liability concentrates, so start here. Look for:",
        ],
        bullets: [
          "Vertical offsets at joints and panel edges — the classic trip hazard; note anything around a quarter inch or more",
          "Cracks that are widening, faulting, or branching",
          "Surface scaling, flaking, and exposed aggregate, especially near salted entrances",
          "Settled or rocking panels and standing water after rain",
          "Damaged or missing nosings on steps and crumbling stoop edges",
        ],
      },
      {
        h2: "Accessible routes and ramps",
        paragraphs: [
          "Walk every accessible route as a person using it would. Look for ramps that feel steep, side-to-side tilt across a walk, landings that are sloped or too small, and curb ramps with missing, worn, or low-contrast detectable warnings. You will not measure slopes by eye, but you can flag the ones that feel wrong for a specialist to measure.",
        ],
      },
      {
        h2: "Parking, curbs, and drainage",
        paragraphs: [
          "In the lot, look for failed and spreading concrete sections in drive lanes and aprons, broken or sunken curb and gutter, crushed dumpster pads, and — the underlying tell — where water pools instead of draining. Standing water is a leading indicator of base and drainage problems that will produce the next round of failures.",
        ],
      },
      {
        h2: "Docks, floors, and service areas",
        paragraphs: [
          "Behind the building, check dock approaches for cracking and settlement (and whether trailers still seat flush), pits for spalling, and bumper blocks for damage. On interior floors, look for spalled joints in forklift aisles and cracks that are faulting. These are the items that quietly tax equipment and uptime.",
        ],
      },
      {
        h2: "When to call a specialist",
        paragraphs: [
          "Document what you find with photos and dates — that record alone strengthens your liability position. Then escalate anything involving trip hazards on high-traffic routes, possible ADA deficiencies, widespread or faulting cracks, standing water and suspected base failure, or dock and structural concerns. A specialist assessment turns your punch list into a prioritized, line-item scope you can budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should we walk a commercial property for concrete issues?",
        a: "A seasonal cadence works well — at minimum after winter, when freeze-thaw and salt damage shows, and before peak season. High-traffic retail, medical, and HOA common areas benefit from more frequent walks because the liability exposure is concentrated and conditions change faster.",
      },
      {
        q: "Does documenting hazards myself actually help with liability?",
        a: "Yes. Dated photos and notes showing that conditions were identified and that remediation was scheduled or completed are exactly what supports a premises-liability defense. The weakest position is a hazard that existed, was knowable, and has no record of being addressed.",
      },
      {
        q: "What is the single most important thing to look for?",
        a: "Vertical offsets on high-traffic walkways. They are the most common premises-liability source, they form continuously from heave and settlement, and they are usually the cheapest thing to fix — often a quick grind. If you only had time to look for one thing, it would be toe-catching lips on the busiest walking routes.",
      },
    ],
    internalLinks: [
      { href: "/trip-hazard-removal", anchor: "remediating the trip hazards you find" },
      { href: "/sidewalk-repair", anchor: "sidewalk and panel repair" },
      { href: "/ada-compliance-repairs", anchor: "correcting ADA deficiencies" },
      { href: "/resources/ada-compliance-sidewalk-requirements", anchor: "what the ADA route rules require" },
    ],
    cta: "Turn your walkthrough into a plan — request a free assessment and we will document conditions and hand you a prioritized scope.",
    images: [
      {
        position: "hero",
        filename: "property-manager-concrete-inspection-checklist.jpg",
        alt: "Property manager inspecting commercial sidewalk concrete at a Hamilton County, Indiana property",
        caption: "A consistent walkthrough catches most concrete claims before they happen.",
      },
    ],
  },

  // 7 ── Retail Center Sidewalk Maintenance ────────────────────────────────────
  {
    slug: "retail-center-sidewalk-maintenance-guide",
    path: "/resources/retail-center-sidewalk-maintenance-guide",
    title: "Retail Center Sidewalk Maintenance Guide",
    metaTitle: "Retail Center Sidewalk Maintenance — Manager's Guide",
    metaDescription:
      "Keep retail and shopping-center sidewalks safe, presentable, and claim-resistant: trip-hazard control, salt-season care, and tenant-friendly scheduling.",
    h1: "Retail Center Sidewalk Maintenance: Safety, Image, and Liability",
    primaryKeyword: "retail center sidewalk maintenance",
    secondaryKeywords: [
      "shopping center sidewalk maintenance",
      "retail sidewalk trip hazard liability",
      "commercial sidewalk upkeep",
    ],
    searchIntent:
      "Informational (T4): retail property managers. Supports /sidewalk-repair and /trip-hazard-removal.",
    excerpt:
      "At a retail center the sidewalk is both the customer's first impression and your biggest premises-liability exposure. Here is how to keep it safe and presentable.",
    updated: "2026-06-15",
    sections: [
      {
        h2: "The sidewalk does double duty at a retail center",
        paragraphs: [
          "A retail center's sidewalks carry two jobs at once: they shape the impression every customer forms walking up to the stores, and they are the single largest premises-liability surface on the property. A cracked, scaled, or uneven walk reads as a neglected center to shoppers and prospective tenants, and it sits as an open trip-and-fall exposure the whole time it is left. Maintaining it well protects both image and liability at the same low cost.",
        ],
      },
      {
        h2: "Trip-hazard control is the core discipline",
        paragraphs: [
          "Foot traffic at a retail center is constant and distracted — people watching storefronts, not their feet — which makes vertical offsets especially dangerous here. The discipline is simple but has to be consistent: survey the walks on a cadence, log offsets, and remediate them, most often by grinding them flush in a single low-disruption visit. Catching a quarter-inch lip early is the difference between a quick grind and a claim.",
        ],
      },
      {
        h2: "Salt season is hard on retail walks",
        paragraphs: [
          "Retail entrances get the heaviest de-icing of any concrete on the property, and the chlorides scale and spall the surface faster than anywhere else. Smart salt-season practice helps: avoid over-applying aggressive de-icers on young or already-scaling concrete, keep entrance surfaces sealed where appropriate, and address scaling while it is shallow before it opens the surface to deeper damage. Entrances are also where appearance matters most, so surface care here pays double.",
        ],
      },
      {
        h2: "Keep the center open while you maintain it",
        paragraphs: [
          "Retail cannot absorb blocked storefronts during business hours. The maintenance has to be tenant-friendly: phased section by section, run after hours or in low-traffic windows, with safe temporary routing and signage so customers still reach every door. Grinding's lack of cure time is a real advantage here — most trip hazards can be cleared without closing anything.",
        ],
      },
      {
        h2: "Build it into a program, not a reaction",
        paragraphs: [
          "The centers that avoid surprises treat sidewalk care as a standing program: a regular survey, a prioritized punch list, documented remediation, and a phased plan for the larger panel and section repairs. That converts an unpredictable liability into a budgeted line and produces the dated records that protect the center if a claim is ever filed. For multi-tenant and multi-property retail, one consistent program across sites keeps it manageable.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do we keep storefronts accessible while repairing the sidewalk?",
        a: "By phasing the work section by section, running higher-impact areas after hours or in low-traffic windows, and providing safe temporary routing and signage so customers can still reach every tenant. Trip-hazard grinding needs no cure time, so most of it can be done with effectively no disruption to the storefronts.",
      },
      {
        q: "Who is liable when a customer trips on a retail center sidewalk?",
        a: "It depends on the lease and what each party controls, but as the party maintaining the common-area walks, the center typically carries significant exposure. That is why documented trip-hazard control — dated surveys and remediation records — matters: it is what demonstrates the center was actively managing the risk rather than ignoring it.",
      },
      {
        q: "Are entrance surfaces really worth sealing at a retail center?",
        a: "At high-salt entrances, yes — a quality penetrating sealer slows the chloride-driven scaling that hits those surfaces hardest, and entrances are where appearance and foot traffic both concentrate. Sealing is a low-cost protection that extends the life of the most visible, most-abused walkway concrete on the property.",
      },
    ],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "retail sidewalk panel repair" },
      { href: "/trip-hazard-removal", anchor: "trip-hazard grinding programs" },
      { href: "/concrete-spalling-repair", anchor: "entrance surface restoration" },
      { href: "/resources/property-manager-concrete-inspection-checklist", anchor: "a walkthrough checklist" },
    ],
    cta: "Run a tighter center — request a free assessment and we will survey your walks, remediate the hazards, and set up a maintenance cadence.",
    images: [
      {
        position: "hero",
        filename: "retail-center-sidewalk-maintenance.jpg",
        alt: "Maintained retail center sidewalk and storefront entrance in Hamilton County, Indiana",
        caption: "At retail, the sidewalk is both first impression and primary liability.",
      },
    ],
  },
];

export function getArticle(slug: string): RichArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
