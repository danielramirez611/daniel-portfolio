"use client";

import Image from "next/image";

import { Menu, Network, TerminalSquare, X } from "lucide-react";

import { useState } from "react";

import { LanguageToggle } from "@/components/ui/language-toggle";

import { ThemeToggle } from "@/components/ui/theme-toggle";

import { useI18n } from "@/i18n/i18n-provider";

import { messageKeys } from "@/i18n/message-keys";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    labelKey: messageKeys.HEADER.HOME,

    href: "#inicio",
  },

  {
    labelKey: messageKeys.HEADER.ABOUT,

    href: "#sobre-mi",
  },

  {
    labelKey: messageKeys.HEADER.STACK,

    href: "#stack",
  },

  {
    labelKey: messageKeys.HEADER.EXPERIENCE,

    href: "#experiencia",
  },

  {
    labelKey: messageKeys.HEADER.PROJECTS,

    href: "#proyectos",
  },

  {
    labelKey: messageKeys.HEADER.ACHIEVEMENTS,

    href: "#logros",
  },

  {
    labelKey: messageKeys.HEADER.CERTIFICATIONS,

    href: "#certificaciones",
  },

  {
    labelKey: messageKeys.HEADER.CONTACT,

    href: "#contacto",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { $t } = useI18n();

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  function closeMenu() {
    setMenuOpen(false);
  }

  /* =======================================================
     TOGGLE MENU
  ======================================================= */

  function toggleMenu() {
    setMenuOpen((current) => !current);
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-x-clip px-2 pt-2 sm:px-3 sm:pt-3 lg:px-4">
      <div className="relative mx-auto w-full max-w-[1380px] min-w-0">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex h-14 max-w-full min-w-0 items-center gap-2 overflow-hidden rounded-xl border border-slate-200/80 bg-white/95 px-2 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:h-[62px] sm:px-3 lg:px-4 xl:h-16 dark:border-white/10 dark:bg-[#101520]/95 dark:shadow-[0_8px_40px_rgba(0,0,0,0.22)]">
          {/* =================================================
              IDENTITY
          ================================================= */}

          <a
            href="#inicio"
            onClick={closeMenu}
            aria-label={$t(messageKeys.HEADER.GO_HOME)}
            className="flex min-w-0 shrink items-center gap-1.5 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 px-2 py-2 font-mono font-bold transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50/60 active:translate-y-0 active:scale-[0.98] min-[360px]:gap-2 min-[360px]:px-2.5 sm:shrink-0 sm:px-3 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.04]"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.55)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            />

            <span className="shrink-0 text-[9px] text-slate-900 min-[360px]:text-[10px] sm:text-[11px] dark:text-slate-200">
              DR
            </span>

            <span
              aria-hidden="true"
              className="hidden shrink-0 text-slate-400 min-[340px]:inline dark:text-slate-500"
            >
              /
            </span>

            <span className="hidden min-w-0 truncate text-[8px] whitespace-nowrap text-cyan-700 min-[340px]:inline min-[390px]:text-[9px] sm:text-[10px] lg:text-[11px] dark:text-cyan-400">
              {$t(messageKeys.HEADER.SOFTWARE_DEV)}
            </span>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden min-w-0 flex-1 justify-center xl:flex">
            <nav
              aria-label={$t(messageKeys.HEADER.NAVIGATION)}
              className="flex max-w-full min-w-0 items-center overflow-hidden rounded-lg border border-slate-200/80 bg-slate-100/80 p-1 font-mono text-[8px] font-bold tracking-[0.04em] text-slate-600 uppercase 2xl:text-[9px] dark:border-white/[0.04] dark:bg-[#0b1019]/70 dark:text-slate-400"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`shrink-0 rounded-md px-2 py-2.5 whitespace-nowrap transition-[transform,background-color] duration-200 hover:-translate-y-px 2xl:px-3 ${
                    index === 0
                      ? "bg-cyan-50 text-cyan-700 shadow-sm dark:bg-[#172434] dark:text-cyan-300 dark:shadow-none"
                      : "hover:bg-white dark:hover:bg-white/[0.03]"
                  }`}
                >
                  {$t(item.labelKey)}
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2">
            {/* =================================================
                AVAILABLE
            ================================================= */}

            <a
              href="#contacto"
              className="hidden items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50 px-3 py-2 font-mono text-[8px] font-bold whitespace-nowrap text-cyan-700 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-400 active:translate-y-0 2xl:flex dark:border-cyan-400/30 dark:bg-cyan-400/[0.04] dark:text-cyan-300"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.55)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />

              {$t(messageKeys.COMMON.AVAILABLE)}
            </a>

            {/* =================================================
                GITHUB
            ================================================= */}

            <a
              href="https://github.com/danielramirez611"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.96] md:flex dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.05]"
            >
              <TerminalSquare size={16} aria-hidden="true" />
            </a>

            {/* =================================================
                LINKEDIN
            ================================================= */}

            <a
              href="https://linkedin.com/in/daniel-ramirezs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.96] md:flex dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.05]"
            >
              <Network size={16} aria-hidden="true" />
            </a>

            {/* =================================================
                LANGUAGE
            ================================================= */}

            <LanguageToggle />

            {/* =================================================
                THEME
            ================================================= */}

            <ThemeToggle />

            {/* =================================================
                LOGO
            ================================================= */}

            <a
              href="#inicio"
              onClick={closeMenu}
              aria-label={$t(messageKeys.HEADER.GO_HOME)}
              className="relative hidden h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-400/60 active:translate-y-0 min-[390px]:flex sm:h-10 sm:w-10 dark:border-cyan-400/30 dark:bg-white/[0.04] dark:shadow-none"
            >
              <Image
                src="/brand/marca-dark.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
                className="h-full w-full object-contain dark:hidden"
              />

              <Image
                src="/brand/marca-dark.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
                className="hidden h-full w-full object-contain dark:block"
              />
            </a>

            {/* =================================================
                MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                menuOpen
                  ? $t(messageKeys.HEADER.CLOSE_MENU)
                  : $t(messageKeys.HEADER.OPEN_MENU)
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.96] xl:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.05]"
            >
              {menuOpen ? (
                <X size={17} aria-hidden="true" />
              ) : (
                <Menu size={17} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="perf-reveal-scale absolute inset-x-0 top-[62px] w-full max-w-full min-w-0 origin-top overflow-x-clip sm:top-[68px] xl:hidden"
          >
            <div className="max-h-[calc(100dvh-82px)] w-full max-w-full min-w-0 overflow-x-clip overflow-y-auto rounded-xl border border-slate-200 bg-white/98 p-2.5 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-4 dark:border-white/10 dark:bg-[#101520]/98 dark:shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
              {/* =================================================
                  LINKS
              ================================================= */}

              <nav
                aria-label={$t(messageKeys.HEADER.MOBILE_NAVIGATION)}
                className="grid min-w-0 grid-cols-1 gap-1 min-[400px]:grid-cols-2 md:grid-cols-4"
              >
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`min-w-0 overflow-hidden rounded-lg border px-3 py-3 font-mono text-[9px] font-bold tracking-[0.05em] uppercase transition-[transform,background-color,border-color] duration-200 active:scale-[0.98] sm:text-[10px] ${
                      index === 0
                        ? "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/15 dark:bg-cyan-400/[0.06] dark:text-cyan-300"
                        : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 dark:text-slate-400 dark:hover:border-white/[0.06] dark:hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="block truncate">{$t(item.labelKey)}</span>
                  </a>
                ))}
              </nav>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div
                aria-hidden="true"
                className="my-3 h-px w-full bg-slate-200 dark:bg-white/[0.07]"
              />

              {/* =================================================
                  AVAILABLE
              ================================================= */}

              <a
                href="#contacto"
                onClick={closeMenu}
                className="flex max-w-full min-w-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-3 font-mono text-[8px] font-bold tracking-[0.05em] text-cyan-700 transition-[transform,background-color,border-color] duration-200 active:scale-[0.99] min-[350px]:text-[9px] dark:border-cyan-400/20 dark:bg-cyan-400/[0.05] dark:text-cyan-300"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.55)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                />

                <span className="min-w-0 truncate">
                  {$t(messageKeys.COMMON.AVAILABLE)}
                </span>
              </a>

              {/* =================================================
                  SOCIAL
              ================================================= */}

              <div className="mt-2 grid min-w-0 grid-cols-2 gap-2">
                <a
                  href="https://github.com/danielramirez611"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex min-w-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 px-2 py-3 font-mono text-[9px] text-slate-600 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.98] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.05]"
                >
                  <TerminalSquare
                    size={14}
                    aria-hidden="true"
                    className="shrink-0"
                  />

                  <span className="truncate">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/daniel-ramirezs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex min-w-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 px-2 py-3 font-mono text-[9px] text-slate-600 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.98] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.05]"
                >
                  <Network size={14} aria-hidden="true" className="shrink-0" />

                  <span className="truncate">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
