import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Loading, Empty } from '@components';
import { colors } from '@styles';
import { statusBarHeight } from '@utils';
import { ResultsState } from '@components/Empty';

interface FeedHeaderHeight {
    [key: string]: {
        headerHeight: number;
    };
}
export const FEED_HEADER_HEIGHT: FeedHeaderHeight = {
    NEWS: {
        headerHeight: 148,
    },
    EVENTS: {
        headerHeight: 206,
    },
    VIDEO: {
        headerHeight: 206,
    },
    MAP: {
        headerHeight: 206,
    },
};

interface FeedLayerProps {
    header: (resetHeader: () => void) => JSX.Element | null;
    children: (
        resetHeader: () => void,
        headerHeight: number,
        animatedScrollOffset: Animated.Value<number>,
    ) => JSX.Element | null;
    loading: boolean;
    resultsState: ResultsState;
    routeName: string;
}

const FeedLayout: React.FC<FeedLayerProps> = ({ header, children, loading, resultsState, routeName }) => {
    const [headerHeight, setHeaderHeight] = useState(FEED_HEADER_HEIGHT[routeName].headerHeight);
    const [animatedScrollOffset] = useState(new Animated.Value(0));

    const resetHeader = () => {
        animatedScrollOffset.setValue(0);
    };

    const diffClampScrollY = Animated.diffClamp(animatedScrollOffset, 0, headerHeight);

    const headerInterpolation = Animated.interpolate(diffClampScrollY, {
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight],
    });

    const animatedHeaderStyles = {
        transform: [{ translateY: headerInterpolation }],
    };

    let viewState = <View style={styles.content}>{children(resetHeader, headerHeight, animatedScrollOffset)}</View>;

    if (loading) {
        viewState = (
            <View style={[styles.content, { paddingTop: headerHeight }]}>
                <Loading />
            </View>
        );
    }

    if (!loading && resultsState !== 'SUCCESS') {
        viewState = (
            <View style={[styles.content, { paddingTop: headerHeight }]}>
                <Empty resultsState={resultsState} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {viewState}
            <Animated.View
                onLayout={event => setHeaderHeight(event.nativeEvent.layout.height)}
                style={[styles.header, animatedHeaderStyles]}
            >
                {header(resetHeader)}
            </Animated.View>
        </View>
    );
};

export default FeedLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: colors.white,
        paddingTop: statusBarHeight(),
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {},
});
