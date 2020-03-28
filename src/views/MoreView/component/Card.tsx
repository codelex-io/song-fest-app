import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { IconType, Icon } from '@components';
import { colors, opacity, typography } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';

interface CardProps {
    title: string;
    icon: IconType;
    onOpen: () => void;
    backgroundColor: string;
    disabled: boolean;
}

export const Card: React.FC<CardProps> = ({ title, icon, backgroundColor, onOpen, disabled }) => {
    const { translations } = useContext(LocalizationContext);
    const disabledIconFill = colors.lightGrey3A;
    const disabledBgColor = colors.extrLightgrey6E;
    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={opacity.opacity8}
                disabled={disabled}
                onPress={onOpen}
            >
                <View style={[styles.icon, { backgroundColor: disabled ? disabledBgColor : backgroundColor }]}>
                    <Icon type={icon} fill={disabled ? disabledIconFill : colors.white} />
                </View>
                <Text style={styles.text}>{translations.getString(title)}</Text>
            </TouchableOpacity>
        </View>
    );
};

const screenWidth = Math.floor(Dimensions.get('screen').width);
const MEDIA_BREAK = 260;
const cardWidth = (screenWidth - 64) / 3;

const styles = StyleSheet.create({
    icon:
        screenWidth > MEDIA_BREAK
            ? {
                padding: 10,
            }
            : {
                padding: 10,
                marginRight: 16,
            },
    card:
        screenWidth > MEDIA_BREAK
            ? {
                width: cardWidth,
                marginHorizontal: 8,
                alignItems: 'center',
                marginVertical: 12,
            }
            : {
                marginBottom: 12,
                flexDirection: 'row',
            },
    button:
        screenWidth > MEDIA_BREAK
            ? {
                alignItems: 'center',
            }
            : {
                flexDirection: 'row',
                alignItems: 'center',
            },
    text:
        screenWidth > MEDIA_BREAK
            ? {
                textAlign: 'center',
                letterSpacing: 0.1,
                paddingTop: 8,
                fontSize: 14,
                fontFamily: typography.bold,
            }
            : {
                textAlign: 'center',
                letterSpacing: 0.1,
                fontSize: 14,
                fontFamily: typography.bold,
                textTransform: 'uppercase',
            },
});
