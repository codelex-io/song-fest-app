import React from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '@styles';
import { StyleType } from '@domain/AnyType';
import { Item } from '../types';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

interface Props {
   loading: boolean;
   items: Item[];
   goToArticle: (item: Item) => void;
   onFavorite: (item: Item) => void;
   onShare: (item: Item) => void;
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
}) => (
      <AnimatedFlatlist<Item>
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
         renderItem={({ item, index }: { item: Item; index: number }): React.ReactElement => {
            let lastCardAddedPadding: StyleType | undefined = undefined;
            if (index === items.length - 1) {
               lastCardAddedPadding = { paddingBottom: headerHeight };
            }
            return (
               <Text>{item.title}</Text>
            )
            // return (
            //    <Card
            //       item={item}
            //       backgroundColor={colors.findColorByIndex(index)}
            //       goToArticle={() => goToArticle(item)}
            //       onFavourite={() => onFavourite(item)}
            //       onShare={() => onShare(item)}
            //       propStyles={lastCardAddedPadding}
            //    />
            // );
         }}
      />
   );

export default FlatListComponent;
