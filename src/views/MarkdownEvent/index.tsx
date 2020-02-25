import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import MarkdownEvent from './component/index';
import { FETCH_TARGET_NEWS_ITEM } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem, Variables } from './graphql/types';
import { NewsItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite } from '@domain/favourites/types';
import { open } from '@domain/share';
import NavigationAware from '../../navigation/NavigationAware';
import { ActivityIndicator } from 'react-native';

const toItem = (item: GraphQLNewsItem, isFavourite: (fav: Favourite) => boolean): NewsItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'NEWS' }) };
};

const SingleView: React.FC<NavigationAware> = ({ navigation }) => {
    const id = navigation.getParam('newsItemId');
    const { loading, data } = useQuery<Data, Variables>(FETCH_TARGET_NEWS_ITEM, { variables: { id } });
    const { toggleFavourite, isFavourite } = useFavourites();

    if (loading || !data) {
        return <ActivityIndicator />;
    }

    const item = toItem(data.item, isFavourite);

    return (
        <MarkdownEvent
            loading={loading}
            item={item}
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'NEWS' })}
            onShare={item => open(item.link)}
        />
    );
};

export default SingleView;