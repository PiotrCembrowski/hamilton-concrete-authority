import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowUpRight } from "lucide-react";
import { CITIES } from "@/data/site";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Hamilton County, Indiana" },
      {
        name: "description",
        content:
          "Commercial concrete repair across Hamilton County, IN — Westfield, Carmel, Fishers, Noblesville, and Zionsville.",
      },
      { property: "og:title", content: "Service Areas — Hamilton County, IN" },
      { property: "og:description", content: "Cities we serve across Hamilton County, Indiana." },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: () => (
    <>
      <section className="bg-[color:var(--color-primary)] py-20 text-white">
        <div className="container-x">
          <p className="eyebrow text-accent">Service Areas</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Serving Commercial Properties Throughout Hamilton County
          </h1>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              to={`/concrete-repair-${c.slug}-in`}
              className="group rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
            >
              <MapPin className="h-5 w-5 text-accent" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">{c.name}, IN</h2>
              <p className="mt-1 text-sm text-muted-foreground">Commercial concrete repair across {c.name}.</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] group-hover:text-accent">
                View location <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  ),
});
