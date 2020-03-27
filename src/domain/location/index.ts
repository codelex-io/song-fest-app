import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Coordinates } from './types';

type ErrorMessage = {
    title: string;
    details: string;
};

const onError = (msg: ErrorMessage) => {
    Alert.alert(msg.title, msg.details, [{ text: 'OK' }], { cancelable: false });
};

export const getCurrentPosition = (msg: ErrorMessage): Promise<Coordinates | undefined> => {
    const doGetPosition = (): Promise<Coordinates> =>
        new Promise<Coordinates>((resolve, reject) => {
            Geolocation.getCurrentPosition(
                position => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                reject,
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
            );
        });

    return doGetPosition().catch(() => {
        if (Platform.OS === 'android') {
            return PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION')
                .then(doGetPosition)
                .catch(e => {
                    // eslint-disable-next-line no-console
                    console.error(e);
                    onError(msg);
                    return undefined;
                });
        }
    });
};
