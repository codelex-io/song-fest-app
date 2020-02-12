import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { EventCard } from './EventCard';
import { EventItem } from '../types';

interface Props {
    events: EventItem[];
}

export const EventScroll: React.FC<Props> = ({ events }) => (
    <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        scrollEnabled={true}
        contentContainerStyle={styles.container}
    >
        {events.map((item, index) => (
            <EventCard
                key={item.id}
                title={item.title}
                location={item.location}
                date={item.date}
                timeStart={item.timeStart}
                timeEnd={item.timeEnd}
                coordinates={item.coordinates}
                currentItem={index + 1}
                totalItems={events.length}
            />
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        zIndex: 8,
        paddingBottom: 12,
        paddingLeft: 16,
    },
});
