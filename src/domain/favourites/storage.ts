import AsyncStorage from '@react-native-community/async-storage';
import { GroupOfFavourites, FavouriteGroupKey, Favourite, FavouriteEvent } from './types';

const key = 'favourites';

interface StoredFavourite {
    id: string;
    group: FavouriteGroupKey;
    title: string;
    notificationId?: string;
    eventDetails?: {
        date: string;
        time: string;
    };
}

interface StoredGroupOfFavourites {
    key: FavouriteGroupKey;
    items: StoredFavourite[];
}

const toItem = (source: Favourite): StoredFavourite => {
    const item: StoredFavourite = {
        id: source.id,
        group: source.group,
        title: source.title,
        notificationId: source.notification?.id,
    };
    if (source.group === 'EVENTS') {
        item.eventDetails = {
            date: (source as FavouriteEvent).date,
            time: (source as FavouriteEvent).time,
        };
    }
    return item;
};

const toStorage = (source: GroupOfFavourites): StoredGroupOfFavourites => {
    return {
        key: source.key,
        items: source.items.map(toItem),
    };
};

const fromItem = (source: StoredFavourite): Favourite => {
    const item: Favourite = {
        id: source.id,
        group: source.group,
        title: source.title,
    };
    if (source.notificationId) {
        item.notification = { id: source.notificationId };
    }
    if (source.group === 'EVENTS') {
        const eventItem = item as FavouriteEvent;
        if (source.eventDetails) {
            eventItem.date = source.eventDetails.date;
            eventItem.time = source.eventDetails.time;
        }
        return eventItem;
    }
    return item;
};

const fromStorage = (source: StoredGroupOfFavourites): GroupOfFavourites => {
    return {
        key: source.key,
        items: source.items.map(fromItem),
    };
};

export const fetchFavourites = async (): Promise<GroupOfFavourites[]> => {
    const json = await AsyncStorage.getItem(key);
    if (!json) {
        return [];
    }
    return (JSON.parse(json) as StoredGroupOfFavourites[]).map(fromStorage);
};

export const storeFavourites = async (favs: GroupOfFavourites[]) => {
    AsyncStorage.setItem(key, JSON.stringify(favs.map(toStorage)));
};
