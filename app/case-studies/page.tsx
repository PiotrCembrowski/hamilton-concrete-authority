import type { Metadata } from "next";
import { CaseStudies, FinalCTA } from "@/components/site/Sections";
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
            Note for review: the examples below are illustrative placeholders. Replace each with a
            real, verifiable project before publishing — do not present invented specifics as fact.
          </p>
        </div>
      </section>
      <CaseStudies />
      <FinalCTA />
    </>
  );
}