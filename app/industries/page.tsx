import type { Metadata } from "next";
import { IndustriesGrid, FinalCTA } from "@/components/site/Sections";
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

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] py-20 text-white">
        <div className="container-x">
          <p className="eyebrow text-accent">Industries</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Built for Every Commercial Property Class
          </h1>
        </div>
      </section>
      <IndustriesGrid />
      <FinalCTA />
    </>
  );
}