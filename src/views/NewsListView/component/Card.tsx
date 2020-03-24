import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, opacity } from '@styles';
import { dateTimeUtils } from '@utils';
import { Image } from '@components';
import { NewsItem } from '../types';
import { IconButtons } from './IconButtons';
import { StyleType } from '@domain/AnyType';

interface CardProps {
    item: NewsItem;
    backgroundColor: string;
    onNavigate: () => void;
    onFavourite: () => void;
    onShare: () => void;
    propStyles?: StyleType;
}

const Card: React.FC<CardProps> = ({ item, backgroundColor, onNavigate, onFavourite, onShare, propStyles }) => {
    return (
        <TouchableOpacity style={[styles.container, propStyles]} onPress={onNavigate} activeOpacity={opacity.opacity8}>
            {item.image?.url && (
                <View style={styles.pictureContainer}>
                    <Image height={180} source={{ uri: item.image?.url }} style={styles.image} />
                </View>
            )}
            <View style={[styles.lowerContainer, { backgroundColor }]}>
                <Text style={styles.dateText}>{dateTimeUtils.formatDate(item.date)}</Text>
                <Text style={styles.titleText}>{item.title}</Text>
                <IconButtons onShare={onShare} isFavourite={item.isFavourite} onFavourite={onFavourite} />
            </View>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginHorizontal: 16,
        backgroundColor: colors.white,
    },
    pictureContainer: {
        backgroundColor: 'grey',
    },
    image: {
        height: 180,
    },
    lowerContainer: {
        padding: 16,
    },
    shareIconContainer: {
        height: 44,
        width: 44,
        backgroundColor: colors.orange,
        opacity: 0.15,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
        marginBottom: 8,
    },
    titleText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 16,
    },
});
