import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { default as NewsListViewComponent } from './component/index';
import { FETCH_NEWS_ITEMS } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem } from './graphql/types';
import { NewsItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite } from '@domain/favourites/types';
import { View, ActivityIndicator } from 'react-native';
import { open } from '@domain/share';
import { FilterButtons } from '@components';
import { colors } from '@styles';
import { useNavigation } from '@react-navigation/native';

const toItem = (item: GraphQLNewsItem, isFavourite: (fav: Favourite) => boolean): NewsItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'NEWS' }) };
};

export const NewsListViewIndex: React.FC = () => {
    const { loading, data } = useQuery<Data>(FETCH_NEWS_ITEMS);
    const { toggleFavourite, isFavourite } = useFavourites();
    const navigation = useNavigation();
    return loading ? (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
            <ActivityIndicator size="large" color={colors.orange} />
        </View>
    ) : (
        <View style={{ backgroundColor: colors.white }}>
            <FilterButtons
                buttons={[
                    { title: 'AKTUĀLI', active: true },
                    { title: 'VISI', active: false },
                ]}
            />
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
