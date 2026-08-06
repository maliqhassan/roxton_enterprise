import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { buttonVariants } from "@/components/ui/button";
import { whyChooseContent } from "@/content/home/why-choose-us";
import { FeatureGrid } from "@/features/home/components/why-choose-us/feature-grid";
import { FeatureImage } from "@/features/home/components/why-choose-us/feature-image";
import { WhyChooseHeader } from "@/features/home/components/why-choose-us/why-choose-header";
import { cn } from "@/lib/utils";

/**
 * "Why Choose Roxton" — the credibility section.
 *
 * A Server Component, and so is everything under it except the image panel:
 * the feature cards' lift, icon tint and gold rule are CSS hover states, so
 * the only JavaScript is the shared Reveal leaves plus the panel's parallax.
 */
export function WhyChooseUsSection() {
  return (
    <Section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      background="surface"
      // Specified at 140px; kept fluid so phones don't carry desktop padding.
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_7%,transparent),transparent_70%)]" />
        <div className="bg-accent/15 absolute -top-24 left-[6%] size-[420px] rounded-full blur-[80px]" />
        <div className="bg-primary/12 absolute right-[4%] -bottom-28 size-[460px] rounded-full blur-[90px]" />
        {/* Same 64px lined grid, opacity and origin as the sections above and
            below. Every section's backdrop starts at x=0, so a shared cell size
            keeps the vertical lines continuous across the seam — this section
            previously used a 26px dot field, which broke that run and made the
            boundary read as a mismatch rather than a change of tone. */}
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
        <WhyChooseHeader />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
          <FeatureImage />
          <FeatureGrid />
        </div>

        <Reveal variant="fade-up" delay={0.1}>
          <div className="mt-14 text-center">
            <Link
              href={whyChooseContent.cta.href}
              className={cn(
                buttonVariants({ variant: "accent", size: "lg" }),
                "button-hover h-12 rounded-xl px-7 text-base font-semibold",
              )}
            >
              {whyChooseContent.cta.label}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
