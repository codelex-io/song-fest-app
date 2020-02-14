import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@styles';
import { Icon, IconType } from '@components';
import { GroupOfFavourites } from '@domain/favourites/types';

interface CardProps {
    group: GroupOfFavourites;
}

export const Card: React.FC<CardProps> = ({ group }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {group.key}</Text>
            {group.items.map(item => (
                <View key={item.id} style={styles.itemContainer}>
                    <TouchableOpacity style={styles.favoriteIcon}>
                        <Icon size={26} type={IconType.HeartFilled} fill={colors.orange} />
                    </TouchableOpacity>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <TouchableOpacity style={styles.rightIcon}>
                        <Icon size={26} type={IconType.ChevronRight} fill={colors.darkGrey1A} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: colors.white,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        marginRight: 62,
    },
    favoriteIcon: {
        paddingRight: 14,
        alignItems: 'flex-start',
    },
    rightIcon: {},
    title: {
        color: colors.mediumGrey4D,
        fontSize: 14,
        paddingTop: 24,
        paddingBottom: 12,
        lineHeight: 18,
        fontWeight: '700',
    },
    itemText: {
        color: colors.darkGrey1A,
        fontSize: 16,
        lineHeight: 21,
    },
});
