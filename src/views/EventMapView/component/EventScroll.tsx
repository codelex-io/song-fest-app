import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { EventCard } from './EventCard';
import { EventItem } from '../types';
import { colors } from '@styles';

interface Props {
    items: EventItem[];
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
}

export const EventScroll: React.FC<Props> = ({ items, onFavourite, onNavigate }) => {
    return (
        <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            scrollEnabled={true}
            contentContainerStyle={styles.container}
        >
            {items.map((item, index) => (
                <EventCard
                    key={item.id}
                    backgroundColor={colors.findColorByIndex(index)}
                    item={item}
                    itemIndex={index + 1}
                    totalItems={items.length}
                    onFavourite={() => onFavourite(item)}
                    onNavigate={() => onNavigate(item)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 8,
        paddingVertical: 12,
        paddingLeft: 16,
    },
});
