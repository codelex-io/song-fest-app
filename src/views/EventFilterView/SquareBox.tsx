import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '../../styles';

export class SquareBox extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.container2}>
                    <View style={styles.iconContainer}>
                        <Icon size={20} type={IconType.Heart} fill="#FFFFFF" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container2}>
                    <View style={styles.iconContainer}>
                        <Icon size={20} type={IconType.Heart} fill="#FFFFFF" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    container2: {
        paddingRight: 16,
        flexDirection: 'row',
    },
    iconContainer: {
        height: 44,
        width: 44,
        display: 'flex',
        backgroundColor: colors.extrLighgrey6E,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
