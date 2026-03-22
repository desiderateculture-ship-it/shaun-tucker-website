const RETREAT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/retreat-bg-ecNELaii4HhNHzbKbXo6uC.webp";

const pillars = [
  {
    title: "Strong Body",
    description:
      "Physical training that builds real strength — not just aesthetics. Movement that regulates your nervous system rather than depleting it.",
  },
  {
    title: "Regulated System",
    description:
      "Breathwork, nervous system protocols, and somatic practices that move you out of survival mode and into genuine presence.",
  },
  {
    title: "Unstoppable Mind",
    description:
      "Identity work, mindset tools, and the philosophical framework to become the man your family needs — without burning yourself out to get there.",
  },
];

export default function RetreatSection() {
  return (
    <section id="retreat" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${RETREAT_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.06_0.005_285/0.92)]" />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="amber-rule mb-6 block" />
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
            The Core Experience
          </p>
          <h2
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.8rem)" }}
          >
            The Unforgettable Retreat
          </h2>
          <p className="text-[oklch(0.75_0.01_75)] font-body font-light text-lg leading-relaxed max-w-2xl">
            Two days. A small group of driven dads. The most concentrated transformation experience available. This is not a seminar. It is not a workshop. It is the moment everything changes.
          </p>
        </div>

        {/* Details grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* What's included */}
          <div className="lg:col-span-2 bg-[oklch(0.1_0.005_285/0.85)] backdrop-blur-sm border border-[oklch(0.22_0.005_285)] p-8">
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-6">
              What Happens Over Two Days
            </p>
            <div className="space-y-4">
              {[
                "Deep nervous system regulation and breathwork sessions",
                "Identity and self-mastery workshops",
                "Physical training designed for presence, not performance",
                "Brotherhood circles — raw, real, no performance required",
                "The Unforgettable Dad framework delivered in full",
                "Post-retreat integration plan and ongoing support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] flex-shrink-0 mt-2" />
                  <span className="text-[oklch(0.75_0.01_75)] font-body font-light text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics */}
          <div className="bg-[oklch(0.1_0.005_285/0.85)] backdrop-blur-sm border border-[oklch(0.72_0.12_75/0.3)] p-8">
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-6">
              Details
            </p>
            <div className="space-y-5">
              {[
                { label: "Duration", value: "2 Days" },
                { label: "Group Size", value: "20–25 Men Max" },
                { label: "Location", value: "Melbourne, VIC" },
                { label: "Investment", value: "From $1,500" },
                { label: "Frequency", value: "Quarterly" },
                { label: "Entry", value: "Application Required" },
              ].map((detail) => (
                <div key={detail.label} className="flex justify-between items-center border-b border-[oklch(0.22_0.005_285)] pb-3">
                  <span className="text-[oklch(0.5_0.01_75)] text-xs uppercase tracking-widest font-body">{detail.label}</span>
                  <span className="text-[oklch(0.85_0.01_75)] text-sm font-body font-medium">{detail.value}</span>
                </div>
              ))}
            </div>
            <a
              href="#apply"
              className="mt-8 w-full flex items-center justify-center px-6 py-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300"
            >
              Apply for The Retreat
            </a>
          </div>
        </div>

        {/* Three Pillars */}
        <div>
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-8">
            Built on Three Pillars
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="bg-[oklch(0.1_0.005_285/0.7)] backdrop-blur-sm border border-[oklch(0.22_0.005_285)] p-8">
                <span
                  className="text-[oklch(0.72_0.12_75/0.2)] font-display text-6xl font-bold leading-none block mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-[oklch(0.95_0.01_75)] font-display text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-[oklch(0.6_0.01_75)] font-body font-light text-sm leading-relaxed">
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
