import React from 'react';
import { NewsItem } from '../types';
import { FlatList, RefreshControl } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '@styles';
import Card from './Card';
import { StyleType } from '@domain/AnyType';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

interface Props {
    loading: boolean;
    items: NewsItem[];
    onNavigate: (item: NewsItem) => void;
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
    onRefresh: () => void;
    refreshing: () => boolean;
    animatedScrollOffset: Animated.Value<number>;
    headerHeight: number;
}

const NewsListView: React.FC<Props> = ({
    items,
    onNavigate,
    onFavourite,
    onShare,
    loading,
    onRefresh,
    animatedScrollOffset,
    headerHeight,
}) => (
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
        renderItem={({ item, index }: { item: NewsItem; index: number }): React.ReactElement => {
            let lastCardAddedPadding: StyleType | undefined = undefined;
            if (index === items.length - 1) {
                lastCardAddedPadding = { paddingBottom: headerHeight };
            }

            return (
                <Card
                    item={item}
                    backgroundColor={colors.findColorByIndex(index)}
                    onNavigate={() => onNavigate(item)}
                    onFavourite={() => onFavourite(item)}
                    onShare={() => onShare(item)}
                    propStyles={lastCardAddedPadding}
                />
            );
        }}
    />
);

export default NewsListView;
