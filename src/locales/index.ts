import { Language, TranslationDictionary } from './types';
import { enLocale } from './en';
import { thLocale } from './th';

export * from './types';
export { enLocale } from './en';
export { thLocale } from './th';

export const dictionaries: Record<Language, TranslationDictionary> = {
  th: thLocale,
  en: enLocale,
};

export const defaultLanguage: Language = 'th';
