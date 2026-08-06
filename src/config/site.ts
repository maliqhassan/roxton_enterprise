export interface SiteContact {
  email: string;
  phone: string;
  address: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  siteUrl: string;
  contact: SiteContact;
  social: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Roxton Enterprises",
  legalName: "Roxton Enterprises (Pvt) Ltd.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    email: "roxtonenterprises@outlook.com",
    // TODO: replace with the real phone number once assigned
    phone: "+92 000 0000000",
    address: "Office #302, Civic Center, Bahria Town, Phase 4, Islamabad, Pakistan",
  },
  // TODO: replace href "#" with real profile URLs once available
  social: [
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
