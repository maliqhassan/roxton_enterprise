import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { stats, statsContent } from "@/content/home/stats";

/**
 * Navy results band: gold outlined glyph, counted figure, label.
 *
 * Compact by design — it reads as a rule between sections rather than a
 * section in its own right, so the padding is tighter than the shared rhythm
 * and the heading is present but visually hidden. The band still needs an
 * accessible name for its aria-labelledby, and an sr-only H2 keeps the
 * document outline intact without putting a title above four numbers.
 */
export function StatisticsSection() {
  return (
    <Section
      id="results"
      aria-labelledby="results-heading"
      background="primary"
      className="py-[clamp(3rem,5vw,4.5rem)]"
    >
      <Container>
        <Heading id="results-heading" level={2} size="h6" className="sr-only">
          {statsContent.title}
        </Heading>

        <div className="divide-primary-foreground/15 grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-0 lg:divide-x">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.label}
                variant="fade-up"
                delay={index * 0.08}
                className="text-center lg:px-8"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="text-accent mx-auto size-10"
                />

                {/* The figure counts up, so it is hidden from assistive tech and
                    announced once as settled text below. */}
                <div
                  aria-hidden="true"
                  className="font-heading text-h1 text-primary-foreground mt-4 font-extrabold"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="sr-only">
                  {stat.value.toLocaleString()}
                  {stat.suffix} {stat.label}
                </span>

                <p
                  aria-hidden="true"
                  className="text-body-sm text-primary-foreground mt-2 font-semibold"
                >
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
