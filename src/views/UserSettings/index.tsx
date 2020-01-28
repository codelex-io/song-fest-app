import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { SimpleHeader } from '@components';

export default class UserSettings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SimpleHeader title={'Lietotāja iestatījumi'} />
                <Text style={styles.title}>Lietotāja veids</Text>
                <Card active={true} title={'Dalībnieks'} />
                <Card active={false} title={'DALĪBNIEKA VECĀKS'} />
                <Card active={false} title={'Apmeklētājam'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
    },
    header: {
        textAlign: 'left',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: colors.mediumGrey4D,
        fontSize: 14,
        paddingTop: 24,
        paddingBottom: 12,
    },
    iconBox: {
        height: 44,
        width: 44,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    text: {
        fontSize: 20,
    },
});
