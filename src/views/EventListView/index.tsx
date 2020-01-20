import React from 'react';
import { Card } from './Card';
import { Event } from './types';
import { FlatList } from 'react-native';

interface EventListViewProps {
    events: Event[];
}

const EventListView: React.FC<EventListViewProps> = ({ events }) => {
    return <FlatList<Event> data={events} renderItem={({ item }): React.ReactElement => <Card event={item} />} />;
};

export default EventListView;
