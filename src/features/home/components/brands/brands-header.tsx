import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Heading } from "@/components/shared/heading";
import { brandsContent } from "@/content/home/brands";

/**
 * Centred section header.
 *
 * Not the shared SectionHeading: this is specified at the larger `section`
 * type scale with a flanked eyebrow and a wider measure, and bending the
 * shared component would have changed every other section using it.
 */
export function BrandsHeader() {
  return (
    <div className="text-center">
      <Reveal variant="fade-up">
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
          <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
            {brandsContent.eyebrow}
          </p>
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
        </div>
      </Reveal>

      <Heading id="brands-heading" level={2} size="section" className="mt-6">
        <TextSplitReveal text={brandsContent.title} />
      </Heading>

      <Reveal variant="fade-up" delay={0.15}>
        <p className="text-body-lg text-muted-foreground mx-auto mt-6 max-w-[720px]">
          {brandsContent.description}
        </p>
      </Reveal>
    </div>
  );
}
