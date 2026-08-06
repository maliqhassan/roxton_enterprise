import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge doesn't know our custom font-size scale (text-display,
// text-h1..h6, text-body*, text-caption, defined in
// src/styles/tokens/typography.css) — it only recognizes Tailwind's
// built-in size keywords (xs/sm/base/lg/xl/2xl...). Without this, it
// misclassifies e.g. "text-display" as a text-COLOR utility (since it
// doesn't match any known size) and silently drops it whenever a real
// color class like "text-primary-foreground" appears alongside it in the
// same cn() call — confirmed directly: twMerge("text-display",
// "text-primary-foreground") returns just "text-primary-foreground".
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "section",
            "display",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "body-lg",
            "body",
            "body-sm",
            "caption",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
