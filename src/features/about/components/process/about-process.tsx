import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { StepTimeline } from "@/components/shared/step-timeline";
import { aboutPage } from "@/content/about/page";
import { processSteps } from "@/content/about/timeline";

/** Ten stages, two columns — a single column would be a very long scroll. */
export function AboutProcess() {
  return (
    <Section
      id="about-process"
      aria-labelledby="about-process-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />

      <Container>
        <SectionIntro
          headingId="about-process-heading"
          eyebrow={aboutPage.process.eyebrow}
          title={aboutPage.process.title}
          description={aboutPage.process.description}
        />
        <StepTimeline steps={processSteps} className="mt-16" />
      </Container>
    </Section>
  );
}
