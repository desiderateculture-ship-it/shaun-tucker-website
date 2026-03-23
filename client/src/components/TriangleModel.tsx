/*
 * TRIANGLE MODEL — The Unforgettable Man Framework
 * Three corners: Presence · Certainty · Legacy
 * Three sides:   Nervous System Regulation · Identity Architecture · Somatic Mastery
 * Centre:        The Unforgettable Man
 *
 * v2 — thicker lines, larger fonts, horizontal labels, bigger click targets
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Corner {
  id: string;
  label: string;
  tagline: string;
  description: string;
  color: string;
  glow: string;
}

interface Side {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  color: string;
  connects: [string, string];
}

const CORNERS: Corner[] = [
  {
    id: "presence",
    label: "Presence",
    tagline: "The man who is fully here.",
    description:
      "Presence is not a personality trait — it is a physiological state. When your nervous system is regulated, you stop performing and start inhabiting. Your kids feel it. Your partner feels it. You stop being the man who is physically in the room but mentally somewhere else.",
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.4)",
  },
  {
    id: "certainty",
    label: "Certainty",
    tagline: "The man who knows who he is.",
    description:
      "Certainty is not arrogance — it is identity. When you know who you are and what you stand for, you stop seeking approval and start leading. You make decisions without paralysis. You hold your ground without aggression. You become the stable centre your family orbits around.",
    color: "#818CF8",
    glow: "rgba(129,140,248,0.4)",
  },
  {
    id: "legacy",
    label: "Legacy",
    tagline: "The man they will never forget.",
    description:
      "Legacy is not what you build — it is who you become. The father your children talk about for the rest of their lives. Not because you were perfect, but because you were present. Because you did the work. Because every single day, you chose them.",
    color: "#34D399",
    glow: "rgba(52,211,153,0.4)",
  },
];

const SIDES: Side[] = [
  {
    id: "nervous-system",
    label: "Nervous System Regulation",
    subtitle: "Safety — the foundation of everything.",
    description:
      "You cannot build identity on a dysregulated nervous system. Safety comes first. When your body stops running on threat, you gain access to the full range of who you are — your warmth, your clarity, your capacity to lead. This is the work that makes everything else possible.",
    color: "#22D3EE",
    connects: ["presence", "certainty"],
  },
  {
    id: "identity-architecture",
    label: "Identity Architecture",
    subtitle: "Speed — who you become, fast.",
    description:
      "Identity Architecture is the process of deliberately constructing the man you are choosing to become. Not therapy. Not journaling. A precise, structured rewiring of your self-concept so that the behaviours you want become automatic — because they are now who you are.",
    color: "#9F7AEA",
    connects: ["certainty", "legacy"],
  },
  {
    id: "somatic-mastery",
    label: "Somatic Mastery",
    subtitle: "Scale — embodied change that lasts.",
    description:
      "The body keeps the score — and the body is also where the transformation is stored. Somatic Mastery means your change is not just intellectual. It lives in your breath, your posture, your nervous system. This is how you scale the work into every room you walk into.",
    color: "#34D399",
    connects: ["legacy", "presence"],
  },
];

// ─── SVG geometry ─────────────────────────────────────────────────────────────
const CX = 310;
const CY = 320;
const R = 220; // circumradius — apex top, base bottom

const CORNER_ANGLES = [-90, 150, 30]; // top, bottom-left, bottom-right
const CORNER_ID_ORDER = ["presence", "certainty", "legacy"];

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const CORNER_POS = CORNER_ANGLES.map((a) => polarToXY(CX, CY, R, a));

function midpoint(a: { x: number; y: number }, b: { x: number; y: number }) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

// Outward offset for side labels (push away from centre)
function outwardOffset(mp: { x: number; y: number }, dist: number) {
  const dx = mp.x - CX;
  const dy = mp.y - CY;
  const len = Math.sqrt(dx * dx + dy * dy);
  return { x: mp.x + (dx / len) * dist, y: mp.y + (dy / len) * dist };
}

const SIDE_MIDS = {
  "nervous-system": midpoint(CORNER_POS[0], CORNER_POS[1]),
  "identity-architecture": midpoint(CORNER_POS[1], CORNER_POS[2]),
  "somatic-mastery": midpoint(CORNER_POS[2], CORNER_POS[0]),
};

// ─── Component ───────────────────────────────────────────────────────────────

type ActiveItem = { type: "corner"; data: Corner } | { type: "side"; data: Side } | null;

export default function TriangleModel() {
  const [active, setActive] = useState<ActiveItem>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleCornerClick = (corner: Corner) => {
    setActive(active?.type === "corner" && active.data.id === corner.id ? null : { type: "corner", data: corner });
  };

  const handleSideClick = (side: Side) => {
    setActive(active?.type === "side" && active.data.id === side.id ? null : { type: "side", data: side });
  };

  const trianglePoints = CORNER_POS.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <section className="py-24 md:py-36 bg-[#0c0c10] overflow-hidden">
      <div className="container">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="w-12 h-0.5 bg-[#22D3EE] mb-6" />
          <p className="text-[#22D3EE] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            The Framework
          </p>
          <h2
            className="text-white font-display font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
          >
            Three pillars.
            <br />
            <span style={{ color: "#818CF8" }}>One unforgettable man.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Every driven dad who walks through this work arrives at the same three outcomes — Presence, Certainty, and Legacy. The three frameworks below are the precise path to get there. Click any corner or side to explore.
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center xl:items-start">

          {/* ── SVG Triangle ── */}
          <div className="relative flex-shrink-0 w-full xl:w-[640px]" style={{ maxWidth: 640 }}>
            <svg viewBox="0 0 680 700" className="w-full h-auto">
              <defs>
                <radialGradient id="centreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                </radialGradient>
                <filter id="glow-node">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Background */}
              <rect width="620" height="640" fill="#0c0c10" />

              {/* Triangle fill */}
              <polygon points={trianglePoints} fill="rgba(34,211,238,0.05)" stroke="none" />

              {/* ── Triangle edges (thick, clickable) ── */}
              {SIDES.map((side) => {
                const iA = CORNER_ID_ORDER.indexOf(side.connects[0]);
                const iB = CORNER_ID_ORDER.indexOf(side.connects[1]);
                const pA = CORNER_POS[iA];
                const pB = CORNER_POS[iB];
                const isActive = active?.type === "side" && active.data.id === side.id;
                const isHov = hovered === side.id;

                return (
                  <g key={side.id}>
                    {/* Invisible fat hit area */}
                    <line
                      x1={pA.x} y1={pA.y} x2={pB.x} y2={pB.y}
                      stroke="transparent" strokeWidth="40"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSideClick(side)}
                      onMouseEnter={() => setHovered(side.id)}
                      onMouseLeave={() => setHovered(null)}
                    />
                    {/* Visible line */}
                    <line
                      x1={pA.x} y1={pA.y} x2={pB.x} y2={pB.y}
                      stroke={side.color}
                      strokeWidth={isActive || isHov ? 5 : 3}
                      strokeOpacity={isActive || isHov ? 1 : 0.65}
                      style={{ transition: "all 0.2s", pointerEvents: "none" }}
                    />
                  </g>
                );
              })}

              {/* ── Side labels (horizontal, outside triangle) ── */}
              {SIDES.map((side) => {
                const mp = SIDE_MIDS[side.id as keyof typeof SIDE_MIDS];
                const labelPos = outwardOffset(mp, 52);
                const isActive = active?.type === "side" && active.data.id === side.id;
                const isHov = hovered === side.id;

                // Split long labels onto two lines
                const words = side.label.split(" ");
                const mid = Math.ceil(words.length / 2);
                const line1 = words.slice(0, mid).join(" ");
                const line2 = words.slice(mid).join(" ");

                return (
                  <g
                    key={`label-${side.id}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSideClick(side)}
                    onMouseEnter={() => setHovered(side.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Label background pill */}
                    <rect
                      x={labelPos.x - 72} y={labelPos.y - 22}
                      width={144} height={line2 ? 42 : 26}
                      rx={6}
                      fill={isActive || isHov ? `${side.color}22` : "rgba(14,14,20,0.7)"}
                      stroke={isActive || isHov ? side.color : "rgba(255,255,255,0.12)"}
                      strokeWidth="1.5"
                      style={{ transition: "all 0.2s" }}
                    />
                    <text
                      x={labelPos.x} y={labelPos.y - 6}
                      textAnchor="middle"
                      fill={isActive || isHov ? side.color : "#E2E8F0"}
                      fontSize="11"
                      fontFamily="var(--font-body, sans-serif)"
                      fontWeight="700"
                      letterSpacing="0.5"
                      style={{ transition: "fill 0.2s" }}
                    >
                      {line1.toUpperCase()}
                    </text>
                    {line2 && (
                      <text
                        x={labelPos.x} y={labelPos.y + 9}
                        textAnchor="middle"
                        fill={isActive || isHov ? side.color : "#E2E8F0"}
                        fontSize="11"
                        fontFamily="var(--font-body, sans-serif)"
                        fontWeight="700"
                        letterSpacing="0.5"
                        style={{ transition: "fill 0.2s" }}
                      >
                        {line2.toUpperCase()}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* ── Centre hub ── */}
              <circle cx={CX} cy={CY} r={85} fill="url(#centreGrad)" />
              <circle cx={CX} cy={CY} r={72} fill="#0e0e14" stroke="#22D3EE" strokeWidth="2" strokeOpacity="0.7" />
              <circle cx={CX} cy={CY} r={68} fill="rgba(34,211,238,0.06)" />
              <text x={CX} y={CY - 14} textAnchor="middle" fill="#22D3EE" fontSize="22" fontFamily="serif">✦</text>
              <text x={CX} y={CY + 6} textAnchor="middle" fill="#F1F5F9" fontSize="11" fontFamily="var(--font-display, sans-serif)" fontWeight="700" letterSpacing="1.5">THE</text>
              <text x={CX} y={CY + 22} textAnchor="middle" fill="#F1F5F9" fontSize="11" fontFamily="var(--font-display, sans-serif)" fontWeight="700" letterSpacing="1.5">UNFORGETTABLE</text>
              <text x={CX} y={CY + 38} textAnchor="middle" fill="#22D3EE" fontSize="11" fontFamily="var(--font-display, sans-serif)" fontWeight="700" letterSpacing="2">MAN</text>

              {/* ── Corner nodes ── */}
              {CORNERS.map((corner, i) => {
                const pos = CORNER_POS[i];
                const isActive = active?.type === "corner" && active.data.id === corner.id;
                const isHov = hovered === corner.id;
                const r = isActive || isHov ? 64 : 58;

                return (
                  <g
                    key={corner.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCornerClick(corner)}
                    onMouseEnter={() => setHovered(corner.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Glow halo */}
                    {(isActive || isHov) && (
                      <circle cx={pos.x} cy={pos.y} r={r + 14} fill={corner.glow} />
                    )}
                    {/* Node circle */}
                    <circle
                      cx={pos.x} cy={pos.y} r={r}
                      fill="#0e0e14"
                      stroke={corner.color}
                      strokeWidth={isActive || isHov ? 3 : 2}
                      strokeOpacity={isActive || isHov ? 1 : 0.85}
                      style={{ transition: "all 0.2s" }}
                    />
                    {/* Label */}
                    <text
                      x={pos.x} y={pos.y + 6}
                      textAnchor="middle"
                      fill={corner.color}
                      fontSize="14"
                      fontFamily="var(--font-display, sans-serif)"
                      fontWeight="800"
                      letterSpacing="0.5"
                    >
                      {corner.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ── Detail panel ── */}
          <div className="flex-1 min-h-[320px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.type === "corner" ? active.data.id : (active as { type: "side"; data: Side }).data.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border p-8"
                  style={{
                    background: "rgba(14,14,20,0.97)",
                    borderColor: active.type === "corner"
                      ? (active.data as Corner).color
                      : (active.data as Side).color,
                    borderWidth: "2px",
                  }}
                >
                  {active.type === "corner" ? (
                    <>
                      <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: (active.data as Corner).color }}>
                        Outcome
                      </p>
                      <h3 className="text-white font-display font-bold mb-2" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "var(--font-display)" }}>
                        {(active.data as Corner).label}
                      </h3>
                      <p className="mb-5" style={{ color: (active.data as Corner).color, fontFamily: "var(--font-body)", fontSize: "1.05rem", fontStyle: "italic" }}>
                        {(active.data as Corner).tagline}
                      </p>
                      <p style={{ color: "#CBD5E1", fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                        {(active.data as Corner).description}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: (active.data as Side).color }}>
                        Framework
                      </p>
                      <h3 className="text-white font-display font-bold mb-2" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontFamily: "var(--font-display)" }}>
                        {(active.data as Side).label}
                      </h3>
                      <p className="mb-5" style={{ color: (active.data as Side).color, fontFamily: "var(--font-body)", fontSize: "1.05rem", fontStyle: "italic" }}>
                        {(active.data as Side).subtitle}
                      </p>
                      <p style={{ color: "#CBD5E1", fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                        {(active.data as Side).description}
                      </p>
                    </>
                  )}
                  <button
                    onClick={() => setActive(null)}
                    className="mt-6 text-xs tracking-widest uppercase font-semibold"
                    style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                  >
                    ← Back to model
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    {SIDES.map((side) => (
                      <button
                        key={side.id}
                        onClick={() => handleSideClick(side)}
                        className="w-full text-left rounded-xl border p-5 transition-all duration-200"
                        style={{ background: "rgba(14,14,20,0.8)", borderColor: "rgba(255,255,255,0.12)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = side.color;
                          setHovered(side.id);
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                          setHovered(null);
                        }}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: side.color }} />
                          <span className="text-white font-semibold" style={{ fontSize: "1rem", fontFamily: "var(--font-display)" }}>
                            {side.label}
                          </span>
                        </div>
                        <p className="pl-[22px] text-sm" style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}>
                          {side.subtitle}
                        </p>
                      </button>
                    ))}
                  </div>
                  <p className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#475569", fontFamily: "var(--font-body)" }}>
                    Click any corner or side of the triangle to explore
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
