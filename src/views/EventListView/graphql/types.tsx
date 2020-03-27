import { Event } from '@domain/events/types';

export interface Data {
    items: EventItem[];
}

export interface Variables {
    searchBy: string;
}

export interface EventItem extends Event {
    date: string;
    time: string;
    image?: {
        url: string;
    };
    locationTitle: string;
    location: {
        latitude: number;
        longitude: number;
    };
    link: string;
}
