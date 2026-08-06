export interface FeaturedProduct {
  /** Matches a ProductCategory id, so the two lists stay aligned. */
  id: string;
  title: string;
  /** How Roxton sources, supplies and delivers this category. */
  description: string;
  highlights: string[];
  image: { src: string; alt: string };
  cta: { label: string; href: string };
}

/**
 * Four categories given a full showcase. These are the ones with exact
 * photography in the project library, which is also why the category grid
 * above stays icon-led rather than half-illustrated.
 *
 * Copy describes process — how a requirement becomes a delivered order — not
 * performance. Nothing here quotes a lead time, price or volume, because no
 * such figure has been published.
 */
export const featuredProducts: FeaturedProduct[] = [
  {
    id: "it-equipment",
    title: "IT & Computer Equipment",
    description:
      "We source computing hardware through authorised distributors and established regional suppliers, so configuration, warranty terms and licensing are confirmed in writing before anything is purchased. Orders are consolidated and checked against the agreed specification, then delivered ready for deployment rather than arriving piecemeal.",
    highlights: [
      "Sourced through authorised distributors",
      "Configuration confirmed before purchase",
      "Warranty and licensing documentation supplied",
      "Consolidated delivery to your site",
    ],
    image: {
      src: "/images/products/it-equipment.jpg",
      alt: "Cabled server racks lining the aisle of a data centre",
    },
    cta: { label: "Discuss IT Requirements", href: "/contact" },
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    description:
      "Furniture is quoted from manufacturers and fabricators against your floor layout, finish and material requirements, including bespoke builds where a standard product will not fit the space. Delivery and placement are scheduled so a fit-out lands in planned movements instead of blocking the office for weeks.",
    highlights: [
      "Quoted against your floor layout",
      "Standard ranges and custom fabrication",
      "Finish and material options confirmed upfront",
      "Scheduled delivery and placement",
    ],
    image: {
      src: "/images/products/office-furniture.jpg",
      alt: "Desks and task chairs arranged in a bright modern office",
    },
    cta: { label: "Discuss a Fit-Out", href: "/contact" },
  },
  {
    id: "safety-equipment",
    title: "Safety Equipment",
    description:
      "Personal protective equipment is sourced against the standard your site works to, with certification documentation supplied alongside the goods rather than chased afterwards. Recurring requirements can be scheduled, so replacement stock does not wait on a fresh procurement cycle each time.",
    highlights: [
      "Sourced to the standard your site requires",
      "Certification supplied with the goods",
      "Scheduled replenishment for recurring lines",
      "Site-wide PPE kitting",
    ],
    image: {
      src: "/images/products/safety-equipment.jpg",
      alt: "A worker in a hi-vis vest holding a hard hat, gloves and goggles",
    },
    cta: { label: "Discuss Safety Supply", href: "/contact" },
  },
  {
    id: "industrial-equipment",
    title: "Industrial Equipment",
    description:
      "Mechanical and rotating equipment is matched to your technical specification — sizing, material, tolerance and duty — before suppliers are approached, then cross-checked on receipt. Where a part is not available locally, we handle import procurement and customs coordination through to your plant.",
    highlights: [
      "Matched to technical specification",
      "Local and import sourcing",
      "Inspection against specification on receipt",
      "Customs coordination where imported",
    ],
    image: {
      src: "/images/products/industrial-engineering.jpg",
      alt: "Hand-wheel valves on industrial pipework inside a plant",
    },
    cta: { label: "Discuss Industrial Supply", href: "/contact" },
  },
];
