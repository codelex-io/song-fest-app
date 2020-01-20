import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '../../components';
import { Event } from './types';

interface CardProps {
    event: Event;
}

export const Card: React.FC<CardProps> = ({ event }) => (
    <View>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.location}>{event.location}</Text>
        <View style={styles.bottom}>
            <Icon size={24} />
            <Text>{event.date}</Text>
            <Icon size={24} />
            <Text>{event.time}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
    },
    location: {
        fontSize: 14,
        lineHeight: 18,
    },
    bottom: {
        flexDirection: 'row',
    },
});
