/*
 * NAVIGATION — AItechadvisory style
 * Deep navy bg #09091F, Syne headings, Plus Jakarta Sans body, indigo gradient CTA
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#guide" },
    { label: "The Path", href: "#plan" },
    { label: "The Retreat", href: "#retreat" },
    { label: "Podcast", href: "/podcast" },
    { label: "Community", href: "#community" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,9,31,0.97)" : "rgba(9,9,31,0.75)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.18)" : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span
            className="text-white font-bold"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", letterSpacing: "-0.01em" }}
          >
            SHAUN TUCKER
          </span>
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "#818CF8", fontFamily: "var(--font-body)", fontSize: "0.6rem" }}
          >
            The Unforgettable
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F1F5F9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              {link.label}
            </a>
          ))}
          <a href="#apply" className="btn-primary py-2.5 px-5 text-xs">
            Apply Now →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-4"
          style={{ background: "#09091F", borderTop: "1px solid rgba(99,102,241,0.18)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium"
              style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}
            >
              {link.label}
            </a>
          ))}
          <a href="#apply" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 justify-center">
            Apply Now →
          </a>
        </div>
      )}
    </nav>
  );
}
