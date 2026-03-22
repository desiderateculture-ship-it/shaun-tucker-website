/*
 * RETREAT SECTION — AItechadvisory style
 * Navy bg with image overlay, Syne headings, amber CTA, indigo/emerald pillar accents
 */

const RETREAT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/retreat-bg-ecNELaii4HhNHzbKbXo6uC.webp";

const pillars = [
  {
    title: "Strong Body",
    description: "Physical training that builds real strength — not just aesthetics. Movement that regulates your nervous system rather than depleting it.",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.25)",
    icon: "💪",
  },
  {
    title: "Regulated System",
    description: "Breathwork, nervous system protocols, and somatic practices that move you out of survival mode and into genuine presence.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.25)",
    icon: "🌬️",
  },
  {
    title: "Unstoppable Mind",
    description: "Identity work, mindset tools, and the philosophical framework to become the man your family needs — without burning yourself out to get there.",
    color: "#10B981",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
    icon: "🧠",
  },
];

const included = [
  "Deep nervous system regulation and breathwork sessions",
  "Identity and self-mastery workshops",
  "Physical training designed for presence, not performance",
  "Brotherhood circles — raw, real, no performance required",
  "The Unforgettable Dad framework delivered in full",
  "Post-retreat integration plan and ongoing support",
];

const details = [
  { label: "Duration", value: "2 Days" },
  { label: "Group Size", value: "20–25 Men Max" },
  { label: "Location", value: "Melbourne, VIC" },
  { label: "Investment", value: "From $1,500" },
  { label: "Frequency", value: "Quarterly" },
  { label: "Entry", value: "Application Required" },
];

export default function RetreatSection() {
  return (
    <section id="retreat" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${RETREAT_BG})` }} />
      <div className="absolute inset-0" style={{ background: "rgba(9,9,31,0.93)" }} />

      <div className="relative z-10 container">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="section-tag-amber section-tag mb-6 inline-flex">
            <span style={{ color: "#F59E0B" }}>✦</span>
            The Core Experience
          </span>
          <h2
            className="text-white font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            The Unforgettable Retreat
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "52ch" }}>
            Two days. A small group of driven dads. The most concentrated transformation experience available. This is not a seminar. It is not a workshop. It is the moment everything changes.
          </p>
        </div>

        {/* Details grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">

          {/* What's included */}
          <div
            className="lg:col-span-2 p-8 rounded-xl"
            style={{ background: "rgba(15,15,42,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}>
              What Happens Over Two Days
            </p>
            <div className="space-y-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#6366F1" }} />
                  <span style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics */}
          <div
            className="p-8 rounded-xl"
            style={{ background: "rgba(15,15,42,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: "#FCD34D" }}>
              Details
            </p>
            <div className="space-y-4">
              {details.map((detail) => (
                <div key={detail.label} className="flex justify-between items-center pb-3" style={{ borderBottom: "1px solid rgba(30,30,63,0.8)" }}>
                  <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-body)", color: "#64748B" }}>{detail.label}</span>
                  <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-body)", color: "#E2E8F0" }}>{detail.value}</span>
                </div>
              ))}
            </div>
            <a href="#apply" className="btn-amber mt-8 w-full justify-center">
              Apply for The Retreat
            </a>
          </div>
        </div>

        {/* Three Pillars */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-7" style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}>
            Built on Three Pillars
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-7 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(15,15,42,0.7)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${pillar.border}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${pillar.glow}`;
                  (e.currentTarget as HTMLElement).style.borderColor = pillar.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = pillar.border;
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{pillar.icon}</span>
                  <span
                    className="font-bold"
                    style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "rgba(30,30,63,0.9)", letterSpacing: "-0.02em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "#F1F5F9", letterSpacing: "-0.01em" }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
