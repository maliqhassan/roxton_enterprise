import { Award, Globe, Package, Users, type LucideIcon } from "lucide-react";

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export const statsContent = {
  /** Not rendered visibly — names the band for assistive tech. */
  title: "Roxton by the Numbers",
};

export const stats: StatItem[] = [
  { value: 100, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 500, suffix: "+", label: "Projects Delivered", icon: Package },
  { value: 10, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 100, suffix: "%", label: "Commitment", icon: Award },
];
