import React, { useState, useEffect } from 'react';
import { EventItem } from './types';
import EventMapComponent from './component';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { Data, Variables, EventItem as GraphQLEventItem } from './graphql/types';
import { Favourite } from '@domain/favourites/types';
import { useFavourites } from '@domain/favourites';
import { openMap } from '@domain/maps';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import { View } from 'react-native';
import { colors } from '@styles';
import Loading from '@components/Loading';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }) };
};

const EventMapView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    const [currentSearch, setCurrentSearch] = useState<string>('');
    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_EVENT_ITEMS, {
        variables: { searchBy: currentSearch },
    });
    const { toggleFavourite, isFavourite } = useFavourites();
    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));

    useEffect(() => {
        if (route.params) {
            setCurrentSearch(route.params.payload);
        }
    }, [route]);

    useEffect(() => {
        refetch();
    }, [currentSearch]);

    if (!items.length && currentSearch !== '') {
        //TODO implement 'nothing found after search'
        setCurrentSearch('');
    }

    if (loading || !items.length) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
                <Loading />
            </View>
        );
    }

    return (
        <EventMapComponent
            loading={loading}
            items={items}
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onSearch={() => navigation.navigate('Search')}
            searchInput={currentSearch}
            onResetSearch={() => {
                setCurrentSearch('');
                refetch();
            }}
            onReadMore={(item: EventItem) => navigation.navigate('Article', { itemId: item.id, group: 'EVENTS' })}
        />
    );
};

export default EventMapView;
