import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { typography, colors } from '@styles';

interface LongSearchProps {
    backgroundColor: string;
}

export const LongSearch: React.FC<LongSearchProps> = ({ backgroundColor }) => (
    <TouchableOpacity style={[styles.searchContainer, { backgroundColor }]}>
        <View style={styles.iconContainer}>
            <Icon size={20} type={IconType.Search} fill={colors.white} />
        </View>
        <Text style={styles.searchText}>Meklēt pēc nosaukuma, vietas uc. </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    searchContainer: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 16,
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
});
