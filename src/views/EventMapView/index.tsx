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
    const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);

    const [items, setItems] = useState<EventItem[]>([]);

    const [initialCoordinates, setInitialCoordinates] = useState({
        latitude: 56.951637,
        longitude: 24.113347,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    });

    useEffect(() => {
        if (!loading && data?.items.length) {
            const mapped = data.items.map(it => toItem(it, isFavourite));
            setItems([...mapped]);
            setInitialCoordinates({
                ...initialCoordinates,
                latitude: mapped[0].location.latitude,
                longitude: mapped[0].location.longitude,
            });
            setSelectedItemId(mapped[0].id);
        } else if (!loading && !data) {
            setCurrentSearch('');
        }
    }, [loading, data]);

    useEffect(() => {
        if (route.params) {
            setCurrentSearch(route.params.payload);
        }
    }, [route]);

    useEffect(() => {
        refetch();
    }, [currentSearch]);

    if (loading || items.length === 0) {
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
            initialCoordinates={initialCoordinates}
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
            selectedItemId={selectedItemId ? selectedItemId : items[0].id}
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onSelectEvent={item => setSelectedItemId(item.id)}
            onSearch={() => navigation.navigate('Search')}
            searchInput={currentSearch}
            onResetSearch={() => setCurrentSearch('')}
            onReadMore={(item: EventItem) => navigation.navigate('Article', { itemId: item.id, group: 'EVENTS' })}
        />
    );
};

export default EventMapView;
