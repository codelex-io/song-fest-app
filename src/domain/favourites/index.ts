import { errors } from '@utils';
import { Favourite, GroupOfFavourites } from './types';
import { useFavourites, FavouritesContextProvider } from './context';
import { fetchFavourites, storeFavourites } from './storage';
import { toast } from '../../toast';
import translations from '@localization/translations';
import { addNotification, removeNotification } from './notifications';

let groups: GroupOfFavourites[] = [];

export const initFavourites = async () => {
    groups = await fetchFavourites();
};

export const addFavourite = async (fav: Favourite) => {
    let group = groups.find(it => it.key === fav.group);
    if (!group) {
        group = { key: fav.group, items: [] };
        groups.push(group);
    }
    if (group.items.find(it => it.id === fav.id)) {
        return;
    }
    group.items.push(fav);
    try {
        await addNotification(fav);
        await storeFavourites(groups);
    } catch (e) {
        errors.onError(e);
    }
    toast(translations.getString('ADDED_TO_FAVOURITES'));
};

export const getFavourites = (): GroupOfFavourites[] => {
    return groups;
};

export const removeFavourite = async (fav: Favourite) => {
    const group = groups.find(it => it.key === fav.group);
    if (!group) {
        return;
    }
    const index = group.items.findIndex(it => it.id === fav.id);
    group.items.splice(index, 1);
    if (group.items.length === 0) {
        groups.splice(groups.indexOf(group), 1);
    }
    try {
        await removeNotification(fav);
        await storeFavourites(groups);
    } catch (e) {
        errors.onError(e);
    }
};

export const isFavourite = (fav: Favourite): boolean => {
    const group = groups.find(it => it.key === fav.group);
    if (!group) {
        return false;
    }
    return group.items.find(it => it.id === fav.id) !== undefined;
};

export const toggleFavourite = (fav: Favourite) => {
    if (isFavourite(fav)) {
        removeFavourite(fav);
        return;
    }
    addFavourite(fav);
};

export const clear = () => (groups = []);

export const hasAnyItems = () => {
    if (groups.length === 0) {
        return false;
    }
    return true;
};

export { useFavourites, FavouritesContextProvider };
