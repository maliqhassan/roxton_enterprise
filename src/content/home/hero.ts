export interface HeroSlide {
  src: string;
  /** Described for authors only — the banners render decorative (see HeroSlider). */
  description: string;
}

/** Rotated behind the hero copy, in order. The first is the LCP image. */
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero-warehouse.jpg",
    description:
      "Warehouse staff moving stock down the aisle of a racked distribution centre",
  },
  {
    src: "/images/hero-banner.png",
    description: "Cargo ship, freight truck and aircraft at a shipping terminal",
  },
];

export interface HeroContent {
  eyebrow: string;
  /** Displayed one per line; the last line is rendered in the accent color. */
  titleLines: string[];
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const heroContent: HeroContent = {
  eyebrow: "Procurement · Logistics · General Order Supply · Facility Support Services",
  titleLines: ["We find it.", "We deliver it.", "On time."],
  description:
    "Roxton Enterprises (Pvt.) Ltd. is an Islamabad-based procurement and logistics partner helping businesses source, supply and deliver products efficiently across Pakistan and international markets.",
  secondaryCta: { label: "Explore Services", href: "/services" },
  primaryCta: { label: "Request a Quote", href: "/contact" },
};
