import React, { useState, useEffect, useRef } from 'react';
import Markdown from 'react-native-markdown-display';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { typography, colors } from '@styles';
import BackButton from './BackButton';
import { IconButtons } from './IconButtons';
import { NewsItem } from '../types';
import { dateTimeUtils } from '@utils';
import { Image } from '@components';

interface Props {
    item: NewsItem;
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
}

const MarkdownEvent: React.FC<Props> = ({ item, onFavourite, onShare }) => {
    const scroll = useRef<ScrollView>(null);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [parentHeight, setParentHeight] = useState<number | undefined>(undefined);
    const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

    const [showButtonUp, setShowButtonUp] = useState(false);

    useEffect(() => {
        if (contentHeight && parentHeight) {
            if (parentHeight >= contentHeight) {
                setScrollEnabled(false);
            }
        }
    }, [parentHeight, contentHeight]);

    const handleOnScroll = (scrollYPosition: number) => {
        if (scrollYPosition >= 150) {
            setShowButtonUp(true);
        } else {
            setShowButtonUp(false);
        }
    };

    const scrollTop = () => {
        scroll.current?.scrollTo({ x: 0, y: 0, animated: true });
    };

    return (
        <View style={styles.parentContainer}>
            <ScrollView
                scrollEventThrottle={0}
                style={styles.scrollContainer}
                ref={scroll}
                onLayout={event => setParentHeight(event.nativeEvent.layout.height)}
                scrollEnabled={scrollEnabled}
                onScroll={event => handleOnScroll(event.nativeEvent.contentOffset.y)}
            >
                <View style={styles.content} onLayout={event => setContentHeight(event.nativeEvent.layout.height)}>
                    <View style={styles.imageContainer}>
                        <Image height={180} source={{ uri: item.image?.url }} style={styles.image} />
                    </View>

                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>

                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>Ievietots {dateTimeUtils.formatDate(item.date)} </Text>
                    </View>

                    <View style={styles.row}>
                        <IconButtons
                            onShare={() => onShare(item)}
                            isFavourite={item.isFavourite}
                            onFavourite={() => onFavourite(item)}
                        />
                    </View>

                    {item.content && (
                        <View>
                            <Markdown style={markdownstyles}>{item.content}</Markdown>
                        </View>
                    )}
                </View>
            </ScrollView>

            <BackButton onPress={scrollTop} isVisible={showButtonUp} parentHeight={parentHeight} />
        </View>
    );
};

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        width: '100%',
    },
    scrollContainer: {
        width: '100%',
    },
    content: {
        paddingBottom: 76,
        marginHorizontal: 16,
    },
    dateContainer: {
        paddingBottom: 12,
        paddingTop: 8,
    },
    title: {
        fontSize: 20,
        fontFamily: typography.bold,
        paddingTop: 16,
    },
    place: {
        color: colors.mediumGrey4D,
    },
    imageContainer: {
        height: 180,
    },
    image: {
        width: '100%',
        height: 180,
    },
    row: {
        flexDirection: 'row',
    },
    date: {
        fontSize: 14,
        color: colors.mediumGrey4D,
    },
});

const markdownstyles = StyleSheet.create({
    text: {
        fontFamily: typography.normal,
        fontSize: 16,
        lineHeight: 18,
    },
});

export default MarkdownEvent;
