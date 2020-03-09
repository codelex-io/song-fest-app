import React, { createContext, useState } from 'react';
import translations from './translations';
import { LocalizedStrings } from 'react-native-localization';
import { errors } from '@utils';
import { getLanguage } from './index';
import { storeLanguage } from './storage';
import { Language } from './types';

type ContextType = {
    translations: LocalizedStrings<{}>;
    setAppLanguage: (language: Language) => void;
    appLanguage: string;
};

export const LocalizationContext = createContext<ContextType>({
    translations,
    setAppLanguage: () => null,
    appLanguage: getLanguage(),
});

export const LocalizationContextProvider: React.FC = ({ children }) => {
    const [appLanguage, setAppLanguage] = useState<Language>(getLanguage());

    const setLanguage = (language: Language) => {
        translations.setLanguage(language);
        setAppLanguage(language);
        storeLanguage(language).catch(errors.onError);
    };

    return (
        <LocalizationContext.Provider
            value={{
                translations,
                setAppLanguage: setLanguage,
                appLanguage,
            }}
        >
            {children}
        </LocalizationContext.Provider>
    );
};
