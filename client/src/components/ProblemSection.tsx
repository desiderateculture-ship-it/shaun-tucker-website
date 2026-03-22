import { useEffect, useRef } from "react";

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.12 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="py-24 md:py-36 bg-[oklch(0.1_0.005_285)]" ref={ref}>
      <div className="container">

        {/* Opening gut-punch */}
        <div className="max-w-3xl mb-20 reveal" style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease" }}>
          <span className="amber-rule mb-6 block" />
          <h2
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-8"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
          >
            You've done everything
            <br />
            they told you to do.
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">So why does it still feel like this?</em>
          </h2>
          <p className="text-[oklch(0.65_0.01_75)] font-body font-light text-lg leading-relaxed max-w-2xl">
            You train hard. You read the books. You show up. But you're still snapping at your kids over nothing. Still lying awake at 2am. Still feeling like you're running on a tank that never fills. Still watching your kids grow up through a fog of exhaustion and disconnection — and hating yourself for it.
          </p>
        </div>

        {/* The real villain — full width callout */}
        <div
          className="bg-[oklch(0.72_0.12_75/0.07)] border border-[oklch(0.72_0.12_75/0.2)] p-10 md:p-14 mb-16 reveal"
          style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease 0.1s" }}
        >
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-5">
            The Real Villain
          </p>
          <h3
            className="text-[oklch(0.95_0.01_75)] font-display text-3xl md:text-4xl font-semibold leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hustle culture didn't make you stronger.
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">It made you unavailable.</em>
          </h3>
          <p className="text-[oklch(0.65_0.01_75)] font-body font-light leading-relaxed max-w-3xl">
            You were sold a lie. That more discipline, more sacrifice, more suffering would eventually produce the man you want to be. But you can't discipline your way out of a dysregulated nervous system. You can't grind your way into presence. And no program — no matter how brutal — will make your kids feel like they have a dad who is truly <em className="italic text-[oklch(0.8_0.01_75)]">there</em>.
          </p>
        </div>

        {/* Three truths */}
        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.2_0.005_285)] mb-20">
          {[
            {
              label: "The Truth About Your Body",
              headline: "You're not tired because you're weak.",
              body: "You're tired because your nervous system has been in survival mode for years. No amount of cold showers or 5am alarms fixes a system that's been running on cortisol and shame.",
              delay: "0.1s",
            },
            {
              label: "The Truth About Your Mind",
              headline: "You don't have an anger problem.",
              body: "You have an unregulated nervous system that nobody ever taught you to manage. The reactivity, the numbness, the disconnection — that's not who you are. That's what happens when a man runs on empty for too long.",
              delay: "0.2s",
            },
            {
              label: "The Truth About Fatherhood",
              headline: "Your kids don't need a harder dad.",
              body: "They need a present one. One who can sit with them in the mess without checking his phone. One who they run to — not away from. One they will talk about for the rest of their lives.",
              delay: "0.3s",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[oklch(0.1_0.005_285)] p-10 reveal"
              style={{ opacity: 0, transform: "translateY(2rem)", transition: `all 0.8s ease ${item.delay}` }}
            >
              <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
                {item.label}
              </p>
              <h3
                className="text-[oklch(0.95_0.01_75)] font-display text-xl md:text-2xl font-semibold mb-4 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.headline}
              </h3>
              <p className="text-[oklch(0.58_0.01_75)] font-body font-light leading-relaxed text-sm">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* The pivot — from pain to possibility */}
        <div
          className="border-l-2 border-[oklch(0.72_0.12_75)] pl-8 max-w-2xl reveal"
          style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease 0.4s" }}
        >
          <blockquote
            className="text-[oklch(0.88_0.01_75)] font-display text-2xl md:text-3xl font-light italic leading-relaxed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "What if the version of you that your kids deserve already exists — and you just haven't been shown how to access him?"
          </blockquote>
          <cite className="mt-5 block text-[oklch(0.5_0.01_75)] text-xs tracking-widest uppercase font-body not-italic">
            — Shaun Tucker
          </cite>
        </div>
      </div>
    </section>
  );
}
