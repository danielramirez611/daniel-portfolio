"use client";

import { useI18n } from "@/i18n/i18n-provider";
import { messageKeys } from "@/i18n/message-keys";

/* =========================================================
   SITE FOOTER
========================================================= */

export function SiteFooter() {
  const { $t } = useI18n();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-6 transition-colors duration-300 sm:py-7 md:py-8 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-3 px-4 text-[11px] text-slate-500 min-[380px]:px-5 sm:px-6 sm:text-xs md:flex-row md:items-center md:justify-between md:px-8 md:text-sm lg:px-8 xl:px-10 2xl:px-0 dark:text-slate-500">
        {/* =================================================
            COPYRIGHT
        ================================================= */}

        <span className="max-w-full text-center break-words md:text-left">
          © {currentYear} Daniel Ramirez
          {" · "}
          {$t(messageKeys.FOOTER.RIGHTS)}
        </span>

        {/* =================================================
            TECNOLOGÍAS
        ================================================= */}

        <span className="max-w-full text-center font-mono text-[9px] leading-5 tracking-[0.04em] break-words text-slate-500 sm:text-[10px] md:text-right md:text-[11px] lg:text-xs dark:text-slate-500">
          Next.js · TypeScript · Clean Architecture
        </span>
      </div>
    </footer>
  );
}
