import React, { useContext, createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { errors } from '@utils';

export type UserType = 'participant' | 'parent' | 'visitor';

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
    return (
        <SettingsContext.Provider
            value={{
                setUserType: (userType: UserType) => {
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
