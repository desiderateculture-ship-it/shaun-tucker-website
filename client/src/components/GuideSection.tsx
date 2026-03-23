/*
 * GUIDE SECTION — AItechadvisory style
 * Navy bg, Syne headings, indigo accents, Plus Jakarta Sans body, high-contrast text
 */

const SHAUN_BLAZER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/shaun-forest-cropped_37a9c292.webp";

const PRIMARY_TITLE = "Human Performance Scientist";
const CREDENTIAL_STRING = ["MMA Fighter", "BSc Health Science", "Breathwork Facilitator"];

const stats = [
  { stat: "100+", label: "Men coached and transformed" },
  { stat: "43+", label: "Daily podcast episodes" },
  { stat: "3", label: "Pillars that change everything" },
  { stat: "0", label: "Shortcuts. This is the real work." },
];

export default function GuideSection() {
  return (
    <section id="guide" className="py-24 md:py-32 overflow-hidden" style={{ background: "#0A0A20" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 pointer-events-none"
                style={{ borderTop: "2px solid #6366F1", borderLeft: "2px solid #6366F1" }} />
              <img
                src={SHAUN_BLAZER}
                alt="Shaun Tucker"
                className="w-full max-w-md mx-auto lg:mx-0 object-cover transition-all duration-700"
                style={{ aspectRatio: "3/4", objectPosition: "top", borderRadius: "12px" }}
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 pointer-events-none"
                style={{ borderBottom: "2px solid rgba(99,102,241,0.4)", borderRight: "2px solid rgba(99,102,241,0.4)" }} />
            </div>

            {/* Credentials card */}
            <div
              className="mt-6 p-6 max-w-md mx-auto lg:mx-0 rounded-xl"
              style={{ background: "#0F0F2A", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}
              >
                Who Shaun Is
              </p>
              {/* Primary title */}
              <p
                className="font-bold mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  color: "#F1F5F9",
                  letterSpacing: "-0.01em",
                  borderBottom: "1px solid rgba(30,30,63,0.8)",
                  paddingBottom: "0.75rem",
                }}
              >
                {PRIMARY_TITLE}
              </p>
              {/* Credential string */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {CREDENTIAL_STRING.map((cred, i) => (
                  <span key={cred} className="flex items-center gap-3">
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}
                    >
                      {cred}
                    </span>
                    {i < CREDENTIAL_STRING.length - 1 && (
                      <span style={{ color: "#334155", fontSize: "0.75rem" }}>|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Copy column */}
          <div className="order-1 lg:order-2">
            <span className="section-tag mb-6 inline-flex">
              <span style={{ color: "#6366F1" }}>✦</span>
              Your Guide
            </span>

            <h2
              className="text-white font-bold leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              I was the man you are right now.
              <br />
              <span style={{ color: "#818CF8" }}>And I found the way through.</span>
            </h2>

            <div className="space-y-5" style={{ fontFamily: "var(--font-body)", color: "#94A3B8", lineHeight: 1.75 }}>
              <p>
                I trained harder than anyone I knew. Pushed through 75Hard. Chased mentors. Earned the credentials. And I was still snapping at the people I loved. Still not present. Still not enough.
              </p>
              <p style={{ color: "#E2E8F0", fontWeight: 600 }}>
                The problem wasn't my effort. It was that nobody had ever taught me to regulate the man underneath the performance.
              </p>
              <p>
                I built the system that changed that. I've used it with 100+ men. I'm here to walk you through it.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl transition-all duration-300"
                  style={{
                    background: "#0F0F2A",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(99,102,241,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span
                    className="font-bold block mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "#818CF8",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.stat}
                  </span>
                  <span
                    className="text-xs leading-snug"
                    style={{ fontFamily: "var(--font-body)", color: "#64748B" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
