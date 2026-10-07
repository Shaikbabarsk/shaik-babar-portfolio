
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Building technology with{" "}
            <span className="text-cyan-400">purpose.</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            I am a Python Developer focused on building reliable software,
            AI-powered applications, and modern digital products. Alongside
            my professional journey, I am also building my own technology
            startup, Zentryx Logic.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main About Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white">
              Who I Am
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                I am a software developer with a strong interest in Python
                development, Artificial Intelligence, Machine Learning,
                backend systems, and full-stack application development.
              </p>

              <p>
                My approach is simple: understand the problem first, design
                the right solution, and then build technology that is useful,
                scalable, and easy to maintain.
              </p>

              <p>
                I have worked on projects involving AI/ML, healthcare,
                legal technology, web applications, APIs, databases, and
                cloud platforms. I enjoy taking an idea from concept to a
                working product.
              </p>

              <p>
                I am also the Founder & CEO of{" "}
                <span className="font-semibold text-cyan-400">
                  Zentryx Logic
                </span>
                , a technology initiative focused on AI, software
                development, cloud solutions, and digital innovation.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="mb-4 text-sm font-semibold text-white">
                Areas I Work With
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "React",
                  "Next.js",
                  "AI / ML",
                  "LLM & RAG",
                  "SQL",
                  "REST APIs",
                  "Cloud",
                  "Git",
                  "Vercel",
                  "Supabase",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Current Role
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                Python Developer
              </h3>

              <p className="mt-2 text-sm text-cyan-400">
                BlueBridge Technologies
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Founder
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                Zentryx Logic
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                AI, Software Development, Cloud & Digital Innovation
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Based In
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                Hyderabad, India
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Open to opportunities and collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

