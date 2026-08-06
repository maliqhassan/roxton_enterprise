import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { buttonVariants, quoteCtaClass } from "@/components/ui/button";
import { servicesPage } from "@/content/services/page";
import { cn } from "@/lib/utils";

const { cta } = servicesPage;

const sharedButtonClass =
  "button-hover h-[60px] rounded-[14px] px-8 text-base font-semibold";

/**
 * Closing conversion panel. Mirrors the homepage CTA's construction — inset
 * navy card, soft glows, hollow-out primary — so the two pages close the
 * same way rather than each inventing an ending.
 */
export function ServicesCta() {
  return (
    <Section
      id="services-cta"
      aria-labelledby="services-cta-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <Container>
        <div className="bg-primary relative isolate overflow-hidden rounded-[32px] px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-20">
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
            <div className="bg-accent/25 absolute -top-24 -left-16 size-[26rem] rounded-full blur-[90px]" />
            <div className="absolute -right-20 -bottom-28 size-[30rem] rounded-full bg-[#2f6bd8]/25 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-[900px]">
            <Reveal variant="fade-up">
              <div className="flex items-center justify-center gap-4">
                <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
                <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
                  {cta.eyebrow}
                </p>
                <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
              </div>
            </Reveal>

            <Heading
              id="services-cta-heading"
              level={2}
              size="display"
              className="text-primary-foreground mt-6 font-black"
            >
              <TextSplitReveal text={cta.title} />
            </Heading>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-body-lg text-primary-foreground/90 mx-auto mt-6 max-w-[760px]">
                {cta.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <Link
                  href={cta.primaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "accent", size: "lg" }),
                    sharedButtonClass,
                    quoteCtaClass,
                    "gap-2",
                  )}
                >
                  {cta.primaryCta.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
                  />
                </Link>
                <Link
                  href={cta.secondaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    sharedButtonClass,
                    "border-primary-foreground/60 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground border-2 bg-transparent [--fill-color:rgb(255_255_255_/_0.14)] hover:backdrop-blur-md",
                  )}
                >
                  {cta.secondaryCta.label}
                </Link>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.45}>
              <ul
                aria-label="What working with Roxton includes"
                className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:max-w-none sm:grid-cols-4"
              >
                {cta.trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="text-body-sm text-primary-foreground/90 flex items-center justify-center gap-2 font-medium"
                  >
                    <span className="bg-accent/20 text-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                    </span>
                    {badge}
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
