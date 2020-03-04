import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import EventListComponent from './component/index';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { Data, EventItem as GraphQLEventItem, Variables } from './graphql/types';
import { EventItem } from './types';
import { Favourite } from '@domain/favourites/types';
import { View } from 'react-native';
import { useFavourites } from '@domain/favourites';
import { openMap } from '@domain/maps';
import { colors } from '@styles';
import { TimeSelector, filterByDate } from '@domain';
import { Loading } from '@components';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import { open } from '@domain/share';

const EventListView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    console.log('route initial', route);
    const [currentSearch, setCurrentSearch] = useState<string>('');

    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_EVENT_ITEMS, {
        variables: { searchBy: currentSearch },
    });
    const { toggleFavourite, isFavourite } = useFavourites();

    const [activeTime, setActiveTime] = useState<TimeSelector>('all');

    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));

    const now = moment();

    useEffect(() => {
        if (route.params) {
            setCurrentSearch(route.params.payload);
        }
    }, [route]);

    useEffect(() => {
        refetch();
    }, [currentSearch]);

    const handleFilterToggle = (it: TimeSelector) => {
        setActiveTime(it);
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
                <Loading />
            </View>
        );
    }
    return (
        <EventListComponent
            onRefresh={() => refetch()}
            refreshing={() => !loading}
            loading={loading}
            items={filterByDate(now, items, activeTime)}
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onReadMore={item => navigation.navigate('Article', { itemId: item.id, group: 'EVENTS' })}
            activeKey={activeTime}
            onPress={it => handleFilterToggle(it)}
            onSearch={() => navigation.navigate('Search')}
            searchInput={currentSearch}
            onResetSearch={() => {
                setCurrentSearch('');
                refetch();
            }}
            onShare={item => open(item.link)}
        />
    );
};

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return {
        ...item,
        date: moment(item.date),
        isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }),
    };
};

export default EventListView;
