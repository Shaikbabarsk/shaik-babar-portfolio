export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Agentic AI for Law & Judicial",
      category: "AI • LLM • RAG",
      description:
        "An intelligent civil-case workflow platform using multiple AI agents for legal analysis, contract risk, outcome projection, policy compliance, legal drafting, and summarization.",
      tags: ["Python", "LLM", "RAG", "AI Agents", "FastAPI"],
      featured: true,
      accent: "cyan",
    },
    {
      number: "02",
      title: "Multimodal Lung Cancer Decision Support",
      category: "AI • Healthcare",
      description:
        "AI-powered medical decision support platform designed to analyze multimodal clinical information and assist with lung cancer assessment.",
      tags: ["Python", "FastAPI", "React", "AI/ML", "SQLite"],
      featured: true,
      accent: "blue",
      github: "https://github.com/Shaikbabarsk/lungmm",
    },
    {
      number: "03",
      title: "Electricity Theft Detection",
      category: "Machine Learning",
      description:
        "Machine learning system for identifying abnormal electricity consumption patterns using electrical usage features and classification models.",
      tags: ["Python", "SVM", "KNN", "Machine Learning"],
      accent: "purple",
    },
    {
      number: "04",
      title: "HDI Predictor",
      category: "Machine Learning",
      description:
        "A machine learning application that predicts Human Development Index values using socioeconomic indicators.",
      tags: ["Python", "Flask", "ML", "Data Analysis"],
      accent: "cyan",
    },
    {
      number: "05",
      title: "AI Personalized Learning Assistant",
      category: "Artificial Intelligence",
      description:
        "An intelligent learning platform designed to personalize educational content and provide adaptive learning assistance.",
      tags: ["Python", "AI", "ML", "Education"],
      accent: "blue",
    },
    {
      number: "06",
      title: "Cloud Smart Healthcare Monitoring",
      category: "Cloud • Healthcare",
      description:
        "A cloud-based healthcare monitoring concept focused on collecting and managing patient information through connected digital systems.",
      tags: ["Cloud", "Python", "Healthcare", "IoT"],
      accent: "purple",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-200px] top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="reveal-section mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projects that turn
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ideas into products.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of AI, software engineering, machine learning,
            healthcare, and cloud projects built around solving practical
            problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className={`project-card animated-border reveal-section ${
                index % 3 === 1
                  ? "reveal-delay-1"
                  : index % 3 === 2
                    ? "reveal-delay-2"
                    : ""
              } rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl`}
            >
              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-sm font-black tracking-[0.25em] text-slate-600">
                  {project.number}
                </span>

                {project.featured && (
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Icon */}
              <div className="relative z-10 mt-10 flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                    project.accent === "cyan"
                      ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                      : project.accent === "blue"
                        ? "border-blue-400/20 bg-blue-400/10 text-blue-300"
                        : "border-purple-400/20 bg-purple-400/10 text-purple-300"
                  }`}
                >
                  <span className="text-xl font-black">✦</span>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    ↗
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/70">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white transition duration-300 group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-badge rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs uppercase tracking-widest text-slate-600">
                  View Project
                </span>

                <span className="text-lg text-cyan-400 transition duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="reveal-section reveal-delay-2 mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-600">
            Building • Learning • Shipping
          </p>

          <div className="mx-auto mt-5 h-px max-w-xs bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}