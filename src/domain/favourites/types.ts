import { Moment } from 'moment';

export type FavouriteGroupKey = 'NEWS' | 'EVENTS' | 'VIDEO';

export interface Favourite {
    id: string;
    group: FavouriteGroupKey;
    title: string;
    notificationId?: string;
    notificationTime?: Moment;
}

export interface GroupOfFavourites {
    key: FavouriteGroupKey;
    items: Favourite[];
}
