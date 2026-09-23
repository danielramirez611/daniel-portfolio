import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-2">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-xl border border-white/10 bg-[#0d111f]/80 px-5 backdrop-blur-xl">
        <a
          href="#inicio"
          className="font-mono text-sm font-semibold text-white"
        >
          DR <span className="text-cyan-400">/ Software Dev</span>
        </a>

        <nav className="hidden items-center gap-5 text-xs text-slate-400 uppercase lg:flex">
          <a href="#inicio" className="transition hover:text-cyan-400">
            Inicio
          </a>

          <a href="#sobre-mi" className="transition hover:text-cyan-400">
            Sobre mí
          </a>

          <a href="#stack" className="transition hover:text-cyan-400">
            Stack
          </a>

          <a href="#experiencia" className="transition hover:text-cyan-400">
            Experiencia
          </a>

          <a href="#proyectos" className="transition hover:text-cyan-400">
            Proyectos
          </a>

          <a href="#certificaciones" className="transition hover:text-cyan-400">
            Certificaciones
          </a>

          <a href="#contacto" className="transition hover:text-cyan-400">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/danielramirez611"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/daniel-ramirezs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
