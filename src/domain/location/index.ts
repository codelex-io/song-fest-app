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

export const getCurrentPosition = (msg: ErrorMessage): Promise<Coordinates> => {
    return new Promise<Coordinates>(resolve => {
        Geolocation.getCurrentPosition(
            position => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            () => {
                if (Platform.OS === 'android') {
                    PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION').catch(e => {
                        // eslint-disable-next-line no-console
                        console.error(e);
                        onError(msg);
                    });
                }
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    });
};
