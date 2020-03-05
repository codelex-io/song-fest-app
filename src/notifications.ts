import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import { errors } from '@utils';
import { Platform } from 'react-native';

const KEY = 'fcmToken';

const getToken = async (): Promise<void> => {
    let fcmToken = await AsyncStorage.getItem(KEY);
    if (!fcmToken) {
        fcmToken = await messaging().getToken();
        if (fcmToken) {
            await AsyncStorage.setItem(KEY, fcmToken);
        }
    }
};

const checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    if (enabled) {
        getToken();
    } else {
        requestPermission();
    }
};

const requestPermission = async () => {
    try {
        await messaging().requestPermission();
        getToken();
    } catch (error) {
        errors.onError(error);
    }
};

const createNotificationListeners = async () => {
    messaging().onMessage(message => {
        console.log(message.data);
    });
};

export const init = async (isRealDevice: boolean) => {
    if (Platform.OS === 'ios' && !isRealDevice) {
        return;
    }
    if (Platform.OS === 'ios') {
        await messaging().registerForRemoteNotifications();
    }
    await checkPermission();
    await createNotificationListeners();
};
