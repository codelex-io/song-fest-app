import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Event } from './types';
import { Label } from './Label';
import { Icon } from '../../components';

interface CardProps {
    event: Event;
}

export const Card: React.FC<CardProps> = ({ event }) => (
    <View style={styles.container}>
        <View style={styles.column}>
            {event.imageUrl && (
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: event.imageUrl }} resizeMode="cover" />
                </View>
            )}
            <View style={styles.row}>
                <View style={styles.content}>
                    <Text style={styles.title}>{event.title}</Text>
                    <Text style={styles.location}>{event.location}</Text>
                    <View style={styles.bottom}>
                        <Label title={event.date} />
                        <Label title={event.time} />
                    </View>
                </View>
                <TouchableOpacity style={styles.navigate}>
                    <Icon size={24} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    imageContainer: {
        height: 180,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 180,
    },
    content: {
        flex: 1,
    },
    navigate: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 8,
        paddingLeft: 24,
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
        marginBottom: 12,
    },
    location: {
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 14,
        color: '#4D4D4D',
    },
    bottom: {
        flexDirection: 'row',
    },
});
