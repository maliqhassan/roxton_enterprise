import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { footerNavGroups } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface text-surface-foreground border-t">
      <Container>
        <div className="grid gap-12 py-[var(--spacing-section-y)] md:grid-cols-[2fr_repeat(3,1fr)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <p className="font-heading text-h6 text-primary font-semibold">
                {siteConfig.name}
              </p>
            </div>
            <p className="text-body-sm text-muted-foreground max-w-sm">
              {siteConfig.legalName}
            </p>
          </div>
          {footerNavGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-body-sm text-foreground font-semibold">{group.title}</p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-border text-body-sm text-muted-foreground flex flex-col items-start justify-between gap-4 border-t py-6 md:flex-row md:items-center">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-foreground transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-foreground transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
