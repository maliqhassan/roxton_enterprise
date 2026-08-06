import type { Metadata } from "next";

import { servicesPage } from "@/content/services/page";
import { ServicesCta } from "@/features/services/components/cta/services-cta";
import { ServicesFaq } from "@/features/services/components/faq/services-faq";
import { ServicesHero } from "@/features/services/components/hero/services-hero";
import { ServicesIndustries } from "@/features/services/components/industries/services-industries";
import { ServicesOverview } from "@/features/services/components/overview/services-overview";
import { ProcessTimeline } from "@/features/services/components/process/process-timeline";
import { ServiceDetails } from "@/features/services/components/service-detail/service-details";
import { ServicesWhyChoose } from "@/features/services/components/why-choose/services-why-choose";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: servicesPage.hero.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetails />
      <ProcessTimeline />
      <ServicesIndustries />
      <ServicesWhyChoose />
      <ServicesFaq />
      <ServicesCta />
    </>
  );
}
