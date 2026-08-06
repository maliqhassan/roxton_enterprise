import type { Metadata } from "next";

import { leadershipPage } from "@/content/leadership/leadership";
import { ChairmanMessage } from "@/features/leadership/components/chairman/chairman-message";
import { BoardOfDirectors } from "@/features/leadership/components/directors/board-of-directors";
import {
  LeadershipCta,
  LeadershipHero,
  LeadershipIntro,
  LeadershipPrinciples,
  WhyLeadership,
} from "@/features/leadership/components/sections/leadership-sections";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Leadership",
  description: leadershipPage.hero.description,
  path: "/leadership",
});

export default function LeadershipPageRoute() {
  return (
    <>
      <LeadershipHero />
      <LeadershipIntro />
      <ChairmanMessage />
      <BoardOfDirectors />
      <LeadershipPrinciples />
      <WhyLeadership />
      <LeadershipCta />
    </>
  );
}
