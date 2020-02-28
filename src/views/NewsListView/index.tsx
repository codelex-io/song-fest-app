import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { default as NewsListViewComponent } from './component/index';
import { FETCH_NEWS_ITEMS, FETCH_NEWS_ALL_ITEMS } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem } from './graphql/types';
import { NewsItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite } from '@domain/favourites/types';
import { View } from 'react-native';
import { open } from '@domain/share';
import { FilterButtons } from '@components';
import { colors } from '@styles';
import { useNavigation } from '@react-navigation/native';

const toItem = (item: GraphQLNewsItem, isFavourite: (fav: Favourite) => boolean): NewsItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'NEWS' }) };
};

export interface Variables {
    first: number;
}

export const NewsListViewIndex: React.FC = () => {
    const [query, setQuery] = useState(FETCH_NEWS_ITEMS);

    const { loading, data, refetch } = useQuery<Data, Variables>(query, {
        variables: { first: 10 },
    });

    const handleCurrentFilter = (isFirstActive: boolean) => {
        if (isFirstActive) {
            setQuery(FETCH_NEWS_ITEMS);
            refetch();
        } else {
            setQuery(FETCH_NEWS_ALL_ITEMS);
            refetch();
        }
    };

    const { toggleFavourite, isFavourite } = useFavourites();
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: colors.white }}>
            <FilterButtons firstTitle="AKTUĀLI" secondTitle="VISI" currentActive={handleCurrentFilter} />
            <NewsListViewComponent
                loading={loading}
                items={loading || !data ? [] : data.items.map(it => toItem(it, isFavourite))}
                onNavigate={item => navigation.navigate('SingleNews', { itemId: item.id })}
                onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'NEWS' })}
                onShare={item => open(item.link)}
            />
        </View>
    );
};
