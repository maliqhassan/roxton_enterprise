import { Check } from "lucide-react";

import { whyChooseContent } from "@/content/home/why-choose-us";
import { cn } from "@/lib/utils";

interface FloatingTrustCardProps {
  className?: string;
}

/**
 * Glass card of trust commitments, floating over the image panel.
 *
 * In flow beneath the image on small screens and only lifted into an overlap
 * from lg up — overlapping a translucent card onto a photograph at phone
 * widths costs legibility for no benefit.
 */
export function FloatingTrustCard({ className }: FloatingTrustCardProps) {
  return (
    <div
      className={cn(
        "border-border/60 bg-background/80 rounded-[20px] border p-6 shadow-xl backdrop-blur-xl",
        className,
      )}
    >
      <ul className="space-y-3.5">
        {whyChooseContent.trustPoints.map((point) => (
          <li key={point} className="group/point flex items-center gap-3">
            <span
              className={cn(
                "bg-accent/15 text-accent flex size-6 shrink-0 items-center justify-center rounded-full",
                // Transform-only, so the hover stays on the compositor.
                "transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)]",
                "group-hover/point:scale-110",
              )}
            >
              <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
            </span>
            <span className="text-body-sm text-foreground font-semibold">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
