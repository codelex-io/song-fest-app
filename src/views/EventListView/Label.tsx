import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';
import { typography } from '@styles';

interface LabelProps {
    title: string;
    iconType: IconType;
}

export const Label: React.FC<LabelProps> = ({ title, iconType }) => (
    <View style={styles.container}>
        <Icon size={20} type={iconType} fill="#FFFFFF" />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 25,
        alignItems: 'center',
        paddingBottom: 12,
    },
    title: {
        fontFamily: typography.normal,
        paddingLeft: 10,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        color: '#FFFFFF',
    },
});
