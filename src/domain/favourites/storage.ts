import AsyncStorage from '@react-native-community/async-storage';
import { GroupOfFavourites } from './types';

const key = 'favourites';

export const fetchFavourites = async () => {
    const json = await AsyncStorage.getItem(key);
    if (!json) {
        return [];
    }
    return JSON.parse(json) as GroupOfFavourites[];
};

export const storeFavourites = async (favs: GroupOfFavourites[]) => {
    AsyncStorage.setItem(key, JSON.stringify(favs));
};
