import { Mail, MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import {
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";
import { siteConfig } from "@/config/site";

const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon,
} as const;

export function TopContactBar() {
  // No bottom border: it divided this bar from a white header, but the header
  // is now transparent over the hero or navy glass when scrolled, so the rule
  // only reads as a seam. Its 1px also pushed the bar past --height-topbar,
  // which the hero subtracts to fit exactly one screen.
  return (
    <div className="bg-primary text-primary-foreground">
      <Container>
        <div className="text-body-sm flex h-[var(--height-topbar)] items-center justify-between gap-6">
          <div className="flex min-w-0 items-center gap-6">
            <span className="hidden items-center gap-1.5 truncate sm:flex">
              <MapPin aria-hidden="true" className="text-accent size-3.5 shrink-0" />
              {siteConfig.contact.address}
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-accent flex shrink-0 items-center gap-1.5 transition-colors"
            >
              <Mail aria-hidden="true" className="text-accent size-3.5" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            {siteConfig.social.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  // Colour sits on the link, not the glyph, so the hover state
                  // can still override it — the icons fill with currentColor.
                  className="text-accent hover:text-primary-foreground transition-colors"
                >
                  <Icon className="size-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
