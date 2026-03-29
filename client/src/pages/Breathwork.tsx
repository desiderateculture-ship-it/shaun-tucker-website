import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { CheckCircle, Wind, Brain, Heart, Sparkles, MapPin, Calendar, Clock, Info } from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/14AfZhaTv5I6aeK2kE18c01";
const FACILITATOR_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663465823708/wZOYNMaxlEsvVphU.JPG";
const STUDIO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663465823708/QQWqTFnlaXVJkZdP.jpeg";

const painPoints = [
  {
    title: "The Mental Fog",
    description: "Your mind is constantly busy, yet nothing feels clear. You make lists, you plan, you research — and still the path forward stays blurry.",
  },
  {
    title: "The Burnout",
    description: "You wake up tired. You push through the day. You fall asleep already dreading tomorrow. Rest doesn't feel restful anymore.",
  },
  {
    title: "The Loop",
    description: "You've tried coaching, journaling, meditation, podcasts. Each one helped — briefly. But the clarity never quite stuck, and here you are again.",
  },
];

const outcomes = [
  {
    title: "Mental Clarity",
    description: "The mental clutter lifts. Decisions that felt impossible suddenly have a clear direction. Your priorities click into focus.",
    icon: <Brain size={24} className="text-cyan-400" />,
  },
  {
    title: "Deep Calm",
    description: "Your nervous system finally gets to exhale. That chronic tension in your shoulders, chest, and jaw begins to soften and release.",
    icon: <Wind size={24} className="text-cyan-400" />,
  },
  {
    title: "Inner Direction",
    description: "You reconnect with your own instincts. Not someone else's advice — your own quiet knowing about what your next step really is.",
    icon: <Sparkles size={24} className="text-cyan-400" />,
  },
  {
    title: "Feeling Like You Again",
    description: "That version of you who feels grounded, hopeful, and capable? They're still in there. This session helps you find your way back.",
    icon: <Heart size={24} className="text-cyan-400" />,
  },
];

const schedule = [
  { time: "1:45 PM", activity: "Doors open & arrive" },
  { time: "2:00 PM", activity: "Welcome, settle, gentle opening" },
  { time: "2:15 PM", activity: "45-minute guided breathing with music" },
  { time: "3:15 PM", activity: "Journaling, integration & take-home tool" },
  { time: "4:00 PM", activity: "Close & leave lighter" },
];

export default function Breathwork() {
  return (
    <>
      <SEO
        title="Breathwork Sessions Melbourne — Nervous System Reset with Shaun Tucker"
        description="Join Shaun Tucker's guided breathwork sessions in Melbourne. In 2 hours, experience more clarity, calm, and presence than years of conventional training. Book your spot from $100."
        canonical="https://www.shauntucker.com.au/breathwork"
      />
    <div className="min-h-screen flex flex-col" style={{ background: "#09091F" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ background: "#09091F" }}>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-body)", color: "#22D3EE" }}>
              ONE AFTERNOON · REAL CLARITY
            </p>
            <h1
              className="font-bold leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
              }}
            >
              You Already Know the Answer.
              <br />
              <span style={{ color: "#06B6D4" }}>Breathwork Helps You Hear It.</span>
            </h1>
            <p className="mb-10 leading-relaxed mx-auto"
              style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "1.25rem", maxWidth: "60ch" }}
            >
              A guided, in-person breathwork journey for adults who are tired of feeling stuck, overwhelmed, or unsure about what comes next — and ready to feel like themselves again.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-4 px-10 text-lg"
                style={{ background: "#06B6D4", color: "#000" }}
              >
                Reserve Your Spot →
              </a>
            </div>
            <p className="mt-6 text-sm italic" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>
              Open to both Men and Women. No experience required.
            </p>
          </div>
        </div>
      </section>

      {/* Does Any of This Sound Familiar? */}
      <section className="py-24 md:py-32" style={{ background: "#0A0A20" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="section-tag mb-6 inline-flex">
              <span style={{ color: "#06B6D4" }}>✦</span>
              You're Not Alone
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
              Does Any of This Sound Familiar?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "1.1rem" }}>
              You're not lazy. You're not lost. You're exhausted from carrying too much — and doing everything "right" without feeling any better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="p-8 rounded-xl"
                style={{ background: "rgba(15,15,42,0.7)", border: "1px solid rgba(6,182,212,0.2)" }}
              >
                <h3 className="font-bold mb-4 text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}>
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <blockquote className="italic text-2xl" style={{ fontFamily: "var(--font-display)", color: "#CBD5E1" }}>
              "I knew something had to change. I just couldn't figure out what — or where to even start."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why Breathwork? */}
      <section className="py-24 md:py-32" style={{ background: "#09091F" }}>
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag mb-6 inline-flex">
                <span style={{ color: "#06B6D4" }}>✦</span>
                The Method
              </span>
              <h2
                className="text-white font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Why Breathwork — <br /><span style={{ color: "#06B6D4" }}>and Why Now?</span>
              </h2>
              <p className="mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#CBD5E1" }}>
                Breathwork works directly with your body's nervous system. Unlike talk-based approaches, it bypasses the analytical mind and reaches the part of you that holds tension, fear, and stuck patterns.
              </p>
              <p className="mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#CBD5E1" }}>
                In a single session, most people feel a profound shift — lighter, clearer, and more connected to themselves than they have in months.
              </p>
              <div className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
                <p className="font-semibold text-cyan-400" style={{ fontFamily: "var(--font-body)" }}>
                  This isn't about fixing yourself. It's about remembering who you already are.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
                    {outcome.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}>{outcome.title}</h4>
                    <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Facilitator */}
      <section className="py-24 md:py-32" style={{ background: "#09091F" }}>
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={FACILITATOR_IMG} 
                  alt="Shaun Tucker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl -z-10 blur-2xl"></div>
            </div>
            <div>
              <span className="section-tag mb-6 inline-flex">
                <span style={{ color: "#06B6D4" }}>✦</span>
                Meet Your Facilitator
              </span>
              <h2
                className="text-white font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Shaun Tucker
              </h2>
              <p className="text-cyan-400 font-bold mb-6 tracking-wider uppercase text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Human Performance Scientist & Breathwork Facilitator
              </p>
              <div className="space-y-4 text-gray-300 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  With over a decade of experience in high-performance coaching and a background in Health Science, Shaun specializes in nervous system regulation as the foundation for all meaningful change.
                </p>
                <p>
                  He doesn't just teach breathwork; he uses it as a precise tool to help high-achievers bypass the noise of the analytical mind and reconnect with their innate clarity and presence.
                </p>
                <p>
                  Shaun's approach is grounded in science, filtered through real-world experience, and delivered with the directness and empathy of someone who has walked the path from burnout to genuine regulation.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-bold text-xl mb-1">9+ Years</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Coaching Experience</p>
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-1">BSc</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Health Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Space */}
      <section className="py-24 md:py-32" style={{ background: "#09091F" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="section-tag mb-6 inline-flex">
              <span style={{ color: "#06B6D4" }}>✦</span>
              Your Space
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
              A Beautiful, Intentional Space
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 mb-8">
            <img 
              src={STUDIO_IMG} 
              alt="Holistic Yoga Studio" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-300 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem" }}>
            The Holistic Yoga Studio at Jells Road is designed for deep work. Clean lines, natural light, and a calm atmosphere create the perfect container for your breathwork journey. You'll feel the difference the moment you walk in.
          </p>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-24 md:py-32" style={{ background: "#0A0A20" }}>
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* What to Expect */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white" style={{ fontFamily: "var(--font-display)" }}>What to Expect</h3>
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="flex gap-6 pb-6 border-b border-white/5 last:border-0">
                    <span className="text-cyan-400 font-bold w-20 flex-shrink-0" style={{ fontFamily: "var(--font-body)" }}>{item.time}</span>
                    <span className="text-gray-300" style={{ fontFamily: "var(--font-body)" }}>{item.activity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm italic text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
                  The breathing technique you'll learn is simple enough to use anywhere — at your desk, before a difficult conversation, or when anxiety spikes. This is a tool for life.
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-8 md:p-10 rounded-2xl bg-[#0F0F2A] border border-cyan-500/20 shadow-2xl shadow-cyan-500/5">
              <h3 className="text-2xl font-bold mb-8 text-white" style={{ fontFamily: "var(--font-display)" }}>Event Details</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Calendar className="text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white">Sunday, April 26th, 2026</p>
                    <p className="text-sm text-gray-400">Early bird price ends April 19th</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white">2:00 PM – 4:00 PM</p>
                    <p className="text-sm text-gray-400">Doors open at 1:45 PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white">Holistic Yoga Studio</p>
                    <p className="text-sm text-gray-400">235 Jells Road, Wheelers Hill, VIC 3150</p>
                    <p className="text-xs mt-2 text-cyan-400/70 italic">Best parking: Jells Rd Service Road</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Info className="text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white">What to Bring</p>
                    <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mt-2">
                      <li>Comfortable, loose-fitting clothing</li>
                      <li>A water bottle and an open mind</li>
                      <li>A journal and pen</li>
                      <li>Eat lightly 2 hours before the session</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">Early Bird</p>
                    <p className="text-3xl font-bold text-white">$100 <span className="text-sm font-normal text-gray-500">AUD</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-cyan-400 font-bold mb-1">14 SPOTS ONLY</p>
                    <p className="text-xs text-gray-500">Intimate Group</p>
                  </div>
                </div>
                <a
                  href={STRIPE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary py-4 block text-center"
                  style={{ background: "#06B6D4", color: "#000" }}
                >
                  Reserve Your Spot Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 text-center" style={{ background: "#09091F" }}>
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
            Ready to Find Your Next Step?
            <br />
            <span style={{ color: "#06B6D4" }}>I can't wait to breathe with you.</span>
          </h2>
          <p className="mb-10 text-gray-400 italic" style={{ fontFamily: "var(--font-body)" }}>
            "You are not broken. You are not behind. You are not too far gone. You're simply disconnected — from your body, your breath, and the quiet wisdom that lives underneath all the noise."
          </p>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-4 px-12 text-lg"
            style={{ background: "#06B6D4", color: "#000" }}
          >
            Join the Breathwork Journey →
          </a>
          <p className="mt-8 text-sm" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>
            Questions? Email us at <a href="mailto:shaun@shauntucker.com.au" className="text-cyan-400">shaun@shauntucker.com.au</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
