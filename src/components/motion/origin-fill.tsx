"use client";

import { useEffect } from "react";

/** Elements opting into the effect, via the `origin-fill` utility. */
const FILL_SELECTOR = ".origin-fill";

/**
 * Feeds the pointer's entry and exit point to every `origin-fill` element.
 *
 * One delegated listener rather than handlers per button: the alternative is
 * turning every CTA into a client component to attach onMouseEnter, which
 * would push a dozen server-rendered sections across the client boundary for a
 * hover effect. The buttons stay static markup and the whole feature costs a
 * single pair of listeners.
 *
 * pointerover/pointerout are used because pointerenter/leave do not bubble and
 * so cannot be delegated. They fire on every internal boundary too — moving
 * from the label onto the arrow icon counts as an "out" then an "over" — so
 * each is filtered by relatedTarget. Without that guard the origin would jump
 * mid-hover every time the cursor crossed a child element.
 *
 * Writes only custom properties, so the browser restyles the one element
 * involved and never reflows.
 */
export function OriginFill() {
  useEffect(() => {
    // The directional cue is meaningless without a real cursor, and it is
    // motion — skip it for touch and for anyone asking for less. The CSS then
    // falls back to a centred expansion on hover.
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    /** True when the pointer merely moved between children of the same target. */
    function isInternal(target: Element, related: EventTarget | null) {
      return related instanceof Node && target.contains(related);
    }

    function setOrigin(target: HTMLElement, event: PointerEvent) {
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--origin-x", `${event.clientX - rect.left}px`);
      target.style.setProperty("--origin-y", `${event.clientY - rect.top}px`);
    }

    function handleBoundary(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const fillTarget = target.closest(FILL_SELECTOR);
      if (!(fillTarget instanceof HTMLElement)) return;
      if (isInternal(fillTarget, event.relatedTarget)) return;

      setOrigin(fillTarget, event);
    }

    window.addEventListener("pointerover", handleBoundary, { passive: true });
    window.addEventListener("pointerout", handleBoundary, { passive: true });
    return () => {
      window.removeEventListener("pointerover", handleBoundary);
      window.removeEventListener("pointerout", handleBoundary);
    };
  }, []);

  return null;
}
