/*
 * PLAN SECTION — AItechadvisory style
 * Navy bg, Syne headings, indigo/amber step accents, Plus Jakarta Sans body
 */

const steps = [
  {
    number: "01",
    label: "Start Here — Free",
    title: "Show Up on Sunday.",
    description: "Every Sunday morning in Mulgrave. No ego. No performance. Just men who are done sleepwalking through fatherhood. It costs you nothing but your presence.",
    action: "Join the Sunday Workout →",
    href: "#community",
    tag: "Free",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.25)",
    featured: false,
  },
  {
    number: "02",
    label: "Feel the Difference",
    title: "Experience Breathwork.",
    description: "In 2 hours, you will feel more regulated and more present than you have in years. Most men leave having experienced more in one session than in years of conventional training.",
    action: "Book a Session →",
    href: "#breathwork",
    tag: "From $100",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.25)",
    featured: false,
  },
  {
    number: "03",
    label: "The Turning Point",
    title: "Apply for The Retreat.",
    description: "Two days. A small group of serious men. Men leave this retreat different. Their families feel it before they walk through the door.",
    action: "Apply for The Retreat →",
    href: "#retreat",
    tag: "From $1,500",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.35)",
    featured: true,
  },
  {
    number: "04",
    label: "Lock It In",
    title: "Join The Brotherhood.",
    description: "The retreat changes you. The Brotherhood keeps you there. Monthly membership for retreat graduates — group coaching, a private community, and The Unforgettable Dad course gifted to every member.",
    action: "Learn About Membership →",
    href: "#membership",
    tag: "Monthly",
    color: "#10B981",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
    featured: false,
  },
  {
    number: "05",
    label: "The Inner Circle",
    title: "Go All The Way.",
    description: "Three men. Maximum. Full access to Shaun. A completely bespoke journey built around your life and your potential. By invitation only.",
    action: "Express Interest →",
    href: "#apply",
    tag: "By Invitation",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.3)",
    featured: false,
  },
];

export default function PlanSection() {
  return (
    <section id="plan" className="py-24 md:py-32" style={{ background: "#09091F" }}>
      <div className="container">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-tag mb-6 inline-flex">
            <span style={{ color: "#6366F1" }}>✦</span>
            The Path
          </span>
          <h2
            className="text-white font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Here is exactly
            <br />
            <span style={{ color: "#818CF8" }}>how you get there.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Most men never change because they don't have a clear path — just more information and more guilt. This is the path. Five steps. Each one designed to take you deeper than the last. You don't have to figure it out alone. You just have to take the next step.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col md:flex-row gap-8 p-7 md:p-9 rounded-xl transition-all duration-300"
              style={{
                background: step.featured ? `linear-gradient(135deg, ${step.glow}, rgba(9,9,31,0.8))` : "#0F0F2A",
                border: `1px solid ${step.featured ? step.color : step.border}`,
                boxShadow: step.featured ? `0 0 40px ${step.glow}` : "none",
              }}
              onMouseEnter={(e) => {
                if (!step.featured) {
                  (e.currentTarget as HTMLElement).style.borderColor = step.color;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${step.glow}`;
                }
              }}
              onMouseLeave={(e) => {
                if (!step.featured) {
                  (e.currentTarget as HTMLElement).style.borderColor = step.border;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }
              }}
            >
              {/* Number */}
              <div className="flex-shrink-0 w-14">
                <span
                  className="font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    color: step.featured ? step.color : "rgba(30,30,63,0.9)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p
                    className="text-xs font-bold tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-body)", color: step.color }}
                  >
                    {step.label}
                  </p>
                  {step.featured && (
                    <span
                      className="px-2.5 py-0.5 text-xs font-bold tracking-wide rounded-full"
                      style={{
                        fontFamily: "var(--font-body)",
                        background: step.glow,
                        border: `1px solid ${step.border}`,
                        color: step.color,
                      }}
                    >
                      Core Experience
                    </span>
                  )}
                  <span
                    className="px-2.5 py-0.5 text-xs font-semibold rounded-full ml-auto"
                    style={{
                      fontFamily: "var(--font-body)",
                      background: "rgba(30,30,63,0.6)",
                      color: "#64748B",
                      border: "1px solid rgba(30,30,63,0.9)",
                    }}
                  >
                    {step.tag}
                  </span>
                </div>

                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    color: "#F1F5F9",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="leading-relaxed mb-5 max-w-2xl"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#94A3B8",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                  }}
                >
                  {step.description}
                </p>

                <a
                  href={step.href}
                  className="inline-flex items-center text-sm font-semibold tracking-wide transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)", color: step.color }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {step.action}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
