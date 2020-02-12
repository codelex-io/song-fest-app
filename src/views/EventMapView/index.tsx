import React, { useState } from 'react';
import { default as EventMapViewComponent } from './component';
import { EventItem } from './types';

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

const EventMapView: React.FC = () => {
    const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);
    return (
        <EventMapViewComponent
            events={events.map(it => ({ ...it, isSelected: selectedItemId !== undefined && selectedItemId === it.id }))}
            onSelectEvent={item => setSelectedItemId(item.id)}
        />
    );
};

export default EventMapView;
