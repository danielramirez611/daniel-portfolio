"use client";

import Image from "next/image";

import {
  ArrowRight,
  Download,
  Mail,
  Network,
  TerminalSquare,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { useI18n } from "@/i18n/i18n-provider";

import { messageKeys } from "@/i18n/message-keys";

import { AnimatedStatValue } from "./animated-stat-value";

/* =========================================================
   ESTADÍSTICAS
========================================================= */

const stats = [
  {
    id: "experience",

    value: 2,

    startValue: 100,

    prefix: "+",

    suffixKey: messageKeys.HERO.STATS.EXPERIENCE_SUFFIX,

    labelKey: messageKeys.HERO.STATS.EXPERIENCE,
  },

  {
    id: "projects",

    value: 10,

    startValue: 100,

    prefix: "",

    suffix: "+",

    labelKey: messageKeys.HERO.STATS.PROJECTS,
  },

  {
    id: "academic",

    value: 10,

    startValue: 100,

    prefix: "Top ",

    suffix: "%",

    labelKey: messageKeys.HERO.STATS.ACADEMIC,
  },

  {
    id: "clean-code",

    value: 100,

    startValue: 0,

    prefix: "",

    suffix: "%",

    labelKey: messageKeys.HERO.STATS.CLEAN_CODE,
  },
] as const;

/* =========================================================
   HERO
========================================================= */

export function HeroSection() {
  const { $t } = useI18n();

  return (
    <section
      id="inicio"
      className="relative w-full max-w-full overflow-x-clip pt-20 sm:pt-24 lg:pt-28"
    >
      {/* =================================================
          LUCES DECORATIVAS
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 -left-40 h-[300px] w-[300px] rounded-full bg-blue-500/[0.08] blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] dark:bg-blue-600/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -right-40 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.10] blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] dark:bg-cyan-400/5"
      />

      {/* =================================================
          CONTENEDOR
      ================================================= */}

      <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-10 px-4 py-8 min-[380px]:px-5 sm:gap-12 sm:px-6 sm:py-10 md:px-8 lg:min-h-[720px] lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12 lg:px-8 lg:py-12 xl:gap-16 xl:px-10 2xl:px-0 landscape:py-6 lg:landscape:py-10">
        {/* =================================================
            IZQUIERDA
        ================================================= */}

        <div className="w-full min-w-0">
          {/* =================================================
              BADGE
          ================================================= */}

          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50 px-3 py-2 font-mono text-[8px] font-semibold tracking-[0.08em] text-cyan-700 uppercase shadow-[0_0_20px_rgba(6,182,212,0.08)] min-[360px]:text-[9px] sm:mb-7 sm:px-4 sm:text-[10px] md:text-[11px] dark:border-cyan-400/40 dark:bg-cyan-400/5 dark:text-cyan-400 dark:shadow-[0_0_20px_rgba(34,211,238,0.05)]">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full border border-cyan-400/60 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.55)] sm:h-2.5 sm:w-2.5 dark:border-cyan-300/50 dark:bg-cyan-400 dark:shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />

            <span className="min-w-0 leading-4">
              {$t(messageKeys.HERO.BADGE)}
            </span>
          </div>

          {/* =================================================
              NOMBRE
          ================================================= */}

          <h1 className="max-w-full text-[clamp(2.35rem,11vw,4.15rem)] leading-[0.98] font-extrabold tracking-[-0.045em] break-words text-slate-950 dark:text-white">
            {$t(messageKeys.HERO.NAME)}
          </h1>

          {/* =================================================
              ROLES
          ================================================= */}

          <div className="mt-4 flex min-w-0 flex-col items-start gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-5 sm:gap-4">
            <span className="max-w-full text-[16px] leading-tight font-medium text-slate-700 min-[360px]:text-[17px] sm:text-xl md:text-2xl dark:text-slate-200">
              {$t(messageKeys.HERO.ROLE)}
            </span>

            <span
              aria-hidden="true"
              className="hidden h-7 w-px shrink-0 bg-slate-300 min-[420px]:block dark:bg-white/20"
            />

            <span className="max-w-full rounded-md border border-cyan-200 bg-cyan-50 px-3 py-2 font-mono text-[9px] font-semibold tracking-wide text-cyan-700 sm:px-4 sm:text-xs dark:border-cyan-400/30 dark:bg-[#1b2433] dark:text-cyan-400">
              {$t(messageKeys.HERO.SECONDARY_ROLE)}
            </span>
          </div>

          {/* =================================================
              DESCRIPCIÓN
          ================================================= */}

          <p className="mt-6 max-w-[690px] text-[14px] leading-7 text-slate-600 sm:mt-7 sm:text-[15px] sm:leading-8 md:text-base xl:text-[17px] dark:text-slate-300">
            {$t(messageKeys.HERO.DESCRIPTION)}
          </p>

          {/* =================================================
              CTA + REDES
          ================================================= */}

          <div className="mt-7 flex min-w-0 flex-col gap-5 sm:mt-8 lg:mt-9 xl:flex-row xl:items-center xl:justify-between">
            {/* =================================================
                BOTONES
            ================================================= */}

            <div className="grid w-full min-w-0 grid-cols-1 gap-3 min-[430px]:flex min-[430px]:w-auto min-[430px]:flex-wrap">
              {/* VER PROYECTOS */}

              <a
                href="#proyectos"
                className="group inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 font-mono text-[10px] font-bold tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(34,211,238,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(34,211,238,0.28)] min-[430px]:min-h-14 min-[430px]:px-6 sm:px-7 sm:text-xs"
              >
                {$t(messageKeys.COMMON.VIEW_PROJECTS)}

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* DESCARGAR CV */}

              <a
                href="/daniel-ramirez-cv.pdf"
                download
                className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 font-mono text-[10px] font-bold tracking-wide text-slate-700 uppercase shadow-sm transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-50 min-[430px]:min-h-14 min-[430px]:px-6 sm:px-7 sm:text-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.07]"
              >
                <Download
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-cyan-600 dark:text-cyan-400"
                />

                {$t(messageKeys.COMMON.DOWNLOAD_CV)}
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
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06]"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/in/daniel-ramirezs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06]"
              >
                <FaLinkedinIn size={17} aria-hidden="true" />
              </a>

              {/* CONTACTO */}

              <a
                href="#contacto"
                aria-label={$t(messageKeys.COMMON.CONTACT)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06]"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* =================================================
              SEPARADOR
          ================================================= */}

          <div
            aria-hidden="true"
            className="my-6 h-px w-full bg-gradient-to-r from-slate-300/80 via-slate-200/50 to-transparent sm:my-7 dark:from-white/10 dark:via-white/5"
          />

          {/* =================================================
              ESTADÍSTICAS
          ================================================= */}

          <div className="grid w-full min-w-0 grid-cols-1 gap-2.5 min-[340px]:grid-cols-2 sm:gap-3 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const suffix =
                "suffixKey" in stat ? $t(stat.suffixKey) : stat.suffix;

              return (
                <article
                  key={stat.id}
                  className="min-w-0 rounded-xl border border-slate-200 bg-white p-3.5 shadow-[0_8px_28px_rgba(15,23,42,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_12px_35px_rgba(6,182,212,0.08)] sm:min-h-[105px] sm:p-4 dark:border-white/10 dark:bg-[#151b28]/80 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:shadow-none"
                >
                  {/* =====================================
                        NÚMERO
                    ===================================== */}

                  <strong className="block text-[19px] leading-tight font-extrabold tracking-tight break-words text-slate-950 sm:text-xl xl:text-2xl dark:text-white">
                    <AnimatedStatValue
                      value={stat.value}
                      startValue={stat.startValue}
                      prefix={stat.prefix}
                      suffix={suffix}
                      duration={1350}
                    />
                  </strong>

                  {/* =====================================
                        LABEL
                    ===================================== */}

                  <span className="mt-2 block font-mono text-[8px] leading-4 tracking-[0.09em] break-words text-slate-500 uppercase sm:text-[9px] xl:text-[10px] dark:text-slate-400">
                    {$t(stat.labelKey)}
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        {/* =================================================
            DERECHA / FOTO
        ================================================= */}

        <div className="relative mx-auto mt-2 w-full max-w-[425px] min-w-0 sm:max-w-[390px] md:max-w-[420px] lg:mt-0 lg:max-w-[425px]">
          {/* =================================================
              RESPLANDOR
          ================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-[30px] bg-cyan-400/[0.10] blur-2xl sm:-inset-5 sm:rounded-[36px] sm:blur-3xl dark:bg-cyan-400/5"
          />

          {/* =================================================
              FOTO
          ================================================= */}

          <div className="relative mx-auto aspect-[0.76] w-full max-w-full overflow-hidden rounded-[18px] border-2 border-cyan-500 bg-slate-100 shadow-[0_0_40px_rgba(6,182,212,0.14)] [contain:paint] sm:rounded-[24px] sm:border-[3px] dark:border-cyan-400 dark:bg-[#111827] dark:shadow-[0_0_40px_rgba(34,211,238,0.10)]">
            <Image
              src="/daniel.webp"
              alt={$t(messageKeys.HERO.PHOTO_ALT)}
              fill
              preload
              quality={65}
              decoding="async"
              className="object-cover object-center"
              sizes="
                (max-width: 480px) calc(100vw - 32px),
                (max-width: 768px) 390px,
                (max-width: 1023px) 420px,
                425px
              "
            />

            {/* =================================================
                TRATAMIENTO FOTO
            ================================================= */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080c16] via-transparent to-[#07101e]/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#080b14] to-transparent"
            />

            {/* =================================================
                BADGE FOTO
            ================================================= */}

            <div className="absolute top-3 right-3 flex max-w-[calc(100%-24px)] items-center gap-1.5 rounded-lg border border-cyan-400/60 bg-[#07101e]/95 px-2.5 py-1.5 sm:top-4 sm:right-4 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] sm:h-2 sm:w-2"
              />

              <span className="truncate font-mono text-[7px] font-bold tracking-[0.07em] text-cyan-300 uppercase min-[360px]:text-[8px] sm:text-[10px] sm:tracking-[0.12em]">
                {$t(messageKeys.HERO.SECONDARY_ROLE)}
              </span>
            </div>

            {/* =================================================
                TERMINAL
            ================================================= */}

            <div className="absolute right-2.5 bottom-2.5 left-2.5 min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#090d17]/95 shadow-2xl [contain:paint] min-[360px]:right-3 min-[360px]:bottom-3 min-[360px]:left-3 sm:right-4 sm:bottom-4 sm:left-4 sm:rounded-xl">
              {/* =================================================
                  BARRA TERMINAL
              ================================================= */}

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
                  {$t(messageKeys.HERO.TERMINAL_ACTIVE)}
                </span>
              </div>

              {/* =================================================
                  CÓDIGO
              ================================================= */}

              <div className="min-w-0 overflow-hidden p-2.5 font-mono text-[8px] leading-4 min-[360px]:text-[9px] sm:p-4 sm:text-[11px] sm:leading-5">
                <p className="max-w-full break-words text-slate-300">
                  <span className="font-semibold text-blue-400">const</span>{" "}
                  architect = <span className="text-cyan-400">{"{"}</span> name:{" "}
                  <span className="text-violet-300">
                    &quot;
                    {$t(messageKeys.HERO.NAME)}
                    &quot;
                  </span>
                  ,
                </p>

                <p className="max-w-full break-words text-slate-300">
                  focus:{" "}
                  <span className="font-semibold text-cyan-300">
                    &quot;
                    {$t(messageKeys.HERO.TERMINAL_FOCUS)}
                    &quot;
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
              <Network size={18} aria-hidden="true" />
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-cyan-600 shadow-sm dark:border-white/10 dark:bg-[#111722] dark:text-cyan-400 dark:shadow-none">
              <TerminalSquare size={18} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
