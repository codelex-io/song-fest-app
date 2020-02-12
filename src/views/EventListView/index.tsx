import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { default as EventListViewComponent } from './component/index';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { Data, EventItem as GraphQLEventItem } from './graphql/types';
import { EventItem } from './types';
import { Favourite } from '@domain/favourites/types';
import { View } from 'react-native';
import { useFavourites, FavouritesContextProvider } from '@domain/favourites';
import { openMap } from '@domain/maps';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }) };
};

const EventListView: React.FC = () => {
    const { loading, data } = useQuery<Data>(FETCH_EVENT_ITEMS);
    const { toggleFavourite, isFavourite } = useFavourites();
    return (
        <View>
            <EventListViewComponent
                loading={loading}
                items={loading || !data ? [] : data.items.map(it => toItem(it, isFavourite))}
                onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
                onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            />
        </View>
    );
};

export default () => (
    <FavouritesContextProvider>
        <EventListView />
    </FavouritesContextProvider>
);
