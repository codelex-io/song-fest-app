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
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import { colors } from '@styles';
import Loading from '@components/Loading';
import { SearchInterface } from '@components/headers/SearchHeader';
import { toFavourite } from '@domain/events';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return {
        ...item,
        isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }),
    };
};

const EventMapView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    const [currentSearch, setCurrentSearch] = useState<SearchInterface>({
        payload: '',
        isActive: false,
    });

    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_EVENT_ITEMS, {
        variables: { searchBy: currentSearch.payload },
    });

    const { toggleFavourite, isFavourite } = useFavourites();
    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));

    useEffect(() => {
        if (route.params) {
            setCurrentSearch({ payload: route.params.searchPayload.payload, isActive: true });
        }
    }, [route]);

    useEffect(() => {
        refetch();
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
            onSearch={(color: string) => navigation.navigate('Search', { color: color, route: 'MAP' })}
            searchInput={currentSearch}
            onResetSearch={() => {
                setCurrentSearch({ payload: '', isActive: false });
                refetch();
            }}
            navigateToArticle={(item: EventItem) => navigateToArticle(item)}
            navigation={navigation}
        />
    );
};

export default EventMapView;
