import type { Variants } from "framer-motion";

/** Container variant that staggers its children's own "visible" transitions. */
export function createStaggerContainer(
  staggerChildren = 0.06,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

export const staggerContainer = createStaggerContainer();
export const staggerContainerFast = createStaggerContainer(0.03);
export const staggerContainerSlow = createStaggerContainer(0.1);
