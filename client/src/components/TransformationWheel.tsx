/*
 * TRANSFORMATION WHEEL — Interactive Sales Tool
 * HIGH CONTRAST VERSION — all nodes, labels, and rings clearly visible
 * Design: Dark bg with bright amber/green/blue nodes and white text
 */

import { useState, useEffect, useRef, useCallback } from "react";

interface TransformationNode {
  id: string;
  from: string;
  to: string;
  pillar: "body" | "system" | "mind";
  pain: string;
  outcome: string;
  icon: string;
}

const NODES: TransformationNode[] = [
  {
    id: "reactive",
    from: "Reactive",
    to: "Regulated",
    pillar: "system",
    pain: "You snap at your kids over nothing. You lie awake replaying conversations. Your body is always braced for the next thing to go wrong. You're not angry — you're exhausted and nobody ever taught you how to regulate.",
    outcome: "You respond instead of react. You can sit in the mess without losing yourself. Your family feels the difference before you even say a word. This is what a regulated nervous system feels like.",
    icon: "⚡",
  },
  {
    id: "absent",
    from: "Absent",
    to: "Present",
    pillar: "mind",
    pain: "You're in the room but not really there. Your kids are talking and you're somewhere else. Your partner stopped trying to reach you. You can feel the distance growing and you don't know how to close it.",
    outcome: "You are fully there. Your kids run to you. Your partner feels chosen. You can sit on the floor for an hour and be completely in it — no phone, no racing mind, no performance. Just presence.",
    icon: "🎯",
  },
  {
    id: "exhausted",
    from: "Exhausted",
    to: "Energised",
    pillar: "body",
    pain: "You wake up tired. You train hard and still feel depleted. You've tried every supplement, every protocol, every hack — and nothing fills the tank. Because the leak isn't in your body. It's in your nervous system.",
    outcome: "You wake up with something in reserve. Training becomes fuel, not punishment. You have energy left at the end of the day for the people who matter most. Your body is finally working with you, not against you.",
    icon: "🔥",
  },
  {
    id: "performing",
    from: "Performing",
    to: "Authentic",
    pillar: "mind",
    pain: "You've been playing a character for so long you've forgotten who you actually are. The strong one. The provider. The one who has it together. It's exhausting holding that mask up — especially when you're alone.",
    outcome: "You show up as yourself — fully. No mask, no performance, no armour. The men in your life respect you more for it. Your kids see a real man, not a role. And you finally feel at home in your own skin.",
    icon: "🪞",
  },
  {
    id: "isolated",
    from: "Isolated",
    to: "Brotherhood",
    pillar: "mind",
    pain: "You don't have men in your life who get it. The ones who will call you out and hold you up at the same time. You've been carrying this alone for years — and it's heavier than you let on.",
    outcome: "You have a brotherhood. Men who have done the same work, who hold the same standard, who will show up for you without judgment. This is the tribe you didn't know you were missing.",
    icon: "🤝",
  },
  {
    id: "weak",
    from: "Depleted",
    to: "Strong",
    pillar: "body",
    pain: "Your body doesn't feel like yours anymore. You've lost the physical edge that used to define you. Or you're training so hard you're breaking down instead of building up. Either way, you're not in the body you want to be in.",
    outcome: "You are physically strong in a way that serves your life — not just your ego. You train with purpose. You recover properly. Your body is a tool for presence and performance, not a punishment or a trophy.",
    icon: "💪",
  },
  {
    id: "shame",
    from: "Shame-Fuelled",
    to: "Purpose-Driven",
    pillar: "mind",
    pain: "Everything you do is driven by the fear of not being enough. The training, the achievement, the relentless pushing — it's all running on shame. And shame is a terrible fuel. It burns hot and leaves nothing behind.",
    outcome: "You move from a place of purpose, not fear. You train because you love your body. You show up because you love your family. You build because you have a mission. That's a fuel that never runs out.",
    icon: "🧭",
  },
  {
    id: "breath",
    from: "In Your Head",
    to: "Embodied",
    pillar: "system",
    pain: "You live entirely in your head. You've never been taught to use your breath, your body, or your nervous system as tools. You push through everything — and your body is keeping score in ways you can't see yet.",
    outcome: "You have tools that work in real time. Breathwork that shifts your state in minutes. Somatic practices that release what years of suppression have stored. You are finally in your body — and it changes everything.",
    icon: "🌬️",
  },
  {
    id: "disconnected",
    from: "Disconnected",
    to: "Connected",
    pillar: "system",
    pain: "Your relationship with your partner has become transactional. Your kids feel like obligations. You love them — but you can't feel it the way you want to. The connection you crave is right there and you can't reach it.",
    outcome: "You feel your love for your family in your body, not just your head. Your relationship deepens. Your kids feel chosen every single day. You become the emotional anchor your family has always needed.",
    icon: "❤️",
  },
  {
    id: "legacy",
    from: "Forgotten",
    to: "Unforgettable",
    pillar: "mind",
    pain: "You wonder what your kids will remember about you. Whether the sacrifices you made were worth it. Whether you'll look back and realise you missed the whole thing while you were busy building it.",
    outcome: "You become the father they talk about for the rest of their lives. Not because you were perfect — because you were present. Because you did the work. Because you chose them, every single day. That is your legacy.",
    icon: "⭐",
  },
];

// High-contrast pillar colours
const PILLAR_COLORS: Record<string, string> = {
  body: "#4ade80",    // bright green
  system: "#fbbf24",  // bright amber
  mind: "#818cf8",    // bright indigo
};

const PILLAR_BG: Record<string, string> = {
  body: "rgba(74,222,128,0.18)",
  system: "rgba(251,191,36,0.18)",
  mind: "rgba(129,140,248,0.18)",
};

const PILLARS = [
  { id: "body", label: "Strong Body", color: "#4ade80", angle: 270 },
  { id: "system", label: "Regulated System", color: "#fbbf24", angle: 30 },
  { id: "mind", label: "Unstoppable Mind", color: "#818cf8", angle: 150 },
];

export default function TransformationWheel() {
  const [activeNode, setActiveNode] = useState<TransformationNode | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isPaused) return;
    const animate = (time: number) => {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;
        setRotation((r) => (r + delta * 0.01) % 360);
      }
      lastTimeRef.current = time;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      lastTimeRef.current = 0;
    };
  }, [isPaused]);

  const handleNodeClick = useCallback((node: TransformationNode) => {
    setActiveNode(node);
    setIsPaused(true);
  }, []);

  const handleClose = useCallback(() => {
    setActiveNode(null);
    setIsPaused(false);
  }, []);

  const cx = 300;
  const cy = 300;
  const outerR = 228;
  const innerR = 128;
  const hubR = 70;
  const nodeR = 46;
  const pillarR = 38;

  return (
    <section className="py-24 md:py-36 bg-[#0a0a0f] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="amber-rule mb-6 block" />
          <p className="text-[#fbbf24] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
            The Transformation
          </p>
          <h2
            className="text-white font-display font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Everything that changes
            <br />
            <em className="text-[#fbbf24]">when you do the work.</em>
          </h2>
          <p className="text-gray-400 font-body font-light text-sm leading-relaxed">
            Click any node on the wheel to see where you are now — and exactly where you're going.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-center xl:items-start">
          {/* SVG Wheel */}
          <div
            className="relative flex-shrink-0 w-full max-w-[600px] mx-auto xl:mx-0"
            style={{ aspectRatio: "1/1" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { if (!activeNode) setIsPaused(false); }}
          >
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full"
            >
              <defs>
                <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="softglow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Dark background circle */}
              <circle cx={cx} cy={cy} r={outerR + 50} fill="#0d0d14" />

              {/* Orbit rings — clearly visible */}
              <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="#fbbf24" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="6 10" />
              <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="#fbbf24" strokeWidth="0.75" strokeOpacity="0.35" />
              <circle cx={cx} cy={cy} r={hubR + 18} fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.2" />

              {/* Hub ambient glow */}
              <circle cx={cx} cy={cy} r={hubR + 30} fill="url(#hubGrad)" />

              {/* Spoke lines */}
              {NODES.map((node, i) => {
                const angle = ((i / NODES.length) * 360 + rotation) * (Math.PI / 180);
                const nx = cx + outerR * Math.cos(angle);
                const ny = cy + outerR * Math.sin(angle);
                return (
                  <line key={`spoke-${node.id}`}
                    x1={cx} y1={cy} x2={nx} y2={ny}
                    stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.12"
                  />
                );
              })}

              {/* Inner pillar nodes */}
              {PILLARS.map((pillar) => {
                const angle = pillar.angle * (Math.PI / 180);
                const px = cx + innerR * Math.cos(angle);
                const py = cy + innerR * Math.sin(angle);
                return (
                  <g key={pillar.id}>
                    {/* Glow halo */}
                    <circle cx={px} cy={py} r={pillarR + 8} fill={pillar.color} fillOpacity="0.12" />
                    {/* Main circle */}
                    <circle cx={px} cy={py} r={pillarR}
                      fill="#1a1a2e"
                      stroke={pillar.color}
                      strokeWidth="2"
                      filter="url(#softglow)"
                    />
                    {/* Label line 1 */}
                    <text x={px} y={py - 7} textAnchor="middle"
                      fill={pillar.color} fontSize="9.5"
                      fontFamily="DM Sans, sans-serif" fontWeight="700"
                      letterSpacing="0.04em">
                      {pillar.label.split(" ")[0].toUpperCase()}
                    </text>
                    {/* Label line 2 */}
                    <text x={px} y={py + 7} textAnchor="middle"
                      fill={pillar.color} fontSize="9.5"
                      fontFamily="DM Sans, sans-serif" fontWeight="700"
                      letterSpacing="0.04em">
                      {pillar.label.split(" ").slice(1).join(" ").toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {/* Outer rotating nodes */}
              {NODES.map((node, i) => {
                const angle = ((i / NODES.length) * 360 + rotation) * (Math.PI / 180);
                const nx = cx + outerR * Math.cos(angle);
                const ny = cy + outerR * Math.sin(angle);
                const isActive = activeNode?.id === node.id;
                const isHovered = hoveredNode === node.id;
                const col = PILLAR_COLORS[node.pillar];
                const bg = PILLAR_BG[node.pillar];

                return (
                  <g key={node.id} style={{ cursor: "pointer" }}
                    onClick={() => handleNodeClick(node)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Active/hover outer ring */}
                    {(isActive || isHovered) && (
                      <circle cx={nx} cy={ny} r={nodeR + 12}
                        fill={col} fillOpacity="0.15"
                        filter="url(#glow)"
                      />
                    )}
                    {/* Node background */}
                    <circle cx={nx} cy={ny} r={nodeR}
                      fill={isActive ? bg : "#1a1a2e"}
                      stroke={col}
                      strokeWidth={isActive || isHovered ? "2.5" : "1.8"}
                      filter={isActive || isHovered ? "url(#softglow)" : undefined}
                    />
                    {/* Emoji icon */}
                    <text x={nx} y={ny - 10} textAnchor="middle"
                      fontSize="17" dominantBaseline="middle">
                      {node.icon}
                    </text>
                    {/* "From" — muted strikethrough-style */}
                    <text x={nx} y={ny + 7} textAnchor="middle"
                      fill="#888" fontSize="8"
                      fontFamily="DM Sans, sans-serif" fontWeight="400">
                      {node.from}
                    </text>
                    {/* Arrow */}
                    <text x={nx} y={ny + 18} textAnchor="middle"
                      fill={col} fontSize="8"
                      fontFamily="DM Sans, sans-serif">
                      ↓
                    </text>
                    {/* "To" — bright and bold */}
                    <text x={nx} y={ny + 30} textAnchor="middle"
                      fill={col} fontSize="9"
                      fontFamily="DM Sans, sans-serif" fontWeight="700"
                      letterSpacing="0.02em">
                      {node.to}
                    </text>
                  </g>
                );
              })}

              {/* Centre hub */}
              <circle cx={cx} cy={cy} r={hubR}
                fill="#111118"
                stroke="#fbbf24"
                strokeWidth="2.5"
                filter="url(#glow)"
              />
              <text x={cx} y={cy - 16} textAnchor="middle"
                fill="#fbbf24" fontSize="10"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="600" letterSpacing="0.12em">
                THE
              </text>
              <text x={cx} y={cy + 2} textAnchor="middle"
                fill="white" fontSize="12.5"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="700" letterSpacing="0.07em">
                UNFORGETTABLE
              </text>
              <text x={cx} y={cy + 20} textAnchor="middle"
                fill="#fbbf24" fontSize="10"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="600" letterSpacing="0.12em">
                MAN
              </text>
            </svg>
          </div>

          {/* Detail panel */}
          <div className="flex-1 min-w-0 w-full">
            {activeNode ? (
              <div className="bg-[#13131e] border border-[#2a2a3e] p-8 md:p-10 relative">
                <button onClick={handleClose}
                  className="absolute top-5 right-5 text-gray-500 hover:text-[#fbbf24] transition-colors duration-200 text-2xl leading-none font-light">
                  ×
                </button>

                {/* Pillar badge */}
                <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase font-body font-semibold mb-6 rounded-sm"
                  style={{
                    color: PILLAR_COLORS[activeNode.pillar],
                    border: `1.5px solid ${PILLAR_COLORS[activeNode.pillar]}`,
                    background: PILLAR_BG[activeNode.pillar],
                  }}>
                  {PILLARS.find((p) => p.id === activeNode.pillar)?.label}
                </span>

                {/* Transformation headline */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{activeNode.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-gray-500 font-body text-sm line-through">{activeNode.from}</span>
                      <span className="text-gray-400 text-sm">→</span>
                      <span className="font-display text-3xl font-semibold"
                        style={{ fontFamily: "var(--font-display)", color: PILLAR_COLORS[activeNode.pillar] }}>
                        {activeNode.to}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pain */}
                <div className="mb-8">
                  <p className="text-[#fbbf24] text-xs tracking-[0.25em] uppercase font-body font-semibold mb-3">
                    Where You Are Now
                  </p>
                  <p className="text-gray-300 font-body font-light leading-relaxed">
                    {activeNode.pain}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-[#2a2a3e]" />
                  <span className="text-[#fbbf24] text-xl">↓</span>
                  <div className="flex-1 h-px bg-[#2a2a3e]" />
                </div>

                {/* Outcome */}
                <div className="mb-10">
                  <p className="text-[#fbbf24] text-xs tracking-[0.25em] uppercase font-body font-semibold mb-3">
                    Where You're Going
                  </p>
                  <p className="text-white font-body font-light leading-relaxed">
                    {activeNode.outcome}
                  </p>
                </div>

                <a href="#apply"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#fbbf24] text-[#0a0a0f] text-sm tracking-widest uppercase font-body font-bold hover:bg-[#fcd34d] transition-all duration-300 group">
                  I Want This Transformation
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <p className="text-[#fbbf24] text-xs tracking-[0.3em] uppercase font-body font-semibold">
                    10 Transformations Available
                  </p>
                  <h3 className="text-white font-display text-3xl font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}>
                    Every node is a version of you
                    <br />
                    <em className="text-[#fbbf24]">waiting to be unlocked.</em>
                  </h3>
                  <p className="text-gray-400 font-body font-light leading-relaxed">
                    Click any area on the wheel to see where you are now, where you're going, and what becomes possible when you do the real work.
                  </p>

                  {/* Node grid */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {NODES.map((node) => (
                      <button key={node.id} onClick={() => handleNodeClick(node)}
                        className="flex items-center gap-3 px-3 py-3 border border-[#2a2a3e] hover:border-[#fbbf24] bg-[#13131e] hover:bg-[#1a1a2e] text-left transition-all duration-200 group">
                        <span className="text-xl flex-shrink-0">{node.icon}</span>
                        <div className="min-w-0">
                          <span className="text-gray-500 text-xs font-body block leading-none mb-1 line-through">{node.from}</span>
                          <span className="text-xs font-body font-bold block leading-none"
                            style={{ color: PILLAR_COLORS[node.pillar] }}>
                            {node.to}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pillar legend */}
        <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-[#2a2a3e]">
          {PILLARS.map((p) => (
            <div key={p.id} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: p.color }} />
              <span className="text-xs font-body font-medium tracking-wide" style={{ color: p.color }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
