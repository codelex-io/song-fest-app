import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '@styles';
import { StyleType } from '@domain/AnyType';
import { Item } from '../types';
import SingleItem from './SingleItem';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

interface Props {
    loading: boolean;
    items: Item[];
    goToArticle: (item: Item) => void;
    onFavorite: (item: Item) => void;
    onShare: (item: Item) => void;
    goToMap: (item: Item) => void;
    onRefresh: () => void;
    refreshing: () => boolean;
    animatedScrollOffset: Animated.Value<number>;
    headerHeight: number;
}

const FlatListComponent: React.FC<Props> = ({
    items,
    goToArticle,
    onFavorite,
    onShare,
    loading,
    onRefresh,
    animatedScrollOffset,
    headerHeight,
    goToMap,
}) => {
    return (
        <AnimatedFlatlist<Item>
            style={{ paddingTop: headerHeight }}
            scrollEventThrottle={16}
            bouncing="false"
            horizontal={false}
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
                    enabled
                    onRefresh={onRefresh}
                    refreshing={loading}
                    colors={[colors.randomColor()]}
                    tintColor={colors.randomColor()}
                    progressViewOffset={headerHeight}
                />
            }
            data={items}
            renderItem={({ item, index }: { item: Item; index: number }): React.ReactElement => {
                let lastCardAddedPadding: StyleType | undefined = undefined;
                if (index === items.length - 1) {
                    lastCardAddedPadding = { paddingBottom: headerHeight };
                }
                return (
                    <SingleItem
                        item={item}
                        backgroundColor={colors.findColorByIndex(index)}
                        goToArticle={() => goToArticle(item)}
                        onFavorite={() => onFavorite(item)}
                        onShare={() => onShare(item)}
                        goToMap={() => goToMap(item)}
                        propStyles={lastCardAddedPadding}
                    />
                );
            }}
        />
    );
};
export default FlatListComponent;
