import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { buttonVariants } from "@/components/ui/button";
import { aboutPage } from "@/content/about/page";
import { cn } from "@/lib/utils";

const { intro } = aboutPage;

/**
 * Image left, copy right, with the six capability highlights as a two-column
 * checklist. Stacks image-first on mobile, which keeps the visual anchor
 * before the wall of text.
 */
export function CompanyIntro() {
  return (
    <Section
      id="company-intro"
      aria-labelledby="company-intro-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="image">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl">
              <Image
                src={intro.image.src}
                alt={intro.image.alt}
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
                  {intro.eyebrow}
                </p>
                <span aria-hidden="true" className="bg-accent/40 h-px w-12 shrink-0" />
              </div>
            </Reveal>

            <Heading id="company-intro-heading" level={2} size="h1" className="mt-5">
              <TextSplitReveal text={intro.title} />
            </Heading>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-body-lg text-muted-foreground mt-5">
                {intro.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.25}>
              <ul
                aria-label="What we cover"
                className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
              >
                {intro.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-body-sm text-foreground flex items-start gap-2.5"
                  >
                    <span className="bg-accent/15 text-accent mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="fade-up" delay={0.35}>
              <Link
                href={intro.cta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "button-hover mt-9 h-12 gap-2 rounded-xl px-7 text-base font-semibold",
                )}
              >
                {intro.cta.label}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
