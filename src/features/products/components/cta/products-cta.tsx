import { Container } from "@/components/shared/container";
import { CtaPanel } from "@/components/shared/cta-panel";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { productsPage } from "@/content/products/page";

const { cta } = productsPage;

/** Thin wrapper: the panel itself is shared, only the copy differs. */
export function ProductsCta() {
  return (
    <Section
      id="products-cta"
      aria-labelledby="products-cta-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />

      <Container>
        <CtaPanel
          headingId="products-cta-heading"
          eyebrow={cta.eyebrow}
          title={cta.title}
          description={cta.description}
          primaryCta={cta.primaryCta}
          secondaryCta={cta.secondaryCta}
          trustBadges={cta.trustBadges}
        />
      </Container>
    </Section>
  );
}
