import AsyncStorage from '@react-native-community/async-storage';
import { errors } from '@utils';

export type UserType = 'participant' | 'parent' | 'visitor';

let userType: UserType | null = null;

export const initSettings = async () => {
    userType = (await AsyncStorage.getItem('userType')) as UserType;
};

export const storeUserType = (source: UserType) => {
    userType = source;
    AsyncStorage.setItem('userType', userType).catch(errors.onError);
};

export const getUserType = () => userType;
