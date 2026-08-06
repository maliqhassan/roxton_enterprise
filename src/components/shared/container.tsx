import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const sizeClassMap = {
  narrow: "max-w-narrow",
  page: "max-w-page",
  wide: "max-w-wide",
} as const;

interface ContainerProps {
  children: ReactNode;
  size?: keyof typeof sizeClassMap;
  className?: string;
}

export function Container({ children, size = "page", className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--spacing-gutter)]",
        sizeClassMap[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
