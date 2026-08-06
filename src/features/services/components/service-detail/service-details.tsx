import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionIntro } from "@/components/shared/section-intro";
import { servicesPage } from "@/content/services/page";
import { services } from "@/content/services/services";
import { ServiceDetail } from "@/features/services/components/service-detail/service-detail";

/**
 * The eight detailed services, stacked and alternating.
 *
 * Generous vertical rhythm between rows rather than a divider on each: at this
 * size the whitespace is what separates them, and rules between full-bleed
 * image rows would read as clutter.
 */
export function ServiceDetails() {
  return (
    <Section
      id="services-detail"
      aria-labelledby="services-detail-heading"
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
        <SectionIntro
          headingId="services-detail-heading"
          eyebrow={servicesPage.detail.eyebrow}
          title={servicesPage.detail.title}
          description={servicesPage.detail.description}
        />
      </Container>

      <div className="mt-20 space-y-24 lg:space-y-32">
        {services.map((service, index) => (
          <ServiceDetail key={service.id} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}
