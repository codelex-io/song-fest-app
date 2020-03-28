import React, { useState, useEffect, useContext } from 'react';
import { SharedStackNavList, FeedRootName } from '@navigation/stacks/SharedStack';
import { SearchInterface } from '@components/headers/SearchHeader';
import { FETCH_NEWS_ITEMS, FETCH_EVENT_ITEMS } from './graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { Data, NewsItem, Variables, EventsItem } from './graphql/types';
import { useFavourites } from '@domain/favourites';
import { LocalizationContext } from '@localization/LocalizationContext';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import { Item } from './types';
import Component from './component';
import { open } from '@domain/share';
import { useNavigation } from '@react-navigation/native';

const FeedView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    const { searchPayload, rootName } = route.params;

    const [searchState, setSearchState] = useState<SearchInterface>(searchPayload);

    let query = FETCH_NEWS_ITEMS;
    if (rootName === 'EVENTS') {
        query = FETCH_EVENT_ITEMS;
    }

    const variables = { searchBy: searchState.payload };

    const { loading, data, refetch } = useQuery<Data, Variables>(query, { variables });

    useEffect(() => {
        setSearchState({ ...searchPayload });
    }, [searchPayload]);

    useEffect(() => {
        refetch();
    }, [searchState]);

    const { toggleFavourite, isFavourite } = useFavourites();

    const { translations } = useContext(LocalizationContext);

    const items = loading || !data ? [] : mapItems({ data, isFavourite, rootName });

    const goToArticle = (item: Item) => {
        navigation.navigate('Article', {
            itemId: item.id,
            group: rootName,
            hasHistory: true,
        });
    };

    const onFavorite = (item: Item) => {
        let favGroup: FavouriteGroupKey = rootName as FavouriteGroupKey;
        if (rootName === 'MAP') {
            favGroup = 'EVENTS';
        }
        toggleFavourite({ id: item.id, title: item.title, group: favGroup });
    };

    const onShare = (item: Item) => {
        open(item.link);
    };

    const rootNavigation = useNavigation();
    const goToMap = (item: Item) => {
        rootNavigation.navigate('MAP', { item });
    };

    const refresh = () => {
        refetch({ ...variables, searchBy: '' });
        setSearchState({ payload: '', isActive: false });
    };

    const goToUserSettings = () => {
        navigation.navigate('UserSettings');
    };
    const goToFavorites = () => {
        navigation.navigate('Favorites');
    };
    const onPressSearch = (color: string) => {
        navigation.navigate('Search', { color, route: rootName });
    };
    const onResetSearch = () => {
        setSearchState({
            payload: '',
            isActive: false,
        });
    };

    const headerTitle = translations.getString(rootName);

    return (
        <Component
            {...{
                rootName,
                items,
                headerTitle,
                goToUserSettings,
                goToFavorites,
                onPressSearch,
                searchState,
                onResetSearch,
                goToArticle,
                onFavorite,
                onShare,
                refresh,
                goToMap,
            }}
            loading={loading || !data}
        />
    );
};

export default FeedView;

interface MapItemsInterface {
    data: Data;
    isFavourite: (fav: Favourite) => boolean;
    rootName: FeedRootName;
}

const mapItems = ({ data, isFavourite, rootName }: MapItemsInterface): Item[] => {
    let favGroup: FavouriteGroupKey = rootName as FavouriteGroupKey;
    if (rootName === 'MAP') {
        favGroup = 'EVENTS';
    }
    if (rootName === 'NEWS') {
        const items = data.items as NewsItem[];
        return items.map((item: NewsItem) => ({
            id: item.id,
            group: rootName,
            dateBeforeTitle: item.date,
            title: item.title,
            image: item.image,
            link: item.link,
            isFavourite: isFavourite({ id: item.id, title: item.title, group: favGroup }),
        }));
    } else if (rootName === 'EVENTS' || rootName === 'MAP') {
        const items = data.items as EventsItem[];
        return items.map((item: EventsItem) => ({
            id: item.id,
            group: rootName,
            title: item.title,
            secondaryTitle: item.locationTitle,
            dateLabel: item.date,
            timeLabel: item.time,
            image: item.image,
            link: item.link,
            location: item.location,
            isFavourite: isFavourite({ id: item.id, title: item.title, group: favGroup }),
        }));
    }
    return [];
};
