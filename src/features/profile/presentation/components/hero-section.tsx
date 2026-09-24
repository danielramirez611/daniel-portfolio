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
      className="relative w-full max-w-full overflow-x-clip pt-20 sm:pt-24 lg:pt-28"
    >
      {/* =================================================
          LUCES DECORATIVAS
      ================================================= */}

      <div className="pointer-events-none absolute top-32 -left-40 h-[300px] w-[300px] rounded-full bg-blue-500/[0.08] blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] dark:bg-blue-600/5" />

      <div className="pointer-events-none absolute top-20 -right-40 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.10] blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] dark:bg-cyan-400/5" />

      {/* =================================================
          CONTENEDOR
      ================================================= */}

      <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-10 px-4 py-8 min-[380px]:px-5 sm:gap-12 sm:px-6 sm:py-10 md:px-8 lg:min-h-[720px] lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12 lg:px-8 lg:py-12 xl:gap-16 xl:px-10 2xl:px-0 landscape:py-6 lg:landscape:py-10">
        {/* =================================================
            IZQUIERDA
        ================================================= */}

        <div className="w-full min-w-0">
          {/* =================================================
              BADGE SUPERIOR
          ================================================= */}

          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50 px-3 py-2 font-mono text-[8px] font-semibold tracking-[0.08em] text-cyan-700 uppercase shadow-[0_0_20px_rgba(6,182,212,0.08)] min-[360px]:text-[9px] sm:mb-7 sm:px-4 sm:text-[10px] md:text-[11px] dark:border-cyan-400/40 dark:bg-cyan-400/5 dark:text-cyan-400 dark:shadow-[0_0_20px_rgba(34,211,238,0.05)]">
            <span className="h-2 w-2 shrink-0 rounded-full border border-cyan-400/60 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.55)] sm:h-2.5 sm:w-2.5 dark:border-cyan-300/50 dark:bg-cyan-400 dark:shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            <span className="min-w-0 leading-4">
              Sistemas · Arquitectura · Rendimiento
            </span>
          </div>

          {/* =================================================
              NOMBRE
          ================================================= */}

          <h1 className="max-w-full text-[clamp(2.35rem,11vw,4.15rem)] leading-[0.98] font-extrabold tracking-[-0.045em] break-words text-slate-950 dark:text-white">
            Daniel Ramirez
          </h1>

          {/* =================================================
              ROLES
          ================================================= */}

          <div className="mt-4 flex min-w-0 flex-col items-start gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-5 sm:gap-4">
            <span className="max-w-full text-[16px] leading-tight font-medium text-slate-700 min-[360px]:text-[17px] sm:text-xl md:text-2xl dark:text-slate-200">
              Software Developer
            </span>

            <span className="hidden h-7 w-px shrink-0 bg-slate-300 min-[420px]:block dark:bg-white/20" />

            <span className="max-w-full rounded-md border border-cyan-200 bg-cyan-50 px-3 py-2 font-mono text-[9px] font-semibold tracking-wide text-cyan-700 sm:px-4 sm:text-xs dark:border-cyan-400/30 dark:bg-[#1b2433] dark:text-cyan-400">
              FullStack Developer
            </span>
          </div>

          {/* =================================================
              DESCRIPCIÓN
          ================================================= */}

          <p className="mt-6 max-w-[690px] text-[14px] leading-7 text-slate-600 sm:mt-7 sm:text-[15px] sm:leading-8 md:text-base xl:text-[17px] dark:text-slate-300">
            Construyo soluciones digitales escalables, funcionales y orientadas
            a resolver problemas reales. Especializado en APIs de alta
            disponibilidad y arquitecturas backend resilientes.
          </p>

          {/* =================================================
              CTA + REDES
          ================================================= */}

          <div className="mt-7 flex min-w-0 flex-col gap-5 sm:mt-8 lg:mt-9 xl:flex-row xl:items-center xl:justify-between">
            {/* BOTONES */}

            <div className="grid w-full min-w-0 grid-cols-1 gap-3 min-[430px]:flex min-[430px]:w-auto min-[430px]:flex-wrap">
              {/* VER PROYECTOS */}

              <a
                href="#proyectos"
                className="group inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 font-mono text-[10px] font-bold tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(34,211,238,0.28)] min-[430px]:min-h-14 min-[430px]:px-6 sm:px-7 sm:text-xs"
              >
                Ver proyectos
                <ArrowRight
                  size={16}
                  className="shrink-0 transition group-hover:translate-x-1"
                />
              </a>

              {/* DESCARGAR CV */}

              <a
                href="/daniel-ramirez-cv.pdf"
                download
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 font-mono text-[10px] font-bold tracking-wide text-slate-700 uppercase shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-700 min-[430px]:min-h-14 min-[430px]:px-6 sm:px-7 sm:text-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.07] dark:hover:text-slate-200"
              >
                <Download
                  size={16}
                  className="shrink-0 text-cyan-600 dark:text-cyan-400"
                />
                Descargar CV
              </a>
            </div>

            {/* =================================================
                REDES
            ================================================= */}

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {/* GITHUB */}

              <a
                href="https://github.com/danielramirez611"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-700 sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06] dark:hover:text-cyan-400"
              >
                <FaGithub size={18} />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/in/daniel-ramirezs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-700 sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06] dark:hover:text-cyan-400"
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* CONTACTO */}

              <a
                href="#contacto"
                aria-label="Contacto"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-700 sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06] dark:hover:text-cyan-400"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* =================================================
              SEPARADOR
          ================================================= */}

          <div className="my-6 h-px w-full bg-gradient-to-r from-slate-300/80 via-slate-200/50 to-transparent sm:my-7 dark:from-white/10 dark:via-white/5" />

          {/* =================================================
              STATS
          ================================================= */}

          <div className="grid w-full min-w-0 grid-cols-1 gap-2.5 min-[340px]:grid-cols-2 sm:gap-3 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="min-w-0 rounded-xl border border-slate-200 bg-white p-3.5 shadow-[0_8px_28px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_12px_35px_rgba(6,182,212,0.08)] sm:min-h-[105px] sm:p-4 dark:border-white/10 dark:bg-[#151b28]/80 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:shadow-none"
              >
                <strong className="block text-[19px] leading-tight font-extrabold tracking-tight break-words text-slate-950 sm:text-xl xl:text-2xl dark:text-white">
                  {stat.value}
                </strong>

                <span className="mt-2 block font-mono text-[8px] leading-4 tracking-[0.09em] break-words text-slate-500 uppercase sm:text-[9px] xl:text-[10px] dark:text-slate-400">
                  {stat.label}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* =================================================
            DERECHA / FOTO
        ================================================= */}

        <div className="relative mx-auto mt-2 w-full max-w-[425px] min-w-0 sm:max-w-[390px] md:max-w-[420px] lg:mt-0 lg:max-w-[425px]">
          {/* RESPLANDOR */}

          <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-cyan-400/[0.10] blur-2xl sm:-inset-5 sm:rounded-[36px] sm:blur-3xl dark:bg-cyan-400/5" />

          {/* =================================================
              FOTO
          ================================================= */}

          <div className="relative mx-auto aspect-[0.76] w-full max-w-full overflow-hidden rounded-[18px] border-2 border-cyan-500 bg-slate-100 shadow-[0_0_40px_rgba(6,182,212,0.14)] sm:rounded-[24px] sm:border-[3px] dark:border-cyan-400 dark:bg-[#111827] dark:shadow-[0_0_40px_rgba(34,211,238,0.10)]">
            <Image
              src="/daniel.jpg"
              alt="Daniel Ramirez - Software Developer"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 480px) calc(100vw - 32px), (max-width: 1024px) 420px, 425px"
            />

            {/* =================================================
                TRATAMIENTO DE FOTO
                Lo mantenemos oscuro para conservar contraste
                con el terminal y la fotografía.
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080c16] via-transparent to-[#07101e]/10" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#080b14] to-transparent" />

            {/* =================================================
                BADGE FOTO
            ================================================= */}

            <div className="absolute top-3 right-3 flex max-w-[calc(100%-24px)] items-center gap-1.5 rounded-lg border border-cyan-400/60 bg-[#07101e]/90 px-2.5 py-1.5 backdrop-blur-xl sm:top-4 sm:right-4 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] sm:h-2 sm:w-2" />

              <span className="truncate font-mono text-[7px] font-bold tracking-[0.07em] text-cyan-300 uppercase min-[360px]:text-[8px] sm:text-[10px] sm:tracking-[0.12em]">
                FullStack Developer
              </span>
            </div>

            {/* =================================================
                TERMINAL
            ================================================= */}

            <div className="absolute right-2.5 bottom-2.5 left-2.5 min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#090d17]/95 shadow-2xl backdrop-blur-xl min-[360px]:right-3 min-[360px]:bottom-3 min-[360px]:left-3 sm:right-4 sm:bottom-4 sm:left-4 sm:rounded-xl">
              {/* BARRA TERMINAL */}

              <div className="flex h-8 min-w-0 items-center border-b border-white/5 px-2.5 sm:h-10 sm:px-4">
                <div className="flex shrink-0 gap-1.5 sm:gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5" />

                  <span className="h-2 w-2 rounded-full bg-cyan-400 sm:h-2.5 sm:w-2.5" />

                  <span className="h-2 w-2 rounded-full bg-sky-400 sm:h-2.5 sm:w-2.5" />
                </div>

                <span className="mx-2 min-w-0 flex-1 truncate text-center font-mono text-[7px] tracking-wider text-slate-500 sm:mx-3 sm:text-[10px]">
                  daniel-arch.ts
                </span>

                <span className="shrink-0 font-mono text-[7px] font-bold text-cyan-400 sm:text-[10px]">
                  active
                </span>
              </div>

              {/* CÓDIGO */}

              <div className="min-w-0 overflow-hidden p-2.5 font-mono text-[8px] leading-4 min-[360px]:text-[9px] sm:p-4 sm:text-[11px] sm:leading-5">
                <p className="max-w-full break-words text-slate-300">
                  <span className="font-semibold text-blue-400">const</span>{" "}
                  architect = <span className="text-cyan-400">{"{"}</span> name:{" "}
                  <span className="text-violet-300">
                    &quot;Daniel Ramirez&quot;
                  </span>
                  ,
                </p>

                <p className="max-w-full break-words text-slate-300">
                  focus:{" "}
                  <span className="font-semibold text-cyan-300">
                    &quot;Distributed APIs&quot;
                  </span>{" "}
                  <span className="text-cyan-400">{"}"}</span>;
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              DECORACIONES DESKTOP
          ================================================= */}

          <div className="absolute top-1/2 -left-5 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-cyan-600 shadow-sm dark:border-white/10 dark:bg-[#111722] dark:text-cyan-400 dark:shadow-none">
              <Network size={18} />
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-cyan-600 shadow-sm dark:border-white/10 dark:bg-[#111722] dark:text-cyan-400 dark:shadow-none">
              <TerminalSquare size={18} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
