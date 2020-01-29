import React from 'react';
import Markdown from 'react-native-markdown-display';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SimpleHeader, IconType } from '@components';
import { typography, colors } from '@styles';
import { Label } from './Label';
import BackButton from './BackButton';

interface MarkdownEvenProps {
    data: Data[];
}

export default class MarkdownEvent extends React.Component<MarkdownEvenProps> {
    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <SimpleHeader title={' '} />
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.title}> {title}</Text>
                    </View>
                    <View>
                        <Text style={styles.place}> {location}</Text>
                    </View>
                    <View style={styles.timeDateContainer}>
                        <Label iconType={IconType.Calendar} title={date} />
                        <Label iconType={IconType.Clock} title={time} />
                    </View>

                    <View>
                        <Markdown>{content}</Markdown>
                    </View>
                    <BackButton />
                </ScrollView>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flex: 1,
        height: 56,
        justifyContent: 'flex-start',
        textAlign: 'left',
        flexDirection: 'column',
    },
    header: {
        height: 50,
        alignItems: 'stretch',
    },
    timeDateContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontFamily: typography.bold,
    },
    place: {
        color: colors.mediumGrey4D,
    },
    timeDate: {

    },
});