import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';
import NavigationAware from '../../navigation/NavigationAware';
import { storeUserType } from '@domain/settings';

export const UserCategoryView: React.FC<NavigationAware> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Card
                    icon={IconType.Yoga}
                    title={'Dalībniekam'}
                    backgroundColor={colors.orange}
                    onPress={() => {
                        storeUserType('participant'), navigation.navigate('Home');
                    }}
                />
                <Card
                    icon={IconType.Parent}
                    title={'Dalībnieka vecākam'}
                    backgroundColor={colors.green}
                    onPress={() => {
                        storeUserType('parent'), navigation.navigate('Home');
                    }}
                />
                <Card
                    icon={IconType.Eye}
                    title={'Apmeklētājam'}
                    backgroundColor={colors.blue}
                    onPress={() => {
                        storeUserType('visitor'), navigation.navigate('Home');
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: colors.white,
        alignItems: 'center',
    },
});
