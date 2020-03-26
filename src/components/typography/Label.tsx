import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Icon, IconType } from '@components';
import { typography, colors } from '@styles';

interface LabelProps {
    title: string;
    iconType: IconType;
    propStyles?: ViewStyle
}

export const Label: React.FC<LabelProps> = ({ title, iconType, propStyles }) => (
    <View
        style={[
            styles.container,
            propStyles,
        ]}
    >
        <Icon size={24} type={iconType} fill={colors.darkGrey1A} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
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
