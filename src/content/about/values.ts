import {
  Award,
  BadgeCheck,
  Boxes,
  Briefcase,
  Building,
  Building2,
  Cog,
  DollarSign,
  Eye,
  Factory,
  Fuel,
  Gem,
  Globe2,
  GraduationCap,
  HandHeart,
  HardHat,
  Handshake,
  Headset,
  HeartHandshake,
  Hospital,
  Landmark,
  Laptop,
  Lightbulb,
  Plane,
  Repeat,
  ScrollText,
  ShieldCheck,
  Ship,
  Sparkles,
  Target,
  Truck,
  UserCheck,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

import type { IconCardItem } from "@/components/shared/icon-card-grid";

export interface Pillar {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/** Mission and vision, shown as the two lead cards above the values grid. */
export const pillars: Pillar[] = [
  {
    id: "mission",
    label: "Mission",
    title: "Procurement that works, transparently",
    description:
      "To provide reliable, transparent and cost-effective procurement and supply chain solutions that help organizations operate efficiently.",
    icon: Target,
  },
  {
    id: "vision",
    label: "Vision",
    title: "Pakistan's most trusted supply partner",
    description:
      "To become Pakistan's most trusted procurement and logistics partner by delivering quality products, dependable service and long-term business relationships.",
    icon: Eye,
  },
];

export const coreValues: IconCardItem[] = [
  { id: "integrity", title: "Integrity", icon: ShieldCheck },
  { id: "transparency", title: "Transparency", icon: ScrollText },
  { id: "reliability", title: "Reliability", icon: BadgeCheck },
  { id: "quality", title: "Quality", icon: Gem },
  { id: "commitment", title: "Commitment", icon: HandHeart },
  { id: "customer-satisfaction", title: "Customer Satisfaction", icon: UserCheck },
  { id: "innovation", title: "Innovation", icon: Lightbulb },
  { id: "professionalism", title: "Professionalism", icon: Briefcase },
];

export const whyChooseItems: IconCardItem[] = [
  {
    id: "verified-suppliers",
    title: "Verified Supplier Network",
    description: "Suppliers are evaluated before they are ever put forward to you.",
    icon: ShieldCheck,
  },
  {
    id: "competitive-pricing",
    title: "Competitive Pricing",
    description: "Costed quotations you approve before any order is placed.",
    icon: DollarSign,
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
    id: "experienced-team",
    title: "Experienced Procurement Team",
    description: "Specialists who handle tenders, RFQs and technical sourcing daily.",
    icon: Users,
  },
  {
    id: "long-term-partnerships",
    title: "Long-Term Business Partnerships",
    description: "Built for repeat supply, not one-off transactions.",
    icon: Handshake,
  },
];

export const expertiseAreas: IconCardItem[] = [
  {
    id: "procurement",
    title: "Procurement",
    description: "Sourcing, negotiation and vendor management, end to end.",
    icon: Briefcase,
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    description: "Freight, transport and storage from origin to delivery.",
    icon: Truck,
  },
  {
    id: "commercial-trading",
    title: "Commercial Trading",
    description: "Connecting businesses with trusted manufacturers.",
    icon: Globe2,
  },
  {
    id: "general-order-supply",
    title: "General Order Supply",
    description: "Everyday consumables that keep sites and offices stocked.",
    icon: Boxes,
  },
  {
    id: "it-equipment",
    title: "IT Equipment",
    description: "Business computing, networking and peripherals.",
    icon: Laptop,
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    description: "Workstations, seating and storage for whole fit-outs.",
    icon: Building,
  },
  {
    id: "industrial-products",
    title: "Industrial Products",
    description: "Mechanical components, rotating equipment and tooling.",
    icon: Cog,
  },
  {
    id: "safety-equipment",
    title: "Safety Equipment",
    description: "Certified PPE and fire safety provision.",
    icon: HardHat,
  },
  {
    id: "facility-support",
    title: "Facility Support",
    description: "Operational support that keeps workplaces running.",
    icon: Sparkles,
  },
  {
    id: "import-export",
    title: "Import & Export Coordination",
    description: "Overseas sourcing with customs coordination throughout.",
    icon: Ship,
  },
  {
    id: "warehouse-coordination",
    title: "Warehouse Coordination",
    description: "Storage, inventory control and onward distribution.",
    icon: Warehouse,
  },
  {
    id: "project-procurement",
    title: "Project Procurement",
    description: "Phased supply scheduled against a project programme.",
    icon: Repeat,
  },
];

export const servedIndustries: IconCardItem[] = [
  { id: "government", title: "Government Sector", icon: Building2 },
  { id: "semi-government", title: "Semi Government", icon: Landmark },
  { id: "army", title: "Pakistan Army", icon: ShieldCheck },
  { id: "navy", title: "Pakistan Navy", icon: Ship },
  { id: "air-force", title: "Pakistan Air Force", icon: Plane },
  { id: "healthcare", title: "Healthcare", icon: Hospital },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "corporate", title: "Corporate Offices", icon: Building },
  { id: "construction", title: "Construction", icon: HardHat },
  { id: "manufacturing", title: "Manufacturing", icon: Factory },
  { id: "oil-and-gas", title: "Oil & Gas", icon: Fuel },
  { id: "ngos", title: "NGOs", icon: HeartHandshake },
];

export const leadershipPrinciples: IconCardItem[] = [
  {
    id: "integrity",
    title: "Integrity",
    description: "We quote what we can deliver, and deliver what we quoted.",
    icon: ShieldCheck,
  },
  {
    id: "customer-first",
    title: "Customer First",
    description: "Your requirement sets the specification, not our stock list.",
    icon: UserCheck,
  },
  {
    id: "continuous-improvement",
    title: "Continuous Improvement",
    description: "Every completed order informs how we run the next one.",
    icon: Lightbulb,
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    description: "One process, followed the same way on every order.",
    icon: Headset,
  },
];
