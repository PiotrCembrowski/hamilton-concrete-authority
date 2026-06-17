import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { IndustryPageTemplate } from "@/components/site/IndustryPageTemplate";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { FinalCTA } from "@/components/site/Sections";
import { SERVICES } from "@/data/site";
import { CITIES_CONTENT, getCityContent } from "@/data/cities";
import { INDUSTRY_PAGES, getIndustryPage } from "@/data/industries";
import {
  BASE_URL,
  getCityMetaBySlug,
  getIndustryMetaBySlug,
  getServiceMetaBySlug,
  isCitySlug,
  isIndustrySlug,
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

  const industryMeta = getIndustryMetaBySlug(slug);
  if (industryMeta) {
    return {
      title: industryMeta.title,
      description: industryMeta.description,
      alternates: { canonical: `${BASE_URL}${industryMeta.canonical}` },
      openGraph: {
        title: industryMeta.title,
        description: industryMeta.description,
        url: `${BASE_URL}${industryMeta.canonical}`,
      },
    };
  }

  return {};
}

export async function generateStaticParams() {
  return [
    ...SERVICES.map((service) => ({ slug: service.slug })),
    ...CITIES_CONTENT.map((c) => ({ slug: `concrete-repair-${c.slug}-in` })),
    ...INDUSTRY_PAGES.map((i) => ({ slug: i.slug })),
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
    const citySlug = slug.replace("concrete-repair-", "").replace("-in", "");
    const city = getCityContent(citySlug);
    if (!city) notFound();

    return (
      <>
        <CityPageTemplate city={city} />
        <FinalCTA />
      </>
    );
  }

  if (isIndustrySlug(slug)) {
    const industry = getIndustryPage(slug);
    if (!industry) notFound();

    return (
      <>
        <IndustryPageTemplate industry={industry} />
        <FinalCTA />
      </>
    );
  }

  notFound();
}