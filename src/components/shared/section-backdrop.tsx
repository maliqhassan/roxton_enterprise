import { cn } from "@/lib/utils";

interface SectionBackdropProps {
  /** Soft primary glow from the top edge. */
  radial?: boolean;
  /** Warm accent glow rising from the bottom edge. */
  accentGlow?: boolean;
  /** Large blurred gold + navy orbs. */
  orbs?: boolean;
  className?: string;
}

/**
 * The page-wide 64px lined grid, plus optional glows.
 *
 * The cell size and opacity are fixed rather than props on purpose: every
 * section's backdrop starts at x=0, so a shared cell size is what keeps the
 * vertical lines running unbroken across section boundaries. A section that
 * picked its own spacing would visibly break that run — which is exactly the
 * seam that had to be fixed on three homepage sections.
 *
 * Sits at -z-10 inside the section's own stacking context, so it paints above
 * the section background but below its content.
 */
export function SectionBackdrop({
  radial = false,
  accentGlow = false,
  orbs = false,
  className,
}: SectionBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      {radial && (
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_7%,transparent),transparent_70%)]" />
      )}
      {accentGlow && (
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_100%,color-mix(in_oklch,var(--accent)_7%,transparent),transparent_70%)]" />
      )}
      {orbs && (
        <>
          <div className="bg-accent/15 absolute -top-24 left-[6%] size-[420px] rounded-full blur-[80px]" />
          <div className="bg-primary/12 absolute right-[4%] -bottom-28 size-[460px] rounded-full blur-[90px]" />
        </>
      )}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
