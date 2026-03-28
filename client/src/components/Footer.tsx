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
  {
    label: "Instagram",
    href: "https://www.instagram.com/theshauntucker/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/theshauntucker/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/theshauntucker/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.394 3.745 4.389v5.501zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.188 0 1.915.76 1.932 1.715 0 .953-.744 1.715-1.975 1.715zm1.946 11.019H3.391V9.806h3.892v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    ),
  },
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
                  <span style={{ color: "#818CF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
