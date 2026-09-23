import Image from "next/image";
import { Network, TerminalSquare } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-3">
      <div className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center gap-4 rounded-xl border border-white/10 bg-[#101520]/95 px-5 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
        {/* LOGO */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] font-bold tracking-wide whitespace-nowrap"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

          <span className="text-slate-200">DR</span>

          <span className="text-slate-500">/</span>

          <span className="whitespace-nowrap text-cyan-400">SOFTWARE DEV</span>
        </a>

        {/* NAVEGACIÓN */}
        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <nav className="flex items-center rounded-lg border border-white/[0.04] bg-[#0b1019]/70 p-1 font-mono text-[9px] font-bold tracking-[0.08em] text-slate-400 uppercase">
            <a
              href="#inicio"
              className="rounded-md bg-[#172434] px-3 py-2.5 whitespace-nowrap text-cyan-300 shadow-inner transition"
            >
              Inicio
            </a>

            <a
              href="#sobre-mi"
              className="px-3 py-2.5 whitespace-nowrap transition hover:text-cyan-300"
            >
              Sobre mí
            </a>

            <a
              href="#stack"
              className="px-3 py-2.5 whitespace-nowrap transition hover:text-cyan-300"
            >
              Stack
            </a>

            <a
              href="#experiencia"
              className="px-3 py-2.5 whitespace-nowrap transition hover:text-cyan-300"
            >
              Experiencia
            </a>

            <a
              href="#proyectos"
              className="px-3 py-2.5 whitespace-nowrap transition hover:text-cyan-300"
            >
              Proyectos
            </a>

            <a
              href="#logros"
              className="px-3 py-2.5 whitespace-nowrap transition hover:text-cyan-300"
            >
              Logros
            </a>

            <a
              href="#certificaciones"
              className="px-3 py-2.5 whitespace-nowrap transition hover:text-cyan-300"
            >
              Certificaciones
            </a>

            <a
              href="#contacto"
              className="px-3 py-2.5 whitespace-nowrap transition hover:text-cyan-300"
            >
              Contacto
            </a>
          </nav>
        </div>

        {/* DERECHA */}
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/[0.04] px-3.5 py-2 font-mono text-[9px] font-bold tracking-[0.08em] whitespace-nowrap text-cyan-300 xl:flex"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Disponible para proyectos
          </a>

          <a
            href="https://github.com/danielramirez611"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 sm:flex"
          >
            <TerminalSquare size={16} />
          </a>

          <a
            href="https://linkedin.com/in/daniel-ramirezs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 sm:flex"
          >
            <Network size={16} />
          </a>

          <a
            href="#sobre-mi"
            aria-label="Ir a sobre mí"
            className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-cyan-400/40 bg-[#111827]"
          >
            <Image
              src="/daniel.jpg"
              alt="Daniel Ramirez"
              fill
              className="object-cover object-center"
              sizes="36px"
              priority
            />
          </a>
        </div>
      </div>
    </header>
  );
}
