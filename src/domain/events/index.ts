import { Favourite } from '@domain/favourites/types';
import moment from 'moment';
import { Event } from './types';

const toNotification = (event: Event) => {
    if (!event.notificationTime || !event.notificationTitle) {
        return;
    }
    return {
        title: event.notificationTitle,
        fireDate: moment(event.notificationTime),
    };
};

export const toFavourite = (event: Event): Favourite => {
    return {
        id: event.id,
        title: event.title,
        group: 'EVENTS',
        notification: toNotification(event),
    };
};
