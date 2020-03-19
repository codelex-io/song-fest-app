import React, { ReactNode } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Loading } from '@components';

interface FeedLayerProps {
    header: ReactNode;
    children: ReactNode | ReactNode[];
    animatedScrollOffset: Animated.Value<0>;
    loading: boolean;
}

const FeedLayout: React.FC<FeedLayerProps> = ({ header, children, animatedScrollOffset, loading }) => {
    const diffClampScrollY = Animated.diffClamp(animatedScrollOffset, 0, 126);

    const headerInterpolation = Animated.interpolate(diffClampScrollY, {
        inputRange: [0, 126],
        outputRange: [0, -126],
    });

    const contentInterpolation = Animated.interpolate(diffClampScrollY, {
        inputRange: [0, 126],
        outputRange: [126, 0],
    });

    const animatedHeaderStyles = {
        transform: [{ translateY: headerInterpolation }],
    };

    const animatedContentStyles = {
        paddingTop: contentInterpolation,
    };

    return (
        <Animated.View style={[styles.container, animatedContentStyles]}>
            <StatusBar />

            <Animated.View style={[styles.header, animatedHeaderStyles]}>{header}</Animated.View>

            {loading ? <Loading /> : <View style={styles.content}>{children}</View>}
        </Animated.View>
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
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
