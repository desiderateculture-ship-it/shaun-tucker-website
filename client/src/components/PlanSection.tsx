const SHAUN_MEDITATION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/shaun-meditation_85beed59.jpg";

const steps = [
  {
    number: "01",
    label: "Start Here",
    title: "Join the Free Community",
    description:
      "Every Sunday morning in Mulgrave, a group of driven dads show up to train together — no ego, no performance, just presence. This is where it begins. Show up, feel the difference, and discover what's possible when men train with intention.",
    action: "Join the Sunday Workout →",
    href: "#community",
    tag: "Free",
  },
  {
    number: "02",
    label: "Experience the Work",
    title: "Attend a Breathwork Event or Masterclass",
    description:
      "Your first paid experience. A 2-hour breathwork session or live masterclass that gives your nervous system a taste of what regulation actually feels like. Most men leave having experienced more in 2 hours than in years of conventional training.",
    action: "Book a Session →",
    href: "#breathwork",
    tag: "From $100",
  },
  {
    number: "03",
    label: "The Real Transformation",
    title: "Apply for The Unforgettable Retreat",
    description:
      "Two days. A small group of men. Deep nervous system work, breathwork, identity, and brotherhood. This is the core experience — the event that changes how you show up as a father, a partner, and a man. Limited to 20–25 men per retreat.",
    action: "Apply for The Retreat →",
    href: "#retreat",
    tag: "From $1,500",
    featured: true,
  },
  {
    number: "04",
    label: "Go Deeper",
    title: "The Unforgettable Brotherhood",
    description:
      "Monthly membership for men who've experienced the retreat and want to sustain the transformation. Weekly group calls, accountability, a private community, and The Unforgettable Dad course — gifted to every member.",
    action: "Learn About Membership →",
    href: "#membership",
    tag: "Monthly",
  },
  {
    number: "05",
    label: "The Inner Circle",
    title: "Private 1:1 Coaching with Shaun",
    description:
      "For the man who is ready to go all the way. Maximum 3–4 men at any time. Full access to Shaun, a completely bespoke transformation journey, and the deepest level of accountability available. By invitation only.",
    action: "Express Interest →",
    href: "#apply",
    tag: "By Invitation",
  },
];

export default function PlanSection() {
  return (
    <section id="path" className="py-24 md:py-36 bg-[oklch(0.1_0.005_285)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="amber-rule mb-6 block" />
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
            The Path
          </p>
          <h2
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            A clear path from
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">where you are to unforgettable.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-px">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`group relative flex flex-col md:flex-row gap-8 p-8 md:p-10 border-l-2 transition-all duration-300 ${
                step.featured
                  ? "border-[oklch(0.72_0.12_75)] bg-[oklch(0.14_0.005_285)]"
                  : "border-[oklch(0.22_0.005_285)] bg-[oklch(0.12_0.005_285)] hover:border-[oklch(0.72_0.12_75/0.5)] hover:bg-[oklch(0.13_0.005_285)]"
              }`}
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-16">
                <span
                  className={`font-display text-4xl font-bold leading-none ${
                    step.featured ? "text-[oklch(0.72_0.12_75)]" : "text-[oklch(0.25_0.005_285)]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.25em] uppercase font-body font-medium">
                    {step.label}
                  </p>
                  <span className="px-2 py-0.5 bg-[oklch(0.72_0.12_75/0.15)] text-[oklch(0.72_0.12_75)] text-xs font-body tracking-wide">
                    {step.tag}
                  </span>
                  {step.featured && (
                    <span className="px-2 py-0.5 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-xs font-body font-semibold tracking-wide">
                      Core Experience
                    </span>
                  )}
                </div>
                <h3
                  className="text-[oklch(0.95_0.01_75)] font-display text-2xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[oklch(0.6_0.01_75)] font-body font-light leading-relaxed text-sm mb-5 max-w-2xl">
                  {step.description}
                </p>
                <a
                  href={step.href}
                  className={`inline-flex items-center text-sm font-body font-medium tracking-wide transition-colors duration-300 ${
                    step.featured
                      ? "text-[oklch(0.72_0.12_75)] hover:text-[oklch(0.85_0.12_75)]"
                      : "text-[oklch(0.55_0.01_75)] hover:text-[oklch(0.72_0.12_75)]"
                  }`}
                >
                  {step.action}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
