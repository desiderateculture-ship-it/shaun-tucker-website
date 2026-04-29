import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GuideSection from "@/components/GuideSection";
import ApplySection from "@/components/ApplySection";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shaun Tucker",
  "url": "https://www.shauntucker.com.au/about",
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

export default function About() {
  return (
    <>
      <SEO
        title="About Shaun Tucker — Human Performance Scientist & Breathwork Facilitator"
        description="Learn about Shaun Tucker, a Human Performance Scientist and Breathwork Facilitator dedicated to helping driven dads build a strong body, regulated nervous system, and unstoppable mind."
        canonical="https://www.shauntucker.com.au/about"
        jsonLd={[personJsonLd]}
      />
      <div className="min-h-screen bg-[#09091F]">
        <Navigation />
        <div className="pt-16">
          <GuideSection />
        </div>
        <ApplySection />
        <Footer />
      </div>
    </>
  );
}
