import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { LocalizationContext } from '../localization/LocalizationContext';

const SearchView = () => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{translations.getString('SEARCH')}</Text>
        </View>
    );
};

export default SearchView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: typography.normal,
        fontSize: 16,
        lineHeight: 21,
        color: colors.darkGrey1A,
    },
});
