import Image from "next/image";

import type { Brand } from "@/content/home/brands";

interface BrandLogoProps {
  brand: Brand;
  /** In the duplicated half of the track, so it must not be announced twice. */
  decorative?: boolean;
}

/** Intrinsic box for the square marks; CSS sizes them responsively. */
const LOGO_PX = 48;

/**
 * A brand's mark, or a typographic wordmark when no optimised SVG exists.
 *
 * `unoptimized` because these are already-minimal SVGs — routing them through
 * the image optimiser would cost a round trip to produce a larger file, and it
 * avoids needing `dangerouslyAllowSVG` in next.config. Explicit dimensions
 * reserve the box, so the marquee cannot reflow as logos decode.
 */
export function BrandLogo({ brand, decorative = false }: BrandLogoProps) {
  if (!brand.logo) {
    return (
      <span
        aria-hidden={decorative || undefined}
        className="text-foreground/75 text-center text-lg leading-none font-extrabold tracking-tight whitespace-nowrap"
      >
        {brand.name}
      </span>
    );
  }

  return (
    <Image
      src={brand.logo}
      // The duplicated half is aria-hidden, so an empty alt keeps it silent
      // without leaving an unlabelled image behind.
      alt={decorative ? "" : `${brand.name} logo`}
      width={LOGO_PX}
      height={LOGO_PX}
      loading="lazy"
      unoptimized
      className="size-9 object-contain sm:size-10"
    />
  );
}
