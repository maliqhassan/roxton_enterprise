import {
  Armchair,
  FlaskConical,
  Hammer,
  HardHat,
  Laptop,
  PackageSearch,
  PenTool,
  SprayCan,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface ProductCategory {
  /** Stable slug — React key and anchor target. */
  id: string;
  title: string;
  description: string;
  /** Representative lines within the category. */
  products: string[];
  icon: LucideIcon;
}

/**
 * The twelve supply categories.
 *
 * Cards are icon-led rather than image-led. The brief asked for a photograph
 * on each, but six of these categories (office supplies, electrical, cleaning,
 * construction, medical, hospitality) have no matching image in the project
 * library, and filling them by repeating warehouse shots would misrepresent
 * what each card is about. The four Featured sections below carry the
 * photography instead, where exact matches exist. Adding images here later is
 * a field on this interface plus six files.
 */
export const productCategories: ProductCategory[] = [
  {
    id: "it-equipment",
    title: "IT & Computer Equipment",
    description: "Professional technology solutions for modern workplaces.",
    products: [
      "Laptops",
      "Desktop PCs",
      "Servers",
      "Networking Equipment",
      "Printers",
      "Scanners",
      "UPS",
      "Monitors",
      "Accessories",
      "Software",
    ],
    icon: Laptop,
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    description: "Desks, seating and storage for offices, boardrooms and reception.",
    products: [
      "Executive Desks",
      "Workstations",
      "Office Chairs",
      "Conference Tables",
      "Reception Furniture",
      "Storage Cabinets",
      "Visitor Chairs",
      "Meeting Room Furniture",
    ],
    icon: Armchair,
  },
  {
    id: "office-supplies",
    title: "Office Supplies",
    description: "Everyday stationery and consumables that keep an office running.",
    products: [
      "Paper",
      "Stationery",
      "Files",
      "Pens",
      "Folders",
      "Printer Supplies",
      "Whiteboards",
      "Office Accessories",
    ],
    icon: PenTool,
  },
  {
    id: "industrial-equipment",
    title: "Industrial Equipment",
    description: "Mechanical components, rotating equipment and industrial tooling.",
    products: [
      "Industrial Tools",
      "Mechanical Components",
      "Bearings",
      "Valves",
      "Pumps",
      "Motors",
      "Industrial Hardware",
      "Fasteners",
    ],
    icon: Wrench,
  },
  {
    id: "electrical-supplies",
    title: "Electrical Supplies",
    description: "Cabling, switchgear, lighting and power distribution equipment.",
    products: [
      "Electrical Cables",
      "Switchgear",
      "Lighting",
      "Circuit Breakers",
      "Distribution Boards",
      "Industrial Panels",
      "Power Accessories",
    ],
    icon: Zap,
  },
  {
    id: "safety-equipment",
    title: "Safety Equipment",
    description: "Certified PPE and fire safety provision for site and plant.",
    products: [
      "Safety Helmets",
      "Safety Shoes",
      "Reflective Jackets",
      "Safety Gloves",
      "Face Shields",
      "Fire Extinguishers",
      "Emergency Equipment",
      "PPE Kits",
    ],
    icon: HardHat,
  },
  {
    id: "adhesives-chemicals",
    title: "Adhesives & Chemicals",
    description: "Bonding, sealing and construction chemistry for site and factory.",
    products: [
      "Industrial Adhesives",
      "Epoxy",
      "Sealants",
      "Construction Chemicals",
      "Silicone",
      "Bonding Solutions",
      "Industrial Lubricants",
    ],
    icon: FlaskConical,
  },
  {
    id: "cleaning-hygiene",
    title: "Cleaning & Hygiene",
    description: "Janitorial supplies and equipment for day-to-day facility upkeep.",
    products: [
      "Cleaning Chemicals",
      "Janitorial Supplies",
      "Sanitizers",
      "Waste Bins",
      "Paper Products",
      "Cleaning Equipment",
    ],
    icon: SprayCan,
  },
  {
    id: "construction-materials",
    title: "Construction Materials",
    description: "Steel, hardware and building materials for project sites.",
    products: [
      "Steel",
      "Hardware",
      "Paint",
      "Cement Accessories",
      "Building Materials",
      "Waterproofing Materials",
    ],
    icon: Hammer,
  },
  {
    id: "medical-supplies",
    title: "Medical Supplies",
    description: "Consumables, hospital furniture and diagnostic equipment.",
    products: [
      "Medical Consumables",
      "Hospital Furniture",
      "Diagnostic Equipment",
      "PPE",
      "Medical Devices",
    ],
    icon: Stethoscope,
  },
  {
    id: "hospitality-supplies",
    title: "Hospitality Supplies",
    description: "Commercial kitchen, dining and pantry equipment.",
    products: [
      "Kitchen Equipment",
      "Dining Furniture",
      "Crockery",
      "Cutlery",
      "Pantry Equipment",
      "Commercial Appliances",
    ],
    icon: UtensilsCrossed,
  },
  {
    id: "custom-procurement",
    title: "Custom Procurement",
    description:
      "Can't find what you're looking for? Our procurement team can source products according to your exact technical specifications and project requirements.",
    products: [
      "Specification Matching",
      "Technical Sourcing",
      "Project Requirements",
      "Bespoke Fabrication",
      "Import Sourcing",
    ],
    icon: PackageSearch,
  },
];
