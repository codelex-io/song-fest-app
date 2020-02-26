import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { IconType } from '@components';
import { Card } from './Card';
import { colors } from '@styles';

interface Props {
    navigate: (route: string) => void;
}

const MoreView: React.FC<Props> = ({ navigate }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 16 }}>
                <View style={styles.rowContainer}>
                    <Card
                        title={'Sponsoru piedāvājums'}
                        icon={IconType.Gift}
                        backgroundColor={colors.green}
                        onOpen={() => navigate('')}
                    />
                    <Card
                        title={'Svarīgi \n zināt'}
                        icon={IconType.Alert}
                        backgroundColor={colors.blue}
                        onOpen={() => navigate('')}
                    />
                    <Card
                        title={'Biežākie jautājumi'}
                        icon={IconType.HelpCircle}
                        backgroundColor={colors.lightBlue}
                        onOpen={() => navigate('')}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Card
                        title={'Transports pasākumā'}
                        icon={IconType.Bus}
                        backgroundColor={colors.purple}
                        onOpen={() => navigate('')}
                    />
                    <Card
                        title={'Svētku info centrs'}
                        icon={IconType.Information}
                        backgroundColor={colors.orange}
                        onOpen={() => navigate('')}
                    />
                    <Card
                        title={'Akcija \n Zaļā pēda'}
                        icon={IconType.PineTreeBox}
                        backgroundColor={colors.green}
                        onOpen={() => navigate('')}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Card
                        title={'Svētku noteikumi'}
                        icon={IconType.FileDocumentBox}
                        backgroundColor={colors.blue}
                        onOpen={() => navigate('')}
                    />
                    <Card
                        title={'Informācija par kontaktiem'}
                        icon={IconType.Phone}
                        backgroundColor={colors.lightBlue}
                        onOpen={() => navigate('')}
                    />
                    <Card
                        title={'Lietotāja iestatījumi'}
                        icon={IconType.Settings}
                        backgroundColor={colors.purple}
                        onOpen={() => navigate('Settings')}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Card
                        title={'Saturs\n vecākiem'}
                        icon={IconType.Parent}
                        backgroundColor={colors.green}
                        onOpen={() => navigate('')}
                    />
                    <Card
                        title={'Valoda'}
                        icon={IconType.Settings}
                        backgroundColor={colors.blue}
                        onOpen={() => navigate('Language')}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

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

export default MoreView;
