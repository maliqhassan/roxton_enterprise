import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/shared/heading";
import {
  categoryImageSrc,
  productsServicesContent,
  type ProductCategory,
} from "@/content/home/products-services";
import { CategoryIcon } from "@/features/home/components/products-services/category-icon";
import { CategoryList } from "@/features/home/components/products-services/category-list";

interface CategoryCardProps {
  category: ProductCategory;
}

/** Items shown per card; the rest are summarised as a count. */
const CARD_ITEM_LIMIT = 4;

/**
 * One category: banner photograph, glass icon, then the written detail.
 *
 * A Server Component — every hover effect here is CSS, so the card ships no
 * JavaScript despite the image zoom, lift, rule wipe, icon tint and arrow.
 *
 * Only the title is a link; it stretches over the card with an `::after`
 * overlay. That gives the whole card a click target while keeping exactly one
 * tab stop whose accessible name is just the title — wrapping the entire card
 * in an anchor instead would read the description and all six list items out
 * as one run-on link name. It also keeps the arrow decorative: a real <button>
 * nested inside a link is invalid HTML and a second, redundant tab stop.
 */
export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group border-border bg-background has-[a:focus-visible]:ring-ring hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1.5 hover:shadow-xl has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-offset-2">
      {/* Gold rule that wipes in from the left on hover — scaleX only. */}
      <span
        aria-hidden="true"
        className="bg-accent absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={categoryImageSrc(category.id)}
          alt={category.imageAlt}
          fill
          // Whole section is below the fold, so nothing here competes with the
          // hero's LCP image.
          loading="lazy"
          sizes="(min-width: 1280px) 20vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-standard)] group-hover:scale-105"
        />
        {/* Navy wash, deepest at the base so the glass icon always has
            something dark to sit against regardless of the photograph. */}
        <div
          aria-hidden="true"
          className="from-primary/85 via-primary/25 absolute inset-0 bg-gradient-to-t to-transparent"
        />
        <CategoryIcon icon={category.icon} className="absolute bottom-4 left-5" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Heading level={3} size="h6">
          <Link
            href={`${productsServicesContent.cta.href}#${category.id}`}
            className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
          >
            {category.title}
          </Link>
        </Heading>

        <p className="text-body-sm text-muted-foreground mt-2">{category.description}</p>

        <CategoryList
          items={category.items}
          label={`${category.title} includes`}
          limit={CARD_ITEM_LIMIT}
        />

        {/* mt-auto pins this to the bottom so cards read evenly despite
            unequal title and description lengths. */}
        <span
          aria-hidden="true"
          className="text-body-sm text-primary group-hover:text-accent mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)]"
        >
          Explore
          <ArrowRight className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
