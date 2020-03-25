import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { colors, typography } from '@styles';
import { RadioButton } from '../../components/buttons/RadioButton';
import { useSettings } from '@domain/settings';
import { UserType } from '@domain/settings';
import { useLanguageSettings } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import { SimpleHeader } from '@components';

const userTypes: UserType[] = ['participant', 'parent', 'visitor-lv', 'visitor-en'];

const UserSettings: React.FC<SharedStackNavList<'UserSettings'>> = ({ navigation }) => {
    const { userType, setUserType } = useSettings();
    const { translations } = useLanguageSettings();

    return (
        <View style={userSettingStyles.container}>
            <View style={userSettingStyles.header}>
                <StatusBar />
                <SimpleHeader title={translations.getString('USER_SETTINGS')} navigation={navigation} />
            </View>

            <Text style={userSettingStyles.title}>{translations.getString('USER_TYPE')}</Text>

            {userTypes.map((user: UserType) => {
                let title = user as string;
                if (user === 'visitor-en') {
                    title = 'VISITOR_EN';
                } else if (user === 'visitor-lv') {
                    title = 'VISITOR_LV';
                }

                return (
                    <RadioButton
                        key={user}
                        active={userType === user}
                        label={title}
                        onPress={() => setUserType(user)}
                        propStyles={{ marginBottom: 16 }}
                    />
                );
            })}
        </View>
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
});
export default UserSettings;
