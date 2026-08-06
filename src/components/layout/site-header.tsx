"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { StickyHeader } from "@/components/layout/sticky-header";
import { TopContactBar } from "@/components/layout/top-contact-bar";
import { Container } from "@/components/shared/container";
import { buttonVariants, quoteCtaClass } from "@/components/ui/button";
import { overlayHeaderRoutes, primaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  // The contact bar is the sentinel: it sits directly above the header, so
  // while any of it is on screen the header is still within a few dozen pixels
  // of the top — i.e. over the hero. Once it has gone, the header is stuck to
  // the viewport and overlapping page content, and needs its own background.
  const { ref: topBarRef, past: scrolled } = useScrolledPast<HTMLDivElement>();

  // Transparent only while resting at the top of a hero route — leaving the
  // top swaps it for the frosted navy glass.
  const overlay = !scrolled && overlayHeaderRoutes.includes(pathname);

  // The overlay is now the only dark state: once stuck, the bar is solid
  // white, so scrolling must flip the nav content back to dark text rather
  // than keeping it light as it did under the glass.
  const onDark = overlay;

  return (
    <>
      <div ref={topBarRef}>
        <TopContactBar />
      </div>
      <StickyHeader overlay={overlay} scrolled={scrolled}>
        <Container className="h-full">
          <div className="flex h-full items-center justify-between">
            <Link href="/" className="flex shrink-0 items-center">
              {/* Logo stands alone as the wordmark, so alt carries the name. */}
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={64}
                height={64}
                priority
                className="size-16"
              />
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <nav aria-label="Primary" className="flex items-center gap-8">
                {primaryNav.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    className={cn(
                      onDark &&
                        "text-primary-foreground/85 hover:text-primary-foreground aria-[current=page]:text-accent",
                    )}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "accent" }),
                  quoteCtaClass,
                  "text-primary-foreground h-9 px-5",
                  // The button keeps its gold, but hollowing out to a white
                  // outline only works over the dark hero. Against the solid
                  // white bar it would vanish entirely, so the outline and
                  // label flip to navy there.
                  !onDark && "hover:border-primary hover:text-primary",
                )}
              >
                Request a Quote
              </Link>
            </div>
            <MobileNav onDark={onDark} />
          </div>
        </Container>
      </StickyHeader>
    </>
  );
}
