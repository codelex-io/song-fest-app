import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { default as NewsListViewComponent } from './component/index';
import { FETCH_NEWS_ITEMS } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem } from './graphql/types';
import { NewsItem } from './types';
import { useFavourites, FavouritesContextProvider } from '@domain/favourites';
import { Favourite } from '@domain/favourites/types';
import NavigationAware from '../../navigation/NavigationAware';

const toItem = (item: GraphQLNewsItem, isFavourite: (fav: Favourite) => boolean): NewsItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'NEWS' }) };
};

const NewsListView: React.FC<NavigationAware> = ({ navigation }) => {
    const { loading, data } = useQuery<Data>(FETCH_NEWS_ITEMS);
    const { toggleFavourite, isFavourite } = useFavourites();
    return (
        <NewsListViewComponent
            navigation={navigation}
            loading={loading}
            items={loading || !data ? [] : data.items.map(it => toItem(it, isFavourite))}
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'NEWS' })}
        />
    );
};

export default ({ navigation }: NavigationAware) => (
    <FavouritesContextProvider>
        <NewsListView navigation={navigation} />
    </FavouritesContextProvider>
);
