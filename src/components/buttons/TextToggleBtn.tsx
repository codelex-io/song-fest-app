import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { typography, colors, opacity } from '@styles';

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
            activeOpacity={opacity.opacity8}
            style={[
                styles.container,
                { ...style },
                {
                    backgroundColor: active ? secondaryColor : primaryColor,
                    borderColor: secondaryColor,
                },
            ]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: active ? primaryColor : secondaryColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const PHONE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:
        PHONE_WIDTH > 400
            ? {
                  paddingVertical: 11,
                  paddingHorizontal: 12,
                  borderWidth: 1,
              }
            : {
                  paddingVertical: 11,
                  paddingHorizontal: 4,
                  borderWidth: 1,
                  flexShrink: 1,
                  marginHorizontal: 4,
              },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default TextToggleBtn;
