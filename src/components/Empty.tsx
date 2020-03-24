import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { useLanguageSettings } from '@localization/LocalizationContext';

const Empty = () => {
    const { translations } = useLanguageSettings();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{translations.getString('NOTHING_FOUND')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: colors.darkGrey1A,
        fontFamily: typography.medium,
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.5,
    },
});

export default Empty;
