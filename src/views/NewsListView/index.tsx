import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { default as NewsListViewComponent } from './component/index';
import { FETCH_NEWS_ITEMS } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem, Variables } from './graphql/types';
import { NewsItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite } from '@domain/favourites/types';
import { open } from '@domain/share';
import { LocalizationContext } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import FeedLayout from '@components/layouts/FeedLayout';
import { Header, LongSearch } from '@components';
import { colors } from '@styles';
import { SearchInterface } from '@components/headers/SearchHeader';

const toItem = (item: GraphQLNewsItem, isFavourite: (fav: Favourite) => boolean): NewsItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'NEWS' }) };
};

export const NewsListViewIndex: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    const [currentSearch, setCurrentSearch] = useState<SearchInterface>({ payload: '', isActive: false });
    const { loading, data, refetch } = useQuery<Data, Variables>(FETCH_NEWS_ITEMS, {
        variables: { searchBy: currentSearch.payload, first: 10 },
    });

    const { toggleFavourite, isFavourite } = useFavourites();

    const items = loading || !data ? [] : data.items.map(it => toItem(it, isFavourite));

    useEffect(() => {
        if (route.params) {
            setCurrentSearch({ payload: route.params.payload, isActive: true });
        }
    }, [route]);

    useEffect(() => {
        refetch();
    }, [currentSearch.payload]);

    const { translations } = useContext(LocalizationContext);

    return (
        <FeedLayout
            header={resetHeader => (
                <View>
                    <Header title={translations.getString('NEWS')} navigation={navigation} />
                    <LongSearch
                        backgroundColor={colors.blue}
                        onPress={() => {
                            navigation.navigate('Search', { color: colors.blue });
                            resetHeader();
                        }}
                        searchInput={currentSearch.payload}
                        onResetSearch={() => {
                            setCurrentSearch({
                                payload: '',
                                isActive: false,
                            });
                            refetch();
                        }}
                    />
                </View>
            )}
            loading={loading || !data}
            empty={items.length === 0 && currentSearch.isActive}
        >
            {(resetHeader, headerHeight, animatedScrollOffset) => (
                <NewsListViewComponent
                    loading={loading}
                    items={items}
                    onNavigate={item => navigation.navigate('Article', { itemId: item.id, group: 'NEWS' })}
                    onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'NEWS' })}
                    onShare={item => open(item.link)}
                    onRefresh={() => {
                        refetch();
                        resetHeader();
                    }}
                    refreshing={() => !loading}
                    animatedScrollOffset={animatedScrollOffset}
                    headerHeight={headerHeight}
                />
            )}
        </FeedLayout>
    );
};
