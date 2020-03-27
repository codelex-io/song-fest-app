import { Favourite, FavouriteEvent } from '@domain/favourites/types';
import moment, { Moment } from 'moment';
import { Event } from './types';
import { DEFAULT_DATE_FORMAT } from '@utils/date-time-utils';

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
    let date = event.date;
    if (!(date instanceof String)) {
        date = (date as Moment).format(DEFAULT_DATE_FORMAT);
    }
    return {
        id: event.id,
        title: event.title,
        group: 'EVENTS',
        notification: toNotification(event),
        date,
        time: event.time,
    } as FavouriteEvent;
};
