import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '@styles';

interface CardProps {
    title: string;
    icon: IconType;
    backgroundColor: string;
}

export const Card: React.FC<CardProps> = ({ title, icon, backgroundColor }) => (
    <TouchableOpacity style={styles.container}>
        <View style={[styles.containerBox, { backgroundColor }]}>
            <Icon size={24} type={icon} fill={colors.white} />
        </View>
        <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: 99,
        height: 88,
    },
    containerBox: {
        height: 44,
        width: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 27,
    },
    text: {
        width: 99,
        textAlign: 'center',
        letterSpacing: 0.1,
        paddingTop: 8,
        fontSize: 14,
        fontFamily: typography.bold,
    },
});
