import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, View } from 'react-native';
import { IconType, Icon } from '@components';
import { typography, colors } from '@styles';

interface CardProps {
    title: string;
    icon: IconType;
    backgroundColor: string;
    onOpen: () => void;
}

export const Card: React.FC<CardProps> = ({ title, icon, backgroundColor, onOpen }) => {
    const screenWidth = Math.floor(Dimensions.get('window').width);
    const btnWidth = Math.floor((screenWidth - 64) / 3);
    return (
        <TouchableOpacity style={[styles.container, { width: btnWidth }]} onPress={onOpen}>
            <View style={[styles.icon, { backgroundColor }]}>
                <Icon type={icon} fill={colors.white} />
            </View>
            <Text style={styles.text}> {title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        alignItems: 'center',
        marginVertical: 12,
    },
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
