import {
  BadgeCheck,
  DollarSign,
  Headset,
  ShieldCheck,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseContent = {
  eyebrow: "Why Choose Roxton",
  title: "Reliable. Professional. Committed.",
  description:
    "Roxton Enterprises delivers reliable procurement, logistics and supply solutions backed by quality, transparency and long-term client relationships.",
  image: {
    src: "/images/why-choose/quality-inspection.jpg",
    alt: "A stock controller checking inventory against a clipboard between warehouse racking",
  },
  /** Shown in the glass card floating over the image. */
  trustPoints: [
    "100% Quality Commitment",
    "Trusted Procurement Partner",
    "Nationwide Delivery",
  ],
  cta: { label: "Partner With Us", href: "/contact" },
};

/**
 * Single source of truth for the feature grid — adding a seventh reason is a
 * data edit, not a component change.
 */
export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: "trusted-partner",
    title: "Trusted Procurement Partner",
    description: "Reliable sourcing from verified suppliers.",
    icon: BadgeCheck,
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Every product meets client quality standards.",
    icon: ShieldCheck,
  },
  {
    id: "fast-delivery",
    title: "Fast & Reliable Delivery",
    description: "Efficient logistics with on-time execution.",
    icon: Truck,
  },
  {
    id: "experienced-team",
    title: "Experienced Team",
    description: "Professional procurement and supply specialists.",
    icon: Users,
  },
  {
    id: "competitive-pricing",
    title: "Competitive Pricing",
    description: "Cost-effective sourcing without compromising quality.",
    icon: DollarSign,
  },
  {
    id: "customer-support",
    title: "Customer-Centric Support",
    description: "Dedicated support before, during and after delivery.",
    icon: Headset,
  },
];
