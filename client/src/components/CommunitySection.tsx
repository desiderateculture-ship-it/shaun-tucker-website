export default function CommunitySection() {
  return (
    <section id="community" className="py-24 md:py-36 bg-[oklch(0.12_0.005_285)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <span className="amber-rule mb-6 block" />
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
              Free Community
            </p>
            <h2
              className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Sunday mornings.
              <br />
              <em className="text-[oklch(0.72_0.12_75)]">Mulgrave. Free. No ego.</em>
            </h2>
            <p className="text-[oklch(0.65_0.01_75)] font-body font-light leading-relaxed mb-8">
              Every Sunday morning, a group of driven dads show up to train together in Mulgrave. No performance. No competition. Just men showing up with intention. This is where the journey begins — and it costs nothing but your presence.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { label: "When", value: "Every Sunday Morning" },
                { label: "Where", value: "Mulgrave, Melbourne VIC" },
                { label: "Who", value: "Driven dads ready to show up" },
                { label: "Cost", value: "Free — always" },
              ].map((detail) => (
                <div key={detail.label} className="flex gap-4 items-start">
                  <span className="text-[oklch(0.72_0.12_75)] text-xs tracking-widest uppercase font-body font-medium w-16 flex-shrink-0 pt-0.5">
                    {detail.label}
                  </span>
                  <span className="text-[oklch(0.75_0.01_75)] font-body text-sm">{detail.value}</span>
                </div>
              ))}
            </div>
            <a
              href="mailto:shaun@shauntucker.com.au?subject=Sunday Workout"
              className="inline-flex items-center justify-center px-8 py-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300"
            >
              Join the Sunday Workout
            </a>
          </div>

          {/* Right — membership teaser */}
          <div className="bg-[oklch(0.14_0.005_285)] border border-[oklch(0.22_0.005_285)] p-10">
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-6">
              The Brotherhood
            </p>
            <h3
              className="text-[oklch(0.95_0.01_75)] font-display text-2xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Unforgettable Brotherhood
            </h3>
            <p className="text-[oklch(0.6_0.01_75)] font-body font-light text-sm leading-relaxed mb-8">
              For men who've attended the retreat and want to sustain the transformation. Monthly membership includes weekly group coaching calls, a private community, and The Unforgettable Dad course — gifted to every member.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Weekly live group coaching calls with Shaun",
                "Private community of like-minded dads",
                "The Unforgettable Dad course — included free",
                "Breathwork audio library",
                "Monthly accountability check-ins",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[oklch(0.72_0.12_75)] mt-1 flex-shrink-0">✓</span>
                  <span className="text-[oklch(0.65_0.01_75)] text-sm font-body">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[oklch(0.22_0.005_285)] pt-6">
              <p className="text-[oklch(0.5_0.01_75)] text-xs font-body mb-2 tracking-wide">
                Available to retreat graduates only
              </p>
              <a
                href="#apply"
                className="text-[oklch(0.72_0.12_75)] text-sm font-body font-medium hover:text-[oklch(0.85_0.12_75)] transition-colors duration-300"
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
