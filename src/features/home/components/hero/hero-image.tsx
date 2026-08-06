"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { useParallax } from "@/hooks/use-parallax";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

export function HeroImage() {
  const { ref: parallaxRef, y } = useParallax({ speed: 0.12, distance: 50 });
  const { x: mouseX } = useMousePosition();
  const prefersReducedMotion = useSafeReducedMotion();

  // Kept small: every pixel of travel needs matching overscan below, and
  // overscan is magnification on an image that object-cover already crops.
  const tiltX = useTransform(mouseX, [0, 1920], [6, -6]);

  return (
    <motion.div
      ref={parallaxRef}
      aria-hidden="true"
      style={{ y, x: prefersReducedMotion ? 0 : tiltX }}
      // Just enough overscan to hide the edge at max tilt/parallax travel
      // (6px each), no more — extra inset reads as zoom on the banner.
      className="absolute -inset-3"
    >
      <Image
        src="/images/hero-banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="bg-primary/72 lg:from-primary/94 lg:via-primary/62 lg:to-primary/20 absolute inset-0 lg:bg-transparent lg:bg-gradient-to-r" />
    </motion.div>
  );
}
