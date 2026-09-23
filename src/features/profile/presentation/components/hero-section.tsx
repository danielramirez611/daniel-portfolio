import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="grid min-h-[700px] items-center gap-12 py-24 lg:grid-cols-12"
    >
      <div className="lg:col-span-7">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1.5 text-xs tracking-widest text-cyan-400 uppercase">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Sistemas · Arquitectura · Rendimiento
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          Daniel Ramirez
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-xl text-slate-300">Software Developer</span>

          <span className="rounded-md border border-cyan-400/20 bg-white/5 px-3 py-1 text-sm text-cyan-400">
            Backend Developer
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Construyo soluciones digitales escalables, funcionales y orientadas a
          resolver problemas reales.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1"
          >
            Ver proyectos
            <ArrowRight size={18} />
          </a>

          <a
            href="https://github.com/danielramirez611"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/daniel-ramirezs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="aspect-[4/5] rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-cyan-400/10 to-transparent p-1">
          <div className="flex h-full items-center justify-center rounded-[22px] bg-[#121829] text-slate-500">
            Fotografía Daniel
          </div>
        </div>
      </div>
    </section>
  );
}
