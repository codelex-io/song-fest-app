import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { useLanguageSettings } from '../localization/LocalizationContext';

const Empty = () => {
    const { translations } = useLanguageSettings();
    return (
        <View style={{ backgroundColor: colors.white }}>
            <Text style={styles.text}>{translations.getString('NOTHING_FOUND')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: colors.darkGrey1A,
        fontFamily: typography.normal,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5,
    },
});

export default Empty;
