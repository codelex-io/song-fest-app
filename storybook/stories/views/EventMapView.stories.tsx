import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { EventItem } from '../../../src/views/EventMapView/types';
import EventMapView from '../../../src/views/EventMapView/component';

const events: EventItem[] = [
    {
        id: '1',
        title: 'Svētku ieskandināšana',
        type: 'sing',
        locationTitle: 'Rīga',
        location: {
            latitude: 56.951637,
            longitude: 24.113347,
        },
        eventType: 'singing',
        date: 'Pirmdiena, 6. jūlijs',
        time: '16:00',
        isSelected: false,
        isFavourite: false,
    },
    {
        id: '2',
        title: 'Latvijas izglītības iestāžu skatuves runas konkurss Latgalē',
        type: 'sing',
        locationTitle: 'Jūrmala',
        location: {
            latitude: 56.951707,
            longitude: 24.110053,
        },
        eventType: 'singing',
        date: 'Pirmdiena, 6. jūlijs',
        time: '19:30',
        isSelected: true,
        isFavourite: true,
    },
];

storiesOf('EventMapView', module).add('default', () => (
    <EventMapView items={events} onSelectEvent={() => null} onFavourite={() => null} onNavigate={() => null} />
));
