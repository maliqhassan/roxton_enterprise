import { brands } from "@/content/home/brands";
import { BrandCard } from "@/features/home/components/brands/brand-card";

interface BrandRowProps {
  decorative?: boolean;
}

function BrandRow({ decorative = false }: BrandRowProps) {
  return (
    <ul
      // The second copy exists only so the loop has somewhere to scroll to.
      // Hiding it stops every brand being announced twice, and since the cards
      // are presentational there is nothing focusable left behind it.
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Brands we supply"}
      className="flex shrink-0 items-center gap-6"
    >
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} decorative={decorative} />
      ))}
    </ul>
  );
}

/**
 * Infinite logo marquee.
 *
 * The seam is handled by geometry rather than JavaScript: the track holds the
 * brand list twice and animates to exactly -50%, which is the same frame it
 * started on, so the restart is invisible. No measurement, no resize listener,
 * no client component.
 *
 * Motion is a single transform on the track — one composited layer moving,
 * rather than 66 cards being laid out. The animation pauses on hover and on
 * focus-within, so it does not slide away from anyone reading it or tabbing
 * near it. Under prefers-reduced-motion the global rule in motion.css collapses
 * the duration, leaving the row parked; because the halves are identical, a
 * parked track looks like an ordinary static logo row.
 */
export function BrandsMarquee() {
  return (
    <div
      // Edge fade, so cards enter and leave rather than being cut off.
      className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]"
    >
      <div className="animate-marquee flex w-max gap-6 focus-within:[animation-play-state:paused] hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
        <BrandRow />
        <BrandRow decorative />
      </div>
    </div>
  );
}
