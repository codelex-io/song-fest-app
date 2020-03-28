import { FeedRootName } from '@navigation/stacks/SharedStack';

export interface Item {
    id: string;
    group: FeedRootName;
    dateBeforeTitle?: string;
    title: string;
    secondaryTitle?: string;
    dateLabel?: string;
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
}
