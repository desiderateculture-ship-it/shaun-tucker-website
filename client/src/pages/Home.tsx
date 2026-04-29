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
  "name": "Shaun Tucker",
  "url": "https://www.shauntucker.com.au",
  "image": "https://www.shauntucker.com.au/hero-01.jpg",
  "sameAs": [
    "https://www.instagram.com/theshauntucker/",
    "https://www.facebook.com/theshauntucker/",
    "https://www.linkedin.com/in/theshauntucker/",
    "https://youtube.com/@theshauntucker?si=fyot3c6x0oLkTprh",
    "https://podcasts.apple.com/au/podcast/the-reset-with-shaun-tucker-the-founder-dads/id1852353417",
    "https://shauntucker.com.au/podcast",
    "https://reneegiarrusso.com/the-importance-of-connection-spirituality-to-becoming-a-healthy-ceo-of-your-life/",
    "https://unnecessaryharm.com.au/audio/substance-use-and-other-saboteurs-of-resilience-a-conversation-with-shaun-tucker",
    "https://www.boardcoachinginstitute.com.au/ep006-master-your-health-to-win-with-shaun-tucker/",
    "https://worldresiliencyday.com.au/team/shaun-tucker/"
  ],
  "jobTitle": "Men's Performance Coach & Breathwork Facilitator",
  "description": "Human Performance Scientist, MMA Fighter, BSc Health Science from Swinburne University, and Breathwork Facilitator helping driven dads build a strong body, regulated nervous system, and unstoppable mind.",
  "affiliation": [
    {
      "@type": "Organization",
      "name": "Dalgarno Institute"
    },
    {
      "@type": "Organization",
      "name": "World Resiliency Day"
    }
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Swinburne University of Technology"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  }
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
