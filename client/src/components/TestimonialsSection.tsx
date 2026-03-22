const testimonials = [
  {
    quote:
      "I came in thinking I needed a better training program. I left understanding that I needed to regulate my nervous system first. The retreat changed the way I show up for my kids every single day.",
    name: "Rama",
    role: "Father of 2 · Melbourne",
  },
  {
    quote:
      "I've done 75 Hard. I've done every program. Nothing came close to what happened in those two days. Shaun doesn't just coach you — he shows you who you actually are.",
    name: "Paul",
    role: "Father of 3 · Sydney",
  },
  {
    quote:
      "My wife noticed the change before I did. I was calmer, more present, less reactive. The breathwork alone was worth every cent. This is the work I didn't know I needed.",
    name: "Sridhar",
    role: "Father of 1 · Melbourne",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-36 bg-[oklch(0.1_0.005_285)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="amber-rule mb-6 block" />
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
            Transformation
          </p>
          <h2
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Men who became
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">unforgettable.</em>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[oklch(0.13_0.005_285)] border border-[oklch(0.2_0.005_285)] p-8 flex flex-col"
            >
              {/* Quote mark */}
              <span
                className="text-[oklch(0.72_0.12_75)] font-display text-6xl leading-none mb-4 block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "
              </span>
              <blockquote className="text-[oklch(0.75_0.01_75)] font-body font-light leading-relaxed text-sm flex-1 mb-8">
                {t.quote}
              </blockquote>
              <div className="border-t border-[oklch(0.2_0.005_285)] pt-5">
                <p
                  className="text-[oklch(0.9_0.01_75)] font-display text-lg font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.name}
                </p>
                <p className="text-[oklch(0.5_0.01_75)] text-xs font-body tracking-wide mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
