import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';
import Icon, { IconType } from './Icon';

interface HeaderProps {
    title: string;
}

export class Header extends React.Component<HeaderProps> {
    render() {
        const { title } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <TouchableOpacity style={styles.containerBox}>
                    <Icon size={33} type={IconType.HeartFilled} fill={colors.white} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        paddingHorizontal: 16,
        textAlign: 'left',
        letterSpacing: 0.15,
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerBox: {
        height: 44,
        width: 44,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 20,
        textTransform: 'uppercase',
    },
});
