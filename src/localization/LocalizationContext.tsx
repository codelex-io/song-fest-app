import React, { createContext, useState } from 'react';
import translations, { DEFAULT_LANGUAGE } from './translation';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';

const APP_LANGUAGE = 'appLanguage';

export const LocalizationContext = createContext({
    translations,
    setAppLanguage: ({}) => {
        null;
    },
    appLanguage: DEFAULT_LANGUAGE,
    initializeAppLanguage: () => {
        null;
    },
});

export const LocalizationProvider: React.FC = ({ children }) => {
    const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

    const setLanguage = (language: string) => {
        translations.setLanguage(language);
        setAppLanguage(language);
        AsyncStorage.setItem(APP_LANGUAGE, language);
    };

    const initializeAppLanguage = async () => {
        const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

        if (!currentLanguage) {
            let localeCode = DEFAULT_LANGUAGE;
            const supportedLocaleCodes = translations.getAvailableLanguages();
            const phoneLocaleCodes = RNLocalize.getLocales().map(locale => locale.languageCode);
            phoneLocaleCodes.some(code => {
                if (supportedLocaleCodes.includes(code)) {
                    localeCode = code;
                    return true;
                }
            });
            setLanguage(localeCode);
        } else {
            setLanguage(currentLanguage);
        }
    };

    return (
        <LocalizationContext.Provider
            value={{
                translations,
                setAppLanguage: setLanguage,

                appLanguage,
                initializeAppLanguage,
            }}
        >
            {children}
        </LocalizationContext.Provider>
    );
};
