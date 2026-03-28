/*
 * FOOTER — AItechadvisory style
 * Deep navy bg, Syne brand name, indigo accent links, Plus Jakarta Sans body
 */

const navLinks = [
  { label: "About Shaun", href: "/#guide" },
  { label: "The Path", href: "/#plan" },
  { label: "The Retreat", href: "/retreat" },
  { label: "The Podcast", href: "/podcast" },
  { label: "Community", href: "/community" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/theshauntucker/", icon: "📷" },
  { label: "Facebook", href: "https://www.facebook.com/theshauntucker/", icon: "f" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theshauntucker/", icon: "in" },
];

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{ background: "#06061A", borderTop: "1px solid rgba(30,30,63,0.8)" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <span
                className="font-bold tracking-wide block"
                style={{ fontFamily: "var(--font-display)", color: "#F1F5F9", fontSize: "1.25rem", letterSpacing: "-0.01em" }}
              >
                SHAUN TUCKER
              </span>
              <span
                className="text-[0.6rem] tracking-[0.25em] uppercase font-bold"
                style={{ fontFamily: "var(--font-body)", color: "#6366F1" }}
              >
                The Unforgettable
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", color: "#475569", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "30ch" }}>
              Human Performance Scientist. MMA Fighter | BSc Health Science | Breathwork Facilitator. Helping driven dads become the fathers their kids will never forget.
            </p>
            <div className="flex gap-5 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase font-bold transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)", color: "#334155" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#818CF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)", color: "#6366F1" }}
            >
              Navigate
            </p>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)", color: "#475569" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#818CF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)", color: "#6366F1" }}
            >
              Get in Touch
            </p>
            <div className="space-y-3 mb-8">
              <a
                href="mailto:shaun@shauntucker.com.au"
                className="block text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)", color: "#475569" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#818CF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              >
                shaun@shauntucker.com.au
              </a>
              <p style={{ fontFamily: "var(--font-body)", color: "#334155", fontSize: "0.9rem" }}>
                Melbourne, VIC, Australia
              </p>
            </div>
            <div className="flex gap-4 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border border-gray-700 hover:border-amber-500 hover:bg-amber-500/10"
                  style={{ fontFamily: "var(--font-body)" }}
                  title={social.label}
                >
                  <span style={{ color: "#818CF8", fontSize: "1.1rem", fontWeight: "bold" }}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <a href="/#apply" className="btn-primary text-xs px-5 py-2.5" style={{ display: "inline-block" }}>
              Apply Now
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(30,30,63,0.8)" }}
        >
          <p style={{ fontFamily: "var(--font-body)", color: "#1E1E3F", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Shaun Tucker. All rights reserved.
          </p>
          <p
            className="font-bold italic"
            style={{ fontFamily: "var(--font-display)", color: "#1E293B", fontSize: "0.8rem" }}
          >
            "Be the father they'll never forget."
          </p>
        </div>

      </div>
    </footer>
  );
}
