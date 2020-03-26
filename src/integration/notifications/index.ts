import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { errors } from '@utils';
import { Platform } from 'react-native';
import { ANDROID_CHANNEL, FCM_TOKEN } from './constants';
import { scheduleNotification, cancelNotification } from './scheduling';
import { NotificationOpen, Notification } from 'react-native-firebase/notifications';
import { fromNotificationData } from '@navigation';

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

const onOpen = (notification: Notification) => {
    if (!notification) {
        return;
    }
    const location = fromNotificationData(notification.data);
    if (!location) {
        return;
    }
};

const createNotificationListeners = async () => {
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
        onOpen(notificationOpen.notification);
    });
    firebase
        .notifications()
        .getInitialNotification()
        .then((notificationOpen: NotificationOpen) => {
            if (notificationOpen) {
                onOpen(notificationOpen.notification);
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

export { postLaunch, scheduleNotification, cancelNotification };
