/*
 * THE UNFORGETTABLE RETREAT — Dedicated Landing Page
 * Fully aligned with homepage brand voice, SB7 structure, and customer journey
 * Colors: #09091F bg, #818CF8 indigo accent, #F59E0B amber CTA, #CBD5E1 body text
 * Fonts: var(--font-display) Syne, var(--font-body) Plus Jakarta Sans
 */

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TriangleModel from "../components/TriangleModel";
import RetreatApplicationForm from "../components/RetreatApplicationForm";
import SEO from "../components/SEO";

const retreatEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "The Unforgettable Retreat — Men's Transformation Retreat Melbourne",
  description:
    "A 3-day, 2-night men's retreat in Melbourne featuring nervous system regulation, breathwork, identity workshops, and brotherhood circles for driven dads ready to transform.",
  url: "https://www.shauntucker.com.au/retreat",
  image: "https://www.shauntucker.com.au/hero-01.jpg",
  organizer: {
    "@type": "Person",
    name: "Shaun Tucker",
    url: "https://www.shauntucker.com.au",
  },
  location: {
    "@type": "Place",
    name: "Melbourne, VIC",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
  },
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  offers: {
    "@type": "Offer",
    price: "1500",
    priceCurrency: "AUD",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://www.shauntucker.com.au/retreat",
  },
};

const RETREAT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/retreat-bg-ecNELaii4HhNHzbKbXo6uC.webp";
const SHAUN_BLAZER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/shaun-forest-cropped_37a9c292.webp";



const included = [
  "Deep nervous system regulation and breathwork sessions",
  "Identity and self-mastery workshops",
  "Physical training designed for presence, not performance",
  "Brotherhood circles — raw, real, no performance required",
  "The Unforgettable Dad framework delivered in full",
  "Post-retreat integration plan and ongoing support",
];

const details = [
  { label: "Duration", value: "3 Days, 2 Nights" },
  { label: "Group Size", value: "20–25 Men Max" },
  { label: "Location", value: "Melbourne, VIC" },
  { label: "Investment", value: "From $1,500" },
  { label: "Frequency", value: "Quarterly" },
  { label: "Entry", value: "Application Required" },
];

const testimonials = [
  {
    quote: "I came in thinking I needed a better training program. I left understanding that I needed to regulate my nervous system first. The retreat changed the way I show up for my kids every single day.",
    name: "Rama",
    role: "Father of 2 · Melbourne",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    quote: "I've done 75 Hard. I've done every program. Nothing came close to what happened in those two days. Shaun doesn't just coach you — he shows you who you actually are.",
    name: "Paul",
    role: "Father of 3 · Sydney",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    quote: "My wife noticed the change before I did. I was calmer, more present, less reactive. The breathwork alone was worth every cent. This is the work I didn't know I needed.",
    name: "Sridhar",
    role: "Father of 1 · Melbourne",
    color: "#10B981",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
  },
];

const forYou = [
  "You are a founder, business owner, or leader with young kids.",
  "You train hard but still feel like you're running on empty.",
  "You snap at the people you love and hate yourself for it.",
  "You're physically present at home but mentally somewhere else.",
  "You're done with programs that add more pressure to an already overloaded system.",
  "You want a brotherhood of men who hold you to a higher standard.",
];

const notForYou = [
  "You want a quick-fix weight loss program.",
  "You want an alpha male chest-beating bootcamp.",
  "You blame your wife, your kids, or the market for where you are.",
  "You aren't willing to be honest in a group setting.",
  "You're looking for motivation, not transformation.",
];

export default function Retreat() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <SEO
        title="The Unforgettable Retreat — Men's Transformation Retreat Melbourne"
        description="A 3-day, 2-night men's retreat in Melbourne for driven dads. Nervous system regulation, breathwork, identity workshops, and brotherhood circles. From $1,500. Quarterly. Apply now."
        canonical="https://www.shauntucker.com.au/retreat"
        jsonLd={retreatEventJsonLd}
      />
    <div className="min-h-screen" style={{ background: "#09091F" }}>
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100svh" }}>
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${RETREAT_BG})` }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(9,9,31,0.97) 0%, rgba(9,9,31,0.80) 50%, rgba(9,9,31,0.60) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,31,0.9) 0%, transparent 50%)" }} />
        </div>

        <div className="relative z-10 container flex flex-col justify-center" style={{ minHeight: "100svh", paddingTop: "7rem", paddingBottom: "5rem" }}>
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
              style={{
                fontFamily: "var(--font-body)",
                background: "rgba(245,158,11,0.12)",
                border: "1px solid rgba(245,158,11,0.35)",
                color: "#FCD34D",
              }}
            >
              <span style={{ color: "#F59E0B" }}>✦</span>
              The Core Experience · Melbourne, VIC
            </span>

            <h1
              className="text-white font-bold leading-none mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
              }}
            >
              Three days, two nights.<br />
              <span style={{ color: "#F59E0B" }}>Everything changes.</span>
            </h1>

            <p
              className="mb-4 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "#CBD5E1",
                fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                maxWidth: "52ch",
                lineHeight: 1.75,
              }}
            >
              Your kids are growing up right now. And if you're honest with yourself — you're not fully there.
            </p>
            <p
              className="mb-10 font-semibold"
              style={{
                fontFamily: "var(--font-body)",
                color: "#E2E8F0",
                fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                maxWidth: "48ch",
                lineHeight: 1.75,
              }}
            >
              The Unforgettable Retreat is the moment that changes that. A small group of serious men. No performance. No posturing. Just the work that actually moves the needle.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:shaun@shauntucker.com.au?subject=Retreat Application"
                className="btn-amber"
              >
                Apply for The Retreat →
              </a>
              <a href="#what-happens" className="btn-ghost">
                See What Happens
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE REAL PROBLEM ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#09091F" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">

            <div className="flex justify-center mb-8">
              <span className="section-tag">
                <span style={{ color: "#6366F1" }}>✦</span>
                The Real Problem
              </span>
            </div>

            <h2
              className="text-white font-bold leading-tight mb-6 text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              You're succeeding at everything<br />
              <span style={{ color: "#818CF8" }}>except being present.</span>
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#94A3B8", lineHeight: 1.8 }}
            >
              <p>
                You train. You provide. You show up. From the outside, you have it together. But on the inside, you're running on empty. You're sleeping 4–6 hours. You've gained weight you can't shift. You snap at the people you love most and feel guilty about it for days.
              </p>
              <p>
                You've tried the programs. 75Hard. The 5am routines. The extreme diets. And they worked — for a while. But they didn't fix the thing underneath. Because you can't discipline your way out of a dysregulated nervous system.
              </p>
            </div>

            {/* Three truths */}
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {[
                {
                  icon: "⚡",
                  label: "The Truth About Your Body",
                  headline: "You're not weak. You're wired wrong.",
                  body: "Cold showers and 5am alarms don't fix a dysregulated nervous system. They just add more noise. The answer isn't more effort.",
                  color: "#6366F1",
                  glow: "rgba(99,102,241,0.12)",
                  border: "rgba(99,102,241,0.25)",
                },
                {
                  icon: "🔥",
                  label: "The Truth About Your Mind",
                  headline: "You don't have an anger problem.",
                  body: "The snapping. The checking out. The guilt. That's not your character. That's a nervous system that was never taught to regulate. It's fixable.",
                  color: "#EC4899",
                  glow: "rgba(236,72,153,0.12)",
                  border: "rgba(236,72,153,0.25)",
                },
                {
                  icon: "⚔️",
                  label: "The Truth About Fatherhood",
                  headline: "Your kids don't need a perfect dad.",
                  body: "They need a present one. One they run to, not away from. One they'll still talk about when they're 40.",
                  color: "#F59E0B",
                  glow: "rgba(245,158,11,0.12)",
                  border: "rgba(245,158,11,0.25)",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-7 flex flex-col gap-4 transition-all duration-300"
                  style={{
                    background: "#0F0F2A",
                    border: `1px solid ${item.border}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${item.glow}`;
                    (e.currentTarget as HTMLElement).style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = item.border;
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className="text-xs font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-body)",
                        background: item.glow,
                        border: `1px solid ${item.border}`,
                        color: item.color,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <h3
                    className="font-bold leading-snug"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#F1F5F9", letterSpacing: "-0.01em" }}
                  >
                    {item.headline}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "0.93rem", lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Villain callout */}
            <div
              className="rounded-xl p-8 md:p-10 mt-10"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(124,58,237,0.08))",
                border: "1px solid rgba(99,102,241,0.25)",
              }}
            >
              <h3
                className="text-white font-bold leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", letterSpacing: "-0.02em" }}
              >
                The world told you to grind harder.<br />
                <span style={{ color: "#818CF8" }}>Your family needed you to show up softer.</span>
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "1rem", lineHeight: 1.8, maxWidth: "58ch" }}>
                Hustle culture sold you a lie. More discipline. More sacrifice. More proving yourself. But the men who are truly unforgettable aren't the ones who worked the hardest. They're the ones who were present when it counted.
              </p>
            </div>

            {/* Pivot quote */}
            <div
              className="rounded-xl p-8 mt-8"
              style={{ background: "#0F0F2A", borderLeft: "3px solid #6366F1", paddingLeft: "2.5rem" }}
            >
              <blockquote
                className="font-bold leading-relaxed"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)", color: "#F1F5F9", letterSpacing: "-0.01em" }}
              >
                "The most dangerous thing a man can do is wait until he's ready."
                <span style={{ color: "#818CF8" }}> Your kids can't wait that long.</span>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ─── THE RETREAT ──────────────────────────────────────────────────── */}
      <section id="what-happens" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${RETREAT_BG})` }} />
        <div className="absolute inset-0" style={{ background: "rgba(9,9,31,0.95)" }} />

        <div className="relative z-10 container">
          <div className="max-w-3xl mb-14">
            <span className="section-tag-amber section-tag mb-6 inline-flex">
              <span style={{ color: "#F59E0B" }}>✦</span>
              The Unforgettable Retreat
            </span>
            <h2
              className="text-white font-bold leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Three days, two nights. A small group of men<br />
              <span style={{ color: "#F59E0B" }}>who are done waiting.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "52ch" }}>
              The moment everything changes.
            </p>
            <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "52ch", marginTop: "1rem" }}>
              Men leave this retreat different. Their families feel it before they walk through the door.
            </p>
          </div>

          {/* Details grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {/* What's included */}
            <div
              className="lg:col-span-2 p-8 rounded-xl"
              style={{ background: "rgba(15,15,42,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}>
                What Happens Over Three Days, Two Nights
              </p>
              <div className="space-y-4">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#6366F1" }} />
                    <span style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics */}
            <div
              className="p-8 rounded-xl"
              style={{ background: "rgba(15,15,42,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(245,158,11,0.3)" }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: "#FCD34D" }}>
                Details
              </p>
              <div className="space-y-4">
                {details.map((detail) => (
                  <div key={detail.label} className="flex justify-between items-center pb-3" style={{ borderBottom: "1px solid rgba(30,30,63,0.8)" }}>
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-body)", color: "#64748B" }}>{detail.label}</span>
                    <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-body)", color: "#E2E8F0" }}>{detail.value}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:shaun@shauntucker.com.au?subject=Retreat Application" className="btn-amber mt-8 w-full justify-center">
                Apply for The Retreat
              </a>
            </div>
          </div>

          {/* Three Pillars — Interactive Triangle */}
          <TriangleModel />
        </div>
      </section>

      {/* ─── YOUR GUIDE ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ background: "#0A0A20" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 pointer-events-none"
                  style={{ borderTop: "2px solid #6366F1", borderLeft: "2px solid #6366F1" }} />
                <img
                  src={SHAUN_BLAZER}
                  alt="Shaun Tucker"
                  className="w-full max-w-md mx-auto lg:mx-0 object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "top", borderRadius: "12px" }}
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 pointer-events-none"
                  style={{ borderBottom: "2px solid rgba(99,102,241,0.4)", borderRight: "2px solid rgba(99,102,241,0.4)" }} />
              </div>
              <div
                className="mt-6 p-6 max-w-md mx-auto lg:mx-0 rounded-xl"
                style={{ background: "#0F0F2A", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "var(--font-body)", color: "#818CF8" }}>
                  Who Shaun Is
                </p>
                <p
                  className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#F1F5F9", letterSpacing: "-0.01em", borderBottom: "1px solid rgba(30,30,63,0.8)", paddingBottom: "0.75rem" }}
                >
                  Human Performance Scientist
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  {["MMA Fighter", "BSc Health Science", "Breathwork Facilitator"].map((cred, i, arr) => (
                    <span key={cred} className="flex items-center gap-3">
                      <span className="text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}>{cred}</span>
                      {i < arr.length - 1 && <span style={{ color: "#334155", fontSize: "0.75rem" }}>|</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <span className="section-tag mb-6 inline-flex">
                <span style={{ color: "#6366F1" }}>✦</span>
                Your Guide
              </span>
              <h2
                className="text-white font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                I was the man you are right now.<br />
                <span style={{ color: "#818CF8" }}>And I found the way through.</span>
              </h2>
              <div className="space-y-5" style={{ fontFamily: "var(--font-body)", color: "#94A3B8", lineHeight: 1.75 }}>
                <p>
                  I trained harder than anyone I knew. Pushed through 75Hard. Chased mentors. Earned the credentials. And I was still snapping at the people I loved. Still not present. Still not enough.
                </p>
                <p style={{ color: "#E2E8F0", fontWeight: 600 }}>
                  The problem wasn't my effort. It was that nobody had ever taught me to regulate the man underneath the performance.
                </p>
                <p>
                  I built the system that changed that. I've used it with 100+ men. I'm here to walk you through it — in person, over three days and two nights, with a group of men who are exactly where you are right now.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { stat: "100+", label: "Men coached and transformed" },
                  { stat: "3", label: "Days, 2 nights that change everything" },
                  { stat: "3", label: "Pillars that change everything" },
                  { stat: "0", label: "Shortcuts. This is the real work." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl transition-all duration-300"
                    style={{ background: "#0F0F2A", border: "1px solid rgba(99,102,241,0.2)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(99,102,241,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.2)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <span className="font-bold block mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#818CF8", letterSpacing: "-0.02em" }}>
                      {item.stat}
                    </span>
                    <span className="text-xs leading-snug" style={{ fontFamily: "var(--font-body)", color: "#64748B" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#09091F" }}>
        <div className="container">
          <div className="max-w-xl mb-14">
            <span className="section-tag mb-6 inline-flex">
              <span style={{ color: "#6366F1" }}>✦</span>
              Transformation
            </span>
            <h2
              className="text-white font-bold leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Men who became<br />
              <span style={{ color: "#818CF8" }}>unforgettable.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "52ch" }}>
              These are real men. Dads, partners, leaders. They came in running on fumes and left with something they hadn't felt in years — the certainty that they are exactly the man their family needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-xl flex flex-col transition-all duration-300"
                style={{ background: "#0F0F2A", border: `1px solid ${t.border}` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${t.glow}`;
                  (e.currentTarget as HTMLElement).style.borderColor = t.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = t.border;
                }}
              >
                <span className="font-bold leading-none mb-4 block" style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: t.color, lineHeight: 1 }}>"</span>
                <blockquote className="flex-1 mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.75 }}>
                  {t.quote}
                </blockquote>
                <div className="pt-5" style={{ borderTop: `1px solid ${t.border}` }}>
                  <p className="font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#F1F5F9", letterSpacing: "-0.01em" }}>{t.name}</p>
                  <p className="text-xs tracking-wide mt-1" style={{ fontFamily: "var(--font-body)", color: "#64748B" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IS THIS FOR YOU? ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#0A0A20" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-tag mb-6 inline-flex">
              <span style={{ color: "#6366F1" }}>✦</span>
              Who This Is For
            </span>
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Not for everyone.<br />
              <span style={{ color: "#818CF8" }}>Exactly for someone.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For you */}
            <div className="p-8 rounded-xl" style={{ background: "#0F0F2A", border: "1px solid rgba(16,185,129,0.25)" }}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: "#6EE7B7" }}>
                This IS For You
              </p>
              <div className="space-y-4">
                {forYou.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)" }}>
                      <span style={{ color: "#10B981", fontSize: "0.65rem" }}>✓</span>
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not for you */}
            <div className="p-8 rounded-xl" style={{ background: "#0F0F2A", border: "1px solid rgba(239,68,68,0.2)" }}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: "#FCA5A5" }}>
                This is NOT For You
              </p>
              <div className="space-y-4">
                {notForYou.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                      <span style={{ color: "#EF4444", fontSize: "0.65rem" }}>✕</span>
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#09091F" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-tag-amber section-tag mb-8 inline-flex">
              <span style={{ color: "#F59E0B" }}>✦</span>
              The Stakes
            </span>
            <h2
              className="text-white font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              There is no second chance<br />
              <span style={{ color: "#F59E0B" }}>at their childhood.</span>
            </h2>
            <p
              className="mb-4"
              style={{ fontFamily: "var(--font-body)", color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "52ch", margin: "0 auto 1.5rem" }}
            >
              Your kids are forming their memories of you right now. The clock doesn't pause while you think about it.
            </p>
            <p
              className="mb-12"
              style={{ fontFamily: "var(--font-body)", color: "#64748B", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "48ch", margin: "0 auto 3rem" }}
            >
              This is not a course. This is a brotherhood. Not everyone is accepted — and that's exactly the point.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="btn-amber text-lg px-10 py-5"
            >
              Apply for The Retreat →
            </button>

            <p className="mt-6 text-sm" style={{ fontFamily: "var(--font-body)", color: "#475569" }}>
              Every application is personally reviewed by Shaun. Spots are strictly limited.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full my-8 p-8 border border-gray-800">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Apply for The Retreat
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close form"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <RetreatApplicationForm />
          </div>
        </div>
      )}

      <Footer />
    </div>
    </>
  );
}
