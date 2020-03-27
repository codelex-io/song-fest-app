import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { opacity, colors, typography } from '@styles';
import { IconType } from '@components';
import { Favourite } from '@domain/favourites/types';
import IconBtn24 from '@components/buttons/IconBtn24';

interface ListEntryProps {
    item: Favourite;
    onFavourite: () => void;
    onNavigate: () => void;
    children: ReactNode;
}
const ListEntry: React.FC<ListEntryProps> = ({ item, onFavourite, onNavigate, children }) => {
    return (
        <View style={styles.container}>
            <View key={item.id} style={styles.itemContainer}>
                <IconBtn24
                    icon={IconType.HeartFilled}
                    color={colors.orange}
                    bgColor={colors.white}
                    onPress={onFavourite}
                    style={styles.favoriteIcon}
                />

                <View style={styles.middleContainer}>
                    <TouchableOpacity activeOpacity={opacity.opacity8} onPress={onNavigate}>
                        <Text style={styles.itemText} numberOfLines={3} ellipsizeMode="tail">
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </View>

                <IconBtn24 icon={IconType.ChevronRight} onPress={onNavigate} style={styles.chevronBtn} />
            </View>

            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    favoriteIcon: {
        justifyContent: 'center',
        marginRight: 12,
    },
    middleContainer: {
        flex: 1,
    },
    itemText: {
        color: colors.darkGrey1A,
        fontFamily: typography.medium,
        fontSize: 16,
        lineHeight: 21,
    },
    chevronBtn: {
        justifyContent: 'center',
        marginLeft: 12,
    },
});

export default ListEntry;
