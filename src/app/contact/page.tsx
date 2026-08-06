import type { Metadata } from "next";

import { ContactHero } from "@/features/contact/components/hero/contact-hero";
import {
  BusinessHours,
  ContactCta,
  ContactFaq,
  ContactFormSection,
  ContactInformation,
  OfficeLocation,
  WhyContact,
} from "@/features/contact/components/sections/contact-sections";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Roxton Enterprises for procurement, logistics, general order supply, IT equipment, office furniture and industrial supply solutions across Pakistan.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInformation />
      <ContactFormSection />
      <OfficeLocation />
      <BusinessHours />
      <WhyContact />
      <ContactFaq />
      <ContactCta />
    </>
  );
}
