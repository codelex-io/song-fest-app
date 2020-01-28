import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';
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
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        textAlign: 'left',
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    text: {
        fontSize: 20,
        fontFamily: typography.bold,
    },
});
