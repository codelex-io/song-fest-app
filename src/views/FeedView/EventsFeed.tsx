import React, { useState, useEffect, useContext } from 'react';
import { SearchInterface } from '@components/headers/SearchHeader';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { Data, Variables, EventsItem } from './graphql/types';
import { useFavourites } from '@domain/favourites';
import { LocalizationContext } from '@localization/LocalizationContext';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import { Item } from './types';
import Component from './component';
import share from '@integration/share';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { toFavourite } from '@domain/events';
import { EventsStackNavProps } from '@navigation/stacks/EventsStack';

const EventsFeed: React.FC<EventsStackNavProps<'Feed'>> = ({ route, navigation }) => {
    const { searchPayload } = route.params;
    const tabNavigation = useNavigation();

    const [searchState, setSearchState] = useState<SearchInterface>(searchPayload);

    const query = FETCH_EVENT_ITEMS;

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

    const items = loading || !data ? [] : mapItems({ data, isFavourite, group: 'EVENTS' });

    const goToArticle = (item: Item) => {
        tabNavigation.navigate('Article', {
            itemId: item.id,
            group: 'EVENTS',
            hasHistory: true,
        });
    };

    const onFavorite = (item: Item) => {
        toggleFavourite(
            toFavourite({
                id: item.id,
                title: item.title,
                date: item.date,
                time: item.timeLabel ? item.timeLabel : '',
            }),
        );
    };

    const goToMap = (item: Item) => {
        tabNavigation.navigate('MAP', {
            screen: 'Feed',
            params: {
                item: item.id,
                searchPayload: {
                    payload: '',
                    isActive: false,
                },
            },
        });
    };

    const refresh = () => {
        refetch({ ...variables, searchBy: '' });
        setSearchState({ payload: '', isActive: false });
    };

    const goToUserSettings = () => {
        tabNavigation.navigate('UserSettings');
    };
    const goToFavorites = () => {
        tabNavigation.navigate('Favorites');
    };
    const onPressSearch = (color: string) => {
        navigation.navigate('Search', { color });
    };
    const onResetSearch = () => {
        setSearchState({
            payload: '',
            isActive: false,
        });
    };

    const headerTitle = translations.getString('EVENTS');

    return (
        <Component
            {...{
                items,
                headerTitle,
                goToUserSettings,
                goToFavorites,
                onPressSearch,
                searchState,
                onResetSearch,
                goToArticle,
                onFavorite,
                onShare: item => share(item.link),
                refresh,
                goToMap,
            }}
            loading={loading || !data}
            routeName="EVENTS"
        />
    );
};

export default EventsFeed;

interface MapItemsInterface {
    data: Data;
    isFavourite: (fav: Favourite) => boolean;
    group: FavouriteGroupKey;
}

const mapItems = ({ data, isFavourite, group }: MapItemsInterface): Item[] => {
    const items = data.items as EventsItem[];
    return items.map((item: EventsItem) => ({
        id: item.id,
        group,
        title: item.title,
        secondaryTitle: item.locationTitle,
        dateLabel: item.date,
        timeLabel: item.time,
        image: item.image,
        link: item.link,
        location: item.location,
        isFavourite: isFavourite({ id: item.id, title: item.title, group }),
        date: moment(item.date),
    }));
};
