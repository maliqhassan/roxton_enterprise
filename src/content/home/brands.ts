export interface Brand {
  id: string;
  name: string;
  /**
   * Path to the brand's SVG mark, or omitted when no optimised mark is
   * available — BrandLogo falls back to a typographic wordmark, so a missing
   * asset degrades rather than leaving a gap in the marquee.
   */
  logo?: string;
  /** Reserved: cards are presentational today (see BrandsMarquee). */
  website?: string;
  category: string;
}

export const brandsContent = {
  eyebrow: "Brands We Deal In",
  title: "Trusted Global Brands",
  description:
    "We source and supply products from globally recognized manufacturers and trusted industry brands to meet our clients' procurement requirements.",
};

const logo = (id: string) => `/images/brands/${id}.svg`;

/**
 * Single source of truth for the marquee. Order sets the scroll order; the
 * marquee renders this list twice to make the loop seamless.
 */
export const brands: Brand[] = [
  { id: "intel", name: "Intel", logo: logo("intel"), category: "IT & Computing" },
  { id: "hp", name: "HP", logo: logo("hp"), category: "IT & Computing" },
  { id: "dell", name: "Dell", logo: logo("dell"), category: "IT & Computing" },
  { id: "lenovo", name: "Lenovo", logo: logo("lenovo"), category: "IT & Computing" },
  { id: "microsoft", name: "Microsoft", category: "Software" },
  { id: "cisco", name: "Cisco", logo: logo("cisco"), category: "Networking" },
  { id: "canon", name: "Canon", category: "Printing & Imaging" },
  { id: "epson", name: "Epson", logo: logo("epson"), category: "Printing & Imaging" },
  { id: "brother", name: "Brother", category: "Printing & Imaging" },
  { id: "samsung", name: "Samsung", logo: logo("samsung"), category: "Electronics" },
  { id: "lg", name: "LG", logo: logo("lg"), category: "Electronics" },
  {
    id: "schneider-electric",
    name: "Schneider Electric",
    logo: logo("schneider-electric"),
    category: "Electrical & Industrial",
  },
  { id: "3m", name: "3M", logo: logo("3m"), category: "Industrial & Safety" },
  { id: "bosch", name: "Bosch", logo: logo("bosch"), category: "Tools & Industrial" },
  { id: "makita", name: "Makita", category: "Tools & Industrial" },
  { id: "stanley", name: "Stanley", category: "Tools & Industrial" },
  { id: "honeywell", name: "Honeywell", category: "Industrial & Safety" },
  { id: "kaspersky", name: "Kaspersky", logo: logo("kaspersky"), category: "Software" },
  {
    id: "logitech",
    name: "Logitech",
    logo: logo("logitech"),
    category: "IT & Computing",
  },
  { id: "apc", name: "APC", category: "Electrical & Industrial" },
  { id: "kingston", name: "Kingston", logo: logo("kingston"), category: "Storage" },
  { id: "seagate", name: "Seagate", logo: logo("seagate"), category: "Storage" },
  {
    id: "western-digital",
    name: "Western Digital",
    logo: logo("western-digital"),
    category: "Storage",
  },
  { id: "tp-link", name: "TP-Link", logo: logo("tp-link"), category: "Networking" },
  { id: "d-link", name: "D-Link", category: "Networking" },
  { id: "ubiquiti", name: "Ubiquiti", logo: logo("ubiquiti"), category: "Networking" },
  { id: "asus", name: "ASUS", logo: logo("asus"), category: "IT & Computing" },
  { id: "acer", name: "Acer", logo: logo("acer"), category: "IT & Computing" },
  { id: "msi", name: "MSI", logo: logo("msi"), category: "IT & Computing" },
  { id: "benq", name: "BenQ", category: "Displays" },
  { id: "viewsonic", name: "ViewSonic", category: "Displays" },
  {
    id: "zebra",
    name: "Zebra Technologies",
    logo: logo("zebra"),
    category: "Printing & Imaging",
  },
  { id: "xerox", name: "Xerox", category: "Printing & Imaging" },
];
