/*
 * PODCAST SECTION — AItechadvisory style
 * Navy bg, Syne headings, indigo/cyan accents, Plus Jakarta Sans body
 */

const PODCAST_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/podcast-bg-dY4uxkcUG22PH8KhztTvTf.webp";

const recentEpisodes = [
  { ep: "Ep 43", title: "Why Your Nervous System Is Sabotaging Your Fatherhood" },
  { ep: "Ep 42", title: "The Discipline Trap: When Willpower Becomes the Problem" },
  { ep: "Ep 41", title: "Presence Over Performance — The Dad Your Kids Actually Need" },
  { ep: "Ep 40", title: "Breathwork for Busy Dads: A 10-Minute Protocol That Works" },
  { ep: "Ep 39", title: "The Identity Shift That Changes Everything" },
];

const platforms = ["Spotify", "Apple Podcasts", "YouTube"];

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-24 md:py-32" style={{ background: "#0A0A20" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — copy */}
          <div>
            <span className="section-tag mb-6 inline-flex">
              <span style={{ color: "#06B6D4" }}>✦</span>
              The Reset Podcast
            </span>
            <h2
              className="text-white font-bold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              A daily episode
              <br />
              <span style={{ color: "#22D3EE" }}>for the man who is ready to reset.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", lineHeight: 1.75, marginBottom: "2rem" }}>
              Every day, Shaun publishes a raw, unfiltered conversation about the things most men's coaches won't touch — nervous system regulation, emotional intelligence, presence, fatherhood, and the philosophy of becoming unforgettable. 43 episodes and counting.
            </p>

            {/* Platform links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {platforms.map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-4 py-2 rounded-lg text-xs tracking-widest uppercase font-bold transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "#0F0F2A",
                    border: "1px solid rgba(6,182,212,0.25)",
                    color: "#64748B",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#06B6D4";
                    (e.currentTarget as HTMLElement).style.color = "#22D3EE";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.25)";
                    (e.currentTarget as HTMLElement).style.color = "#64748B";
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>

            {/* Recent episodes */}
            <div>
              {recentEpisodes.map((ep, i) => (
                <div
                  key={ep.ep}
                  className="flex items-center gap-4 py-4 cursor-pointer group transition-all duration-200"
                  style={{ borderBottom: i < recentEpisodes.length - 1 ? "1px solid rgba(30,30,63,0.8)" : "none" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                  }}
                >
                  <span
                    className="text-xs tracking-widest uppercase font-bold w-12 flex-shrink-0"
                    style={{ fontFamily: "var(--font-body)", color: "#334155" }}
                  >
                    {ep.ep}
                  </span>
                  <span
                    className="text-sm flex-1 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)", color: "#CBD5E1" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#22D3EE")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#CBD5E1")}
                  >
                    {ep.title}
                  </span>
                  <span style={{ color: "#334155" }}>→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <img
              src={PODCAST_BG}
              alt="The Reset Podcast"
              className="w-full object-cover rounded-xl"
              style={{ aspectRatio: "4/3" }}
            />
            {/* Badge */}
            <div
              className="absolute bottom-5 left-5 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(9,9,31,0.92)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(6,182,212,0.3)",
              }}
            >
              <p
                className="text-xs tracking-[0.25em] uppercase font-bold mb-1"
                style={{ fontFamily: "var(--font-body)", color: "#22D3EE" }}
              >
                Daily Episodes
              </p>
              <p
                className="font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#F1F5F9", fontSize: "1.5rem", letterSpacing: "-0.01em" }}
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
