import { Braces, Cloud, Code2, Database } from "lucide-react";

/* =========================================================
   ÁREAS
========================================================= */

const areas = [
  {
    icon: Code2,

    title: "Software Development",

    text: "Arquitectura limpia, patrones MVC, microservicios y código modular orientado a la escalabilidad y mantenibilidad.",

    label: "Modularidad",

    footer: "SOLID · Clean",

    iconClass:
      "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300",

    footerClass: "text-blue-600 dark:text-blue-300",

    borderClass: "border-cyan-200 dark:border-cyan-400/45",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(8,145,178,0.10)] dark:hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)]",

    delayClass: "[animation-delay:80ms]",
  },

  {
    icon: Braces,

    title: "Backend & APIs",

    text: "Diseño de RESTful APIs seguras, middleware optimizado, autenticación JWT, rate limiting y alto throughput.",

    label: "Seguridad",

    footer: "JWT · OAuth",

    iconClass:
      "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300",

    footerClass: "text-cyan-700 dark:text-cyan-300",

    borderClass: "border-slate-200 dark:border-white/10",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(8,145,178,0.08)] dark:hover:shadow-[0_18px_50px_rgba(34,211,238,0.06)]",

    delayClass: "[animation-delay:140ms]",
  },

  {
    icon: Database,

    title: "Databases",

    text: "Modelado relacional robusto, consultas indexadas complejas, integridad referencial y transacciones ACID confiables.",

    label: "Integridad",

    footer: "ACID · Indexing",

    iconClass:
      "border-violet-200 bg-violet-50 text-violet-600 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300",

    footerClass: "text-violet-600 dark:text-violet-300",

    borderClass: "border-slate-200 dark:border-white/10",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(124,58,237,0.08)] dark:hover:shadow-[0_18px_50px_rgba(167,139,250,0.06)]",

    delayClass: "[animation-delay:200ms]",
  },

  {
    icon: Cloud,

    title: "Cloud & Deployment",

    text: "Contenedores Docker, orquestación, CI/CD, automatización con PM2 y despliegue de alta disponibilidad en la nube.",

    label: "DevOps",

    footer: "Docker · PM2",

    iconClass:
      "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300",

    footerClass: "text-cyan-700 dark:text-cyan-300",

    borderClass: "border-slate-200 dark:border-white/10",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(8,145,178,0.08)] dark:hover:shadow-[0_18px_50px_rgba(34,211,238,0.06)]",

    delayClass: "[animation-delay:260ms]",
  },
];

/* =========================================================
   COMPONENTE
========================================================= */

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-14 transition-colors duration-300 sm:py-16 md:py-20 landscape:py-12 dark:border-white/[0.07]"
    >
      {/* =====================================================
          ILUMINACIÓN
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-28 h-[240px] w-[240px] rounded-full bg-cyan-400/[0.08] blur-[90px] sm:-left-36 sm:h-[300px] sm:w-[300px] sm:blur-[110px] dark:bg-cyan-400/[0.025]"
      />

      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
            CABECERA
        ================================================= */}

        <div className="animate-in fade-in slide-in-from-bottom-4 mb-7 min-w-0 duration-500 sm:mb-9 lg:mb-10">
          {/* =================================================
              ETIQUETA
          ================================================= */}

          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 shadow-sm transition-colors duration-300 sm:px-3 dark:border-cyan-300/25 dark:bg-[#1b2330]/80 dark:shadow-none">
            <span className="truncate font-mono text-[8px] font-bold tracking-[0.08em] text-cyan-700 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] dark:text-cyan-300">
              Trayectoria
            </span>
          </div>

          {/* =================================================
              TÍTULO
          ================================================= */}

          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-slate-950 min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem] dark:text-white">
            Sobre Mí
          </h2>

          {/* =================================================
              DESCRIPCIÓN
          ================================================= */}

          <p className="mt-3 max-w-[780px] text-[13px] leading-6 text-slate-600 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[17px] dark:text-slate-300">
            Titulado en Diseño y Desarrollo de Software por Tecsup,
            perteneciente al décimo superior y beneficiario de Beca 18.
            Apasionado por construir soluciones web, backend, móviles y
            tecnológicas.
          </p>
        </div>

        {/* =================================================
            TARJETAS
        ================================================= */}

        <div className="grid w-full min-w-0 grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4 lg:grid-cols-2 xl:grid-cols-4 landscape:min-[700px]:grid-cols-2 xl:landscape:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className={`group animate-in fade-in slide-in-from-bottom-5 relative flex min-w-0 flex-col overflow-hidden rounded-[14px] border bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 min-[360px]:p-5 sm:min-h-[255px] sm:rounded-[16px] sm:p-6 lg:min-h-[275px] dark:bg-[#121620]/95 dark:shadow-none ${area.borderClass} ${area.glowClass} ${area.delayClass} `}
              >
                {/* =================================================
                    GLOW SUPERIOR
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-50/80 to-transparent sm:h-24 dark:from-white/[0.015]"
                />

                {/* =================================================
                    ICONO
                ================================================= */}

                <div
                  className={`relative mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 ease-out group-hover:scale-[1.06] group-hover:-rotate-[4deg] sm:mb-5 sm:h-12 sm:w-12 sm:rounded-xl ${area.iconClass} `}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="sm:h-[22px] sm:w-[22px]"
                  />
                </div>

                {/* =================================================
                    TÍTULO
                ================================================= */}

                <h3 className="relative max-w-full text-[16px] leading-6 font-bold tracking-[-0.025em] break-words text-slate-950 min-[360px]:text-[17px] sm:text-[19px] dark:text-white">
                  {area.title}
                </h3>

                {/* =================================================
                    TEXTO
                ================================================= */}

                <p className="relative mt-2.5 flex-1 text-[12px] leading-6 break-words text-slate-600 sm:mt-3 sm:text-[13px] sm:leading-[1.65] dark:text-slate-300">
                  {area.text}
                </p>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="relative mt-4 flex min-w-0 flex-col gap-2 border-t border-slate-200 pt-3 min-[350px]:flex-row min-[350px]:items-center min-[350px]:justify-between sm:mt-5 sm:gap-4 sm:pt-4 dark:border-white/[0.07]">
                  <span className="min-w-0 font-mono text-[8px] font-semibold tracking-[0.1em] break-words text-slate-500 min-[360px]:text-[9px] sm:tracking-[0.14em] dark:text-slate-500">
                    {area.label}
                  </span>

                  <span
                    className={`min-w-0 font-mono text-[8px] font-bold tracking-[0.08em] break-words min-[350px]:text-right min-[360px]:text-[9px] sm:tracking-[0.12em] ${area.footerClass} `}
                  >
                    {area.footer}
                  </span>
                </div>

                {/* =================================================
                    LÍNEA HOVER OPTIMIZADA

                    Antes:
                    width 0 -> width 100%

                    Ahora:
                    scaleX(0) -> scaleX(1)
                ================================================= */}

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
