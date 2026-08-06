import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { capabilitySteps, productsPage } from "@/content/products/page";
import { cn } from "@/lib/utils";

const STAGGER_STEP = 0.06;
const STAGGER_CAP = 0.32;

/** Rows per column at lg, so 8 steps split 4 + 4. */
const ROWS_PER_COLUMN = Math.ceil(capabilitySteps.length / 2);

/**
 * The eight-stage supply workflow.
 *
 * An ordered list, because the order carries the meaning — assistive tech
 * should convey "step 3 of 8", not eight unrelated headings. The connecting
 * rule is a per-item element rather than one absolutely positioned rail, so it
 * cannot drift out of alignment when a longer description makes a row taller,
 * and the final step simply omits it instead of the line overshooting.
 *
 * Two columns at lg, flowing DOWN each column rather than across rows. That
 * distinction matters: with the default row flow the numbers read 1,2 across
 * while the connector line runs down the column, so the line would visually
 * join 1 to 3 and contradict the sequence. Column flow puts 1-4 in the first
 * column and 5-8 in the second, so the line always joins consecutive steps.
 *
 * The connector is suppressed after the last step of each column at lg only —
 * on mobile the list is a single column and the chain should run unbroken.
 */
export function SupplyCapabilities() {
  return (
    <Section
      id="supply-capabilities"
      aria-labelledby="supply-capabilities-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial />

      <Container>
        <SectionIntro
          headingId="supply-capabilities-heading"
          eyebrow={productsPage.capabilities.eyebrow}
          title={productsPage.capabilities.title}
          description={productsPage.capabilities.description}
        />

        <ol className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-12 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-[repeat(4,auto)]">
          {capabilitySteps.map((item, index) => {
            const isLast = index === capabilitySteps.length - 1;
            const endsColumn = (index + 1) % ROWS_PER_COLUMN === 0;

            return (
              <li key={item.step} className="relative flex gap-6 pb-10">
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "bg-border absolute top-14 bottom-0 left-[1.625rem] w-px",
                      endsColumn && "lg:hidden",
                    )}
                  />
                )}

                <Reveal
                  variant="fade-up"
                  delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
                  className="shrink-0"
                >
                  <span
                    aria-hidden="true"
                    className="border-accent/40 bg-background text-primary font-heading relative z-10 flex size-14 items-center justify-center rounded-full border-2 text-lg font-extrabold shadow-sm"
                  >
                    {item.step}
                  </span>
                </Reveal>

                <Reveal
                  variant="fade-up"
                  delay={Math.min(index * STAGGER_STEP + 0.05, STAGGER_CAP)}
                  className="pt-2"
                >
                  <Heading level={3} size="h5" className="font-bold">
                    {item.title}
                  </Heading>
                  <p className="text-body-sm text-muted-foreground mt-2 max-w-[46ch]">
                    {item.description}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
