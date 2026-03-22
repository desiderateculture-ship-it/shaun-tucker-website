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
      { threshold: 0.15 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="py-24 md:py-36 bg-[oklch(0.1_0.005_285)]" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-20 reveal" style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease" }}>
          <span className="amber-rule mb-6 block" />
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
            The Real Problem
          </p>
          <h2
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The program isn't the problem.
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">Your nervous system is.</em>
          </h2>
        </div>

        {/* Three-layer problem grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.22_0.005_285)]">
          {/* External Problem */}
          <div
            className="bg-[oklch(0.1_0.005_285)] p-10 reveal"
            style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease 0.1s" }}
          >
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
              External
            </p>
            <h3
              className="text-[oklch(0.95_0.01_75)] font-display text-2xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You're exhausted despite doing everything right.
            </h3>
            <p className="text-[oklch(0.6_0.01_75)] font-body font-light leading-relaxed text-sm">
              You train. You read. You show up. But the fatigue, the reactivity, the disconnection — they don't go away. You've tried every program and none of them fix what's actually broken.
            </p>
          </div>

          {/* Internal Problem */}
          <div
            className="bg-[oklch(0.12_0.005_285)] p-10 reveal"
            style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease 0.2s" }}
          >
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
              Internal
            </p>
            <h3
              className="text-[oklch(0.95_0.01_75)] font-display text-2xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You feel like you're failing the people who need you most.
            </h3>
            <p className="text-[oklch(0.6_0.01_75)] font-body font-light leading-relaxed text-sm">
              You're physically present but emotionally absent. Your kids are growing up. Your partner is waiting. And somewhere underneath the discipline, you know something is missing — and it's not a better workout plan.
            </p>
          </div>

          {/* Philosophical Problem */}
          <div
            className="bg-[oklch(0.1_0.005_285)] p-10 reveal"
            style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease 0.3s" }}
          >
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
              Philosophical
            </p>
            <h3
              className="text-[oklch(0.95_0.01_75)] font-display text-2xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hustle culture lied to you.
            </h3>
            <p className="text-[oklch(0.6_0.01_75)] font-body font-light leading-relaxed text-sm">
              You were told that more discipline, more sacrifice, more suffering would make you the man you want to be. It made you harder. But your kids don't need a harder dad. They need an unforgettable one.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="mt-20 border-l-2 border-[oklch(0.72_0.12_75)] pl-8 max-w-2xl reveal"
          style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.8s ease 0.4s" }}
        >
          <blockquote
            className="text-[oklch(0.85_0.01_75)] font-display text-2xl md:text-3xl font-light italic leading-relaxed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "The problem was never your willpower. It was a nervous system running on survival — and no amount of discipline fixes that."
          </blockquote>
          <cite className="mt-4 block text-[oklch(0.55_0.01_75)] text-xs tracking-widest uppercase font-body not-italic">
            — Shaun Tucker
          </cite>
        </div>
      </div>
    </section>
  );
}
