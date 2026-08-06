import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { AboutCollage } from "@/features/home/components/about/about-collage";
import { AboutContent } from "@/features/home/components/about/about-content";

/**
 * "Who We Are" — the credibility section.
 *
 * A Server Component: the background is static CSS and the copy column
 * delegates its motion to client leaves, so only the collage subtree (which
 * needs scroll position for parallax) reaches the browser as JS.
 */
export function AboutSection() {
  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      // The shared section rhythm tops out at 128px; this section is specified
      // at 120px, still fluid so phones don't carry desktop padding.
      className="relative isolate overflow-hidden py-[clamp(4rem,8vw,7.5rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,color-mix(in_oklch,var(--primary)_7%,transparent),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
          <AboutContent />
          <AboutCollage />
        </div>
      </Container>
    </Section>
  );
}
