import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';

interface TextColorFilledBtnProps {
    style: { [key: string]: string | number };
    children: string;
    onPress: () => void;
}
const TextColorFilledBtn: React.FC<TextColorFilledBtnProps> = ({ style, children, onPress }) => {
    return (
        <TouchableOpacity style={[{ ...style }, btnStyles.container]} onPress={onPress}>
            <Text style={btnStyles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

const btnStyles = StyleSheet.create({
    container: {
        borderRadius: 3,
        paddingVertical: 13,
        paddingHorizontal: 16,
        alignSelf: 'baseline',
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
