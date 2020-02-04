import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import NewsListView from '../component/index';
import { FETCH_NEWS_ITEMS } from './queries';
import { Data } from './types';
import NavigationAware from '../../../navigation/NavigationAware';

const NewsListViewGraphQLWrapper: React.FC<NavigationAware> = ({ navigation }) => {
    const { loading, data } = useQuery<Data>(FETCH_NEWS_ITEMS);
    return (
        <NewsListView
            navigation={navigation}
            loading={loading}
            items={loading || !data ? [] : data.items.map(it => ({ ...it, isFavourite: false }))}
        />
    );
};

export default NewsListViewGraphQLWrapper;
