import { FeedRootName } from '@navigation/stacks/SharedStack';

export interface Item {
    id: string;
    group: FeedRootName;
    title: string;
    date: string;
    time?: string;
    image?: {
        url: string;
    };
    isFavourite: boolean;
    link: string;
}
