import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconType, Image } from '@components';
import { Label } from './Label';
import { colors, typography, opacity } from '@styles';
import { IconButtons } from './IconButtons';
import { EventItem } from '../types';
import { dateTimeUtils } from '@utils';
import { StyleType } from '@domain/AnyType';

interface CardProps {
    item: EventItem;
    backgroundColor: string;
    onFavourite: () => void;
    onNavigate: () => void;
    onReadMore: () => void;
    onShare: () => void;
    propStyles: StyleType | undefined;
}

export const Card: React.FC<CardProps> = ({
    propStyles,
    item,
    backgroundColor,
    onFavourite,
    onNavigate,
    onReadMore,
    onShare,
}) => {
    return (
        <View style={[{ paddingHorizontal: 16 }, propStyles]}>
            <TouchableOpacity style={styles.container} onPress={onReadMore} activeOpacity={opacity.opacity8}>
                {item.image && item.image.url && (
                    <View>
                        <Image height={180} source={{ uri: item.image.url }} style={styles.image} />
                    </View>
                )}
                <View style={[styles.bottomContainer, { backgroundColor }]}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.locationTitle}</Text>
                    <View style={styles.labels}>
                        <Label title={dateTimeUtils.formatDateDay(item.date)} iconType={IconType.Calendar} />
                        <Label title={item.time} iconType={IconType.Clock} />
                    </View>
                    <IconButtons
                        onShare={onShare}
                        isFavourite={item.isFavourite}
                        onFavourite={onFavourite}
                        onNavigate={onNavigate}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 180,
    },
    bottomContainer: {
        padding: 16,
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
        color: colors.white,
        marginBottom: 14,
    },
    labels: {
        marginBottom: 12,
    },
});
