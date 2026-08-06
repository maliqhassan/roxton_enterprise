import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Container } from "@/components/shared/container";
import { CtaPanel } from "@/components/shared/cta-panel";
import { Heading } from "@/components/shared/heading";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { buttonVariants, quoteCtaClass } from "@/components/ui/button";
import { leadershipPage, leadershipPrinciples } from "@/content/leadership/leadership";
import { cn } from "@/lib/utils";

/**
 * Section 1 — hero. Rises under the transparent header like every other page
 * hero, via -mt-[var(--height-header)] plus --spacing-page-hero-pt.
 */
export function LeadershipHero() {
  const { hero } = leadershipPage;

  return (
    <Section
      aria-labelledby="leadership-hero-heading"
      className="text-primary-foreground relative isolate -mt-[var(--height-header)] overflow-hidden pt-[var(--spacing-page-hero-pt)] pb-[var(--spacing-page-hero-pb)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(160deg, #0e2344 0%, #122e58 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgb(255_255_255/0.10),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(rgb(255 255 255) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="bg-accent/20 absolute -top-24 left-[8%] size-[24rem] rounded-full blur-[90px]" />
        <div className="absolute -right-16 -bottom-24 size-[28rem] rounded-full bg-[#2f6bd8]/25 blur-[100px]" />
      </div>

      <Container>
        <Reveal variant="fade-up">
          <div className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground [&_li]:text-primary-foreground/70 [&_[aria-current=page]]:text-accent">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Leadership" }]} />
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[52fr_48fr] lg:gap-16">
          <div>
            <Reveal variant="fade-up" delay={0.05}>
              <div className="flex items-center gap-4">
                <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
                  {hero.eyebrow}
                </p>
                <span aria-hidden="true" className="bg-accent/40 h-px w-12 shrink-0" />
              </div>
            </Reveal>

            <Heading
              id="leadership-hero-heading"
              level={1}
              size="section"
              className="mt-5"
            >
              <TextSplitReveal text={hero.title} />
            </Heading>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-body-lg text-primary-foreground/85 mt-6 max-w-[58ch]">
                {hero.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Link
                  href={hero.primaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "accent", size: "lg" }),
                    quoteCtaClass,
                    "button-hover h-[56px] gap-2 rounded-xl px-8 text-base font-semibold",
                  )}
                >
                  {hero.primaryCta.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
                  />
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "button-hover border-primary-foreground/60 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground h-[56px] rounded-xl border-2 bg-transparent px-8 text-base font-semibold [--fill-color:rgb(255_255_255_/_0.14)] hover:backdrop-blur-md",
                  )}
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal variant="image" delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-2xl">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="from-primary/50 absolute inset-0 bg-gradient-to-t to-transparent"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Section 2 — short centred introduction, closing on a divider that hands off
 * to the chairman panel.
 */
export function LeadershipIntro() {
  const { intro } = leadershipPage;

  return (
    <Section
      id="leadership-intro"
      aria-labelledby="leadership-intro-heading"
      className="relative isolate overflow-hidden pt-[clamp(4.5rem,9vw,8.75rem)] pb-0"
    >
      <SectionBackdrop />
      <Container>
        <SectionIntro
          headingId="leadership-intro-heading"
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
        />
        <Reveal variant="fade-up" delay={0.2}>
          <div
            aria-hidden="true"
            className="via-accent/40 mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent to-transparent"
          />
        </Reveal>
      </Container>
    </Section>
  );
}

/** Section 5 — six principles, from the shared grid. */
export function LeadershipPrinciples() {
  const { principles } = leadershipPage;

  return (
    <Section
      id="leadership-principles"
      aria-labelledby="leadership-principles-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop accentGlow />
      <Container>
        <SectionIntro
          headingId="leadership-principles-heading"
          eyebrow={principles.eyebrow}
          title={principles.title}
          description={principles.description}
        />
        <IconCardGrid
          items={leadershipPrinciples}
          ariaLabel="Our leadership principles"
          columns={3}
          className="mt-16"
        />
      </Container>
    </Section>
  );
}

/** Section 6 — image left, copy and highlight checklist right. */
export function WhyLeadership() {
  const { whyLeadership } = leadershipPage;

  return (
    <Section
      id="why-leadership"
      aria-labelledby="why-leadership-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial orbs />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="image">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl">
              <Image
                src={whyLeadership.image.src}
                alt={whyLeadership.image.alt}
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
                  {whyLeadership.eyebrow}
                </p>
                <span aria-hidden="true" className="bg-accent/40 h-px w-12 shrink-0" />
              </div>
              <Heading id="why-leadership-heading" level={2} size="h1" className="mt-5">
                <TextSplitReveal text={whyLeadership.title} />
              </Heading>
              <p className="text-body-lg text-muted-foreground mt-5">
                {whyLeadership.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <ul
                aria-label="What our leadership ensures"
                className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
              >
                {whyLeadership.highlights.map((highlight) => (
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
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** Section 7 — shared CTA panel. */
export function LeadershipCta() {
  const { cta } = leadershipPage;

  return (
    <Section
      id="leadership-cta"
      aria-labelledby="leadership-cta-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />
      <Container>
        <CtaPanel
          headingId="leadership-cta-heading"
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
