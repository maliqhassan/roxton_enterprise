"use client";

import type { EmblaViewportRefType } from "embla-carousel-react";
import Image from "next/image";

import { aboutContent } from "@/content/home/about";
import { cn } from "@/lib/utils";

const { slides, supporting } = aboutContent.collage;

/**
 * Shared tile chrome. The fixed aspect ratios are load-bearing, not cosmetic:
 * they reserve the box before the image arrives, so nothing shifts on decode.
 */
const tileClass = "relative overflow-hidden rounded-[20px]";

interface AboutFeatureSliderProps {
  viewportRef: EmblaViewportRefType;
  selected: number;
  onSelect: (index: number) => void;
}

/**
 * The large lead frame. Purely the photograph and its controls — the caption
 * that used to sit here collided with the floating card and buried the
 * photograph's own subject, so the per-slide wording now lives in that card
 * instead, where it has room to be read.
 *
 * Carousel state is owned by AboutCollage because the card needs it too.
 */
export function AboutFeatureSlider({
  viewportRef,
  selected,
  onSelect,
}: AboutFeatureSliderProps) {
  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Roxton operations"
      className={`${tileClass} aspect-[16/10] shadow-xl`}
    >
      <div ref={viewportRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                // Eager rather than `priority` on the first frame: this section
                // is below the fold, so preloading would compete with the
                // hero's LCP image.
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show ${slide.label}`}
            aria-current={index === selected}
            className={cn(
              "h-2.5 rounded-full transition-all duration-[var(--duration-base)] ease-[var(--ease-standard)]",
              "focus-visible:ring-primary-foreground/80 focus-visible:ring-2 focus-visible:outline-none",
              index === selected
                ? "bg-accent w-6"
                : "bg-primary-foreground/60 hover:bg-primary-foreground/90 w-2.5",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/** The three static landscape tiles beneath the lead frame. Lazy-loaded. */
export function AboutSupportingImages() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {supporting.map((image) => (
        <div key={image.src} className={`${tileClass} aspect-[4/3] shadow-lg`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 18vw, 30vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
