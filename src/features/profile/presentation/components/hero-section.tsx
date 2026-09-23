import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  Network,
  TerminalSquare,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const stats = [
  {
    value: "+2 Años",
    label: "Experiencia Dev",
  },
  {
    value: "10+",
    label: "Proyectos completados",
  },
  {
    value: "Top 10%",
    label: "Tecsup excelencia",
  },
  {
    value: "100%",
    label: "Clean Code & Test",
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-28"
    >
      {/* Luces decorativas del fondo */}
      <div className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="pointer-events-none absolute top-24 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-5 py-12 lg:grid-cols-[1.25fr_0.75fr]">
        {/* IZQUIERDA */}
        <div>
          {/* Badge superior */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.12em] text-cyan-400 uppercase shadow-[0_0_20px_rgba(34,211,238,0.05)]">
            <span className="h-2.5 w-2.5 rounded-full border border-cyan-300/50 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            Sistemas · Arquitectura · Rendimiento
          </div>

          {/* Nombre */}
          <h1 className="text-[3.3rem] leading-[0.95] font-extrabold tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.15rem]">
            Daniel Ramirez
          </h1>

          {/* Roles */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <span className="text-xl font-medium text-slate-200 sm:text-2xl">
              Software Developer
            </span>

            <span className="hidden h-7 w-px bg-white/20 sm:block" />

            <span className="rounded-md border border-cyan-400/30 bg-[#1b2433] px-4 py-2 font-mono text-xs font-semibold tracking-wide text-cyan-400">
              FullStack Developer
            </span>
          </div>

          {/* Descripción */}
          <p className="mt-7 max-w-[690px] text-base leading-8 text-slate-300 sm:text-lg">
            Construyo soluciones digitales escalables, funcionales y orientadas
            a resolver problemas reales. Especializado en APIs de alta
            disponibilidad y arquitecturas backend resilientes.
          </p>

          {/* CTA + redes */}
          <div className="mt-9 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 font-mono text-xs font-bold tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(34,211,238,0.25)]"
              >
                Ver proyectos
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/daniel-ramirez-cv.pdf"
                download
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 font-mono text-xs font-bold tracking-wide text-slate-200 uppercase transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <Download size={17} className="text-cyan-400" />
                Descargar CV
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/danielramirez611"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/in/daniel-ramirezs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#contacto"
                aria-label="Contacto"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Separador */}
          <div className="my-7 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="min-h-[112px] rounded-xl border border-white/10 bg-[#151b28]/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <strong className="block text-2xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </strong>

                <span className="mt-2 block font-mono text-[10px] tracking-[0.12em] text-slate-400 uppercase">
                  {stat.label}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* DERECHA */}
        <div className="relative mx-auto w-full max-w-[425px]">
          {/* Resplandor */}
          <div className="absolute -inset-5 rounded-[36px] bg-cyan-400/5 blur-3xl" />

          <div className="relative aspect-[0.73] overflow-hidden rounded-[24px] border-[3px] border-cyan-400 bg-[#111827] shadow-[0_0_40px_rgba(34,211,238,0.10)]">
            <Image
              src="/daniel.jpg"
              alt="Daniel Ramirez - Software Developer"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 425px"
            />

            {/* Tratamiento de imagen */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c16] via-transparent to-[#07101e]/10" />

            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#080b14] to-transparent" />

            {/* Badge superior derecho */}
            <div className="absolute top-4 right-4 flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-[#07101e]/90 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />

              <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-cyan-300 uppercase">
                FullStack Developer
              </span>
            </div>

            {/* Terminal inferior */}
            <div className="absolute right-4 bottom-4 left-4 overflow-hidden rounded-xl border border-white/10 bg-[#090d17]/95 shadow-2xl backdrop-blur-xl">
              {/* barra terminal */}
              <div className="flex h-10 items-center border-b border-white/5 px-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                </div>

                <span className="mx-auto font-mono text-[10px] tracking-wider text-slate-500">
                  daniel-arch.ts
                </span>

                <span className="font-mono text-[10px] font-bold text-cyan-400">
                  active
                </span>
              </div>

              {/* código */}
              <div className="p-4 font-mono text-[11px] leading-5 sm:text-xs">
                <p className="text-slate-300">
                  <span className="font-semibold text-blue-400">const</span>{" "}
                  architect = <span className="text-cyan-400">{"{"}</span> name:{" "}
                  <span className="text-violet-300">
                    &quot;Daniel Ramirez&quot;
                  </span>
                  ,
                </p>

                <p className="text-slate-300">
                  focus:{" "}
                  <span className="font-semibold text-cyan-300">
                    &quot;Distributed APIs&quot;
                  </span>{" "}
                  <span className="text-cyan-400">{"}"}</span>;
                </p>
              </div>
            </div>
          </div>

          {/* decoraciones técnicas */}
          <div className="absolute top-1/2 -left-5 hidden flex-col gap-3 xl:flex">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111722] text-cyan-400">
              <Network size={18} />
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111722] text-cyan-400">
              <TerminalSquare size={18} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
