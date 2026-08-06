"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import { getParallaxOffsetRange, type ParallaxRangeOptions } from "@/animations/parallax";
import { scrollOffset } from "@/animations/scroll";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

/**
 * Returns { ref, y } — attach ref to the tracked element, bind style={{ y }}.
 * y is a MotionValue, so scroll updates never trigger a React re-render.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: ParallaxRangeOptions = {},
) {
  const ref = useRef<T>(null);
  const prefersReducedMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [...scrollOffset.enterViewport],
  });
  const range = prefersReducedMotion
    ? (["0px", "0px"] as [string, string])
    : getParallaxOffsetRange(options);
  const y = useTransform(scrollYProgress, [0, 1], range);

  return { ref, y };
}
