import type { Variants } from "framer-motion";

import { offset } from "@/animations/tokens";
import { transitions } from "@/animations/transitions";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.moderate },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: offset.md },
  visible: { opacity: 1, y: 0, transition: transitions.moderate },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -offset.md },
  visible: { opacity: 1, y: 0, transition: transitions.moderate },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: offset.md },
  visible: { opacity: 1, x: 0, transition: transitions.moderate },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -offset.md },
  visible: { opacity: 1, x: 0, transition: transitions.moderate },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: transitions.moderate },
};

// filter is the one disclosed GPU-composited-but-not-compositor-only exception —
// there's no way to fake blur with transform/opacity alone.
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: transitions.slow },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08, filter: "blur(4px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: transitions.slow },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: offset.sm },
  animate: { opacity: 1, y: 0, transition: transitions.base },
  exit: { opacity: 0, y: -offset.sm, transition: transitions.fast },
};
