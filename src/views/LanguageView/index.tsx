import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { useLanguageSettings } from '@localization/LocalizationContext';
import { InitialUserSettingsStackNavParams } from 'src/navigation/stacks/InitialUserSettingsStack';
import { Language } from '@localization/types';
import LV from './LV.svg';
import GB from './GB.svg';

export const LanguageView: React.FC<InitialUserSettingsStackNavParams<'Language'>> = ({ navigation }) => {
    const { setAppLanguage } = useLanguageSettings();

    const handleSetSettings = (lang: string) => {
        setAppLanguage(lang as Language);
        navigation.navigate('User');
    };
    return (
        <View style={styles.container}>
            <Card
                image={<LV style={{ width: 28, height: 20 }} />}
                title={'Latviski'}
                onPress={() => handleSetSettings('lv')}
                backgroundColor={colors.green}
            />
            <Card
                image={<GB style={{ width: 28, height: 20 }} />}
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
