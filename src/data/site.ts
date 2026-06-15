export const SITE = {
  name: "Hamilton County Concrete Repair",
  shortName: "HCCR",
  // REQUIRES HUMAN REVIEW: the previous value, (317) 555-0214, was a placeholder
  // 555 exchange (a reserved, non-working number). It is replaced with a token so a
  // real tracking number can be set in one place via find-and-replace of {{REAL_PHONE}}.
  // For phoneHref, replace with the same number; browsers tolerate formatting in tel:.
  phone: "{{REAL_PHONE}}",
  phoneHref: "tel:{{REAL_PHONE}}",
  email: "info@hamiltoncountyconcreterepair.com",
  region: "Hamilton County, Indiana",
  tagline: "Commercial Concrete Repair Specialists",
};

// Service content (types + the full SERVICES array, now with deep per-page content)
// lives in ./services. Re-exported here so every existing import from "@/data/site"
// keeps working unchanged.
export type { RichService as ServiceItem } from "./content-types";
export { SERVICES } from "./services";

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
