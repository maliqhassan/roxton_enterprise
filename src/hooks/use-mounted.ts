"use client";

import { useEffect, useState } from "react";

/** True only after the client has mounted — false during SSR and the first client render. */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
