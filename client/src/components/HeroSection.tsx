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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.005_285/0.98)] via-[oklch(0.08_0.005_285/0.88)] to-[oklch(0.08_0.005_285/0.35)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[oklch(0.1_0.005_285)] to-transparent" />

      <div className="relative z-10 container">
        <div
          ref={headlineRef}
          className="max-w-3xl opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="amber-rule mb-8 block" />

          {/* Pattern interrupt — first line */}
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-6">
            For the driven dad who is done settling
          </p>

          {/* Headline — pure pattern interrupt */}
          <h1
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-[1.02] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5.8rem)",
            }}
          >
            You're succeeding
            <br />
            at everything
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">except being present.</em>
          </h1>

          {/* The knife twist */}
          <p className="text-[oklch(0.78_0.01_75)] font-body font-light text-xl leading-relaxed mb-4 max-w-xl">
            Your kids are growing up <em className="text-[oklch(0.95_0.01_75)] not-italic font-medium">right now.</em> And somewhere deep down, you know you're not fully there.
          </p>
          <p className="text-[oklch(0.6_0.01_75)] font-body font-light text-base leading-relaxed mb-10 max-w-xl">
            Not because you don't care. Because nobody ever showed you how to be strong <em className="italic">and</em> present. Disciplined <em className="italic">and</em> regulated. A warrior <em className="italic">and</em> a father.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300 group"
            >
              This Is My Tribe — Apply Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-[oklch(0.72_0.12_75/0.35)] text-[oklch(0.72_0.12_75)] text-sm tracking-widest uppercase font-body font-medium hover:border-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.72_0.12_75/0.08)] transition-all duration-300"
            >
              Show Me More
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-14 flex items-center gap-6 flex-wrap">
            <div className="flex flex-col">
              <span className="text-[oklch(0.72_0.12_75)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>43+</span>
              <span className="text-[oklch(0.45_0.01_75)] text-xs tracking-widest uppercase font-body">Daily Episodes</span>
            </div>
            <div className="w-px h-10 bg-[oklch(0.22_0.005_285)]" />
            <div className="flex flex-col">
              <span className="text-[oklch(0.72_0.12_75)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>100+</span>
              <span className="text-[oklch(0.45_0.01_75)] text-xs tracking-widest uppercase font-body">Men Transformed</span>
            </div>
            <div className="w-px h-10 bg-[oklch(0.22_0.005_285)]" />
            <div className="flex flex-col">
              <span className="text-[oklch(0.72_0.12_75)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>7</span>
              <span className="text-[oklch(0.45_0.01_75)] text-xs tracking-widest uppercase font-body">Dads Lost Daily in AU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.72_0.12_75/0.5)] to-transparent" />
      </div>
    </section>
  );
}
