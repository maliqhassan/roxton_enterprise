import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { buttonVariants } from "@/components/ui/button";
import type { Service } from "@/content/services/services";
import { cn } from "@/lib/utils";

interface ServiceDetailProps {
  service: Service;
  /** Even entries put the image right; odd ones flip it. */
  index: number;
}

/**
 * One detailed service: image on one side, copy and its "includes" list on the
 * other, alternating down the page.
 *
 * The alternation is done with `lg:order-*` rather than by reordering the
 * markup, so the heading always precedes its own description in the DOM
 * regardless of which side the image lands on — a screen reader and a
 * keyboard user get the same sequence on every row.
 *
 * Rendered as <article> inside the section's list, each labelled by its own
 * h3, so assistive tech can navigate service to service.
 */
export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const isReversed = index % 2 === 1;
  const headingId = `${service.id}-heading`;

  return (
    <article
      id={service.id}
      aria-labelledby={headingId}
      // scroll-mt clears the sticky header when the overview cards jump here.
      className="scroll-mt-[calc(var(--height-header)+2rem)]"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="image" className={cn(isReversed && "lg:order-2")}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl">
              <Image
                src={service.image.src}
                alt={service.image.alt}
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
                {service.title}
              </Heading>
              <p className="text-body-lg text-muted-foreground mt-4">
                {service.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15}>
              <ul
                aria-label={`${service.title} includes`}
                className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
              >
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="text-body-sm text-foreground flex items-start gap-2.5"
                  >
                    <span className="bg-accent/15 text-accent mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <Link
                href={service.cta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "button-hover mt-9 h-12 gap-2 rounded-xl px-7 text-base font-semibold",
                )}
              >
                {service.cta.label}
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
