import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';
import { useSettings, UserType } from '@domain/settings';
import { useLanguageSettings } from '@localization/LocalizationContext';

export const UserCategoryView = () => {
    const { setUserType } = useSettings();
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
        <View style={styles.container}>
            <Card
                icon={IconType.Start}
                title={'Dalībnieks'}
                backgroundColor={colors.blue}
                onPress={() => handleChoice('participant')}
            />
            <Card
                icon={IconType.Parent}
                title={'Dalībnieka vecāks'}
                backgroundColor={colors.green}
                onPress={() => handleChoice('parent')}
            />
            <Card
                icon={IconType.Eye}
                title={'Apmeklētājs'}
                backgroundColor={colors.orange}
                onPress={() => handleChoice('visitor-lv')}
            />
            <Card
                icon={IconType.Eye}
                title={'Visitor - English'}
                backgroundColor={colors.lightBlue}
                onPress={() => handleChoice('visitor-en')}
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
