import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '@styles';
import { LocalizationContext } from '../../localization/LocalizationContext';

interface CardProps {
    title: string;
    active: boolean;
}

export const Card: React.FC<CardProps> = ({ title, active }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                {active ? (
                    <Icon size={24} type={IconType.RadioBoxMarked} fill={colors.darkGrey1A} />
                ) : (
                    <Icon size={24} type={IconType.RadioBoxBlank} fill={colors.darkGrey1A} />
                )}
            </View>
            <Text style={styles.text}>{translations.getString(title)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 14,
    },
    text: {
        flex: 7,
        color: colors.darkGrey1A,
        fontFamily: typography.bold,
        fontSize: 14,
        textTransform: 'uppercase',
    },
});
