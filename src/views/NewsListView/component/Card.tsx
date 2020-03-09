import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, opacity } from '@styles';
import { dateTimeUtils } from '@utils';
import { NewsItem } from '../types';
import { IconButtons } from './IconButtons';

interface CardProps {
    item: NewsItem;
    backgroundColor: string;
    onNavigate: () => void;
    onFavourite: () => void;
    onShare: () => void;
}

const Card: React.FC<CardProps> = ({ item, backgroundColor, onNavigate, onFavourite, onShare }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onNavigate} activeOpacity={opacity.opacity8}>
            {item.image?.url && (
                <View style={styles.pictureContainer}>
                    <Image style={styles.picture} source={{ uri: item.image?.url }} resizeMode="cover" />
                </View>
            )}
            <View style={[styles.lowerContainer, { backgroundColor }]}>
                <Text style={styles.dateText}> {dateTimeUtils.formatDate(item.date)}</Text>
                <Text style={styles.titleText}> {item.title}</Text>
                <IconButtons onShare={onShare} isFavourite={item.isFavourite} onFavourite={onFavourite} />
            </View>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: colors.white,
    },
    pictureContainer: {
        backgroundColor: 'grey',
    },
    picture: {
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
