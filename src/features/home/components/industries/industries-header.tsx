import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Heading } from "@/components/shared/heading";
import { buttonVariants } from "@/components/ui/button";
import { industriesContent } from "@/content/home/industries";
import { cn } from "@/lib/utils";

/**
 * Left column: eyebrow, heading, description and the section's one action.
 *
 * Set at the `h1` scale rather than `section`. The heading was specified at
 * 60px while it sat centred across the full measure; in a 45% column that
 * wraps to four or five lines and swamps the copy beneath it, so it steps down
 * one rung on the same scale.
 */
export function IndustriesHeader() {
  return (
    // Capped at 420px so the copy column stays a column, not a page of text —
    // the grid's 38% can otherwise run wide on large displays.
    <div className="max-w-[420px]">
      <Reveal variant="fade-up">
        <div className="flex items-center gap-4">
          <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
            {industriesContent.eyebrow}
          </p>
          <span aria-hidden="true" className="bg-accent/40 h-px w-12 shrink-0" />
        </div>
      </Reveal>

      <Heading id="industries-heading" level={2} size="h1" className="mt-5">
        <TextSplitReveal text={industriesContent.title} />
      </Heading>

      <Reveal variant="fade-up" delay={0.15}>
        <p className="text-body-lg text-muted-foreground mt-5 max-w-[380px]">
          {industriesContent.description}
        </p>
      </Reveal>

      <Reveal variant="fade-up" delay={0.3}>
        <Link
          href={industriesContent.cta.href}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "button-hover mt-8 h-12 rounded-xl px-7 text-base font-semibold",
          )}
        >
          {industriesContent.cta.label}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
          />
        </Link>
      </Reveal>
    </div>
  );
}
