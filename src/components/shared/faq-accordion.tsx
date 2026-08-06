import { Plus } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import type { FaqItem } from "@/content/services/faq";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

const STAGGER_STEP = 0.04;
const STAGGER_CAP = 0.24;

/**
 * FAQ accordion built on native <details>/<summary>.
 *
 * This is why the section ships zero JavaScript. The browser already provides
 * expand/collapse, Enter and Space handling, focusability, and the
 * expanded/collapsed state screen readers announce — all of which a custom
 * accordion must re-implement, usually imperfectly. Find-in-page also reaches
 * text inside a closed <details> in modern browsers, which a display:none
 * panel defeats.
 *
 * Items are independent rather than sharing a `name` (which would make them
 * mutually exclusive): on an FAQ people routinely open two answers to compare
 * them, and auto-closing the previous one fights that.
 *
 * Shared rather than page-local — the services page grew the first copy and
 * products needs the same thing. That page still holds its own copy and can
 * switch to this with a one-line import change.
 */
export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <div className={cn("mx-auto max-w-3xl space-y-4", className)}>
      {items.map((faq, index) => (
        <Reveal
          key={faq.id}
          variant="fade-up"
          delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
        >
          <details
            id={faq.id}
            className="group border-border bg-background hover:border-accent/30 overflow-hidden rounded-[18px] border shadow-xs transition-[border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-standard)] open:shadow-md hover:shadow-md"
          >
            <summary className="focus-visible:outline-ring text-body text-foreground flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold focus-visible:outline-2 focus-visible:-outline-offset-2 [&::-webkit-details-marker]:hidden">
              {faq.question}
              {/* Rotates to a minus when open — transform only. */}
              <Plus
                aria-hidden="true"
                className="text-accent size-5 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-open:rotate-45"
              />
            </summary>
            <div className="text-body-sm text-muted-foreground px-6 pb-6 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
