import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';
import { LocalizationContext } from '../../localization/LocalizationContext';
import { useSettings } from '@domain/settings';

export const UserCategoryView = () => {
    const { translations } = useContext(LocalizationContext);
    const { setUserType } = useSettings();

    return (
        <View style={styles.container}>
            <Card
                icon={IconType.Start}
                title={translations.getString('PARTICIPANT')}
                backgroundColor={colors.blue}
                onPress={() => setUserType('participant')}
            />
            <Card
                icon={IconType.Parent}
                title={translations.getString('PARENT')}
                backgroundColor={colors.green}
                onPress={() => setUserType('parent')}
            />
            <Card
                icon={IconType.Eye}
                title={translations.getString('VISITOR')}
                backgroundColor={colors.orange}
                onPress={() => setUserType('visitor')}
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
