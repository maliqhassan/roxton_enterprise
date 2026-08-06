import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { BrandsHeader } from "@/features/home/components/brands/brands-header";
import { BrandsMarquee } from "@/features/home/components/brands/brands-marquee";

/**
 * "Brands We Deal In" — the sourcing-capability marquee.
 *
 * Fully server-rendered. The marquee is a CSS animation and the card hovers
 * are CSS states, so the only JavaScript in the section is the shared Reveal
 * leaves behind the header.
 *
 * The marquee sits outside Container: the header stays on the 1280px measure
 * while the track runs the full width of the viewport, which is what makes it
 * read as continuous rather than as a widget in a box.
 */
export function BrandsSection() {
  return (
    <Section
      id="brands"
      aria-labelledby="brands-heading"
      background="surface"
      // Specified at 100px; kept fluid so phones don't carry desktop padding.
      className="relative isolate overflow-hidden py-[clamp(4rem,7vw,6.25rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(65%_45%_at_50%_0%,color-mix(in_oklch,var(--primary)_7%,transparent),transparent_70%)]" />
        {/* Same 64px lined grid, opacity and origin as the neighbouring
            sections. Every section's backdrop starts at x=0, so a shared cell
            size keeps the vertical lines running unbroken across the seams —
            this section had no grid at all, which made the pattern stop dead
            at its top edge and start again below it. */}
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
        <BrandsHeader />
      </Container>

      <BrandsMarquee />
    </Section>
  );
}
