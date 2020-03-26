import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { errors } from '@utils';
import { Platform } from 'react-native';
import { ANDROID_CHANNEL, FCM_TOKEN } from './constants';
import { scheduleNotification, cancelNotification } from './scheduling';
import { NotificationOpen, Notification } from 'react-native-firebase/notifications';
import { fromNotificationData, setInitialLocation, navigate } from '@navigation';

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

const getLocation = (notification: Notification) => {
    console.log(notification.data);
    if (!notification) {
        console.log('no notification detected, returning');
        return;
    }
    console.log('notification received, pushing navigation');
    return fromNotificationData(notification.data);
};

const createNotificationListeners = (): Promise<void> => {
    firebase.notifications().onNotification(async notification => {
        notification.setSound('default');
        if (Platform.OS === 'android') {
            notification.android.setChannelId(ANDROID_CHANNEL);
        }
        try {
            await firebase.notifications().displayNotification(notification);
        } catch (e) {
            errors.onError(e);
        }
    });
    firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
        const location = getLocation(notificationOpen.notification);
        if (!location) {
            return;
        }
        navigate(location);
    });
    return new Promise(resolve => {
        firebase
            .notifications()
            .getInitialNotification()
            .then((notificationOpen: NotificationOpen) => {
                if (!notificationOpen) {
                    return;
                }
                const location = getLocation(notificationOpen.notification);
                if (!location) {
                    return;
                }
                setInitialLocation(location);
            })
            .then(resolve);
    });
};

const initNotifications = async (isRealDevice: boolean) => {
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
    return createNotificationListeners();
};

const postLaunch = () => {
    new Promise(resolve => setTimeout(resolve, 3000)).then(checkPermission).catch(errors.onError);
};

export { initNotifications, postLaunch, scheduleNotification, cancelNotification };
