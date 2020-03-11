import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { useLanguageSettings } from '../../localization/LocalizationContext';
import { InitialUserSettingsStackNavParams } from 'src/navigation/stacks/InitialUserSettingsStack';
import { Language } from '@localization/types';

export const LanguageView: React.FC<InitialUserSettingsStackNavParams<'Language'>> = ({ navigation }) => {
    const { setAppLanguage } = useLanguageSettings();

    const handleSetSettings = (lang: string) => {
        setAppLanguage(lang as Language);
        navigation.navigate('User');
    };
    return (
        <View style={styles.container}>
            <Card
                image={require('./lv.png')}
                title={'Latviski'}
                onPress={() => handleSetSettings('lv')}
                backgroundColor={colors.green}
            />
            <Card
                image={require('./gb.png')}
                title={'English'}
                onPress={() => handleSetSettings('en')}
                backgroundColor={colors.blue}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: colors.white,
    },
});
