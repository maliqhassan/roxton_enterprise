import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize =
  "hero" | "section" | "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const levelTagMap: Record<HeadingLevel, "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const sizeClassMap: Record<HeadingSize, string> = {
  hero: "text-hero",
  section: "text-section",
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
};

interface HeadingProps extends Omit<ComponentPropsWithoutRef<"h1">, "children"> {
  children: ReactNode;
  /** Document heading level — determines the actual tag rendered (h1-h6). */
  level: HeadingLevel;
  /** Visual size — decoupled from level so document structure and visual scale can differ. */
  size?: HeadingSize;
  className?: string;
}

export function Heading({ children, level, size, className, ...rest }: HeadingProps) {
  const Tag = levelTagMap[level];
  const visualSize = size ?? levelTagMap[level];

  return (
    <Tag className={cn(sizeClassMap[visualSize], className)} {...rest}>
      {children}
    </Tag>
  );
}
