import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { typography, colors, opacity } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';

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
    const { appLanguage } = useContext(LocalizationContext);

    return (
        <TouchableOpacity
            activeOpacity={opacity.opacity8}
            style={[
                appLanguage === 'lv' ? styles.containerLV : styles.containerEN,
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
const MEDIA_BREAK = 360;

const styles = StyleSheet.create({
    containerLV: {
        paddingVertical: 11,
        paddingHorizontal: 12,
        borderWidth: 1,
        marginRight: 8,
    },
    containerEN:
        PHONE_WIDTH > MEDIA_BREAK
            ? {
                  paddingVertical: 11,
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  marginRight: 8,
              }
            : {
                  paddingVertical: 11,
                  paddingHorizontal: 6,
                  borderWidth: 1,
                  flexShrink: 1,
                  marginRight: 8,
              },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default TextToggleBtn;
