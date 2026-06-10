import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/site";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Commercial Concrete Repair Services — Hamilton County, IN" },
      {
        name: "description",
        content:
          "Full list of commercial concrete repair services for Hamilton County, Indiana — sidewalks, curbs, loading docks, warehouse floors, ADA, and more.",
      },
      { property: "og:title", content: "Services — Hamilton County Concrete Repair" },
      { property: "og:description", content: "Specialized commercial concrete repair services across Hamilton County, IN." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] py-20 text-white">
        <div className="container-x">
          <p className="eyebrow text-accent">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Commercial Concrete Repair Services Across Hamilton County
          </h1>
          <p className="mt-5 max-w-2xl text-white/75 md:text-lg">
            Specialized scopes for commercial properties — engineered, documented, and scheduled around your operations.
          </p>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[color:var(--color-primary)] font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)] group-hover:text-accent">
                Service details <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
