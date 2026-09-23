"use client";

import { useState } from "react";
import {
  CodeXml,
  Cpu,
  Database,
  PanelsTopLeft,
  Server,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

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
  icon: React.ElementType;
  iconClassName: string;
  technologies: Technology[];
}

const groups: StackGroup[] = [
  {
    title: "Frontend",
    category: "frontend",
    icon: PanelsTopLeft,
    iconClassName: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    technologies: [
      {
        name: "React",
        className: "border-cyan-400/30 bg-cyan-400/[0.05] text-slate-100",
        dotClassName: "bg-cyan-300",
      },
      {
        name: "Vue.js",
        className: "border-emerald-400/30 bg-emerald-400/[0.05] text-slate-100",
        dotClassName: "bg-emerald-400",
      },
      {
        name: "TypeScript",
        className: "border-blue-400/30 bg-blue-400/[0.05] text-slate-100",
        dotClassName: "bg-blue-400",
      },
      {
        name: "JavaScript",
        className: "border-yellow-400/30 bg-yellow-400/[0.05] text-slate-100",
        dotClassName: "bg-yellow-300",
      },
    ],
  },

  {
    title: "Backend",
    category: "backend",
    icon: Server,
    iconClassName: "border-blue-400/20 bg-blue-400/10 text-blue-300",
    technologies: [
      {
        name: "Node.js",
        className: "border-green-400/30 bg-green-400/[0.05] text-slate-100",
        dotClassName: "bg-green-400",
      },
      {
        name: "Express.js",
        className: "border-slate-400/30 bg-slate-400/[0.05] text-slate-100",
        dotClassName: "bg-slate-300",
      },
      {
        name: ".NET",
        className: "border-violet-400/30 bg-violet-400/[0.05] text-slate-100",
        dotClassName: "bg-violet-500",
      },
      {
        name: "Laravel",
        className: "border-red-400/30 bg-red-400/[0.05] text-slate-100",
        dotClassName: "bg-red-500",
      },
      {
        name: "Django",
        className: "border-emerald-900/50 bg-emerald-950/30 text-slate-100",
        dotClassName: "bg-emerald-900",
      },
    ],
  },

  {
    title: "Lenguajes",
    category: "backend",
    icon: CodeXml,
    iconClassName: "border-violet-400/20 bg-violet-400/10 text-violet-300",
    technologies: [
      {
        name: "Python",
        className: "border-blue-400/30 bg-blue-400/[0.05] text-slate-100",
        dotClassName: "bg-blue-400",
      },
      {
        name: "Java",
        className: "border-red-400/30 bg-red-400/[0.05] text-slate-100",
        dotClassName: "bg-red-500",
      },
      {
        name: "Kotlin",
        className: "border-violet-400/30 bg-violet-400/[0.05] text-slate-100",
        dotClassName: "bg-violet-500",
      },
      {
        name: "Swift",
        className: "border-orange-400/30 bg-orange-400/[0.05] text-slate-100",
        dotClassName: "bg-orange-400",
      },
    ],
  },

  {
    title: "Bases de Datos",
    category: "database",
    icon: Database,
    iconClassName: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    technologies: [
      {
        name: "MySQL",
        className: "border-sky-400/30 bg-sky-400/[0.05] text-slate-100",
        dotClassName: "bg-sky-300",
      },
      {
        name: "MariaDB",
        className: "border-cyan-700/30 bg-cyan-900/20 text-slate-100",
        dotClassName: "bg-cyan-700",
      },
      {
        name: "SQL Server",
        className: "border-red-400/30 bg-red-400/[0.05] text-slate-100",
        dotClassName: "bg-red-500",
      },
      {
        name: "MongoDB",
        className: "border-green-400/30 bg-green-400/[0.05] text-slate-100",
        dotClassName: "bg-green-400",
      },
    ],
  },

  {
    title: "Herramientas & DevOps",
    category: "devops",
    icon: Wrench,
    iconClassName: "border-blue-300/20 bg-blue-300/10 text-blue-300",
    technologies: [
      {
        name: "Docker",
        className: "border-sky-400/30 bg-sky-400/[0.05] text-slate-100",
        dotClassName: "bg-sky-400",
      },
      {
        name: "Git",
        className: "border-orange-400/30 bg-orange-400/[0.05] text-slate-100",
        dotClassName: "bg-orange-500",
      },
      {
        name: "Postman",
        className: "border-orange-400/30 bg-orange-400/[0.05] text-slate-100",
        dotClassName: "bg-orange-500",
      },
      {
        name: "PM2",
        className: "border-violet-600/30 bg-violet-700/[0.05] text-slate-100",
        dotClassName: "bg-violet-700",
      },
      {
        name: "Figma",
        className: "border-orange-500/30 bg-orange-500/[0.05] text-slate-100",
        dotClassName: "bg-orange-500",
      },
    ],
  },

  {
    title: "Hardware & Enterprise",
    category: "other",
    icon: Cpu,
    iconClassName: "border-violet-400/20 bg-violet-400/10 text-violet-300",
    technologies: [
      {
        name: "Arduino IoT",
        className: "border-cyan-400/30 bg-cyan-400/[0.05] text-slate-100",
        dotClassName: "bg-cyan-400",
      },
      {
        name: "Power BI",
        className: "border-yellow-400/30 bg-yellow-400/[0.05] text-slate-100",
        dotClassName: "bg-yellow-300",
      },
      {
        name: "SAP Essentials",
        className: "border-sky-400/30 bg-sky-400/[0.05] text-slate-100",
        dotClassName: "bg-sky-400",
      },
    ],
  },
];

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

export function SkillsSection() {
  const [active, setActive] = useState<Category>("all");

  const visible =
    active === "all"
      ? groups
      : groups.filter((group) => group.category === active);

  return (
    <section id="stack" className="relative border-t border-white/[0.07] py-20">
      {/* iluminación */}
      <div className="pointer-events-none absolute top-20 right-0 h-[340px] w-[340px] rounded-full bg-cyan-400/[0.02] blur-[120px]" />

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
          }}
          className="mb-10"
        >
          {/* etiqueta */}
          <div className="inline-flex items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-3 py-1.5">
            <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-cyan-300 uppercase">
              02 // Herramientas & Lenguajes
            </span>
          </div>

          {/* título + filtros */}
          <div className="mt-3 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-white md:text-[2.4rem]">
                Stack Tecnológico
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-slate-300 md:text-[16px]">
                Herramientas y tecnologías aplicadas en entornos de producción y
                arquitectura.
              </p>
            </div>

            {/* filtros */}
            <div className="inline-flex w-fit flex-wrap items-center rounded-xl border border-white/10 bg-[#171c28] p-1">
              {filters.map((filter) => {
                const selected = active === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActive(filter.id)}
                    className={`rounded-lg px-4 py-2 font-mono text-[9px] font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
                      selected
                        ? "bg-cyan-400 text-[#06111a] shadow-[0_0_18px_rgba(34,211,238,0.15)]"
                        : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CARDS */}
        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                  className="group relative min-h-[162px] overflow-hidden rounded-[16px] border border-white/10 bg-[#151925]/95 p-6 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/25 hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.015] to-transparent" />

                  {/* encabezado */}
                  <div className="relative flex items-center gap-4">
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
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${group.iconClassName}`}
                    >
                      <Icon size={19} strokeWidth={2} />
                    </motion.div>

                    <h3 className="text-[19px] font-bold tracking-[-0.03em] text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* tecnologías */}
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <motion.span
                        key={technology.name}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.06em] ${technology.className}`}
                      >
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full ${technology.dotClassName}`}
                        />

                        {technology.name}
                      </motion.span>
                    ))}
                  </div>

                  {/* línea inferior animada */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
