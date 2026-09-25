"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALES,
  messages,
  translate,
  type Locale,
} from "@/i18n";

/* =========================================================
   STORAGE
========================================================= */

const LANGUAGE_STORAGE_KEY = "dr-portfolio-language";

const LANGUAGE_CHANGE_EVENT = "dr-portfolio-language-change";

/* =========================================================
   CONTEXT TYPE
========================================================= */

interface I18nContextValue {
  locale: Locale;

  setLocale: (locale: Locale) => void;

  changeLanguage: (locale: Locale) => void;

  toggleLanguage: () => void;

  $t: (key: string) => string;
}

/* =========================================================
   CONTEXT
========================================================= */

const I18nContext = createContext<I18nContextValue | null>(null);

/* =========================================================
   OBTENER IDIOMA DEL CLIENTE
========================================================= */

function getClientLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const savedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLocale && isLocale(savedLocale)) {
    return savedLocale;
  }

  return DEFAULT_LOCALE;
}

/* =========================================================
   SNAPSHOT DEL SERVIDOR

   El servidor siempre comienza con el idioma
   predeterminado para evitar problemas de hydration.
========================================================= */

function getServerLocale(): Locale {
  return DEFAULT_LOCALE;
}

/* =========================================================
   SUBSCRIPCIÓN

   Escucha:

   1. Cambios realizados desde esta misma pestaña.
   2. Cambios de localStorage realizados desde otra pestaña.
========================================================= */

function subscribeToLocale(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  function handleLanguageChange() {
    callback();
  }

  function handleStorage(event: StorageEvent) {
    if (event.key === LANGUAGE_STORAGE_KEY) {
      callback();
    }
  }

  window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);

  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);

    window.removeEventListener("storage", handleStorage);
  };
}

/* =========================================================
   GUARDAR IDIOMA
========================================================= */

function saveLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);

  /*
   * El evento "storage" no se dispara en la
   * misma pestaña que realizó el cambio.
   *
   * Por eso usamos un evento personalizado
   * para actualizar inmediatamente la UI.
   */

  window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
}

/* =========================================================
   PROVIDER
========================================================= */

export function I18nProvider({ children }: { children: ReactNode }) {
  /* =======================================================
     LOCALE

     useSyncExternalStore permite sincronizar React
     con localStorage sin usar setState dentro de useEffect.
  ======================================================= */

  const locale = useSyncExternalStore(
    subscribeToLocale,
    getClientLocale,
    getServerLocale,
  );

  /* =======================================================
     SINCRONIZAR <html lang="">
  ======================================================= */

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  const changeLanguage = useCallback((nextLocale: Locale) => {
    saveLocale(nextLocale);

    document.documentElement.lang = nextLocale;
  }, []);

  /* =======================================================
     SET LOCALE
  ======================================================= */

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      changeLanguage(nextLocale);
    },
    [changeLanguage],
  );

  /* =======================================================
     TOGGLE LANGUAGE
  ======================================================= */

  const toggleLanguage = useCallback(() => {
    const nextLocale = locale === LOCALES.ES ? LOCALES.EN : LOCALES.ES;

    changeLanguage(nextLocale);
  }, [changeLanguage, locale]);

  /* =======================================================
     TRANSLATE
  ======================================================= */

  const $t = useCallback(
    (key: string) => {
      return translate(messages[locale], key);
    },
    [locale],
  );

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,

      setLocale,

      changeLanguage,

      toggleLanguage,

      $t,
    }),
    [locale, setLocale, changeLanguage, toggleLanguage, $t],
  );

  /* =======================================================
     PROVIDER
  ======================================================= */

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/* =========================================================
   HOOK
========================================================= */

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n debe utilizarse dentro de I18nProvider");
  }

  return context;
}
