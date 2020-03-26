import { Event } from '@domain/events/types';

export interface Data {
    items: EventItem[];
}

export interface Variables {
    searchBy: string;
}

export interface EventItem extends Event {
    type?: string;
    date: string;
    time: string;
    locationTitle: string;
    eventType?: string;
    location: {
        latitude: number;
        longitude: number;
    };
}
