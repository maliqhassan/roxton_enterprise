import type { Metadata } from "next";

import { productsPage } from "@/content/products/page";
import { ProductsBrands } from "@/features/products/components/brands/products-brands";
import { SupplyCapabilities } from "@/features/products/components/capabilities/supply-capabilities";
import { ProductCategoriesSection } from "@/features/products/components/categories/product-categories";
import { ProductsCta } from "@/features/products/components/cta/products-cta";
import { ProductsFaq } from "@/features/products/components/faq/products-faq";
import { FeaturedProductsSection } from "@/features/products/components/featured/featured-products";
import { ProductsHero } from "@/features/products/components/hero/products-hero";
import { ProductsIndustries } from "@/features/products/components/industries/products-industries";
import { WhySource } from "@/features/products/components/why-source/why-source";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description: productsPage.hero.description,
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategoriesSection />
      <FeaturedProductsSection />
      <SupplyCapabilities />
      <ProductsBrands />
      <ProductsIndustries />
      <WhySource />
      <ProductsFaq />
      <ProductsCta />
    </>
  );
}
