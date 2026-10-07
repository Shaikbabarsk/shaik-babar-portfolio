
const experiences = [
  {
    role: "Python Developer",
    company: "BlueBridge Technologies",
    period: "Current",
    description:
      "Working on Python-based software development, backend development, application logic, APIs, and technology solutions.",
    technologies: ["Python", "Backend Development", "APIs", "Software Development"],
  },
  {
    role: "Founder & CEO",
    company: "Zentryx Logic",
    period: "2026 – Present",
    description:
      "Building and leading a technology startup focused on AI, software development, cloud solutions, and digital innovation.",
    technologies: ["AI", "Software Development", "Cloud", "Digital Innovation"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            My professional journey
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A combination of professional development experience and
            entrepreneurial work building technology products.
          </p>
        </div>

        <div className="relative ml-3 border-l border-white/10 pl-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.role}
              className={`relative ${
                index !== experiences.length - 1 ? "pb-12" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400" />

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 font-medium text-cyan-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

