import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionIntro } from "@/components/shared/section-intro";
import { servedIndustries, servicesPage } from "@/content/services/page";

const STAGGER_STEP = 0.05;
const STAGGER_CAP = 0.25;

/**
 * The ten sectors served, as a compact icon grid.
 *
 * Five columns at xl so the ten items form two clean rows rather than a row of
 * four plus a stranded pair. Presentational cards — a sector name has no
 * destination, and the page's actions live in its CTAs.
 */
export function ServicesIndustries() {
  return (
    <Section
      id="services-industries"
      aria-labelledby="services-industries-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_100%,color-mix(in_oklch,var(--accent)_7%,transparent),transparent_70%)]" />
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
          headingId="services-industries-heading"
          eyebrow={servicesPage.industries.eyebrow}
          title={servicesPage.industries.title}
          description={servicesPage.industries.description}
        />

        <ul className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {servedIndustries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <li key={industry.id} className="h-full">
                <Reveal
                  variant="fade-up"
                  delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
                  className="h-full"
                >
                  <div className="group border-border bg-background hover:border-accent/30 flex h-full flex-col items-center gap-3 rounded-[20px] border p-6 text-center shadow-xs transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-md">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="text-primary group-hover:text-accent size-9 transition-[color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110"
                    />
                    <Heading level={3} size="h6" className="text-base">
                      {industry.title}
                    </Heading>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
