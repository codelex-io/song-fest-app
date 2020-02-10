import _openMap from 'react-native-open-maps';

export const openMap = (lat: number, lon: number) => {
    _openMap({ latitude: lat, longitude: lon, zoom: 20 });
};
