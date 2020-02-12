import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { EventItem } from '../../../src/views/EventMapView/types';
import EventMapView from '../../../src/views/EventMapView/component';

const events: EventItem[] = [
    {
        id: '1',
        title: 'Svētku ieskandināšana',
        type: 'sing',
        location: 'Viesturdārzs',
        eventType: 'singing',
        date: 'Pirmdiena, 6. jūlijs',
        timeStart: '16:00',
        timeEnd: '04:00',
        coordinates: {
            latitude: 56.951637,
            longitude: 24.113347,
        },
        isSelected: false,
    },
    {
        id: '2',
        title: 'Latvijas izglītības iestāžu skatuves runas konkurss Latgalē',
        type: 'sing',
        location: 'Viesturdārzs',
        eventType: 'singing',
        date: 'Pirmdiena, 6. jūlijs',
        timeStart: '19:30',
        timeEnd: '20:30',
        coordinates: {
            latitude: 56.951707,
            longitude: 24.110053,
        },
        isSelected: true,
    },
];

storiesOf('EventMapView', module).add('default', () => <EventMapView events={events} onSelectEvent={() => null} />);
