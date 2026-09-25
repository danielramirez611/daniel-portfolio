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
   DETECTAR CLIENTE
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
     CAMBIO INMEDIATO

     Importante:
     dejamos que next-themes controle la clase .dark.

     No modificamos manualmente:
     document.documentElement.classList

     Esto evita hacer dos actualizaciones de estilos.
  ======================================================= */

  function changeTheme(nextTheme: "light" | "dark") {
    setTheme(nextTheme);
  }

  /* =======================================================
     TRANSICIÓN ESCRITORIO
  ======================================================= */

  function runDesktopTransition(nextTheme: "light" | "dark") {
    const documentWithTransition = document as DocumentWithViewTransition;

    /* =====================================================
       NAVEGADOR SIN VIEW TRANSITION
    ===================================================== */

    if (!documentWithTransition.startViewTransition) {
      changeTheme(nextTheme);

      return;
    }

    /* =====================================================
       POSICIÓN DEL BOTÓN
    ===================================================== */

    const rect = buttonRef.current?.getBoundingClientRect();

    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;

    const y = rect ? rect.top + rect.height / 2 : 40;

    /* =====================================================
       RADIO
    ===================================================== */

    const maxX = Math.max(x, window.innerWidth - x);

    const maxY = Math.max(y, window.innerHeight - y);

    const finalRadius = Math.hypot(maxX, maxY);

    /* =====================================================
       VIEW TRANSITION
    ===================================================== */

    const transition = documentWithTransition.startViewTransition(() => {
      changeTheme(nextTheme);
    });

    /* =====================================================
       REVELADO
    ===================================================== */

    transition.ready
      .then(() => {
        const options: ViewTransitionAnimationOptions = {
          duration: 280,

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
         * El tema ya fue actualizado.
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
      changeTheme(nextTheme);

      return;
    }

    /* =====================================================
       MÓVIL / TABLET TÁCTIL

       IMPORTANTE:

       NO usamos startViewTransition.

       Esto elimina:
       - screenshot completo del DOM
       - composición de dos páginas
       - clip-path
       - animación global
       - memoria extra
       - posibles tirones

       El tema cambia inmediatamente.
    ===================================================== */

    const lightweightDevice = window.matchMedia(
      "(max-width: 1024px), (pointer: coarse)",
    ).matches;

    if (lightweightDevice) {
      changeTheme(nextTheme);

      return;
    }

    /* =====================================================
       ESCRITORIO
    ===================================================== */

    runDesktopTransition(nextTheme);
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
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-transform duration-100 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none active:translate-y-0 active:scale-[0.92] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:focus-visible:ring-cyan-400/40 dark:focus-visible:ring-offset-[#070913]"
    >
      {isDark ? (
        <Sun
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-cyan-300 transition-transform duration-100 ease-out group-hover:scale-110 group-hover:rotate-12 group-active:scale-90 group-active:rotate-45"
        />
      ) : (
        <Moon
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-slate-700 transition-transform duration-100 ease-out group-hover:scale-110 group-hover:-rotate-12 group-active:scale-90 group-active:-rotate-45"
        />
      )}
    </button>
  );
}
