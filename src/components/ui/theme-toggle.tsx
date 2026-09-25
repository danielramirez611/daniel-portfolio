"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";

/* =========================================================
   TIPOS VIEW TRANSITION
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
     PLACEHOLDER SSR
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
     * Aplicamos la clase inmediatamente para que
     * View Transition capture correctamente
     * el nuevo estado.
     */

    root.classList.toggle("dark", nextTheme === "dark");

    root.style.colorScheme = nextTheme;

    /*
     * Sincronizamos con next-themes.
     */

    setTheme(nextTheme);
  }

  /* =======================================================
     FALLBACK SUAVE
  ======================================================= */

  function fallbackThemeTransition(nextTheme: "light" | "dark") {
    const root = document.documentElement;

    root.classList.add("theme-transition-fallback");

    applyTheme(nextTheme);

    window.setTimeout(() => {
      root.classList.remove("theme-transition-fallback");
    }, 420);
  }

  /* =======================================================
     CAMBIAR TEMA
  ======================================================= */

  function toggleTheme() {
    const nextTheme: "light" | "dark" = isDark ? "light" : "dark";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * Accesibilidad:
     * sin animación.
     */

    if (reduceMotion) {
      applyTheme(nextTheme);

      return;
    }

    const documentWithTransition = document as DocumentWithViewTransition;

    /*
     * Navegador sin View Transition API.
     */

    if (!documentWithTransition.startViewTransition) {
      fallbackThemeTransition(nextTheme);

      return;
    }

    /* =====================================================
       POSICIÓN DEL BOTÓN
    ===================================================== */

    const rect = buttonRef.current?.getBoundingClientRect();

    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;

    const y = rect ? rect.top + rect.height / 2 : 40;

    /*
     * Radio suficiente para cubrir toda
     * la pantalla desde el botón.
     */

    const maxX = Math.max(x, window.innerWidth - x);

    const maxY = Math.max(y, window.innerHeight - y);

    const finalRadius = Math.hypot(maxX, maxY);

    /* =====================================================
       INICIAR TRANSICIÓN
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
          duration: 520,

          easing: "cubic-bezier(0.22, 1, 0.36, 1)",

          fill: "both",

          pseudoElement: "::view-transition-new(root)",
        };

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,

              `circle(${finalRadius}px at ${x}px ${y}px)`,
            ],
          },

          options,
        );
      })
      .catch(() => {
        /*
         * Si la animación visual falla,
         * el tema igualmente ya cambió.
         */
      });
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
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none active:translate-y-0 active:scale-[0.94] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06] dark:focus-visible:ring-cyan-400/40 dark:focus-visible:ring-offset-[#070913]"
    >
      {isDark ? (
        <Sun
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-cyan-300 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-12 group-active:scale-90 group-active:rotate-45"
        />
      ) : (
        <Moon
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-slate-700 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-12 group-active:scale-90 group-active:-rotate-45"
        />
      )}
    </button>
  );
}
