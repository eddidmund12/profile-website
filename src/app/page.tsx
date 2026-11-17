import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { SkillsSection } from "@/components/SkillsSection";
import { WritingSection } from "@/components/WritingSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <SkillsSection />
      <JourneyTimeline />
      <WritingSection />
      <ContactSection />
    </>
  );
}
