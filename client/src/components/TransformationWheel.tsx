/*
 * TRANSFORMATION WHEEL — Interactive Sales Tool
 * Design: Dark Masculine Minimalism — charcoal bg, amber/gold accents
 * Interaction: Auto-rotating outer nodes, click to reveal pain→transformation panel
 * Structure: Centre hub (The Unforgettable Man) → Inner ring (3 pillars) → Outer ring (10 transformation areas)
 */

import { useState, useEffect, useRef, useCallback } from "react";

interface TransformationNode {
  id: string;
  from: string;      // The pain
  to: string;        // The transformation
  pillar: "body" | "system" | "mind";
  pain: string;      // Detailed pain description
  outcome: string;   // Detailed outcome description
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
    from: "Unaware",
    to: "Embodied",
    pillar: "system",
    pain: "You live entirely in your head. You've never been taught to use your breath, your body, or your nervous system as tools. You push through everything — and your body is keeping score in ways you can't see yet.",
    outcome: "You have tools that work in real time. Breathwork that shifts your state in minutes. Somatic practices that release what years of suppression have stored. You are finally in your body — and it changes everything.",
    icon: "🌬️",
  },
  {
    id: "disconnected",
    from: "Disconnected",
    to: "Deeply Connected",
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

const PILLARS = [
  { id: "body", label: "Strong Body", color: "oklch(0.65 0.14 145)", angle: 270 },
  { id: "system", label: "Regulated System", color: "oklch(0.72 0.12 75)", angle: 30 },
  { id: "mind", label: "Unstoppable Mind", color: "oklch(0.68 0.10 260)", angle: 150 },
];

const PILLAR_COLORS: Record<string, string> = {
  body: "oklch(0.65 0.14 145)",
  system: "oklch(0.72 0.12 75)",
  mind: "oklch(0.68 0.10 260)",
};

export default function TransformationWheel() {
  const [activeNode, setActiveNode] = useState<TransformationNode | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const animate = (time: number) => {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;
        setRotation((r) => (r + delta * 0.012) % 360);
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

  // Wheel dimensions
  const cx = 300;
  const cy = 300;
  const outerR = 230;
  const innerR = 130;
  const hubR = 72;
  const nodeR = 44;
  const pillarNodeR = 36;

  return (
    <section className="py-24 md:py-36 bg-[oklch(0.08_0.005_285)] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="amber-rule mb-6 block" />
          <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
            The Transformation
          </p>
          <h2
            className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Everything that changes
            <br />
            <em className="text-[oklch(0.72_0.12_75)]">when you do the work.</em>
          </h2>
          <p className="text-[oklch(0.55_0.01_75)] font-body font-light text-sm leading-relaxed">
            Click any area to see where you are now — and where you're going.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-center xl:items-start">
          {/* Wheel */}
          <div
            className="relative flex-shrink-0"
            style={{ width: 600, height: 600 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { if (!activeNode) setIsPaused(false); }}
          >
            <svg
              width={600}
              height={600}
              viewBox="0 0 600 600"
              className="w-full h-full"
              style={{ maxWidth: 600 }}
            >
              {/* Ambient glow rings */}
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.72 0.12 75)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="oklch(0.72 0.12 75)" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.72 0.12 75)" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="oklch(0.72 0.12 75)" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="strongGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background glow */}
              <circle cx={cx} cy={cy} r={outerR + 40} fill="url(#bgGlow)" />

              {/* Orbit rings */}
              <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="oklch(0.72 0.12 75 / 0.08)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="oklch(0.72 0.12 75 / 0.12)" strokeWidth="1" />
              <circle cx={cx} cy={cy} r={hubR + 20} fill="none" stroke="oklch(0.72 0.12 75 / 0.06)" strokeWidth="1" />

              {/* Spoke lines from hub to outer nodes */}
              {NODES.map((node, i) => {
                const angle = ((i / NODES.length) * 360 + rotation) * (Math.PI / 180);
                const nx = cx + outerR * Math.cos(angle);
                const ny = cy + outerR * Math.sin(angle);
                return (
                  <line
                    key={`spoke-${node.id}`}
                    x1={cx} y1={cy}
                    x2={nx} y2={ny}
                    stroke="oklch(0.72 0.12 75 / 0.06)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Pillar nodes (inner ring — static) */}
              {PILLARS.map((pillar) => {
                const angle = pillar.angle * (Math.PI / 180);
                const px = cx + innerR * Math.cos(angle);
                const py = cy + innerR * Math.sin(angle);
                return (
                  <g key={pillar.id}>
                    <circle
                      cx={px} cy={py} r={pillarNodeR}
                      fill={`${pillar.color.replace("oklch(", "oklch(").replace(")", " / 0.15)")}`}
                      stroke={pillar.color}
                      strokeWidth="1.5"
                      filter="url(#glow)"
                    />
                    <text
                      x={px} y={py - 6}
                      textAnchor="middle"
                      fill={pillar.color}
                      fontSize="9"
                      fontFamily="DM Sans, sans-serif"
                      fontWeight="600"
                      letterSpacing="0.05em"
                    >
                      {pillar.label.split(" ")[0].toUpperCase()}
                    </text>
                    <text
                      x={px} y={py + 7}
                      textAnchor="middle"
                      fill={pillar.color}
                      fontSize="9"
                      fontFamily="DM Sans, sans-serif"
                      fontWeight="600"
                      letterSpacing="0.05em"
                    >
                      {pillar.label.split(" ").slice(1).join(" ").toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {/* Outer transformation nodes (rotating) */}
              {NODES.map((node, i) => {
                const angle = ((i / NODES.length) * 360 + rotation) * (Math.PI / 180);
                const nx = cx + outerR * Math.cos(angle);
                const ny = cy + outerR * Math.sin(angle);
                const isActive = activeNode?.id === node.id;
                const isHovered = hoveredNode === node.id;
                const color = PILLAR_COLORS[node.pillar];

                return (
                  <g
                    key={node.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNodeClick(node)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Outer glow when active */}
                    {(isActive || isHovered) && (
                      <circle
                        cx={nx} cy={ny} r={nodeR + 10}
                        fill={color.replace(")", " / 0.15)")}
                        filter="url(#strongGlow)"
                      />
                    )}
                    {/* Node circle */}
                    <circle
                      cx={nx} cy={ny} r={nodeR}
                      fill={isActive
                        ? color.replace(")", " / 0.3)")
                        : "oklch(0.14 0.005 285)"}
                      stroke={isActive || isHovered ? color : "oklch(0.28 0.005 285)"}
                      strokeWidth={isActive ? "2" : "1.5"}
                      filter={isActive ? "url(#glow)" : undefined}
                    />
                    {/* Icon */}
                    <text
                      x={nx} y={ny - 8}
                      textAnchor="middle"
                      fontSize="16"
                      dominantBaseline="middle"
                    >
                      {node.icon}
                    </text>
                    {/* "From" label */}
                    <text
                      x={nx} y={ny + 8}
                      textAnchor="middle"
                      fill="oklch(0.55 0.01 75)"
                      fontSize="7.5"
                      fontFamily="DM Sans, sans-serif"
                      fontWeight="400"
                      letterSpacing="0.03em"
                    >
                      {node.from}
                    </text>
                    {/* Arrow */}
                    <text
                      x={nx} y={ny + 18}
                      textAnchor="middle"
                      fill={color}
                      fontSize="7"
                      fontFamily="DM Sans, sans-serif"
                    >
                      →
                    </text>
                    {/* "To" label */}
                    <text
                      x={nx} y={ny + 28}
                      textAnchor="middle"
                      fill={color}
                      fontSize="7.5"
                      fontFamily="DM Sans, sans-serif"
                      fontWeight="600"
                      letterSpacing="0.03em"
                    >
                      {node.to}
                    </text>
                  </g>
                );
              })}

              {/* Hub glow */}
              <circle cx={cx} cy={cy} r={hubR + 16} fill="url(#hubGlow)" />

              {/* Centre hub */}
              <circle
                cx={cx} cy={cy} r={hubR}
                fill="oklch(0.12 0.005 285)"
                stroke="oklch(0.72 0.12 75)"
                strokeWidth="2"
                filter="url(#glow)"
              />
              <text
                x={cx} y={cy - 14}
                textAnchor="middle"
                fill="oklch(0.72 0.12 75)"
                fontSize="11"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="600"
                letterSpacing="0.08em"
              >
                THE
              </text>
              <text
                x={cx} y={cy + 4}
                textAnchor="middle"
                fill="oklch(0.95 0.01 75)"
                fontSize="13"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="700"
                letterSpacing="0.06em"
              >
                UNFORGETTABLE
              </text>
              <text
                x={cx} y={cy + 20}
                textAnchor="middle"
                fill="oklch(0.72 0.12 75)"
                fontSize="11"
                fontFamily="Cormorant Garamond, Georgia, serif"
                fontWeight="600"
                letterSpacing="0.08em"
              >
                MAN
              </text>
            </svg>
          </div>

          {/* Detail panel */}
          <div className="flex-1 min-w-0">
            {activeNode ? (
              <div className="bg-[oklch(0.13_0.005_285)] border border-[oklch(0.22_0.005_285)] p-8 md:p-10 relative">
                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 text-[oklch(0.4_0.01_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors duration-200 text-xl leading-none"
                >
                  ×
                </button>

                {/* Pillar tag */}
                <span
                  className="inline-block px-3 py-1 text-xs tracking-widest uppercase font-body font-medium mb-6"
                  style={{
                    color: PILLAR_COLORS[activeNode.pillar],
                    border: `1px solid ${PILLAR_COLORS[activeNode.pillar]}`,
                    background: `${PILLAR_COLORS[activeNode.pillar].replace(")", " / 0.1)")}`,
                  }}
                >
                  {PILLARS.find((p) => p.id === activeNode.pillar)?.label}
                </span>

                {/* Transformation headline */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{activeNode.icon}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[oklch(0.5_0.01_75)] font-body text-sm line-through">{activeNode.from}</span>
                      <span className="text-[oklch(0.72_0.12_75)] text-sm">→</span>
                      <span
                        className="font-display text-2xl font-semibold"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: PILLAR_COLORS[activeNode.pillar],
                        }}
                      >
                        {activeNode.to}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pain */}
                <div className="mb-8">
                  <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.25em] uppercase font-body font-medium mb-3">
                    Where You Are Now
                  </p>
                  <p className="text-[oklch(0.65_0.01_75)] font-body font-light leading-relaxed">
                    {activeNode.pain}
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-[oklch(0.2_0.005_285)]" />
                  <span className="text-[oklch(0.72_0.12_75)] text-lg">↓</span>
                  <div className="flex-1 h-px bg-[oklch(0.2_0.005_285)]" />
                </div>

                {/* Outcome */}
                <div className="mb-10">
                  <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.25em] uppercase font-body font-medium mb-3">
                    Where You're Going
                  </p>
                  <p className="text-[oklch(0.82_0.01_75)] font-body font-light leading-relaxed">
                    {activeNode.outcome}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300 group"
                >
                  I Want This Transformation
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            ) : (
              /* Default state — prompt to click */
              <div className="h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium">
                    10 Transformations Available
                  </p>
                  <h3
                    className="text-[oklch(0.95_0.01_75)] font-display text-3xl font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Every node is a version of you
                    <br />
                    <em className="text-[oklch(0.72_0.12_75)]">waiting to be unlocked.</em>
                  </h3>
                  <p className="text-[oklch(0.55_0.01_75)] font-body font-light leading-relaxed">
                    Click any area on the wheel to see where you are now, where you're going, and what becomes possible when you do the real work.
                  </p>

                  {/* Node list preview */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {NODES.map((node) => (
                      <button
                        key={node.id}
                        onClick={() => handleNodeClick(node)}
                        className="flex items-center gap-2 px-3 py-2 border border-[oklch(0.2_0.005_285)] hover:border-[oklch(0.72_0.12_75/0.4)] text-left transition-all duration-200 group"
                      >
                        <span className="text-base flex-shrink-0">{node.icon}</span>
                        <div className="min-w-0">
                          <span className="text-[oklch(0.5_0.01_75)] text-xs font-body block leading-none mb-0.5 line-through">{node.from}</span>
                          <span
                            className="text-xs font-body font-medium block leading-none"
                            style={{ color: PILLAR_COLORS[node.pillar] }}
                          >
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
      </div>
    </section>
  );
}
