import { Reveal } from "@/components/motion/reveal";
import { TextSplitReveal } from "@/components/motion/text-split-reveal";
import { Heading } from "@/components/shared/heading";
import { heroContent } from "@/content/home/hero";
import { cn } from "@/lib/utils";

export function HeroContent() {
  const lastLineIndex = heroContent.titleLines.length - 1;

  return (
    <div>
      <Reveal variant="fade">
        <p className="text-body-sm text-accent mb-4 font-semibold tracking-widest uppercase">
          {heroContent.eyebrow}
        </p>
      </Reveal>
      <Heading id="hero-heading" level={1} size="hero">
        {heroContent.titleLines.map((line, index) => (
          <TextSplitReveal
            key={line}
            text={line}
            delay={index * 0.15}
            className={cn(
              "block",
              index === lastLineIndex ? "text-accent" : "text-primary-foreground",
            )}
          />
        ))}
      </Heading>
      <Reveal variant="fade-up" delay={0.6}>
        <p className="text-primary-foreground/80 mt-6 max-w-[540px] text-[20px] leading-[1.6]">
          {heroContent.description}
        </p>
      </Reveal>
    </div>
  );
}
