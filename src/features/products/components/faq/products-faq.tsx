import { Container } from "@/components/shared/container";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { productFaqs } from "@/content/products/faq";
import { productsPage } from "@/content/products/page";

/** Thin wrapper: the accordion itself is shared, only the data differs. */
export function ProductsFaq() {
  return (
    <Section
      id="products-faq"
      aria-labelledby="products-faq-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />

      <Container>
        <SectionIntro
          headingId="products-faq-heading"
          eyebrow={productsPage.faq.eyebrow}
          title={productsPage.faq.title}
          description={productsPage.faq.description}
        />
        <FaqAccordion items={productFaqs} className="mt-16" />
      </Container>
    </Section>
  );
}
