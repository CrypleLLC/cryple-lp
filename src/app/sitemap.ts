import type { MetadataRoute } from 'next';
import { languageAlternates, localizedUrl, locales } from '@/lib/site';

const pages = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/security-policy', changeFrequency: 'yearly', priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((lang) => ({
      url: localizedUrl(lang, path),
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
