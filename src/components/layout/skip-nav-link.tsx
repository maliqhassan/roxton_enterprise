export function SkipNavLink() {
  return (
    <a
      href="#main-content"
      className="focus:bg-primary focus:text-primary-foreground focus-visible:ring-ring sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[var(--z-tooltip)] focus:rounded-md focus:px-4 focus:py-2 focus:no-underline focus-visible:ring-2 focus-visible:outline-none"
    >
      Skip to main content
    </a>
  );
}
