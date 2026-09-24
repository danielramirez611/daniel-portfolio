"use client";

import Image from "next/image";
import { Menu, Network, TerminalSquare, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Logros", href: "#logros" },
  {
    label: "Certificaciones",
    href: "#certificaciones",
  },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-x-clip px-2 pt-2 sm:px-3 sm:pt-3 lg:px-4">
      <div className="relative mx-auto max-w-[1380px] min-w-0">
        {/* HEADER PRINCIPAL */}
        <div className="flex h-14 max-w-full min-w-0 items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-[#101520]/95 px-2 shadow-[0_8px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:h-[62px] sm:px-3 lg:px-4 xl:h-16">
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center gap-1.5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2 font-mono font-bold transition hover:border-cyan-400/30 min-[360px]:gap-2 min-[360px]:px-2.5 sm:shrink-0 sm:px-3"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

            <span className="shrink-0 text-[9px] text-slate-200 min-[360px]:text-[10px] sm:text-[11px]">
              DR
            </span>

            <span className="hidden shrink-0 text-slate-500 min-[340px]:inline">
              /
            </span>

            <span className="hidden min-w-0 truncate text-[8px] whitespace-nowrap text-cyan-400 min-[340px]:inline min-[390px]:text-[9px] sm:text-[10px] lg:text-[11px]">
              SOFTWARE DEV
            </span>
          </a>

          {/* NAVEGACIÓN ESCRITORIO */}
          <div className="hidden min-w-0 flex-1 justify-center xl:flex">
            <nav className="flex max-w-full min-w-0 items-center overflow-hidden rounded-lg border border-white/[0.04] bg-[#0b1019]/70 p-1 font-mono text-[8px] font-bold tracking-[0.04em] text-slate-400 uppercase 2xl:text-[9px]">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`shrink-0 rounded-md px-2 py-2.5 whitespace-nowrap transition 2xl:px-3 ${
                    index === 0
                      ? "bg-[#172434] text-cyan-300"
                      : "hover:bg-white/[0.03] hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* DERECHA */}
          <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2">
            {/* DISPONIBILIDAD */}
            <a
              href="#contacto"
              className="hidden items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.04] px-3 py-2 font-mono text-[8px] font-bold whitespace-nowrap text-cyan-300 2xl:flex"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              Disponible para proyectos
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/danielramirez611"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 md:flex"
            >
              <TerminalSquare size={16} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/daniel-ramirezs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 md:flex"
            >
              <Network size={16} />
            </a>

            {/* AVATAR */}
            <a
              href="#sobre-mi"
              aria-label="Ir a sobre mí"
              className="relative hidden h-8 w-8 shrink-0 overflow-hidden rounded-full border border-cyan-400/40 bg-[#111827] min-[330px]:block sm:h-9 sm:w-9"
            >
              <Image
                src="/daniel.jpg"
                alt="Daniel Ramirez"
                fill
                priority
                sizes="36px"
                className="object-cover object-center"
              />
            </a>

            {/* BOTÓN MENÚ */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 xl:hidden"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* MENÚ RESPONSIVE */}
        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-[62px] w-full max-w-full min-w-0 origin-top overflow-x-clip transition-all duration-300 sm:top-[68px] xl:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <div className="max-h-[calc(100dvh-82px)] w-full max-w-full min-w-0 overflow-x-clip overflow-y-auto rounded-xl border border-white/10 bg-[#101520]/98 p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-4">
            {/* LINKS */}
            <nav className="grid min-w-0 grid-cols-1 gap-1 min-[400px]:grid-cols-2 md:grid-cols-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`min-w-0 overflow-hidden rounded-lg px-3 py-3 font-mono text-[9px] font-bold tracking-[0.05em] uppercase transition sm:text-[10px] ${
                    index === 0
                      ? "border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300"
                      : "border border-transparent text-slate-400 hover:border-white/[0.06] hover:bg-white/[0.03] hover:text-cyan-300"
                  }`}
                >
                  <span className="block truncate">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="my-3 h-px w-full bg-white/[0.07]" />

            {/* DISPONIBILIDAD */}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="flex max-w-full min-w-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-3 font-mono text-[8px] font-bold tracking-[0.05em] text-cyan-300 min-[350px]:text-[9px]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

              <span className="min-w-0 truncate">
                Disponible para proyectos
              </span>
            </a>

            {/* REDES */}
            <div className="mt-2 grid min-w-0 grid-cols-2 gap-2">
              <a
                href="https://github.com/danielramirez611"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] px-2 py-3 font-mono text-[9px] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <TerminalSquare size={14} className="shrink-0" />

                <span className="truncate">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/daniel-ramirezs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] px-2 py-3 font-mono text-[9px] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Network size={14} className="shrink-0" />

                <span className="truncate">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
