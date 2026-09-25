import en from "./locales/en.json";
import es from "./locales/es.json";

/* =========================================================
   LOCALES
========================================================= */

export const LOCALES = {
  ES: "es",
  EN: "en",
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

/* =========================================================
   DEFAULT
========================================================= */

export const DEFAULT_LOCALE: Locale = LOCALES.ES;

/* =========================================================
   MESSAGES
========================================================= */

export const messages = {
  es,
  en,
} as const;

/* =========================================================
   GET MESSAGES
========================================================= */

export function getMessages(locale: Locale) {
  return messages[locale];
}

/* =========================================================
   VALIDATE LOCALE
========================================================= */

export function isLocale(value: string): value is Locale {
  return value === LOCALES.ES || value === LOCALES.EN;
}

/* =========================================================
   TRANSLATE
========================================================= */

export function translate(messagesObject: unknown, key: string): string {
  const parts = key.split(".");

  let current: unknown = messagesObject;

  for (const part of parts) {
    if (typeof current !== "object" || current === null) {
      return key;
    }

    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === "string" ? current : key;
}
