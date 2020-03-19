import React, { ReactNode, useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Loading } from '@components';
import { colors } from '@styles';

interface FeedLayerProps {
    header: ReactNode;
    children: ReactNode | ReactNode[];
    animatedScrollOffset: Animated.Value<0>;
    loading: boolean;
    headerHeightMeasure: number | undefined;
}

const FeedLayout: React.FC<FeedLayerProps> = ({
    header,
    children,
    animatedScrollOffset,
    loading,
    headerHeightMeasure,
}) => {
    const [headerHeight, setHeaderHeight] = useState<number>(126);

    useEffect(() => {
        if (headerHeightMeasure) {
            setHeaderHeight(headerHeightMeasure);
        }
    }, [headerHeightMeasure]);

    const diffClampScrollY = Animated.diffClamp(animatedScrollOffset, 0, headerHeight);

    const headerInterpolation = Animated.interpolate(diffClampScrollY, {
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight],
    });

    const opacityInterpolation = Animated.interpolate(diffClampScrollY, {
        inputRange: [0, headerHeight],
        outputRange: [1, 0.5],
    });

    const animatedHeaderStyles = {
        transform: [{ translateY: headerInterpolation }],
        opacity: opacityInterpolation,
    };

    return (
        <View style={styles.container}>
            <StatusBar />

            {loading ? (
                <View style={[styles.content, { paddingTop: headerHeight }]}>
                    <Loading />
                </View>
            ) : (
                <View style={styles.content}>{children}</View>
            )}

            <Animated.View style={[styles.header, animatedHeaderStyles]}>{header}</Animated.View>
        </View>
    );
};

export default FeedLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
