import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { default as NewsListViewComponent } from './component/index';
import { FETCH_NEWS_ITEMS } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem } from './graphql/types';
import { NewsItem } from './types';
import NavigationAware from '../../navigation/NavigationAware';

const toItem = (item: GraphQLNewsItem): NewsItem => {
    return { ...item, isFavourite: false };
};

const NewsListView: React.FC<NavigationAware> = ({ navigation }) => {
    const { loading, data } = useQuery<Data>(FETCH_NEWS_ITEMS);
    return (
        <NewsListViewComponent
            loading={loading}
            items={loading || !data ? [] : data.items.map(toItem)}
            navigation={navigation}
        />
    );
};

export default NewsListView;
