import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { buttonVariants } from "@/components/ui/button";
import { productsServicesContent } from "@/content/home/products-services";
import { CategoryGrid } from "@/features/home/components/products-services/category-grid";
import { ProductsServicesHeader } from "@/features/home/components/products-services/products-services-header";
import { cn } from "@/lib/utils";

/**
 * "Products & Services" — the breadth section.
 *
 * A Server Component, and so is everything beneath it: the cards' lift, glow,
 * icon tint and arrow slide are all CSS hover states, so the only JavaScript
 * in the section is the shared Reveal leaves that drive the scroll-in.
 */
export function ProductsServicesSection() {
  return (
    <Section
      id="products-services"
      aria-labelledby="products-services-heading"
      // Specified at 140px; kept fluid so phones don't carry desktop padding.
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_6%,transparent),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <Container>
        <ProductsServicesHeader />
        <CategoryGrid />

        <Reveal variant="fade-up" delay={0.1}>
          <div className="mt-14 text-center">
            <Link
              href={productsServicesContent.cta.href}
              className={cn(
                buttonVariants({ variant: "accent", size: "lg" }),
                "button-hover h-12 rounded-xl px-7 text-base font-semibold",
              )}
            >
              {productsServicesContent.cta.label}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover/button:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
