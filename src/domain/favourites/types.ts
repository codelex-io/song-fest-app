import { Moment } from 'moment';

export type FavouriteGroupKey = 'NEWS' | 'EVENTS' | 'VIDEO';

export interface Favourite {
    id: string;
    group: FavouriteGroupKey;
    title: string;
    notification?: {
        id?: string;
        fireDate?: Moment;
        title?: string;
    };
}

export interface FavouriteEvent extends Favourite {
    date: string;
    time: string;
}

export interface GroupOfFavourites {
    key: FavouriteGroupKey;
    items: Favourite[];
}
