import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { typography, colors, opacity } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';

interface LongSearchProps {
    backgroundColor: string;
    onPress?: () => void;
    searchInput?: string;
    onResetSearch?: () => void;
    customStyles?: { [key: string]: string | number };
}

export const LongSearch: React.FC<LongSearchProps> = ({
    backgroundColor,
    onPress,
    searchInput,
    onResetSearch,
    customStyles,
}) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <TouchableOpacity
            style={[styles.searchContainer, { backgroundColor }, { ...customStyles }]}
            onPress={onPress}
            activeOpacity={opacity.opacity8}
        >
            <View style={styles.iconContainer}>
                <Icon size={20} type={IconType.Search} fill={colors.white} />
            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.text}>
                    {searchInput
                        ? `${translations.getString('RESULTS')}: ${searchInput}`
                        : `${translations.getString('SEARCH')}`}
                </Text>
            </View>
            {searchInput ? (
                <TouchableOpacity onPress={onResetSearch}>
                    <Icon type={IconType.Close} fill={colors.white} />
                </TouchableOpacity>
            ) : (
                <View style={styles.resetSearchBtn}></View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 8,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    iconContainer: {
        marginRight: 8,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        marginRight: 8,
    },
    text: {
        color: colors.white,
        textTransform: 'uppercase',
        fontFamily: typography.bold,
        fontSize: 14,
        lineHeight: 18,
    },
    resetSearchBtn: {
        width: 24,
        height: 24,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transform: [{ rotate: '45deg' }],
    },
});
