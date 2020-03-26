import { Event } from '@domain/events/types';

export interface Data<T> {
    item: T;
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    image?: {
        url: string;
    };
    content: string;
    link: string;
}

export interface EventItem extends Event {
    time: string;
    date: string;
    image?: {
        url: string;
    };
    locationTitle: string;
    location: {
        latitude: number;
        longitude: number;
    };
    content: string;
    link: string;
}

export interface Variables {
    id: string;
}
