/*
 * TESTIMONIALS SECTION — AItechadvisory style
 * Navy bg, Syne headings, glowing quote cards, Plus Jakarta Sans body
 */

const testimonials = [
  {
    quote: "I came in thinking I needed a better training program. I left understanding that I needed to regulate my nervous system first. The retreat changed the way I show up for my kids every single day.",
    name: "Rama",
    role: "Father of 2 · Melbourne",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    quote: "I've done 75 Hard. I've done every program. Nothing came close to what happened in those two days. Shaun doesn't just coach you — he shows you who you actually are.",
    name: "Paul",
    role: "Father of 3 · Sydney",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    quote: "My wife noticed the change before I did. I was calmer, more present, less reactive. The breathwork alone was worth every cent. This is the work I didn't know I needed.",
    name: "Sridhar",
    role: "Father of 1 · Melbourne",
    color: "#10B981",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#0A0A20" }}>
      <div className="container">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="section-tag mb-6 inline-flex">
            <span style={{ color: "#6366F1" }}>✦</span>
            Transformation
          </span>
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Men who became
            <br />
            <span style={{ color: "#818CF8" }}>unforgettable.</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-xl flex flex-col transition-all duration-300"
              style={{ background: "#0F0F2A", border: `1px solid ${t.border}` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${t.glow}`;
                (e.currentTarget as HTMLElement).style.borderColor = t.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = t.border;
              }}
            >
              <span
                className="font-bold leading-none mb-4 block"
                style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: t.color, lineHeight: 1 }}
              >
                "
              </span>
              <blockquote
                className="flex-1 mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.75 }}
              >
                {t.quote}
              </blockquote>
              <div className="pt-5" style={{ borderTop: `1px solid ${t.border}` }}>
                <p
                  className="font-bold"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#F1F5F9", letterSpacing: "-0.01em" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs tracking-wide mt-1"
                  style={{ fontFamily: "var(--font-body)", color: "#64748B" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
