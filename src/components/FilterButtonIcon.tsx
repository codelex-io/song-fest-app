import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from './Icon';
import { colors } from '../styles/colors';
import { fontFamily } from '../styles/typography';


export default class FilterButtonIcon extends React.Component {
    render() {
        return (
            <View style={styles.iconFilterText} >
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
        flexDirection: 'row',
        paddingVertical: 13,
        alignItems: 'center',
        backgroundColor: colors.yellow,
    },
    filterText: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        width: 46,
        height: 18,
        marginRight: 16,
    },

});
