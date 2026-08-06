"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

import { heroSlides } from "@/content/home/hero";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useParallax } from "@/hooks/use-parallax";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

/** How long each banner holds before the carousel advances. */
const SLIDE_INTERVAL_MS = 6000;

/**
 * The hero's full-bleed background: banners rotating behind fixed copy.
 *
 * Presented as decorative (aria-hidden, empty alts) because it carries no
 * information the heading doesn't already state — which is also why it has no
 * dots or arrows. Interactive controls inside an aria-hidden region are
 * unreachable by keyboard and screen reader, so the honest options are
 * "decorative and automatic" or "meaningful and fully controllable"; the
 * former matches what this actually is.
 */
export function HeroSlider() {
  const { ref: parallaxRef, y } = useParallax({ speed: 0.12, distance: 50 });
  const { x: mouseX } = useMousePosition();
  const prefersReducedMotion = useSafeReducedMotion();

  // Kept small: every pixel of travel needs matching overscan below, and
  // overscan is magnification on an image that object-cover already crops.
  const tiltX = useTransform(mouseX, [0, 1920], [6, -6]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

  useEffect(() => {
    // Nothing auto-advances under reduced motion — the first banner stands,
    // which also satisfies "pause auto-updating content" without adding
    // controls this decorative region can't expose.
    if (!emblaApi || prefersReducedMotion) return;

    const timer = setInterval(() => emblaApi.scrollNext(), SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [emblaApi, prefersReducedMotion]);

  return (
    <motion.div
      ref={parallaxRef}
      aria-hidden="true"
      style={{ y, x: prefersReducedMotion ? 0 : tiltX }}
      // Just enough overscan to hide the edge at max tilt/parallax travel
      // (6px each), no more — extra inset reads as zoom on the banner.
      className="absolute -inset-3"
    >
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={slide.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={slide.src}
                alt=""
                fill
                // Only the first banner is above the fold at paint time.
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Sits outside the track so the tint stays put as slides move. Held
          dense across the left ~half, because the copy column spans roughly
          16-48% of the width and the scrim has to carry white text over the
          brightest slide, not just the darkest — legibility can't depend on
          which banner happens to be showing. It opens up past the midpoint so
          the photography still reads. */}
      <div className="bg-primary/78 lg:from-primary/94 lg:via-primary/82 lg:to-primary/18 absolute inset-0 lg:bg-transparent lg:bg-gradient-to-r" />
    </motion.div>
  );
}
