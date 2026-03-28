/*
 * APPLY / CTA SECTION — AItechadvisory style
 * Navy bg with image overlay, Syne headings, amber primary CTA, indigo secondary
 */

import { useState } from "react";
import RetreatApplicationForm from "./RetreatApplicationForm";

const BREATHWORK_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461331538/b29hYSJqcf6yhKscd9tQK3/breathwork-bg-fvM7GK89wHUikcoAXFfLgP.webp";

export default function ApplySection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="apply" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BREATHWORK_BG})` }} />
      <div className="absolute inset-0" style={{ background: "rgba(9,9,31,0.93)" }} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center">

          <span className="section-tag-amber section-tag mb-8 inline-flex">
            <span style={{ color: "#F59E0B" }}>✦</span>
            The Stakes
          </span>

          <h2
            className="text-white font-bold leading-tight mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            There is no second chance
            <br />
            <span style={{ color: "#FCD34D" }}>at their childhood.</span>
          </h2>

          <p
            className="mb-12 mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              color: "#CBD5E1",
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "50ch",
            }}
          >
            Your kids are forming their memories of you right now.
            <span style={{ color: "#FCD34D", fontWeight: 600 }}> The clock doesn't pause while you think about it.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="btn-amber group"
            >
              Apply for The Retreat
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <a
              href="/#community"
              className="btn-ghost"
            >
              Join the Free Community
            </a>
          </div>

          <p
            className="mt-8 text-xs tracking-wide"
            style={{ fontFamily: "var(--font-body)", color: "#475569" }}
          >
            Every application is reviewed personally by Shaun. This is not a course. This is a brotherhood. Not everyone is accepted — and that's exactly the point.
          </p>

        </div>
      </div>

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
    </section>
  );
}
