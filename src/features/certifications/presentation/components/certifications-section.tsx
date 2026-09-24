"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { BadgeCheck, ShieldCheck } from "lucide-react";

import { motion } from "motion/react";

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

export function CertificationsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const loopWidthRef = useRef(0);

  const animationRef = useRef<number | null>(null);

  const lastFrameRef = useRef(0);

  const draggingRef = useRef(false);

  const hoveringRef = useRef(false);

  const startXRef = useRef(0);

  const startScrollLeftRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  /*
   * Tres copias permiten crear
   * el movimiento infinito.
   */
  const loopItems = [...certifications, ...certifications, ...certifications];

  /* =====================================================
     NORMALIZAR LOOP
  ===================================================== */

  const normalizePosition = useCallback(() => {
    const carousel = carouselRef.current;

    const width = loopWidthRef.current;

    if (!carousel || width <= 0) {
      return;
    }

    if (carousel.scrollLeft >= width * 2) {
      carousel.scrollLeft -= width;

      if (draggingRef.current) {
        startScrollLeftRef.current -= width;
      }
    }

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += width;

      if (draggingRef.current) {
        startScrollLeftRef.current += width;
      }
    }
  }, []);

  /* =====================================================
     CALCULAR TAMAÑO DEL LOOP
  ===================================================== */

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

    const frame = requestAnimationFrame(calculateLoop);

    window.addEventListener("resize", calculateLoop);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("resize", calculateLoop);
    };
  }, []);

  /* =====================================================
     MOVIMIENTO AUTOMÁTICO
  ===================================================== */

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

      const delta = Math.min(time - lastFrameRef.current, 50);

      lastFrameRef.current = time;

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
  }, [normalizePosition]);

  /* =====================================================
     HOVER
  ===================================================== */

  function handleMouseEnter() {
    hoveringRef.current = true;
  }

  function handleMouseLeave() {
    hoveringRef.current = false;

    if (draggingRef.current) {
      draggingRef.current = false;

      setIsDragging(false);
    }

    lastFrameRef.current = performance.now();
  }

  /* =====================================================
     ARRASTRE
  ===================================================== */

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

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    if (!carousel || !draggingRef.current) {
      return;
    }

    const distance = event.clientX - startXRef.current;

    carousel.scrollLeft = startScrollLeftRef.current - distance;

    normalizePosition();
  }

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
      // Pointer liberado.
    }

    normalizePosition();

    lastFrameRef.current = performance.now();
  }

  function handlePointerCancel() {
    draggingRef.current = false;

    setIsDragging(false);

    lastFrameRef.current = performance.now();
  }

  return (
    <section
      id="certificaciones"
      className="relative w-full max-w-full overflow-x-clip border-t border-white/[0.07] py-14 sm:py-16 md:py-20 landscape:py-12"
    >
      {/* =================================================
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
        className="pointer-events-none absolute top-0 -right-28 h-[260px] w-[260px] rounded-full bg-cyan-400 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[155px]"
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
        className="pointer-events-none absolute bottom-0 -left-28 h-[240px] w-[240px] rounded-full bg-blue-500 blur-[100px] sm:-left-32 sm:h-[340px] sm:w-[340px] sm:blur-[150px]"
      />

      {/* =================================================
          CONTENEDOR GENERAL
      ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="min-w-0"
        >
          {/* BADGE */}

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
            className="inline-flex max-w-full items-center gap-2 rounded-[5px] border border-cyan-300/25 bg-[#1b2330]/80 px-2.5 py-1.5 sm:px-3"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-300 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.12em]">
              Credenciales
            </span>
          </motion.div>

          {/* TÍTULO */}

          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.04em] break-words text-white min-[360px]:text-[30px] sm:mt-4 sm:text-3xl md:text-[2.5rem]">
            Certificaciones
          </h2>

          {/* DESCRIPCIÓN */}

          <p className="mt-3 max-w-[760px] text-[13px] leading-6 break-words text-slate-300 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[16px]">
            Acreditaciones y formación técnica orientadas al desarrollo de
            software, datos, metodologías ágiles y tecnologías modernas.
          </p>
        </motion.div>

        {/* =================================================
            SLIDER
        ================================================= */}

        <div className="relative mt-7 w-full max-w-full min-w-0 overflow-hidden sm:mt-9 lg:mt-10">
          {/* FADE IZQUIERDO */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-5 bg-gradient-to-r from-[#070b14] via-[#070b14]/60 to-transparent min-[360px]:w-7 sm:w-10 md:w-14" />

          {/* FADE DERECHO */}

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-5 bg-gradient-to-l from-[#070b14] via-[#070b14]/60 to-transparent min-[360px]:w-7 sm:w-10 md:w-14" />

          {/* =================================================
              CARRUSEL
          ================================================= */}

          <div
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            className={`flex w-full max-w-full min-w-0 touch-pan-y gap-3 overflow-x-auto overscroll-x-contain py-3 select-none min-[360px]:gap-4 sm:gap-5 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
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
                          y: -6,
                          scale: 1.006,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.25,
                  }}
                  className={`group relative flex min-h-[255px] w-[calc(100vw-3rem)] max-w-[330px] shrink-0 flex-col overflow-hidden rounded-[16px] border border-white/[0.09] bg-[#151923]/95 p-4 shadow-[0_14px_45px_rgba(0,0,0,0.16)] transition-[border-color,box-shadow] duration-500 min-[360px]:min-h-[270px] min-[360px]:rounded-[18px] min-[360px]:p-5 sm:min-h-[290px] sm:w-[340px] sm:max-w-[340px] sm:rounded-[20px] sm:p-6 lg:w-[330px] ${colors.hover}`}
                >
                  {/* FONDO */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-transparent" />

                  {/* GLOW */}

                  <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-cyan-400/[0.025] blur-[60px] transition duration-500 group-hover:bg-cyan-400/[0.055] sm:-top-20 sm:-right-20 sm:h-44 sm:w-44 sm:blur-[80px]" />

                  {/* =================================================
                        HEADER CARD
                    ================================================= */}

                  <div className="relative flex min-w-0 flex-col gap-3 min-[350px]:flex-row min-[350px]:items-start min-[350px]:justify-between">
                    {/* Organización */}

                    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
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
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border sm:h-10 sm:w-10 sm:rounded-xl ${colors.iconBg}`}
                      >
                        <ShieldCheck size={17} className={colors.icon} />
                      </motion.div>

                      <div className="min-w-0">
                        <span
                          className={`block max-w-full truncate font-mono text-[8px] font-bold tracking-[0.07em] sm:text-[9px] sm:tracking-[0.12em] ${colors.organization}`}
                        >
                          {certificate.organization}
                        </span>

                        <span className="mt-1 block max-w-full truncate font-mono text-[7px] tracking-[0.07em] text-slate-600 uppercase sm:text-[8px] sm:tracking-[0.12em]">
                          Professional Credential
                        </span>
                      </div>
                    </div>

                    {/* Año */}

                    <span
                      className={`w-fit shrink-0 rounded-md border px-2 py-1 font-mono text-[8px] font-bold sm:px-2.5 sm:text-[9px] ${colors.year}`}
                    >
                      {certificate.year}
                    </span>
                  </div>

                  {/* NÚMERO */}

                  <span className="pointer-events-none absolute top-[72px] right-4 font-mono text-[36px] leading-none font-black text-white/[0.025] min-[360px]:text-[42px] sm:top-[78px] sm:right-5 sm:text-[48px]">
                    {String(originalIndex + 1).padStart(2, "0")}
                  </span>

                  {/* =================================================
                        TÍTULO
                    ================================================= */}

                  <h3 className="relative mt-5 max-w-full text-[16px] leading-6 font-bold tracking-[-0.035em] break-words text-white transition-colors duration-300 group-hover:text-cyan-50 min-[360px]:text-[18px] sm:mt-7 sm:max-w-[270px] sm:text-[20px] sm:leading-7">
                    {certificate.name}
                  </h3>

                  {/* DESCRIPCIÓN */}

                  <p className="relative mt-2.5 flex-1 text-[11px] leading-5 break-words text-slate-400 transition-colors duration-300 group-hover:text-slate-300 min-[360px]:text-[12px] min-[360px]:leading-6 sm:mt-3 sm:text-[13px]">
                    {certificate.description}
                  </p>

                  {/* =================================================
                        FOOTER
                    ================================================= */}

                  <div className="relative mt-4 flex min-w-0 flex-col gap-2 border-t border-white/[0.07] pt-3 min-[340px]:flex-row min-[340px]:items-center min-[340px]:justify-between sm:mt-6 sm:pt-4">
                    {/* Verificada */}

                    <div className="flex min-w-0 items-center gap-2">
                      <BadgeCheck
                        size={14}
                        className={`shrink-0 ${colors.icon}`}
                      />

                      <span className="min-w-0 truncate font-mono text-[8px] tracking-[0.06em] text-slate-400 sm:text-[9px] sm:tracking-[0.1em]">
                        Verificada
                      </span>
                    </div>

                    {/* Código */}

                    <div className="flex min-w-0 items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot} shadow-[0_0_7px_currentColor]`}
                      />

                      <span
                        className={`min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] sm:text-[9px] sm:tracking-[0.12em] ${colors.organization}`}
                      >
                        CERT-
                        {String(originalIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* LÍNEA INFERIOR */}

                  <div className="absolute bottom-0 left-0 h-px w-0 max-w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-700 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
