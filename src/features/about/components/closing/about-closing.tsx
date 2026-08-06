import { Container } from "@/components/shared/container";
import { CtaPanel } from "@/components/shared/cta-panel";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { aboutFaqs } from "@/content/about/faq";
import { aboutPage } from "@/content/about/page";

/** Thin wrappers — the accordion and panel are shared, only the data differs. */

export function AboutFaq() {
  return (
    <Section
      id="about-faq"
      aria-labelledby="about-faq-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />
      <Container>
        <SectionIntro
          headingId="about-faq-heading"
          eyebrow={aboutPage.faq.eyebrow}
          title={aboutPage.faq.title}
          description={aboutPage.faq.description}
        />
        <FaqAccordion items={aboutFaqs} className="mt-16" />
      </Container>
    </Section>
  );
}

export function AboutCta() {
  const { cta } = aboutPage;

  return (
    <Section
      id="about-cta"
      aria-labelledby="about-cta-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />
      <Container>
        <CtaPanel
          headingId="about-cta-heading"
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
