"use client";

import { GraduationCap, Languages, Medal, UsersRound } from "lucide-react";
import { motion } from "motion/react";

const achievements = [
  {
    icon: Medal,
    title: "Décimo Superior",
    text: "Tecsup excelencia académica destacada en Diseño y Desarrollo de Software.",
    iconClass: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    borderClass: "hover:border-cyan-400/35",
    glowClass: "hover:shadow-[0_18px_45px_rgba(34,211,238,0.06)]",
  },
  {
    icon: GraduationCap,
    title: "Beca 18 — PRONABEC",
    text: "Beca integral otorgada por alto rendimiento escolar y mérito académico nacional.",
    iconClass: "border-blue-400/20 bg-blue-400/10 text-blue-300",
    borderClass: "hover:border-blue-400/35",
    glowClass: "hover:shadow-[0_18px_45px_rgba(96,165,250,0.06)]",
  },
  {
    icon: UsersRound,
    title: "CADE Universitario 2025",
    text: "Representante institucional en el encuentro de liderazgo juvenil más importante del país.",
    iconClass: "border-violet-400/20 bg-violet-400/10 text-violet-300",
    borderClass: "hover:border-violet-400/35",
    glowClass: "hover:shadow-[0_18px_45px_rgba(167,139,250,0.06)]",
  },
  {
    icon: Languages,
    title: "Inglés B1",
    text: "Competencia técnica comprobada en documentación, estándares globales y comunicación.",
    iconClass: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    borderClass: "hover:border-cyan-400/35",
    glowClass: "hover:shadow-[0_18px_45px_rgba(34,211,238,0.06)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function AchievementsSection() {
  return (
    <section
      id="logros"
      className="relative w-full max-w-full overflow-x-clip border-t border-white/[0.07] py-14 sm:py-16 md:py-20 landscape:py-12"
    >
      {/* GLOW DECORATIVO */}
      <div className="pointer-events-none absolute top-20 -left-28 h-[240px] w-[240px] rounded-full bg-cyan-400/[0.025] blur-[90px] sm:-left-32 sm:h-[320px] sm:w-[320px] sm:blur-[120px]" />

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
              Distinciones
            </span>
          </div>

          {/* TÍTULO */}
          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-white min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem]">
            Logros & Reconocimientos
          </h2>

          {/* SUBTÍTULO */}
          <p className="mt-3 max-w-[820px] text-[13px] leading-6 break-words text-slate-300 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[16px]">
            Reconocimientos de excelencia académica, liderazgo representativo y
            acreditación de competencias.
          </p>
        </motion.div>

        {/* =================================================
            CARDS
        ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-8 grid w-full min-w-0 grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:mt-10 sm:gap-4 lg:grid-cols-2 xl:grid-cols-4 landscape:min-[700px]:grid-cols-2 xl:landscape:grid-cols-4"
        >
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-white/[0.09] bg-[#151923]/95 p-4 transition-[border-color,box-shadow] duration-300 min-[360px]:p-5 sm:min-h-[195px] sm:rounded-[16px] sm:p-6 lg:min-h-[205px] ${item.borderClass} ${item.glowClass}`}
              >
                {/* LUZ SUPERIOR */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.015] to-transparent sm:h-20" />

                {/* ICONO */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                  }}
                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border sm:h-11 sm:w-11 sm:rounded-xl ${item.iconClass}`}
                >
                  <Icon
                    size={19}
                    strokeWidth={2}
                    className="sm:h-[21px] sm:w-[21px]"
                  />
                </motion.div>

                {/* TÍTULO */}
                <h3 className="relative mt-4 max-w-full text-[16px] leading-6 font-bold tracking-[-0.025em] break-words text-white min-[360px]:text-[17px] sm:mt-5 sm:text-[19px]">
                  {item.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="relative mt-2 flex-1 text-[12px] leading-6 break-words text-slate-300 min-[360px]:text-[13px]">
                  {item.text}
                </p>

                {/* LÍNEA INFERIOR */}
                <div className="absolute bottom-0 left-0 h-px w-0 max-w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
