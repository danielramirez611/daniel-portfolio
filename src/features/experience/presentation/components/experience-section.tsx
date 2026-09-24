"use client";

import { motion } from "motion/react";
import { Network } from "lucide-react";

const experiences = [
  {
    company: "Intigrate E.I.R.L",
    role: "Software Developer Trainee",
    period: "2025 — 2026",
    current: true,
    description:
      "Desarrollo de módulos funcionales, pruebas automatizadas, optimización de endpoints y validación estricta de esquemas de datos en arquitectura corporativa.",
    technologies: [
      "Development",
      "Testing",
      "APIs",
      "Bug fixing",
      "Git",
      "Data validation",
    ],
  },
  {
    company: "Imayiner Project E.I.R.L",
    role: "Backend Developer / Technical Leadership",
    period: "2024 — 2025",
    current: false,
    leadership: "Backend · Architecture · APIs · Leadership",
    description:
      "Liderazgo técnico en estructuración de microservicios, diseño de modelos relacionales transaccionales y despliegue continuo de APIs con altos estándares de seguridad.",
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative border-t border-white/[0.07] py-20"
    >
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute top-32 -left-40 h-[380px] w-[380px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

      <div className="relative">
        {/* CABECERA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-3 py-1.5">
            <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-cyan-300 uppercase">
              Trayectoria Profesional
            </span>
          </div>

          {/* Título */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-white md:text-[2.4rem]">
            Experiencia Laboral
          </h2>

          {/* Subtítulo */}
          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-300 md:text-[16px]">
            Roles clave en diseño de backend, testing sistemático y liderazgo de
            desarrollo.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="relative mt-10"
        >
          {/* Línea vertical */}
          <div className="absolute top-4 bottom-5 left-[11px] w-px bg-gradient-to-b from-cyan-400 via-blue-400/60 to-white/5 md:left-[12px]" />

          <div className="space-y-8 pl-10 md:pl-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                }}
                className={`group relative overflow-visible rounded-[16px] border bg-[#151925]/95 px-6 py-7 transition-[border-color,box-shadow] duration-300 md:px-7 ${
                  index === 0
                    ? "border-white/10 hover:border-cyan-400/30 hover:shadow-[0_18px_50px_rgba(34,211,238,0.05)]"
                    : "border-slate-400/40 hover:border-cyan-400/35 hover:shadow-[0_18px_50px_rgba(59,130,246,0.05)]"
                }`}
              >
                {/* Punto timeline */}
                <div
                  className={`absolute top-2 -left-[36px] flex h-[16px] w-[16px] items-center justify-center rounded-full border-2 bg-[#080d18] md:-left-[44px] ${
                    index === 0
                      ? "border-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]"
                      : "border-blue-300 shadow-[0_0_14px_rgba(96,165,250,0.65)]"
                  }`}
                >
                  <span
                    className={`h-[5px] w-[5px] rounded-full ${
                      index === 0 ? "bg-cyan-300" : "bg-blue-300"
                    }`}
                  />
                </div>

                {/* HEADER DE LA EXPERIENCIA */}
                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                  <div>
                    <span
                      className={`font-mono text-[10px] font-bold tracking-[0.16em] uppercase ${
                        index === 0 ? "text-cyan-300" : "text-blue-300"
                      }`}
                    >
                      {experience.company}
                    </span>

                    <h3 className="mt-1 text-xl font-bold tracking-[-0.025em] text-white md:text-[21px]">
                      {experience.role}
                    </h3>

                    {/* Badge liderazgo */}
                    {experience.leadership && (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-blue-400/35 bg-blue-400/10 px-3 py-2 font-mono text-[10px] font-bold tracking-[0.08em] text-blue-200">
                        <Network size={14} />

                        {experience.leadership}
                      </div>
                    )}
                  </div>

                  {/* Fecha + estado */}
                  <div className="flex shrink-0 items-center gap-3">
                    {experience.current && (
                      <span className="rounded-md border border-cyan-400/40 bg-cyan-400/[0.07] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.1em] text-cyan-300">
                        Actual / Reciente
                      </span>
                    )}

                    <span className="font-mono text-[10px] font-bold tracking-[0.1em] whitespace-nowrap text-slate-400">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="mt-5 max-w-[1040px] text-[14px] leading-7 text-slate-300">
                  {experience.description}
                </p>

                {/* TECNOLOGÍAS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => {
                    const highlighted = ["Node.js", "Express", ".NET"].includes(
                      technology,
                    );

                    return (
                      <motion.span
                        key={technology}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        className={`rounded-md px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.08em] ${
                          highlighted
                            ? "border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300"
                            : "border border-white/[0.03] bg-white/[0.06] text-slate-400"
                        }`}
                      >
                        {technology}
                      </motion.span>
                    );
                  })}
                </div>

                {/* línea inferior hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
