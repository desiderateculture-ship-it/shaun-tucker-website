/*
 * KNIGHT EVOLUTION — Cinematic Hero Transformation Sequence
 * Design: Dark masculine minimalism — amber/gold on deep charcoal
 * Opens the page. Four stages: Squire → Rising → Warrior → Knight (The Unforgettable Man)
 * Auto-advances with progress bar. Click stage to jump. Full-bleed cinematic images.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  {
    id: "squire",
    number: "01",
    label: "The Squire",
    headline: "You're exhausted.",
    subheadline: "And nobody can tell.",
    body: "You're succeeding at everything on paper. But inside, you're running on fumes. Reactive. Disconnected. Somewhere along the way, you lost yourself — and the people you love are starting to feel it.",
    tag: "WHERE YOU ARE NOW",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/stage1-squire-R8Pk2cgFfAeQXjE4Eakxg3.webp",
    accent: "#8B6A3A",
    brightness: "dark",
  },
  {
    id: "rising",
    number: "02",
    label: "The Awakening",
    headline: "Something has to change.",
    subheadline: "You can feel it.",
    body: "You've tried the programs, the discipline, the grind. You've pushed harder and gotten more depleted. The problem was never your effort. It was that nobody ever showed you how to regulate the man underneath the performance.",
    tag: "THE TURNING POINT",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/stage2-rising-HthhsqhXL8kNAYnsiWoM6p.webp",
    accent: "#C49A3A",
    brightness: "mid",
  },
  {
    id: "warrior",
    number: "03",
    label: "The Warrior",
    headline: "Strong body. Regulated mind.",
    subheadline: "The work begins.",
    body: "You train with purpose. You breathe with intention. You stop reacting and start responding. Your family notices before you do. This is what it feels like when the body and the nervous system finally work together.",
    tag: "THE TRANSFORMATION",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/stage3-warrior-fGrtpESPXFbrTgmPnid44u.webp",
    accent: "#D4A830",
    brightness: "mid",
  },
  {
    id: "knight",
    number: "04",
    label: "The Unforgettable Man",
    headline: "Present. Powerful. Unforgettable.",
    subheadline: "This is who you were always meant to be.",
    body: "Your kids will remember this version of you. Your partner feels chosen every single day. You lead from strength, not fear. You are the man your family needs — not because you're perfect, but because you showed up and did the work.",
    tag: "YOUR DESTINY",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/stage4-knight-hprXh4M85J8ikEue5FyRDW.webp",
    accent: "#F5C842",
    brightness: "gold",
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function KnightEvolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % STAGES.length);
    setProgress(0);
  }, []);

  // Progress bar tick
  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
    const tick = 50;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (tick / AUTO_ADVANCE_MS) * 100, 100));
    }, tick);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [activeIndex, isPaused]);

  // Auto advance
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, isPaused, goNext]);

  const stage = STAGES[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-bleed background images with crossfade */}
      <div className="absolute inset-0 z-0">
        {STAGES.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt={s.label}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Gradient overlays — left panel for text, overall darkening */}
            <div className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(8,7,5,0.92) 0%, rgba(8,7,5,0.75) 45%, rgba(8,7,5,0.25) 70%, rgba(8,7,5,0.1) 100%)"
              }}
            />
            <div className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(8,7,5,0.7) 0%, transparent 40%)"
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen" style={{ minHeight: "100svh" }}>

        {/* Main content area */}
        <div className="flex-1 flex items-center">
          <div className="container py-24 md:py-32">
            <div className="max-w-xl">

              {/* Stage tag */}
              <AnimatePresence mode="wait">
                <motion.div key={`tag-${activeIndex}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <span className="text-xs tracking-[0.35em] uppercase font-body font-bold"
                    style={{ color: stage.accent }}>
                    {stage.tag}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Headline */}
              <AnimatePresence mode="wait">
                <motion.div key={`headline-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  <h1
                    className="font-display font-semibold leading-none mb-3 text-white"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                      lineHeight: 1.05,
                    }}
                  >
                    {stage.headline}
                  </h1>
                  <p
                    className="font-display font-light italic mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                      color: stage.accent,
                      lineHeight: 1.2,
                    }}
                  >
                    {stage.subheadline}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Body */}
              <AnimatePresence mode="wait">
                <motion.p key={`body-${activeIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-[#c8b89a] font-body font-light leading-relaxed mb-10"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", maxWidth: "44ch" }}
                >
                  {stage.body}
                </motion.p>
              </AnimatePresence>

              {/* CTA — only on final stage */}
              <AnimatePresence>
                {activeIndex === STAGES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-wrap gap-4"
                  >
                    <a href="#apply"
                      className="inline-flex items-center gap-3 px-8 py-4 font-body font-bold text-sm tracking-widest uppercase transition-all duration-300 group"
                      style={{ background: "#F5C842", color: "#080705" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#fcd96a")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#F5C842")}
                    >
                      This Is My Path
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                    <a href="#transformation"
                      className="inline-flex items-center gap-3 px-8 py-4 font-body font-light text-sm tracking-widest uppercase border border-[#5a4a2a] text-[#c8b89a] hover:border-[#F5C842] hover:text-white transition-all duration-300">
                      See The Transformation
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* On non-final stages — subtle next prompt */}
              <AnimatePresence>
                {activeIndex < STAGES.length - 1 && (
                  <motion.button
                    key={`next-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => goTo(activeIndex + 1)}
                    className="flex items-center gap-3 text-[#8a7a5a] hover:text-[#F5C842] transition-colors duration-300 font-body text-sm tracking-widest uppercase"
                  >
                    <span>Continue the journey</span>
                    <span className="text-lg">→</span>
                  </motion.button>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

        {/* Bottom: stage navigation + progress */}
        <div className="relative z-10 pb-8 md:pb-12">
          <div className="container">

            {/* Stage selector */}
            <div className="flex items-end gap-0 mb-6 overflow-x-auto">
              {STAGES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="flex-1 min-w-[80px] text-left px-4 py-3 border-t-2 transition-all duration-300 group"
                  style={{
                    borderColor: i === activeIndex ? s.accent : "rgba(90,74,42,0.4)",
                    background: i === activeIndex ? "rgba(245,200,66,0.06)" : "transparent",
                  }}
                >
                  <span className="block text-xs tracking-[0.2em] uppercase font-body font-bold mb-1"
                    style={{ color: i === activeIndex ? s.accent : "#5a4a2a" }}>
                    {s.number}
                  </span>
                  <span className="block text-sm font-body font-medium whitespace-nowrap"
                    style={{ color: i === activeIndex ? "#f0e8d8" : "#6a5a3a" }}>
                    {s.label}
                  </span>
                  {/* Progress bar on active */}
                  {i === activeIndex && (
                    <div className="mt-2 h-0.5 w-full bg-[#2a2010] overflow-hidden">
                      <div
                        className="h-full transition-none"
                        style={{ width: `${progress}%`, background: s.accent }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-px h-8 bg-[#F5C842] animate-pulse" />
              <span className="text-[#8a7a5a] text-xs tracking-[0.3em] uppercase font-body">Scroll to explore</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
