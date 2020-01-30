import React from 'react';
import Markdown from 'react-native-markdown-display';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SimpleHeader, IconType } from '@components';
import { typography, colors } from '@styles';
import { Label } from './Label';
import BackButton from './BackButton';
import { Data } from './types';
import { IconButtons } from './IconButtons';

interface MarkdownEvenProps {
    data: Data;
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
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: data.imageUrl }} resizeMode="cover" />
                    </View>
                    <View>
                        <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.place}> {data.location}</Text>
                    </View>
                    <View style={styles.timeDateContainer}>
                        <Label iconType={IconType.Calendar} title={data.date} />
                        <Label iconType={IconType.Clock} title={data.time} />
                    </View>
                    <View style={styles.row}>
                        <IconButtons onShare={() => null} onFavourite={() => null} onNavigate={() => null} />
                    </View>
                    <View style={styles.markdownContainer}>
                        <Markdown style={markdownstyles}>{data.content}</Markdown>
                    </View>
                    <BackButton />
                </ScrollView>
            </View>
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
    timeDate: {},
    imageContainer: {
        height: 180,
    },
    image: {
        width: '100%',
        height: 180,
    },
    markdownContainer: {},
    row: {
        flexDirection: 'row',
    },
});

const markdownstyles = StyleSheet.create({
    text: {
        fontFamily: typography.normal,
        fontSize: 16,
    },
});
