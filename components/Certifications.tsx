
const certifications = [
  {
    title: "Oracle Java SE 17 Developer",
    provider: "Oracle",
    type: "Professional Course",
  },
  {
    title: "Data Structures",
    provider: "Technical Certification",
    type: "Certification",
  },
  {
    title: "Business Management",
    provider: "Professional Learning",
    type: "Certification",
  },
  {
    title: "Computer Networking",
    provider: "Technical Learning",
    type: "Certification",
  },
  {
    title: "Python & Java for Beginners",
    provider: "Programming Certification",
    type: "Certification",
  },
  {
    title: "Data Structures & Algorithms Practice",
    provider: "LeetCode / HackerRank",
    type: "Technical Practice",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Certifications
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Learning & credentials
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A collection of technical courses, certifications, and
            continuous learning experiences supporting my development
            journey.
          </p>
        </div>

        {/* Certification Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <div
              key={certification.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3l2.8 5.7L21 9.6l-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z" />
                  </svg>
                </div>

                <span className="text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {certification.type}
              </p>

              <h3 className="mt-2 text-lg font-bold leading-7 text-white">
                {certification.title}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                {certification.provider}
              </p>
            </div>
          ))}
        </div>

        {/* Learning Statement */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-bold text-white">
                Always learning. Always building.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                I continuously improve my skills through hands-on projects,
                technical practice, courses, and real-world development.
              </p>
            </div>

            <div className="text-3xl font-black text-cyan-400">
              ∞
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

