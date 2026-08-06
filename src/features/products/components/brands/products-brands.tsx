import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionIntro } from "@/components/shared/section-intro";
import { brands, type Brand } from "@/content/home/brands";
import { BrandCard } from "@/features/home/components/brands/brand-card";
import { productsPage } from "@/content/products/page";
import { cn } from "@/lib/utils";

/**
 * Two continuous marquee rows running in opposite directions.
 *
 * Reuses the homepage's BrandCard and the same brands data rather than
 * restating either — only the two-row orchestration is new. That is a
 * cross-feature import, which is normally worth avoiding, but BrandCard is a
 * presentational leaf and the alternative was a second copy of the card and
 * the 33-brand list drifting apart from the homepage's.
 *
 * Same seamless-loop geometry as the homepage: each track holds its half of
 * the list twice and animates to exactly -50%, landing on a visually identical
 * frame. The second row adds animation-direction:reverse, so the pair moves
 * against each other without needing a second keyframe.
 */
function MarqueeRow({ items, reverse = false }: { items: Brand[]; reverse?: boolean }) {
  return (
    <div
      className={cn(
        "animate-marquee flex w-max gap-6 focus-within:[animation-play-state:paused] hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]",
        reverse && "[animation-direction:reverse]",
      )}
    >
      {[false, true].map((duplicate) => (
        <ul
          key={String(duplicate)}
          // The duplicate exists only so the loop has somewhere to scroll to;
          // hiding it stops every brand being announced twice. No aria-label
          // here — the two rows are halves of one list, so labelling each
          // would announce "Brands we supply" twice. The wrapper names them
          // once instead.
          aria-hidden={duplicate || undefined}
          className="flex shrink-0 items-center gap-6"
        >
          {items.map((brand) => (
            <BrandCard key={brand.id} brand={brand} decorative={duplicate} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export function ProductsBrands() {
  const midpoint = Math.ceil(brands.length / 2);
  const topRow = brands.slice(0, midpoint);
  const bottomRow = brands.slice(midpoint);

  return (
    <Section
      id="products-brands"
      aria-labelledby="products-brands-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4rem,7vw,6.25rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(65%_45%_at_50%_0%,color-mix(in_oklch,var(--primary)_7%,transparent),transparent_70%)]" />
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
          headingId="products-brands-heading"
          eyebrow={productsPage.brands.eyebrow}
          title={productsPage.brands.title}
          description={productsPage.brands.description}
        />
      </Container>

      {/* Full-bleed, outside Container: the tracks read as continuous only if
          they run past the measure rather than stopping inside a box. Named
          once here so the two rows are announced as one group. */}
      <div
        role="group"
        aria-label="Brands we supply"
        className="relative mt-14 space-y-6 [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]"
      >
        <MarqueeRow items={topRow} />
        <MarqueeRow items={bottomRow} reverse />
      </div>
    </Section>
  );
}
