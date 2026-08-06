import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Heading } from "@/components/shared/heading";
import { ctaContent } from "@/content/home/cta";

/**
 * Eyebrow, headline and supporting copy.
 *
 * The headline runs at the `display` step of the type scale with weight 900
 * rather than getting a fourth headline token: display already carries the
 * 1.05 line-height this needs and tops out at 67px against the brief's 68,
 * close enough not to justify another entry on the scale. Its floor is 40px
 * where the brief says 48, so it starts a little smaller on phones — a
 * deliberate trade for keeping the scale to three headline sizes.
 */
export function CtaContent() {
  return (
    <>
      <Reveal variant="fade-up">
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
          <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
            {ctaContent.eyebrow}
          </p>
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
        </div>
      </Reveal>

      <Heading
        id="cta-heading"
        level={2}
        size="display"
        className="text-primary-foreground mt-6 font-black"
      >
        <TextSplitReveal text={ctaContent.title} />
      </Heading>

      <Reveal variant="fade-up" delay={0.15}>
        <p className="text-body-lg text-primary-foreground/90 mx-auto mt-6 max-w-[760px]">
          {ctaContent.description}
        </p>
      </Reveal>
    </>
  );
}
