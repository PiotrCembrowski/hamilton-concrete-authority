import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CASE_STUDIES_CONTENT } from "@/data/case-studies";
import { FinalCTA } from "@/components/site/Sections";
import { BASE_URL, getStaticRouteMeta } from "@/lib/route-seo";

const routeMeta = getStaticRouteMeta("/case-studies");

export const metadata: Metadata = {
  title: routeMeta?.title,
  description: routeMeta?.description,
  alternates: {
    canonical: routeMeta ? `${BASE_URL}${routeMeta.canonical}` : undefined,
  },
  openGraph: {
    title: "Case Studies",
    description: "Commercial concrete repair projects in Hamilton County, IN.",
    url: `${BASE_URL}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] py-20 text-white">
        <div className="container-x">
          <p className="eyebrow text-accent">Case Studies</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Documented Commercial Concrete Outcomes
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-white/70">
            Note for review: the projects below are illustrative placeholders. Replace each with a
            real, verifiable project before publishing — do not present invented specifics as fact.
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_CONTENT.map((cs) => (
            <Link
              key={cs.slug}
              href={cs.path}
              className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                  {cs.industry}
                </span>
                <span className="rounded-sm border border-dashed border-accent px-1.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider text-accent">
                  Placeholder
                </span>
              </div>
              <h2 className="mt-3 font-display text-lg font-semibold text-foreground group-hover:text-accent">
                {cs.title}
              </h2>
              <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 text-accent" /> {cs.cityName}, Indiana
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{cs.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] group-hover:text-accent">
                Read the case study <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
