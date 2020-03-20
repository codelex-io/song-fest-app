import React, { useContext, useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '@styles';
import { TimeSelector } from '@domain';
import { Card } from './Card';
import { EventItem } from '../types';
import { LongSearch, Empty, Header } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedStackParamsList } from 'src/navigation/stacks/SharedStack';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { SearchInterface } from '@components/headers/SearchHeader';
import FeedLayout from '@components/layers/FeedLayout';

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

    const [animatedScrollOffset] = useState(new Animated.Value(0));
    const [headerHeightMeasure, setHeaderHeightMeasure] = useState<number>(182.09524536132812);

    useEffect(() => {
        animatedScrollOffset.setValue(0);
    }, []);

    return (
        <FeedLayout
            header={
                <View onLayout={event => setHeaderHeightMeasure(event.nativeEvent.layout.height)}>
                    <Header title={translations.getString('EVENTS')} navigation={navigation} />
                    <LongSearch
                        backgroundColor={colors.blue}
                        onPress={() => onSearch(colors.blue)}
                        searchInput={searchInput.payload}
                        onResetSearch={() => onResetSearch()}
                        customStyles={styles.longSearch}
                    />
                    <ViewsHeaderFilter activeKey={activeKey} onPress={onPress} options={FILTER_OPTIONS} />
                </View>
            }
            loading={loading}
            animatedScrollOffset={animatedScrollOffset}
            headerHeightMeasure={headerHeightMeasure}
        >
            {items.length === 0 && searchInput.isActive ? (
                <View style={[styles.container, { paddingTop: headerHeightMeasure }]}>
                    <Empty />
                </View>
            ) : (
                <AnimatedFlatlist<EventItem>
                    style={{ paddingTop: headerHeightMeasure }}
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
                            progressViewOffset={headerHeightMeasure}
                        />
                    }
                    data={items}
                    renderItem={({ item, index }: { item: EventItem; index: number }): React.ReactElement => (
                        <Card
                            item={item}
                            backgroundColor={colors.findColorByIndex(index)}
                            onFavourite={() => onFavourite(item)}
                            onNavigate={() => onNavigate(item)}
                            onReadMore={() => onReadMore(item)}
                            onShare={() => onShare(item)}
                        />
                    )}
                />
            )}
        </FeedLayout>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    longSearch: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    searchContainerButton: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 8,
        paddingBottom: 16,
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EventListComponent;
