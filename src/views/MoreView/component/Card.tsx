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
}

export const Card: React.FC<CardProps> = ({ title, icon, backgroundColor, onOpen }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={moreViewStyles.card}>
            <TouchableOpacity style={moreViewStyles.button} onPress={onOpen} activeOpacity={opacity.opacity8}>
                <View style={[moreViewStyles.icon, { backgroundColor }]}>
                    <Icon type={icon} fill={colors.white} />
                </View>
                <Text style={[moreViewStyles.text]}>{translations.getString(title)}</Text>
            </TouchableOpacity>
        </View>
    );
};
