/*
 * COMMUNITY SECTION — AItechadvisory style
 * Navy bg, Syne headings, indigo/amber accents, Plus Jakarta Sans body
 */

const communityDetails = [
  { label: "When", value: "Every Sunday Morning" },
  { label: "Where", value: "Mulgrave, Melbourne VIC" },
  { label: "Who", value: "Driven dads ready to show up" },
  { label: "Cost", value: "Free — always" },
];

const brotherhoodItems = [
  "Weekly live group coaching calls with Shaun",
  "Private community of like-minded dads",
  "The Unforgettable Dad course — included free",
  "Breathwork audio library",
  "Monthly accountability check-ins",
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 md:py-32" style={{ background: "#09091F" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Sunday workout */}
          <div>
            <span className="section-tag mb-6 inline-flex">
              <span style={{ color: "#6366F1" }}>✦</span>
              Free Community
            </span>
            <h2
              className="text-white font-bold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Sunday mornings.
              <br />
              <span style={{ color: "#818CF8" }}>Mulgrave. Free. No ego.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", lineHeight: 1.75, marginBottom: "2rem" }}>
              Every Sunday morning, a group of driven dads show up to train together in Mulgrave. No performance. No competition. Just men showing up with intention. This is where the journey begins — and it costs nothing but your presence.
            </p>

            <div className="space-y-3 mb-10">
              {communityDetails.map((detail) => (
                <div key={detail.label} className="flex gap-5 items-start">
                  <span
                    className="text-xs tracking-[0.2em] uppercase font-bold w-16 flex-shrink-0 pt-0.5"
                    style={{ fontFamily: "var(--font-body)", color: "#6366F1" }}
                  >
                    {detail.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "0.95rem" }}>{detail.value}</span>
                </div>
              ))}
            </div>

            <a href="mailto:shaun@shauntucker.com.au?subject=Sunday Workout" className="btn-primary">
              Join the Sunday Workout
            </a>
          </div>

          {/* Right — Brotherhood */}
          <div
            className="p-9 rounded-xl"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(9,9,31,0.8))",
              border: "1px solid rgba(99,102,241,0.25)",
            }}
          >
            <span className="section-tag mb-5 inline-flex">
              <span style={{ color: "#6366F1" }}>✦</span>
              The Brotherhood
            </span>
            <h3
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                color: "#F1F5F9",
                letterSpacing: "-0.02em",
              }}
            >
              The Unforgettable Brotherhood
            </h3>
            <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              For men who've attended the retreat and want to sustain the transformation. Monthly membership includes weekly group coaching calls, a private community, and The Unforgettable Dad course — gifted to every member.
            </p>

            <div className="space-y-3 mb-8">
              {brotherhoodItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: "#6366F1" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-5" style={{ borderTop: "1px solid rgba(99,102,241,0.2)" }}>
              <p className="text-xs mb-2" style={{ fontFamily: "var(--font-body)", color: "#64748B" }}>
                Available to retreat graduates only
              </p>
                <a
                  href="/#apply"
                  className="text-sm font-semibold transition-opacity duration-200"
                  style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Start with the retreat →
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
