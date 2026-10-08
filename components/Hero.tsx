"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-6 pb-20 pt-28 sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[8%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Content */}
        <div className="reveal-section">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Python Developer • Founder • AI Enthusiast
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Shaik Babar
            </span>
          </h1>

          <h2 className="mt-6 max-w-3xl text-2xl font-bold leading-tight text-slate-200 sm:text-3xl">
            Building intelligent software, AI systems &amp; digital products.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Python Developer at BlueBridge Technologies and Founder &amp; CEO
            of Zentryx Logic. I build scalable applications, AI-powered
            solutions, cloud-based platforms, and innovative digital products.
          </p>

          {/* Stats */}
          <div className="mt-9 flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-black text-white">2+</p>
              <p className="mt-1 text-sm text-slate-500">months Experience</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-3xl font-black text-white">10+</p>
              <p className="mt-1 text-sm text-slate-500">Projects Built</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-3xl font-black text-white">01</p>
              <p className="mt-1 text-sm text-slate-500">Startup Founded</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="premium-button rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>

            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/Shaikbabarsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <a
              href="mailto:zentryxlogic@gmail.com"
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="reveal-section reveal-delay-2 relative mx-auto w-full max-w-md">
          {/* Outer glow */}
          <div className="glow-pulse absolute inset-4 rounded-full bg-cyan-400/20 blur-3xl" />

          {/* Decorative rings */}
          <div className="absolute -inset-5 rounded-full border border-cyan-400/10" />
          <div className="absolute -inset-10 rounded-full border border-blue-500/5" />

          {/* Profile card */}
          <div className="animated-border float-slow relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-2 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-slate-950">
              <Image
                src="/images/profile.jpg"
                alt="Shaik Babar - Python Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 256px, 320px"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-cyan-400/5" />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Currently
            </p>
            <p className="mt-1 font-bold text-white">
              Python Developer
            </p>
            <p className="text-sm text-cyan-400">BlueBridge Technologies</p>
          </div>

          {/* AI badge */}
          <div className="absolute -right-4 top-10 rounded-2xl border border-cyan-400/20 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl">
            <p className="text-xs text-slate-500">Focus</p>
            <p className="font-bold text-cyan-300">AI • Cloud • Software</p>
          </div>
        </div>
      </div>
    </section>
  );
}