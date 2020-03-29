import React, { useState } from 'react';
import { View } from 'react-native';
import { LongSearch, Header } from '@components';
import FeedLayout from '@components/layouts/FeedLayout';
import { SearchInterface } from '@components/headers/SearchHeader';
import { colors } from '@styles';
import { Item } from '../types';
import FlatListComponent from './FlatListComponent';
import { FeedRootName } from '@navigation/stacks/SharedStack';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { TimeSelector, filterByDate } from '@domain/filters';
import { ResultsState } from '@components/Empty';
import { isFiltering } from '@domain/filters/isFiltering';

const FILTER_OPTIONS: ViewsHeaderFilterOption[] = [
    { key: 'today', title: 'TODAY', default: false },
    { key: 'tomorrow', title: 'TOMORROW', default: false },
    { key: 'this-week', title: 'THIS_WEEK', default: false },
    { key: 'all', title: 'OTHERS', default: true },
];

interface NewsComponentProps {
    rootName: FeedRootName;
    items: Item[];
    headerTitle: string;
    goToUserSettings: () => void;
    goToFavorites: () => void;
    onPressSearch: (color: string) => void;
    searchState: SearchInterface;
    onResetSearch: () => void;
    loading: boolean;
    goToArticle: (item: Item) => void;
    onFavorite: (item: Item) => void;
    onShare: (item: Item) => void;
    refresh: () => void;
    goToMap: (item: Item) => void;
}
const Component: React.FC<NewsComponentProps> = ({
    rootName,
    items,
    headerTitle,
    goToUserSettings,
    goToFavorites,
    onPressSearch,
    searchState,
    onResetSearch,
    loading,
    goToArticle,
    onFavorite,
    onShare,
    refresh,
    goToMap,
}) => {
    const [activeKey, setActiveKey] = useState<TimeSelector>('all');

    if (rootName === 'EVENTS') {
        items = filterByDate(items, activeKey);
    }

    let resultsState: ResultsState = 'SUCCESS';
    if (searchState.payload && searchState.isActive && items.length === 0) {
        resultsState = 'NOTHING_FOUND';
    } else if (isFiltering(FILTER_OPTIONS, activeKey) && items.length === 0) {
        resultsState = 'NOTHING_FILTERED';
    }

    return (
        <FeedLayout
            rootName={rootName}
            header={resetHeader => (
                <View>
                    <Header title={headerTitle} onButton1={goToUserSettings} onButton2={goToFavorites} />
                    <LongSearch
                        backgroundColor={colors.blue}
                        onPress={() => {
                            onPressSearch(colors.blue);
                            resetHeader();
                        }}
                        searchInput={searchState.payload}
                        onResetSearch={onResetSearch}
                    />
                    {rootName === 'EVENTS' && (
                        <ViewsHeaderFilter
                            activeKey={activeKey}
                            onPress={key => {
                                setActiveKey(key as TimeSelector);
                                resetHeader();
                            }}
                            options={FILTER_OPTIONS}
                        />
                    )}
                </View>
            )}
            loading={loading}
            resultsState={resultsState}
        >
            {(resetHeader, headerHeight, animatedScrollOffset) => (
                <FlatListComponent
                    {...{
                        items,
                        goToArticle,
                        onFavorite,
                        onShare,
                        loading,
                        animatedScrollOffset,
                        headerHeight,
                        goToMap,
                    }}
                    onRefresh={() => {
                        refresh();
                        resetHeader();
                    }}
                    refreshing={() => !loading}
                />
            )}
        </FeedLayout>
    );
};

export default Component;
