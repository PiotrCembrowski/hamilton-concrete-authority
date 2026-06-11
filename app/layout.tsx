import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "@/styles.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ORG_JSONLD, WEBSITE_JSONLD } from "@/components/site/Schema";
import { BASE_URL } from "@/lib/route-seo";
import { Providers } from "./providers";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-next",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-next",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Commercial Concrete Repair — Hamilton County, IN",
  description:
    "Commercial concrete repair specialists serving property managers, HOAs, retail centers, and warehouses throughout Hamilton County, Indiana.",
  openGraph: {
    type: "website",
    siteName: "Hamilton County Concrete Repair",
    title: "Commercial Concrete Repair — Hamilton County, IN",
    description:
      "Commercial concrete repair specialists serving property managers, HOAs, retail centers, and warehouses throughout Hamilton County, Indiana.",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "theme-color": "#1C2B39",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <body>
        <Providers>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
      </body>
    </html>
  );
}