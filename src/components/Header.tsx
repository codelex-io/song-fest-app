import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';
import Icon, { IconType } from './Icon';

interface HeaderProps {
    title: string;
    onPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity style={styles.containerBox} onPress={onPress}>
                <Icon size={28} type={IconType.HeartFilled} fill={colors.white} />
            </TouchableOpacity>
        </View>
    );
};

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
        backgroundColor: colors.white,
    },
    containerBox: {
        height: 40,
        width: 40,
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
