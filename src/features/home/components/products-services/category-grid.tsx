import { Reveal } from "@/components/motion/reveal";
import { productCategories } from "@/content/home/products-services";
import { CategoryCard } from "@/features/home/components/products-services/category-card";

/**
 * Cards are stretched by the grid and each card is h-full, so a row's cards
 * match height regardless of how long their copy runs.
 *
 * The stagger is capped: an eighth card delayed by a full 8 x step would still
 * be animating well after the row is being read.
 */
const STAGGER_STEP = 0.06;
const STAGGER_CAP = 0.24;

export function CategoryGrid() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
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
  );
}
