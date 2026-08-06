import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";

export default function NotFound() {
  return (
    <Container
      size="narrow"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center"
    >
      <p className="text-body-sm text-accent font-semibold tracking-wide uppercase">
        404
      </p>
      <Heading level={1} size="h1">
        Page not found
      </Heading>
      <p className="text-body text-muted-foreground max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className={buttonVariants()}>
        Back to homepage
      </Link>
    </Container>
  );
}
