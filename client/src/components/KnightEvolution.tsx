/*
 * KNIGHT EVOLUTION — Cinematic Hero Transformation Sequence
 * Design: AItechadvisory style — Syne font, deep navy #09091F, indigo/violet accents,
 * amber secondary, high-contrast white text, glowing UI elements
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  {
    id: "kosho",
    number: "01",
    label: "The Koshō (小姓)",
    headline: "You're performing.",
    subheadline: "But you haven't begun.",
    body: "You work hard. You provide. You show up. But somewhere beneath the performance, you sense it — the man you are right now is not the man you were meant to become.",
    tag: "WHERE YOU ARE NOW",
    image: "/hero-01.jpg",
    accentColor: "#6366F1",
    glowColor: "rgba(99,102,241,0.35)",
    tagBg: "rgba(99,102,241,0.12)",
    tagBorder: "rgba(99,102,241,0.35)",
    tagText: "#A5B4FC",
  },
  {
    id: "awakening",
    number: "02",
    label: "The Awakening",
    headline: "You feel the call.",
    subheadline: "The way of the warrior begins within.",
    body: "You're not broken. You're untempered. The samurai didn't become great through effort alone — he became great through discipline, breath, and the courage to face himself.",
    tag: "THE TURNING POINT",
    image: "/hero-02.jpg",
    accentColor: "#F59E0B",
    glowColor: "rgba(245,158,11,0.35)",
    tagBg: "rgba(245,158,11,0.12)",
    tagBorder: "rgba(245,158,11,0.35)",
    tagText: "#FCD34D",
  },
  {
    id: "bushi",
    number: "03",
    label: "The Bushi (武士)",
    headline: "You stop reacting.",
    subheadline: "You start leading with honour.",
    body: "Regulated. Grounded. Unshakeable. The warrior who has mastered himself needs no armour. Your family feels the shift before you can even name it.",
    tag: "THE TRANSFORMATION",
    image: "/hero-03.jpg",
    accentColor: "#10B981",
    glowColor: "rgba(16,185,129,0.35)",
    tagBg: "rgba(16,185,129,0.12)",
    tagBorder: "rgba(16,185,129,0.35)",
    tagText: "#6EE7B7",
  },
  {
    id: "samurai",
    number: "04",
    label: "The Unforgettable Man",
    headline: "Present. Powerful. Unforgettable.",
    subheadline: "The man they will never forget.",
    body: "This is the Samurai. Not a fighter — a force of presence. Your children won't remember your salary. They'll remember the man who stood before them, fully alive.",
    tag: "YOUR DESTINY",
    image: "/hero-04.jpg",
    accentColor: "#F59E0B",
    glowColor: "rgba(245,158,11,0.4)",
    tagBg: "rgba(245,158,11,0.15)",
    tagBorder: "rgba(245,158,11,0.4)",
    tagText: "#FCD34D",
  },
];

const AUTO_ADVANCE_MS = 5500;

export default function KnightEvolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % STAGES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
    const tick = 50;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (tick / AUTO_ADVANCE_MS) * 100, 100));
    }, tick);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [activeIndex, isPaused]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeIndex, isPaused, goNext]);

  const stage = STAGES[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", background: "#09091F" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-bleed background images */}
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
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                filter: s.id === "kosho" ? "brightness(1.4) contrast(1.05)" : "brightness(1.15)",
                transform: "none",
                objectPosition: s.id === "bushi" ? "center 35%" : s.id === "awakening" ? "center 25%" : "center center"
              }}
            />
            {/* Overlay — lightened so images are clearly visible */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, rgba(9,9,31,0.82) 0%, rgba(9,9,31,0.55) 40%, rgba(9,9,31,0.15) 70%, rgba(9,9,31,0.05) 100%)"
            }} />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(9,9,31,0.6) 0%, transparent 45%)"
            }} />
          </div>
        ))}
      </div>

      {/* Subtle radial glow behind text */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-1 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, ${stage.glowColor} 0%, transparent 70%)`,
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="flex-1 flex items-center">
          <div className="container py-28 md:py-36">
            <div className="max-w-2xl">

              {/* Stage tag */}
              <AnimatePresence mode="wait">
                <motion.div key={`tag-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="mb-6"
                >
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                    style={{
                      background: stage.tagBg,
                      border: `1px solid ${stage.tagBorder}`,
                      color: stage.tagText,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span style={{ color: stage.accentColor }}>✦</span>
                    {stage.tag}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Headline */}
              <AnimatePresence mode="wait">
                <motion.div key={`headline-${activeIndex}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                >
                  <h1
                    className="text-white font-bold leading-none mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                      lineHeight: 1.0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stage.headline}
                  </h1>
                  <p
                    className="font-semibold mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)",
                      color: stage.accentColor,
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {stage.subheadline}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Body */}
              <AnimatePresence mode="wait">
                <motion.p key={`body-${activeIndex}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="leading-relaxed mb-10"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#CBD5E1",
                    fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                    maxWidth: "46ch",
                    fontWeight: 400,
                  }}
                >
                  {stage.body}
                </motion.p>
              </AnimatePresence>

              {/* CTA on final stage */}
              <AnimatePresence>
                {activeIndex === STAGES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="flex flex-wrap gap-4"
                  >
                    <a href="#apply" className="btn-amber">
                      This Is My Path →
                    </a>
                    <a href="#transformation" className="btn-ghost">
                      See The Transformation
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Continue prompt on non-final stages */}
              <AnimatePresence>
                {activeIndex < STAGES.length - 1 && (
                  <motion.button
                    key={`next-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => goTo(activeIndex + 1)}
                    className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)", color: "#64748B" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F1F5F9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                  >
                    Continue the journey <span>→</span>
                  </motion.button>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

        {/* Stage navigation bar at bottom */}
        <div className="relative z-10 pb-8 md:pb-10">
          <div className="container">
            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex items-end gap-0 mb-6 overflow-x-auto">
              {STAGES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="flex-1 min-w-[80px] text-left px-4 py-3 transition-all duration-300"
                  style={{
                    borderTop: `2px solid ${i === activeIndex ? s.accentColor : "rgba(30,30,63,0.8)"}`,
                    background: i === activeIndex ? `${s.tagBg}` : "transparent",
                  }}
                >
                  <span
                    className="block text-xs font-bold tracking-[0.2em] uppercase mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: i === activeIndex ? s.accentColor : "#334155",
                    }}
                  >
                    {s.number}
                  </span>
                  <span
                    className="block text-sm font-semibold whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: i === activeIndex ? "#F1F5F9" : "#475569",
                    }}
                  >
                    {s.label}
                  </span>
                  {i === activeIndex && (
                    <div className="mt-2 h-0.5 w-full overflow-hidden" style={{ background: "rgba(30,30,63,0.6)" }}>
                      <div
                        className="h-full"
                        style={{ width: `${progress}%`, background: s.accentColor, transition: "width 50ms linear" }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile: Vertical layout */}
            <div className="md:hidden flex flex-col gap-2 mb-6">
              {STAGES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="text-left px-4 py-3 transition-all duration-300 rounded-lg"
                  style={{
                    borderLeft: `3px solid ${i === activeIndex ? s.accentColor : "rgba(30,30,63,0.8)"}`,
                    background: i === activeIndex ? `${s.tagBg}` : "transparent",
                  }}
                >
                  <span
                    className="block text-xs font-bold tracking-[0.2em] uppercase mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: i === activeIndex ? s.accentColor : "#334155",
                    }}
                  >
                    {s.number}
                  </span>
                  <span
                    className="block text-sm font-semibold"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: i === activeIndex ? "#F1F5F9" : "#475569",
                    }}
                  >
                    {s.label}
                  </span>
                  {i === activeIndex && (
                    <div className="mt-2 h-1 w-full overflow-hidden rounded" style={{ background: "rgba(30,30,63,0.6)" }}>
                      <div
                        className="h-full"
                        style={{ width: `${progress}%`, background: s.accentColor, transition: "width 50ms linear" }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center gap-3 opacity-40">
              <div className="w-px h-7 animate-pulse" style={{ background: "#6366F1" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-body)", color: "#475569" }}>
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
