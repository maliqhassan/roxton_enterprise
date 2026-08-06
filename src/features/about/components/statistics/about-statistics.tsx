import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { aboutPage } from "@/content/about/page";
import { aboutStats } from "@/content/about/stats";

/**
 * Navy results band, matching the homepage's construction: gold outlined
 * glyph, counted figure, label, dividers between columns.
 *
 * Five columns rather than the homepage's four, so the divider rule only
 * applies at xl where all five sit on one row — below that the grid wraps and
 * `divide-x` would put a spurious border on the item starting each new row.
 *
 * The figure counts up, so it is hidden from assistive tech and announced once
 * as settled text; a screen reader should not hear a ticking number.
 */
export function AboutStatistics() {
  return (
    <Section
      id="about-results"
      aria-labelledby="about-results-heading"
      background="primary"
      className="py-[clamp(3rem,5vw,4.5rem)]"
    >
      <Container>
        <Heading id="about-results-heading" level={2} size="h6" className="sr-only">
          {aboutPage.stats.title}
        </Heading>

        <div className="divide-primary-foreground/15 grid grid-cols-2 gap-y-10 sm:grid-cols-3 xl:grid-cols-5 xl:gap-0 xl:divide-x">
          {aboutStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.label}
                variant="fade-up"
                delay={index * 0.08}
                className="text-center xl:px-6"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="text-accent mx-auto size-10"
                />

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
