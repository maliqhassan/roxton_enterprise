import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { IndustriesHeader } from "@/features/home/components/industries/industries-header";
import { IndustryScroller } from "@/features/home/components/industries/industry-scroller";

/**
 * "Industries We Serve" — the sector-coverage section.
 *
 * Fully server-rendered: the scroller is a native overflow container and the
 * hovers are CSS, so the only JavaScript is the shared Reveal leaves.
 */
export function IndustriesSection() {
  return (
    <Section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_6%,transparent),transparent_70%)]" />
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
        {/* 38/62 with a 340px floor on the copy column, aligned to the top so
            the card field starts level with the eyebrow rather than being
            centred against a shorter neighbour. */}
        <div className="grid gap-12 lg:grid-cols-[minmax(340px,38%)_minmax(0,62%)] lg:items-start lg:gap-16">
          <IndustriesHeader />
          <IndustryScroller />
        </div>
      </Container>
    </Section>
  );
}
