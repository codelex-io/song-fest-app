import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';
import Icon, { IconType } from './Icon';

interface HeaderProps {
    title: string;
    onPress: () => void;
}

export const SimpleHeader: React.FC<HeaderProps> = ({ title, onPress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconBox} onPress={onPress}>
                <Icon size={30} type={IconType.ChevronLeft} fill={colors.darkGrey1A} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 56,
        paddingHorizontal: 6,
        textAlign: 'left',
        letterSpacing: 0.15,
        fontSize: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
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
        fontFamily: typography.normal,
        lineHeight: 26,
        fontWeight: '500',
        color: colors.darkGrey1A,
    },
    textContainer: {
        padding: 15,
    },
});
