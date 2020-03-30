import { Moment } from 'moment';
import { BottomTabRoutes } from '@navigation/BottomTabs';

export interface Item {
    id: string;
    group: BottomTabRoutes;
    dateBeforeTitle?: Moment;
    title: string;
    secondaryTitle?: string;
    dateLabel?: Moment;
    timeLabel?: string;
    image?: {
        url: string;
    };
    isFavourite: boolean;
    link: string;
    location?: {
        latitude: string;
        longitude: string;
    };
    date: Moment;
}
