import { Heading } from "@/components/shared/heading";
import type { Industry } from "@/content/home/industries";
import { IndustryIcon } from "@/features/home/components/industries/industry-icon";

interface IndustryItemProps {
  industry: Industry;
}

/**
 * One sector card: centred glyph, title, and a single sentence covering both
 * who the sector is and what Roxton supplies it.
 *
 * Fixed width so the marquee track's total length is stable, which is what
 * lets the -50% loop land seamlessly. The card is a flex column so the copy
 * sits optically centred in whatever height the tallest card sets.
 *
 * Presentational: no link, so the section keeps a single call to action in the
 * left column rather than eight competing ones inside a moving track.
 */
export function IndustryItem({ industry }: IndustryItemProps) {
  return (
    <li className="group border-border bg-background hover:border-accent/30 flex min-h-[17rem] w-60 shrink-0 flex-col items-center justify-center rounded-[18px] border p-6 text-center shadow-xs transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-md">
      <IndustryIcon icon={industry.icon} />

      <Heading level={3} size="h5" className="mt-5 font-bold">
        {industry.title}
      </Heading>

      <p className="text-body-sm text-muted-foreground mt-3">{industry.description}</p>
    </li>
  );
}
