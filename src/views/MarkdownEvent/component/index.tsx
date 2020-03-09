import React from 'react';
import Markdown from 'react-native-markdown-display';
import { View, Text, StyleSheet, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { typography, colors } from '@styles';
import BackButton from './BackButton';
import { IconButtons } from './IconButtons';
import { NewsItem } from '../types';
import { dateTimeUtils } from '@utils';
import { Image } from '@components';

interface Props {
    loading: boolean;
    item: NewsItem;
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
}

interface State {
    currentHeight: number;
    buttonUp: boolean;
    scrollEnabled: boolean;
    currentPosition: number;
}

export default class MarkdownEvent extends React.PureComponent<Props, State> {
    scroll = React.createRef<ScrollView>();

    constructor(props: Props) {
        super(props);
        this.state = {
            currentHeight: 0,
            buttonUp: false,
            scrollEnabled: false,
            currentPosition: 0,
        };
    }

    scrollTo = () => {
        this.scroll.current?.scrollTo({ x: 0, y: 0, animated: true });
    };

    updateScroll() {
        if (this.state.currentHeight > 500) {
            this.setState({ scrollEnabled: true });
        }
    }

    updatePosition(event: NativeSyntheticEvent<NativeScrollEvent>) {
        this.setState({ currentPosition: event.nativeEvent.contentOffset.y });
    }

    updateHeight(height: number) {
        this.setState({ currentHeight: height });
    }

    componentDidUpdate(prevProps: Props, prevState: State): void {
        if (prevState.currentHeight !== this.state.currentHeight) {
            this.updateScroll();
        }

        if (this.state.currentPosition > 100) {
            this.setState({ buttonUp: true });
        } else {
            this.setState({ buttonUp: false });
        }
    }

    render() {
        const { item, onFavourite, onShare } = this.props;
        return (
            <View style={{ backgroundColor: colors.white, flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                <ScrollView
                    ref={this.scroll}
                    style={{ paddingHorizontal: 16 }}
                    onContentSizeChange={(width, height) => {
                        this.updateHeight(height);
                    }}
                    scrollEnabled={this.state.scrollEnabled}
                    onScroll={event => {
                        this.updatePosition(event);
                    }}
                >
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
                        <IconButtons onShare={() => onShare(item)} onFavourite={() => onFavourite(item)} />
                    </View>
                    <View style={{ marginBottom: 64 }}>
                        <Markdown style={markdownstyles}>{item.content}</Markdown>
                    </View>
                </ScrollView>
                {this.state.buttonUp ? <BackButton onPress={this.scrollTo} /> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
