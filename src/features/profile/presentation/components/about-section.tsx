"use client";

import { Braces, Cloud, Code2, Database } from "lucide-react";
import { motion } from "motion/react";

const areas = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Arquitectura limpia, patrones MVC, microservicios y código modular orientado a la escalabilidad y mantenibilidad.",
    label: "Modularidad",
    footer: "SOLID · Clean",
    iconClass: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
    footerClass: "text-blue-300",
    borderClass: "border-cyan-400/45",
    glowClass: "hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)]",
  },
  {
    icon: Braces,
    title: "Backend & APIs",
    text: "Diseño de RESTful APIs seguras, middleware optimizado, autenticación JWT, rate limiting y alto throughput.",
    label: "Seguridad",
    footer: "JWT · OAuth",
    iconClass: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    footerClass: "text-cyan-300",
    borderClass: "border-white/10",
    glowClass: "hover:shadow-[0_18px_50px_rgba(34,211,238,0.06)]",
  },
  {
    icon: Database,
    title: "Databases",
    text: "Modelado relacional robusto, consultas indexadas complejas, integridad referencial y transacciones ACID confiables.",
    label: "Integridad",
    footer: "ACID · Indexing",
    iconClass: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    footerClass: "text-violet-300",
    borderClass: "border-white/10",
    glowClass: "hover:shadow-[0_18px_50px_rgba(167,139,250,0.06)]",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    text: "Contenedores Docker, orquestación, CI/CD, automatización con PM2 y despliegue de alta disponibilidad en la nube.",
    label: "DevOps",
    footer: "Docker · PM2",
    iconClass: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    footerClass: "text-cyan-300",
    borderClass: "border-white/10",
    glowClass: "hover:shadow-[0_18px_50px_rgba(34,211,238,0.06)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative border-t border-white/[0.07] py-20"
    >
      {/* Iluminación decorativa */}
      <div className="pointer-events-none absolute top-24 -left-36 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.025] blur-[110px]" />

      <div className="relative">
        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mb-10"
        >
          {/* Etiqueta */}
          <div className="inline-flex items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-3 py-1.5">
            <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-cyan-300 uppercase">
              01 // Trayectoria
            </span>
          </div>

          {/* Título */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-white md:text-[2.4rem]">
            Sobre Mí
          </h2>

          {/* Descripción */}
          <p className="mt-3 max-w-[780px] text-[15px] leading-7 text-slate-300 md:text-[17px]">
            Titulado en Diseño y Desarrollo de Software por Tecsup,
            perteneciente al décimo superior y beneficiario de Beca 18.
            Apasionado por construir soluciones web, backend, móviles y
            tecnológicas.
          </p>
        </motion.div>

        {/* TARJETAS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                className={`group relative flex min-h-[275px] flex-col overflow-hidden rounded-[16px] border bg-[#121620]/95 p-6 transition-[border-color,box-shadow] duration-300 ${area.borderClass} ${area.glowClass}`}
              >
                {/* Glow superior */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.015] to-transparent" />

                {/* Icono */}
                <motion.div
                  whileHover={{
                    rotate: -4,
                    scale: 1.06,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                  }}
                  className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${area.iconClass}`}
                >
                  <Icon size={22} strokeWidth={2} />
                </motion.div>

                {/* Título */}
                <h3 className="relative text-[19px] font-bold tracking-[-0.025em] text-white">
                  {area.title}
                </h3>

                {/* Texto */}
                <p className="relative mt-3 flex-1 text-[13px] leading-[1.65] text-slate-300">
                  {area.text}
                </p>

                {/* Footer */}
                <div className="relative mt-5 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-4">
                  <span className="font-mono text-[9px] font-semibold tracking-[0.14em] text-slate-500">
                    {area.label}
                  </span>

                  <span
                    className={`font-mono text-[9px] font-bold tracking-[0.12em] whitespace-nowrap ${area.footerClass}`}
                  >
                    {area.footer}
                  </span>
                </div>

                {/* Línea brillante al hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
