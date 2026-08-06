import type { Brand } from "@/content/home/brands";
import { BrandLogo } from "@/features/home/components/brands/brand-logo";

interface BrandCardProps {
  brand: Brand;
  /** In the duplicated half of the track — hidden from assistive tech. */
  decorative?: boolean;
}

/**
 * One brand tile. Fixed width so the track's total length is stable, which is
 * what lets the -50% loop land seamlessly.
 *
 * Marks rest desaturated and come to full colour on hover; `filter` and
 * `transform` are both compositor properties, so the effect costs no layout.
 */
export function BrandCard({ brand, decorative = false }: BrandCardProps) {
  return (
    <li
      className="group border-border bg-background flex h-24 w-[150px] shrink-0 items-center justify-center rounded-[18px] border p-6 shadow-sm transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg sm:h-28 sm:w-[180px] sm:p-8"
      title={decorative ? undefined : `${brand.name} — ${brand.category}`}
    >
      <span className="flex items-center justify-center opacity-70 grayscale transition-[filter,opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0">
        <BrandLogo brand={brand} decorative={decorative} />
      </span>
    </li>
  );
}
