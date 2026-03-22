const SHAUN_BLAZER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/shaun-blazer_abe55547.jpg";

export default function GuideSection() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[oklch(0.12_0.005_285)] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[oklch(0.72_0.12_75)]" />
              <img
                src={SHAUN_BLAZER}
                alt="Shaun Tucker"
                className="w-full max-w-md mx-auto lg:mx-0 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ aspectRatio: "3/4", objectPosition: "top" }}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[oklch(0.72_0.12_75/0.35)]" />
            </div>

            {/* Credentials */}
            <div className="mt-6 bg-[oklch(0.14_0.005_285)] border border-[oklch(0.22_0.005_285)] p-6 max-w-md mx-auto lg:mx-0">
              <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
                Who Shaun Is
              </p>
              {[
                "Health Scientist — BSc",
                "Certified Breathwork Facilitator",
                "Self-Mastery & Nervous System Coach",
                "Father. Husband. The man who did the work.",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-3 py-2 border-b border-[oklch(0.18_0.005_285)] last:border-0">
                  <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.12_75)] flex-shrink-0" />
                  <span className="text-[oklch(0.68_0.01_75)] text-sm font-body">{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="amber-rule mb-6 block" />
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
              Your Guide
            </p>
            <h2
              className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              I was you.
              <br />
              <em className="text-[oklch(0.72_0.12_75)]">I know the exact way out.</em>
            </h2>

            <div className="space-y-5 text-[oklch(0.68_0.01_75)] font-body font-light leading-relaxed">
              <p>
                I was the guy who trained harder when things got hard. Who pushed through every program, every challenge, every obstacle — because that's what strong men do. I had the discipline. I had the credentials. I had everything except what actually mattered: the ability to be present with the people I loved most.
              </p>
              <p>
                The moment it broke me was on the floor with my newborn daughter. All that force, all that control — and I couldn't even be in the room without my mind racing. I realised I hadn't been building strength. I'd been building walls.
              </p>
              <p className="text-[oklch(0.8_0.01_75)] font-medium">
                That's when I stopped performing and started doing the real work. The nervous system work. The identity work. The breathwork that unlocks what no gym session ever could.
              </p>
              <p>
                What I found changed everything — not just for me, but for every man I've worked with since. And it will change everything for you.
              </p>
            </div>

            {/* Proof numbers */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { stat: "100+", label: "Men coached and transformed" },
                { stat: "43+", label: "Daily podcast episodes" },
                { stat: "3", label: "Pillars that change everything" },
                { stat: "0", label: "Shortcuts. This is the real work." },
              ].map((item) => (
                <div key={item.label} className="border border-[oklch(0.2_0.005_285)] p-4 hover:border-[oklch(0.72_0.12_75/0.4)] transition-colors duration-300">
                  <span
                    className="text-[oklch(0.72_0.12_75)] font-display text-3xl font-semibold block mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-[oklch(0.48_0.01_75)] text-xs font-body leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
