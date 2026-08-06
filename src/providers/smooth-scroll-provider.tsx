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
      // Was duration: 1.2, which meant every wheel tick was smoothed over more
      // than a second — the page kept gliding long after the input stopped,
      // which reads as lag rather than smoothness. `lerp` follows the wheel
      // frame by frame instead of animating to a target, so it stays
      // responsive; 0.12 keeps the easing without the drift.
      lerp: 0.12,
      // Touch devices already have native momentum; smoothing on top of it
      // fights the platform and feels worse than leaving it alone.
      syncTouch: false,
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
