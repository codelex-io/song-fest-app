import React from 'react';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { Event } from './types';

const Separator = () => <View style={{ padding: 8 }} />;

interface EventListViewProps {
    events: Event[];
}

const EventListView: React.FC<EventListViewProps> = ({ events }) => {
    return (
        <FlatList<Event>
            data={events}
            renderItem={({ item, index }): React.ReactElement => (
                <View style={{ paddingHorizontal: 16 }}>
                    <Card event={item} backgroundColor={colors.findColorByIndex(index)} onPress={() => null} />
                </View>
            )}
            ItemSeparatorComponent={() => <Separator />}
        />
    );
};

export default EventListView;
