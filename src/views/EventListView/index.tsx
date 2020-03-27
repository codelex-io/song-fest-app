import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import EventListComponent from './component/index';
import { FETCH_EVENT_ITEMS, FETCH_EVENT_BY_ID } from './graphql/queries';
import { Data, EventItem as GraphQLEventItem, Variables, SingleIdVariables } from './graphql/types';
import { EventItem } from './types';
import { Favourite } from '@domain/favourites/types';
import { useFavourites } from '@domain/favourites';
import { openMap } from '@domain/maps';
import { TimeSelector, filterByDate } from '@domain';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import { open } from '@domain/share';
import { SearchInterface } from '@components/headers/SearchHeader';
import { toFavourite } from '@domain/events';

const EventListView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {

    const initialItemId = 'xxx'
    const [currentSearch, setCurrentSearch] = useState<SearchInterface>({ payload: '', isActive: false });

    console.log('initial item ID in EVENTS', initialItemId)

    const variables: Variables = { searchBy: currentSearch.payload, }
    const singleIdVariables: SingleIdVariables = { id: initialItemId }
    const query = initialItemId ? FETCH_EVENT_BY_ID : FETCH_EVENT_ITEMS

    const { loading, data, refetch } = useQuery<Data, Variables | SingleIdVariables>(
        query,
        {
            variables: initialItemId ? singleIdVariables : variables
        });

    const { toggleFavourite, isFavourite } = useFavourites();
    const [activeTime, setActiveTime] = useState<TimeSelector>('all');
    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));
    const now = moment();

    useEffect(() => {
        if (route.params) {
            setCurrentSearch({ payload: route.params.payload, isActive: true });
        }
    }, [route]);

    useEffect(() => {
        refetch();
    }, [currentSearch.payload]);

    return (
        <EventListComponent
            onRefresh={() => refetch()}
            refreshing={() => !loading}
            loading={loading}
            items={filterByDate(now, items, activeTime)}
            onFavourite={item => toggleFavourite(toFavourite(item))}
            onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
            onReadMore={item => navigation.navigate('Article', { itemId: item.id, group: 'EVENTS' })}
            activeKey={activeTime}
            onPress={key => setActiveTime(key as TimeSelector)}
            onSearch={color => navigation.navigate('Search', { color: color })}
            searchInput={currentSearch}
            onResetSearch={() => {
                setCurrentSearch({
                    payload: '',
                    isActive: false,
                });
                refetch();
            }}
            onShare={item => open(item.link)}
            navigation={navigation}
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
