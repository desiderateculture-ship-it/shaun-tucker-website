/*
 * FLOATING VIDEO WIDGET — Fat to Fit Journey Story
 * - 9:16 vertical rounded-rectangle preview bubble, bottom-right corner
 * - Click to expand into full 9:16 modal with sound (object-fit: contain)
 * - 3 CTA buttons: Join Sunday Workout · Book a Session · Apply for The Retreat
 * - Brand: dark premium, The Unforgettable aesthetic
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC = "/shaun-story.mp4";

// Bubble dimensions — strict 9:16 ratio
const BUBBLE_W = 120;
const BUBBLE_H = Math.round(BUBBLE_W * (16 / 9)); // 213px

export default function FloatingVideoWidget() {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const previewRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLVideoElement>(null);

  // Delay bubble appearance by 3 seconds after page load
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Autoplay muted preview when bubble appears
  useEffect(() => {
    if (showBubble && previewRef.current) {
      previewRef.current.play().catch(() => {});
    }
  }, [showBubble]);

  // When modal opens, play full video with sound from start
  useEffect(() => {
    if (expanded && modalRef.current) {
      modalRef.current.currentTime = 0;
      modalRef.current.muted = false;
      modalRef.current.play().catch(() => {});
    }
    if (!expanded && previewRef.current) {
      previewRef.current.play().catch(() => {});
    }
  }, [expanded]);

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (dismissed) return null;

  return (
    <>
      {/* ── Floating bubble ── */}
      <AnimatePresence>
        {showBubble && !expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
            style={{ filter: "drop-shadow(0 8px 32px rgba(34,211,238,0.25))" }}
          >
            {/* Tooltip label */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold tracking-wide cursor-pointer select-none leading-snug"
              style={{
                background: "rgba(14,14,20,0.95)",
                border: "1px solid rgba(34,211,238,0.4)",
                color: "#E2E8F0",
                fontFamily: "var(--font-body)",
                backdropFilter: "blur(12px)",
                maxWidth: "200px",
                textAlign: "center",
              }}
              onClick={() => setExpanded(true)}
            >
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] flex-shrink-0 animate-pulse" />
              I was unhealthy in both of these photos. Click to hear why.
            </motion.div>

            {/* Video bubble — strict 9:16 */}
            <div className="relative self-end">
              {/* Dismiss button */}
              <button
                onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
                className="absolute -top-2 -left-2 z-10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: "rgba(14,14,20,0.95)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#94A3B8",
                }}
                aria-label="Dismiss video"
              >
                ✕
              </button>

              {/* 9:16 vertical video preview */}
              <div
                className="relative cursor-pointer overflow-hidden"
                style={{
                  width: BUBBLE_W,
                  height: BUBBLE_H,
                  borderRadius: "16px",
                  border: "3px solid #22D3EE",
                  boxShadow: "0 0 0 4px rgba(34,211,238,0.15), 0 8px 32px rgba(0,0,0,0.6)",
                }}
                onClick={() => setExpanded(true)}
                role="button"
                aria-label="Watch Shaun's story"
              >
                <video
                  ref={previewRef}
                  src={VIDEO_SRC}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full"
                  style={{ objectFit: "cover", borderRadius: "13px" }}
                />
                {/* Play overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.28)", borderRadius: "13px" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,211,238,0.9)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path d="M3 2L11 7L3 12V2Z" fill="#09091F" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Expanded modal ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) setExpanded(false); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative rounded-2xl overflow-hidden w-full"
              style={{
                maxWidth: 420,
                background: "#09091F",
                border: "1px solid rgba(34,211,238,0.2)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,211,238,0.08)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors"
                style={{
                  background: "rgba(14,14,20,0.9)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#CBD5E1",
                }}
                aria-label="Close video"
              >
                ✕
              </button>

              {/* Video player — 9:16, object-fit: contain so full frame is visible */}
              <div
                className="relative w-full"
                style={{
                  aspectRatio: "9/16",
                  maxHeight: "65vh",
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <video
                  ref={modalRef}
                  src={VIDEO_SRC}
                  controls
                  playsInline
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Copy + CTA section */}
              <div className="p-6 md:p-8">
                {/* Brand tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold tracking-[0.25em] uppercase"
                    style={{ color: "#22D3EE", fontFamily: "var(--font-body)" }}
                  >
                    ✦ The Unforgettable
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-white font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                    lineHeight: 1.3,
                  }}
                >
                  From Performance to Presence: My 16-Year Loop
                </h3>

                {/* Description */}
                <p
                  className="mb-7"
                  style={{
                    color: "#CBD5E1",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                  }}
                >
                  In 2008, I was 110kg and eating my emotions. Years later, I hit peak fitness — but I was still forcing a performance. It took 16 years of physical, mental, and emotional work to finally be okay with the man in the mirror. I've completed the loop, and now I'm inviting you to go on yours.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col gap-3">
                  {/* Primary: Join Sunday Workout */}
                  <a
                    href="/#community"
                    onClick={() => setExpanded(false)}
                    className="flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #22D3EE, #06B6D4)",
                      color: "#09091F",
                      fontFamily: "var(--font-body)",
                      boxShadow: "0 4px 20px rgba(34,211,238,0.3)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm-5 5s-.5-4 5-4 5 4 5 4H3z" fill="currentColor"/>
                    </svg>
                    Join the Sunday Workout (Free)
                  </a>

                  {/* Secondary: Book a Session */}
                  <a
                    href="/#path"
                    onClick={() => setExpanded(false)}
                    className="flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #6366F1, #7C3AED)",
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12.5v-9zM5 1v2M11 1v2M2 6h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    Book a Session
                  </a>

                  {/* Tertiary: Apply for The Retreat */}
                  <a
                    href="/#retreat"
                    onClick={() => setExpanded(false)}
                    className="flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: "transparent",
                      color: "#E2E8F0",
                      fontFamily: "var(--font-body)",
                      border: "2px solid rgba(255,255,255,0.18)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.45)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#E2E8F0";
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 1.9.7-4L2.2 5.7l4-.6L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                    Apply for The Retreat
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
