import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/content/home/industries";
import { IndustryItem } from "@/features/home/components/industries/industry-item";

interface IndustryRowProps {
  decorative?: boolean;
}

function IndustryRow({ decorative = false }: IndustryRowProps) {
  return (
    <ul
      // The second copy exists only so the loop has somewhere to scroll to.
      // Hiding it stops all eight sectors being announced twice.
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Industries we serve"}
      className="flex shrink-0 items-stretch gap-6"
    >
      {industries.map((industry) => (
        <IndustryItem key={industry.id} industry={industry} />
      ))}
    </ul>
  );
}

/**
 * Continuously scrolling sector cards.
 *
 * Same geometry as the brands marquee: the track holds the list twice and
 * animates to exactly -50%, which is the frame it started on, so the restart
 * is invisible. One composited transform moves, not sixteen cards.
 *
 * Hover and focus-within stop it outright, and under prefers-reduced-motion
 * the global rule in motion.css parks it; because the halves are identical, a
 * parked track reads as an ordinary static row.
 */
export function IndustryScroller() {
  return (
    <Reveal variant="fade-up" delay={0.15}>
      <div
        // overflow-hidden is structural, not cosmetic: the track is w-max and
        // far wider than this grid cell, so without clipping here it would run
        // straight across the copy column beside it. The vertical padding
        // leaves the hover lift and its shadow room inside that clip.
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] py-3"
      >
        <div className="animate-marquee flex w-max items-stretch gap-6 focus-within:[animation-play-state:paused] hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
          <IndustryRow />
          <IndustryRow decorative />
        </div>
      </div>
    </Reveal>
  );
}
