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
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type StackParamList = {
    SearchGroup: { payload: string };
};

type SearchResultsRoute = RouteProp<StackParamList, 'SearchGroup'>;

const EventListView: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<SearchResultsRoute>();

    const [currentSearch, setCurrentSearch] = useState<string>('');

    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_EVENT_ITEMS, {
        variables: { SearchBy: currentSearch },
    });

    const { toggleFavourite, isFavourite } = useFavourites();

    const [activeTime, setActiveTime] = useState<TimeSelector>('all');

    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));

    const now = moment();

    useEffect(() => {
        if (route.params) {
            setCurrentSearch(route.params.payload);
        }
        refetch();
    }, [route]);

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
        <View style={{ backgroundColor: colors.white }}>
            <EventListComponent
                loading={loading}
                items={filterByDate(now, items, activeTime)}
                onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
                onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
                activeKey={activeTime}
                onPress={it => handleFilterToggle(it)}
                onSearch={() => navigation.navigate('Search', { group: 'EVENTS' })}
                searchInput={currentSearch}
                onResetSearch={() => {
                    setCurrentSearch('');
                    refetch();
                }}
            />
        </View>
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
