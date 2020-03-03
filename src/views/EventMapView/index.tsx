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

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean, isSelected: boolean): EventItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }), isSelected };
};

const EventMapView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {

    const [currentSearch, setCurrentSearch] = useState<string>('');

    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_EVENT_ITEMS, {
        variables: { searchBy: currentSearch },
    });

    const { toggleFavourite, isFavourite } = useFavourites();
    const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);
    const isSelected = (item: GraphQLEventItem) => {
        return selectedItemId !== undefined && selectedItemId === item.id;
    };
    const items: EventItem[] = [];
    if (!loading && data) {
        const mapped = data.items.map(it => toItem(it, isFavourite, isSelected(it)));
        items.push(...mapped);
    }

    useEffect(() => {
        if (route.params) {
            setCurrentSearch(route.params.payload);
        }
    }, [route]);

    useEffect(() => {
        refetch();
    }, [currentSearch]);

    return (
        <EventMapComponent
            loading={loading}
            items={items}
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onSelectEvent={item => setSelectedItemId(item.id)}
            onSearch={() => navigation.navigate('Search')}
            searchInput={currentSearch}
            onResetSearch={() => {
                setCurrentSearch('');
                refetch();
            }}
        />
    );
};

export default EventMapView;
