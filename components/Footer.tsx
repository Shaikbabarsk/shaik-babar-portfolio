export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Startup", href: "#startup" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-sm font-black text-cyan-300 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                SB
              </div>

              {/* Name */}
              <div>
                <p className="text-sm font-black tracking-[0.18em] text-white">
                  SHAIK BABAR
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Python Developer • AI Enthusiast • Founder
                </p>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-500 transition duration-300 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Shaikbabarsk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
            >
              in
            </a>

            <a
              href="mailto:zentryxlogic@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
            >
              @
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="text-slate-600">
            <p>© 2026 Shaik Babar. All rights reserved.</p>

            <p className="mt-1">
              Built with Next.js & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span>Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}