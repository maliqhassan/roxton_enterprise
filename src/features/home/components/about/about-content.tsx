import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Heading } from "@/components/shared/heading";
import { buttonVariants } from "@/components/ui/button";
import { aboutContent } from "@/content/home/about";
import { cn } from "@/lib/utils";

/**
 * Left column: eyebrow, statement heading, positioning copy, CTA.
 *
 * Stays a Server Component — every animated part is delegated to a client
 * leaf (Reveal / TextSplitReveal), so none of this copy ships as JS.
 */
export function AboutContent() {
  return (
    <div>
      <Reveal variant="fade-up">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="bg-accent/50 h-px w-10 shrink-0" />
          <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
            {aboutContent.eyebrow}
          </p>
        </div>
      </Reveal>

      <Heading id="about-heading" level={2} size="section" className="mt-6">
        <TextSplitReveal text={aboutContent.title} />
      </Heading>

      <Reveal variant="fade-up" delay={0.15}>
        <div className="mt-6 max-w-[520px] space-y-4">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal variant="fade-up" delay={0.3}>
        <Link
          href={aboutContent.cta.href}
          className={cn(
            buttonVariants({ variant: "accent", size: "lg" }),
            "button-hover mt-8 h-12 rounded-xl px-7 text-base font-semibold",
          )}
        >
          {aboutContent.cta.label}
        </Link>
      </Reveal>
    </div>
  );
}
