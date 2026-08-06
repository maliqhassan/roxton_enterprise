"use client";

import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

/**
 * Tracks pointer position via Framer Motion's MotionValue instead of
 * useState — pointer-move updates never enter React's render cycle.
 * Bind directly to style={{ x, y }} on a motion component, or feed into
 * useTransform for derived effects.
 */
export function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return { x, y };
}
