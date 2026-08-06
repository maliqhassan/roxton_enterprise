import type { SVGProps } from "react";

/**
 * Minimal brand glyphs for social/contact links. lucide-react deliberately
 * ships no brand/logo icons (it's a generic icon set), and pulling in a
 * whole brand-icon package for a handful of glyphs isn't worth the
 * dependency — these are simplified, hand-drawn approximations, sized to
 * drop in next to lucide icons (same 24x24 viewBox, fill-based like real
 * brand marks).
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.85l-.46 2.91h-2.39v7.04A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.5v-7l6.5 3.5-6.5 3.5Z" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.55a9.86 9.86 0 0 0 4.91 1.3h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.19 1.25-1.95 1.42-.52.11-1.2.2-3.49-.75-2.93-1.21-4.81-4.18-4.96-4.38-.14-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.44.24-.26.65-.38.94-.38h.34c.3 0 .46 0 .66.5.24.6.83 2.05.9 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2 1.11 1 2.05 1.31 2.35 1.46.3.15.48.13.65-.08.17-.2.72-.85.92-1.14.2-.29.4-.24.66-.14.28.1 1.72.82 2.02.97.3.15.5.22.57.35.08.13.08.75-.16 1.43Z" />
    </svg>
  );
}
