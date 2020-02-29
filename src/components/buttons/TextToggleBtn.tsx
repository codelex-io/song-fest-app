import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';

interface Props {
    title: string;
    active: boolean;
    onPress: () => void;
    primaryColor?: string;
    secondaryColor?: string;
    style?: { [key: string]: string | number };
}

const TextToggleBtn: React.FC<Props> = ({
    title,
    active,
    onPress,
    primaryColor = colors.white,
    secondaryColor = colors.green,
    style,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { ...style },
                {
                    backgroundColor: active ? secondaryColor : primaryColor,
                    borderColor: primaryColor,
                },
            ]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: active ? primaryColor : secondaryColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 11,
        paddingHorizontal: 12,
        borderWidth: 1,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default TextToggleBtn;
