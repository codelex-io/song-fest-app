import React, { useContext } from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CardProps {
    label: string;
    onPress: () => void;
    active: boolean;
    propStyles?: ViewStyle;
}

export const RadioButton: React.FC<CardProps> = ({ label, active, onPress, propStyles }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <TouchableOpacity style={[styles.cardContainer, propStyles]} onPress={onPress}>
            <View style={styles.cardIcon}>
                {active ? (
                    <Icon size={24} type={IconType.RadioBoxMarked} fill={colors.darkGrey1A} />
                ) : (
                    <Icon size={24} type={IconType.RadioBoxBlank} fill={colors.darkGrey1A} />
                )}
            </View>
            <Text style={styles.cardText}>{translations.getString(label.toUpperCase())}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    cardIcon: {
        paddingRight: 14,
    },
    cardText: {
        color: colors.darkGrey1A,
        fontFamily: typography.bold,
        fontSize: 14,
        textTransform: 'uppercase',
    },
    cardExtraText: {
        color: colors.darkGrey1A,
        fontFamily: typography.medium,
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.25,
    },
});
