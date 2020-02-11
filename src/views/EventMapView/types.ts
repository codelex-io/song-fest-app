import { LatLng } from 'react-native-maps';

export interface EventItem {
    id?: string;
    title: string;
    type?: string;
    location: string;
    eventType?: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    coordinates: LatLng;
    currentItem?: number;
    totalItems?: number;
    isSelected: boolean;
}
