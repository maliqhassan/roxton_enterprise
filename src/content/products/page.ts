import {
  Award,
  Building,
  Building2,
  BriefcaseBusiness,
  Cog,
  DollarSign,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  Headset,
  HeartHandshake,
  Hospital,
  Landmark,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface IconItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface DescribedIconItem extends IconItem {
  description: string;
}

export interface CapabilityStep {
  step: number;
  title: string;
  description: string;
}

export const productsPage = {
  hero: {
    eyebrow: "Our Products",
    title: "Reliable Products for Every Industry",
    description:
      "Roxton Enterprises supplies high-quality products for government organizations, private companies, industrial facilities, educational institutions and commercial businesses across Pakistan. From IT equipment and office furniture to industrial materials and safety products, we provide dependable sourcing backed by trusted suppliers.",
    primaryCta: { label: "Explore Categories", href: "#product-categories" },
    secondaryCta: { label: "Request a Quote", href: "/contact" },
    image: {
      src: "/images/products/general-order-supply.jpg",
      alt: "Palletised stock filling the racking of a supply warehouse",
    },
  },
  categories: {
    eyebrow: "Product Categories",
    title: "Everything Your Business Needs",
    description:
      "Browse our major product categories supplied through trusted local and international manufacturers.",
  },
  featured: {
    eyebrow: "Featured Categories",
    title: "How We Source and Supply",
    description:
      "A closer look at four of our most requested categories, and what happens between your requirement and the delivery.",
  },
  capabilities: {
    eyebrow: "Supply Capabilities",
    title: "From Requirement to Delivery",
    description:
      "Every order follows the same route, so you always know which stage yours is at.",
  },
  brands: {
    eyebrow: "Brands We Deal In",
    title: "Trusted Global Manufacturers",
    description:
      "We source and supply from globally recognized manufacturers across IT, electrical, industrial and office categories.",
  },
  industries: {
    eyebrow: "Industries We Supply",
    title: "Supplying Every Sector",
    description:
      "The organizations we supply differ widely in how they buy — our procurement adapts to each.",
  },
  whySource: {
    eyebrow: "Why Source Through Roxton",
    title: "One Partner, One Point of Accountability",
    description:
      "What you get by consolidating procurement with us instead of managing a spread of separate vendors.",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Questions, Answered",
    description:
      "The things organizations most often ask before sending us their first product requirement.",
  },
  cta: {
    eyebrow: "Ready When You Are",
    title: "Looking for a Reliable Product Supply Partner?",
    description:
      "Whether you require office equipment, industrial materials, IT products, safety gear or specialized procurement, Roxton Enterprises is ready to source and deliver dependable solutions tailored to your business.",
    primaryCta: { label: "Request a Quote", href: "/contact" },
    // Not a tel: link — siteConfig.contact.phone is still the placeholder
    // +92 000 0000000. Swap once the real number is assigned.
    secondaryCta: { label: "Contact Our Team", href: "/contact" },
    trustBadges: [
      "Verified Suppliers",
      "Quality Products",
      "Nationwide Delivery",
      "Fast Response",
    ],
  },
};

/** The eight-stage supply workflow, in order. */
export const capabilitySteps: CapabilityStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "We map the specification, quantity, destination and timeline before anything is sourced.",
  },
  {
    step: 2,
    title: "Supplier Identification",
    description:
      "Local and international suppliers capable of meeting that specification are shortlisted.",
  },
  {
    step: 3,
    title: "Quotation",
    description:
      "You receive a costed quotation, line by line, with the expected lead time stated.",
  },
  {
    step: 4,
    title: "Quality Inspection",
    description:
      "Samples and supplier quality are verified against the specification before the order is committed.",
  },
  {
    step: 5,
    title: "Procurement",
    description:
      "Orders are placed and tracked against the agreed price, specification and delivery date.",
  },
  {
    step: 6,
    title: "Logistics",
    description:
      "Freight, customs coordination and transport are arranged from the supplier onward.",
  },
  {
    step: 7,
    title: "Delivery",
    description:
      "Goods arrive at your site, consolidated where an order spans several suppliers.",
  },
  {
    step: 8,
    title: "After Sales Support",
    description:
      "We stay available for replacements, documentation and repeat orders after delivery.",
  },
];

export const suppliedIndustries: DescribedIconItem[] = [
  {
    id: "government",
    title: "Government",
    description: "Ministries, departments and public institutions.",
    icon: Building2,
  },
  {
    id: "semi-government",
    title: "Semi Government",
    description: "Authorities, corporations and autonomous bodies.",
    icon: Landmark,
  },
  {
    id: "defense",
    title: "Defense Organizations",
    description: "Army, Navy, Air Force and security institutions.",
    icon: ShieldCheck,
  },
  {
    id: "private-sector",
    title: "Private Sector",
    description: "SMEs, multinationals and commercial enterprises.",
    icon: BriefcaseBusiness,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Hospitals, laboratories and medical facilities.",
    icon: Hospital,
  },
  {
    id: "education",
    title: "Education",
    description: "Universities, colleges and research institutions.",
    icon: GraduationCap,
  },
  {
    id: "construction",
    title: "Construction",
    description: "Contractors, EPC firms and infrastructure projects.",
    icon: HardHat,
  },
  {
    id: "oil-and-gas",
    title: "Oil & Gas",
    description: "Exploration, refining and energy operations.",
    icon: Fuel,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Production lines, plants and processing facilities.",
    icon: Factory,
  },
  {
    id: "ngos",
    title: "NGOs",
    description: "Development organizations and relief programmes.",
    icon: HeartHandshake,
  },
  {
    id: "corporate-offices",
    title: "Corporate Offices",
    description: "Head offices, branches and shared workspaces.",
    icon: Building,
  },
  {
    id: "industrial-plants",
    title: "Industrial Plants",
    description: "Heavy industry, utilities and process facilities.",
    icon: Cog,
  },
];

export const whySourceFeatures: DescribedIconItem[] = [
  {
    id: "verified-suppliers",
    title: "Verified Supplier Network",
    description: "Suppliers are evaluated before they are ever put forward to you.",
    icon: ShieldCheck,
  },
  {
    id: "quality-assured",
    title: "Quality Assured Products",
    description: "Goods are checked against your specification before despatch.",
    icon: Award,
  },
  {
    id: "competitive-pricing",
    title: "Competitive Pricing",
    description: "Costed quotations you approve before any order is placed.",
    icon: DollarSign,
  },
  {
    id: "nationwide-delivery",
    title: "Fast Nationwide Delivery",
    description: "Freight and last mile delivery coordinated across Pakistan.",
    icon: Truck,
  },
  {
    id: "customized-procurement",
    title: "Customized Procurement",
    description: "Sourcing to your exact technical specification, not a fixed catalogue.",
    icon: SlidersHorizontal,
  },
  {
    id: "dedicated-support",
    title: "Dedicated Customer Support",
    description: "A team that stays reachable after delivery, not only before it.",
    icon: Headset,
  },
];
