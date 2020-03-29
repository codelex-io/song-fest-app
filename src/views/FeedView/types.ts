import { FeedRootName } from '@navigation/stacks/SharedStack';
import { Moment } from 'moment';

export interface Item {
    id: string;
    group: FeedRootName;
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
