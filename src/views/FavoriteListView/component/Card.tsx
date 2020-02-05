import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@styles';
import { Icon, IconType } from '@components';
import { GroupOfFavourites } from '@domain/favourites/types';

interface CardProps {
    group: GroupOfFavourites;
}

export const Card: React.FC<CardProps> = ({ group }) => (
    <View style={styles.container}>
        <Text style={styles.title}> {group.key}</Text>
        {group.items.map(item => (
            <View key={item.id} style={styles.itemContainer}>
                <TouchableOpacity style={styles.favoriteIcon}>
                    <Icon size={24} type={IconType.HeartFilled} fill={colors.orange} />
                </TouchableOpacity>
                <Text style={styles.itemText}>{item.title}</Text>
                <TouchableOpacity style={styles.rightIcon}>
                    <Icon size={24} type={IconType.ChevronRight} fill={colors.darkGrey1A} />
                </TouchableOpacity>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        flexDirection: 'column',
        paddingLeft: 16,
        paddingRight: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 16,
        marginRight: 100,
    },
    favoriteIcon: {
        paddingRight: 14,
        alignItems: 'flex-start',
    },
    rightIcon: {
        alignItems: 'flex-end',
    },
    title: {
        color: colors.mediumGrey4D,
        fontSize: 14,
        paddingTop: 24,
        paddingBottom: 12,
    },
    itemText: {
        color: colors.darkGrey1A,
        fontSize: 16,
        textAlign: 'left',
        marginRight: 56,
        width: 252,
    },
});
