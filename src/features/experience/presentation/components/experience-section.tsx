"use client";

import { Network } from "lucide-react";
import { motion } from "motion/react";

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

/* =========================================================
   ANIMACIONES
========================================================= */

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

/* =========================================================
   COMPONENTE
========================================================= */

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-14 transition-colors duration-300 sm:py-16 md:py-20 landscape:py-12 dark:border-white/[0.07]"
    >
      {/* =====================================================
          GLOW DECORATIVO
      ===================================================== */}

      <div className="pointer-events-none absolute top-28 -left-28 h-[260px] w-[260px] rounded-full bg-cyan-400/[0.08] blur-[95px] sm:-left-40 sm:h-[380px] sm:w-[380px] sm:blur-[120px] dark:bg-cyan-400/[0.025]" />

      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

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

          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 shadow-sm transition-colors duration-300 sm:px-3 dark:border-cyan-300/25 dark:bg-[#1b2330]/80 dark:shadow-none">
            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-700 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] dark:text-cyan-300">
              Trayectoria Profesional
            </span>
          </div>

          {/* TÍTULO */}

          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-slate-950 min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem] dark:text-white">
            Experiencia Laboral
          </h2>

          {/* SUBTÍTULO */}

          <p className="mt-3 max-w-3xl text-[13px] leading-6 text-slate-600 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[16px] dark:text-slate-300">
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
          {/* =================================================
              LÍNEA VERTICAL
          ================================================= */}

          <div className="absolute top-4 bottom-5 left-[7px] w-px bg-gradient-to-b from-cyan-500 via-blue-400/60 to-slate-200 min-[360px]:left-[9px] sm:left-[11px] md:left-[12px] dark:from-cyan-400 dark:via-blue-400/60 dark:to-white/5" />

          {/* =================================================
              CONTENIDO TIMELINE
          ================================================= */}

          <div className="min-w-0 space-y-6 pl-7 min-[360px]:pl-8 sm:space-y-8 sm:pl-10 md:pl-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                }}
                className={`group relative min-w-0 overflow-visible rounded-[14px] border bg-white px-4 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-[background-color,border-color,box-shadow] duration-300 min-[360px]:px-5 sm:rounded-[16px] sm:px-6 sm:py-7 md:px-7 dark:bg-[#151925]/95 dark:shadow-none ${
                  index === 0
                    ? `border-slate-200 hover:border-cyan-400/50 hover:shadow-[0_18px_50px_rgba(6,182,212,0.09)] dark:border-white/10 dark:hover:border-cyan-400/30 dark:hover:shadow-[0_18px_50px_rgba(34,211,238,0.05)]`
                    : `border-slate-300 hover:border-blue-400/50 hover:shadow-[0_18px_50px_rgba(59,130,246,0.08)] dark:border-slate-400/40 dark:hover:border-cyan-400/35 dark:hover:shadow-[0_18px_50px_rgba(59,130,246,0.05)]`
                } `}
              >
                {/* =================================================
                    PUNTO TIMELINE
                ================================================= */}

                <div
                  className={`absolute top-3 -left-[25px] flex h-[14px] w-[14px] items-center justify-center rounded-full border-2 bg-white min-[360px]:-left-[29px] sm:top-2 sm:-left-[36px] sm:h-[16px] sm:w-[16px] md:-left-[44px] dark:bg-[#080d18] ${
                    index === 0
                      ? `border-cyan-500 shadow-[0_0_14px_rgba(6,182,212,0.45)] dark:border-cyan-300 dark:shadow-[0_0_14px_rgba(34,211,238,0.85)]`
                      : `border-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.35)] dark:border-blue-300 dark:shadow-[0_0_14px_rgba(96,165,250,0.65)]`
                  } `}
                >
                  <span
                    className={`h-[4px] w-[4px] rounded-full sm:h-[5px] sm:w-[5px] ${
                      index === 0
                        ? "bg-cyan-500 dark:bg-cyan-300"
                        : "bg-blue-500 dark:bg-blue-300"
                    } `}
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
                        index === 0
                          ? "text-cyan-700 dark:text-cyan-300"
                          : "text-blue-700 dark:text-blue-300"
                      } `}
                    >
                      {experience.company}
                    </span>

                    <h3 className="mt-1 max-w-full text-[17px] leading-6 font-bold tracking-[-0.025em] break-words text-slate-950 min-[360px]:text-[18px] sm:text-xl md:text-[21px] dark:text-white">
                      {experience.role}
                    </h3>

                    {/* =================================================
                        BADGE LIDERAZGO
                    ================================================= */}

                    {experience.leadership && (
                      <div className="mt-3 flex w-fit max-w-full min-w-0 items-start gap-2 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-2 font-mono text-[8px] font-bold tracking-[0.05em] text-blue-700 min-[360px]:text-[9px] sm:inline-flex sm:px-3 sm:text-[10px] sm:tracking-[0.08em] dark:border-blue-400/35 dark:bg-blue-400/10 dark:text-blue-200">
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
                      <span className="rounded-md border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 font-mono text-[8px] font-bold tracking-[0.06em] text-cyan-700 min-[360px]:text-[9px] sm:px-3 sm:text-[10px] sm:tracking-[0.1em] dark:border-cyan-400/40 dark:bg-cyan-400/[0.07] dark:text-cyan-300">
                        Actual / Reciente
                      </span>
                    )}

                    <span className="max-w-full font-mono text-[8px] font-bold tracking-[0.06em] text-slate-500 min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] lg:whitespace-nowrap dark:text-slate-400">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    DESCRIPCIÓN
                ================================================= */}

                <p className="mt-4 max-w-[1040px] text-[12px] leading-6 break-words text-slate-600 min-[360px]:text-[13px] sm:mt-5 sm:text-[14px] sm:leading-7 dark:text-slate-300">
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
                        className={`inline-flex max-w-full min-w-0 items-center rounded-md px-2.5 py-1.5 font-mono text-[8px] font-semibold tracking-[0.04em] break-words transition-colors duration-300 sm:px-3 sm:text-[9px] lg:text-[10px] lg:tracking-[0.08em] ${
                          highlighted
                            ? `border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/10 dark:bg-cyan-400/[0.06] dark:text-cyan-300`
                            : `border border-slate-200 bg-slate-50 text-slate-600 dark:border-white/[0.03] dark:bg-white/[0.06] dark:text-slate-400`
                        } `}
                      >
                        {technology}
                      </motion.span>
                    );
                  })}
                </div>

                {/* =================================================
                    LÍNEA INFERIOR
                ================================================= */}

                <div className="absolute bottom-0 left-0 h-px w-0 max-w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
