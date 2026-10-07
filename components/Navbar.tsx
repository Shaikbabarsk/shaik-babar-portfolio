"use client";

import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Startup", href: "#startup" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={handleClick}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
            SB
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-white">
              SHAIK BABAR
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              Python Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/20 lg:block"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 lg:hidden"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleClick}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleClick}
              className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}