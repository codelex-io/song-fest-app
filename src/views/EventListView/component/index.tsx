import React from 'react';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { EventItem } from '../types';

const Separator = () => <View style={{ padding: 8 }} />;

interface Props {
    loading: boolean;
    items: EventItem[];
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
}

const EventListView: React.FC<Props> = ({ items, onFavourite, onNavigate }) => (
    <FlatList<EventItem>
        data={items}
        renderItem={({ item, index }): React.ReactElement => (
            <View style={{ paddingHorizontal: 16 }}>
                <Card
                    item={item}
                    backgroundColor={colors.findColorByIndex(index)}
                    onFavourite={() => onFavourite(item)}
                    onNavigate={() => onNavigate(item)}
                />
            </View>
        )}
        ItemSeparatorComponent={() => <Separator />}
    />
);

export default EventListView;
