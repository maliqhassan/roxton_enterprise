export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

// Mirrors the domains approved under src/features/. Routes don't exist under
// src/app/ yet (aside from the homepage), so these resolve to the shell's
// not-found page until each domain's pages are built.
// Order and labels are exactly as specified for the header; the array order is
// the render order, so this list is the single place either one changes.
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/services" },
  { label: "Product", href: "/products" },
  { label: "Our Team", href: "/team" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

/**
 * Routes whose first section is a full-bleed hero the header floats over, so
 * the header starts transparent with light content there and only takes on a
 * solid background once scrolled. Every other route keeps the solid header.
 */
export const overlayHeaderRoutes: string[] = ["/"];

export const footerNavGroups: NavGroup[] = [
  {
    title: "Quick Links",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Our Services",
    items: [
      { label: "Procurement Services", href: "/services" },
      { label: "Logistics & Supply Chain", href: "/services" },
      { label: "General Order Supply", href: "/services" },
      { label: "Commercial Trading", href: "/services" },
      { label: "Facility Support Services", href: "/services" },
    ],
  },
  {
    title: "Get in Touch",
    items: [{ label: "Contact Us", href: "/contact" }],
  },
];
