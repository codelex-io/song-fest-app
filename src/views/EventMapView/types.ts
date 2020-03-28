import { Event } from '@domain/events/types';

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
    currentItem?: number;
    totalItems?: number;
    isFavourite: boolean;
    link: string;
}
