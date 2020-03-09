import { fetchLanguage } from './storage';
import { Language } from './types';
import translations from './translations';

let language: Language = 'lv';

export const initLanguage = async () => {
    language = await fetchLanguage();
    translations.setLanguage(language);
};

export const getLanguage = (): Language => {
    return language;
};
