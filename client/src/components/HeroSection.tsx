import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/hero-bg-R2jNXXyy4y46ndZPyAvAQs.webp";

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_285/0.97)] via-[oklch(0.08_0.005_285/0.85)] to-[oklch(0.08_0.005_285/0.4)]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.1_0.005_285)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 container">
        <div
          ref={headlineRef}
          className="max-w-3xl opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {/* Amber rule */}
          <span className="amber-rule mb-8 block" />

          {/* Eyebrow */}
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-6">
            Health Scientist · Self-Mastery Coach · Breathwork Facilitator
          </p>

          {/* Main headline — SB7: Character's Desire */}
          <h1
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-[1.05] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            }}
          >
            You Are Driven.
            <br />
            <em className="text-[oklch(0.72_0.12_75)] not-italic">But Are You Present?</em>
          </h1>

          {/* Sub-headline — SB7: External + Internal Problem */}
          <p className="text-[oklch(0.75_0.01_75)] font-body font-light text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            You've built the discipline. You've done the programs. But your nervous system is still running on fumes — and the people who matter most can feel it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300 group"
            >
              Apply for The Retreat
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-[oklch(0.72_0.12_75/0.4)] text-[oklch(0.72_0.12_75)] text-sm tracking-widest uppercase font-body font-medium hover:border-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.72_0.12_75/0.08)] transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[oklch(0.72_0.12_75)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>43+</span>
              <span className="text-[oklch(0.55_0.01_75)] text-xs tracking-widest uppercase font-body">Daily Episodes</span>
            </div>
            <div className="w-px h-10 bg-[oklch(0.22_0.005_285)]" />
            <div className="flex flex-col">
              <span className="text-[oklch(0.72_0.12_75)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>26+</span>
              <span className="text-[oklch(0.55_0.01_75)] text-xs tracking-widest uppercase font-body">Men in Community</span>
            </div>
            <div className="w-px h-10 bg-[oklch(0.22_0.005_285)]" />
            <div className="flex flex-col">
              <span className="text-[oklch(0.72_0.12_75)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>1</span>
              <span className="text-[oklch(0.55_0.01_75)] text-xs tracking-widest uppercase font-body">Mission</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.72_0.12_75/0.6)] to-transparent" />
      </div>
    </section>
  );
}
