import { Quote } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { chairman } from "@/content/leadership/leadership";

/**
 * The page's centrepiece.
 *
 * Its dominance is structural, not decorative: the portrait sits in a 40%
 * column of a full-width panel at roughly 480px, while each director portrait
 * sits in a half-width card at roughly 240px — about twice the linear size,
 * four times the area. That ratio holds on mobile too, where the chairman
 * portrait stays full-width and the directors drop to a two-column grid, so
 * the hierarchy survives the stack rather than flattening.
 *
 * Marked up as figure + blockquote + figcaption, which is what actually ties a
 * quotation to the person who said it. A styled div would leave a screen
 * reader no way to attribute the message.
 */
export function ChairmanMessage() {
  return (
    <Section
      id="chairman"
      aria-labelledby="chairman-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial accentGlow />

      <Container>
        <div className="border-border bg-background relative overflow-hidden rounded-[32px] border p-6 shadow-xl sm:p-10 lg:p-14">
          {/* Gold rule across the top edge — the visual marker that this card
              outranks every other card on the page. */}
          <span aria-hidden="true" className="bg-accent absolute inset-x-0 top-0 h-1" />

          <div className="grid items-center gap-10 lg:grid-cols-[40fr_60fr] lg:gap-14">
            <Reveal variant="image">
              <div className="relative">
                <div className="border-accent/40 relative aspect-[4/5] overflow-hidden rounded-[24px] border-2 shadow-2xl">
                  <Image
                    src={chairman.image.src}
                    alt={chairman.image.alt}
                    fill
                    // Above the fold on this route and the page's focal point,
                    // so it is the LCP candidate.
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating glass plate, offset off the portrait's lower edge. */}
                <div className="border-border/60 bg-background/80 absolute -bottom-5 left-5 rounded-2xl border px-5 py-3 shadow-xl backdrop-blur-xl sm:left-8">
                  <p className="text-body-sm text-foreground font-bold">
                    {chairman.name}
                  </p>
                  <p className="text-body-sm text-muted-foreground">{chairman.title}</p>
                </div>
              </div>
            </Reveal>

            <figure className="relative mt-8 lg:mt-0">
              {/* Decorative only — the blockquote already marks the quotation. */}
              <Quote
                aria-hidden="true"
                className="text-accent/10 absolute -top-6 right-0 size-24"
              />

              <Reveal variant="fade-up">
                <span className="bg-accent/15 text-accent text-body-sm inline-flex items-center rounded-full px-3 py-1 font-semibold tracking-wide uppercase">
                  {chairman.title}
                </span>

                <Heading id="chairman-heading" level={2} size="h1" className="mt-5">
                  {chairman.name}
                </Heading>

                <p className="text-body-lg text-accent mt-2 font-semibold">
                  {chairman.messageHeading}
                </p>
              </Reveal>

              <Reveal variant="fade-up" delay={0.15}>
                <blockquote className="text-body-lg text-foreground mt-6 leading-relaxed">
                  <p>&ldquo;{chairman.message}&rdquo;</p>
                </blockquote>
              </Reveal>

              <Reveal variant="fade-up" delay={0.25}>
                <figcaption className="border-border mt-8 border-t pt-6">
                  <p className="font-heading text-h4 text-primary italic">
                    {chairman.signature}
                  </p>
                  <p className="text-body-sm text-muted-foreground mt-1">
                    {chairman.name} · {chairman.title}
                  </p>
                </figcaption>
              </Reveal>

              <Reveal variant="fade-up" delay={0.35}>
                <ul
                  aria-label="Leadership qualities"
                  className="mt-8 grid grid-cols-3 gap-3"
                >
                  {chairman.highlights.map((highlight) => {
                    const Icon = highlight.icon;

                    return (
                      <li
                        key={highlight.id}
                        className="group border-border bg-surface hover:border-accent/40 flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-md"
                      >
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.75}
                          className="text-primary group-hover:text-accent size-6 transition-[color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110"
                        />
                        <span className="text-body-sm text-foreground font-semibold">
                          {highlight.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </figure>
          </div>
        </div>
      </Container>
    </Section>
  );
}
