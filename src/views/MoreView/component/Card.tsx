import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '@styles';

interface CardProps {
    title: string;
    icon: IconType;
    backgroundColor: string;
    onOpen: () => void;
}

export const Card: React.FC<CardProps> = ({ title, icon, backgroundColor, onOpen }) => (
    <TouchableOpacity style={styles.container} onPress={onOpen}>
        <View style={styles.containerBox}>
            <View style={[styles.button, { backgroundColor }]}>
                <Icon type={icon} fill={colors.white} />
            </View>
        </View>
        <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 88,
        justifyContent: 'space-between',
    },
    containerBox: {
        alignItems: 'center',
    },
    button: {
        padding: 10,
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
