import {
  Box,
  Cog,
  Globe2,
  Handshake,
  PackageSearch,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const servicesContent = {
  eyebrow: "Core Services",
  title: "What We Offer",
  description:
    "Five disciplines, coordinated as one — so nothing falls through the gaps between vendors.",
  cta: { label: "View All Services", href: "/services" },
};

export const services: ServiceItem[] = [
  {
    icon: PackageSearch,
    title: "Procurement Services",
    description: "We source the right products at the right price for your business.",
  },
  {
    icon: Globe2,
    title: "Logistics & Supply Chain",
    description: "End-to-end movement of goods — from origin to your doorstep.",
  },
  {
    icon: Box,
    title: "General Order Supply",
    description: "Reliable supply of general goods, materials, and consumables.",
  },
  {
    icon: Handshake,
    title: "Commercial Trading",
    description: "Facilitating trade between businesses locally and internationally.",
  },
  {
    icon: Cog,
    title: "Facility Support Services",
    description: "Operational support to keep your workplace running smoothly.",
  },
];
