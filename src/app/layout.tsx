import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";

import { OriginFill } from "@/components/motion/origin-fill";
import { PageTransition } from "@/components/motion/page-transition";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipNavLink } from "@/components/layout/skip-nav-link";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo/metadata";
import { OrganizationJsonLd } from "@/lib/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  ...buildMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, manrope.variable)}>
      <body>
        <OrganizationJsonLd />
        <SkipNavLink />
        <OriginFill />
        <SmoothScrollProvider>
          <ScrollProgress />
          <SiteHeader />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </SmoothScrollProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
