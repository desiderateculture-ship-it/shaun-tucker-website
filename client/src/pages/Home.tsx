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
import SEO from "@/components/SEO";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaun Tucker",
  url: "https://www.shauntucker.com.au",
  image: "https://www.shauntucker.com.au/hero-01.jpg",
  sameAs: [
    "https://www.instagram.com/shauntucker_",
    "https://www.facebook.com/shauntucker",
    "https://www.linkedin.com/in/shauntucker",
    "https://www.youtube.com/@shauntucker",
  ],
  jobTitle: "Men's Performance Coach & Breathwork Facilitator",
  description:
    "Human Performance Scientist, MMA Fighter, BSc Health Science, and Breathwork Facilitator helping driven dads build a strong body, regulated nervous system, and unstoppable mind.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shaun Tucker — The Unforgettable",
  url: "https://www.shauntucker.com.au",
  image: "https://www.shauntucker.com.au/hero-01.jpg",
  description:
    "Men's performance coaching, breathwork facilitation, and retreat experiences for driven dads in Melbourne, VIC. Helping men build a strong body, regulated nervous system, and unstoppable mind.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  areaServed: {
    "@type": "City",
    name: "Melbourne",
  },
  priceRange: "$$",
  email: "shaun@shauntucker.com.au",
};

export default function Home() {
  return (
    <>
      <SEO
        title="Shaun Tucker — The Unforgettable"
        description="Human Performance Scientist & Breathwork Facilitator helping driven dads in Melbourne build a strong body, regulated nervous system, and unstoppable mind. Men's retreats, group coaching, and breathwork sessions."
        canonical="https://www.shauntucker.com.au/"
        jsonLd={[personJsonLd, localBusinessJsonLd]}
      />
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
    </>
  );
}
