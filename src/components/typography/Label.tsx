import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Icon, IconType } from '@components';
import { typography, colors } from '@styles';

interface LabelProps {
    title: string;
    iconType: IconType;
    propStyles?: ViewStyle;
    color?: string;
}

export const Label: React.FC<LabelProps> = ({ title, iconType, propStyles, color = colors.darkGrey1A }) => (
    <View style={[styles.container, propStyles]}>
        <Icon size={24} type={iconType} fill={color} />
        <Text style={[styles.title, { color }]}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    title: {
        fontFamily: typography.medium,
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        color: colors.darkGrey1A,
    },
});
