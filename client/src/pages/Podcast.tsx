import Navigation from "@/components/Navigation";
import PodcastSection from "@/components/PodcastSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Podcast() {
  return (
    <>
      <SEO
        title="The Unforgettable Podcast — Men's Performance, Fatherhood & Self-Mastery"
        description="Daily episodes from Shaun Tucker on men's performance, nervous system regulation, breathwork, fatherhood, and self-mastery. Available on Spotify, Apple Podcasts, and more."
        canonical="https://www.shauntucker.com.au/podcast"
      />
      <div className="min-h-screen bg-[#09091F]">
        <Navigation />
        <PodcastSection />
        <Footer />
      </div>
    </>
  );
}
