const SHAUN_BLAZER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/shaun-blazer_abe55547.jpg";

export default function GuideSection() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[oklch(0.12_0.005_285)] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image — left column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Amber border accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[oklch(0.72_0.12_75)]" />
              <img
                src={SHAUN_BLAZER}
                alt="Shaun Tucker"
                className="w-full max-w-md mx-auto lg:mx-0 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ aspectRatio: "3/4", objectPosition: "top" }}
              />
              {/* Bottom right accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[oklch(0.72_0.12_75/0.4)]" />
            </div>

            {/* Credentials card */}
            <div className="mt-6 bg-[oklch(0.14_0.005_285)] border border-[oklch(0.22_0.005_285)] p-6 max-w-md mx-auto lg:mx-0">
              <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
                Credentials
              </p>
              <div className="space-y-2">
                {[
                  "Bachelor of Health Science",
                  "Certified Breathwork Facilitator",
                  "Self-Mastery Coach",
                  "Nervous System Specialist",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.12_75)] flex-shrink-0" />
                    <span className="text-[oklch(0.7_0.01_75)] text-sm font-body">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copy — right column */}
          <div className="order-1 lg:order-2">
            <span className="amber-rule mb-6 block" />
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
              Your Guide
            </p>
            <h2
              className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              I've been where you are.
              <br />
              <em className="text-[oklch(0.72_0.12_75)]">I found a way through.</em>
            </h2>

            <div className="space-y-5 text-[oklch(0.7_0.01_75)] font-body font-light leading-relaxed">
              <p>
                For most of my life, I performed calm and control while running on a nervous system that was anything but. I chased discipline, pushed through brutal challenges, and collected programs that promised transformation — only to find myself more exhausted, more disconnected, and further from the father I wanted to be.
              </p>
              <p>
                The breaking point came on the floor with my newborn daughter. All my force and control had come at the cost of presence. I realised that the very thing I'd been suppressing — my sensitivity, my depth, my emotional range — wasn't my weakness. It was my greatest untapped strength.
              </p>
              <p>
                I spent years studying the science of the human body and the nervous system, training in breathwork, and doing the real inner work. What I found changed everything. Not just for me — but for every man I've worked with since.
              </p>
            </div>

            {/* Authority signals */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { stat: "43+", label: "Podcast episodes published" },
                { stat: "100+", label: "Men coached and transformed" },
                { stat: "3", label: "Core transformation pillars" },
                { stat: "1", label: "Mission: unforgettable fatherhood" },
              ].map((item) => (
                <div key={item.label} className="border border-[oklch(0.22_0.005_285)] p-4">
                  <span
                    className="text-[oklch(0.72_0.12_75)] font-display text-3xl font-semibold block mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-[oklch(0.5_0.01_75)] text-xs font-body leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
