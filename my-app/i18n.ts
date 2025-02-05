// config/i18n.ts
export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português'
};

export const localePrefix = 'always'; // ou 'as-needed' para prefixo opcional