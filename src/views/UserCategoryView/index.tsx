import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';
import { useSettings } from '@domain/settings';

export const UserCategoryView = () => {
    const { setUserType } = useSettings();
    return (
        <View style={styles.container}>
            <Card
                icon={IconType.Start}
                title={'Dalībnieks'}
                backgroundColor={colors.blue}
                onPress={() => setUserType('participant')}
            />
            <Card
                icon={IconType.Parent}
                title={'Dalībnieka vecāks'}
                backgroundColor={colors.green}
                onPress={() => setUserType('parent')}
            />
            <Card
                icon={IconType.Eye}
                title={'Apmeklētājs'}
                backgroundColor={colors.orange}
                onPress={() => setUserType('visitor-lv')}
            />
            <Card
                icon={IconType.Eye}
                title={'Visitor - English'}
                backgroundColor={colors.lightBlue}
                onPress={() => setUserType('visitor-en')}
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
