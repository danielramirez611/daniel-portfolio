"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

/* =========================================================
   DETECTAR MONTAJE EN CLIENTE
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

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  /* =======================================================
     PLACEHOLDER DURANTE SSR / HYDRATION
  ======================================================= */

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Cambiar tema"
        disabled
        className="h-9 w-9 shrink-0 rounded-lg border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  /* =======================================================
     BOTÓN
  ======================================================= */

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
      title={isDark ? "Tema claro" : "Tema oscuro"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
    >
      {isDark ? (
        <Sun size={16} strokeWidth={2} />
      ) : (
        <Moon size={16} strokeWidth={2} />
      )}
    </button>
  );
}
