import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { errors } from '@utils';
import { Platform } from 'react-native';
import { ANDROID_CHANNEL, FCM_TOKEN } from './constants';
import { scheduleNotification, cancelNotification } from './scheduling';

const handleToken = async (): Promise<void> => {
    let fcmToken = await AsyncStorage.getItem(FCM_TOKEN);
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            await AsyncStorage.setItem(FCM_TOKEN, fcmToken);
        }
    }
};

const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        await Promise.all([handleToken(), createNotificationListeners()]);
    } else {
        await requestPermission();
    }
};

const requestPermission = async () => {
    try {
        await firebase.messaging().requestPermission();
    } catch (error) {
        errors.onError(error);
    }
};

const createNotificationListeners = async () => {
    firebase.notifications().onNotification(async notification => {
        notification.android.setChannelId(ANDROID_CHANNEL);
        await firebase.notifications().displayNotification(notification);
    });
};

const init = async (isRealDevice: boolean) => {
    if (Platform.OS === 'ios' && !isRealDevice) {
        return;
    }
    if (Platform.OS === 'android') {
        const channel = new firebase.notifications.Android.Channel(
            ANDROID_CHANNEL,
            'Notifications Channel',
            firebase.notifications.Android.Importance.High,
        ).setDescription('Used for all notifications');
        firebase.notifications().android.createChannel(channel);
    }
    await checkPermission();
};

export { init, scheduleNotification, cancelNotification };
