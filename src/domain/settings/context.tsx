import React, { useContext, createContext, useState } from 'react';
import { UserType } from '.';

type SettingsType = {
    setUserType: (userType: UserType) => void;
    userType: UserType | null;
};

export const SettingsContext = createContext<SettingsType>({
    setUserType: () => null,
    userType: null,
});
