import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { userSettingStyles } from '.';
import { Language } from '@localization/types';

interface CardProps {
    title: string;
    selectedLanguage: Language | null;
    onPress: () => void;
}

export const LanguageCard: React.FC<CardProps> = ({ title, selectedLanguage, onPress }) => {
    const { translations } = useContext(LocalizationContext);
    const active = selectedLanguage === title;
    return (
        <TouchableOpacity style={userSettingStyles.cardContainer} onPress={onPress}>
            <View style={userSettingStyles.cardIcon}>
                {active ? (
                    <Icon size={24} type={IconType.RadioBoxMarked} fill={colors.darkGrey1A} />
                ) : (
                    <Icon size={24} type={IconType.RadioBoxBlank} fill={colors.darkGrey1A} />
                )}
            </View>
            <Text style={userSettingStyles.cardText}>{translations.getString(title.toUpperCase())}</Text>
        </TouchableOpacity>
    );
};
