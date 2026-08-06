import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      // origin-fill is applied per variant, not on the base: it needs a fill
      // to flood and a label colour to invert to. Each variant floods with the
      // colour it is *not*, so the button reads as inverting. ghost and link
      // are excluded — a circle sweeping across bare text is noise, and both
      // rely on their own subtle hover states.
      //
      // The hover:bg-* rules the filled variants used to carry are gone: the
      // circle covers the background entirely, so a simultaneous background
      // shift was invisible under it and only muddied the first frames.
      variant: {
        default:
          "origin-fill [--fill-color:var(--accent)] bg-primary text-primary-foreground hover:text-primary",
        outline:
          "origin-fill [--fill-color:var(--primary)] border-border bg-background hover:text-primary-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30",
        secondary:
          "origin-fill [--fill-color:var(--primary)] bg-secondary text-secondary-foreground hover:text-primary-foreground aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "origin-fill [--fill-color:var(--destructive)] bg-destructive/10 text-destructive hover:text-white focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        accent:
          "origin-fill [--fill-color:var(--primary)] bg-accent text-primary hover:text-primary-foreground",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * "Request a Quote" is the site's primary conversion CTA. It hollows out on
 * hover — the gold drops away to leave a solid white outline over whatever is
 * behind it — rather than taking the accent variant's navy flood.
 *
 * --fill-color is transparent rather than the origin-fill class being removed:
 * the class comes from the variant and cannot be unset from a className, so
 * the circle still expands, invisibly. The border only appears on hover, and
 * the base already carries a transparent one, so tinting it adds no width and
 * cannot shift layout.
 *
 * This lives here, not beside either instance, because the header and the hero
 * both use it: exporting it from the hero would make a global layout component
 * import from features/home, and duplicating the string would let the two
 * copies of the same action drift apart.
 */
const quoteCtaClass =
  "[--fill-color:transparent] hover:border-primary-foreground hover:bg-transparent hover:text-primary-foreground";

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, quoteCtaClass };
