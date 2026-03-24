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
 * 6. Testimonials — Social proof / success stories
 * 7. Community — Free entry point
 * 8. Apply CTA — Direct + transitional CTA, avoid failure + success vision
 * 9. Footer
 */

import Navigation from "@/components/Navigation";
import KnightEvolution from "@/components/KnightEvolution";
import ProblemSection from "@/components/ProblemSection";
import TriangleModel from "@/components/TriangleModel";
import GuideSection from "@/components/GuideSection";
import PlanSection from "@/components/PlanSection";
import RetreatSection from "@/components/RetreatSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";
import FloatingVideoWidget from "@/components/FloatingVideoWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09091F]">
      <Navigation />
      <KnightEvolution />
      <ProblemSection />
      <TriangleModel />
      <GuideSection />
      <PlanSection />
      <RetreatSection />
      <TestimonialsSection />
      <CommunitySection />
      <ApplySection />
      <Footer />
      <FloatingVideoWidget />
    </div>
  );
}
