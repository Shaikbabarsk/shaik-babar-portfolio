
export default function Startup() {
  return (
    <section
      id="startup"
      className="relative overflow-hidden bg-slate-900 px-6 py-24"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Entrepreneurship
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Building beyond code.
          </h2>
        </div>

        {/* Startup Card */}
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-2xl">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            
            {/* Main Content */}
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black text-slate-950">
                  ZL
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    Zentryx Logic
                  </h3>

                  <p className="mt-1 text-sm font-medium text-cyan-400">
                    AI • Software Development • Cloud • Digital Innovation
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Zentryx Logic is a technology startup founded to build
                practical digital solutions using modern software,
                artificial intelligence, cloud technologies, and innovative
                product development.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                As Founder & CEO, I work across product strategy, technology,
                development, business opportunities, and building a strong
                foundation for future digital products and services.
              </p>

              {/* Services */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  "AI Solutions",
                  "Software Development",
                  "Web & App Development",
                  "Cloud Solutions",
                  "Digital Innovation",
                  "Career & Internship Programs",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-400">
                      ✓
                    </span>

                    <span className="text-sm text-slate-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://zentryx-logic-mocha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Visit Zentryx Logic
                </a>

                <a
                  href="mailto:zentryxlogic@gmail.com"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  Contact Startup
                </a>
              </div>
            </div>

            {/* Founder Panel */}
            <div className="border-t border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Founder
              </p>

              <h4 className="mt-3 text-2xl font-bold text-white">
                Shaik Babar
              </h4>

              <p className="mt-2 text-sm text-cyan-400">
                Founder & CEO
              </p>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Gachibowli, Hyderabad
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Focus
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Technology, AI, software products and digital innovation
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Startup
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Zentryx Logic
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Registration
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    UDYAM-AP-04-0142355
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-5">
                <p className="text-sm leading-6 text-slate-400">
                  “Turning ideas into practical technology.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

