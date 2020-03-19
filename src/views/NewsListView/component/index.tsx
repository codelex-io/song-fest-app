import React, { useState, useEffect } from 'react';
import { NewsItem } from '../types';
import { FlatList, RefreshControl } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '@styles';
import Card from './Card';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

interface Props {
    loading: boolean;
    items: NewsItem[];
    onNavigate: (item: NewsItem) => void;
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
    onRefresh: () => void;
    refreshing: () => boolean;
    animatedScrollOffset: Animated.Value<0>;
    headerHeightMeasure: number | undefined;
}

const NewsListView: React.FC<Props> = ({
    items,
    onNavigate,
    onFavourite,
    onShare,
    loading,
    onRefresh,
    animatedScrollOffset,
    headerHeightMeasure,
}) => {
    const [headerHeight, setHeaderHeight] = useState<number>(126);

    useEffect(() => {
        if (headerHeightMeasure) {
            setHeaderHeight(headerHeightMeasure);
        }
    }, [headerHeightMeasure]);

    return (
        <AnimatedFlatlist<NewsItem>
            style={{ paddingTop: headerHeight }}
            alwaysBounce={false}
            alwaysBounceVertical={false}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: animatedScrollOffset,
                            },
                        },
                    },
                ],
                { useNativeDriver: true },
            )}
            refreshControl={
                <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={loading}
                    colors={[colors.randomColor()]}
                    tintColor={colors.randomColor()}
                    progressViewOffset={headerHeight}
                />
            }
            data={items}
            renderItem={({ item, index }: { item: NewsItem; index: number }): React.ReactElement => (
                <Card
                    item={item}
                    backgroundColor={colors.findColorByIndex(index)}
                    onNavigate={() => onNavigate(item)}
                    onFavourite={() => onFavourite(item)}
                    onShare={() => onShare(item)}
                />
            )}
        />
    );
};

export default NewsListView;
