"use client";

import { GraduationCap, Languages, Medal, UsersRound } from "lucide-react";

import { useI18n } from "@/i18n/i18n-provider";

import { messageKeys } from "@/i18n/message-keys";

/* =========================================================
   LOGROS
========================================================= */

const achievements = [
  /* =======================================================
     DÉCIMO SUPERIOR
  ======================================================= */

  {
    id: "top-tenth",

    icon: Medal,

    titleKey: messageKeys.ACHIEVEMENTS.ITEMS.TOP_TENTH.TITLE,

    descriptionKey: messageKeys.ACHIEVEMENTS.ITEMS.TOP_TENTH.DESCRIPTION,

    iconClass:
      "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300",

    borderClass: "hover:border-cyan-400/50 dark:hover:border-cyan-400/35",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(6,182,212,0.09)] dark:hover:shadow-[0_18px_45px_rgba(34,211,238,0.06)]",

    delayClass: "[animation-delay:80ms]",
  },

  /* =======================================================
     BECA 18
  ======================================================= */

  {
    id: "beca-18",

    icon: GraduationCap,

    titleKey: messageKeys.ACHIEVEMENTS.ITEMS.BECA_18.TITLE,

    descriptionKey: messageKeys.ACHIEVEMENTS.ITEMS.BECA_18.DESCRIPTION,

    iconClass:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300",

    borderClass: "hover:border-blue-400/50 dark:hover:border-blue-400/35",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(59,130,246,0.09)] dark:hover:shadow-[0_18px_45px_rgba(96,165,250,0.06)]",

    delayClass: "[animation-delay:140ms]",
  },

  /* =======================================================
     CADE
  ======================================================= */

  {
    id: "cade",

    icon: UsersRound,

    titleKey: messageKeys.ACHIEVEMENTS.ITEMS.CADE.TITLE,

    descriptionKey: messageKeys.ACHIEVEMENTS.ITEMS.CADE.DESCRIPTION,

    iconClass:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300",

    borderClass: "hover:border-violet-400/50 dark:hover:border-violet-400/35",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(139,92,246,0.09)] dark:hover:shadow-[0_18px_45px_rgba(167,139,250,0.06)]",

    delayClass: "[animation-delay:200ms]",
  },

  /* =======================================================
     INGLÉS B1
  ======================================================= */

  {
    id: "english-b1",

    icon: Languages,

    titleKey: messageKeys.ACHIEVEMENTS.ITEMS.ENGLISH_B1.TITLE,

    descriptionKey: messageKeys.ACHIEVEMENTS.ITEMS.ENGLISH_B1.DESCRIPTION,

    iconClass:
      "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300",

    borderClass: "hover:border-cyan-400/50 dark:hover:border-cyan-400/35",

    glowClass:
      "hover:shadow-[0_18px_45px_rgba(6,182,212,0.09)] dark:hover:shadow-[0_18px_45px_rgba(34,211,238,0.06)]",

    delayClass: "[animation-delay:260ms]",
  },
] as const;

/* =========================================================
   COMPONENTE
========================================================= */

export function AchievementsSection() {
  const { $t } = useI18n();

  return (
    <section
      id="logros"
      className="perf-section relative w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-14 transition-colors duration-300 sm:py-16 md:py-20 landscape:py-12 dark:border-white/[0.07]"
    >
      {/* =====================================================
          GLOW DECORATIVO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-28 h-[240px] w-[240px] rounded-full bg-cyan-400/[0.08] blur-[90px] sm:-left-32 sm:h-[320px] sm:w-[320px] sm:blur-[120px] dark:bg-cyan-400/[0.025]"
      />

      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
            CABECERA
        ================================================= */}

        <div className="perf-reveal-up min-w-0">
          {/* =================================================
              BADGE
          ================================================= */}

          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 shadow-sm transition-colors duration-300 sm:px-3 dark:border-cyan-300/25 dark:bg-[#1b2330]/80 dark:shadow-none">
            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-700 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] dark:text-cyan-300">
              {$t(messageKeys.ACHIEVEMENTS.EYEBROW)}
            </span>
          </div>

          {/* =================================================
              TÍTULO
          ================================================= */}

          <h2 className="mt-3 max-w-full text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-slate-950 min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem] dark:text-white">
            {$t(messageKeys.ACHIEVEMENTS.TITLE)}
          </h2>

          {/* =================================================
              SUBTÍTULO
          ================================================= */}

          <p className="mt-3 max-w-[820px] text-[13px] leading-6 break-words text-slate-600 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[16px] dark:text-slate-300">
            {$t(messageKeys.ACHIEVEMENTS.DESCRIPTION)}
          </p>
        </div>

        {/* =================================================
            CARDS
        ================================================= */}

        <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:mt-10 sm:gap-4 lg:grid-cols-2 xl:grid-cols-4 landscape:min-[700px]:grid-cols-2 xl:landscape:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className={`group perf-reveal-up relative flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 min-[360px]:p-5 sm:min-h-[195px] sm:rounded-[16px] sm:p-6 lg:min-h-[205px] dark:border-white/[0.09] dark:bg-[#151923]/95 dark:shadow-none ${item.borderClass} ${item.glowClass} ${item.delayClass}`}
              >
                {/* =================================================
                      LUZ SUPERIOR
                  ================================================= */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-50/80 to-transparent sm:h-20 dark:from-white/[0.015]"
                />

                {/* =================================================
                      ICONO
                  ================================================= */}

                <div
                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 ease-out group-hover:scale-[1.08] group-hover:-rotate-[4deg] sm:h-11 sm:w-11 sm:rounded-xl ${item.iconClass}`}
                >
                  <Icon
                    size={19}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="sm:h-[21px] sm:w-[21px]"
                  />
                </div>

                {/* =================================================
                      TÍTULO
                  ================================================= */}

                <h3 className="relative mt-4 max-w-full text-[16px] leading-6 font-bold tracking-[-0.025em] break-words text-slate-950 min-[360px]:text-[17px] sm:mt-5 sm:text-[19px] dark:text-white">
                  {$t(item.titleKey)}
                </h3>

                {/* =================================================
                      DESCRIPCIÓN
                  ================================================= */}

                <p className="relative mt-2 flex-1 text-[12px] leading-6 break-words text-slate-600 min-[360px]:text-[13px] dark:text-slate-300">
                  {$t(item.descriptionKey)}
                </p>

                {/* =================================================
                      LÍNEA INFERIOR
                  ================================================= */}

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
