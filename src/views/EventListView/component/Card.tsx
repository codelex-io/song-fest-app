import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconType } from '@components';
import { Label } from './Label';
import { colors, typography } from '@styles';
import { IconButtons } from './IconButtons';
import { EventItem } from '../types';
import { dateTimeUtils } from '@utils';

interface CardProps {
    item: EventItem;
    backgroundColor: string;
    onFavourite: () => void;
    onNavigate: () => void;
}

export const Card: React.FC<CardProps> = ({ item, backgroundColor, onFavourite, onNavigate }) => (
    <TouchableOpacity style={styles.container}>
        {item.image?.url && (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.image.url }} resizeMode="cover" />
            </View>
        )}
        <View style={[styles.bottomContainer, { backgroundColor }]}>
            <View style={styles.row}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.locationTitle}</Text>
                    <View style={styles.labels}>
                        <Label title={dateTimeUtils.formatDateMoment(item.date)} iconType={IconType.Calendar} />
                        <Label title={item.time} iconType={IconType.Clock} />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <IconButtons
                    onShare={() => null}
                    isFavourite={item.isFavourite}
                    onFavourite={onFavourite}
                    onNavigate={onNavigate}
                />
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomContainer: {
        backgroundColor: colors.orange,
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
        color: colors.white,
        fontFamily: typography.normal,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
        marginBottom: 12,
    },
    location: {
        fontFamily: typography.normal,
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
