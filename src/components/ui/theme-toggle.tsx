"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";

/* =========================================================
   VIEW TRANSITION TYPES
========================================================= */

interface ViewTransitionInstance {
  ready: Promise<void>;
  finished: Promise<void>;
  updateCallbackDone: Promise<void>;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (
    callback: () => void | Promise<void>,
  ) => ViewTransitionInstance;
};

type ViewTransitionAnimationOptions = KeyframeAnimationOptions & {
  pseudoElement: string;
};

/* =========================================================
   DETECTAR MONTAJE
========================================================= */

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/* =========================================================
   THEME TOGGLE
========================================================= */

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  /* =======================================================
     SSR / HYDRATION
  ======================================================= */

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Cambiar tema"
        disabled
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  /* =======================================================
     APLICAR TEMA
  ======================================================= */

  function applyTheme(nextTheme: "light" | "dark") {
    const root = document.documentElement;

    /*
     * Cambiamos inmediatamente la clase
     * para que View Transition capture
     * correctamente el nuevo tema.
     */

    root.classList.toggle("dark", nextTheme === "dark");

    root.style.colorScheme = nextTheme;

    /*
     * Sincronizamos con next-themes
     * y localStorage.
     */

    setTheme(nextTheme);
  }

  /* =======================================================
     CAMBIO DIRECTO
  ======================================================= */

  function applyThemeDirectly(nextTheme: "light" | "dark") {
    applyTheme(nextTheme);
  }

  /* =======================================================
     TRANSICIÓN MÓVIL

     En móvil usamos únicamente OPACITY.

     Evitamos:
     - clip-path
     - radios grandes
     - repintado circular
     - animaciones pesadas
  ======================================================= */

  function runMobileTransition(
    nextTheme: "light" | "dark",
    documentWithTransition: DocumentWithViewTransition,
  ) {
    /* =====================================================
       SIN SOPORTE
    ===================================================== */

    if (!documentWithTransition.startViewTransition) {
      applyThemeDirectly(nextTheme);

      return;
    }

    /* =====================================================
       IMPORTANTE

       Llamamos startViewTransition directamente
       desde documentWithTransition.

       NO hacemos:

       const startViewTransition =
         document.startViewTransition;

       porque perdería el contexto nativo
       y produciría:

       TypeError: Illegal invocation
    ===================================================== */

    const transition = documentWithTransition.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    /* =====================================================
       FADE MÓVIL
    ===================================================== */

    transition.ready
      .then(() => {
        const options: ViewTransitionAnimationOptions = {
          duration: 140,

          easing: "cubic-bezier(0.22, 1, 0.36, 1)",

          fill: "both",

          pseudoElement: "::view-transition-new(root)",
        };

        document.documentElement.animate(
          [
            {
              opacity: 0,
            },

            {
              opacity: 1,
            },
          ],
          options,
        );
      })
      .catch(() => {
        /*
         * No hacemos nada.
         *
         * El tema ya se aplicó dentro
         * de startViewTransition.
         */
      });
  }

  /* =======================================================
     TRANSICIÓN ESCRITORIO

     En escritorio mantenemos el efecto
     circular desde el botón.
  ======================================================= */

  function runDesktopTransition(
    nextTheme: "light" | "dark",
    documentWithTransition: DocumentWithViewTransition,
  ) {
    /* =====================================================
       SIN SOPORTE
    ===================================================== */

    if (!documentWithTransition.startViewTransition) {
      applyThemeDirectly(nextTheme);

      return;
    }

    /* =====================================================
       POSICIÓN DEL BOTÓN
    ===================================================== */

    const rect = buttonRef.current?.getBoundingClientRect();

    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;

    const y = rect ? rect.top + rect.height / 2 : 40;

    /* =====================================================
       RADIO FINAL

       Distancia necesaria para cubrir
       completamente la pantalla.
    ===================================================== */

    const maxX = Math.max(x, window.innerWidth - x);

    const maxY = Math.max(y, window.innerHeight - y);

    const finalRadius = Math.hypot(maxX, maxY);

    /* =====================================================
       VIEW TRANSITION

       IMPORTANTE:
       llamada directa para conservar
       el contexto de document.
    ===================================================== */

    const transition = documentWithTransition.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    /* =====================================================
       REVELADO CIRCULAR
    ===================================================== */

    transition.ready
      .then(() => {
        const options: ViewTransitionAnimationOptions = {
          duration: 320,

          easing: "cubic-bezier(0.22, 1, 0.36, 1)",

          fill: "both",

          pseudoElement: "::view-transition-new(root)",
        };

        document.documentElement.animate(
          [
            {
              clipPath: `circle(0px at ${x}px ${y}px)`,
            },

            {
              clipPath: `circle(${finalRadius}px at ${x}px ${y}px)`,
            },
          ],
          options,
        );
      })
      .catch(() => {
        /*
         * El cambio de tema ya ocurrió.
         */
      });
  }

  /* =======================================================
     CAMBIAR TEMA
  ======================================================= */

  function toggleTheme() {
    const nextTheme: "light" | "dark" = isDark ? "light" : "dark";

    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      applyThemeDirectly(nextTheme);

      return;
    }

    /* =====================================================
       DOCUMENT CON VIEW TRANSITION
    ===================================================== */

    const documentWithTransition = document as DocumentWithViewTransition;

    /* =====================================================
       SIN VIEW TRANSITION API
    ===================================================== */

    if (!documentWithTransition.startViewTransition) {
      applyThemeDirectly(nextTheme);

      return;
    }

    /* =====================================================
       DETECTAR MÓVIL

       Consideramos móvil:

       - ancho <= 767px
       - dispositivo táctil/coarse
    ===================================================== */

    const isMobile = window.matchMedia(
      "(max-width: 767px), (pointer: coarse)",
    ).matches;

    /* =====================================================
       MÓVIL
    ===================================================== */

    if (isMobile) {
      runMobileTransition(nextTheme, documentWithTransition);

      return;
    }

    /* =====================================================
       ESCRITORIO
    ===================================================== */

    runDesktopTransition(nextTheme, documentWithTransition);
  }

  /* =======================================================
     BOTÓN
  ======================================================= */

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
      title={isDark ? "Tema claro" : "Tema oscuro"}
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-[transform,background-color,border-color] duration-150 ease-out hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none active:translate-y-0 active:scale-[0.94] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06] dark:focus-visible:ring-cyan-400/40 dark:focus-visible:ring-offset-[#070913]"
    >
      {/* =================================================
          TEMA OSCURO
      ================================================= */}

      {isDark ? (
        <Sun
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-cyan-300 transition-transform duration-150 ease-out group-hover:scale-110 group-hover:rotate-12 group-active:scale-90 group-active:rotate-45"
        />
      ) : (
        /* =================================================
           TEMA CLARO
        ================================================= */

        <Moon
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-slate-700 transition-transform duration-150 ease-out group-hover:scale-110 group-hover:-rotate-12 group-active:scale-90 group-active:-rotate-45"
        />
      )}
    </button>
  );
}
