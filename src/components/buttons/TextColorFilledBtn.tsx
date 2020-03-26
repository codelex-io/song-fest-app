import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';
import { opacity8 } from '@styles/opacity';

interface TextColorFilledBtnProps {
    style: { [key: string]: string | number };
    children: string;
    onPress: () => void;
}
const TextColorFilledBtn: React.FC<TextColorFilledBtnProps> = ({ style, children, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={opacity8} style={[btnStyles.container, style]} onPress={onPress}>
            <Text style={btnStyles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

const btnStyles = StyleSheet.create({
    container: {
        borderRadius: 3,
        paddingVertical: 13,
        paddingHorizontal: 16,
        overflow: 'hidden',
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.0125,
        textTransform: 'uppercase',
        color: colors.darkGrey1A,
    },
});
export default TextColorFilledBtn;
