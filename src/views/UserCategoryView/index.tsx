import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';
import { UserType } from '@domain/settings';

interface Props {
    onSelect: (userType: UserType) => void;
}

export const UserCategoryView: React.FC<Props> = ({ onSelect }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Card
                    icon={IconType.Yoga}
                    title={'Dalībniekam'}
                    backgroundColor={colors.orange}
                    onPress={() => onSelect('participant')}
                />
                <Card
                    icon={IconType.Parent}
                    title={'Dalībnieka vecākam'}
                    backgroundColor={colors.green}
                    onPress={() => onSelect('parent')}
                />
                <Card
                    icon={IconType.Eye}
                    title={'Apmeklētājam'}
                    backgroundColor={colors.blue}
                    onPress={() => onSelect('visitor')}
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
