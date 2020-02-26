import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';
import { storeUserType, UserType } from '@domain/settings';

interface Props {
    onUserSet: (value: UserType) => void;
}

export const UserCategoryView: React.FC<Props> = ({ onUserSet }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Card
                    icon={IconType.Yoga}
                    title={'Dalībniekam'}
                    backgroundColor={colors.orange}
                    onPress={() => {
                        storeUserType('participant'), onUserSet('participant');
                    }}
                />
                <Card
                    icon={IconType.Parent}
                    title={'Dalībnieka vecākam'}
                    backgroundColor={colors.green}
                    onPress={() => {
                        storeUserType('parent'), onUserSet('parent');
                    }}
                />
                <Card
                    icon={IconType.Eye}
                    title={'Apmeklētājam'}
                    backgroundColor={colors.blue}
                    onPress={() => {
                        storeUserType('visitor'), onUserSet('visitor');
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
