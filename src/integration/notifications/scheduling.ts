import { Platform } from 'react-native';
import firebase from 'react-native-firebase';
import { Moment } from 'moment';
import _ from 'lodash';
import { ANDROID_CHANNEL } from './constants';

interface Notification {
    title: string;
    body: string;
    fireDate: Moment;
}

export const scheduleNotification = (source: Notification): string => {
    const notificationId = _.uniqueId();
    const title = Platform.OS === 'android' ? source.title : '';
    const notification = new firebase.notifications.Notification()
        .setNotificationId(notificationId)
        .setTitle(title)
        .setBody(source.body)
        .android.setPriority(firebase.notifications.Android.Priority.High)
        .android.setChannelId(ANDROID_CHANNEL)
        .android.setAutoCancel(true);
    const schedule = {
        fireDate: source.fireDate.unix(),
        exact: true,
    };
    firebase.notifications().scheduleNotification(notification, schedule);
    return notificationId;
};

export const cancelNotification = (notificationId: string) => {
    firebase.notifications().cancelNotification(notificationId);
};
