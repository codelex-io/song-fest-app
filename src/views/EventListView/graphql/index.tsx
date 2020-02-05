import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import EventListView from '../component/index';
import { FETCH_EVENT_ITEMS } from './queries';
import { Data } from './types';

const EventListViewGraphQLWrapper: React.FC = () => {
    const { loading, data } = useQuery<Data>(FETCH_EVENT_ITEMS);
    return <EventListView loading={loading} events={loading || !data ? [] : data.items.map(it => ({ ...it }))} />;
};

export default EventListViewGraphQLWrapper;
