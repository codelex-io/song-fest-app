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

interface State {
    currentHeight: number;
    buttonUp: boolean;
    scrollEnabled: boolean;
}

export default class MarkdownEvent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentHeight: 0,
            buttonUp: false,
            scrollEnabled: false,
        };
    }
    scroll = React.createRef<ScrollView>();
    scrollTo = () => {
        this.scroll.current?.scrollTo({ x: 0, y: 0, animated: true });
    };

    updateButton() {
        if (this.state.currentHeight > 500) {
            this.setState({ buttonUp: true });
            this.setState({ scrollEnabled: true });
        }
    }

    updateHeight(height: number) {
        this.setState({ currentHeight: height });
    }

    componentDidUpdate(prevProps: Props, prevState: State): void {
        if (prevState.currentHeight !== this.state.currentHeight) {
            this.updateButton();
        }
    }
    render() {
        const { item, onFavourite, onShare } = this.props;
        return (
            <View>
                <ScrollView
                    ref={this.scroll}
                    style={{ paddingHorizontal: 16 }}
                    onContentSizeChange={(width, height) => {
                        this.updateHeight(height);
                    }}
                    scrollEnabled={this.state.scrollEnabled}
                >
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: item.image?.url }} resizeMode="cover" />
                    </View>
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.timeDateContainer}>
                        <Label iconType={IconType.Calendar} title={dateTimeUtils.formatDateOpen(item.date)} />
                    </View>
                    <View style={styles.row}>
                        <IconButtons
                            onShare={() => onShare(item)}
                            onFavourite={() => onFavourite(item)}
                            onNavigate={() => null}
                        />
                    </View>
                    <View style={styles.markdownContainer}>
                        <Markdown style={markdownstyles}>{item.content}</Markdown>
                    </View>
                    {this.state.buttonUp ? <BackButton onPress={this.scrollTo} /> : null}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 56,
        justifyContent: 'flex-start',
        textAlign: 'left',
        flexDirection: 'column',
        backgroundColor: colors.white,
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
