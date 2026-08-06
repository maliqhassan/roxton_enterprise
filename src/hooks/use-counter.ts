"use client";

import { useRef } from "react";
import { animate } from "framer-motion";

import { duration, easing } from "@/animations/tokens";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

interface UseCounterOptions {
  duration?: number;
  formatter?: (value: number) => string;
}

const defaultFormatter = (value: number) => Math.round(value).toLocaleString();

/**
 * Returns { ref, onViewportEnter } for a motion.* element. Drives the
 * count-up by mutating textContent directly inside Framer's imperative
 * animate() callback instead of setState — zero React re-renders during a
 * ~60fps count. Uses Framer Motion's own onViewportEnter/viewport props
 * (the library's native viewport-trigger mechanism) rather than a
 * hand-rolled useInView + useEffect combination.
 *
 * Deliberately does NOT set a viewport margin: Framer's viewport PROP
 * (the InViewFeature motion-component mechanism, as opposed to its
 * useInView() hook) silently fails to fire onViewportEnter at all when
 * given a negative margin, in this installed version (12.43.0) — confirmed
 * by isolated reproduction. amount: 0.2 alone is enough to avoid triggering
 * at the very first sliver of visibility.
 */
export function useCounter(target: number, options: UseCounterOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useSafeReducedMotion();

  function handleViewportEnter() {
    const node = ref.current;
    if (!node) return;

    const format = options.formatter ?? defaultFormatter;

    if (prefersReducedMotion) {
      node.textContent = format(target);
      return;
    }

    animate(0, target, {
      duration: options.duration ?? duration.slower,
      ease: easing.standard,
      onUpdate: (value) => {
        node.textContent = format(value);
      },
    });
  }

  return { ref, onViewportEnter: handleViewportEnter };
}
