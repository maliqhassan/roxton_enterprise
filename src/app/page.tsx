import type { Metadata } from "next";

import { AboutSection } from "@/features/home/components/about/about";
import { BrandsSection } from "@/features/home/components/brands/brands";
import { CtaSection } from "@/features/home/components/cta/cta";
import { HeroSection } from "@/features/home/components/hero/hero";
import { IndustriesSection } from "@/features/home/components/industries/industries";
import { ProductsServicesSection } from "@/features/home/components/products-services/products-services";
import { StatisticsSection } from "@/features/home/components/statistics-section";
import { TestimonialsSection } from "@/features/home/components/testimonials/testimonials";
import { WhyChooseUsSection } from "@/features/home/components/why-choose-us/why-choose-us";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  description:
    "Roxton Enterprises (Pvt) Ltd is an Islamabad-based procurement, logistics, and facility support company. We find it, we deliver it, on time.",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <BrandsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
