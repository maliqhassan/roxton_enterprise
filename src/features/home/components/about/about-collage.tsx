"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import { aboutContent } from "@/content/home/about";
import { AboutFloatingCard } from "@/features/home/components/about/about-floating-card";
import {
  AboutFeatureSlider,
  AboutSupportingImages,
} from "@/features/home/components/about/about-images";
import { useParallax } from "@/hooks/use-parallax";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

const { slides } = aboutContent.collage;

/** How long each slide holds before the lead frame advances. */
const SLIDE_INTERVAL_MS = 5000;

/**
 * Right column: an overlapping image composition with a glass card floating
 * over the lead frame.
 *
 * Owns the carousel state rather than the slider, because the card reads from
 * it too — the image and its description have to change as one, and lifting
 * the state here is what keeps them from disagreeing.
 *
 * The parallax drift is deliberately small; a collage that visibly slides
 * against the copy beside it reads as a glitch rather than depth. useParallax
 * collapses its range under prefers-reduced-motion, so no extra guard here.
 */
export function AboutCollage() {
  const { ref: parallaxRef, y } = useParallax({ speed: 0.08, distance: 40 });
  const prefersReducedMotion = useSafeReducedMotion();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const syncSelected = () => setSelected(emblaApi.selectedScrollSnap());
    syncSelected();
    emblaApi.on("select", syncSelected);
    return () => {
      emblaApi.off("select", syncSelected);
    };
  }, [emblaApi]);

  useEffect(() => {
    // The slides carry real copy, so this is meaningful content that moves on
    // its own — it needs a way to stop. Hover and keyboard focus pause it, and
    // it never starts at all under reduced motion.
    if (!emblaApi || prefersReducedMotion || paused) return;

    const timer = setInterval(() => emblaApi.scrollNext(), SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [emblaApi, prefersReducedMotion, paused]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const activePoints = slides[selected]?.points ?? [];

  return (
    <motion.div ref={parallaxRef} style={{ y }} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-6 -z-10 hidden size-40 opacity-[0.07] lg:block"
        style={{
          backgroundImage: "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Wrapper carries no height of its own, so the card can be static in
          flow on mobile and absolutely placed against the image on lg. */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <Reveal variant="image">
          <AboutFeatureSlider
            viewportRef={emblaRef}
            selected={selected}
            onSelect={scrollTo}
          />
        </Reveal>
        <Reveal
          variant="fade-right"
          delay={0.25}
          className="mt-4 lg:absolute lg:bottom-6 lg:-left-6 lg:mt-0 lg:w-[19rem]"
        >
          <AboutFloatingCard points={activePoints} />
        </Reveal>
      </div>

      <Reveal variant="fade-up" delay={0.15} className="mt-4">
        <AboutSupportingImages />
      </Reveal>
    </motion.div>
  );
}
