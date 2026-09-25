"use client";

import { useEffect, useRef, useState } from "react";

/* =========================================================
   PROPS
========================================================= */

interface AnimatedStatValueProps {
  value: number;

  startValue?: number;

  prefix?: string;

  suffix?: string;

  duration?: number;
}

/* =========================================================
   EASING

   Movimiento:
   rápido al inicio
   ↓
   desacelera progresivamente
   ↓
   termina suavemente
========================================================= */

function easeOutQuart(progress: number) {
  return 1 - Math.pow(1 - progress, 4);
}

/* =========================================================
   COMPONENTE
========================================================= */

export function AnimatedStatValue({
  value,

  startValue = 0,

  prefix = "",

  suffix = "",

  duration = 1350,
}: AnimatedStatValueProps) {
  /* =======================================================
     ESTADO
  ======================================================= */

  const [displayValue, setDisplayValue] = useState(startValue);

  /* =======================================================
     REFERENCIAS
  ======================================================= */

  const elementRef = useRef<HTMLSpanElement>(null);

  const frameRef = useRef<number | null>(null);

  const hasAnimatedRef = useRef(false);

  const lastValueRef = useRef(startValue);

  /* =======================================================
     ANIMACIÓN
  ======================================================= */

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    /* =====================================================
       REDUCED MOTION

       Si el usuario prefiere menos movimiento,
       mostramos directamente el resultado final.

       El setState se ejecuta dentro de
       requestAnimationFrame para evitar:

       react-hooks/set-state-in-effect
    ===================================================== */

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      lastValueRef.current = value;

      frameRef.current = requestAnimationFrame(() => {
        setDisplayValue(value);

        frameRef.current = null;
      });

      return () => {
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
        }
      };
    }

    /* =====================================================
       OBSERVADOR

       La animación comienza únicamente cuando
       el número entra en pantalla.
    ===================================================== */

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        /* ===============================================
             SOLO UNA VEZ
          =============================================== */

        hasAnimatedRef.current = true;

        observer.disconnect();

        /* ===============================================
             INICIO
          =============================================== */

        const startedAt = performance.now();

        const difference = value - startValue;

        /* ===============================================
             ANIMACIÓN
          =============================================== */

        const animate = (currentTime: number) => {
          /* =============================================
               TIEMPO TRANSCURRIDO
            ============================================= */

          const elapsed = currentTime - startedAt;

          /* =============================================
               PROGRESO 0 → 1
            ============================================= */

          const progress = Math.min(Math.max(elapsed / duration, 0), 1);

          /* =============================================
               SUAVIZADO

               Empieza rápido y desacelera al llegar
               al número correspondiente.
            ============================================= */

          const easedProgress = easeOutQuart(progress);

          /* =============================================
               INTERPOLACIÓN

               Sirve tanto para:

               12 → 2

               como para:

               2 → 10

               o:

               25 → 100
            ============================================= */

          const calculatedValue = startValue + difference * easedProgress;

          const nextValue = Math.round(calculatedValue);

          /* =============================================
               SOLO ACTUALIZAR SI CAMBIÓ EL NÚMERO

               Evita renders innecesarios.
            ============================================= */

          if (nextValue !== lastValueRef.current) {
            lastValueRef.current = nextValue;

            setDisplayValue(nextValue);
          }

          /* =============================================
               CONTINUAR ANIMACIÓN
            ============================================= */

          if (progress < 1) {
            frameRef.current = requestAnimationFrame(animate);

            return;
          }

          /* =============================================
               VALOR FINAL EXACTO

               Siempre termina exactamente en
               el número configurado.
            ============================================= */

          if (lastValueRef.current !== value) {
            lastValueRef.current = value;

            setDisplayValue(value);
          }

          frameRef.current = null;
        };

        /* ===============================================
             PRIMER FRAME
          =============================================== */

        frameRef.current = requestAnimationFrame(animate);
      },

      {
        threshold: 0.25,

        rootMargin: "0px 0px -20px 0px",
      },
    );

    observer.observe(element);

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [duration, startValue, value]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <span ref={elementRef} className="inline-block min-w-[3ch] tabular-nums">
      {/* =================================================
          NÚMERO VISUAL ANIMADO

          Lo ocultamos para lectores de pantalla porque
          cambia varias veces durante la animación.
      ================================================= */}

      <span aria-hidden="true" className="inline-block tabular-nums">
        {prefix}
        {displayValue}
        {suffix}
      </span>

      {/* =================================================
          TEXTO ACCESIBLE

          El lector de pantalla recibe únicamente
          el valor final correcto.
      ================================================= */}

      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
}
