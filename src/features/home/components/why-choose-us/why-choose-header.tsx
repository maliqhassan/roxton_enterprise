import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Heading } from "@/components/shared/heading";
import { whyChooseContent } from "@/content/home/why-choose-us";

/**
 * Centred section header.
 *
 * Not the shared SectionHeading: this is specified at the larger `section`
 * type scale with a flanked eyebrow and a wider measure, and bending the
 * shared component would have changed every other section using it.
 */
export function WhyChooseHeader() {
  return (
    <div className="text-center">
      <Reveal variant="fade-up">
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
          <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
            {whyChooseContent.eyebrow}
          </p>
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
        </div>
      </Reveal>

      <Heading
        id="why-choose-heading"
        level={2}
        size="section"
        className="mx-auto mt-6 max-w-[20ch]"
      >
        <TextSplitReveal text={whyChooseContent.title} />
      </Heading>

      <Reveal variant="fade-up" delay={0.15}>
        <p className="text-body-lg text-muted-foreground mx-auto mt-6 max-w-[760px]">
          {whyChooseContent.description}
        </p>
      </Reveal>
    </div>
  );
}
