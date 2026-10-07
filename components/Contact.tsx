
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 px-6 py-24"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Let's build something great.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Have an opportunity, project idea, collaboration, or just want
            to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm open to software development opportunities, AI projects,
              collaborations, startup discussions, and interesting
              technology ideas.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:zentryxlogic@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  @
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    zentryxlogic@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                  ●
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Gachibowli, Hyderabad, India
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shaik-babar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 font-bold text-blue-400">
                  in
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-blue-600/[0.04] p-8 sm:p-10">
            <div>
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                Open to opportunities
              </span>

              <h3 className="mt-7 text-3xl font-black text-white">
                Have an idea?
                <span className="block text-cyan-400">
                  Let's talk.
                </span>
              </h3>

              <p className="mt-5 max-w-md leading-7 text-slate-400">
                Whether you are looking for a Python developer, AI
                development support, a software solution, or a technology
                collaboration, let's start a conversation.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="mailto:zentryxlogic@gmail.com?subject=Portfolio%20Enquiry"
                className="inline-flex rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Send Me an Email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
