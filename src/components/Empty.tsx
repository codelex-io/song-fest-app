import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';

export default class Empty extends Component {
    render() {
        return (
            <View style={{ backgroundColor: colors.white }}>
                <Text style={styles.text}>Diemžēl nekas netika atrasts.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: colors.darkGrey1A,
        fontFamily: typography.normal,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5,
    },
});
