import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface StickyHeaderProps {
  children: ReactNode;
  /** Floating over a full-bleed hero — no background, content themed light. */
  overlay?: boolean;
  /** Past the scroll threshold — condenses into frosted navy glass. */
  scrolled?: boolean;
}

export function StickyHeader({
  children,
  overlay = false,
  scrolled = false,
}: StickyHeaderProps) {
  return (
    <header
      className={cn(
        // Height is set here rather than on the inner row so that border-box
        // absorbs the border into --height-header instead of adding to it. The
        // hero offsets itself by exactly that token, so a header even 1px
        // taller than advertised opens a white seam above the banner.
        // The border itself is always present but transparent when unused, so
        // gaining the glass edge tints a pixel rather than adding one.
        "sticky top-0 z-[var(--z-sticky)] h-[var(--height-header)] w-full border-b border-transparent",
        // backdrop-filter dropped from the list with the glass that used it.
        "transition-[background-color,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)]",
        overlay && "bg-transparent",
        // Solid white once stuck — no blur, no saturation, no tint. Being
        // fully opaque means the bar's contrast never depends on whatever
        // section is passing beneath it, so the dark nav text has one
        // predictable background. The border and small shadow are what
        // separate it from the page now that translucency no longer does.
        !overlay && scrolled && "bg-background border-border shadow-sm",
        !overlay && !scrolled && "bg-background",
      )}
    >
      {children}
    </header>
  );
}
