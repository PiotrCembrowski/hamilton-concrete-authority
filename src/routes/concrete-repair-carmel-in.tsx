import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/concrete-repair-carmel-in")({
  head: () => ({
    meta: [
      { title: "Commercial Concrete Repair in Carmel, IN — HCCR" },
      {
        name: "description",
        content:
          "Commercial concrete repair in Carmel, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Carmel property managers.",
      },
      { property: "og:title", content: "Concrete Repair in Carmel, IN" },
      {
        property: "og:description",
        content: "Commercial concrete repair for Carmel, IN property managers and commercial owners.",
      },
      { property: "og:url", content: "/concrete-repair-carmel-in" },
    ],
    links: [{ rel: "canonical", href: "/concrete-repair-carmel-in" }],
  }),
  component: () => (
    <>
      <CityPageTemplate city="Carmel" />
      <FinalCTA />
    </>
  ),
});
