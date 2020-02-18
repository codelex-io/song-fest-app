import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType, SimpleHeader } from '@components';
import { colors } from '@styles';
import { Card } from './Card';

interface Props {
    onPress: () => void;
}
export const ParticipantCategoryView: React.FC<Props> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <SimpleHeader title={'Lietotāja iestatījumi'} onPress={onPress} />
            <View style={{ flex: 2 }}>
                <Card icon={IconType.Yoga} title={'Dalībniekam'} backgroundColor={colors.orange} />
                <Card icon={IconType.Parent} title={'Dalībnieka vecākam'} backgroundColor={colors.green} />
                <Card icon={IconType.Eye} title={'Apmeklētājam'} backgroundColor={colors.blue} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
});
