import React, { useContext } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '@styles';
import { TimeSelector } from '@domain';
import { Card } from './Card';
import { EventItem } from '../types';
import { LongSearch, Header } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedStackParamsList } from 'src/navigation/stacks/SharedStack';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { SearchInterface } from '@components/headers/SearchHeader';
import FeedLayout from '@components/layers/FeedLayout';
import { StyleType } from '@domain/AnyType';

const FILTER_OPTIONS: ViewsHeaderFilterOption[] = [
    { key: 'today', title: 'TODAY' },
    { key: 'tomorrow', title: 'TOMORROW' },
    { key: 'this-week', title: 'THIS_WEEK' },
    { key: 'all', title: 'OTHERS' },
];

interface Props {
    loading: boolean;
    items: EventItem[];
    onReadMore: (item: EventItem) => void;
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
    activeKey: TimeSelector;
    onPress: (key: string) => void;
    onSearch: (color: string) => void;
    searchInput: SearchInterface;
    onResetSearch: () => void;
    onShare: (item: EventItem) => void;
    onRefresh: () => void;
    refreshing: () => boolean;
    navigation: StackNavigationProp<
        SharedStackParamsList,
        'Feed' | 'Favorites' | 'Article' | 'Search' | 'UserSettings'
    >;
}

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const EventListComponent: React.FC<Props> = ({
    loading,
    items,
    onFavourite,
    onNavigate,
    activeKey,
    onPress,
    onSearch,
    searchInput,
    onResetSearch,
    onReadMore,
    onShare,
    onRefresh,
    navigation,
}) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <FeedLayout
            header={resetHeader => (
                <View>
                    <Header title={translations.getString('EVENTS')} navigation={navigation} />
                    <LongSearch
                        backgroundColor={colors.blue}
                        onPress={() => {
                            onSearch(colors.blue);
                            resetHeader();
                        }}
                        searchInput={searchInput.payload}
                        onResetSearch={onResetSearch}
                        customStyles={styles.longSearch}
                    />
                    <ViewsHeaderFilter
                        activeKey={activeKey}
                        onPress={key => {
                            onPress(key);
                            resetHeader();
                        }}
                        options={FILTER_OPTIONS}
                    />
                </View>
            )}
            loading={loading}
            empty={items.length === 0 && searchInput.isActive}
        >
            {(_resetHeader, headerHeight, animatedScrollOffset) => (
                <AnimatedFlatlist<EventItem>
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
                    renderItem={({ item, index }: { item: EventItem; index: number }): React.ReactElement => {
                        let lastCardAddedPadding: StyleType | undefined = undefined;
                        if (index === items.length - 1) {
                            lastCardAddedPadding = { paddingBottom: headerHeight };
                        }
                        return (
                            <Card
                                item={item}
                                backgroundColor={colors.findColorByIndex(index)}
                                onFavourite={() => onFavourite(item)}
                                onNavigate={() => onNavigate(item)}
                                onReadMore={() => onReadMore(item)}
                                onShare={() => onShare(item)}
                                propStyles={lastCardAddedPadding}
                            />
                        );
                    }}
                />
            )}
        </FeedLayout>
    );
};

const styles = StyleSheet.create({
    longSearch: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
});

export default EventListComponent;
