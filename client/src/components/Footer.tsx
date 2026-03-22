export default function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0.005_285)] border-t border-[oklch(0.18_0.005_285)] py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span
                className="text-[oklch(0.95_0.01_75)] font-display text-xl font-semibold tracking-wide block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SHAUN TUCKER
              </span>
              <span className="text-[oklch(0.72_0.12_75)] text-[0.6rem] tracking-[0.25em] uppercase font-body font-medium">
                The Unforgettable
              </span>
            </div>
            <p className="text-[oklch(0.5_0.01_75)] font-body font-light text-sm leading-relaxed max-w-xs">
              Health Scientist. Self-Mastery Coach. Breathwork Facilitator. Helping driven dads become the fathers their kids will never forget.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "LinkedIn", "Spotify"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[oklch(0.4_0.01_75)] text-xs tracking-widest uppercase font-body hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-5">
              Navigate
            </p>
            <div className="space-y-3">
              {[
                { label: "About Shaun", href: "#about" },
                { label: "The Path", href: "#path" },
                { label: "The Retreat", href: "#retreat" },
                { label: "The Podcast", href: "#podcast" },
                { label: "Community", href: "#community" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[oklch(0.5_0.01_75)] text-sm font-body hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[oklch(0.72_0.12_75)] text-xs tracking-[0.3em] uppercase font-body font-medium mb-5">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:shaun@shauntucker.com.au"
                className="block text-[oklch(0.5_0.01_75)] text-sm font-body hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
              >
                shaun@shauntucker.com.au
              </a>
              <p className="text-[oklch(0.4_0.01_75)] text-sm font-body">Melbourne, VIC, Australia</p>
            </div>
            <div className="mt-8">
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-6 py-3 bg-[oklch(0.72_0.12_75)] text-[oklch(0.1_0.005_285)] text-xs tracking-widest uppercase font-body font-semibold hover:bg-[oklch(0.78_0.12_75)] transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.15_0.005_285)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[oklch(0.35_0.01_75)] text-xs font-body">
            © {new Date().getFullYear()} Shaun Tucker. All rights reserved.
          </p>
          <p className="text-[oklch(0.35_0.01_75)] text-xs font-body italic" style={{ fontFamily: "var(--font-display)" }}>
            "Be the father they'll never forget."
          </p>
        </div>
      </div>
    </footer>
  );
}
