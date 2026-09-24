"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { BadgeCheck, ShieldCheck } from "lucide-react";

import { motion } from "motion/react";

/*
|--------------------------------------------------------------------------
| CONFIGURACIÓN
|--------------------------------------------------------------------------
|
| Velocidad en píxeles por segundo.
| Puedes cambiar:
|
| 20 = lento
| 28 = recomendado
| 40 = rápido
|
*/

const AUTO_SPEED = 28;

const certifications = [
  {
    name: "Responsive Web Design",
    organization: "freeCodeCamp",
    year: "2024",
    description:
      "Desarrollo de interfaces web responsivas, estructura semántica y adaptación a diferentes dispositivos.",
    accent: "cyan",
  },
  {
    name: "Scientific Computing with Python",
    organization: "freeCodeCamp",
    year: "2024",
    description:
      "Programación con Python aplicada a lógica, estructuras de datos y resolución de problemas computacionales.",
    accent: "blue",
  },
  {
    name: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    year: "2025",
    description:
      "Fundamentos de análisis de datos, interpretación de información y visualización orientada a decisiones.",
    accent: "cyan",
  },
  {
    name: "Gestión Ágil y Lean",
    organization: "Fundación Telefónica",
    year: "2025",
    description:
      "Principios de metodologías ágiles, mejora continua, organización del trabajo y entrega de valor.",
    accent: "violet",
  },
  {
    name: "Data Engineers en Azure",
    organization: "NTT DATA",
    year: "2025",
    description:
      "Conceptos de ingeniería de datos y servicios cloud aplicados a ecosistemas tecnológicos modernos.",
    accent: "blue",
  },
];

/*
|--------------------------------------------------------------------------
| COLORES
|--------------------------------------------------------------------------
*/

function getAccentClasses(accent: string) {
  switch (accent) {
    case "violet":
      return {
        organization: "text-violet-300",

        year: "border-violet-400/30 bg-violet-400/[0.08] text-violet-300",

        icon: "text-violet-300",

        iconBg: "border-violet-400/20 bg-violet-400/[0.08]",

        hover:
          "hover:border-violet-400/40 hover:shadow-[0_22px_70px_rgba(167,139,250,0.10)]",

        dot: "bg-violet-400",
      };

    case "blue":
      return {
        organization: "text-blue-300",

        year: "border-blue-400/30 bg-blue-400/[0.08] text-blue-300",

        icon: "text-blue-300",

        iconBg: "border-blue-400/20 bg-blue-400/[0.08]",

        hover:
          "hover:border-blue-400/40 hover:shadow-[0_22px_70px_rgba(96,165,250,0.10)]",

        dot: "bg-blue-400",
      };

    default:
      return {
        organization: "text-cyan-300",

        year: "border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-300",

        icon: "text-cyan-300",

        iconBg: "border-cyan-400/20 bg-cyan-400/[0.08]",

        hover:
          "hover:border-cyan-400/40 hover:shadow-[0_22px_70px_rgba(34,211,238,0.10)]",

        dot: "bg-cyan-400",
      };
  }
}

/*
|--------------------------------------------------------------------------
| COMPONENTE
|--------------------------------------------------------------------------
*/

export function CertificationsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  /*
   * Necesitamos tres grupos:
   *
   * grupo 1
   * grupo 2 <- comenzamos aquí
   * grupo 3
   *
   * De esta forma podemos movernos hacia ambos lados
   * sin llegar visualmente al final.
   */

  const loopItems = [...certifications, ...certifications, ...certifications];

  /*
   |--------------------------------------------------------------------------
   | REFS
   |--------------------------------------------------------------------------
   */

  const loopWidthRef = useRef(0);

  const animationRef = useRef<number | null>(null);

  const lastFrameRef = useRef<number>(0);

  const draggingRef = useRef(false);

  const hoveringRef = useRef(false);

  const startXRef = useRef(0);

  const startScrollLeftRef = useRef(0);

  /*
   |--------------------------------------------------------------------------
   | ESTADO VISUAL
   |--------------------------------------------------------------------------
   */

  const [isDragging, setIsDragging] = useState(false);

  /*
   |--------------------------------------------------------------------------
   | NORMALIZAR POSICIÓN
   |--------------------------------------------------------------------------
   |
   | Esto crea el efecto infinito.
   |
   */

  function normalizePosition() {
    const carousel = carouselRef.current;

    const width = loopWidthRef.current;

    if (!carousel || width <= 0) {
      return;
    }

    /*
     * Entramos al tercer bloque.
     *
     * Regresamos silenciosamente
     * al segundo.
     */

    if (carousel.scrollLeft >= width * 2) {
      carousel.scrollLeft -= width;

      if (draggingRef.current) {
        startScrollLeftRef.current -= width;
      }
    }

    /*
     * Entramos al primer bloque.
     *
     * Volvemos silenciosamente
     * al segundo.
     */

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += width;

      if (draggingRef.current) {
        startScrollLeftRef.current += width;
      }
    }
  }

  /*
   |--------------------------------------------------------------------------
   | INICIALIZAR LOOP
   |--------------------------------------------------------------------------
   */

  useEffect(() => {
    function calculateLoop() {
      const carousel = carouselRef.current;

      if (!carousel) {
        return;
      }

      const cards = carousel.querySelectorAll<HTMLElement>(
        "[data-certification-card]",
      );

      if (cards.length < certifications.length * 2) {
        return;
      }

      const first = cards[0];

      const secondGroup = cards[certifications.length];

      if (!first || !secondGroup) {
        return;
      }

      const width = secondGroup.offsetLeft - first.offsetLeft;

      loopWidthRef.current = width;

      carousel.scrollLeft = width;
    }

    const frame = requestAnimationFrame(() => {
      calculateLoop();
    });

    window.addEventListener("resize", calculateLoop);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("resize", calculateLoop);
    };
  }, []);

  /*
   |--------------------------------------------------------------------------
   | MOVIMIENTO AUTOMÁTICO CONTINUO
   |--------------------------------------------------------------------------
   */

  useEffect(() => {
    function animate(time: number) {
      const carousel = carouselRef.current;

      if (!carousel) {
        animationRef.current = requestAnimationFrame(animate);

        return;
      }

      if (!lastFrameRef.current) {
        lastFrameRef.current = time;
      }

      /*
       * Delta time.
       *
       * Hace que la velocidad sea
       * igual aunque el monitor sea
       * 60Hz, 120Hz, etc.
       */

      const delta = Math.min(time - lastFrameRef.current, 50);

      lastFrameRef.current = time;

      /*
       * Solo mover si:
       *
       * - el mouse NO está encima
       * - NO estamos arrastrando
       */

      if (!hoveringRef.current && !draggingRef.current) {
        carousel.scrollLeft += (AUTO_SPEED * delta) / 1000;

        normalizePosition();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  /*
   |--------------------------------------------------------------------------
   | MOUSE ENTER
   |--------------------------------------------------------------------------
   |
   | Pausa automática.
   |
   */

  function handleMouseEnter() {
    hoveringRef.current = true;
  }

  /*
   |--------------------------------------------------------------------------
   | MOUSE LEAVE
   |--------------------------------------------------------------------------
   |
   | Continúa automáticamente.
   |
   */

  function handleMouseLeave() {
    hoveringRef.current = false;

    if (draggingRef.current) {
      draggingRef.current = false;

      setIsDragging(false);
    }

    lastFrameRef.current = performance.now();
  }

  /*
   |--------------------------------------------------------------------------
   | INICIAR ARRASTRE
   |--------------------------------------------------------------------------
   */

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    draggingRef.current = true;

    setIsDragging(true);

    startXRef.current = event.clientX;

    startScrollLeftRef.current = carousel.scrollLeft;

    carousel.setPointerCapture(event.pointerId);
  }

  /*
   |--------------------------------------------------------------------------
   | ARRASTRANDO
   |--------------------------------------------------------------------------
   */

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    if (!carousel || !draggingRef.current) {
      return;
    }

    const distance = event.clientX - startXRef.current;

    carousel.scrollLeft = startScrollLeftRef.current - distance;

    normalizePosition();
  }

  /*
   |--------------------------------------------------------------------------
   | TERMINAR ARRASTRE
   |--------------------------------------------------------------------------
   */

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    draggingRef.current = false;

    setIsDragging(false);

    try {
      carousel.releasePointerCapture(event.pointerId);
    } catch {
      // Ya fue liberado.
    }

    normalizePosition();

    lastFrameRef.current = performance.now();
  }

  function handlePointerCancel() {
    draggingRef.current = false;

    setIsDragging(false);

    lastFrameRef.current = performance.now();
  }

  /*
   |--------------------------------------------------------------------------
   | JSX
   |--------------------------------------------------------------------------
   */

  return (
    <section
      id="certificaciones"
      className="relative overflow-hidden border-t border-white/[0.07] py-20"
    >
      {/* ================================================
          GLOW AMBIENTAL
      ================================================= */}

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          opacity: [0.02, 0.045, 0.02],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-0 -right-28 h-[420px] w-[420px] rounded-full bg-cyan-400 blur-[155px]"
      />

      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, -25, 0],
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 -left-32 h-[340px] w-[340px] rounded-full bg-blue-500 blur-[150px]"
      />

      <div className="relative">
        {/* ================================================
            CABECERA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="inline-flex items-center gap-2 rounded-[5px] border border-cyan-300/25 bg-[#1b2330]/80 px-3 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

            <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-cyan-300 uppercase">
              Credenciales
            </span>
          </motion.div>

          {/* Título */}

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white md:text-[2.5rem]">
            Certificaciones
          </h2>

          {/* Descripción */}

          <p className="mt-3 max-w-[760px] text-[15px] leading-7 text-slate-300 md:text-[16px]">
            Acreditaciones y formación técnica orientadas al desarrollo de
            software, datos, metodologías ágiles y tecnologías modernas.
          </p>
        </motion.div>

        {/* ================================================
            SLIDER
        ================================================= */}

        <div className="relative mt-10">
          {/* Fade izquierdo */}

          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-10 bg-gradient-to-r from-[#070b14] via-[#070b14]/60 to-transparent md:w-16" />

          {/* Fade derecho */}

          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-20 w-10 bg-gradient-to-l from-[#070b14] via-[#070b14]/60 to-transparent md:w-16" />

          {/* CAROUSEL */}

          <div
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            className={`flex gap-5 overflow-x-auto py-3 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
            style={{
              touchAction: "pan-y",
            }}
          >
            {loopItems.map((certificate, index) => {
              const originalIndex = index % certifications.length;

              const copyIndex = Math.floor(index / certifications.length);

              const colors = getAccentClasses(certificate.accent);

              return (
                <motion.article
                  data-certification-card
                  aria-hidden={copyIndex !== 1}
                  key={`${certificate.name}-${index}`}
                  whileHover={
                    !isDragging
                      ? {
                          y: -7,
                          scale: 1.008,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.25,
                  }}
                  className={`group relative flex min-h-[290px] w-[88vw] max-w-[340px] shrink-0 flex-col overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#151923]/95 p-6 shadow-[0_14px_45px_rgba(0,0,0,0.16)] transition-[border-color,box-shadow] duration-500 sm:w-[340px] lg:w-[330px] ${colors.hover}`}
                >
                  {/* Gradiente interno */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-transparent" />

                  {/* Glow esquina */}

                  <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-cyan-400/[0.025] blur-[80px] transition duration-500 group-hover:bg-cyan-400/[0.055]" />

                  {/* ====================================
                        HEADER
                    ===================================== */}

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <motion.div
                        whileHover={{
                          rotate: -6,
                          scale: 1.08,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 18,
                        }}
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${colors.iconBg}`}
                      >
                        <ShieldCheck size={18} className={colors.icon} />
                      </motion.div>

                      <div className="min-w-0">
                        <span
                          className={`block truncate font-mono text-[9px] font-bold tracking-[0.12em] ${colors.organization}`}
                        >
                          {certificate.organization}
                        </span>

                        <span className="mt-1 block font-mono text-[8px] tracking-[0.12em] text-slate-600 uppercase">
                          Professional Credential
                        </span>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 rounded-md border px-2.5 py-1 font-mono text-[9px] font-bold ${colors.year}`}
                    >
                      {certificate.year}
                    </span>
                  </div>

                  {/* Número */}

                  <span className="pointer-events-none absolute top-[78px] right-5 font-mono text-[48px] leading-none font-black text-white/[0.025]">
                    {String(originalIndex + 1).padStart(2, "0")}
                  </span>

                  {/* ====================================
                        NOMBRE
                    ===================================== */}

                  <h3 className="relative mt-7 max-w-[270px] text-[20px] leading-7 font-bold tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-cyan-50">
                    {certificate.name}
                  </h3>

                  {/* Descripción */}

                  <p className="relative mt-3 flex-1 text-[13px] leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    {certificate.description}
                  </p>

                  {/* ====================================
                        FOOTER
                    ===================================== */}

                  <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                    <div className="flex items-center gap-2">
                      <BadgeCheck size={15} className={colors.icon} />

                      <span className="font-mono text-[9px] tracking-[0.1em] text-slate-400">
                        Verificada
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${colors.dot} shadow-[0_0_7px_currentColor]`}
                      />

                      <span
                        className={`font-mono text-[9px] font-bold tracking-[0.12em] ${colors.organization}`}
                      >
                        CERT-
                        {String(originalIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Línea inferior */}

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-700 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
