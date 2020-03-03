import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconType, Icon } from '@components';
import { typography, colors, opacity } from '@styles';
import { moreViewStyles } from './index';

interface CardProps {
    title: string;
    icon: IconType;
    onOpen: () => void;
    backgroundColor: string;
}

export const Card: React.FC<CardProps> = ({ title, icon, backgroundColor, onOpen }) => {
    return (
        <View style={moreViewStyles.card}>
            <TouchableOpacity style={moreViewStyles.button} onPress={onOpen} activeOpacity={opacity.opacity8}>
                <View style={[styles.icon, { backgroundColor }]}>
                    <Icon type={icon} fill={colors.white} />
                </View>
                <Text style={[styles.text]}> {title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        padding: 10,
    },
    text: {
        textAlign: 'center',
        letterSpacing: 0.1,
        paddingTop: 8,
        fontSize: 14,
        fontFamily: typography.bold,
    },
});
