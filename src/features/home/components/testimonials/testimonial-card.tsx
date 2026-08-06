import { Quote, Star } from "lucide-react";
import Image from "next/image";

import { initialsOf, type Testimonial } from "@/content/home/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const MAX_RATING = 5;

/**
 * One testimonial.
 *
 * Marked up as figure > blockquote + figcaption, which is the pattern that
 * actually ties a quotation to its attribution — a div of styled text would
 * leave a screen reader no way to tell whose words these are.
 *
 * Presentational, not interactive: a quotation has no destination, so there is
 * nothing to link and nothing to focus. A Server Component; the hover is CSS.
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="group border-border bg-background hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-3xl border p-10 shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg">
      {/* Oversized quote mark, decorative only — the real quotation marks are
          the blockquote's job, so this stays out of the accessibility tree. */}
      <Quote
        aria-hidden="true"
        className="text-primary/5 group-hover:text-accent/15 absolute -top-2 right-4 size-28 transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)]"
      />

      <div className="relative">
        <div className="flex gap-1" aria-hidden="true">
          {Array.from({ length: MAX_RATING }, (_, index) => (
            <Star
              key={index}
              className={
                index < testimonial.rating
                  ? "fill-accent text-accent size-4"
                  : "text-border size-4"
              }
            />
          ))}
        </div>
        {/* The stars are decoration; this is the rating anyone not seeing them
            actually receives. */}
        <span className="sr-only">
          Rated {testimonial.rating} out of {MAX_RATING}
        </span>

        <blockquote className="text-body text-foreground mt-5 leading-relaxed">
          <p>{testimonial.quote}</p>
        </blockquote>
      </div>

      {/* mt-auto keeps attributions aligned across cards whose quotes differ
          in length. */}
      <figcaption className="border-border relative mt-auto flex items-center gap-4 border-t pt-6">
        {testimonial.logo ? (
          <Image
            src={testimonial.logo}
            alt={`${testimonial.organization} logo`}
            width={48}
            height={48}
            loading="lazy"
            className="size-12 rounded-full object-contain"
          />
        ) : (
          <span
            aria-hidden="true"
            className="bg-primary/8 text-primary flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold"
          >
            {initialsOf(testimonial.name)}
          </span>
        )}

        <span className="min-w-0">
          <span className="text-body-sm text-foreground block font-bold">
            {testimonial.name}
          </span>
          <span className="text-body-sm text-muted-foreground block">
            {testimonial.position} · {testimonial.organization}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
