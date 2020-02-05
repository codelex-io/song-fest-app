import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconType } from '@components';
import { Label } from './Label';
import { colors } from '../../../styles';
import { Buttons } from './Buttons';
import { EventItem } from '../types';

interface CardProps {
    event: EventItem;
    backgroundColor: string;
    onPress: () => void;
}

export const Card: React.FC<CardProps> = ({ event, backgroundColor, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
        {event.image?.url && (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: event.image.url }} resizeMode="cover" />
            </View>
        )}
        <View style={[styles.bottomContainer, { backgroundColor }]}>
            <View style={styles.row}>
                <View style={styles.content}>
                    <Text style={styles.title}>{event.title}</Text>
                    <Text style={styles.location}>{event.locationTitle}</Text>
                    <View style={styles.labels}>
                        <Label title={event.date} iconType={IconType.Calendar} />
                        <Label title={event.time} iconType={IconType.Clock} />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Buttons onShare={() => null} onFavourite={() => null} onNavigate={() => null} />
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomContainer: {
        backgroundColor: '#F15A31',
        padding: 16,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    imageContainer: {
        height: 180,
    },
    image: {
        width: '100%',
        height: 180,
    },
    content: {
        flex: 1,
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'DINPro',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
        marginBottom: 12,
    },
    location: {
        fontFamily: 'DINPro',
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 14,
        color: colors.white,
    },
    labels: {
        flexDirection: 'column',
        marginBottom: 12,
    },
});
