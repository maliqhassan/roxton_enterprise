"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container
      size="narrow"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center"
    >
      <Heading level={1} size="h1">
        Something went wrong
      </Heading>
      <p className="text-body text-muted-foreground max-w-md">
        An unexpected error occurred. Please try again, or return to the homepage.
      </p>
      <div className="flex gap-3">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back to homepage
        </Link>
        <Button onClick={reset}>Try again</Button>
      </div>
    </Container>
  );
}
