import { Heading } from "@/components/shared/heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** id the owning Section's aria-labelledby should point at. */
  headingId: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use "inverted" on bg-primary sections so description text stays readable. */
  tone?: "default" | "inverted";
  className?: string;
}

export function SectionHeading({
  headingId,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-body-sm text-accent mb-3 font-semibold tracking-wide uppercase">
          {eyebrow}
        </p>
      )}
      <Heading id={headingId} level={2} size="h2">
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "text-body-lg mt-4",
            tone === "inverted" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
