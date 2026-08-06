import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TestimonialsGrid } from "@/features/home/components/testimonials/testimonials-grid";
import { TestimonialsHeader } from "@/features/home/components/testimonials/testimonials-header";

/**
 * "Client Testimonials" — the social-proof section.
 *
 * Fully server-rendered: the card hover is CSS and the background is static,
 * so the only JavaScript is the shared Reveal leaves that drive the scroll-in.
 *
 * The quotes it renders are placeholders — see the warning in
 * content/home/testimonials.ts before this ships.
 */
export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      background="surface"
      // Specified at 140px; kept fluid so phones don't carry desktop padding.
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_7%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_100%,color-mix(in_oklch,var(--accent)_6%,transparent),transparent_70%)]" />
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
        <TestimonialsHeader />
        <TestimonialsGrid />
      </Container>
    </Section>
  );
}
