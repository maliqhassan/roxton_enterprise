import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { CtaBackground } from "@/features/home/components/cta/cta-background";
import { CtaButtons } from "@/features/home/components/cta/cta-buttons";
import { CtaContent } from "@/features/home/components/cta/cta-content";
import { TrustBadges } from "@/features/home/components/cta/trust-badges";

/**
 * Final call to action — the last conversion point before the footer.
 *
 * Fully server-rendered. The panel's glows are static CSS and the button
 * hovers are CSS states, so the only JavaScript is the shared Reveal leaves
 * that stagger the copy in.
 *
 * The section itself stays on the page background and the navy lives in a
 * rounded panel inside it, rather than the full-bleed band this used to be:
 * an inset card is what lets the shadow read and separates the closing ask
 * from the footer directly beneath it.
 */
export function CtaSection() {
  return (
    <Section
      id="contact-cta"
      aria-labelledby="cta-heading"
      // Specified at 140px; kept fluid so phones don't carry desktop padding.
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      {/* Same 64px lined grid, opacity and origin as the sections above. Every
          section's backdrop starts at x=0, so the shared cell size keeps the
          vertical lines running unbroken into the page's closing band. This is
          the section surface, not the navy panel — the panel is a separate
          surface and keeps its own dot field. */}
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
        {/* isolate keeps the background layer's -z-10 inside this panel rather
            than letting it fall behind the section, and overflow-hidden clips
            the glows to the rounded corners. */}
        <div className="bg-primary relative isolate overflow-hidden rounded-[32px] px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-20 lg:py-24">
          <CtaBackground />

          <div className="relative mx-auto max-w-[900px]">
            <CtaContent />
            <CtaButtons />
            <TrustBadges />
          </div>
        </div>
      </Container>
    </Section>
  );
}
