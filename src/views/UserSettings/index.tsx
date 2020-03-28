import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { RadioButton } from '../../components/buttons/RadioButton';
import { useSettings } from '@domain/settings';
import { UserType } from '@domain/settings';
import { useLanguageSettings } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import SimpleLayout from '@components/layouts/SimpleLayout';

interface User {
    type: UserType;
    title: string;
}

const userTypes: User[] = [
    { type: 'participant', title: 'Dalībnieks' },
    { type: 'parent', title: 'Dalībnieka Vecāks' },
    { type: 'visitor-lv', title: 'Apmeklētājs' },
    { type: 'visitor-en', title: 'Visitor - English' },
];

const UserSettings: React.FC<SharedStackNavList<'UserSettings'>> = ({ navigation }) => {
    const { translations } = useLanguageSettings();
    const { userType, setUserType } = useSettings();
    const { setAppLanguage } = useLanguageSettings();
    const handleChoice = (userType: UserType) => {
        if (userType === 'visitor-en') {
            setAppLanguage('en');
        } else {
            setAppLanguage('lv');
        }
        setUserType(userType);
    };

    return (
        <SimpleLayout
            title={translations.getString('USER_SETTINGS')}
            goBack={() => navigation.goBack()}
            headerStyles={styles.header}
            textTransform="none"
        >
            <Text style={styles.title}>{translations.getString('USER_TYPE')}</Text>

            {userTypes.map(({ type, title }: User) => (
                <RadioButton
                    key={type}
                    active={userType === type}
                    label={title}
                    onPress={() => handleChoice(type)}
                />
            ))}
        </SimpleLayout>
    );
};
export const styles = StyleSheet.create({
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
});
export default UserSettings;
