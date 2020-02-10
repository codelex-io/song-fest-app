import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { default as EventListViewComponent } from './component/index';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { Data, EventItem as GraphQLEventItem } from './graphql/types';
import { EventItem } from './types';
import { Favourite } from '@domain/favourites/types';
import { View } from 'react-native';
import { Header } from '@components';
import { useFavourites, FavouritesContextProvider } from '@domain/favourites';
import { LocalizationContext } from '../../localization/LocalizationContext';
import openMap from 'react-native-open-maps';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }) };
};

const EventListView: React.FC = () => {
    const { loading, data } = useQuery<Data>(FETCH_EVENT_ITEMS);
    const { toggleFavourite, isFavourite } = useFavourites();
    const { translations, appLanguage } = useContext(LocalizationContext);
    translations.setLanguage(appLanguage);
    return (
        <View>
            <Header title={translations.getString('EVENTS')} />
            <EventListViewComponent
                loading={loading}
                items={loading || !data ? [] : data.items.map(it => toItem(it, isFavourite))}
                onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
                onNavigate={item =>
                    openMap({ latitude: item.location.latitude, longitude: item.location.longitude, zoom: 20 })
                }
            />
        </View>
    );
};

export default () => (
    <FavouritesContextProvider>
        <EventListView />
    </FavouritesContextProvider>
);
