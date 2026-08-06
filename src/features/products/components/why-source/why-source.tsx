import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { productsPage, whySourceFeatures } from "@/content/products/page";

const STAGGER_STEP = 0.06;
const STAGGER_CAP = 0.24;

/**
 * Six reasons, 3 x 2 on desktop.
 *
 * Presentational, not interactive: "Quality Assured Products" has no
 * destination, and giving these cards tab stops that do nothing on activation
 * is worse for keyboard users than leaving plain text as plain text.
 */
export function WhySource() {
  return (
    <Section
      id="why-source"
      aria-labelledby="why-source-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial orbs />

      <Container>
        <SectionIntro
          headingId="why-source-heading"
          eyebrow={productsPage.whySource.eyebrow}
          title={productsPage.whySource.title}
          description={productsPage.whySource.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whySourceFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={feature.id}
                variant="fade-up"
                delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
                className="h-full"
              >
                <article className="group border-border bg-background relative flex h-full flex-col overflow-hidden rounded-[20px] border p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg">
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
                  />

                  <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-12 items-center justify-center rounded-2xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>

                  <Heading level={3} size="h6" className="mt-5">
                    {feature.title}
                  </Heading>
                  <p className="text-body-sm text-muted-foreground mt-2">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
