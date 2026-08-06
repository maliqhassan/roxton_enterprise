import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ctaContent } from "@/content/home/cta";

/**
 * Closing reassurance row.
 *
 * A real list, because it is four separate claims rather than one sentence —
 * a screen reader should get the count. Two columns on phones and four from
 * sm up, so "Trusted Business Partner" is never squeezed onto its own line
 * beside three short badges.
 */
export function TrustBadges() {
  return (
    <Reveal variant="fade-up" delay={0.45}>
      <ul
        aria-label="What working with Roxton includes"
        className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:max-w-none sm:grid-cols-4"
      >
        {ctaContent.trustBadges.map((badge) => (
          <li
            key={badge}
            className="text-body-sm text-primary-foreground/90 flex items-center justify-center gap-2 font-medium"
          >
            <span className="bg-accent/20 text-accent flex size-5 shrink-0 items-center justify-center rounded-full">
              <Check aria-hidden="true" className="size-3" strokeWidth={3} />
            </span>
            {badge}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
