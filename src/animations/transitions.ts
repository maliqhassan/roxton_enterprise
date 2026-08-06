import type { Transition } from "framer-motion";

import { duration, easing, springs } from "@/animations/tokens";

/**
 * Named Transition presets — the "how fast / how eased" half of the system.
 * motion-variants.ts pairs these with target values (the "what changes").
 */
export const transitions = {
  fast: { duration: duration.fast, ease: easing.standard } satisfies Transition,
  base: { duration: duration.base, ease: easing.standard } satisfies Transition,
  moderate: { duration: duration.moderate, ease: easing.emphasized } satisfies Transition,
  slow: { duration: duration.slow, ease: easing.emphasized } satisfies Transition,
  springSnappy: { type: "spring", ...springs.snappy } satisfies Transition,
  springGentle: { type: "spring", ...springs.gentle } satisfies Transition,
  springSmooth: { type: "spring", ...springs.smooth } satisfies Transition,
} as const;

export type TransitionToken = keyof typeof transitions;
