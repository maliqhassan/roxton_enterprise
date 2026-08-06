import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  /** id the owning Section's aria-labelledby points at. */
  headingId: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** Widen when the heading is long enough to wrap badly at the default. */
  titleClassName?: string;
  className?: string;
}

/**
 * Centred eyebrow + statement heading + supporting copy.
 *
 * The homepage grew four near-identical copies of this block before it was
 * worth extracting; the services page needs six more, which settles it. Kept
 * as a Server Component — the motion is delegated to Reveal and
 * TextSplitReveal, so no page pays client JS for a heading.
 *
 * Deliberately not the older SectionHeading: that one is fixed at the h2 scale
 * with a 2xl measure and no eyebrow rules, and changing it would alter every
 * section still using it.
 */
export function SectionIntro({
  headingId,
  eyebrow,
  title,
  description,
  titleClassName,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("text-center", className)}>
      <Reveal variant="fade-up">
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
          <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
            {eyebrow}
          </p>
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
        </div>
      </Reveal>

      <Heading
        id={headingId}
        level={2}
        size="section"
        className={cn("mx-auto mt-6 max-w-[20ch]", titleClassName)}
      >
        <TextSplitReveal text={title} />
      </Heading>

      {description && (
        <Reveal variant="fade-up" delay={0.15}>
          <p className="text-body-lg text-muted-foreground mx-auto mt-6 max-w-[760px]">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
