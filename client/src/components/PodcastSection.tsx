const PODCAST_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/podcast-bg-dY4uxkcUG22PH8KhztTvTf.webp";

const recentEpisodes = [
  { ep: "Ep 43", title: "Why Your Nervous System Is Sabotaging Your Fatherhood" },
  { ep: "Ep 42", title: "The Discipline Trap: When Willpower Becomes the Problem" },
  { ep: "Ep 41", title: "Presence Over Performance — The Dad Your Kids Actually Need" },
  { ep: "Ep 40", title: "Breathwork for Busy Dads: A 10-Minute Protocol That Works" },
  { ep: "Ep 39", title: "The Identity Shift That Changes Everything" },
];

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-24 md:py-36 bg-[oklch(0.12_0.005_285)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — copy */}
          <div>
            <span className="amber-rule mb-6 block" />
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-4">
              The Reset Podcast
            </p>
            <h2
              className="text-[oklch(0.95_0.01_75)] font-display font-semibold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              A daily episode
              <br />
              <em className="text-[oklch(0.72_0.12_75)]">for the man who is ready to reset.</em>
            </h2>
            <p className="text-[oklch(0.65_0.01_75)] font-body font-light leading-relaxed mb-8">
              Every day, Shaun publishes a raw, unfiltered conversation about the things most men's coaches won't touch — nervous system regulation, emotional intelligence, presence, fatherhood, and the philosophy of becoming unforgettable. 43 episodes and counting.
            </p>

            {/* Platform links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Spotify", "Apple Podcasts", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-4 py-2 border border-[oklch(0.22_0.005_285)] text-[oklch(0.6_0.01_75)] text-xs tracking-widest uppercase font-body hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.72_0.12_75)] transition-all duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>

            {/* Recent episodes */}
            <div className="space-y-px">
              {recentEpisodes.map((ep) => (
                <div
                  key={ep.ep}
                  className="flex items-center gap-4 py-4 border-b border-[oklch(0.18_0.005_285)] group cursor-pointer hover:border-[oklch(0.72_0.12_75/0.3)] transition-all duration-300"
                >
                  <span className="text-[oklch(0.4_0.01_75)] text-xs font-body tracking-widest uppercase w-12 flex-shrink-0">
                    {ep.ep}
                  </span>
                  <span className="text-[oklch(0.75_0.01_75)] text-sm font-body group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300 flex-1">
                    {ep.title}
                  </span>
                  <span className="text-[oklch(0.4_0.01_75)] group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <img
              src={PODCAST_BG}
              alt="The Reset Podcast"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 bg-[oklch(0.1_0.005_285/0.95)] border border-[oklch(0.72_0.12_75/0.3)] px-5 py-4">
              <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.25em] uppercase font-body font-medium mb-1">
                Daily Episodes
              </p>
              <p
                className="text-[oklch(0.95_0.01_75)] font-display text-2xl font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The Reset
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
