import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/concrete-repair-fishers-in")({
  head: () => ({
    meta: [
      { title: "Commercial Concrete Repair in Fishers, IN — HCCR" },
      {
        name: "description",
        content:
          "Commercial concrete repair in Fishers, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Fishers property managers.",
      },
      { property: "og:title", content: "Concrete Repair in Fishers, IN" },
      {
        property: "og:description",
        content: "Commercial concrete repair for Fishers, IN property managers and commercial owners.",
      },
      { property: "og:url", content: "/concrete-repair-fishers-in" },
    ],
    links: [{ rel: "canonical", href: "/concrete-repair-fishers-in" }],
  }),
  component: () => (
    <>
      <CityPageTemplate city="Fishers" />
      <FinalCTA />
    </>
  ),
});
