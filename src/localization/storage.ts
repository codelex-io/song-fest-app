import AsyncStorage from '@react-native-community/async-storage';
import { Language } from './types';

const key = 'language';

export const fetchLanguage = async (): Promise<Language> => {
    const lang = (await AsyncStorage.getItem(key)) as Language;
    if (!lang) {
        return 'lv';
    }
    return lang;
};

export const storeLanguage = async (lang: Language) => {
    AsyncStorage.setItem(key, lang);
};
