/*
 * PROBLEM SECTION — AItechadvisory style
 * Navy bg #09091F, Syne headings, indigo/pink/amber card accents, Plus Jakarta Sans body
 * SB7: Villain + External / Internal / Philosophical problems
 */

import { useEffect, useRef } from "react";

const truths = [
  {
    label: "The Truth About Your Body",
    icon: "⚡",
    headline: "You're not weak. You're wired wrong.",
    body: "Cold showers and 5am alarms don't fix a dysregulated nervous system. They just add more noise. The answer isn't more effort.",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.25)",
    delay: "0.1s",
  },
  {
    label: "The Truth About Your Mind",
    icon: "🔥",
    headline: "You don't have an anger problem.",
    body: "The snapping. The checking out. The guilt. That's not your character. That's a nervous system that was never taught to regulate. It's fixable.",
    color: "#EC4899",
    glow: "rgba(236,72,153,0.12)",
    border: "rgba(236,72,153,0.25)",
    delay: "0.2s",
  },
  {
    label: "The Truth About Fatherhood",
    icon: "⚔️",
    headline: "Your kids don't need a perfect dad.",
    body: "They need a present one. One they run to, not away from. One they'll still talk about when they're 40.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
    delay: "0.3s",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#09091F" }} ref={ref}>

      {/* Bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="container relative z-10">

        {/* Section tag */}
        <div className="flex justify-center mb-6 reveal" style={{ opacity: 0, transform: "translateY(1.5rem)", transition: "all 0.6s ease" }}>
          <span className="section-tag">
            <span style={{ color: "#6366F1" }}>✦</span>
            The Real Problem
          </span>
        </div>

        {/* Opening */}
        <div className="max-w-3xl mx-auto text-center mb-8 reveal" style={{ opacity: 0, transform: "translateY(1.5rem)", transition: "all 0.6s ease 0.05s" }}>
          <h2
            className="text-white font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Your kids are growing up
            right now.
            <br />
            <span style={{ color: "#818CF8" }}>And you're not fully there.</span>
          </h2>
          <p
            className="mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "#94A3B8",
              fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
              maxWidth: "54ch",
              lineHeight: 1.75,
            }}
          >
            There is no second chance at your child's childhood. The man your family needs isn't somewhere in the future — he's locked inside the man you are right now.
          </p>
        </div>

        {/* Villain callout */}
        <div
          className="rounded-xl p-8 md:p-12 mb-14 reveal"
          style={{
            opacity: 0,
            transform: "translateY(1.5rem)",
            transition: "all 0.6s ease 0.1s",
            background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(124,58,237,0.08))",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
        >
          <span className="section-tag mb-5 inline-flex">
            <span style={{ color: "#6366F1" }}>✦</span>
            The Real Villain
          </span>
          <h3
            className="text-white font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            The world told you to grind harder.
            <br />
            <span style={{ color: "#818CF8" }}>Your family needed you to show up softer.</span>
          </h3>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "#94A3B8",
              fontSize: "1.05rem",
              maxWidth: "60ch",
              lineHeight: 1.75,
            }}
          >
            Hustle culture sold you a lie. More discipline. More sacrifice. More proving yourself. But the men who are truly unforgettable aren't the ones who worked the hardest. They're the ones who were present when it counted.
          </p>
        </div>

        {/* Three truths */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {truths.map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-7 flex flex-col gap-4 reveal transition-all duration-300"
              style={{
                opacity: 0,
                transform: "translateY(1.5rem)",
                transition: `opacity 0.6s ease ${item.delay}, transform 0.6s ease ${item.delay}, box-shadow 0.3s, border-color 0.3s`,
                background: "#0F0F2A",
                border: `1px solid ${item.border}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${item.glow}`;
                (e.currentTarget as HTMLElement).style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = item.border;
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span
                  className="text-xs font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: item.glow,
                    border: `1px solid ${item.border}`,
                    color: item.color,
                  }}
                >
                  {item.label}
                </span>
              </div>
              <h3
                className="font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  color: "#F1F5F9",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.headline}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#94A3B8",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pivot quote */}
        <div
          className="rounded-xl p-8 md:p-10 reveal"
          style={{
            opacity: 0,
            transform: "translateY(1.5rem)",
            transition: "all 0.6s ease 0.4s",
            background: "#0F0F2A",
            borderLeft: "3px solid #6366F1",
            paddingLeft: "2.5rem",
          }}
        >
          <blockquote
            className="font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
              color: "#F1F5F9",
              letterSpacing: "-0.01em",
            }}
          >
            "The most dangerous thing a man can do is wait until he's ready."
            <span style={{ color: "#818CF8" }}> Your kids can't wait that long.</span>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
