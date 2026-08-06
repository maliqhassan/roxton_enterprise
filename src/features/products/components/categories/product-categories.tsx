import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { productsPage } from "@/content/products/page";
import { productCategories, type ProductCategory } from "@/content/products/products";

const STAGGER_STEP = 0.05;
const STAGGER_CAP = 0.3;
/** Lines shown per card; the rest are summarised as a count. */
const VISIBLE_PRODUCTS = 5;

/**
 * One category card. Presentational — a category name has no destination that
 * would not be invented, and the page's actions live in its CTAs.
 *
 * Product lines are capped and the remainder stated as a count rather than
 * silently dropped, so the list never implies a category is smaller than it is.
 */
function CategoryCard({ category }: { category: ProductCategory }) {
  const Icon = category.icon;
  const shown = category.products.slice(0, VISIBLE_PRODUCTS);
  const remaining = category.products.length - shown.length;

  return (
    <article className="group border-border bg-background hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg">
      <span
        aria-hidden="true"
        className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
      />

      <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-12 items-center justify-center rounded-2xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </span>

      <Heading level={3} size="h6" className="mt-5">
        {category.title}
      </Heading>

      <p className="text-body-sm text-muted-foreground mt-2">{category.description}</p>

      <ul
        aria-label={`${category.title} includes`}
        className="border-border mt-auto w-full space-y-1.5 border-t pt-4"
      >
        {shown.map((product) => (
          <li
            key={product}
            className="text-body-sm text-muted-foreground flex items-center gap-2.5"
          >
            <span
              aria-hidden="true"
              className="bg-accent/60 size-1 shrink-0 rounded-full"
            />
            {product}
          </li>
        ))}
        {remaining > 0 && (
          <li className="text-body-sm text-muted-foreground/70 pl-[0.875rem] italic">
            +{remaining} more
          </li>
        )}
      </ul>
    </article>
  );
}

export function ProductCategoriesSection() {
  return (
    <Section
      id="product-categories"
      aria-labelledby="product-categories-heading"
      background="surface"
      // scroll-mt clears the sticky header for the hero's "Explore Categories" jump.
      className="relative isolate scroll-mt-[var(--height-header)] overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial />

      <Container>
        <SectionIntro
          headingId="product-categories-heading"
          eyebrow={productsPage.categories.eyebrow}
          title={productsPage.categories.title}
          description={productsPage.categories.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((category, index) => (
            <Reveal
              key={category.id}
              variant="fade-up"
              delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
              className="h-full"
            >
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
