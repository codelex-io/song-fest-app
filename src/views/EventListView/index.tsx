import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { default as EventListViewComponent } from './component/index';
import { FETCH_EVENT_ITEMS } from './graphql/queries';
import { DataEvent, EventItem as GraphQLEventItem } from './graphql/types';
import { EventItem } from './types';

const toItem = (event: GraphQLEventItem): EventItem => {
    return { ...event };
};

const EventListView: React.FC = () => {
    const { loading, data } = useQuery<DataEvent>(FETCH_EVENT_ITEMS);
    return <EventListViewComponent loading={loading} events={loading || !data ? [] : data.events.map(toItem)} />;
};

export default EventListView;
