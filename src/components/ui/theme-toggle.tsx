"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

import { useSyncExternalStore } from "react";

/* =========================================================
   DETECTAR MONTAJE EN CLIENTE
========================================================= */

/*
 * No necesitamos useEffect + setState.
 *
 * En servidor:
 * false
 *
 * En cliente:
 * true
 *
 * Esto evita:
 * react-hooks/set-state-in-effect
 */
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

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  /* =======================================================
     PLACEHOLDER SSR / HYDRATION
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
     CAMBIAR TEMA
  ======================================================= */

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  /* =======================================================
     BOTÓN
  ======================================================= */

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
      title={isDark ? "Tema claro" : "Tema oscuro"}
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 hover:shadow-[0_6px_20px_rgba(6,182,212,0.10)] focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none active:translate-y-0 active:scale-[0.96] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06] dark:hover:shadow-none dark:focus-visible:ring-cyan-400/40 dark:focus-visible:ring-offset-[#070913]"
    >
      {isDark ? (
        <Sun
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-amber-500 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:rotate-12 dark:text-cyan-300"
        />
      ) : (
        <Moon
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-slate-700 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}
