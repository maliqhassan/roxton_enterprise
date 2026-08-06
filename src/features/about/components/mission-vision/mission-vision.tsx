import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { aboutPage } from "@/content/about/page";
import { coreValues, pillars } from "@/content/about/values";

/**
 * Mission and vision as two lead cards, then the eight core values beneath.
 *
 * The pillars get a heavier treatment than the values on purpose: they carry a
 * paragraph each and set up the values, so flattening all ten into one grid
 * would bury the two that matter most.
 */
export function MissionVision() {
  return (
    <Section
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop accentGlow />

      <Container>
        <SectionIntro
          headingId="mission-vision-heading"
          eyebrow={aboutPage.missionVision.eyebrow}
          title={aboutPage.missionVision.title}
          description={aboutPage.missionVision.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal
                key={pillar.id}
                variant="fade-up"
                delay={index * 0.08}
                className="h-full"
              >
                <article className="group border-border bg-background hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg">
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
                  />

                  <div className="flex items-center gap-4">
                    <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-12 items-center justify-center rounded-2xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    </span>
                    <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
                      {pillar.label}
                    </p>
                  </div>

                  <Heading level={3} size="h4" className="mt-5">
                    {pillar.title}
                  </Heading>
                  <p className="text-body text-muted-foreground mt-3">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade-up" delay={0.1}>
          <Heading level={3} size="h5" className="mt-16 text-center font-bold">
            Core Values
          </Heading>
        </Reveal>
        <IconCardGrid
          items={coreValues}
          ariaLabel="Our core values"
          columns={4}
          className="mt-8"
        />
      </Container>
    </Section>
  );
}
