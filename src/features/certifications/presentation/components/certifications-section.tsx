"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { BadgeCheck, ShieldCheck } from "lucide-react";

const AUTO_SPEED = 28;

/* =========================================================
   CERTIFICACIONES
========================================================= */

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

/* =========================================================
   COLORES
========================================================= */

function getAccentClasses(accent: string) {
  switch (accent) {
    case "violet":
      return {
        organization: "text-violet-700 dark:text-violet-300",

        year: "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/30 dark:bg-violet-400/[0.08] dark:text-violet-300",

        icon: "text-violet-600 dark:text-violet-300",

        iconBg:
          "border-violet-200 bg-violet-50 dark:border-violet-400/20 dark:bg-violet-400/[0.08]",

        hover:
          "hover:border-violet-400/50 hover:shadow-[0_22px_70px_rgba(139,92,246,0.10)] dark:hover:border-violet-400/40 dark:hover:shadow-[0_22px_70px_rgba(167,139,250,0.10)]",

        dot: "bg-violet-500 dark:bg-violet-400",
      };

    case "blue":
      return {
        organization: "text-blue-700 dark:text-blue-300",

        year: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/[0.08] dark:text-blue-300",

        icon: "text-blue-600 dark:text-blue-300",

        iconBg:
          "border-blue-200 bg-blue-50 dark:border-blue-400/20 dark:bg-blue-400/[0.08]",

        hover:
          "hover:border-blue-400/50 hover:shadow-[0_22px_70px_rgba(59,130,246,0.10)] dark:hover:border-blue-400/40 dark:hover:shadow-[0_22px_70px_rgba(96,165,250,0.10)]",

        dot: "bg-blue-500 dark:bg-blue-400",
      };

    default:
      return {
        organization: "text-cyan-700 dark:text-cyan-300",

        year: "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/[0.08] dark:text-cyan-300",

        icon: "text-cyan-600 dark:text-cyan-300",

        iconBg:
          "border-cyan-200 bg-cyan-50 dark:border-cyan-400/20 dark:bg-cyan-400/[0.08]",

        hover:
          "hover:border-cyan-400/50 hover:shadow-[0_22px_70px_rgba(6,182,212,0.10)] dark:hover:border-cyan-400/40 dark:hover:shadow-[0_22px_70px_rgba(34,211,238,0.10)]",

        dot: "bg-cyan-500 dark:bg-cyan-400",
      };
  }
}

/* =========================================================
   COMPONENTE
========================================================= */

export function CertificationsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const firstGroupRef = useRef<HTMLDivElement>(null);

  const secondGroupRef = useRef<HTMLDivElement>(null);

  const loopWidthRef = useRef(0);

  const animationRef = useRef<number | null>(null);

  const lastFrameRef = useRef(0);

  const draggingRef = useRef(false);

  const hoveringRef = useRef(false);

  const visibleRef = useRef(false);

  const startXRef = useRef(0);

  const startScrollLeftRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  /* =======================================================
     NORMALIZAR POSICIÓN

     Dos copias:
     [GRUPO A][GRUPO B]

     Al llegar al grupo B volvemos
     matemáticamente al grupo A.
  ======================================================= */

  const normalizePosition = useCallback(() => {
    const carousel = carouselRef.current;

    const width = loopWidthRef.current;

    if (!carousel || width <= 0) {
      return;
    }

    /*
     * Movimiento hacia delante.
     */
    if (carousel.scrollLeft >= width) {
      carousel.scrollLeft -= width;

      if (draggingRef.current) {
        startScrollLeftRef.current -= width;
      }
    }

    /*
     * Movimiento manual hacia atrás.
     */
    if (draggingRef.current && carousel.scrollLeft <= 0) {
      carousel.scrollLeft += width;

      startScrollLeftRef.current += width;
    }
  }, []);

  /* =======================================================
     CALCULAR ANCHO DEL LOOP

     Ya no buscamos las 15 cards ni
     calculamos cada elemento.

     Solo medimos dos grupos.
  ======================================================= */

  useEffect(() => {
    const carousel = carouselRef.current;

    const firstGroup = firstGroupRef.current;

    const secondGroup = secondGroupRef.current;

    if (!carousel || !firstGroup || !secondGroup) {
      return;
    }

    function calculateLoop() {
      const first = firstGroupRef.current;

      const second = secondGroupRef.current;

      const currentCarousel = carouselRef.current;

      if (!first || !second || !currentCarousel) {
        return;
      }

      const width = second.offsetLeft - first.offsetLeft;

      if (width <= 0) {
        return;
      }

      loopWidthRef.current = width;

      /*
       * Evitamos comenzar exactamente
       * en cero para permitir wrap
       * hacia la izquierda.
       */
      if (currentCarousel.scrollLeft === 0) {
        currentCarousel.scrollLeft = 1;
      }
    }

    const initialFrame = requestAnimationFrame(calculateLoop);

    const resizeObserver = new ResizeObserver(() => {
      calculateLoop();
    });

    resizeObserver.observe(carousel);
    resizeObserver.observe(firstGroup);

    return () => {
      cancelAnimationFrame(initialFrame);

      resizeObserver.disconnect();
    };
  }, []);

  /* =======================================================
     AUTOPLAY OPTIMIZADO

     El requestAnimationFrame se detiene
     totalmente cuando el carrusel está
     fuera del viewport.
  ======================================================= */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    function stopAnimation() {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);

        animationRef.current = null;
      }

      lastFrameRef.current = 0;
    }

    function animate(time: number) {
      const currentCarousel = carouselRef.current;

      if (!currentCarousel || !visibleRef.current) {
        animationRef.current = null;

        return;
      }

      if (!lastFrameRef.current) {
        lastFrameRef.current = time;
      }

      const delta = Math.min(time - lastFrameRef.current, 50);

      lastFrameRef.current = time;

      if (!hoveringRef.current && !draggingRef.current) {
        currentCarousel.scrollLeft += (AUTO_SPEED * delta) / 1000;

        normalizePosition();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    function startAnimation() {
      if (animationRef.current !== null || !visibleRef.current) {
        return;
      }

      lastFrameRef.current = performance.now();

      animationRef.current = requestAnimationFrame(animate);
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        visibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      {
        rootMargin: "160px 0px",
        threshold: 0.01,
      },
    );

    intersectionObserver.observe(carousel);

    return () => {
      intersectionObserver.disconnect();

      stopAnimation();
    };
  }, [normalizePosition]);

  /* =======================================================
     HOVER
  ======================================================= */

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

  /* =======================================================
     ARRASTRE
  ======================================================= */

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    /*
     * Solo botón izquierdo del mouse.
     * Touch sigue funcionando normalmente.
     */
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    draggingRef.current = true;

    setIsDragging(true);

    startXRef.current = event.clientX;

    startScrollLeftRef.current = carousel.scrollLeft;

    try {
      carousel.setPointerCapture(event.pointerId);
    } catch {
      // Pointer no capturable.
    }
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
      // Pointer ya liberado.
    }

    normalizePosition();

    lastFrameRef.current = performance.now();
  }

  function handlePointerCancel() {
    draggingRef.current = false;

    setIsDragging(false);

    lastFrameRef.current = performance.now();
  }

  /* =======================================================
     RENDER DE UNA CERTIFICACIÓN
  ======================================================= */

  function renderCertificate(
    certificate: (typeof certifications)[number],
    originalIndex: number,
    copyIndex: number,
  ) {
    const colors = getAccentClasses(certificate.accent);

    return (
      <article
        aria-hidden={copyIndex !== 0}
        key={`${copyIndex}-${certificate.name}`}
        className={`group relative flex min-h-[255px] w-[calc(100vw-3rem)] max-w-[330px] shrink-0 flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white p-4 shadow-[0_14px_45px_rgba(15,23,42,0.07)] transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-1.5 hover:scale-[1.006] min-[360px]:min-h-[270px] min-[360px]:rounded-[18px] min-[360px]:p-5 sm:min-h-[290px] sm:w-[340px] sm:max-w-[340px] sm:rounded-[20px] sm:p-6 lg:w-[330px] dark:border-white/[0.09] dark:bg-[#151923]/95 dark:shadow-[0_14px_45px_rgba(0,0,0,0.16)] ${colors.hover} `}
      >
        {/* ===============================================
            FONDO
        =============================================== */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-50/70 via-transparent to-transparent dark:from-white/[0.025]" />

        {/* ===============================================
            GLOW
        =============================================== */}

        <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-cyan-400/[0.06] blur-[60px] transition-[background-color] duration-500 group-hover:bg-cyan-400/[0.10] sm:-top-20 sm:-right-20 sm:h-44 sm:w-44 sm:blur-[80px] dark:bg-cyan-400/[0.025] dark:group-hover:bg-cyan-400/[0.055]" />

        {/* ===============================================
            HEADER CARD
        =============================================== */}

        <div className="relative flex min-w-0 flex-col gap-3 min-[350px]:flex-row min-[350px]:items-start min-[350px]:justify-between">
          {/* ORGANIZACIÓN */}

          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 hover:scale-110 hover:-rotate-6 sm:h-10 sm:w-10 sm:rounded-xl ${colors.iconBg} `}
            >
              <ShieldCheck size={17} className={colors.icon} />
            </div>

            <div className="min-w-0">
              <span
                className={`block max-w-full truncate font-mono text-[8px] font-bold tracking-[0.07em] sm:text-[9px] sm:tracking-[0.12em] ${colors.organization} `}
              >
                {certificate.organization}
              </span>

              <span className="mt-1 block max-w-full truncate font-mono text-[7px] tracking-[0.07em] text-slate-500 uppercase sm:text-[8px] sm:tracking-[0.12em] dark:text-slate-600">
                Professional Credential
              </span>
            </div>
          </div>

          {/* AÑO */}

          <span
            className={`w-fit shrink-0 rounded-md border px-2 py-1 font-mono text-[8px] font-bold sm:px-2.5 sm:text-[9px] ${colors.year} `}
          >
            {certificate.year}
          </span>
        </div>

        {/* ===============================================
            NÚMERO DECORATIVO
        =============================================== */}

        <span className="pointer-events-none absolute top-[72px] right-4 font-mono text-[36px] leading-none font-black text-slate-900/[0.035] min-[360px]:text-[42px] sm:top-[78px] sm:right-5 sm:text-[48px] dark:text-white/[0.025]">
          {String(originalIndex + 1).padStart(2, "0")}
        </span>

        {/* ===============================================
            TÍTULO
        =============================================== */}

        <h3 className="relative mt-5 max-w-full text-[16px] leading-6 font-bold tracking-[-0.035em] break-words text-slate-950 transition-colors duration-300 group-hover:text-cyan-700 min-[360px]:text-[18px] sm:mt-7 sm:max-w-[270px] sm:text-[20px] sm:leading-7 dark:text-white dark:group-hover:text-cyan-50">
          {certificate.name}
        </h3>

        {/* ===============================================
            DESCRIPCIÓN
        =============================================== */}

        <p className="relative mt-2.5 flex-1 text-[11px] leading-5 break-words text-slate-600 transition-colors duration-300 group-hover:text-slate-700 min-[360px]:text-[12px] min-[360px]:leading-6 sm:mt-3 sm:text-[13px] dark:text-slate-400 dark:group-hover:text-slate-300">
          {certificate.description}
        </p>

        {/* ===============================================
            FOOTER
        =============================================== */}

        <div className="relative mt-4 flex min-w-0 flex-col gap-2 border-t border-slate-200 pt-3 min-[340px]:flex-row min-[340px]:items-center min-[340px]:justify-between sm:mt-6 sm:pt-4 dark:border-white/[0.07]">
          {/* VERIFICADA */}

          <div className="flex min-w-0 items-center gap-2">
            <BadgeCheck size={14} className={`shrink-0 ${colors.icon}`} />

            <span className="min-w-0 truncate font-mono text-[8px] tracking-[0.06em] text-slate-500 sm:text-[9px] sm:tracking-[0.1em] dark:text-slate-400">
              Verificada
            </span>
          </div>

          {/* CÓDIGO */}

          <div className="flex min-w-0 items-center gap-2">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_7px_currentColor] ${colors.dot} `}
            />

            <span
              className={`min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] sm:text-[9px] sm:tracking-[0.12em] ${colors.organization} `}
            >
              CERT-
              {String(originalIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ===============================================
            LÍNEA INFERIOR

            Antes:
            w-0 → group-hover:w-full

            Ahora:
            scale-x-0 → scale-x-100
        =============================================== */}

        <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-transform duration-700 group-hover:scale-x-100" />
      </article>
    );
  }

  return (
    <section
      id="certificaciones"
      className="relative w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-14 transition-colors duration-300 sm:py-16 md:py-20 landscape:py-12 dark:border-white/[0.07]"
    >
      {/* =================================================
          GLOW DERECHO
      ================================================= */}

      <div className="pointer-events-none absolute top-0 -right-28 h-[260px] w-[260px] rounded-full bg-cyan-400/[0.05] blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[155px] dark:bg-cyan-400/[0.025]" />

      {/* =================================================
          GLOW IZQUIERDO
      ================================================= */}

      <div className="pointer-events-none absolute bottom-0 -left-28 h-[240px] w-[240px] rounded-full bg-blue-500/[0.04] blur-[100px] sm:-left-32 sm:h-[340px] sm:w-[340px] sm:blur-[150px] dark:bg-blue-500/[0.02]" />

      {/* =================================================
          CONTENEDOR
      ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
            CABECERA
        ================================================= */}

        <div className="min-w-0">
          {/* BADGE */}

          <div className="inline-flex max-w-full items-center gap-2 rounded-[5px] border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 shadow-sm transition-colors duration-300 sm:px-3 dark:border-cyan-300/25 dark:bg-[#1b2330]/80 dark:shadow-none">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.55)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-700 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.12em] dark:text-cyan-300">
              Credenciales
            </span>
          </div>

          {/* TÍTULO */}

          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.04em] break-words text-slate-950 min-[360px]:text-[30px] sm:mt-4 sm:text-3xl md:text-[2.5rem] dark:text-white">
            Certificaciones
          </h2>

          {/* DESCRIPCIÓN */}

          <p className="mt-3 max-w-[760px] text-[13px] leading-6 break-words text-slate-600 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[16px] dark:text-slate-300">
            Acreditaciones y formación técnica orientadas al desarrollo de
            software, datos, metodologías ágiles y tecnologías modernas.
          </p>
        </div>

        {/* =================================================
            SLIDER
        ================================================= */}

        <div className="relative mt-7 w-full max-w-full min-w-0 overflow-hidden sm:mt-9 lg:mt-10">
          {/* FADE IZQUIERDO */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-5 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent min-[360px]:w-7 sm:w-10 md:w-14 dark:from-[#070b14] dark:via-[#070b14]/60" />

          {/* FADE DERECHO */}

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-5 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent min-[360px]:w-7 sm:w-10 md:w-14 dark:from-[#070b14] dark:via-[#070b14]/60" />

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
            {/* =============================================
                COPIA ORIGINAL
            ============================================= */}

            <div
              ref={firstGroupRef}
              className="flex shrink-0 gap-3 min-[360px]:gap-4 sm:gap-5"
            >
              {certifications.map((certificate, index) =>
                renderCertificate(certificate, index, 0),
              )}
            </div>

            {/* =============================================
                SEGUNDA COPIA PARA LOOP

                Antes había 3 grupos.
                Ahora solo hay 2.
            ============================================= */}

            <div
              ref={secondGroupRef}
              aria-hidden="true"
              className="flex shrink-0 gap-3 min-[360px]:gap-4 sm:gap-5"
            >
              {certifications.map((certificate, index) =>
                renderCertificate(certificate, index, 1),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
