"use client";

import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";
import {
  blurReveal,
  fadeDown,
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  imageReveal,
  scaleReveal,
} from "@/animations/motion-variants";
import { useInView } from "@/hooks/use-in-view";

const variantMap = {
  fade: fadeIn,
  "fade-up": fadeUp,
  "fade-down": fadeDown,
  "fade-left": fadeLeft,
  "fade-right": fadeRight,
  scale: scaleReveal,
  blur: blurReveal,
  image: imageReveal,
} as const;

export type RevealVariant = keyof typeof variantMap;

interface UseRevealOptions {
  delay?: number;
  once?: boolean;
}

/**
 * Returns motion props ready to spread onto a motion.* element:
 * <motion.div {...useReveal("fade-up")} />
 */
export function useReveal(
  variant: RevealVariant = "fade-up",
  options: UseRevealOptions = {},
) {
  const { ref, inView } = useInView({ once: options.once });
  const prefersReducedMotion = useSafeReducedMotion();
  const variants = variantMap[variant];

  if (prefersReducedMotion) {
    return { ref, initial: "visible", animate: "visible", variants } as const;
  }

  return {
    ref,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    variants,
    transition: options.delay ? { delay: options.delay } : undefined,
  } as const;
}
