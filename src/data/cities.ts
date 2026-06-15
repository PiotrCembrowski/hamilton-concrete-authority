import type { RichCity } from "./content-types";

// Genuinely local content per city — nothing here is word-swappable to another
// city. Zionsville is flagged `nearby` (Boone County) and never claimed as part
// of Hamilton County, to protect the county-authority angle.
export const CITIES_CONTENT: RichCity[] = [
  // ── Carmel ─────────────────────────────────────────────────────────────────
  {
    slug: "carmel",
    name: "Carmel",
    path: "/concrete-repair-carmel-in",
    county: "Hamilton County",
    metaTitle: "Commercial Concrete Repair in Carmel, IN — HCCR",
    metaDescription:
      "Commercial concrete repair in Carmel, IN — sidewalks, lots, ADA & docks for Meridian-corridor offices and City Center retail. Request a visit.",
    h1: "Commercial Concrete Repair in Carmel, Indiana",
    primaryKeyword: "commercial concrete repair Carmel IN",
    secondaryKeywords: [
      "sidewalk repair Carmel IN",
      "parking lot concrete repair Carmel",
      "ADA sidewalk repair Carmel Indiana",
      "loading dock repair Carmel",
    ],
    intro:
      "Carmel's commercial properties are held to a higher visual standard than most of the metro — the Meridian Street corporate corridor, City Center, and the Arts & Design District all trade on a polished, walkable image, and deteriorating concrete undercuts it fast. We repair commercial concrete for Carmel's office parks, mixed-use districts, medical campuses, and retail centers, with the documentation and scheduling those institutional owners expect.",
    localContext: [
      "U.S. 31 / Meridian Street Class-A office corridor",
      "Carmel City Center and the Arts & Design District",
      "Clay Terrace and West Carmel retail along Michigan Road (U.S. 421)",
      "The Monon Greenway and the city's signature roundabout network",
      "IU Health North and the 116th & Meridian medical cluster",
    ],
    sections: [
      {
        h2: "Concrete that has to match Carmel's standard",
        paragraphs: [
          "The properties along Meridian and around City Center are some of the most-scrutinized commercial real estate in Indiana. Tenants are paying for a premium address, and a spalled entrance, a cracked plaza, or a settled walkway reads as deferred maintenance on an asset that is supposed to signal the opposite. Our work on these properties is finish-conscious for exactly that reason — clean lines, flush transitions, and surfaces that hold up to heavy pedestrian flow.",
          "We work across Carmel's commercial mix: corporate office plazas on the Meridian corridor, the pedestrian-heavy public spaces of City Center and the Arts & Design District, retail at Clay Terrace and along Michigan Road, and the medical properties clustered near 116th and Meridian.",
        ],
      },
      {
        h2: "Why Carmel's commercial concrete fails",
        paragraphs: [
          "Carmel sees the same central-Indiana freeze-thaw cycling and shrink-swell clay soils as the rest of Hamilton County, and on commercial sites that shows up first in the high-use, high-salt areas: office and retail entrances, plaza pavers and slabs, and the curb lines and islands that take winter plowing. The district's emphasis on walkability also concentrates pedestrian traffic onto plazas and connectors, where a small offset becomes a liability quickly because so many people cross it.",
          "Carmel's extensive roundabout network changes how traffic loads pavement, too — slow, constant turning movements at entrances and approaches wear concrete aprons and curb returns differently than straight-through traffic, and those are spots we look at closely.",
        ],
      },
      {
        h2: "Built around Carmel operations and tenants",
        paragraphs: [
          "Class-A office and active retail cannot absorb a disruptive concrete project during business hours. We phase Carmel work after hours and in sections so building entrances, parking, and pedestrian routes stay open, and we keep property managers supplied with the schedule and documentation their ownership and tenants expect. For medical properties, we keep accessible routes open and patient entrances usable throughout.",
        ],
      },
      {
        h2: "ADA and liability on high-traffic Carmel properties",
        paragraphs: [
          "With the foot traffic Carmel's districts generate, accessibility and trip-hazard control are front-of-mind. We bring ramps, cross-slopes, and detectable warnings into conformance and remediate trip hazards with the dated documentation that protects a property against premises-liability and ADA exposure — a particular concern on the public-facing plazas and connectors where the city's pedestrian culture puts the most people on the concrete.",
        ],
      },
      {
        h2: "Office, medical, and retail each need a different hand",
        paragraphs: [
          "Carmel's commercial base is not monolithic, and the concrete priorities shift by property type. The Meridian-corridor office buildings care most about a flawless arrival experience — entrances, plazas, and parking that reinforce a premium address. The medical properties around 116th and Meridian, anchored by IU Health North, put patient access and uninterrupted accessible routes first. The retail at Clay Terrace and along Michigan Road needs durable, presentable surfaces that survive heavy turnover and winter salt.",
          "We scope each to its priority rather than running one playbook across all of them — keeping a medical entrance open and accessible throughout, protecting a retail center's image and traffic flow, or holding an office property to the finish standard its tenants are paying for.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have crews that actually work in Carmel, or do you dispatch from out of town?",
        a: "We dispatch crews throughout Hamilton County and work Carmel regularly — the Meridian corridor, City Center, the Arts & Design District, and the retail and medical properties around them. You are dealing with a local commercial specialist, not a crew driving in from another market for a one-off.",
      },
      {
        q: "Can you keep a Meridian-corridor office or City Center property open during the work?",
        a: "Yes. We phase the work after hours and in sections so entrances, parking, and pedestrian routes stay usable during business hours. For multi-tenant office and mixed-use, we coordinate the schedule with property management so tenants can be notified with real dates.",
      },
      {
        q: "Our Carmel property has a lot of pedestrian plaza and walkway concrete — is that a specialty?",
        a: "It is exactly the kind of high-traffic, finish-sensitive pedestrian concrete Carmel's districts are full of. We handle plaza slabs, connectors, and entrances with attention to flush transitions and trip-hazard control, because in those spaces the volume of foot traffic turns a minor offset into a real liability quickly.",
      },
    ],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "commercial sidewalk and plaza repair" },
      { href: "/ada-compliance-repairs", anchor: "ADA access correction" },
      { href: "/parking-lot-concrete-repair", anchor: "parking-lot concrete repair" },
      { href: "/trip-hazard-removal", anchor: "trip-hazard remediation for high-traffic areas" },
      { href: "/resources/retail-center-sidewalk-maintenance-guide", anchor: "keeping retail walkways claim-free" },
    ],
    project: {
      title: "Meridian-corridor office plaza — entrance & walkway restoration",
      summary:
        "Restored spalled entrance slabs and replaced settled walkway panels across a multi-tenant Class-A office property on the Meridian corridor, phased over consecutive weekends to keep tenant entrances open.",
      metrics: ["Weekend phasing, zero weekday closure", "ADA transitions corrected at entrances", "Trip hazards documented and remediated"],
    },
    images: [
      {
        position: "hero",
        filename: "concrete-repair-carmel-in-meridian-office.jpg",
        alt: "Commercial concrete entrance repair at a Meridian-corridor office property in Carmel, Indiana",
        caption: "Finish-conscious concrete repair for Carmel's commercial properties.",
      },
      {
        position: "inline",
        filename: "carmel-city-center-plaza-walkway.jpg",
        alt: "Pedestrian plaza and walkway concrete near Carmel City Center, Indiana",
        caption: "Plaza and connector repair built for Carmel's pedestrian districts.",
      },
    ],
  },

  // ── Fishers ────────────────────────────────────────────────────────────────
  {
    slug: "fishers",
    name: "Fishers",
    path: "/concrete-repair-fishers-in",
    county: "Hamilton County",
    metaTitle: "Commercial Concrete Repair in Fishers, IN — HCCR",
    metaDescription:
      "Commercial concrete repair in Fishers, IN — docks, warehouse floors, lots & ADA for the I-69 corridor and Nickel Plate District. Request a quote.",
    h1: "Commercial Concrete Repair in Fishers, Indiana",
    primaryKeyword: "commercial concrete repair Fishers IN",
    secondaryKeywords: [
      "loading dock repair Fishers",
      "warehouse floor repair Fishers Indiana",
      "parking lot concrete repair Fishers",
      "sidewalk repair Fishers IN",
    ],
    intro:
      "Fishers runs on two very different kinds of commercial concrete: the warehouse floors, loading docks, and truck courts of the I-69 and USA Parkway logistics corridor, and the walkable retail and office concrete of the Nickel Plate District and Fishers District. We repair both across Fishers — heavy-industrial slabs that have to carry forklifts and freight, and finish-sensitive pedestrian concrete that fronts restaurants, offices, and shops.",
    localContext: [
      "The I-69 corridor and Exit 5 (116th Street) commercial and industrial area",
      "USA Parkway and the Fishers logistics/distribution zone",
      "The Nickel Plate District and the downtown Fishers amphitheater area",
      "Fishers District retail (IKEA, Topgolf, and surrounding pads)",
      "The 116th Street office and medical corridor and the Geist/Saxony areas",
    ],
    sections: [
      {
        h2: "Two kinds of Fishers concrete, one specialist",
        paragraphs: [
          "The distribution and light-industrial space off I-69 and USA Parkway lives or dies on its floors and docks — forklift-rated slabs, dock pits and approach slabs that take continuous freight, and truck courts that carry loaded trailers all day. A few miles away, the Nickel Plate District and Fishers District depend on the opposite: clean, safe pedestrian concrete at restaurant and retail entrances where image and foot-traffic liability are what matter. We are set up for both, which is unusual for a single commercial concrete contractor.",
          "That range means a Fishers facility manager and a Fishers retail property manager can use the same partner — one for warehouse floor joints and dock approaches, the other for sidewalks, plazas, and ADA access.",
        ],
      },
      {
        h2: "What fails in the I-69 logistics corridor",
        paragraphs: [
          "In the warehouse and distribution properties along the corridor, the damage concentrates where the load concentrates. Floor joints spall under hard forklift wheels and start hammering equipment; dock approach slabs crack and settle under repeated heavy axle loads, pulling dock seals out of alignment; and truck-court and apron concrete fails where trailers stage and turn. These are the repairs that protect uptime, and they have to be scheduled around shipping rather than the calendar.",
        ],
      },
      {
        h2: "What fails in the Nickel Plate and Fishers District areas",
        paragraphs: [
          "On the retail and office side, the story is freeze-thaw and de-icer at entrances, settled and heaved sidewalk panels along the pedestrian routes, and trip hazards in the high-traffic gathering spaces around the amphitheater and district pads. With the volume of foot traffic these destination districts pull, accessibility and trip-hazard control carry real liability weight, and we remediate them with the documentation to back it up.",
        ],
      },
      {
        h2: "Scheduled around freight and around foot traffic",
        paragraphs: [
          "Both sides of Fishers need careful scheduling for opposite reasons. For the logistics properties, we phase dock and floor work around shipping windows and shifts so freight keeps moving. For the districts, we work entrances and walkways after hours and in sections so restaurants, shops, and offices stay open. Either way the schedule — closures and re-open times — is set before we mobilize.",
        ],
      },
      {
        h2: "Beyond the corridor: 116th Street, Geist, and Saxony",
        paragraphs: [
          "Fishers is more than the I-69 logistics belt. The 116th Street office and medical corridor, the retail and dining around Geist, and the Saxony mixed-use area all carry the finish-sensitive commercial concrete of a prosperous suburb — office entrances and walkways, medical accessible routes, and retail parking and aprons that have to look maintained and stay safe.",
          "Treating Fishers as a single market misses that range. A Saxony retail manager and a USA Parkway distribution facility have almost nothing in common in their concrete needs, and we scope each accordingly rather than forcing one approach across the whole city.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you handle warehouse floors and loading docks in the Fishers I-69 / USA Parkway area?",
        a: "Yes — that corridor is core to what we do in Fishers. We repair forklift-rated floor joints and slabs, rebuild dock pits and approach slabs, and restore truck-court and apron concrete, all scheduled around your shipping windows and shifts so freight keeps moving.",
      },
      {
        q: "Can you do retail and restaurant entrance concrete in the Nickel Plate or Fishers District?",
        a: "Absolutely. We handle the finish-sensitive pedestrian concrete those districts depend on — entrance slabs, sidewalk panels, plazas, and ADA transitions — worked after hours and in sections so the restaurants, shops, and offices stay open during business hours.",
      },
      {
        q: "Our Fishers distribution center can't shut down a dock for long — can you work around that?",
        a: "That is the norm for dock work, not the exception. Multi-door docks usually stay partially operational because we phase the work door by door, and we schedule any required closure against your lightest shipping window with a committed return-to-service date up front.",
      },
    ],
    internalLinks: [
      { href: "/loading-dock-repair", anchor: "loading dock concrete repair" },
      { href: "/warehouse-floor-repair", anchor: "warehouse and industrial floor repair" },
      { href: "/parking-lot-concrete-repair", anchor: "truck court and parking-lot repair" },
      { href: "/sidewalk-repair", anchor: "district sidewalk and entrance repair" },
      { href: "/resources/warehouse-floor-maintenance-guide", anchor: "warehouse floor maintenance planning" },
    ],
    project: {
      title: "I-69 corridor distribution center — dock approach & floor joints",
      summary:
        "Rebuilt two settled dock approach slabs and re-armored spalled floor joints in the primary forklift aisles at a distribution facility near the I-69 / USA Parkway area, phased across off-shifts to preserve the shipping schedule.",
      metrics: ["Phased around shipping shifts", "2 dock approaches rebuilt", "Primary forklift-aisle joints re-armored"],
    },
    images: [
      {
        position: "hero",
        filename: "concrete-repair-fishers-in-i69-distribution-dock.jpg",
        alt: "Loading dock approach slab repair at an I-69 corridor distribution center in Fishers, Indiana",
        caption: "Dock and floor repair for the Fishers I-69 logistics corridor.",
      },
      {
        position: "inline",
        filename: "fishers-nickel-plate-district-sidewalk.jpg",
        alt: "Commercial sidewalk repair in the Nickel Plate District of Fishers, Indiana",
        caption: "Pedestrian concrete repair for the Nickel Plate and Fishers District areas.",
      },
    ],
  },

  // ── Noblesville ──────────────────────────────────────────────────────────────
  {
    slug: "noblesville",
    name: "Noblesville",
    path: "/concrete-repair-noblesville-in",
    county: "Hamilton County",
    metaTitle: "Commercial Concrete Repair in Noblesville, IN — HCCR",
    metaDescription:
      "Commercial concrete repair in Noblesville, IN — historic square, SR-37 corridor & Hamilton Town Center. Sidewalks, lots, ADA. Request a visit.",
    h1: "Commercial Concrete Repair in Noblesville, Indiana",
    primaryKeyword: "commercial concrete repair Noblesville IN",
    secondaryKeywords: [
      "sidewalk repair Noblesville IN",
      "parking lot concrete repair Noblesville",
      "HOA concrete repair Noblesville Indiana",
      "ADA concrete repair Noblesville",
    ],
    intro:
      "As the Hamilton County seat, Noblesville pairs an older, heavily-used historic downtown with fast-growing retail and industrial development along the SR-37 and SR-32 corridors. That mix means two distinct concrete realities — aging sidewalks and stairs around the Courthouse Square, and newer commercial lots, pads, and docks out by Hamilton Town Center and the industrial parks — and we repair both across Noblesville.",
    localContext: [
      "The historic Courthouse Square and downtown Noblesville",
      "The SR-37 corridor (and its ongoing interchange upgrades)",
      "SR-32 / Pleasant Street and the east-west commercial routes",
      "Hamilton Town Center and the surrounding retail",
      "Noblesville's industrial parks and the Ruoff Music Center area",
    ],
    sections: [
      {
        h2: "From the historic square to the SR-37 corridor",
        paragraphs: [
          "Downtown Noblesville's commercial concrete is some of the oldest commercial pedestrian surface in the county — square-side sidewalks, entrances, and steps that carry constant foot traffic and have weathered decades of Indiana winters. Out along SR-37 and around Hamilton Town Center, the concrete is newer but harder-worked: retail parking, drive aprons, dumpster pads, and the loading and service concrete behind the stores. We handle the full span, from careful repair of established downtown surfaces to heavy-duty work on the commercial corridors.",
          "As the county seat, Noblesville also carries a higher share of government-adjacent, institutional, and HOA property, where documentation and predictable budgeting matter as much as the repair itself.",
        ],
      },
      {
        h2: "Why Noblesville commercial concrete fails",
        paragraphs: [
          "Downtown, the issue is age plus exposure: long-service sidewalks and steps scaling and spalling from decades of freeze-thaw and de-icing salt, with settlement opening trip hazards at the joints. On the newer SR-37 and Hamilton Town Center retail, the failures are the familiar commercial set — entrance and apron cracking, settled sections, crushed dumpster pads, and curb damage from plowing — accelerated by the region's shrink-swell clay soils.",
          "Noblesville's HOA and apartment communities add another layer: extensive common-area sidewalk networks where trip hazards and accessibility issues accumulate quietly across a large footprint until someone falls.",
        ],
      },
      {
        h2: "Programs HOAs and managers can budget against",
        paragraphs: [
          "For Noblesville's HOAs, apartment communities, and managed retail, the value is not a single repair — it is a documented program. We inspect on a cadence, prioritize the worst safety and liability items, and deliver a line-item scope a board or owner can fund in phases. Over a few cycles that becomes a clear maintenance history and a predictable reserve line rather than a string of emergencies.",
        ],
      },
      {
        h2: "Respecting a working downtown",
        paragraphs: [
          "Square-side and downtown work has to respect a live, pedestrian-heavy commercial district. We phase the work, keep walkways and entrances usable, and coordinate around downtown business hours and events so a sidewalk or step repair does not become a problem for the merchants around it. The same documentation that protects a property manager also gives the city and downtown stakeholders a clear record of what was done.",
        ],
      },
      {
        h2: "Documentation for institutional and government-adjacent property",
        paragraphs: [
          "As the county seat, Noblesville carries an unusually high share of institutional, government-adjacent, and civic-facing commercial property, where the record of the work matters as much as the work itself. For these owners, our closeout documentation — conditions, scope as built, and warranty — is not a nicety; it is what supports public accountability, board approvals, and liability defense.",
          "That documentation discipline carries over to the city's HOAs, apartment communities, and managed retail, where a clear, dated maintenance history turns concrete from a reactive expense into a planned, defensible line in the budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work on the older sidewalks and steps around the Noblesville downtown square?",
        a: "Yes. Downtown Noblesville has some of the most heavily-used, longest-service pedestrian concrete in the county, and we repair square-side sidewalks, entrances, and steps with attention to keeping a working, pedestrian-heavy district open and safe during the work.",
      },
      {
        q: "Can you set up an ongoing concrete program for a Noblesville HOA or apartment community?",
        a: "That is one of our most common Noblesville engagements. We inspect common-area sidewalks and curbs on a cadence, prioritize the worst trip and ADA hazards, and deliver a phased, line-item scope a board can budget against — turning a sprawling walkway network into a predictable reserve line instead of surprise bills.",
      },
      {
        q: "Do you handle the retail and industrial concrete out along SR-37 and Hamilton Town Center?",
        a: "Yes — that corridor is a big part of our Noblesville work. We repair retail parking sections, drive aprons, dumpster pads, curbs, and the loading and service concrete behind the stores, phased to keep the lots and businesses operating.",
      },
    ],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "downtown and common-area sidewalk repair" },
      { href: "/commercial-concrete-steps-repair", anchor: "entrance step and stoop restoration" },
      { href: "/parking-lot-concrete-repair", anchor: "retail-corridor parking repair" },
      { href: "/trip-hazard-removal", anchor: "HOA trip-hazard programs" },
      { href: "/resources/property-manager-concrete-inspection-checklist", anchor: "a property inspection checklist" },
    ],
    project: {
      title: "Noblesville HOA — multi-year common-area sidewalk program",
      summary:
        "Established a phased, prioritized sidewalk and curb repair program for a large Noblesville HOA, beginning with documented trip-hazard remediation across the common-area walkway network and a multi-year scope for the remainder.",
      metrics: ["Cadence inspection established", "Trip hazards documented & remediated first", "Multi-year reserve-friendly scope"],
    },
    images: [
      {
        position: "hero",
        filename: "concrete-repair-noblesville-in-square-sidewalk.jpg",
        alt: "Commercial sidewalk repair near the historic Courthouse Square in Noblesville, Indiana",
        caption: "Repair for Noblesville's historic downtown and growing commercial corridors.",
      },
      {
        position: "inline",
        filename: "noblesville-sr37-retail-parking.jpg",
        alt: "Retail parking lot concrete repair along the SR-37 corridor in Noblesville, Indiana",
        caption: "Heavy-duty retail concrete along the SR-37 corridor.",
      },
    ],
  },

  // ── Westfield ────────────────────────────────────────────────────────────────
  {
    slug: "westfield",
    name: "Westfield",
    path: "/concrete-repair-westfield-in",
    county: "Hamilton County",
    metaTitle: "Commercial Concrete Repair in Westfield, IN — HCCR",
    metaDescription:
      "Commercial concrete repair in Westfield, IN — Grand Park hospitality, US-31 retail & new commercial. Lots, sidewalks, ADA. Request a visit.",
    h1: "Commercial Concrete Repair in Westfield, Indiana",
    primaryKeyword: "commercial concrete repair Westfield IN",
    secondaryKeywords: [
      "parking lot concrete repair Westfield",
      "sidewalk repair Westfield IN",
      "Grand Park area concrete repair",
      "loading dock repair Westfield Indiana",
    ],
    intro:
      "Westfield is one of the fastest-growing commercial markets in Hamilton County, and much of that growth orbits Grand Park — the sports campus whose tournament weekends flood nearby hotels, restaurants, and retail with traffic and parking demand. We repair commercial concrete across Westfield, from the high-turnover hospitality and retail concrete around Grand Park and US-31 to the newer office and light-industrial development reshaping the city.",
    localContext: [
      "The Grand Park Sports Campus and its surrounding hospitality district",
      "The U.S. 31 corridor and its commercial interchanges",
      "SR-32 / East Main Street and downtown Westfield (Grand Junction)",
      "Wheeler Road and the growing commercial/industrial areas",
      "New mixed-use and office development across the city",
    ],
    sections: [
      {
        h2: "Concrete built for Grand Park volume",
        paragraphs: [
          "The hospitality and retail properties serving Grand Park see traffic patterns most suburban commercial sites never do: near-empty mid-week, then thousands of visitors on a tournament weekend cycling through parking lots, entrances, and walkways in a compressed window. That feast-or-famine loading is hard on concrete — entrances, drive aprons, and parking sections that take a season's worth of wear in a few peak weekends. We repair and build that concrete for the surge, not the average.",
          "Beyond Grand Park, Westfield's rapid growth along US-31 and SR-32 means a steady stream of newer retail, office, and light-industrial properties whose concrete is already meeting its first round of Indiana winters and heavy commercial use.",
        ],
      },
      {
        h2: "Why Westfield commercial concrete fails",
        paragraphs: [
          "The dominant drivers are the same central-Indiana freeze-thaw and shrink-swell clay soils as the rest of the county, but Westfield's growth adds two wrinkles. First, the concentrated weekend traffic around Grand Park accelerates wear and trip-hazard formation at high-use entrances and walkways. Second, a lot of Westfield's commercial concrete is relatively new and built on recently-developed ground, so early settlement over consolidating fill and backfilled utility trenches is a common, correctable failure we see often.",
        ],
      },
      {
        h2: "Scheduling around the tournament calendar",
        paragraphs: [
          "For properties tied to Grand Park, timing is everything. A concrete project that runs during a major tournament weekend is a disaster; the same project mid-week is invisible. We plan Westfield hospitality and retail work around the event calendar, using the slow windows to repair entrances, parking, and walkways so the property is at its best when the crowds arrive. For non-event properties, we phase the work the usual way to keep the site open.",
        ],
      },
      {
        h2: "Repair, level, or build for the next phase",
        paragraphs: [
          "Because so much Westfield concrete is newer, settlement over fill is frequently the issue — and that often makes slab leveling, not replacement, the right and far cheaper answer for a sunken approach or walkway. Where a property is expanding, we coordinate repairs with the next phase of development so you are not repairing concrete that is about to be disturbed. The assessment sorts which path actually fits the asset.",
        ],
      },
      {
        h2: "Hospitality and a visitor-facing standard",
        paragraphs: [
          "The properties serving Grand Park are, in effect, Westfield's front door for the tens of thousands of visiting families who pass through each year, and they are judged accordingly. Hotels, restaurants, and retail in the area cannot afford the look of deferred maintenance when a tournament weekend arrives — a cracked entrance or a pot-holed approach is the first thing a visiting parent sees.",
          "We treat that visitor-facing standard as part of the scope, timing entrance, walkway, and parking repairs so a property presents at its best for peak weekends, and prioritizing the surfaces that shape a first impression at the curb and the door.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you schedule Westfield work around Grand Park tournament weekends?",
        a: "Yes, and we strongly recommend it. We plan hospitality and retail concrete work around the Grand Park event calendar, using slower mid-week and off-tournament windows so entrances, parking, and walkways are repaired and at their best before the crowds arrive rather than torn up during a peak weekend.",
      },
      {
        q: "Our Westfield property is fairly new but the concrete is already settling — is that normal?",
        a: "It is common on newer Westfield development. A lot of commercial concrete here sits on recently-developed ground, and early settlement over consolidating fill or backfilled utility trenches is a frequent, correctable issue. Often it can be lifted back to grade with slab leveling rather than replaced, which is faster and far cheaper — we assess which applies.",
      },
      {
        q: "Do you handle the high-volume parking and entrance concrete around Grand Park?",
        a: "Yes. The feast-or-famine traffic those properties see — quiet mid-week, then thousands of visitors on a tournament weekend — is hard on entrances, aprons, and parking sections. We repair and build that concrete for the surge loading, not for an average suburban site.",
      },
    ],
    internalLinks: [
      { href: "/parking-lot-concrete-repair", anchor: "high-volume parking-lot repair" },
      { href: "/concrete-slab-leveling", anchor: "lifting settled new-construction slabs" },
      { href: "/sidewalk-repair", anchor: "entrance and walkway repair" },
      { href: "/ada-compliance-repairs", anchor: "ADA access for high-traffic sites" },
      { href: "/resources/commercial-concrete-repair-cost-guide", anchor: "how repair and leveling are priced" },
    ],
    project: {
      title: "Grand Park-area hospitality property — entrance & lot restoration",
      summary:
        "Lifted settled approach slabs and repaired entrance and parking concrete at a hospitality property serving the Grand Park area, scheduled into a mid-week, off-tournament window so the site was ready for the next event weekend.",
      metrics: ["Scheduled around the tournament calendar", "Settled slabs leveled, not replaced", "Entrances ready before peak weekend"],
    },
    images: [
      {
        position: "hero",
        filename: "concrete-repair-westfield-in-grand-park-hospitality.jpg",
        alt: "Commercial parking and entrance concrete repair near Grand Park in Westfield, Indiana",
        caption: "Concrete built for Grand Park-area traffic surges.",
      },
      {
        position: "inline",
        filename: "westfield-us31-commercial-concrete.jpg",
        alt: "New commercial concrete repair along the U.S. 31 corridor in Westfield, Indiana",
        caption: "Repair and leveling for Westfield's fast-growing commercial corridors.",
      },
    ],
  },

  // ── Zionsville (NEARBY — Boone County, not Hamilton) ─────────────────────────
  {
    slug: "zionsville",
    name: "Zionsville",
    path: "/concrete-repair-zionsville-in",
    nearby: true,
    county: "Boone County",
    metaTitle: "Commercial Concrete Repair in Zionsville, IN — HCCR",
    metaDescription:
      "Commercial concrete repair in nearby Zionsville, IN — Brick Street village, Michigan Road retail & Creekside corporate park. Request a visit.",
    h1: "Commercial Concrete Repair in Zionsville, Indiana",
    primaryKeyword: "commercial concrete repair Zionsville IN",
    secondaryKeywords: [
      "sidewalk repair Zionsville IN",
      "parking lot concrete repair Zionsville",
      "retail concrete repair Zionsville Indiana",
      "commercial concrete contractor Zionsville",
    ],
    intro:
      "Just west of Hamilton County in Boone County, Zionsville is a natural extension of our service area — close to home and squarely in the kind of commercial work we specialize in. Its character is distinctive: the historic, brick-paved Main Street Village, the Michigan Road (U.S. 421) retail corridor, and the Creekside corporate park all sit within a few minutes of each other, each with its own concrete demands. We repair commercial concrete across Zionsville for property managers, retail owners, and office and light-industrial operators.",
    localContext: [
      "The historic Brick Street / Main Street Village commercial district",
      "The Michigan Road (U.S. 421) retail and commercial corridor",
      "Creekside Corporate Park and surrounding office/flex space",
      "SR-334 and the village's connecting commercial routes",
      "Proximity to the Whitestown / I-65 logistics area to the west",
    ],
    sections: [
      {
        h2: "Nearby Zionsville — Boone County, not Hamilton",
        paragraphs: [
          "To be precise: Zionsville sits in Boone County, just over the Hamilton County line, so we serve it as a nearby market rather than as part of the county itself. That proximity is exactly why it fits our coverage — the same crews working Carmel and west-side Hamilton County properties reach Zionsville easily, and its commercial concrete needs are the same ones we handle every day.",
          "Zionsville's commercial fabric runs from the boutique retail of the Brick Street village to the Michigan Road corridor's higher-volume retail and the office and flex space at Creekside, with the large Whitestown logistics area just to the west adding industrial work to the mix.",
        ],
      },
      {
        h2: "The Brick Street village and its transitions",
        paragraphs: [
          "Downtown Zionsville's brick-paved Main Street is the village's signature, and the commercial concrete around it — storefront entrances, sidewalks, stoops, and the transitions between concrete and the historic brick — needs a careful hand. The priority here is finish-sensitive repair that keeps the district's character intact: flush, safe transitions at entrances and steps, and trip-hazard control on surfaces that carry steady pedestrian and dining traffic.",
        ],
      },
      {
        h2: "Michigan Road retail and Creekside commercial",
        paragraphs: [
          "Along Michigan Road, the work is conventional commercial concrete at scale — retail parking sections, entrance aprons, curbs, and dumpster pads taking heavy traffic and winter plowing. At Creekside Corporate Park and the surrounding office and flex space, it is office-grade walkways, entrances, parking, and the occasional dock and service concrete. Both see the central-Indiana freeze-thaw and clay-soil failures that drive most of our work, and both benefit from the same phased, documented approach.",
        ],
      },
      {
        h2: "Local, documented, and scheduled around your operation",
        paragraphs: [
          "Because Zionsville is close to our core Hamilton County coverage, property managers there get the same responsiveness and the same documentation-grade process as our in-county clients — on-site assessment, line-item proposal, phased scheduling that keeps the property open, and a closeout record for ownership and liability purposes. The village, the corridor, and the corporate park each get scheduling that fits how they actually operate.",
        ],
      },
      {
        h2: "Whitestown-area logistics and west-side industrial",
        paragraphs: [
          "Just west of the Zionsville village, the Whitestown and I-65 area has become one of central Indiana's busiest logistics and distribution corridors, and that industrial concrete is squarely in our wheelhouse. Warehouse floors, loading docks, truck courts, and heavy-duty pads in the area need the same forklift-rated, freight-ready repair we bring to the Hamilton County logistics corridors.",
          "That gives Zionsville-area property managers a single partner across very different assets — the finish-sensitive village storefronts, the Michigan Road retail, the Creekside offices, and the heavy-industrial floors and docks just to the west.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Zionsville in Hamilton County, and do you actually cover it?",
        a: "Zionsville is in Boone County, just west of the Hamilton County line — so we serve it as a nearby market rather than calling it part of the county. It is well within our coverage: the same crews working Carmel and west Hamilton County reach Zionsville easily, and its commercial concrete needs are exactly what we handle.",
      },
      {
        q: "Can you work on the concrete around the historic Brick Street village?",
        a: "Yes, with the care that district deserves. We repair storefront entrances, sidewalks, stoops, and the concrete-to-brick transitions around Main Street Village, focused on flush, safe surfaces and trip-hazard control that keep the village's character intact while carrying steady pedestrian and dining traffic.",
      },
      {
        q: "Do you handle larger retail and office concrete on Michigan Road and at Creekside?",
        a: "Yes. Along the Michigan Road corridor we repair retail parking, aprons, curbs, and dumpster pads at scale, and at Creekside Corporate Park and nearby flex space we handle office-grade walkways, entrances, parking, and service concrete — all with the same phased, documented approach we bring to Hamilton County.",
      },
    ],
    internalLinks: [
      { href: "/sidewalk-repair", anchor: "village sidewalk and entrance repair" },
      { href: "/parking-lot-concrete-repair", anchor: "Michigan Road retail parking repair" },
      { href: "/commercial-concrete-steps-repair", anchor: "storefront step and stoop restoration" },
      { href: "/curb-repair", anchor: "curb and dumpster-pad repair" },
      { href: "/resources/retail-center-sidewalk-maintenance-guide", anchor: "retail sidewalk maintenance" },
    ],
    project: {
      title: "Zionsville Michigan Road retail center — parking & apron repair",
      summary:
        "Repaired failing entrance aprons and isolated parking-section concrete at a Michigan Road retail center in Zionsville, phased across off-peak hours to keep the center open through the work.",
      metrics: ["Phased to keep the center open", "Entrance aprons rebuilt", "Failed sections isolated and replaced"],
    },
    images: [
      {
        position: "hero",
        filename: "concrete-repair-zionsville-in-michigan-road-retail.jpg",
        alt: "Commercial parking and apron concrete repair on Michigan Road in Zionsville, Indiana",
        caption: "Commercial concrete repair for nearby Zionsville, in Boone County.",
      },
      {
        position: "inline",
        filename: "zionsville-brick-street-village-entrance.jpg",
        alt: "Storefront entrance concrete near the historic Brick Street village in Zionsville, Indiana",
        caption: "Finish-sensitive repair around the historic Brick Street village.",
      },
    ],
  },
];

export function getCityContent(slug: string): RichCity | undefined {
  return CITIES_CONTENT.find((c) => c.slug === slug);
}
