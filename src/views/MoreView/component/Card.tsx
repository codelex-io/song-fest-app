import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconType, Icon } from '@components';
import { colors, opacity } from '@styles';
import { moreViewStyles } from './index';
import { LocalizationContext } from '../../../localization/LocalizationContext';

interface CardProps {
    title: string;
    icon: IconType;
    onOpen: () => void;
    backgroundColor: string;
    disabled: boolean;
}

export const Card: React.FC<CardProps> = ({ title, icon, backgroundColor, onOpen, disabled }) => {
    const { translations } = useContext(LocalizationContext);

    /*eslint-disable*/
    const disabledOnPress = () => { };
    /*eslint-enable*/
    const disabledIconFill = colors.lightGrey3A;
    const disabledBgColor = colors.extrLighgrey6E;

    return (
        <View style={moreViewStyles.card}>
            <TouchableOpacity
                style={moreViewStyles.button}
                onPress={disabled ? disabledOnPress : onOpen}
                activeOpacity={opacity.opacity8}
            >
                <View style={[moreViewStyles.icon, { backgroundColor: disabled ? disabledBgColor : backgroundColor }]}>
                    <Icon type={icon} fill={disabled ? disabledIconFill : colors.white} />
                </View>
                <Text style={[moreViewStyles.text]}>{translations.getString(title)}</Text>
            </TouchableOpacity>
        </View>
    );
};
