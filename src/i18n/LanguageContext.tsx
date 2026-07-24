"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "./translations/en";
import { zh } from "./translations/zh";
import { es } from "./translations/es";
import { LocaleCode, LocaleInfo, Translations } from "./types";

const TRANSLATIONS: Record<LocaleCode, Translations> = {
  en,
  zh,
  es,
};

export const LOCALES: LocaleInfo[] = [
  { code: "en", label: "EN", nativeName: "English" },
  { code: "zh", label: "中文", nativeName: "中文" },
  { code: "es", label: "ES", nativeName: "Español" },
];

interface LanguageContextType {
  locale: LocaleCode;
  t: Translations;
  setLocale: (locale: LocaleCode) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<LocaleCode>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLocale = localStorage.getItem("lang") as LocaleCode;
    if (savedLocale && TRANSLATIONS[savedLocale]) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: LocaleCode) => {
    setLocaleState(newLocale);
    localStorage.setItem("lang", newLocale);
  };

  const value = {
    locale,
    t: TRANSLATIONS[locale] || en,
    setLocale,
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return <>{children}</>; 
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
