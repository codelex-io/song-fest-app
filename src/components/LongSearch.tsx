import React, { Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { typography, colors, opacity } from '@styles';

interface LongSearchProps {
    backgroundColor: string;
    onPress?: () => void;
    searchInput?: string;
    onResetSearch?: () => void;
}

export const LongSearch: React.FC<LongSearchProps> = ({ backgroundColor, onPress, searchInput, onResetSearch }) => (
    <TouchableOpacity
        style={[styles.searchContainer, { backgroundColor }]}
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
            <Text style={styles.searchText}>Meklēt pēc nosaukuma, vietas uc.</Text>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    searchContainer: {
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 16,
        marginHorizontal: 16,
    },
    iconContainer: {
        paddingRight: 11.25,
    },
    searchText: {
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: typography.bold,
        fontSize: 14,
        lineHeight: 18,
    },
    text: {
        color: colors.white,
    },
});
