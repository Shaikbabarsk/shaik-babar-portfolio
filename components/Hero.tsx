export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24"
    >
      {/* Background Effects */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Shaik
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Babar
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
            Python Developer &{" "}
            <span className="text-cyan-400">Founder</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build scalable software solutions, AI-powered applications,
            modern web platforms, and cloud-based products. I am passionate
            about turning ideas into practical digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                Projects
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">1</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                Startup
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
            
            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/10" />
            <div className="absolute inset-6 rounded-full border border-blue-400/10" />
            <div className="absolute inset-12 rounded-full border border-purple-400/10" />

            {/* Main Card */}
            <div className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:h-64 sm:w-64">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-black text-slate-950 shadow-xl shadow-cyan-500/20">
                SB
              </div>

              <p className="text-lg font-bold text-white">Python Developer</p>
              <p className="mt-1 text-sm text-slate-400">
                AI • Web • Cloud
              </p>
            </div>

            {/* Floating Tags */}
            <div className="absolute left-0 top-10 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-xl backdrop-blur">
              Python
            </div>

            <div className="absolute right-0 top-24 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-blue-300 shadow-xl backdrop-blur">
              AI / ML
            </div>

            <div className="absolute bottom-12 left-4 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-purple-300 shadow-xl backdrop-blur">
              Full Stack
            </div>

            <div className="absolute bottom-0 right-5 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-xl backdrop-blur">
              Cloud
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 sm:flex"
      >
        <span>Scroll to explore</span>
        <span className="h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
      </a>
    </section>
  );
}