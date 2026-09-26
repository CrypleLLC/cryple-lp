import type { Metadata } from 'next';

export const SITE_URL = 'https://cryple.io';
export const SITE_NAME = 'Cryple';
export const CONTACT_EMAIL = 'contact@cryple.io';
export const TEST_APP_URL = 'https://test-app.cryple.io';

export const locales = ['en', 'es', 'pt-br'] as const;
export const defaultLocale = 'en';

const languageTags: Record<string, string> = {
  'en': 'en',
  'es': 'es',
  'pt-br': 'pt-BR',
};

const openGraphLocales: Record<string, string> = {
  'en': 'en_US',
  'es': 'es_ES',
  'pt-br': 'pt_BR',
};

export const languageTag = (lang: string) => languageTags[lang] ?? languageTags[defaultLocale];

export const openGraphLocale = (lang: string) => openGraphLocales[lang] ?? openGraphLocales[defaultLocale];

export const localizedPath = (lang: string, path = '') => {
  const prefix = lang === defaultLocale ? '' : `/${lang}`;
  return `${prefix}${path}` || '/';
};

export const localizedUrl = (lang: string, path = '') => `${SITE_URL}${localizedPath(lang, path)}`;

export const languageAlternates = (path = '') => ({
  ...Object.fromEntries(locales.map((locale) => [languageTag(locale), localizedUrl(locale, path)])),
  'x-default': localizedUrl(defaultLocale, path),
});

export const pageMetadata = (
  lang: string,
  path: string,
  title: string,
  description: string,
): Metadata => ({
  title,
  description,
  alternates: {
    canonical: localizedPath(lang, path),
    languages: languageAlternates(path),
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title,
    description,
    url: localizedPath(lang, path),
    locale: openGraphLocale(lang),
    alternateLocale: locales.filter((locale) => locale !== lang).map(openGraphLocale),
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
});
