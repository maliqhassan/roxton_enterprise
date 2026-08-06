import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { buttonVariants, quoteCtaClass } from "@/components/ui/button";
import { heroContent } from "@/content/home/hero";
import { cn } from "@/lib/utils";

const heroButtonClass =
  "button-hover h-[60px] gap-2 rounded-xl px-9 text-base font-semibold";

export function HeroButtons() {
  return (
    <Reveal variant="fade-up" delay={0.75}>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href={heroContent.secondaryCta.href}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            heroButtonClass,
            // Floods brand gold on hover, with the border following the fill
            // so the outline never outlives the colour it framed. The label
            // goes navy: on gold that is ~7:1, where the variant's default
            // white would be ~2:1 and effectively unreadable.
            "border-primary-foreground/70 text-primary-foreground hover:border-accent hover:text-primary border-2 bg-transparent [--fill-color:var(--accent)]",
          )}
        >
          {heroContent.secondaryCta.label}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover/button:translate-x-1"
          />
        </Link>
        <Link
          href={heroContent.primaryCta.href}
          className={cn(
            buttonVariants({ variant: "accent", size: "lg" }),
            heroButtonClass,
            quoteCtaClass,
          )}
        >
          {heroContent.primaryCta.label}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover/button:translate-x-1"
          />
        </Link>
      </div>
    </Reveal>
  );
}
