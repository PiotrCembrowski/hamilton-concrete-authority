import { createFileRoute } from "@tanstack/react-router";
import { IndustriesGrid, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served — Hamilton County Concrete Repair" },
      {
        name: "description",
        content:
          "Commercial concrete repair for retail centers, warehouses, HOAs, office parks, medical, and municipal properties in Hamilton County, IN.",
      },
      { property: "og:title", content: "Industries Served" },
      { property: "og:description", content: "Commercial property types we serve across Hamilton County, IN." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
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
  ),
});
