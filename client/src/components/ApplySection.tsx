const BREATHWORK_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/breathwork-bg-fvM7GK89wHUikcoAXFfLgP.webp";

export default function ApplySection() {
  return (
    <section id="apply" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BREATHWORK_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.06_0.005_285/0.93)]" />

      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="amber-rule mb-8 mx-auto block" />

          {/* Avoid failure copy */}
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-6">
            The Stakes
          </p>
          <h2
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-8"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
          >
            Your kids are growing up
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">right now.</em>
          </h2>

          <p className="text-[oklch(0.7_0.01_75)] font-body font-light text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            Every year that passes running on fumes is a year they remember a dad who was there — but not really there. The window to become the father they'll never forget is open. But it won't stay open forever.
          </p>

          {/* Success vision */}
          <p className="text-[oklch(0.8_0.01_75)] font-display text-xl md:text-2xl italic leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
            "Imagine waking up calm. Training with purpose. Coming home and actually being present. Your kids running to you — not because you're performing fatherhood, but because they can feel you."
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shaun@shauntucker.com.au?subject=Retreat Application"
              className="inline-flex items-center justify-center px-10 py-5 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300 group"
            >
              Apply for The Retreat
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#community"
              className="inline-flex items-center justify-center px-10 py-5 border border-[oklch(0.72_0.12_75/0.4)] text-[oklch(0.72_0.12_75)] text-sm tracking-widest uppercase font-body font-medium hover:border-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.72_0.12_75/0.08)] transition-all duration-300"
            >
              Join the Free Community
            </a>
          </div>

          {/* Reassurance */}
          <p className="mt-8 text-[oklch(0.45_0.01_75)] text-xs font-body tracking-wide">
            Applications are reviewed personally by Shaun. Not everyone is accepted — this ensures every man in the room is ready.
          </p>
        </div>
      </div>
    </section>
  );
}
