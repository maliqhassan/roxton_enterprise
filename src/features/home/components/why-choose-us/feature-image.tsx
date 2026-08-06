"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { whyChooseContent } from "@/content/home/why-choose-us";
import { FloatingTrustCard } from "@/features/home/components/why-choose-us/floating-trust-card";
import { useParallax } from "@/hooks/use-parallax";

/**
 * Image panel with the trust card floating over it.
 *
 * The section's only client boundary, and it exists for scroll position. The
 * "float" is two parallax tracks running at opposing speeds rather than a new
 * keyframe animation: the card drifts against the photograph as the section
 * passes, which reads as depth and reuses the existing motion system instead
 * of inventing a bespoke one. useParallax collapses both ranges to zero under
 * prefers-reduced-motion, so no extra guard is needed here.
 */
export function FeatureImage() {
  const { ref: imageRef, y: imageY } = useParallax({ speed: 0.1, distance: 40 });
  const { ref: cardRef, y: cardY } = useParallax({ speed: -0.14, distance: 40 });

  return (
    <div className="relative">
      <motion.div ref={imageRef} style={{ y: imageY }}>
        <Reveal variant="image">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] shadow-xl lg:aspect-[4/5]">
            <Image
              src={whyChooseContent.image.src}
              alt={whyChooseContent.image.alt}
              fill
              // Below the fold — nothing here competes with the hero's LCP image.
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            {/* Navy wash, weighted to the base. Kept light because the source
                is already low-key; a heavy overlay would crush it to black. */}
            <div
              aria-hidden="true"
              className="from-primary/70 via-primary/15 absolute inset-0 bg-gradient-to-t to-transparent"
            />
          </div>
        </Reveal>
      </motion.div>

      <motion.div
        ref={cardRef}
        style={{ y: cardY }}
        className="mt-4 lg:absolute lg:-right-6 lg:bottom-10 lg:mt-0 lg:w-[19rem]"
      >
        <Reveal variant="fade-left" delay={0.25}>
          <FloatingTrustCard />
        </Reveal>
      </motion.div>
    </div>
  );
}
