import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CheckCircle, Coffee, Dumbbell, Home, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

const COMMUNITY_HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663465823708/cCXnfZpEXLUBuEkq.jpg";
const COMMUNITY_HERO_VIDEO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663465823708/txgMeLIbTKgwYlpT.mp4";

const howItWorks = [
  {
    number: "01",
    title: "Arrive at Wellington Reserve",
    description: "Show up 5–10 minutes before 6:00am at Wellington Reserve Playground carpark, 36–42 Mackie Road, Mulgrave. Parking is easy — no fuss.",
    icon: <Home size={24} className="text-indigo-400" />,
  },
  {
    number: "02",
    title: "Train 6:00–6:45am",
    description: "Outdoor group session — scalable for all fitness levels. Strength, movement, conditioning. No egos, no yelling. Just good blokes doing the work.",
    icon: <Dumbbell size={24} className="text-indigo-400" />,
  },
  {
    number: "03",
    title: "Coffee at 7:00am",
    description: "Walk over to Mackie Road Cafe for a relaxed chat until around 7:30am. Talk life, business, fatherhood, or just enjoy the quiet company.",
    icon: <Coffee size={24} className="text-indigo-400" />,
  },
  {
    number: "04",
    title: "Home & Present before 8:00am",
    description: "More energised, clear-headed, and ready to be the dad your family deserves — before most of the world is even awake.",
    icon: <CheckCircle size={24} className="text-indigo-400" />,
  },
];

const painPoints = [
  "You want to drop weight and rebuild consistency. No crash diets, no 5-day splits you can't stick to. Just one solid Sunday session to anchor your week.",
  "You feel stretched thin between business and family. Running a business is hard. Being a dad is harder. Doing both without losing yourself is the real challenge.",
  "You want more energy and better sleep. You're tired of being tired. A consistent training anchor changes everything — energy, mood, and quality of sleep.",
  "You're done feeling 'half there' with your kids. You love your family. You just need to feel like yourself again so you can show up fully present.",
];

const testimonials = [
  {
    quote: "I love the 'just do it' attitude of the club. This morning I woke up having my cup of tea and thought, 'I'm not going to go today.' But I came, and I feel so much better. It's a great start to the week.",
    name: "Connor from Oakleigh",
  },
  {
    quote: "Good exercises, good routine - it was a great session. Yeah, waking up at 6am on a Sunday morning is a bit hard, but once you're here, it's worth it. Good bunch of blokes, good chat, good coffee.",
    name: "Dean from Glen Waverley",
  },
  {
    quote: "It was a bit of a struggle to get up in the morning - my daughter woke up and had a bit of a fever. But I pushed through, and I'm glad I did. It's a great way to start the day, and I feel ready for the week ahead.",
    name: "Lee from Endeavour Hills",
  },
];

export default function Community() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#09091F" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ background: "#09091F" }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${COMMUNITY_HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}>
                EVERY SUNDAY · 6:00AM · MULGRAVE
              </p>
              <h1
                className="font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                Free 6am Sunday Workouts for Dads in
                <br />
                <span style={{ color: "#F59E0B" }}>South East Melbourne</span>
              </h1>
              <p className="mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "1.15rem", maxWidth: "50ch" }}
              >
                Get fitter, clear your head, and show up as a more present dad — then grab coffee with other dads who actually get it.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://chat.whatsapp.com/LUBiaJvKTEc26n9cdwW2cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3.5 px-8 text-base"
                >
                  Join the WhatsApp crew →
                </a>
              </div>
              <p className="mt-4 text-sm" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>
                Reminders and location pin inside the group.
              </p>
            </div>

            {/* Video Player */}
            <div className="relative mx-auto lg:ml-auto lg:mr-0 max-w-[320px] w-full group">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10"
                style={{ aspectRatio: "9/16" }}
              >
                <video
                  ref={videoRef}
                  src={COMMUNITY_HERO_VIDEO}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Mute/Unmute Toggle */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 transition-all duration-300"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                {/* Video Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-indigo-500/30 rounded-tr-2xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-amber-500/30 rounded-bl-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How Sunday Mornings Work */}
      <section className="py-24 md:py-32" style={{ background: "#0A0A20" }}>
        <div className="container max-w-4xl">
          <span className="section-tag mb-6 inline-flex">
            <span style={{ color: "#6366F1" }}>✦</span>
            How It Works
          </span>
          <h2
            className="text-white font-bold leading-tight mb-12 text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Simple, no-fuss, and home before the family is even awake.
            <br />
            Here's <span style={{ color: "#818CF8" }}>what a typical Sunday looks like.</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.number} className="text-center p-6 rounded-xl"
                style={{ background: "rgba(15,15,42,0.7)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full"
                  style={{ background: "rgba(99,102,241,0.1)" }}
                >
                  {step.icon}
                </div>
                <h3 className="font-bold mb-2 text-white"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Blokes Like You */}
      <section className="py-24 md:py-32" style={{ background: "#09091F" }}>
        <div className="container max-w-4xl">
          <span className="section-tag mb-6 inline-flex">
            <span style={{ color: "#6366F1" }}>✦</span>
            Who Shows Up
          </span>
          <h2
            className="text-white font-bold leading-tight mb-12 text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            This is built for blokes like you.
            <br />
            <span style={{ color: "#F59E0B" }}>No excuses. Just results.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="p-6 rounded-xl"
                style={{ background: "rgba(15,15,42,0.7)", border: "1px solid rgba(245,158,11,0.2)" }}
              >
                <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "#CBD5E1" }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Forever Free */}
      <section className="py-24 md:py-32 text-center" style={{ background: "#0A0A20" }}>
        <div className="container max-w-3xl">
          <span className="section-tag mb-6 inline-flex">
            <span style={{ color: "#6366F1" }}>✦</span>
            Our Philosophy
          </span>
          <h2
            className="text-white font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Always free.
            <br />
            <span style={{ color: "#818CF8" }}>No asterisk.</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", maxWidth: "70ch", margin: "0 auto" }}>
            These workouts will always be free. Full stop. This is a community, not a sales funnel. There's no sales pitch at the park. The session is sacred. If you ever want deeper support, I offer coaching separately — but on Sundays, it's just about showing up.
          </p>
        </div>
      </section>

      {/* What Dads Are Saying */}
      <section className="py-24 md:py-32" style={{ background: "#09091F" }}>
        <div className="container max-w-4xl">
          <span className="section-tag mb-6 inline-flex">
            <span style={{ color: "#6366F1" }}>✦</span>
            Testimonials
          </span>
          <h2
            className="text-white font-bold leading-tight mb-12 text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            What dads are saying.
            <br />
            <span style={{ color: "#F59E0B" }}>Real words. Real impact.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-7 rounded-xl"
                style={{ background: "rgba(15,15,42,0.7)", border: "1px solid rgba(245,158,11,0.2)" }}
              >
                <p className="text-lg italic mb-4" style={{ fontFamily: "var(--font-body)", color: "#CBD5E1" }}>
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold" style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}>
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 text-center" style={{ background: "#0A0A20" }}>
        <div className="container max-w-3xl">
          <h2
            className="text-white font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Start Your Sunday as the Dad You Want to Be.
            <br />
            <span style={{ color: "#F59E0B" }}>Join the crew.</span>
          </h2>
          <a
            href="https://chat.whatsapp.com/LUBiaJvKTEc26n9cdwW2cb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-8 text-base"
          >
            Join the WhatsApp crew →
          </a>
          <p className="mt-4 text-sm" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>
            You don't need to be fit enough to start. **Starting is how you get fit.** It's free, it's local, and there's a crew of founder-dads who'll be glad you showed up. All you have to do is join the group and turn up this Sunday.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
