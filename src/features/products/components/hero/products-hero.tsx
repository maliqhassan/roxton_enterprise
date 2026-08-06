import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { buttonVariants, quoteCtaClass } from "@/components/ui/button";
import { productsPage } from "@/content/products/page";
import { cn } from "@/lib/utils";

const { hero } = productsPage;

/**
 * Page hero: copy left, image right, on the navy gradient.
 *
 * Registered in overlayHeaderRoutes, so the header floats over it
 * transparently until you scroll. That only works because the section pulls
 * itself up by -mt-[var(--height-header)] and restores the clearance with
 * --spacing-page-hero-pt; without the offset the transparent header would sit
 * over the page background and its light nav text would land on white.
 */
export function ProductsHero() {
  return (
    <Section
      aria-labelledby="products-hero-heading"
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
        {/* Light variant — the default breadcrumb colours are tuned for a
            white page and would nearly vanish on navy. */}
        <Reveal variant="fade-up">
          <div className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground [&_li]:text-primary-foreground/70 [&_[aria-current=page]]:text-accent">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
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

            <Heading id="products-hero-heading" level={1} size="section" className="mt-5">
              <TextSplitReveal text={hero.title} />
            </Heading>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-body-lg text-primary-foreground/85 mt-6 max-w-[58ch]">
                {hero.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                {/* In-page jump, so no quoteCtaClass hollow-out — that
                    treatment is reserved for the Request a Quote action. */}
                <Link
                  href={hero.primaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "accent", size: "lg" }),
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
                    quoteCtaClass,
                    "button-hover border-primary-foreground/60 text-primary-foreground h-[56px] rounded-xl border-2 bg-transparent px-8 text-base font-semibold",
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
                // Above the fold on this route, so it is the LCP candidate.
                priority
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
