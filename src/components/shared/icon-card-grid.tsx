import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/lib/utils";

export interface IconCardItem {
  id: string;
  title: string;
  /** Optional — omit for compact label-only grids. */
  description?: string;
  icon: LucideIcon;
}

interface IconCardGridProps {
  items: IconCardItem[];
  /** Names the list for assistive tech, since the icons carry no label. */
  ariaLabel: string;
  /** Columns at the widest breakpoint. */
  columns?: 2 | 3 | 4;
  className?: string;
}

const STAGGER_STEP = 0.04;
const STAGGER_CAP = 0.24;

const COLUMN_CLASS: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

/**
 * Grid of icon cards — the page's workhorse for values, capabilities and
 * sectors.
 *
 * A real <ul>, so the count is announced; icons are decorative and hidden.
 * Cards are presentational: none of these labels has a destination that would
 * not be invented, and adding tab stops that do nothing on activation is worse
 * for keyboard users than leaving plain text as plain text.
 *
 * Hover is the same language as every other card on the site — lift, gold rule
 * wipe, icon tint and scale — all transform/colour, so it stays composited.
 */
export function IconCardGrid({
  items,
  ariaLabel,
  columns = 4,
  className,
}: IconCardGridProps) {
  return (
    <ul
      aria-label={ariaLabel}
      className={cn("grid grid-cols-1 gap-5", COLUMN_CLASS[columns], className)}
    >
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <li key={item.id} className="h-full">
            <Reveal
              variant="fade-up"
              delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
              className="h-full"
            >
              <article className="group border-border bg-background hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-[20px] border p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
                />

                <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-11 items-center justify-center rounded-xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>

                <Heading level={3} size="h6" className="mt-4 text-base">
                  {item.title}
                </Heading>

                {item.description && (
                  <p className="text-body-sm text-muted-foreground mt-1.5">
                    {item.description}
                  </p>
                )}
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
