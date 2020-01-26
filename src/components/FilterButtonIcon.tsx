import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from './Icon';
import { fontFamily } from '../styles/typography';

export default class FilterButtonIcon extends React.Component {
    render() {
        return (
            <View style={styles.iconFilterText}>
                <View style={styles.iconFilter}>
                    <Icon size={24} />
                </View>
                <Text style={styles.filterText}>FILTRS</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconFilter: {
        paddingLeft: 14,
        paddingRight: 12,
    },
    iconFilterText: {
        width: 104,
        flexDirection: 'row',
        paddingVertical: 13,
        alignItems: 'center',
    },
    filterText: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        marginRight: 16,
    },
});
