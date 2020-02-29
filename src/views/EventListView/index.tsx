import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import EventListComponent from './component/index';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { Data, EventItem as GraphQLEventItem } from './graphql/types';
import { EventItem } from './types';
import { Favourite } from '@domain/favourites/types';
import { View } from 'react-native';
import { useFavourites } from '@domain/favourites';
import { openMap } from '@domain/maps';
import { colors } from '@styles';
import { TimeSelector, filterByDate } from '@domain';
import { useNavigation } from '@react-navigation/native';

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return {
        ...item,
        date: moment(item.date),
        isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }),
    };
};

const EventListView: React.FC = () => {
    const { loading, data } = useQuery<Data>(FETCH_EVENT_ITEMS);
    const { toggleFavourite, isFavourite } = useFavourites();
    const [activeTime, setActiveTime] = useState<TimeSelector>('all');
    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));
    const now = moment();
    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: colors.white }}>
            <EventListComponent
                loading={loading}
                items={filterByDate(now, items, activeTime)}
                onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
                onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
                onReadMore={item => navigation.navigate('Article', { itemId: item.id, group: 'EVENTS' })}
                activeKey={activeTime}
                onPress={it => setActiveTime(it)}
            />
        </View>
    );
};

export default EventListView;
