const experiences = [
  {
    company: "Intigrate E.I.R.L",
    role: "Software Developer Trainee",
    period: "2025 — 2026",
    description:
      "Desarrollo, mantenimiento, testing e integración de funcionalidades dentro de aplicaciones de software.",
    technologies: ["Development", "Testing", "APIs", "Git", "Data Validation"],
  },
  {
    company: "Imayiner Project E.I.R.L",
    role: "Backend Developer / Technical Leadership",
    period: "2024 — 2025",
    description:
      "Desarrollo backend, arquitectura de APIs, bases de datos y coordinación técnica del equipo.",
    technologies: [
      "Node.js",
      "Express",
      ".NET",
      "SQL Server",
      "MySQL",
      "JWT",
      "Docker",
      "PM2",
      "Scrum",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="border-t border-white/10 py-20">
      <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
        03 // TRAYECTORIA PROFESIONAL
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
        Experiencia Laboral
      </h2>

      <div className="relative mt-10 space-y-7 border-l border-cyan-400/30 pl-7">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="relative rounded-2xl border border-white/10 bg-[#121829]/70 p-6"
          >
            <span className="absolute top-7 -left-[35px] h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#070913] shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase">
                  {experience.company}
                </span>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  {experience.role}
                </h3>
              </div>

              <span className="font-mono text-xs text-slate-400">
                {experience.period}
              </span>
            </div>

            <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-400">
              {experience.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
