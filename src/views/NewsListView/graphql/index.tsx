import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import NewsListView from '../index';
import { FETCH_NEWS_ITEMS } from './queries';
import { Data } from './graphql-types';

const NewsListViewGraphQLWrapper: React.FC = () => {
    const { loading, data } = useQuery<Data>(FETCH_NEWS_ITEMS);
    return (
        <NewsListView
            loading={loading}
            items={loading || !data ? [] : data.items.map(it => ({ ...it, isFavourite: false }))}
        />
    );
};

export default NewsListViewGraphQLWrapper;
