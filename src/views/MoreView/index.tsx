import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { Card } from './Card';
import { colors } from '@styles';

export default class MoreView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Card title={'Sponsoru piedāvājums'} icon={IconType.Gift} backgroundColor={colors.green} />
                    <Card title={'Svarīgi \n zināt'} icon={IconType.Alert} backgroundColor={colors.blue} />
                    <Card title={'Biežākie jautājumi'} icon={IconType.HelpCircle} backgroundColor={colors.lightBlue} />
                </View>
                <View style={styles.rowContainer}>
                    <Card title={'Transports pasākumā'} icon={IconType.Bus} backgroundColor={colors.purple} />
                    <Card title={'Svētku info centrs'} icon={IconType.Information} backgroundColor={colors.orange} />
                    <Card title={'Akcija \n Zaļā pēda'} icon={IconType.PineTreeBox} backgroundColor={colors.green} />
                </View>
                <View style={styles.rowContainer}>
                    <Card title={'Svētku noteikumi'} icon={IconType.FileDocumentBox} backgroundColor={colors.blue} />
                    <Card
                        title={'Informācija par kontaktiem'}
                        icon={IconType.Phone}
                        backgroundColor={colors.lightBlue}
                    />
                    <Card title={'Lietotāja iestatījumi'} icon={IconType.Settings} backgroundColor={colors.purple} />
                </View>
                <View style={styles.rowContainer}>
                    <Card title={'Saturs\n vecākiem'} icon={IconType.Parent} backgroundColor={colors.green} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 24,
    },
});
