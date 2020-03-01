import React from 'react';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { TimeSelector } from '@domain';
import { Card } from './Card';
import { EventItem } from '../types';
import { /**LongSearch, TimeFilterButton,*/ Empty } from '@components';



const Separator = () => <View style={{ padding: 8 }} />;

interface Props {
    loading: boolean;
    items: EventItem[];
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
    activeKey: TimeSelector;
    onPress: (key: TimeSelector) => void;
}

const EventListComponent: React.FC<Props> = ({ loading, items, onFavourite, onNavigate /** , activeKey, onPress */ }) => {
    if (items.length === 0) {
        return <View style={{ flex: 1 }} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Empty /></View>
        </View>
    }
    return <View style={{ flex: 1 }} >
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
    </View>
};


export default EventListComponent;


