import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { SimpleHeader } from '@components';

export default class UserSettings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <SimpleHeader title={'Lietotāja iestatījumi'} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Lietotāja veids</Text>
                    <Card active={true} title={'Dalībnieks'} />
                    <Card active={false} title={'DALĪBNIEKA VECĀKS'} />
                    <Card active={false} title={'Apmeklētājam'} />
                </View>
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
    content: {
        flex: 1,
    },
});
