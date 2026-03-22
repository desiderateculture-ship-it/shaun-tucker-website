import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "The Path", href: "#path" },
    { label: "The Retreat", href: "#retreat" },
    { label: "Podcast", href: "#podcast" },
    { label: "Community", href: "#community" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.1_0.005_285/0.95)] backdrop-blur-md border-b border-[oklch(0.22_0.005_285)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="text-[oklch(0.95_0.01_75)] font-display text-xl font-semibold tracking-wide group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SHAUN TUCKER
          </span>
          <span className="text-[oklch(0.72_0.12_75)] text-[0.6rem] tracking-[0.25em] uppercase font-body font-medium mt-0.5">
            The Unforgettable
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[oklch(0.7_0.01_75)] hover:text-[oklch(0.72_0.12_75)] text-sm tracking-widest uppercase font-body font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="ml-4 px-5 py-2.5 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[oklch(0.95_0.01_75)] p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.12_0.005_285)] border-t border-[oklch(0.22_0.005_285)] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[oklch(0.7_0.01_75)] hover:text-[oklch(0.72_0.12_75)] text-sm tracking-widest uppercase font-body font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-sm tracking-widest uppercase font-body font-semibold text-center hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
