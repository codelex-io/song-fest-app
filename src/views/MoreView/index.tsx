import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { IconType } from '@components';
import { Card } from './Card';
import { colors } from '@styles';
import { useNavigation } from '@react-navigation/native';

export default class MoreView extends React.Component {
    navigation = useNavigation();

    render() {
        const openHandler = (route: string) => {
            this.navigation.navigate(route);
        };

        return (
            <View style={styles.container}>
                <ScrollView style={{ paddingHorizontal: 16 }}>
                    <View style={styles.rowContainer}>
                        <Card
                            title={'Sponsoru piedāvājums'}
                            icon={IconType.Gift}
                            backgroundColor={colors.green}
                            onOpen={() => openHandler('')}
                        />
                        <Card
                            title={'Svarīgi \n zināt'}
                            icon={IconType.Alert}
                            backgroundColor={colors.blue}
                            onOpen={() => openHandler('')}
                        />
                        <Card
                            title={'Biežākie jautājumi'}
                            icon={IconType.HelpCircle}
                            backgroundColor={colors.lightBlue}
                            onOpen={() => openHandler('')}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <Card
                            title={'Transports pasākumā'}
                            icon={IconType.Bus}
                            backgroundColor={colors.purple}
                            onOpen={() => openHandler('')}
                        />
                        <Card
                            title={'Svētku info centrs'}
                            icon={IconType.Information}
                            backgroundColor={colors.orange}
                            onOpen={() => openHandler('')}
                        />
                        <Card
                            title={'Akcija \n Zaļā pēda'}
                            icon={IconType.PineTreeBox}
                            backgroundColor={colors.green}
                            onOpen={() => openHandler('')}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <Card
                            title={'Svētku noteikumi'}
                            icon={IconType.FileDocumentBox}
                            backgroundColor={colors.blue}
                            onOpen={() => openHandler('')}
                        />
                        <Card
                            title={'Informācija par kontaktiem'}
                            icon={IconType.Phone}
                            backgroundColor={colors.lightBlue}
                            onOpen={() => openHandler('')}
                        />
                        <Card
                            title={'Lietotāja iestatījumi'}
                            icon={IconType.Settings}
                            backgroundColor={colors.purple}
                            onOpen={() => openHandler('Settings')}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <Card
                            title={'Saturs\n vecākiem'}
                            icon={IconType.Parent}
                            backgroundColor={colors.green}
                            onOpen={() => openHandler('')}
                        />
                        <Card
                            title={'Valoda'}
                            icon={IconType.Settings}
                            backgroundColor={colors.blue}
                            onOpen={() => openHandler('Language')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        paddingVertical: 16,
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 24,
        justifyContent: 'space-between',
    },
});
