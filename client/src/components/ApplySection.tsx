/*
 * APPLY / CTA SECTION — AItechadvisory style
 * Navy bg with image overlay, Syne headings, amber primary CTA, indigo secondary
 */

const BREATHWORK_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/breathwork-bg-fvM7GK89wHUikcoAXFfLgP.webp";

export default function ApplySection() {
  return (
    <section id="apply" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BREATHWORK_BG})` }} />
      <div className="absolute inset-0" style={{ background: "rgba(9,9,31,0.93)" }} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center">

          <span className="section-tag-amber section-tag mb-8 inline-flex">
            <span style={{ color: "#F59E0B" }}>✦</span>
            The Stakes
          </span>

          <h2
            className="text-white font-bold leading-tight mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            There is no second chance
            <br />
            <span style={{ color: "#FCD34D" }}>at their childhood.</span>
          </h2>

          <p
            className="mb-6 mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              color: "#CBD5E1",
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "50ch",
            }}
          >
            I made a vow to my daughter Kelsey. To my own father. To every man who ever felt like he was running out of time to get this right. The clock doesn't pause while you think about it. Your kids are forming their memories of you right now — today, this week, this year.
          </p>

          <p
            className="mb-12 mx-auto font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              color: "#F1F5F9",
              maxWidth: "48ch",
              letterSpacing: "-0.01em",
            }}
          >
            "By this time next year, I will work four days a week. The fifth day belongs to Kelsey. I will lead 50 dads to become unforgettable. And I will take my whole family on a trip they'll never forget — because the gift I'm giving my kids is the one I felt I missed out on."
            <span style={{ color: "#FCD34D" }}> That's the vow. Are you ready to make yours?</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shaun@shauntucker.com.au?subject=Retreat Application"
              className="btn-amber group"
            >
              Apply for The Retreat
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#community"
              className="btn-ghost"
            >
              Join the Free Community
            </a>
          </div>

          <p
            className="mt-8 text-xs tracking-wide"
            style={{ fontFamily: "var(--font-body)", color: "#475569" }}
          >
            Every application is reviewed personally by Shaun. This is not a course. This is a brotherhood. Not everyone is accepted — and that's exactly the point.
          </p>

        </div>
      </div>
    </section>
  );
}
