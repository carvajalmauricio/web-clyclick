import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ProjectShowcase } from "@/components/project-showcase";
import { Hero } from "@/components/hero";
import {
  ProductGrid,
  WhyClyclick,
  CustomDevBlock,
  Niches,
  FinalCta,
} from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `https://${site.domain}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: `https://${site.domain}/`,
  logo: `https://${site.domain}/icon.png`,
  email: site.email,
  sameAs: Object.values(site.socials),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Niches />
      <ProjectShowcase />
      <WhyClyclick />
      <CustomDevBlock />
      <ProductGrid />
      <FinalCta />
    </>
  );
}
