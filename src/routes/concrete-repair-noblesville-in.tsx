import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/concrete-repair-noblesville-in")({
  head: () => ({
    meta: [
      { title: "Commercial Concrete Repair in Noblesville, IN — HCCR" },
      {
        name: "description",
        content:
          "Commercial concrete repair in Noblesville, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Noblesville property managers.",
      },
      { property: "og:title", content: "Concrete Repair in Noblesville, IN" },
      {
        property: "og:description",
        content: "Commercial concrete repair for Noblesville, IN property managers and commercial owners.",
      },
      { property: "og:url", content: "/concrete-repair-noblesville-in" },
    ],
    links: [{ rel: "canonical", href: "/concrete-repair-noblesville-in" }],
  }),
  component: () => (
    <>
      <CityPageTemplate city="Noblesville" />
      <FinalCTA />
    </>
  ),
});
