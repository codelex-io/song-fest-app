import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItemSeparator } from '../../components';
import { Card } from './Card';
import { Event } from './types';

interface EventListViewProps {
    events: Event[];
}

const EventListView: React.FC<EventListViewProps> = ({ events }) => {
    return (
        <FlatList<Event>
            data={events}
            renderItem={({ item }): React.ReactElement => (
                <View style={{ paddingHorizontal: 16 }}>
                    <Card event={item} />
                </View>
            )}
            ItemSeparatorComponent={() => (
                <View style={{ padding: 16 }}>
                    <ListItemSeparator />
                </View>
            )}
        />
    );
};

export default EventListView;
