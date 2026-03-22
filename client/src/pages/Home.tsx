/*
 * DESIGN: Dark Masculine Minimalism
 * Colors: Charcoal bg (#0D0D0D), Amber accent (#C9A84C), Off-white text (#F5F0E8)
 * Fonts: Cormorant Garamond (display) + DM Sans (body)
 * Layout: Asymmetric editorial, photography-forward, StoryBrand SB7 structure
 *
 * SB7 Page Flow:
 * 1. Hero — Character's desire (presence as a father)
 * 2. Problem — Villain (hustle culture), External/Internal/Philosophical problems
 * 3. Guide — Shaun's empathy + authority
 * 4. Plan — The 5-step value ladder
 * 5. Retreat — Core offer detail
 * 6. Podcast — Lead generation / trust builder
 * 7. Testimonials — Social proof / success stories
 * 8. Community — Free entry point
 * 9. Apply CTA — Direct + transitional CTA, avoid failure + success vision
 * 10. Footer
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import GuideSection from "@/components/GuideSection";
import PlanSection from "@/components/PlanSection";
import RetreatSection from "@/components/RetreatSection";
import PodcastSection from "@/components/PodcastSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.1_0.005_285)]">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <RetreatSection />
      <PodcastSection />
      <TestimonialsSection />
      <CommunitySection />
      <ApplySection />
      <Footer />
    </div>
  );
}
