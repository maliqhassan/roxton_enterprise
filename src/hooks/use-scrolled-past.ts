"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the referenced element has left the viewport upwards.
 *
 * Deliberately IntersectionObserver rather than reading window.scrollY: the
 * page runs on Lenis smooth scroll, and a scroll-offset read is coupled to how
 * scrolling happens to be implemented — if the offset stops tracking, the
 * caller silently believes it is still at the top of the page. Element
 * visibility is the thing actually being asked about, and it stays correct
 * under smooth-scroll libraries, transformed wrappers and nested scrollers.
 */
export function useScrolledPast<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [past, setPast] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPast(entry ? !entry.isIntersecting : false),
      { threshold: 0 },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, past };
}
