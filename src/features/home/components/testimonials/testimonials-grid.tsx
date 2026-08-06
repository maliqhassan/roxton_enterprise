import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/content/home/testimonials";
import { TestimonialCard } from "@/features/home/components/testimonials/testimonial-card";

/**
 * Cards are stretched by the grid and each is h-full, so a row's cards match
 * height however long their quotes run.
 */
const STAGGER_STEP = 0.08;

export function TestimonialsGrid() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Reveal
          key={testimonial.id}
          variant="fade-up"
          delay={index * STAGGER_STEP}
          className="h-full"
        >
          <TestimonialCard testimonial={testimonial} />
        </Reveal>
      ))}
    </div>
  );
}
