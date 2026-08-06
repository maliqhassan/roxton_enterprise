"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-body-sm text-foreground/80 hover:text-foreground aria-[current=page]:text-primary relative font-medium transition-colors",
        // Gold rule under the current page. Always rendered and scaled to zero
        // so it wipes in on transform alone, and so its space is reserved
        // whether or not it is showing — animating width or toggling the
        // element in would nudge the row as you navigate.
        "after:bg-accent after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-[var(--duration-base)] after:ease-[var(--ease-standard)]",
        "aria-[current=page]:after:scale-x-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
