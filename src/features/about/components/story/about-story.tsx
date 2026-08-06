import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { StepTimeline } from "@/components/shared/step-timeline";
import { aboutPage } from "@/content/about/page";
import { storyMilestones } from "@/content/about/timeline";

/**
 * The company journey. Single column rather than two: six milestones read as a
 * continuous narrative, and splitting a story across columns breaks the thread
 * in a way a ten-step process diagram does not.
 */
export function AboutStory() {
  return (
    <Section
      id="our-story"
      aria-labelledby="our-story-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial />

      <Container>
        <SectionIntro
          headingId="our-story-heading"
          eyebrow={aboutPage.story.eyebrow}
          title={aboutPage.story.title}
          description={aboutPage.story.description}
        />
        <StepTimeline steps={storyMilestones} twoColumn={false} className="mt-16" />
      </Container>
    </Section>
  );
}
