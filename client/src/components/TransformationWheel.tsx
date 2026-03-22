/*
 * TRANSFORMATION WHEEL — Interactive Sales Tool
 * Brand-aligned: amber/gold palette only — no green, no purple
 * Larger nodes, larger text, fully readable
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
    id: "depleted",
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

// Brand-aligned colour tiers — all amber/gold/warm
// Gold bright: #F5C842  Gold mid: #D4A017  Gold dim: #A07810  Cream: #F0E6C8  Warm white: #FFF8EC
const PILLAR_COLORS: Record<string, { stroke: string; text: string; bg: string; dim: string }> = {
  body:   { stroke: "#F5C842", text: "#F5C842", bg: "rgba(245,200,66,0.14)",  dim: "#A07810" },
  system: { stroke: "#E8A020", text: "#E8A020", bg: "rgba(232,160,32,0.14)",  dim: "#8B5E10" },
  mind:   { stroke: "#D4896A", text: "#D4896A", bg: "rgba(212,137,106,0.14)", dim: "#8B4A2A" },
};

const PILLARS = [
  { id: "body",   label: "Strong Body",        angle: 270 },
  { id: "system", label: "Regulated System",   angle: 30  },
  { id: "mind",   label: "Unstoppable Mind",   angle: 150 },
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
        setRotation((r) => (r + delta * 0.009) % 360);
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
  const outerR = 230;
  const innerR = 128;
  const hubR = 72;
  const nodeR = 50;
  const pillarR = 42;

  return (
    <section className="py-24 md:py-36 bg-[#0c0c10] overflow-hidden">
      <div className="container">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="w-12 h-0.5 bg-[#F5C842] mb-6" />
          <p className="text-[#F5C842] text-xs tracking-[0.3em] uppercase font-body font-semibold mb-4">
            The Transformation
          </p>
          <h2 className="text-white font-display font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}>
            Everything that changes
            <br />
            <em className="text-[#F5C842]">when you do the work.</em>
          </h2>
          <p className="text-[#b0a090] font-body text-base leading-relaxed">
            Click any node on the wheel to see where you are now — and exactly where you're going.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* SVG Wheel */}
          <div
            className="relative flex-shrink-0 w-full xl:w-[600px]"
            style={{ aspectRatio: "1/1", maxWidth: 600 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { if (!activeNode) setIsPaused(false); }}
          >
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <defs>
                <radialGradient id="hubGrad2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F5C842" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#F5C842" stopOpacity="0" />
                </radialGradient>
                <filter id="glow2">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="softglow2">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Background disc */}
              <circle cx={cx} cy={cy} r={outerR + 55} fill="#0e0e14" />

              {/* Orbit rings */}
              <circle cx={cx} cy={cy} r={outerR}  fill="none" stroke="#F5C842" strokeWidth="1"   strokeOpacity="0.22" strokeDasharray="5 9" />
              <circle cx={cx} cy={cy} r={innerR}  fill="none" stroke="#F5C842" strokeWidth="1"   strokeOpacity="0.3" />
              <circle cx={cx} cy={cy} r={hubR+20} fill="none" stroke="#F5C842" strokeWidth="0.5" strokeOpacity="0.15" />

              {/* Hub ambient glow */}
              <circle cx={cx} cy={cy} r={hubR + 35} fill="url(#hubGrad2)" />

              {/* Spokes */}
              {NODES.map((node, i) => {
                const angle = ((i / NODES.length) * 360 + rotation) * (Math.PI / 180);
                const nx = cx + outerR * Math.cos(angle);
                const ny = cy + outerR * Math.sin(angle);
                return (
                  <line key={`spoke-${node.id}`}
                    x1={cx} y1={cy} x2={nx} y2={ny}
                    stroke="#F5C842" strokeWidth="0.5" strokeOpacity="0.1" />
                );
              })}

              {/* Inner pillar nodes */}
              {PILLARS.map((pillar) => {
                const pal = PILLAR_COLORS[pillar.id];
                const angle = pillar.angle * (Math.PI / 180);
                const px = cx + innerR * Math.cos(angle);
                const py = cy + innerR * Math.sin(angle);
                const words = pillar.label.split(" ");
                return (
                  <g key={pillar.id}>
                    <circle cx={px} cy={py} r={pillarR + 10} fill={pal.stroke} fillOpacity="0.1" />
                    <circle cx={px} cy={py} r={pillarR}
                      fill="#1c1a14"
                      stroke={pal.stroke}
                      strokeWidth="2"
                      filter="url(#softglow2)"
                    />
                    {words.length === 2 ? (
                      <>
                        <text x={px} y={py - 6} textAnchor="middle"
                          fill={pal.text} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.05em">
                          {words[0].toUpperCase()}
                        </text>
                        <text x={px} y={py + 8} textAnchor="middle"
                          fill={pal.text} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.05em">
                          {words[1].toUpperCase()}
                        </text>
                      </>
                    ) : (
                      <>
                        <text x={px} y={py - 8} textAnchor="middle"
                          fill={pal.text} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.05em">
                          {words[0].toUpperCase()}
                        </text>
                        <text x={px} y={py + 4} textAnchor="middle"
                          fill={pal.text} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.05em">
                          {words[1].toUpperCase()}
                        </text>
                        <text x={px} y={py + 16} textAnchor="middle"
                          fill={pal.text} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.05em">
                          {words[2].toUpperCase()}
                        </text>
                      </>
                    )}
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
                const pal = PILLAR_COLORS[node.pillar];

                return (
                  <g key={node.id} style={{ cursor: "pointer" }}
                    onClick={() => handleNodeClick(node)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {(isActive || isHovered) && (
                      <circle cx={nx} cy={ny} r={nodeR + 14}
                        fill={pal.stroke} fillOpacity="0.18"
                        filter="url(#glow2)" />
                    )}
                    <circle cx={nx} cy={ny} r={nodeR}
                      fill={isActive ? pal.bg : "#1a1810"}
                      stroke={pal.stroke}
                      strokeWidth={isActive || isHovered ? "2.5" : "1.8"}
                      filter={isActive || isHovered ? "url(#softglow2)" : undefined}
                    />
                    {/* Emoji */}
                    <text x={nx} y={ny - 12} textAnchor="middle"
                      fontSize="18" dominantBaseline="middle">
                      {node.icon}
                    </text>
                    {/* From — muted */}
                    <text x={nx} y={ny + 8} textAnchor="middle"
                      fill="#6b5e4a" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="400">
                      {node.from}
                    </text>
                    {/* Arrow */}
                    <text x={nx} y={ny + 20} textAnchor="middle"
                      fill={pal.stroke} fontSize="9" fontFamily="DM Sans, sans-serif">
                      ↓
                    </text>
                    {/* To — bright and bold */}
                    <text x={nx} y={ny + 33} textAnchor="middle"
                      fill={pal.text} fontSize="10.5" fontFamily="DM Sans, sans-serif" fontWeight="800"
                      letterSpacing="0.02em">
                      {node.to}
                    </text>
                  </g>
                );
              })}

              {/* Centre hub */}
              <circle cx={cx} cy={cy} r={hubR}
                fill="#131108"
                stroke="#F5C842"
                strokeWidth="2.5"
                filter="url(#glow2)"
              />
              <text x={cx} y={cy - 18} textAnchor="middle"
                fill="#F5C842" fontSize="11"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="600" letterSpacing="0.14em">
                THE
              </text>
              <text x={cx} y={cy + 2} textAnchor="middle"
                fill="#FFF8EC" fontSize="13"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="700" letterSpacing="0.07em">
                UNFORGETTABLE
              </text>
              <text x={cx} y={cy + 22} textAnchor="middle"
                fill="#F5C842" fontSize="11"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="600" letterSpacing="0.14em">
                MAN
              </text>
            </svg>
          </div>

          {/* Detail / default panel */}
          <div className="flex-1 min-w-0 w-full xl:pt-4">
            {activeNode ? (
              <div className="bg-[#141210] border border-[#2e2a20] p-8 md:p-10 relative">
                <button onClick={handleClose}
                  className="absolute top-5 right-5 text-[#5a5040] hover:text-[#F5C842] transition-colors duration-200 text-2xl leading-none font-light">
                  ×
                </button>

                {/* Pillar badge */}
                <span className="inline-block px-3 py-1.5 text-xs tracking-widest uppercase font-body font-bold mb-6"
                  style={{
                    color: PILLAR_COLORS[activeNode.pillar].text,
                    border: `1.5px solid ${PILLAR_COLORS[activeNode.pillar].stroke}`,
                    background: PILLAR_COLORS[activeNode.pillar].bg,
                  }}>
                  {PILLARS.find((p) => p.id === activeNode.pillar)?.label}
                </span>

                {/* Headline */}
                <div className="flex items-center gap-5 mb-8">
                  <span className="text-5xl flex-shrink-0">{activeNode.icon}</span>
                  <div>
                    <span className="text-[#5a5040] font-body text-sm line-through block mb-1">{activeNode.from}</span>
                    <span className="font-display text-3xl md:text-4xl font-semibold block"
                      style={{ fontFamily: "var(--font-display)", color: PILLAR_COLORS[activeNode.pillar].text }}>
                      {activeNode.to}
                    </span>
                  </div>
                </div>

                {/* Pain */}
                <div className="mb-8">
                  <p className="text-[#F5C842] text-xs tracking-[0.3em] uppercase font-body font-bold mb-3">
                    Where You Are Now
                  </p>
                  <p className="text-[#c0b09a] font-body text-base leading-relaxed">
                    {activeNode.pain}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-[#2e2a20]" />
                  <span className="text-[#F5C842] text-xl">↓</span>
                  <div className="flex-1 h-px bg-[#2e2a20]" />
                </div>

                {/* Outcome */}
                <div className="mb-10">
                  <p className="text-[#F5C842] text-xs tracking-[0.3em] uppercase font-body font-bold mb-3">
                    Where You're Going
                  </p>
                  <p className="text-[#f0e8d8] font-body text-base leading-relaxed">
                    {activeNode.outcome}
                  </p>
                </div>

                <a href="#apply"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#F5C842] text-[#0c0c10] text-sm tracking-widest uppercase font-body font-bold hover:bg-[#fcd96a] transition-all duration-300 group">
                  I Want This Transformation
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-[#F5C842] text-xs tracking-[0.3em] uppercase font-body font-bold">
                  10 Transformations Available
                </p>
                <h3 className="text-white font-display text-3xl md:text-4xl font-semibold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Every node is a version of you
                  <br />
                  <em className="text-[#F5C842]">waiting to be unlocked.</em>
                </h3>
                <p className="text-[#b0a090] font-body text-base leading-relaxed">
                  Click any area on the wheel to see where you are now, where you're going, and what becomes possible when you do the real work.
                </p>

                {/* Node grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {NODES.map((node) => (
                    <button key={node.id} onClick={() => handleNodeClick(node)}
                      className="flex items-center gap-3 px-4 py-3 border border-[#2e2a20] hover:border-[#F5C842] bg-[#141210] hover:bg-[#1c1a10] text-left transition-all duration-200">
                      <span className="text-xl flex-shrink-0">{node.icon}</span>
                      <div className="min-w-0">
                        <span className="text-[#5a5040] text-xs font-body block leading-none mb-1 line-through">{node.from}</span>
                        <span className="text-sm font-body font-bold block leading-none"
                          style={{ color: PILLAR_COLORS[node.pillar].text }}>
                          {node.to}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pillar legend */}
        <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[#2e2a20]">
          {PILLARS.map((p) => (
            <div key={p.id} className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: PILLAR_COLORS[p.id].stroke }} />
              <span className="text-sm font-body font-medium"
                style={{ color: PILLAR_COLORS[p.id].text }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
