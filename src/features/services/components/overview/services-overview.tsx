import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionIntro } from "@/components/shared/section-intro";
import { services, type Service } from "@/content/services/services";
import { servicesPage } from "@/content/services/page";

const STAGGER_STEP = 0.06;
const STAGGER_CAP = 0.24;

/**
 * One overview card. Presentational — no link, no arrow, no focus ring.
 *
 * These previously deep-linked to the matching detail section further down the
 * page, but a card that only scrolls you a screen or two is a weak destination
 * and the arrow promised more than it delivered. The detail sections keep
 * their ids, so direct links to /services#logistics still work.
 *
 * With nothing focusable inside, the card also drops the has-[a:focus-visible]
 * ring: a focus style with nothing to focus is dead CSS.
 */
function OverviewCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group border-border bg-background hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg">
      <span
        aria-hidden="true"
        className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
      />

      <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-12 items-center justify-center rounded-2xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </span>

      <Heading level={3} size="h6" className="mt-5">
        {service.title}
      </Heading>

      <p className="text-body-sm text-muted-foreground mt-2">{service.summary}</p>
    </article>
  );
}

export function ServicesOverview() {
  return (
    <Section
      id="services-overview"
      aria-labelledby="services-overview-heading"
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
          headingId="services-overview-heading"
          eyebrow={servicesPage.overview.eyebrow}
          title={servicesPage.overview.title}
          description={servicesPage.overview.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              variant="fade-up"
              delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
              className="h-full"
            >
              <OverviewCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
