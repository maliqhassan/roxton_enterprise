import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  as?: ElementType;
  background?: "default" | "surface" | "primary";
  className?: string;
}

export function Section({
  children,
  as: Tag = "section",
  background = "default",
  className,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "py-[var(--spacing-section-y)]",
        background === "surface" && "bg-surface text-surface-foreground",
        background === "primary" && "bg-primary text-primary-foreground",
        background === "default" && "bg-background",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
