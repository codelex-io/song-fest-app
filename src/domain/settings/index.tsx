import React, { useContext, createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { errors } from '@utils';
import { useLanguageSettings } from '@localization/LocalizationContext';

export type UserType = 'participant' | 'parent' | 'visitor-lv' | 'visitor-en';

let currentUserType: UserType | null = null;

export const initSettings = async () => {
    currentUserType = (await AsyncStorage.getItem('userType')) as UserType;
};

export const storeUserType = (source: UserType) => {
    currentUserType = source;
    AsyncStorage.setItem('userType', currentUserType).catch(errors.onError);
};

export const getCurrentUserType = () => currentUserType;

type SettingsType = {
    setUserType: (userType: UserType) => void;
    userType: UserType | null;
};

export const SettingsContext = createContext<SettingsType>({
    setUserType: () => null,
    userType: null,
});

export const useSettings = () => useContext<SettingsType>(SettingsContext);

export const SettingsContextProvider: React.FC = ({ children }) => {
    const [userType, setUserType] = useState<UserType | null>(currentUserType);
    const { setAppLanguage } = useLanguageSettings();
    return (
        <SettingsContext.Provider
            value={{
                setUserType: (userType: UserType) => {
                    if (userType === 'visitor-en') {
                        setAppLanguage('en');
                    } else {
                        setAppLanguage('lv');
                    }
                    storeUserType(userType);
                    setUserType(userType);
                },
                userType,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};
