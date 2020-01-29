import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '../styles';
import Icon, { IconType } from './Icon';

interface HeaderProps {
    title: string;
}

export default class SimpleHeader extends React.Component<HeaderProps> {
    render() {
        const { title } = this.props;
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon size={24} type={IconType.ChevronLeft} fill={colors.darkGrey1A} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 56,
        textAlign: 'left',
        flexDirection: 'row',
        alignContent: 'center',
    },
    iconBox: {
        height: 44,
        width: 44,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        marginTop: 6,
    },
    text: {
        fontSize: 20,
        fontFamily: typography.bold,
    },
    textContainer: {
        padding: 15,
    },
});
