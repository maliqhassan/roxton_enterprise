import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionIntro } from "@/components/shared/section-intro";
import { servicesPage } from "@/content/services/page";
import { processSteps } from "@/content/services/process";
import { cn } from "@/lib/utils";

const STAGGER_STEP = 0.08;
const STAGGER_CAP = 0.4;

/** Rows per column at lg, so 7 steps split 4 + 3. */
const ROWS_PER_COLUMN = Math.ceil(processSteps.length / 2);

/**
 * The seven-stage procurement process as a connected timeline.
 *
 * An ordered list, because the order is the meaning — a screen reader should
 * hear "3 of 7" rather than seven unrelated headings.
 *
 * Two columns at lg, flowing DOWN each column rather than across rows. That
 * distinction matters: with the default row flow the numbers would read 1,2
 * across while the connector line runs down the column, so the line would
 * visually join 1 to 3 and contradict the sequence. Column flow puts 1-4 in
 * the first column and 5-7 in the second, so the line always joins
 * consecutive steps.
 *
 * The connector is a per-item element rather than one absolute rail, so it
 * cannot drift when copy makes a row taller. It is suppressed after the last
 * step of each column at lg only — on mobile the list is a single column and
 * the chain should run unbroken through all seven.
 */
export function ProcessTimeline() {
  return (
    <Section
      id="process"
      aria-labelledby="process-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_7%,transparent),transparent_70%)]" />
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
        <SectionIntro
          headingId="process-heading"
          eyebrow={servicesPage.process.eyebrow}
          title={servicesPage.process.title}
          description={servicesPage.process.description}
        />

        <ol className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-12 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-[repeat(4,auto)]">
          {processSteps.map((item, index) => {
            const isLast = index === processSteps.length - 1;
            const endsColumn = (index + 1) % ROWS_PER_COLUMN === 0;

            return (
              <li key={item.step} className="relative flex gap-6 pb-10 sm:gap-8">
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "bg-border absolute top-14 bottom-0 left-[1.625rem] w-px sm:left-[1.75rem]",
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
