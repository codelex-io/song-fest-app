import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';

export default class ParticipantCategoryView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Card icon={IconType.Yoga} title={'Dalībniekam'} backgroundColor={colors.orange} />
                <Card icon={IconType.Parent} title={'Dalībnieka vecākam'} backgroundColor={colors.green} />
                <Card icon={IconType.Eye} title={'Apmeklētājam'} backgroundColor={colors.blue} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
});
