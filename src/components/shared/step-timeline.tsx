import { Reveal } from "@/components/motion/reveal";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  /** Rendered in the marker; also the list order. */
  step: number;
  title: string;
  description: string;
}

interface StepTimelineProps {
  steps: TimelineStep[];
  /** One column throughout when false — right for short sequences. */
  twoColumn?: boolean;
  className?: string;
}

const STAGGER_STEP = 0.06;
const STAGGER_CAP = 0.4;

/**
 * Connected, numbered timeline.
 *
 * An ordered list, because the order is the meaning — assistive tech should
 * convey "3 of 10", not ten unrelated headings.
 *
 * At lg the two-column form flows DOWN each column rather than across rows.
 * That distinction is load-bearing: with the default row flow the numbers read
 * 1,2 across while the connector runs down the column, so the line would join
 * 1 to 3 and contradict the sequence it sits beside.
 *
 * The connector is a per-item element rather than one absolute rail, so it
 * cannot drift when copy makes a row taller, and it is suppressed after each
 * column's final step at lg only — on mobile the list is a single column and
 * the chain should run unbroken.
 */
export function StepTimeline({ steps, twoColumn = true, className }: StepTimelineProps) {
  const rowsPerColumn = Math.ceil(steps.length / 2);

  return (
    <ol
      className={cn(
        "mx-auto grid grid-cols-1 gap-x-12",
        twoColumn && "max-w-5xl lg:grid-flow-col lg:grid-cols-2",
        !twoColumn && "max-w-3xl",
        className,
      )}
      style={
        twoColumn ? { gridTemplateRows: `repeat(${rowsPerColumn}, auto)` } : undefined
      }
    >
      {steps.map((item, index) => {
        const isLast = index === steps.length - 1;
        const endsColumn = twoColumn && (index + 1) % rowsPerColumn === 0;

        return (
          <li key={item.step} className="relative flex gap-6 pb-10 sm:gap-8">
            {!isLast && (
              <span
                aria-hidden="true"
                className={cn(
                  "bg-border absolute top-14 bottom-0 left-[1.625rem] w-px sm:left-[1.75rem]",
                  endsColumn && "lg:hidden",
                )}
              />
            )}

            <Reveal
              variant="fade-up"
              delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
              className="shrink-0"
            >
              <span
                aria-hidden="true"
                className="border-accent/40 bg-background text-primary font-heading relative z-10 flex size-14 items-center justify-center rounded-full border-2 text-lg font-extrabold shadow-sm"
              >
                {item.step}
              </span>
            </Reveal>

            <Reveal
              variant="fade-up"
              delay={Math.min(index * STAGGER_STEP + 0.05, STAGGER_CAP)}
              className="pt-2"
            >
              <Heading level={3} size="h5" className="font-bold">
                {item.title}
              </Heading>
              <p className="text-body-sm text-muted-foreground mt-2 max-w-[46ch]">
                {item.description}
              </p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
