import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { EventItem } from './types';
import EventMapComponent from './component';
import { Data, Variables, EventItem as GraphQLEventItem } from './graphql/types';
import { Favourite } from '@domain/favourites/types';
import { useFavourites } from '@domain/favourites';
import { openMap } from '@domain/maps';
import { colors } from '@styles';
import Loading from '@components/Loading';
import { SearchInterface } from '@components/headers/SearchHeader';
import { toFavourite } from '@domain/events';
import { MapStackNavProps } from '@navigation/stacks/MapStack';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return {
        ...item,
        isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }),
    };
};

const EventMapView: React.FC<MapStackNavProps<'Feed'>> = ({ route, navigation }) => {
    let initialItem = route.params ? route.params.item : undefined;

    const [currentSearch, setCurrentSearch] = useState<SearchInterface>({
        payload: '',
        isActive: false,
    });

    const [variables, setVariables] = useState({ searchBy: currentSearch.payload });

    const { toggleFavourite, isFavourite } = useFavourites();

    useEffect(() => {
        if (route.params) {
            const { payload, isActive } = route.params.searchPayload;
            if (initialItem) {
                setVariables({ searchBy: initialItem });
                setCurrentSearch({ payload: initialItem, isActive: false });
            }
            if (payload) {
                setCurrentSearch({ payload, isActive });
                setVariables({ searchBy: payload });
            }
        }
    }, [route]);

    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_EVENT_ITEMS, {
        variables,
    });
    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));

    useEffect(() => {
        if (initialItem && data && !currentSearch.isActive) {
            if (items.length > 0) {
                setCurrentSearch({ payload: items[0].locationTitle, isActive: false });
            }
        }
    }, [loading, data]);

    useEffect(() => {
        if (currentSearch.isActive) {
            refetch();
        }
    }, [currentSearch]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
                <Loading />
            </View>
        );
    }

    const navigateToArticle = (item: EventItem) => {
        navigation.navigate('Article', {
            itemId: item.id,
            group: 'EVENTS',
            hasHistory: true,
        });
    };

    return (
        <EventMapComponent
            loading={loading}
            items={items}
            onFavourite={item => toggleFavourite(toFavourite(item))}
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onSearch={(color: string) => {
                initialItem = undefined;
                navigation.navigate('Search', {
                    color: color,
                    route: 'MAP',
                });
            }}
            searchInput={currentSearch}
            onResetSearch={() => {
                setCurrentSearch({ payload: '', isActive: false });
                setVariables({ searchBy: '' });
                initialItem = undefined;
                refetch();
            }}
            navigateToArticle={(item: EventItem) => navigateToArticle(item)}
            navigation={navigation}
        />
    );
};

export default EventMapView;
