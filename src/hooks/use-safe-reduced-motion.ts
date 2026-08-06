"use client";

import { useReducedMotion } from "framer-motion";

import { useMounted } from "@/hooks/use-mounted";

/**
 * SSR-safe wrapper over Framer Motion's useReducedMotion. The raw hook
 * resolves synchronously from matchMedia on the client's first render,
 * which can differ from the server's render (no matchMedia there) and
 * trigger a hydration mismatch if used to branch DOM structure or initial
 * animation values. This always returns false until after the client has
 * mounted, matching SSR output exactly on first paint; the real preference
 * applies one client-only re-render later. Use this everywhere instead of
 * importing useReducedMotion directly.
 */
export function useSafeReducedMotion(): boolean {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  return mounted && Boolean(prefersReducedMotion);
}
