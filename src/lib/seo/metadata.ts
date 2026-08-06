import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

/**
 * Shared metadata builder. Called with no args from the root layout (sets
 * the title template every nested route inherits); nested routes pass a
 * plain `title` string and Next applies that inherited template automatically.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataOptions = {}): Metadata {
  const resolvedDescription = description ?? siteConfig.legalName;
  const resolvedTitle = title ?? siteConfig.name;

  return {
    title: title
      ? title
      : { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description: resolvedDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}
