import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { typography, colors } from '@styles';

export default class BackButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.filterText}>Atpakaļ uz augšu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 13,

        backgroundColor: colors.yellow,
    },
    filterText: {
        fontSize: 14,
        fontFamily: typography.bold,
        marginRight: 16,
    },
});
