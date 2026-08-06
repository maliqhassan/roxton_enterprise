import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { buttonVariants } from "@/components/ui/button";
import { featuredProducts, type FeaturedProduct } from "@/content/products/featured";
import { productsPage } from "@/content/products/page";
import { cn } from "@/lib/utils";

/**
 * One featured showcase: image on one side, copy and highlights on the other,
 * alternating down the page.
 *
 * Alternation is `lg:order-*` rather than reordered markup, so the heading
 * always precedes its own description in the DOM whichever side the image
 * lands on — keyboard and screen-reader order stays identical on every row.
 */
function FeaturedProductRow({
  product,
  index,
}: {
  product: FeaturedProduct;
  index: number;
}) {
  const isReversed = index % 2 === 1;
  const headingId = `featured-${product.id}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="scroll-mt-[calc(var(--height-header)+2rem)]"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="image" className={cn(isReversed && "lg:order-2")}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="from-primary/35 absolute inset-0 bg-gradient-to-t to-transparent"
              />
            </div>
          </Reveal>

          <div className={cn(isReversed && "lg:order-1")}>
            <Reveal variant="fade-up">
              <Heading id={headingId} level={3} size="h2">
                {product.title}
              </Heading>
              <p className="text-body-lg text-muted-foreground mt-4">
                {product.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15}>
              <ul
                aria-label={`${product.title} — what we handle`}
                className="mt-8 space-y-3"
              >
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-body-sm text-foreground flex items-start gap-2.5"
                  >
                    <span className="bg-accent/15 text-accent mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <Link
                href={product.cta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "button-hover mt-9 h-12 gap-2 rounded-xl px-7 text-base font-semibold",
                )}
              >
                {product.cta.label}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </article>
  );
}

export function FeaturedProductsSection() {
  return (
    <Section
      id="featured-products"
      aria-labelledby="featured-products-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />

      <Container>
        <SectionIntro
          headingId="featured-products-heading"
          eyebrow={productsPage.featured.eyebrow}
          title={productsPage.featured.title}
          description={productsPage.featured.description}
        />
      </Container>

      <div className="mt-20 space-y-24 lg:space-y-32">
        {featuredProducts.map((product, index) => (
          <FeaturedProductRow key={product.id} product={product} index={index} />
        ))}
      </div>
    </Section>
  );
}
