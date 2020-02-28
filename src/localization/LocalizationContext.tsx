import React, { createContext, useState } from 'react';
import translations from './translation';
import { LocalizedStrings } from 'react-native-localization';
import { errors } from '@utils';
import { language } from './index';
import { storeLanguage } from './storage';

type ContextType = {
    translations: LocalizedStrings<{}>;
    setAppLanguage: (language: string) => void;
    appLanguage: string;
};

export const LocalizationContext = createContext<ContextType>({
    translations,
    setAppLanguage: () => null,
    appLanguage: language,
});
export const LocalizationContextProvider: React.FC = ({ children }) => {
    const [appLanguage, setAppLanguage] = useState(language);

    const setLanguage = (language: string) => {
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
