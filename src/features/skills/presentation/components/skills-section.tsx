"use client";

import { useState, type ElementType } from "react";

import {
  CodeXml,
  Cpu,
  Database,
  PanelsTopLeft,
  Server,
  Wrench,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

/* =========================================================
   TIPOS
========================================================= */

type Category =
  "all" | "frontend" | "backend" | "database" | "devops" | "other";

interface Technology {
  name: string;
  className: string;
  dotClassName: string;
}

interface StackGroup {
  title: string;
  category: Exclude<Category, "all">;
  icon: ElementType;
  iconClassName: string;
  technologies: Technology[];
}

/* =========================================================
   STACK
========================================================= */

const groups: StackGroup[] = [
  /* =======================================================
     FRONTEND
  ======================================================= */

  {
    title: "Frontend",
    category: "frontend",
    icon: PanelsTopLeft,

    iconClassName:
      "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300",

    technologies: [
      {
        name: "React",

        className:
          "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-400/30 dark:bg-cyan-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-cyan-500 dark:bg-cyan-300",
      },

      {
        name: "Vue.js",

        className:
          "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-emerald-500 dark:bg-emerald-400",
      },

      {
        name: "TypeScript",

        className:
          "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-400/30 dark:bg-blue-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-blue-500 dark:bg-blue-400",
      },

      {
        name: "JavaScript",

        className:
          "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-400/30 dark:bg-yellow-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-yellow-500 dark:bg-yellow-300",
      },
    ],
  },

  /* =======================================================
     BACKEND
  ======================================================= */

  {
    title: "Backend",
    category: "backend",
    icon: Server,

    iconClassName:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300",

    technologies: [
      {
        name: "Node.js",

        className:
          "border-green-200 bg-green-50 text-green-800 dark:border-green-400/30 dark:bg-green-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-green-500 dark:bg-green-400",
      },

      {
        name: "Express.js",

        className:
          "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-400/30 dark:bg-slate-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-slate-500 dark:bg-slate-300",
      },

      {
        name: ".NET",

        className:
          "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-400/30 dark:bg-violet-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-violet-500",
      },

      {
        name: "Laravel",

        className:
          "border-red-200 bg-red-50 text-red-800 dark:border-red-400/30 dark:bg-red-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-red-500",
      },

      {
        name: "Django",

        className:
          "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-slate-100",

        dotClassName: "bg-emerald-700 dark:bg-emerald-900",
      },
    ],
  },

  /* =======================================================
     LENGUAJES
  ======================================================= */

  {
    title: "Lenguajes",
    category: "backend",
    icon: CodeXml,

    iconClassName:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300",

    technologies: [
      {
        name: "Python",

        className:
          "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-400/30 dark:bg-blue-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-blue-500 dark:bg-blue-400",
      },

      {
        name: "Java",

        className:
          "border-red-200 bg-red-50 text-red-800 dark:border-red-400/30 dark:bg-red-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-red-500",
      },

      {
        name: "Kotlin",

        className:
          "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-400/30 dark:bg-violet-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-violet-500",
      },

      {
        name: "Swift",

        className:
          "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-orange-500 dark:bg-orange-400",
      },
    ],
  },

  /* =======================================================
     BASES DE DATOS
  ======================================================= */

  {
    title: "Bases de Datos",
    category: "database",
    icon: Database,

    iconClassName:
      "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300",

    technologies: [
      {
        name: "MySQL",

        className:
          "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-400/30 dark:bg-sky-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-sky-500 dark:bg-sky-300",
      },

      {
        name: "MariaDB",

        className:
          "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-700/30 dark:bg-cyan-900/20 dark:text-slate-100",

        dotClassName: "bg-cyan-600 dark:bg-cyan-700",
      },

      {
        name: "SQL Server",

        className:
          "border-red-200 bg-red-50 text-red-800 dark:border-red-400/30 dark:bg-red-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-red-500",
      },

      {
        name: "MongoDB",

        className:
          "border-green-200 bg-green-50 text-green-800 dark:border-green-400/30 dark:bg-green-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-green-500 dark:bg-green-400",
      },
    ],
  },

  /* =======================================================
     DEVOPS
  ======================================================= */

  {
    title: "Herramientas & DevOps",
    category: "devops",
    icon: Wrench,

    iconClassName:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-300/20 dark:bg-blue-300/10 dark:text-blue-300",

    technologies: [
      {
        name: "Docker",

        className:
          "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-400/30 dark:bg-sky-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-sky-500 dark:bg-sky-400",
      },

      {
        name: "Git",

        className:
          "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-orange-500",
      },

      {
        name: "Postman",

        className:
          "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-orange-500",
      },

      {
        name: "PM2",

        className:
          "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-600/30 dark:bg-violet-700/[0.05] dark:text-slate-100",

        dotClassName: "bg-violet-600 dark:bg-violet-700",
      },

      {
        name: "Figma",

        className:
          "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-500/30 dark:bg-orange-500/[0.05] dark:text-slate-100",

        dotClassName: "bg-orange-500",
      },
    ],
  },

  /* =======================================================
     HARDWARE / ENTERPRISE
  ======================================================= */

  {
    title: "Hardware & Enterprise",
    category: "other",
    icon: Cpu,

    iconClassName:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300",

    technologies: [
      {
        name: "Arduino IoT",

        className:
          "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-400/30 dark:bg-cyan-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-cyan-500 dark:bg-cyan-400",
      },

      {
        name: "Power BI",

        className:
          "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-400/30 dark:bg-yellow-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-yellow-500 dark:bg-yellow-300",
      },

      {
        name: "SAP Essentials",

        className:
          "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-400/30 dark:bg-sky-400/[0.05] dark:text-slate-100",

        dotClassName: "bg-sky-500 dark:bg-sky-400",
      },
    ],
  },
];

/* =========================================================
   FILTROS
========================================================= */

const filters: {
  id: Category;
  label: string;
}[] = [
  {
    id: "all",
    label: "Todos",
  },
  {
    id: "backend",
    label: "Backend",
  },
  {
    id: "frontend",
    label: "Frontend",
  },
  {
    id: "database",
    label: "Databases",
  },
  {
    id: "devops",
    label: "DevOps/Tools",
  },
];

/* =========================================================
   COMPONENTE
========================================================= */

export function SkillsSection() {
  const [active, setActive] = useState<Category>("all");

  const visible =
    active === "all"
      ? groups
      : groups.filter((group) => group.category === active);

  return (
    <section
      id="stack"
      className="relative w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-14 transition-colors duration-300 sm:py-16 md:py-20 landscape:py-12 dark:border-white/[0.07]"
    >
      {/* =====================================================
          ILUMINACIÓN
      ===================================================== */}

      <div className="pointer-events-none absolute top-20 -right-28 h-[260px] w-[260px] rounded-full bg-cyan-400/[0.08] blur-[90px] sm:right-0 sm:h-[340px] sm:w-[340px] sm:blur-[120px] dark:bg-cyan-400/[0.02]" />

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
          }}
          className="mb-7 min-w-0 sm:mb-9 lg:mb-10"
        >
          {/* ETIQUETA */}

          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 shadow-sm transition-colors duration-300 sm:px-3 dark:border-cyan-300/25 dark:bg-[#1b2330]/80 dark:shadow-none">
            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-700 uppercase min-[350px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] dark:text-cyan-300">
              Herramientas & Lenguajes
            </span>
          </div>

          {/* =================================================
              TÍTULO + FILTROS
          ================================================= */}

          <div className="mt-3 flex min-w-0 flex-col gap-5 lg:gap-6 xl:flex-row xl:items-end xl:justify-between">
            {/* =================================================
                TEXTO
            ================================================= */}

            <div className="min-w-0">
              <h2 className="max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-slate-950 min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem] dark:text-white">
                Stack Tecnológico
              </h2>

              <p className="mt-3 max-w-[720px] text-[13px] leading-6 text-slate-600 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[16px] dark:text-slate-300">
                Herramientas y tecnologías aplicadas en entornos de producción y
                arquitectura.
              </p>
            </div>

            {/* =================================================
                FILTROS RESPONSIVE
            ================================================= */}

            <div className="w-full min-w-0 xl:w-auto">
              <div className="grid w-full min-w-0 grid-cols-2 gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm min-[500px]:grid-cols-3 md:grid-cols-5 xl:flex xl:w-fit xl:flex-wrap dark:border-white/10 dark:bg-[#171c28] dark:shadow-none">
                {filters.map((filter) => {
                  const selected = active === filter.id;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActive(filter.id)}
                      className={`min-w-0 rounded-lg px-2 py-2.5 font-mono text-[8px] font-bold tracking-[0.06em] break-words uppercase transition-all duration-300 min-[360px]:text-[9px] sm:px-3 xl:px-4 ${
                        selected
                          ? `bg-cyan-500 text-white shadow-[0_0_18px_rgba(6,182,212,0.18)] dark:bg-cyan-400 dark:text-[#06111a] dark:shadow-[0_0_18px_rgba(34,211,238,0.15)]`
                          : `text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.04] dark:hover:text-white`
                      } `}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            CARDS
        ================================================= */}

        <motion.div
          layout
          className="grid w-full min-w-0 grid-cols-1 gap-3 min-[540px]:grid-cols-2 sm:gap-4 lg:gap-5 xl:grid-cols-3 landscape:min-[700px]:grid-cols-2 xl:landscape:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.article
                  key={group.title}
                  layout
                  initial={{
                    opacity: 0,
                    y: 24,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative min-w-0 overflow-hidden rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-[background-color,border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-[0_18px_45px_rgba(6,182,212,0.08)] min-[360px]:p-5 sm:min-h-[160px] sm:rounded-[16px] sm:p-6 dark:border-white/10 dark:bg-[#151925]/95 dark:shadow-none dark:hover:border-cyan-400/25 dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
                >
                  {/* =================================================
                      GLOW
                  ================================================= */}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-50/80 to-transparent sm:h-20 dark:from-white/[0.015]" />

                  {/* =================================================
                      ENCABEZADO CARD
                  ================================================= */}

                  <div className="relative flex min-w-0 items-center gap-3 sm:gap-4">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border sm:h-10 sm:w-10 ${group.iconClassName} `}
                    >
                      <Icon
                        size={18}
                        strokeWidth={2}
                        className="sm:h-[19px] sm:w-[19px]"
                      />
                    </motion.div>

                    <h3 className="min-w-0 text-[16px] leading-6 font-bold tracking-[-0.03em] break-words text-slate-950 min-[360px]:text-[17px] sm:text-[19px] dark:text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* =================================================
                      TECNOLOGÍAS
                  ================================================= */}

                  <div className="relative mt-4 flex min-w-0 flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {group.technologies.map((technology) => (
                      <motion.span
                        key={technology.name}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.18,
                        }}
                        className={`inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-mono text-[8px] font-bold tracking-[0.04em] transition-colors duration-300 sm:gap-2 sm:px-3 sm:text-[9px] lg:text-[10px] ${technology.className} `}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2 ${technology.dotClassName} `}
                        />

                        <span className="min-w-0 break-words">
                          {technology.name}
                        </span>
                      </motion.span>
                    ))}
                  </div>

                  {/* =================================================
                      LÍNEA INFERIOR
                  ================================================= */}

                  <div className="absolute bottom-0 left-0 h-px w-0 max-w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
