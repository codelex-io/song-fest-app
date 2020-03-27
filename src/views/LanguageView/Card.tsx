import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography, opacity } from '@styles';

interface CardProps {
    image: Element;
    title: string;
    backgroundColor: string;
    onPress: () => void;
}

export const Card: React.FC<CardProps> = ({ image, title, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.columnContainer, { backgroundColor }]}
            onPress={onPress}
            activeOpacity={opacity.opacity8}
        >
            <View style={styles.containerBox}>{image}</View>
            <Text style={styles.text}>{title}</Text>
            <Icon size={24} type={IconType.ChevronRight} fill={colors.white} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    columnContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        marginVertical: 8,
    },
    containerBox: {
        backgroundColor: colors.white,
        padding: 10,
        marginRight: 16,
    },
    text: {
        flex: 1,
        color: colors.white,
        fontFamily: typography.bold,
        fontSize: 20,
        letterSpacing: 0.75,
    },
});