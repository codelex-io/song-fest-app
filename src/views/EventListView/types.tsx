import { Moment } from 'moment';
import { Event } from '@domain/events/types';

export interface EventItem extends Event {
    date: Moment;
    time: string;
    image?: {
        url: string;
    };
    locationTitle: string;
    isFavourite: boolean;
    location: {
        latitude: number;
        longitude: number;
    };
    link: string;
}
