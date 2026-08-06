import { Container } from "@/components/shared/container";
import { HeroButtons } from "@/features/home/components/hero/hero-buttons";
import { HeroContent } from "@/features/home/components/hero/hero-content";
import { HeroSlider } from "@/features/home/components/hero/hero-slider";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      // Rises under the transparent header, then fills exactly what's left of
      // the screen beside the top bar — so the banner never exceeds one view.
      className="relative isolate -mt-[var(--height-header)] flex min-h-[calc(100svh-var(--height-topbar))] items-center overflow-hidden"
    >
      <HeroSlider />
      {/* "page", not "wide": the header, footer and every section below sit on
          the 80rem container, so a wider hero pushed its copy ~80px left of
          everything else and broke the page's left edge. */}
      <Container className="relative z-10 pt-[var(--spacing-hero-pt)] pb-[var(--spacing-hero-pb)]">
        <div className="max-w-[620px]">
          <HeroContent />
          <HeroButtons />
        </div>
      </Container>
    </section>
  );
}
