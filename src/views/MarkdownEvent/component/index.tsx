import React from 'react';
import Markdown from 'react-native-markdown-display';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { IconType } from '@components';
import { typography, colors } from '@styles';
import { Label } from './Label';
import BackButton from './BackButton';
import { IconButtons } from './IconButtons';
import { NewsItem } from '../types';
import { dateTimeUtils } from '@utils';

interface Props {
    loading: boolean;
    item: NewsItem;
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
}

export const MarkdownEvent: React.FC<Props> = ({ item, onFavourite, onShare }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item.image?.url }} resizeMode="cover" />
                </View>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.timeDateContainer}>
                    <Label iconType={IconType.Calendar} title={dateTimeUtils.formatDate(item.date)} />
                </View>
                <View style={styles.row}>
                    <IconButtons onShare={() => onShare(item)} onFavourite={() => onFavourite(item)} onNavigate={() => null} />
                </View>
                {<View style={styles.markdownContainer}>
                    <Markdown style={markdownstyles}>{item.content}</Markdown>
                </View>}
                <BackButton />
            </ScrollView>
        </View>
    );
};

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
