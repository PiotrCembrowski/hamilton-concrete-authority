import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRY_PAGES } from "@/data/industries";
import { FinalCTA } from "@/components/site/Sections";
import { BASE_URL, getStaticRouteMeta } from "@/lib/route-seo";

const routeMeta = getStaticRouteMeta("/industries");

export const metadata: Metadata = {
  title: routeMeta?.title,
  description: routeMeta?.description,
  alternates: {
    canonical: routeMeta ? `${BASE_URL}${routeMeta.canonical}` : undefined,
  },
  openGraph: {
    title: "Industries Served",
    description: "Commercial property types we serve across Hamilton County, IN.",
    url: `${BASE_URL}/industries`,
  },
};

// Property classes we serve that route to a relevant service rather than a
// dedicated page (kept honest — no empty cards).
const ALSO_SERVING = [
  {
    title: "Warehouses & Distribution",
    desc: "Forklift-rated floors, slab joints, and dock concrete for active logistics facilities.",
    href: "/warehouse-floor-repair",
  },
  {
    title: "Industrial Facilities",
    desc: "Heavy-duty pavement, loading docks, and structural slab repair.",
    href: "/loading-dock-repair",
  },
  {
    title: "Municipal & Public Properties",
    desc: "Public-facing sidewalks, ramps, and ADA access maintained to code.",
    href: "/ada-compliance-repairs",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] py-20 text-white">
        <div className="container-x">
          <p className="eyebrow text-accent">Industries</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Built for Every Commercial Property Class
          </h1>
          <p className="mt-5 max-w-2xl text-white/75 md:text-lg">
            Different assets carry different concrete priorities — an HOA board budgeting a reserve,
            a retail center protecting storefront traffic, a medical campus guarding patient access.
            We scope, schedule, and document each to its asset class across Hamilton County, Indiana.
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-x">
          <p className="eyebrow">Property Types We Specialize In</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_PAGES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/${ind.slug}`}
                className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <div className="h-1 w-10 bg-accent" />
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {ind.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{ind.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] group-hover:text-accent">
                  See {ind.industryName} <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <p className="eyebrow mt-16">Also Serving</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALSO_SERVING.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group flex h-full flex-col rounded-sm border border-border bg-[color:var(--color-surface)] p-6 transition-all hover:border-accent"
              >
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] group-hover:text-accent">
                  Relevant service <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
