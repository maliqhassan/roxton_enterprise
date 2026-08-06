import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building,
  Building2,
  DollarSign,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  Headset,
  Hospital,
  Landmark,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface IconItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface FeatureItem extends IconItem {
  description: string;
}

export const servicesPage = {
  hero: {
    eyebrow: "Our Services",
    title: "Complete Procurement & Supply Solutions",
    description:
      "Roxton Enterprises provides comprehensive procurement, logistics, commercial trading, facility support and general order supply services for government organizations, private companies, NGOs and industrial clients across Pakistan.",
    primaryCta: { label: "Request a Quote", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
    image: {
      src: "/images/about/about-handshake.jpg",
      alt: "Two business partners shaking hands after agreeing a supply contract",
    },
  },
  overview: {
    eyebrow: "Services Overview",
    title: "Everything Your Organization Needs",
    description:
      "We provide reliable procurement and supply solutions designed to simplify purchasing, logistics and operational support.",
  },
  detail: {
    eyebrow: "What We Deliver",
    title: "Our Services in Detail",
    description:
      "Each service below covers a distinct part of the supply chain. Most clients use several together.",
  },
  process: {
    eyebrow: "How We Work",
    title: "Our Procurement Process",
    description:
      "A consistent seven-stage route from your first requirement through to support after delivery.",
  },
  industries: {
    eyebrow: "Industries We Serve",
    title: "Trusted Across Every Sector",
    description:
      "From federal ministries to manufacturing plants, our procurement and supply services adapt to how each sector buys.",
  },
  whyChoose: {
    eyebrow: "Why Choose Roxton",
    title: "Built Around Reliability",
    description:
      "The reasons organizations keep their procurement with us rather than managing a spread of separate vendors.",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Questions, Answered",
    description:
      "The things organizations most often ask before sending us their first requirement.",
  },
  cta: {
    eyebrow: "Ready When You Are",
    title: "Ready to Simplify Your Procurement Process?",
    description:
      "Partner with Roxton Enterprises for reliable procurement, logistics and supply chain solutions tailored to your organization's requirements.",
    primaryCta: { label: "Request a Quote", href: "/contact" },
    // NOTE: intentionally not a tel: link — siteConfig.contact.phone is still
    // the +92 000 0000000 placeholder, and a dead dial link is worse than a
    // working contact page. Swap to tel: once the real number is assigned.
    secondaryCta: { label: "Call Our Team", href: "/contact" },
    trustBadges: [
      "Fast Response",
      "Reliable Procurement",
      "Nationwide Delivery",
      "Quality Assured",
    ],
  },
};

export const servedIndustries: IconItem[] = [
  { id: "government", title: "Government", icon: Building2 },
  { id: "semi-government", title: "Semi Government", icon: Landmark },
  { id: "private-sector", title: "Private Sector", icon: BriefcaseBusiness },
  { id: "defense", title: "Defense Organizations", icon: ShieldCheck },
  { id: "oil-and-gas", title: "Oil & Gas", icon: Fuel },
  { id: "construction", title: "Construction", icon: HardHat },
  { id: "healthcare", title: "Healthcare", icon: Hospital },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "corporate", title: "Corporate", icon: Building },
  { id: "manufacturing", title: "Manufacturing", icon: Factory },
];

export const whyChooseFeatures: FeatureItem[] = [
  {
    id: "reliable-procurement",
    title: "Reliable Procurement",
    description: "Sourcing handled end to end, with one point of accountability.",
    icon: BadgeCheck,
  },
  {
    id: "competitive-pricing",
    title: "Competitive Pricing",
    description: "Costed quotations you approve before any order is placed.",
    icon: DollarSign,
  },
  {
    id: "verified-suppliers",
    title: "Verified Suppliers",
    description: "Suppliers evaluated before they are put forward to you.",
    icon: ShieldCheck,
  },
  {
    id: "nationwide-delivery",
    title: "Nationwide Delivery",
    description: "Freight and last mile delivery coordinated across Pakistan.",
    icon: Truck,
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Goods checked against specification before despatch.",
    icon: Award,
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "A team that stays reachable after delivery, not just before it.",
    icon: Headset,
  },
];
