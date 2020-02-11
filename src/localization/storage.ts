import AsyncStorage from '@react-native-community/async-storage';

const key = 'language';

export const fetchLanguage = async () => {
    const lang = await AsyncStorage.getItem(key);
    if (!lang) {
        return 'lv';
    }
    return lang;
};

export const storeLanguage = async (lang: string) => {
    AsyncStorage.setItem(key, lang);
};
