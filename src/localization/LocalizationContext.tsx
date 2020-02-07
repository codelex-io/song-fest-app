import React, { createContext, useState } from 'react';
import translations, { DEFAULT_LANGUAGE } from './translation';
import AsyncStorage from '@react-native-community/async-storage';
import { LocalizedStrings } from 'react-native-localization';
import { errors } from '@utils';

const APP_LANGUAGE = 'appLanguage';

type ContextType = {
    translations: LocalizedStrings<{}>;
    setAppLanguage: (language: string) => void;
    appLanguage: string;
    initializeAppLanguage: () => void;
};

export const LocalizationContext = createContext<ContextType>({
    translations,
    setAppLanguage: () => null,
    appLanguage: DEFAULT_LANGUAGE,
    initializeAppLanguage: () => null,
});
export const LocalizationContextProvider: React.FC = ({ children }) => {
    const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

    const setLanguage = (language: string) => {
        translations.setLanguage(language);
        setAppLanguage(language);
        AsyncStorage.setItem(APP_LANGUAGE, language).catch(errors.onError);
    };

    const initializeAppLanguage = async () => {
        const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE).catch(errors.onError);

        if (!currentLanguage) {
            const defaultLanguage = DEFAULT_LANGUAGE;
            setLanguage(defaultLanguage);
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
