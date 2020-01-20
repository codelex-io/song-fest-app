/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>JAUNUMI</Text>
                <TouchableOpacity style={styles.containerBox}></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 16,
        textAlign: 'left',
        letterSpacing: 0.15,
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerBox: {
        height: 44,
        width: 44,
        backgroundColor: '#F15A31',
        borderRadius: 8,
        opacity: 0.15,
    },
    text: {
        fontFamily: 'DINPro',
        fontSize: 20,
    },
});
