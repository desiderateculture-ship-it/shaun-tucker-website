const steps = [
  {
    number: "01",
    label: "Start Here — Free",
    title: "Show Up on Sunday.",
    description:
      "Every Sunday morning in Mulgrave, a group of driven dads train together. No ego. No performance. Just men who are done sleepwalking through fatherhood. Come once and you'll understand why they keep coming back. It costs you nothing but your presence — which is exactly the point.",
    action: "Join the Sunday Workout →",
    href: "#community",
    tag: "Free",
  },
  {
    number: "02",
    label: "Feel the Difference",
    title: "Experience Breathwork.",
    description:
      "In 2 hours, you will feel more regulated, more clear, and more present than you have in years. This is not meditation. This is not a workshop. This is your nervous system finally getting what it has been starving for. Most men leave having experienced more in one session than in years of conventional training.",
    action: "Book a Session →",
    href: "#breathwork",
    tag: "From $100",
  },
  {
    number: "03",
    label: "The Turning Point",
    title: "Apply for The Retreat.",
    description:
      "Two days. A small group of men who are serious about becoming unforgettable. This is where everything changes — your nervous system, your identity, your relationship with your kids and your partner. Men leave this retreat different. Their families feel it before they even walk through the door. Limited to 20 men per event.",
    action: "Apply for The Retreat →",
    href: "#retreat",
    tag: "From $1,500",
    featured: true,
  },
  {
    number: "04",
    label: "Lock It In",
    title: "Join The Brotherhood.",
    description:
      "The retreat changes you. The Brotherhood keeps you there. Monthly membership for retreat graduates — weekly group coaching, a private community of men who hold the standard, and The Unforgettable Dad course gifted to every member. This is the ongoing container that makes the transformation permanent.",
    action: "Learn About Membership →",
    href: "#membership",
    tag: "Monthly",
  },
  {
    number: "05",
    label: "The Inner Circle",
    title: "Go All The Way.",
    description:
      "Three men. Maximum. Full access to Shaun. A completely bespoke journey built around your life, your family, your potential. If you are ready to become the man you know you're capable of being — and you want the deepest level of support available — this is it. By invitation only.",
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
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Five steps.
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">One destination: unforgettable.</em>
          </h2>
          <p className="text-[oklch(0.6_0.01_75)] font-body font-light leading-relaxed">
            You don't have to figure this out alone. There is a clear, proven path from where you are now to the father, partner, and man you know you're capable of being. Every step is designed to take you deeper.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-px">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`group relative flex flex-col md:flex-row gap-8 p-8 md:p-10 border-l-2 transition-all duration-300 ${
                step.featured
                  ? "border-[oklch(0.72_0.12_75)] bg-[oklch(0.14_0.005_285)]"
                  : "border-[oklch(0.2_0.005_285)] bg-[oklch(0.12_0.005_285)] hover:border-[oklch(0.72_0.12_75/0.4)] hover:bg-[oklch(0.13_0.005_285)]"
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0 w-14">
                <span
                  className={`font-display text-4xl font-bold leading-none ${
                    step.featured ? "text-[oklch(0.72_0.12_75)]" : "text-[oklch(0.22_0.005_285)]"
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
                <p className="text-[oklch(0.58_0.01_75)] font-body font-light leading-relaxed text-sm mb-5 max-w-2xl">
                  {step.description}
                </p>
                <a
                  href={step.href}
                  className={`inline-flex items-center text-sm font-body font-medium tracking-wide transition-colors duration-300 ${
                    step.featured
                      ? "text-[oklch(0.72_0.12_75)] hover:text-[oklch(0.85_0.12_75)]"
                      : "text-[oklch(0.5_0.01_75)] hover:text-[oklch(0.72_0.12_75)]"
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
