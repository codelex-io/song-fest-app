import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';
import { UserType } from '@domain/settings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { userSettingStyles } from '.';

interface CardProps {
    title: string;
    selectedUser: UserType | null;
    onPress: () => void;
}

export const Card: React.FC<CardProps> = ({ title, selectedUser, onPress }) => {
    const { translations } = useContext(LocalizationContext);
    const active = selectedUser === title;
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
