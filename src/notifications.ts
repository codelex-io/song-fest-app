import AsyncStorage from "@react-native-community/async-storage";
import firebase from 'react-native-firebase';
//...
const getToken = async ():Promise<void> => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
}

const checkPermission = async() => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        getToken();
    } else {
        requestPermission();
    }
}

const requestPermission = async() => {
    try {
        await firebase.messaging().requestPermission();
        getToken();
    } catch (error) {
        console.log('permission rejected');
    }
}

const createNotificationListeners = async() => {
    firebase.notifications().onNotification(notification => {
        notification.android.setChannelId('insider').setSound('default')
        firebase.notifications().displayNotification(notification)
    });
}

export const init = async() => {
    const channel = new firebase.notifications.Android.Channel('insider', 'insider channel', firebase.notifications.Android.Importance.Max)
    await firebase.notifications().android.createChannel(channel);
    await checkPermission();
    await createNotificationListeners();
}