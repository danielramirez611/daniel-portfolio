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
      className="relative w-full max-w-full overflow-x-clip border-t border-white/[0.07] py-14 sm:py-16 md:py-20 landscape:py-12"
    >
      {/* ILUMINACIÓN */}
      <div className="pointer-events-none absolute top-20 -left-28 h-[240px] w-[240px] rounded-full bg-cyan-400/[0.025] blur-[90px] sm:-left-36 sm:h-[300px] sm:w-[300px] sm:blur-[110px]" />

      {/* CONTENEDOR */}
      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
            CABECERA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mb-7 min-w-0 sm:mb-9 lg:mb-10"
        >
          {/* ETIQUETA */}
          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-2.5 py-1.5 sm:px-3">
            <span className="truncate font-mono text-[8px] font-bold tracking-[0.08em] text-cyan-300 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em]">
              Trayectoria
            </span>
          </div>

          {/* TÍTULO */}
          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-white min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem]">
            Sobre Mí
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mt-3 max-w-[780px] text-[13px] leading-6 text-slate-300 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[17px]">
            Titulado en Diseño y Desarrollo de Software por Tecsup,
            perteneciente al décimo superior y beneficiario de Beca 18.
            Apasionado por construir soluciones web, backend, móviles y
            tecnológicas.
          </p>
        </motion.div>

        {/* =================================================
            TARJETAS
        ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid w-full min-w-0 grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4 lg:grid-cols-2 xl:grid-cols-4 landscape:min-[700px]:grid-cols-2 xl:landscape:grid-cols-4"
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
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[14px] border bg-[#121620]/95 p-4 transition-[border-color,box-shadow] duration-300 min-[360px]:p-5 sm:min-h-[255px] sm:rounded-[16px] sm:p-6 lg:min-h-[275px] ${area.borderClass} ${area.glowClass}`}
              >
                {/* GLOW SUPERIOR */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.015] to-transparent sm:h-24" />

                {/* ICONO */}
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
                  className={`relative mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border sm:mb-5 sm:h-12 sm:w-12 sm:rounded-xl ${area.iconClass}`}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="sm:h-[22px] sm:w-[22px]"
                  />
                </motion.div>

                {/* TÍTULO */}
                <h3 className="relative max-w-full text-[16px] leading-6 font-bold tracking-[-0.025em] break-words text-white min-[360px]:text-[17px] sm:text-[19px]">
                  {area.title}
                </h3>

                {/* TEXTO */}
                <p className="relative mt-2.5 flex-1 text-[12px] leading-6 break-words text-slate-300 sm:mt-3 sm:text-[13px] sm:leading-[1.65]">
                  {area.text}
                </p>

                {/* FOOTER */}
                <div className="relative mt-4 flex min-w-0 flex-col gap-2 border-t border-white/[0.07] pt-3 min-[350px]:flex-row min-[350px]:items-center min-[350px]:justify-between sm:mt-5 sm:gap-4 sm:pt-4">
                  <span className="min-w-0 font-mono text-[8px] font-semibold tracking-[0.1em] break-words text-slate-500 min-[360px]:text-[9px] sm:tracking-[0.14em]">
                    {area.label}
                  </span>

                  <span
                    className={`min-w-0 font-mono text-[8px] font-bold tracking-[0.08em] break-words min-[350px]:text-right min-[360px]:text-[9px] sm:tracking-[0.12em] ${area.footerClass}`}
                  >
                    {area.footer}
                  </span>
                </div>

                {/* LÍNEA HOVER */}
                <div className="absolute bottom-0 left-0 h-px w-0 max-w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
