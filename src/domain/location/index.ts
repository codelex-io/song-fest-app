import Geolocation from 'react-native-geolocation-service';
import { Coordinates } from './types';

export const getCurrentPosition = (onError: (message: string) => void): Promise<Coordinates> => {
    return new Promise<Coordinates>(resolve => {
        Geolocation.getCurrentPosition(
            position => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            error => onError(error.message),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    });
};
