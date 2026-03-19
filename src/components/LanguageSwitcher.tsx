"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    
    // Determine the current path without the locale prefix
    let newPath = pathname;
    
    // If we're currently on a localized route, strip it off
    if (pathname.startsWith('/pt-br') || pathname.startsWith('/es')) {
      newPath = pathname.replace(/^\/[^\/]+/, '');
    }
    
    // If the path became empty, set it back to /
    if (!newPath) newPath = '/';

    // If new lang is english, just go to root path (since middleware maps / to english)
    if (newLang === 'en') {
      router.push(newPath);
    } else {
      // If going to pt-br or es, prepend it!
      // Care for the trailing slash
      const cleanPath = newPath === '/' ? '' : newPath;
      router.push(`/${newLang}${cleanPath}`);
    }
  };

  return (
    <select 
      value={currentLang}
      onChange={handleLanguageChange}
      className="language-select"
    >
      <option value="en" style={{ color: 'black' }}>🇺🇸 EN</option>
      <option value="pt-br" style={{ color: 'black' }}>🇧🇷 PT-BR</option>
      <option value="es" style={{ color: 'black' }}>🇪🇸 ES</option>
    </select>
  );
}
