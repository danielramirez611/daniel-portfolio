"use client";

import { Languages } from "lucide-react";

import { LOCALES } from "@/i18n";

import { useI18n } from "@/i18n/i18n-provider";

import { messageKeys } from "@/i18n/message-keys";

/* =========================================================
   LANGUAGE TOGGLE
========================================================= */

export function LanguageToggle() {
  const { locale, toggleLanguage, $t } = useI18n();

  const nextLanguage = locale === LOCALES.ES ? "EN" : "ES";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={$t(messageKeys.LANGUAGE.CHANGE_LANGUAGE)}
      title={$t(messageKeys.LANGUAGE.CHANGE_LANGUAGE)}
      className="flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 font-mono text-[9px] font-bold text-slate-700 transition-[transform,background-color,border-color] duration-150 hover:border-cyan-400/50 hover:bg-cyan-50 active:scale-[0.96] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.06]"
    >
      <Languages size={15} aria-hidden="true" className="shrink-0" />

      <span>{nextLanguage}</span>
    </button>
  );
}
