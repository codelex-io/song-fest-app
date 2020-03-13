import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { colors } from '@styles';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="small" color={colors.randomColor()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
