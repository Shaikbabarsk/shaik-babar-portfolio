
const skillGroups = [
  {
    title: "Programming",
    icon: "01",
    skills: ["Python", "C", "C++", "Java"],
  },
  {
    title: "Frontend",
    icon: "02",
    skills: ["React.js", "Next.js", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "03",
    skills: ["FastAPI", "REST APIs", "Flask", "Node.js"],
  },
  {
    title: "AI & Machine Learning",
    icon: "04",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "LLM",
      "RAG",
      "Deep Learning",
    ],
  },
  {
    title: "Database & Cloud",
    icon: "05",
    skills: ["SQL", "SQLite", "Supabase", "AWS", "Vercel"],
  },
  {
    title: "Tools",
    icon: "06",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Google Colab"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A practical technology stack covering software development,
            backend engineering, AI/ML, modern frontend development, and
            cloud platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-400">
                  {group.icon}
                </div>

                <span className="text-xs text-slate-600">
                  {group.skills.length} skills
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-800/70 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Currently focusing on
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Python Backend Development • AI Applications • Full-Stack
                Development • Cloud Deployment
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 text-cyan-400">
              →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

