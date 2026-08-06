import type { Metadata } from "next";

import { aboutPage } from "@/content/about/page";
import { AboutCta, AboutFaq } from "@/features/about/components/closing/about-closing";
import { CompanyIntro } from "@/features/about/components/company-intro/company-intro";
import {
  AboutExpertise,
  AboutIndustries,
  AboutWhyChoose,
} from "@/features/about/components/grids/about-grids";
import { AboutHero } from "@/features/about/components/hero/about-hero";
import { AboutLeadership } from "@/features/about/components/leadership/about-leadership";
import { MissionVision } from "@/features/about/components/mission-vision/mission-vision";
import { AboutProcess } from "@/features/about/components/process/about-process";
import { AboutStatistics } from "@/features/about/components/statistics/about-statistics";
import { AboutStory } from "@/features/about/components/story/about-story";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: aboutPage.hero.description,
  path: "/about",
});

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <AboutStory />
      <MissionVision />
      <AboutWhyChoose />
      <AboutExpertise />
      <AboutIndustries />
      <AboutProcess />
      <AboutStatistics />
      <AboutLeadership />
      <AboutFaq />
      <AboutCta />
    </>
  );
}
