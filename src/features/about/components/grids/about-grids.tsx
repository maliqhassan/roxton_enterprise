import { Container } from "@/components/shared/container";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { aboutPage } from "@/content/about/page";
import { expertiseAreas, servedIndustries, whyChooseItems } from "@/content/about/values";

/**
 * Three sections that differ only in copy, data and column count, so they
 * share one file rather than three near-identical ones. Each still renders its
 * own <section> with its own heading, so the document outline is unaffected.
 */

export function AboutWhyChoose() {
  return (
    <Section
      id="about-why-choose"
      aria-labelledby="about-why-choose-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial orbs />
      <Container>
        <SectionIntro
          headingId="about-why-choose-heading"
          eyebrow={aboutPage.whyChoose.eyebrow}
          title={aboutPage.whyChoose.title}
          description={aboutPage.whyChoose.description}
        />
        <IconCardGrid
          items={whyChooseItems}
          ariaLabel="Why organizations choose Roxton"
          columns={3}
          className="mt-16"
        />
      </Container>
    </Section>
  );
}

export function AboutExpertise() {
  return (
    <Section
      id="about-expertise"
      aria-labelledby="about-expertise-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />
      <Container>
        <SectionIntro
          headingId="about-expertise-heading"
          eyebrow={aboutPage.expertise.eyebrow}
          title={aboutPage.expertise.title}
          description={aboutPage.expertise.description}
        />
        <IconCardGrid
          items={expertiseAreas}
          ariaLabel="Areas of expertise"
          columns={4}
          className="mt-16"
        />
      </Container>
    </Section>
  );
}

export function AboutIndustries() {
  return (
    <Section
      id="about-industries"
      aria-labelledby="about-industries-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop accentGlow />
      <Container>
        <SectionIntro
          headingId="about-industries-heading"
          eyebrow={aboutPage.industries.eyebrow}
          title={aboutPage.industries.title}
          description={aboutPage.industries.description}
        />
        <IconCardGrid
          items={servedIndustries}
          ariaLabel="Industries we serve"
          columns={4}
          className="mt-16"
        />
      </Container>
    </Section>
  );
}
