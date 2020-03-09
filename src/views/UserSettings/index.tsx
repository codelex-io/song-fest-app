import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { Card } from './Card';

export default class UserSettings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lietotāja veids</Text>
                <Card active={true} title={'PARTICIPANT'} />
                <Card active={false} title={'PARENT'} />
                <Card active={false} title={'VISITOR'} />
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
        backgroundColor: colors.white,
    },
    header: {
        textAlign: 'left',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: typography.bold,
        color: colors.mediumGrey4D,
        fontSize: 14,
        marginTop: 16,
        marginBottom: 11,
        lineHeight: 18,
    },
});
