import type { ServiceItem } from "@/content/home/services";
import { cn } from "@/lib/utils";

interface AboutFloatingCardProps {
  /** The active slide's services — the card re-reads as the collage advances. */
  points: ServiceItem[];
  className?: string;
}

/**
 * Glass card describing whatever the lead frame is currently showing.
 *
 * In flow beneath the image on small screens and only lifted into an overlap
 * from lg up — overlapping a card onto an image at phone widths costs
 * legibility for no benefit. On lg it is anchored to its bottom edge, so a
 * taller slide grows the card upward instead of pushing the tiles below it.
 */
export function AboutFloatingCard({ points, className }: AboutFloatingCardProps) {
  return (
    <div
      className={cn(
        "border-border/60 bg-background/75 rounded-[20px] border p-6 shadow-xl backdrop-blur-xl",
        className,
      )}
    >
      {/* Keyed on the slide's contents so swapping them replays the fade —
          cheaper and less code than orchestrating an exit animation. */}
      <ul
        key={points.map((point) => point.title).join("|")}
        className="animate-fade-in space-y-4"
      >
        {points.map((point) => {
          const Icon = point.icon;

          return (
            <li key={point.title} className="group/trust flex items-start gap-3">
              <span
                className={cn(
                  "bg-accent/15 text-accent mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full",
                  // Transform-only, so the hover stays on the compositor.
                  "transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)]",
                  "group-hover/trust:scale-110",
                )}
              >
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <span>
                <strong className="text-body text-foreground block font-semibold">
                  {point.title}
                </strong>
                <span className="text-body-sm text-muted-foreground">
                  {point.description}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
