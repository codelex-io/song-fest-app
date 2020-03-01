import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@styles';
import { Icon, IconType } from '@components';
import { GroupOfFavourites, Favourite } from '@domain/favourites/types';

interface CardProps {
    group: GroupOfFavourites;
    onNavigate: (item: Favourite) => void;
    onFavourite: (item: Favourite) => void;
}

export const Card: React.FC<CardProps> = ({ group, onNavigate, onFavourite }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {group.key}</Text>
            {group.items.map(item => (
                <View key={item.id} style={styles.itemContainer}>
                    <TouchableOpacity style={styles.favoriteIcon} onPress={() => onFavourite(item)}>
                        <Icon size={26} type={IconType.HeartFilled} fill={colors.orange} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        activeOpacity={0.5}
                        onPress={() => onNavigate(item)}
                    >
                        <Text style={styles.itemText}>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => onNavigate(item)}
                    >
                        <View style={{ flex: 1, justifyContent: 'center' }} >
                            <Icon size={26} type={IconType.ChevronRight} fill={colors.darkGrey1A} />
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: colors.white,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
    },
    favoriteIcon: {
        paddingRight: 14,
        alignItems: 'flex-start',
    },
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
