type FavouriteGroupKey = 'NEWS' | 'EVENTS' | 'VIDEO';

export interface Favourite {
    id: string;
    group: FavouriteGroupKey;
    title: string;
}

export interface GroupOfFavourites {
    key: FavouriteGroupKey;
    items: Favourite[];
}
