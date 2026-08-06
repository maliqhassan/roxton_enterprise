import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { aboutPage } from "@/content/about/page";
import { leadershipPrinciples } from "@/content/about/values";

const { leadership } = aboutPage;

/**
 * Image left, philosophy right, with the four operating principles beneath as
 * a two-column grid inside the copy column.
 */
export function AboutLeadership() {
  return (
    <Section
      id="leadership"
      aria-labelledby="leadership-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="image">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl">
              <Image
                src={leadership.image.src}
                alt={leadership.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="from-primary/35 absolute inset-0 bg-gradient-to-t to-transparent"
              />
            </div>
          </Reveal>

          <div>
            <Reveal variant="fade-up">
              <div className="flex items-center gap-4">
                <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
                  {leadership.eyebrow}
                </p>
                <span aria-hidden="true" className="bg-accent/40 h-px w-12 shrink-0" />
              </div>
            </Reveal>

            <Heading id="leadership-heading" level={2} size="h1" className="mt-5">
              <TextSplitReveal text={leadership.title} />
            </Heading>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-body-lg text-muted-foreground mt-5">
                {leadership.description}
              </p>
            </Reveal>

            <IconCardGrid
              items={leadershipPrinciples}
              ariaLabel="Our operating principles"
              columns={2}
              className="mt-8"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
