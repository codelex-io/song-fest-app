export interface FavoriteItem {
    id: string;
    title: string;
}

export interface FavouriteGroup {
    title: string;
    items: FavoriteItem[];
}
