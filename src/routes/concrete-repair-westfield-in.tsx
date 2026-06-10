import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/concrete-repair-westfield-in")({
  head: () => ({
    meta: [
      { title: "Commercial Concrete Repair in Westfield, IN — HCCR" },
      {
        name: "description",
        content:
          "Commercial concrete repair in Westfield, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Westfield property managers.",
      },
      { property: "og:title", content: "Concrete Repair in Westfield, IN" },
      {
        property: "og:description",
        content: "Commercial concrete repair for Westfield, IN property managers and commercial owners.",
      },
      { property: "og:url", content: "/concrete-repair-westfield-in" },
    ],
    links: [{ rel: "canonical", href: "/concrete-repair-westfield-in" }],
  }),
  component: () => (
    <>
      <CityPageTemplate city="Westfield" />
      <FinalCTA />
    </>
  ),
});
