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
      className="relative w-full max-w-full overflow-x-clip border-t border-white/[0.07] py-14 sm:py-16 md:py-20 landscape:py-12"
    >
      {/* GLOW DECORATIVO */}
      <div className="pointer-events-none absolute top-28 -left-28 h-[260px] w-[260px] rounded-full bg-cyan-400/[0.025] blur-[95px] sm:-left-40 sm:h-[380px] sm:w-[380px] sm:blur-[120px]" />

      {/* CONTENEDOR */}
      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
            CABECERA
        ================================================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="min-w-0"
        >
          {/* BADGE */}
          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-2.5 py-1.5 sm:px-3">
            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-300 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em]">
              Trayectoria Profesional
            </span>
          </div>

          {/* TÍTULO */}
          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-white min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem]">
            Experiencia Laboral
          </h2>

          {/* SUBTÍTULO */}
          <p className="mt-3 max-w-3xl text-[13px] leading-6 text-slate-300 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[16px]">
            Roles clave en diseño de backend, testing sistemático y liderazgo de
            desarrollo.
          </p>
        </motion.div>

        {/* =================================================
            TIMELINE
        ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="relative mt-8 min-w-0 sm:mt-10"
        >
          {/* Línea vertical */}
          <div className="absolute top-4 bottom-5 left-[7px] w-px bg-gradient-to-b from-cyan-400 via-blue-400/60 to-white/5 min-[360px]:left-[9px] sm:left-[11px] md:left-[12px]" />

          {/* CONTENIDO TIMELINE */}
          <div className="min-w-0 space-y-6 pl-7 min-[360px]:pl-8 sm:space-y-8 sm:pl-10 md:pl-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                }}
                className={`group relative min-w-0 overflow-visible rounded-[14px] border bg-[#151925]/95 px-4 py-5 transition-[border-color,box-shadow] duration-300 min-[360px]:px-5 sm:rounded-[16px] sm:px-6 sm:py-7 md:px-7 ${
                  index === 0
                    ? "border-white/10 hover:border-cyan-400/30 hover:shadow-[0_18px_50px_rgba(34,211,238,0.05)]"
                    : "border-slate-400/40 hover:border-cyan-400/35 hover:shadow-[0_18px_50px_rgba(59,130,246,0.05)]"
                }`}
              >
                {/* =================================================
                    PUNTO TIMELINE
                ================================================= */}

                <div
                  className={`absolute top-3 -left-[25px] flex h-[14px] w-[14px] items-center justify-center rounded-full border-2 bg-[#080d18] min-[360px]:-left-[29px] sm:top-2 sm:-left-[36px] sm:h-[16px] sm:w-[16px] md:-left-[44px] ${
                    index === 0
                      ? "border-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]"
                      : "border-blue-300 shadow-[0_0_14px_rgba(96,165,250,0.65)]"
                  }`}
                >
                  <span
                    className={`h-[4px] w-[4px] rounded-full sm:h-[5px] sm:w-[5px] ${
                      index === 0 ? "bg-cyan-300" : "bg-blue-300"
                    }`}
                  />
                </div>

                {/* =================================================
                    HEADER EXPERIENCIA
                ================================================= */}

                <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                  {/* INFORMACIÓN PRINCIPAL */}
                  <div className="min-w-0">
                    <span
                      className={`block max-w-full font-mono text-[8px] font-bold tracking-[0.1em] break-words uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.16em] ${
                        index === 0 ? "text-cyan-300" : "text-blue-300"
                      }`}
                    >
                      {experience.company}
                    </span>

                    <h3 className="mt-1 max-w-full text-[17px] leading-6 font-bold tracking-[-0.025em] break-words text-white min-[360px]:text-[18px] sm:text-xl md:text-[21px]">
                      {experience.role}
                    </h3>

                    {/* BADGE LIDERAZGO */}
                    {experience.leadership && (
                      <div className="mt-3 flex w-fit max-w-full min-w-0 items-start gap-2 rounded-md border border-blue-400/35 bg-blue-400/10 px-2.5 py-2 font-mono text-[8px] font-bold tracking-[0.05em] text-blue-200 min-[360px]:text-[9px] sm:inline-flex sm:px-3 sm:text-[10px] sm:tracking-[0.08em]">
                        <Network
                          size={13}
                          className="mt-0.5 shrink-0 sm:h-[14px] sm:w-[14px]"
                        />

                        <span className="min-w-0 break-words">
                          {experience.leadership}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* =================================================
                      FECHA + ESTADO
                  ================================================= */}

                  <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3 lg:shrink-0 lg:justify-end">
                    {experience.current && (
                      <span className="rounded-md border border-cyan-400/40 bg-cyan-400/[0.07] px-2.5 py-1.5 font-mono text-[8px] font-bold tracking-[0.06em] text-cyan-300 min-[360px]:text-[9px] sm:px-3 sm:text-[10px] sm:tracking-[0.1em]">
                        Actual / Reciente
                      </span>
                    )}

                    <span className="max-w-full font-mono text-[8px] font-bold tracking-[0.06em] text-slate-400 min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] lg:whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    DESCRIPCIÓN
                ================================================= */}

                <p className="mt-4 max-w-[1040px] text-[12px] leading-6 break-words text-slate-300 min-[360px]:text-[13px] sm:mt-5 sm:text-[14px] sm:leading-7">
                  {experience.description}
                </p>

                {/* =================================================
                    TECNOLOGÍAS
                ================================================= */}

                <div className="mt-4 flex min-w-0 flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
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
                        transition={{
                          duration: 0.18,
                        }}
                        className={`inline-flex max-w-full min-w-0 items-center rounded-md px-2.5 py-1.5 font-mono text-[8px] font-semibold tracking-[0.04em] break-words sm:px-3 sm:text-[9px] lg:text-[10px] lg:tracking-[0.08em] ${
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

                {/* LÍNEA INFERIOR */}
                <div className="absolute bottom-0 left-0 h-px w-0 max-w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
