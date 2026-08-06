import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { buttonVariants, quoteCtaClass } from "@/components/ui/button";
import { ctaContent } from "@/content/home/cta";
import { cn } from "@/lib/utils";

const sharedButtonClass =
  "button-hover h-[60px] rounded-[14px] px-8 text-base font-semibold";

/**
 * The pair of actions. Stacked full-width on phones, side by side from sm up —
 * two 60px buttons sharing a row is cramped at 360px and puts the secondary
 * action awkwardly close to the primary.
 */
export function CtaButtons() {
  return (
    <Reveal variant="fade-up" delay={0.3}>
      <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
        <Link
          href={ctaContent.primaryCta.href}
          // Same hollow-out hover as the header and hero instances of this
          // action, shared from the button module so the three cannot drift.
          className={cn(
            buttonVariants({ variant: "accent", size: "lg" }),
            sharedButtonClass,
            quoteCtaClass,
            "gap-2",
          )}
        >
          {ctaContent.primaryCta.label}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
          />
        </Link>

        <Link
          href={ctaContent.secondaryCta.href}
          // The outline variant floods navy by default, which would be
          // invisible on this panel — overridden to a translucent white so the
          // origin fill reads as glass, with the blur completing the effect.
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            sharedButtonClass,
            "border-primary-foreground/60 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground border-2 bg-transparent [--fill-color:rgb(255_255_255_/_0.14)] hover:backdrop-blur-md",
          )}
        >
          {ctaContent.secondaryCta.label}
        </Link>
      </div>
    </Reveal>
  );
}
