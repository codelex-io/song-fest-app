import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { Card } from './Card';
import { useSettings } from '@domain/settings';
import { UserType } from '@domain/settings';
import { useLanguageSettings } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import { Language } from '@localization/types';
import { LanguageCard } from './LanguageCard';
import SimpleLayout from '@components/layouts/SimpleLayout';
const userTypes: UserType[] = ['participant', 'parent', 'visitor'];
const language: Language[] = ['lv', 'en'];

const UserSettings: React.FC<SharedStackNavList<'UserSettings'>> = ({ navigation }) => {
    const { userType, setUserType } = useSettings();
    const { translations, appLanguage, setAppLanguage } = useLanguageSettings();

    return (
        <SimpleLayout
            title={translations.getString('USER_SETTINGS')}
            goBack={() => navigation.goBack}
            containerStyles={userSettingStyles.container}
            headerStyles={userSettingStyles.header}
            textTransform="none"
        >
            <Text style={userSettingStyles.title}>{translations.getString('USER_TYPE')}</Text>
            <View style={{ marginBottom: 16 }}>
                {userTypes.map((user: UserType) => (
                    <Card key={user} selectedUser={userType} title={user} onPress={() => setUserType(user)} />
                ))}
            </View>

            <Text style={userSettingStyles.title}>{translations.getString('LANGUAGE')}</Text>
            <View>
                {language.map((language: Language) => (
                    <LanguageCard
                        key={language}
                        selectedLanguage={appLanguage}
                        title={language}
                        onPress={() => setAppLanguage(language)}
                    />
                ))}
            </View>
        </SimpleLayout>
    );
};
export const userSettingStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
    },
    header: {
        marginBottom: 16,
    },
    title: {
        fontFamily: typography.bold,
        color: colors.mediumGrey4D,
        fontSize: 14,
        marginBottom: 11,
        lineHeight: 18,
        marginHorizontal: 16,
    },
    bottomBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
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
export default UserSettings;
