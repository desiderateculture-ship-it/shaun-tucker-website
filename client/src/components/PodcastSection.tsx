/*
 * PODCAST SECTION — Dynamic RSS-powered
 * Pulls live episodes from Riverside RSS feed.
 * Features: native audio player, episode list, platform links, SEO structured data, lazy loading.
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RSS_FEED_URL = "https://api.riverside.fm/hosting/bu3Fo09E.rss";
// Server-side proxy via Netlify function — no CORS issues
const NETLIFY_RSS_PROXY = "/.netlify/functions/podcast-rss";
const SPOTIFY_SHOW = "https://open.spotify.com/show/5UGmVcLqkr75dePECxDC3C";
const APPLE_PODCASTS = "https://podcasts.apple.com/podcast/id1852353417";
const RIVERSIDE_URL = "https://shauntucker.riverside.com/";
const PODCAST_ARTWORK = "https://hosting-media.rs-prod.riverside.fm/media/podcasts/99538340-aba0-43fe-84b3-dd6725bc5a70/logos/3890eee3-1721-45af-923d-22c39f25b15a.png";

interface Episode {
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  audioUrl: string;
  guid: string;
  image: string;
  episodeNumber: string;
}

function parseDuration(raw: string): string {
  if (!raw) return "";
  const parts = raw.split(":").map(Number);
  if (parts.length === 3) {
    const [h, m, s] = parts;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m ${s}s`;
  }
  if (parts.length === 2) {
    const [m, s] = parts;
    return `${m}m ${s}s`;
  }
  return raw;
}

function formatDate(raw: string): string {
  try {
    const d = new Date(raw);
    return d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return raw;
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim();
}

function parseRSS(xml: string): Episode[] {
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];
  return items.map((item) => {
    const get = (tag: string) => {
      const m = item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i"))
        || item.match(new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`, "i"));
      return m ? m[1].trim() : "";
    };
    const enclosure = item.match(/<enclosure[^>]+url="([^"]+)"/i);
    const imgMatch = item.match(/<itunes:image\s+href="([^"]+)"/i);
    const epNumMatch = item.match(/<itunes:episode>(\d+)<\/itunes:episode>/i);
    const titleRaw = get("title") || get("itunes:title");
    // Extract episode number from title if not in tag (e.g. "43. Title")
    const titleNumMatch = titleRaw.match(/^(\d+)\.\s*/);
    const epNum = epNumMatch ? epNumMatch[1] : (titleNumMatch ? titleNumMatch[1] : "");
    const cleanTitle = titleRaw.replace(/^\d+\.\s*/, "");
    return {
      title: cleanTitle,
      description: stripHtml(get("description") || get("itunes:summary")),
      pubDate: get("pubDate"),
      duration: parseDuration(get("itunes:duration")),
      audioUrl: enclosure ? enclosure[1] : "",
      guid: get("guid"),
      image: imgMatch ? imgMatch[1] : PODCAST_ARTWORK,
      episodeNumber: epNum,
    };
  });
}

// Inject JSON-LD structured data for SEO
function injectStructuredData(episodes: Episode[]) {
  const existing = document.getElementById("podcast-jsonld");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = "podcast-jsonld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "The Reset with Shaun Tucker",
    "description": "A daily podcast about nervous system regulation, emotional intelligence, presence, fatherhood, and the philosophy of becoming unforgettable.",
    "url": RIVERSIDE_URL,
    "image": PODCAST_ARTWORK,
    "author": { "@type": "Person", "name": "Shaun Tucker" },
    "episode": episodes.slice(0, 10).map((ep) => ({
      "@type": "PodcastEpisode",
      "name": ep.title,
      "description": ep.description.slice(0, 200),
      "datePublished": ep.pubDate,
      "associatedMedia": { "@type": "MediaObject", "contentUrl": ep.audioUrl },
    })),
  });
  document.head.appendChild(script);
}

const platforms = [
  { label: "Spotify", url: SPOTIFY_SHOW, color: "#1DB954" },
  { label: "Apple Podcasts", url: APPLE_PODCASTS, color: "#FC3C44" },
  { label: "Riverside", url: RIVERSIDE_URL, color: "#06B6D4" },
];

export default function PodcastSection() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [playerVisible, setPlayerVisible] = useState(false);

  // Lazy-load: only fetch RSS when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPlayerVisible(true); },
      { rootMargin: "200px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playerVisible) return;
        const fetchFeed = async () => {
      try {
        // Use Netlify serverless function as server-side proxy (no CORS issues)
        let xml = "";
        try {
          const res = await fetch(NETLIFY_RSS_PROXY, { cache: "no-store" });
          if (res.ok) xml = await res.text();
        } catch {
          // fallback: try direct fetch (works in dev)
        }
        // Dev fallback: direct fetch
        if (!xml) {
          const res = await fetch(RSS_FEED_URL, { cache: "no-store" });
          if (res.ok) xml = await res.text();
        }
        if (!xml) throw new Error("No RSS data");
        const eps = parseRSS(xml);
        setEpisodes(eps);
        injectStructuredData(eps);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchFeed();
  }, [playerVisible]);

  const activeEp = episodes[activeIndex];

  // Audio controls
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); setIsPlaying(false); }
    else { audio.play(); setIsPlaying(true); }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };
  const handleEnded = () => {
    setIsPlaying(false);
    if (activeIndex < episodes.length - 1) {
      setActiveIndex((i) => i + 1);
    }
  };
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setCurrentTime(t);
  };

  // When active episode changes, reset and autoplay if was playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeEp) return;
    const wasPlaying = isPlaying;
    audio.pause();
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    if (wasPlaying) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(false);
    }
  }, [activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const VISIBLE_EPISODES = 8;

  return (
    <section
      id="podcast"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "#0A0A20" }}
      aria-label="The Reset Podcast"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT — Copy + Episode List */}
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
              Every day, Shaun publishes a raw, unfiltered conversation about the things most men's coaches won't touch — nervous system regulation, emotional intelligence, presence, fatherhood, and the philosophy of becoming unforgettable.
            </p>

            {/* Platform links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {platforms.map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs tracking-widest uppercase font-bold transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "#0F0F2A",
                    border: "1px solid rgba(6,182,212,0.25)",
                    color: "#64748B",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = p.color;
                    (e.currentTarget as HTMLElement).style.color = p.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.25)";
                    (e.currentTarget as HTMLElement).style.color = "#64748B";
                  }}
                >
                  {p.label}
                </a>
              ))}
            </div>

            {/* Episode list */}
            {loading && (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-14 rounded-lg animate-pulse" style={{ background: "rgba(30,30,63,0.5)" }} />
                ))}
              </div>
            )}
            {error && (
              <p style={{ color: "#64748B", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
                Unable to load episodes right now.{" "}
                <a href={RIVERSIDE_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#22D3EE" }}>
                  Listen on Riverside →
                </a>
              </p>
            )}
            {!loading && !error && episodes.length > 0 && (
              <div>
                {episodes.slice(0, VISIBLE_EPISODES).map((ep, i) => (
                  <div key={ep.guid}>
                    <button
                      className="w-full flex items-center gap-4 py-4 text-left transition-all duration-200 group"
                      style={{
                        borderBottom: i < Math.min(VISIBLE_EPISODES, episodes.length) - 1 ? "1px solid rgba(30,30,63,0.8)" : "none",
                        background: i === activeIndex ? "rgba(6,182,212,0.05)" : "transparent",
                        paddingLeft: i === activeIndex ? "0.75rem" : "0",
                        borderLeft: i === activeIndex ? "2px solid #22D3EE" : "2px solid transparent",
                      }}
                      onClick={() => {
                        setActiveIndex(i);
                        setExpanded(expanded === i ? null : i);
                      }}
                    >
                      {/* Play/pause icon */}
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                        style={{
                          background: i === activeIndex ? "rgba(34,211,238,0.15)" : "rgba(30,30,63,0.6)",
                          border: `1px solid ${i === activeIndex ? "#22D3EE" : "rgba(30,30,63,0.8)"}`,
                          color: i === activeIndex ? "#22D3EE" : "#475569",
                        }}
                      >
                        {i === activeIndex && isPlaying ? (
                          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                            <rect x="0" y="0" width="3" height="12" rx="1" />
                            <rect x="7" y="0" width="3" height="12" rx="1" />
                          </svg>
                        ) : (
                          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                            <path d="M0 0L10 6L0 12V0Z" />
                          </svg>
                        )}
                      </span>
                      {ep.episodeNumber && (
                        <span
                          className="text-xs tracking-widest uppercase font-bold w-8 flex-shrink-0"
                          style={{ fontFamily: "var(--font-body)", color: "#334155" }}
                        >
                          {ep.episodeNumber}
                        </span>
                      )}
                      <span className="flex-1 min-w-0">
                        <span
                          className="block text-sm font-semibold truncate transition-colors duration-200"
                          style={{ fontFamily: "var(--font-body)", color: i === activeIndex ? "#F1F5F9" : "#CBD5E1" }}
                        >
                          {ep.title}
                        </span>
                        <span
                          className="block text-xs mt-0.5"
                          style={{ fontFamily: "var(--font-body)", color: "#475569" }}
                        >
                          {formatDate(ep.pubDate)}{ep.duration ? ` · ${ep.duration}` : ""}
                        </span>
                      </span>
                    </button>
                    {/* Expandable description */}
                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            className="text-xs leading-relaxed pb-4 pl-4"
                            style={{ fontFamily: "var(--font-body)", color: "#64748B", maxWidth: "52ch" }}
                          >
                            {ep.description.slice(0, 280)}{ep.description.length > 280 ? "…" : ""}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                {episodes.length > VISIBLE_EPISODES && (
                  <a
                    href={RIVERSIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)", color: "#475569" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#22D3EE")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                  >
                    View all {episodes.length} episodes →
                  </a>
                )}
              </div>
            )}
          </div>

          {/* RIGHT — Player */}
          <div className="relative lg:sticky lg:top-28">
            {/* Podcast artwork */}
            <div className="relative mb-6 rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img
                src={activeEp?.image || PODCAST_ARTWORK}
                alt="The Reset with Shaun Tucker — Podcast Artwork"
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={600}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,10,32,0.85) 0%, transparent 50%)" }}
              />
              {/* Episode info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {loading ? (
                  <div className="h-5 w-3/4 rounded animate-pulse" style={{ background: "rgba(255,255,255,0.1)" }} />
                ) : activeEp ? (
                  <>
                    {activeEp.episodeNumber && (
                      <p className="text-xs tracking-[0.25em] uppercase font-bold mb-1" style={{ fontFamily: "var(--font-body)", color: "#22D3EE" }}>
                        Episode {activeEp.episodeNumber}
                      </p>
                    )}
                    <p className="font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2vw, 1.3rem)" }}>
                      {activeEp.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#64748B", fontFamily: "var(--font-body)" }}>
                      {formatDate(activeEp.pubDate)}{activeEp.duration ? ` · ${activeEp.duration}` : ""}
                    </p>
                  </>
                ) : null}
              </div>
            </div>

            {/* Audio player */}
            {activeEp?.audioUrl && (
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(15,15,42,0.95)",
                  border: "1px solid rgba(6,182,212,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Hidden audio element */}
                <audio
                  ref={audioRef}
                  src={activeEp.audioUrl}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleEnded}
                  preload="metadata"
                />

                {/* Progress bar */}
                <div className="mb-4">
                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #22D3EE ${duration ? (currentTime / duration) * 100 : 0}%, rgba(30,30,63,0.8) 0%)`,
                      accentColor: "#22D3EE",
                    }}
                    aria-label="Seek audio"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs" style={{ fontFamily: "var(--font-body)", color: "#475569" }}>{formatTime(currentTime)}</span>
                    <span className="text-xs" style={{ fontFamily: "var(--font-body)", color: "#475569" }}>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6">
                  {/* Previous */}
                  <button
                    onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                    disabled={activeIndex === 0}
                    className="transition-colors duration-200"
                    style={{ color: activeIndex === 0 ? "#1E1E3F" : "#475569" }}
                    aria-label="Previous episode"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                    </svg>
                  </button>

                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #22D3EE, #06B6D4)",
                      boxShadow: "0 0 24px rgba(34,211,238,0.3)",
                    }}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="white">
                        <rect x="0" y="0" width="6" height="20" rx="2" />
                        <rect x="12" y="0" width="6" height="20" rx="2" />
                      </svg>
                    ) : (
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="white" style={{ marginLeft: "2px" }}>
                        <path d="M0 0L18 10L0 20V0Z" />
                      </svg>
                    )}
                  </button>

                  {/* Next */}
                  <button
                    onClick={() => setActiveIndex((i) => Math.min(episodes.length - 1, i + 1))}
                    disabled={activeIndex === episodes.length - 1}
                    className="transition-colors duration-200"
                    style={{ color: activeIndex === episodes.length - 1 ? "#1E1E3F" : "#475569" }}
                    aria-label="Next episode"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 18l8.5-6L6 6v12zm2.5-6 8.5 6V6l-8.5 6zM16 6h2v12h-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Badge */}
            {!loading && !error && (
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22D3EE" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", color: "#475569" }}>
                  {episodes.length} episodes · Updated daily
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
