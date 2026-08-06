import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CategoryIconProps {
  icon: LucideIcon;
  className?: string;
}

/**
 * Outlined category glyph on a glass tile, sat over the card's banner image.
 * Glass rather than a solid fill so it reads against whatever photograph sits
 * behind it without needing a per-category colour.
 *
 * Reacts to hover on the card (`group-hover`) rather than itself, so the whole
 * card is one hover target — colour and a small scale, both compositor-safe.
 */
export function CategoryIcon({ icon: Icon, className }: CategoryIconProps) {
  return (
    <span
      className={cn(
        "border-primary-foreground/25 bg-background/80 text-primary group-hover:text-accent flex size-12 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-md",
        "transition-[color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
    </span>
  );
}
