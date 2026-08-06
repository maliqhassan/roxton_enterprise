"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { springs } from "@/animations/tokens";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useSafeReducedMotion();
  const smoothed = useSpring(scrollYProgress, { ...springs.smooth, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="bg-accent fixed inset-x-0 top-0 z-[var(--z-sticky)] h-[3px] origin-left"
      style={{ scaleX: prefersReducedMotion ? scrollYProgress : smoothed }}
    />
  );
}
