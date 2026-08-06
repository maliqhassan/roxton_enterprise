import type { LucideIcon } from "lucide-react";

/** Spec'd at 48px — kept in one place so every card's glyph matches. */
const ICON_CLASS = "size-12";

interface IndustryIconProps {
  icon: LucideIcon;
}

/**
 * Outlined sector glyph. Rests in the primary tone and turns brand gold on
 * hover of its card, so colour marks the interaction rather than being the
 * card's default state. Colour and transform only — both compositor-safe.
 */
export function IndustryIcon({ icon: Icon }: IndustryIconProps) {
  return (
    <Icon
      aria-hidden="true"
      strokeWidth={1.25}
      className={`text-primary group-hover:text-accent ${ICON_CLASS} mx-auto transition-[color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110`}
    />
  );
}
