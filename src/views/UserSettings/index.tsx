import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { Card } from './Card';
import { useSettings } from '@domain/settings';
import { UserType } from '@domain/settings';
import { LocalizationContext } from '../../localization/LocalizationContext';
import TextColorFilledBtn from '@components/buttons/TextColorFilledBtn';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';

const userTypes: UserType[] = ['participant', 'parent', 'visitor'];

const UserSettings: React.FC<SharedStackNavList<'UserCategory'>> = ({ navigation }) => {
    const { userType, setUserType } = useSettings();
    const [currentChoice, setCurrentChoice] = useState<UserType | null>(null);
    const { translations } = useContext(LocalizationContext);

    useEffect(() => {
        setCurrentChoice(userType);
    }, [userType]);

    const handleSaveChoice = () => {
        if (currentChoice !== null) {
            setUserType(currentChoice);
            navigation.goBack();
        }
    };

    return (
        <View style={userSettingStyles.container}>
            <Text style={userSettingStyles.title}>{translations.getString('USER_TYPE')}</Text>

            <View style={userSettingStyles.radioBtnsContainer}>
                {userTypes.map((user: UserType) => (
                    <Card key={user} selectedUser={currentChoice} title={user} onPress={() => setCurrentChoice(user)} />
                ))}
            </View>

            <View style={userSettingStyles.bottomBtnsContainer}>
                <TextColorFilledBtn
                    style={{
                        backgroundColor: colors.extrLighgrey6E,
                        marginRight: 12,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    {translations.getString('CANCEL')}
                </TextColorFilledBtn>

                <TextColorFilledBtn style={{ backgroundColor: colors.yellow }} onPress={handleSaveChoice}>
                    {translations.getString('SAVE')}
                </TextColorFilledBtn>
            </View>
        </View>
    );
};

export const userSettingStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
    },
    radioBtnsContainer: {
        flex: 1,
    },
    bottomBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: typography.bold,
        color: colors.mediumGrey4D,
        fontSize: 14,
        marginBottom: 11,
        lineHeight: 18,
    },
    cardContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
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
});

export default UserSettings;
