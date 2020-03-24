import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { errors } from '@utils';
import { Platform } from 'react-native';
import { ANDROID_CHANNEL, FCM_TOKEN } from './constants';
import { scheduleNotification, cancelNotification } from './scheduling';
import { Notification } from 'react-native-firebase/notifications';

interface NotificationPredicate {
    shouldDisplay: (notification: Notification) => boolean;
}

let predicate: NotificationPredicate | null = null;

const setPredicate = (p: (notification: Notification) => boolean) => (predicate = { shouldDisplay: p });

const handleToken = async (): Promise<void> => {
    let fcmToken = await AsyncStorage.getItem(FCM_TOKEN);
    console.log(fcmToken);
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
        console.log(notification);
        notification.android.setChannelId(ANDROID_CHANNEL);
        if (predicate && predicate.shouldDisplay(notification)) {
            await firebase.notifications().displayNotification(notification);
        }
    });
};

const postLaunch = (isRealDevice: boolean) => {
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
    new Promise(resolve => setTimeout(resolve, 3000)).then(checkPermission).catch(errors.onError);
};

export { postLaunch, setPredicate, scheduleNotification, cancelNotification };
