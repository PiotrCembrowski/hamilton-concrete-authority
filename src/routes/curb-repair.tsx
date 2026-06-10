import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/site";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { FinalCTA } from "@/components/site/Sections";

const service = SERVICES[2];

export const Route = createFileRoute("/curb-repair")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: "/curb-repair" },
    ],
    links: [{ rel: "canonical", href: "/curb-repair" }],
  }),
  component: () => (
    <>
      <ServicePageTemplate service={service} />
      <FinalCTA />
    </>
  ),
});
