import { createFileRoute } from "@tanstack/react-router";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/concrete-repair-zionsville-in")({
  head: () => ({
    meta: [
      { title: "Commercial Concrete Repair in Zionsville, IN — HCCR" },
      {
        name: "description",
        content:
          "Commercial concrete repair in Zionsville, Indiana. Sidewalks, parking lots, loading docks, ADA, and warehouse floors for Zionsville property managers.",
      },
      { property: "og:title", content: "Concrete Repair in Zionsville, IN" },
      {
        property: "og:description",
        content: "Commercial concrete repair for Zionsville, IN property managers and commercial owners.",
      },
      { property: "og:url", content: "/concrete-repair-zionsville-in" },
    ],
    links: [{ rel: "canonical", href: "/concrete-repair-zionsville-in" }],
  }),
  component: () => (
    <>
      <CityPageTemplate city="Zionsville" />
      <FinalCTA />
    </>
  ),
});
