import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Commercial Concrete Repair Projects" },
      {
        name: "description",
        content:
          "Real commercial concrete repair projects — retail, warehouse, HOA, office, and medical — completed throughout Hamilton County, IN.",
      },
      { property: "og:title", content: "Case Studies" },
      { property: "og:description", content: "Commercial concrete repair projects in Hamilton County, IN." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: () => (
    <>
      <section className="bg-[color:var(--color-primary)] py-20 text-white">
        <div className="container-x">
          <p className="eyebrow text-accent">Case Studies</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Documented Commercial Concrete Outcomes
          </h1>
        </div>
      </section>
      <CaseStudies />
      <FinalCTA />
    </>
  ),
});
