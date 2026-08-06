import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { productsPage, suppliedIndustries } from "@/content/products/page";

const STAGGER_STEP = 0.04;
const STAGGER_CAP = 0.24;

/**
 * The twelve sectors supplied.
 *
 * Four columns at xl so twelve items form three clean rows. Presentational —
 * a sector name has no destination that would not be invented.
 */
export function ProductsIndustries() {
  return (
    <Section
      id="products-industries"
      aria-labelledby="products-industries-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop accentGlow />

      <Container>
        <SectionIntro
          headingId="products-industries-heading"
          eyebrow={productsPage.industries.eyebrow}
          title={productsPage.industries.title}
          description={productsPage.industries.description}
        />

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {suppliedIndustries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <li key={industry.id} className="h-full">
                <Reveal
                  variant="fade-up"
                  delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
                  className="h-full"
                >
                  <div className="group border-border bg-background hover:border-accent/30 flex h-full flex-col rounded-[20px] border p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-md">
                    <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-11 items-center justify-center rounded-xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    </span>
                    <Heading level={3} size="h6" className="mt-4 text-base">
                      {industry.title}
                    </Heading>
                    <p className="text-body-sm text-muted-foreground mt-1.5">
                      {industry.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
