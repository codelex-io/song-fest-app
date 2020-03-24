import { Platform } from 'react-native';
import firebase from 'react-native-firebase';
import { Moment } from 'moment';
import { ANDROID_CHANNEL } from './constants';
import { randomString } from '@utils';
import { Location } from 'src/navigation/location';

interface Notification {
    content: string;
    fireDate: Moment;
    location?: Location;
}

export const scheduleNotification = async (source: Notification): Promise<string> => {
    const notificationId = randomString();
    const title = Platform.OS === 'android' ? 'Nāc Gavilēt' : '';
    const notification = new firebase.notifications.Notification()
        .setNotificationId(notificationId)
        .setTitle(title)
        .setBody(source.content)
        .setSound('default')
        .setData(source.location)
        .android.setPriority(firebase.notifications.Android.Priority.High)
        .android.setChannelId(ANDROID_CHANNEL)
        .android.setAutoCancel(true);
    const schedule = {
        fireDate: source.fireDate.valueOf(),
        exact: true,
    };
    return firebase
        .notifications()
        .scheduleNotification(notification, schedule)
        .then(() => notificationId);
};

export const cancelNotification = (notificationId: string) => {
    firebase.notifications().cancelNotification(notificationId);
};
