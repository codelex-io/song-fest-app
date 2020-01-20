import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { EventListView } from '../../../src/views';

const events = [
    {
        id: '1',
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
    },
    {
        id: '2',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā',
        location: 'Kuldīgas pilsētas estrāde un estrādes parks',
        date: '16. maijs',
        time: 'Visu dienu',
    },
    {
        id: '3',
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
    },
];

storiesOf('Events', module).add('list', () => <EventListView events={events} />);
