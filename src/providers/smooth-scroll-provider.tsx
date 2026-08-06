"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * Initializes Lenis smooth scroll. Skips initialization entirely under
 * prefers-reduced-motion — native instant scroll takes over completely,
 * which is the correct way to respect that preference for a scroll-smoothing
 * library (not just a shorter animation).
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      // Lenis's own timing-function format (time) => progress — distinct
      // from the cubic-bezier tokens used elsewhere, kept as-is rather than
      // forcing a fake unification across incompatible API shapes.
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
