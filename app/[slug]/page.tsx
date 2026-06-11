import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { FinalCTA } from "@/components/site/Sections";
import { SERVICES } from "@/data/site";
import {
  BASE_URL,
  getCityMetaBySlug,
  getServiceMetaBySlug,
  isCitySlug,
  isServiceSlug,
} from "@/lib/route-seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const serviceMeta = getServiceMetaBySlug(slug);
  if (serviceMeta) {
    return {
      title: serviceMeta.title,
      description: serviceMeta.description,
      alternates: { canonical: `${BASE_URL}${serviceMeta.canonical}` },
      openGraph: {
        title: serviceMeta.title,
        description: serviceMeta.description,
        url: `${BASE_URL}${serviceMeta.canonical}`,
      },
    };
  }

  const cityMeta = getCityMetaBySlug(slug);
  if (cityMeta) {
    return {
      title: cityMeta.title,
      description: cityMeta.description,
      alternates: { canonical: `${BASE_URL}${cityMeta.canonical}` },
      openGraph: {
        title: cityMeta.title,
        description: cityMeta.description,
        url: `${BASE_URL}${cityMeta.canonical}`,
      },
    };
  }

  return {};
}

export async function generateStaticParams() {
  return [
    ...SERVICES.map((service) => ({ slug: service.slug })),
    { slug: "concrete-repair-westfield-in" },
    { slug: "concrete-repair-carmel-in" },
    { slug: "concrete-repair-fishers-in" },
    { slug: "concrete-repair-noblesville-in" },
    { slug: "concrete-repair-zionsville-in" },
  ];
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;

  if (isServiceSlug(slug)) {
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
      <>
        <ServicePageTemplate service={service} />
        <FinalCTA />
      </>
    );
  }

  if (isCitySlug(slug)) {
    const city = slug.replace("concrete-repair-", "").replace("-in", "");
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);

    return (
      <>
        <CityPageTemplate city={cityName} />
        <FinalCTA />
      </>
    );
  }

  notFound();
}