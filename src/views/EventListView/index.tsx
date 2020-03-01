import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import EventListComponent from './component/index';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { Data, EventItem as GraphQLEventItem } from './graphql/types';
import { EventItem } from './types';
import { Favourite } from '@domain/favourites/types';
import { View, StyleSheet } from 'react-native';
import { useFavourites } from '@domain/favourites';
import { openMap } from '@domain/maps';
import { colors } from '@styles';
import { TimeSelector, filterByDate } from '@domain';
import { Loading, TimeFilterButton, LongSearch } from '@components';

const { loading, data } = useQuery<Data>(FETCH_EVENT_ITEMS);
const { toggleFavourite, isFavourite } = useFavourites();
const [activeTime, setActiveTime] = useState<TimeSelector>('all');
const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));
const now = moment();

const toItem = (item: GraphQLEventItem, isFavourite: (fav: Favourite) => boolean): EventItem => {
    return {
        ...item,
        date: moment(item.date),
        isFavourite: isFavourite({ id: item.id, title: item.title, group: 'EVENTS' }),
    };
};

interface Props {
    activeKey: TimeSelector;
    onPress: (key: TimeSelector) => void;
}


const TopOfView: React.FC<Props> = ({ activeKey, onPress }) => {
    return <View style={{ flex: 1 }} >
        <LongSearch backgroundColor={colors.blue} />
        <View style={styles.searchContainerButton}>
            <TimeFilterButton title="šodien" active={activeKey === 'today'} onPress={() => onPress('today')} />
            <TimeFilterButton title="rīt" active={activeKey === 'tomorrow'} onPress={() => onPress('tomorrow')} />
            <TimeFilterButton
                title="šonedēļ"
                active={activeKey === 'this-week'}
                onPress={() => onPress('this-week')}
            />
            <TimeFilterButton title="cits" active={activeKey === 'all'} onPress={() => onPress('all')} />
        </View>
    </View>
}

const EventListView: React.FC = () => {
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
                <TopOfView activeKey={activeTime} onPress={it => setActiveTime(it)} />
                <Loading />
            </View>
        );
    }
    return (
        <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <EventListComponent
                loading={loading}
                items={filterByDate(now, items, activeTime)}
                onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'EVENTS' })}
                onNavigate={item => openMap(item.location.latitude, item.location.longitude)}
                activeKey={activeTime}
                onPress={it => setActiveTime(it)}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    searchContainerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
});



export default EventListView;
