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
  const [displayValue, setDisplayValue] = useState(startValue);

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
       INTERSECTION OBSERVER
    ===================================================== */

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;

        observer.disconnect();

        const startedAt = performance.now();

        const difference = value - startValue;

        /* =================================================
             ANIMACIÓN POR FRAME
          ================================================= */

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startedAt;

          const progress = Math.min(Math.max(elapsed / duration, 0), 1);

          const easedProgress = easeOutQuart(progress);

          const calculatedValue = startValue + difference * easedProgress;

          const nextValue = Math.round(calculatedValue);

          /* ===============================================
               SOLO ACTUALIZA REACT SI CAMBIA EL VALOR
            =============================================== */

          if (nextValue !== lastValueRef.current) {
            lastValueRef.current = nextValue;

            setDisplayValue(nextValue);
          }

          /* ===============================================
               SIGUIENTE FRAME
            =============================================== */

          if (progress < 1) {
            frameRef.current = requestAnimationFrame(animate);

            return;
          }

          /* ===============================================
               ASEGURAR VALOR FINAL EXACTO
            =============================================== */

          if (lastValueRef.current !== value) {
            lastValueRef.current = value;

            setDisplayValue(value);
          }

          frameRef.current = null;
        };

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
    <span
      ref={elementRef}
      className="inline-block min-w-[3ch] tabular-nums"
      aria-label={`${prefix}${value}${suffix}`}
    >
      <span aria-hidden="true" className="inline-block tabular-nums">
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </span>
  );
}
