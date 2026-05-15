import { ui } from './ui';

export type Lang = 'es' | 'en';

export function getLang(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'es';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['es']): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui['es'][key];
  };
}
