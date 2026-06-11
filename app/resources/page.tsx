import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RESOURCES } from "@/data/site";
import { FinalCTA } from "@/components/site/Sections";
import { BASE_URL, getStaticRouteMeta } from "@/lib/route-seo";

const routeMeta = getStaticRouteMeta("/resources");

export const metadata: Metadata = {
  title: routeMeta?.title,
  description: routeMeta?.description,
  alternates: {
    canonical: routeMeta ? `${BASE_URL}${routeMeta.canonical}` : undefined,
  },
  openGraph: {
    title: "Resource Center",
    description: "Commercial concrete repair resources and guides.",
    url: `${BASE_URL}/resources`,
  },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] py-20 text-white">
        <div className="container-x">
          <p className="eyebrow text-accent">Resource Center</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Guides for Property Managers & Facility Teams
          </h1>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <article
              key={r.slug}
              className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
            >
              <p className="eyebrow text-[10px]">Guide</p>
              <h2 className="mt-3 font-display text-lg font-semibold text-foreground">{r.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A practical resource for property managers and facility teams managing commercial concrete assets in Hamilton County.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] group-hover:text-accent"
              >
                Request from team <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}