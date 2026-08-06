import { Award, Boxes, Factory, Truck, Users, type LucideIcon } from "lucide-react";

export interface AboutStat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

/**
 * ⚠️ These figures are unverified. They came from the page brief, not from
 * anything the business has published, and two of them differ from the
 * homepage band — which states "Countries Served" where this says "Industries
 * Served". "25+ Trusted Suppliers" appears nowhere else on the site.
 *
 * Numbers on an About page are the ones a client is most likely to quote back
 * at you. Confirm all five before launch, and keep them consistent with the
 * homepage band in src/content/home/stats.ts.
 */
export const aboutStats: AboutStat[] = [
  { value: 100, suffix: "+", label: "Satisfied Clients", icon: Users },
  { value: 500, suffix: "+", label: "Projects Delivered", icon: Boxes },
  { value: 10, suffix: "+", label: "Industries Served", icon: Factory },
  { value: 25, suffix: "+", label: "Trusted Suppliers", icon: Truck },
  { value: 100, suffix: "%", label: "Commitment to Quality", icon: Award },
];
