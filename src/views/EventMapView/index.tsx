import React, { useState } from 'react';
import { EventItem } from './types';
import { default as EventMapViewComponent } from './component';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { Data, EventItem as GraphQLEventItem } from './graphql/types';
import { Favourite } from '@domain/favourites/types';
import { useFavourites, FavouritesContextProvider } from '@domain/favourites';
import { openMap } from '@domain/maps';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean, isSelected: boolean): EventItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }), isSelected };
};

const EventMapView: React.FC = () => {
    const { loading, data } = useQuery<Data>(FETCH_EVENT_ITEMS);
    const { toggleFavourite, isFavourite } = useFavourites();
    const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);
    return (
        <EventMapViewComponent
            loading={loading}
            items={
                loading || !data
                    ? []
                    : data.items.map(it =>
                          toItem(it, isFavourite, selectedItemId !== undefined && selectedItemId === it.id),
                      )
            }
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onSelectEvent={item => setSelectedItemId(item.id)}
        />
    );
};

export default () => (
    <FavouritesContextProvider>
        <EventMapView />
    </FavouritesContextProvider>
);
