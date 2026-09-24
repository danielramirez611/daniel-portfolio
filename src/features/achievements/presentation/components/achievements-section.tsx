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
      className="relative border-t border-white/[0.07] py-20"
    >
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute top-20 -left-32 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

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
              Distinciones
            </span>
          </div>

          {/* Título */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-white md:text-[2.4rem]">
            Logros & Reconocimientos
          </h2>

          {/* Subtítulo */}
          <p className="mt-3 max-w-[820px] text-[15px] leading-7 text-slate-300 md:text-[16px]">
            Reconocimientos de excelencia académica, liderazgo representativo y
            acreditación de competencias.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
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
                className={`group relative flex min-h-[205px] flex-col overflow-hidden rounded-[16px] border border-white/[0.09] bg-[#151923]/95 p-6 transition-[border-color,box-shadow] duration-300 ${item.borderClass} ${item.glowClass}`}
              >
                {/* Luz superior */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.015] to-transparent" />

                {/* Icono */}
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
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl border ${item.iconClass}`}
                >
                  <Icon size={21} strokeWidth={2} />
                </motion.div>

                {/* Título */}
                <h3 className="relative mt-5 text-[19px] font-bold tracking-[-0.025em] text-white">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="relative mt-2 text-[13px] leading-6 text-slate-300">
                  {item.text}
                </p>

                {/* Línea inferior */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
