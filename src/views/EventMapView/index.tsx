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
import { SearchInterface } from '@components/headers/SearchHeader';
import moment from 'moment';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return {
        ...item,
        isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }),
        notificationTime: item.notificationTime ? moment(item.notificationTime) : undefined,
    };
};

const EventMapView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    const [currentSearch, setCurrentSearch] = useState<SearchInterface>({ payload: '', isActive: false });
    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_EVENT_ITEMS, {
        variables: { searchBy: currentSearch.payload },
    });
    const { toggleFavourite, isFavourite } = useFavourites();
    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));

    useEffect(() => {
        if (route.params) {
            setCurrentSearch({ payload: route.params.payload, isActive: true });
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

    return (
        <EventMapComponent
            loading={loading}
            items={items}
            onFavourite={item =>
                toggleFavourite({
                    id: item.id,
                    title: item.title,
                    group: 'EVENTS',
                    notificationTime: item.notificationTime,
                })
            }
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onSearch={(color: string) => navigation.navigate('Search', { color: color })}
            searchInput={currentSearch}
            onResetSearch={() => {
                setCurrentSearch({ payload: '', isActive: false });
                refetch();
            }}
            onReadMore={(item: EventItem) => navigation.navigate('Article', { itemId: item.id, group: 'EVENTS' })}
            navigation={navigation}
        />
    );
};

export default EventMapView;
