export const SITE = {
  name: "Hamilton County Concrete Repair",
  shortName: "HCCR",
  phone: "(317) 555-0214",
  phoneHref: "tel:+13175550214",
  email: "info@hamiltoncountyconcreterepair.com",
  region: "Hamilton County, Indiana",
  tagline: "Commercial Concrete Repair Specialists",
};

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "commercial-concrete-repair",
    title: "Commercial Concrete Repair",
    short: "Full-service repair for commercial pavement, slabs, and structural concrete.",
    description:
      "Comprehensive commercial concrete repair across Hamilton County for property managers, facility directors, and commercial owners. We restore the integrity, safety, and appearance of high-traffic surfaces with minimal business disruption.",
    bullets: [
      "Structural slab and pavement repair",
      "Spalling, scaling, and surface restoration",
      "Crack injection and joint resealing",
      "Engineered specifications and reporting",
    ],
    metaTitle: "Commercial Concrete Repair in Hamilton County, IN",
    metaDescription:
      "Commercial concrete repair for property managers, HOAs, and facilities across Hamilton County, Indiana. Request a free site assessment.",
  },
  {
    slug: "sidewalk-repair",
    title: "Sidewalk Repair",
    short: "Eliminate trip hazards and restore safe, ADA-compliant pedestrian access.",
    description:
      "Sidewalk repair for retail centers, HOAs, office parks, and municipal properties. We address cracking, settlement, lifting panels, and surface deterioration with code-compliant results.",
    bullets: [
      "Panel replacement and grinding",
      "ADA-compliant transitions",
      "Settlement and heave repair",
      "Tripping hazard remediation",
    ],
    metaTitle: "Commercial Sidewalk Repair — Hamilton County, IN",
    metaDescription:
      "Sidewalk repair, panel replacement, and trip hazard removal for commercial properties throughout Hamilton County, Indiana.",
  },
  {
    slug: "curb-repair",
    title: "Curb Repair",
    short: "Curb, gutter, and ribbon repair that holds up to commercial traffic.",
    description:
      "Damaged curbs hurt drainage, drivability, and property appearance. We replace and repair concrete curbs, gutters, and parking islands across Hamilton County commercial properties.",
    bullets: [
      "Curb and gutter replacement",
      "Parking lot island repair",
      "Drainage correction",
      "ADA ramps and aprons",
    ],
    metaTitle: "Commercial Curb Repair — Hamilton County, IN",
    metaDescription:
      "Concrete curb and gutter repair for parking lots, retail centers, and commercial properties in Hamilton County, Indiana.",
  },
  {
    slug: "loading-dock-repair",
    title: "Loading Dock Repair",
    short: "Heavy-duty dock pit, approach, and apron repair for active facilities.",
    description:
      "Loading docks take constant abuse. We rebuild damaged dock pits, approach slabs, leveler embeds, and bumper blocks—engineered to handle continuous freight traffic.",
    bullets: [
      "Dock pit and apron reconstruction",
      "Approach slab replacement",
      "Bumper block and embed repair",
      "Scheduled around shipping windows",
    ],
    metaTitle: "Loading Dock Concrete Repair — Hamilton County, IN",
    metaDescription:
      "Loading dock concrete repair for warehouses and distribution centers in Hamilton County, Indiana. Minimize downtime with scheduled work windows.",
  },
  {
    slug: "concrete-replacement",
    title: "Concrete Replacement",
    short: "Full demo and replacement when repair is no longer cost-effective.",
    description:
      "When deterioration is too advanced for repair, we handle full removal and replacement of slabs, sidewalks, drives, and pads—engineered for long service life.",
    bullets: [
      "Tear-out and disposal",
      "Engineered base preparation",
      "Reinforced placement",
      "Control joint design",
    ],
    metaTitle: "Commercial Concrete Replacement — Hamilton County, IN",
    metaDescription:
      "Full concrete replacement for commercial properties throughout Hamilton County, Indiana. Engineered, code-compliant installations.",
  },
  {
    slug: "parking-lot-concrete-repair",
    title: "Parking Lot Concrete Repair",
    short: "Concrete sections, drive lanes, and entry pads built to last.",
    description:
      "We repair concrete sections within commercial parking lots—drive lanes, dumpster pads, entry aprons—improving safety, appearance, and asset value.",
    bullets: [
      "Drive lane and apron repair",
      "Dumpster pad replacement",
      "Stripe-ready surface finishes",
      "Phased work to keep lots open",
    ],
    metaTitle: "Parking Lot Concrete Repair — Hamilton County, IN",
    metaDescription:
      "Concrete repair for commercial parking lots throughout Hamilton County, IN. Phased scheduling to keep your property operational.",
  },
  {
    slug: "trip-hazard-removal",
    title: "Trip Hazard Removal",
    short: "Liability-focused remediation of uneven sidewalks and walkways.",
    description:
      "Uneven sidewalks are one of the most common slip-and-fall liability sources. We document, grind, and replace hazards to keep your property defensible and ADA-aligned.",
    bullets: [
      "Hazard documentation and report",
      "Precision grinding",
      "Panel replacement when needed",
      "Liability-defensible records",
    ],
    metaTitle: "Trip Hazard Removal — Hamilton County, IN",
    metaDescription:
      "Trip hazard removal for commercial sidewalks across Hamilton County, Indiana. Reduce liability with documented remediation.",
  },
  {
    slug: "warehouse-floor-repair",
    title: "Warehouse Floor Repair",
    short: "Joint repair, slab restoration, and surface protection for industrial floors.",
    description:
      "Warehouse floors take constant punishment from forklifts and pallet jacks. We repair joints, cracks, and spalled surfaces to protect equipment and keep operations moving.",
    bullets: [
      "Joint armoring and re-fill",
      "Crack and spall repair",
      "Surface densification",
      "Forklift-traffic ready cures",
    ],
    metaTitle: "Warehouse Floor Repair — Hamilton County, IN",
    metaDescription:
      "Industrial warehouse floor repair throughout Hamilton County, IN—joint repair, slab restoration, and surface protection.",
  },
  {
    slug: "ada-compliance-repairs",
    title: "ADA Compliance Repairs",
    short: "Bring sidewalks, ramps, and transitions into ADA conformance.",
    description:
      "We assess and repair non-compliant ramps, transitions, and walkways—reducing liability exposure and ensuring access for every user.",
    bullets: [
      "Ramp slope and landing corrections",
      "Detectable warning installation",
      "Cross-slope remediation",
      "Documented compliance reporting",
    ],
    metaTitle: "ADA Compliance Concrete Repairs — Hamilton County, IN",
    metaDescription:
      "ADA compliance concrete repairs for commercial properties in Hamilton County, Indiana. Reduce liability and ensure access.",
  },
];

export const INDUSTRIES = [
  { title: "Retail Centers", desc: "Sidewalks, entryways, and parking concrete for active retail." },
  { title: "Industrial Facilities", desc: "Heavy-duty pavement and structural concrete repair." },
  { title: "Warehouses", desc: "Loading docks, slab joints, and forklift-rated floors." },
  { title: "HOA Communities", desc: "Common-area sidewalks, curbs, and shared concrete assets." },
  { title: "Apartment Complexes", desc: "Walkways, stair pads, and entry concrete restoration." },
  { title: "Office Parks", desc: "Premium curb appeal and safe pedestrian access." },
  { title: "Medical Facilities", desc: "ADA-aligned access for patients, staff, and visitors." },
  { title: "Municipal Properties", desc: "Public-facing concrete maintained to code." },
];

export const PROBLEMS = [
  "Cracked Concrete",
  "Uneven Sidewalks",
  "Damaged Curbs",
  "Settlement Issues",
  "Spalling Concrete",
  "Trip Hazards",
  "Broken Loading Docks",
  "Parking Lot Deterioration",
];

export const BENEFITS = [
  { title: "Minimize Liability Risks", desc: "Document and remediate trip hazards before they become claims." },
  { title: "Extend Asset Life", desc: "Targeted repair adds years to your concrete investment." },
  { title: "Improve Property Appearance", desc: "Clean lines and smooth surfaces lift property perception." },
  { title: "Maintain ADA Compliance", desc: "Keep ramps, transitions, and walkways code-aligned." },
  { title: "Reduce Long-Term Costs", desc: "Repair now to defer expensive replacement cycles." },
  { title: "Professional Project Management", desc: "Single point of contact, scheduled around operations." },
];

export const PROCESS = [
  { step: "01", title: "Site Inspection", desc: "On-site walkthrough and condition documentation." },
  { step: "02", title: "Repair Assessment", desc: "Scope of work tied to safety, compliance, and lifecycle." },
  { step: "03", title: "Detailed Proposal", desc: "Line-item scope, schedule, and pricing." },
  { step: "04", title: "Professional Repairs", desc: "Crews mobilized around your operations." },
  { step: "05", title: "Final Quality Review", desc: "Walk-through, documentation, and warranty." },
];

export const CITIES = [
  { slug: "westfield", name: "Westfield" },
  { slug: "carmel", name: "Carmel" },
  { slug: "fishers", name: "Fishers" },
  { slug: "noblesville", name: "Noblesville" },
  { slug: "zionsville", name: "Zionsville" },
];

export const CASE_STUDIES = [
  {
    title: "Retail Center Sidewalk Replacement",
    industry: "Retail",
    summary:
      "Removed and replaced 2,400 SF of failing sidewalk across a multi-tenant retail center—completed in nightly work windows with no tenant disruption.",
    metrics: ["2,400 SF replaced", "Zero tenant downtime", "ADA transitions added"],
  },
  {
    title: "Warehouse Loading Dock Restoration",
    industry: "Industrial",
    summary:
      "Rebuilt deteriorated dock pits and approach slabs at a regional distribution center while keeping inbound freight on schedule.",
    metrics: ["6 dock positions", "Phased nightly closures", "Freight schedule preserved"],
  },
  {
    title: "HOA Concrete Repair Program",
    industry: "HOA",
    summary:
      "Multi-year sidewalk and curb repair program for a 380-home HOA. Annual inspections, prioritized scope, and predictable budgeting.",
    metrics: ["380 homes", "Annual inspection cadence", "Predictable reserve spend"],
  },
  {
    title: "Office Park Trip Hazard Removal",
    industry: "Office",
    summary:
      "Documented and remediated 41 trip hazards across a Class-A office park entry network in one weekend.",
    metrics: ["41 hazards remediated", "Single weekend", "Liability documentation delivered"],
  },
  {
    title: "Medical Facility ADA Upgrades",
    industry: "Medical",
    summary:
      "Brought patient entry walkways into ADA conformance, including ramp slopes, detectable warnings, and landing zones.",
    metrics: ["3 patient entries", "ADA conformance achieved", "Open during construction"],
  },
];

export const FAQS = [
  {
    q: "How much does commercial concrete repair cost?",
    a: "Pricing depends on scope, access, square footage, and finish requirements. After a free site assessment we deliver a line-item proposal so you can budget with confidence.",
  },
  {
    q: "When should concrete be repaired instead of replaced?",
    a: "If the base is stable and damage is localized—cracks, spalling, isolated panels—repair is usually the right call. Widespread settlement or structural failure typically warrants replacement.",
  },
  {
    q: "Can damaged sidewalks create liability risks?",
    a: "Yes. Uneven sidewalks are one of the most common premises liability exposures. Documented remediation strengthens your defensibility and reduces claim risk.",
  },
  {
    q: "How long do repairs last?",
    a: "Properly engineered repairs typically deliver 10+ years of service depending on base conditions, traffic, and exposure. We back our work with a written warranty.",
  },
  {
    q: "Do you provide ADA compliance repairs?",
    a: "Yes. We assess and remediate ramps, transitions, cross-slopes, and detectable warnings to bring properties into ADA conformance.",
  },
  {
    q: "Can repairs be completed without disrupting business operations?",
    a: "Almost always. We routinely work nights, weekends, and phased schedules to keep your property open and operating.",
  },
];

export const RESOURCES = [
  { slug: "commercial-concrete-repair-cost-guide", title: "Commercial Concrete Repair Cost Guide" },
  { slug: "concrete-repair-vs-replacement", title: "Concrete Repair vs Replacement" },
  { slug: "ada-compliance-sidewalk-requirements", title: "ADA Compliance Sidewalk Requirements" },
  { slug: "common-causes-of-concrete-failure", title: "Common Causes of Concrete Failure" },
  { slug: "warehouse-floor-maintenance-guide", title: "Warehouse Floor Maintenance Guide" },
  { slug: "property-manager-concrete-inspection-checklist", title: "Property Manager Concrete Inspection Checklist" },
  { slug: "retail-center-sidewalk-maintenance-guide", title: "Retail Center Sidewalk Maintenance Guide" },
];
