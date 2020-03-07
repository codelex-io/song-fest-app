import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { typography, colors, opacity } from '@styles';

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
}) => (
    <TouchableOpacity
        style={[styles.searchContainer, { backgroundColor }, { ...customStyles }]}
        onPress={onPress}
        activeOpacity={opacity.opacity8}
    >
        <View style={styles.iconContainer}>
            <Icon size={20} type={IconType.Search} fill={colors.white} />
        </View>
        {searchInput ? (
            <Fragment>
                <Text style={styles.text}>rezultāti: {searchInput}</Text>
                <TouchableOpacity onPress={onResetSearch} activeOpacity={opacity.opacity8}>
                    <Text style={styles.text}>Nodzēst</Text>
                </TouchableOpacity>
            </Fragment>
        ) : (
            <Text style={styles.text}>Meklēt pēc nosaukuma, vietas uc.</Text>
        )}
    </TouchableOpacity>
);

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
    iconContainer: {},
    text: {
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: typography.bold,
        fontSize: 14,
        lineHeight: 18,
        marginLeft: 8,
    },
});
