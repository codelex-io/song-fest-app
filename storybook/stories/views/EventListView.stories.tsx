import React from 'react';
import { storiesOf } from '@storybook/react-native';
import _ from 'lodash';
import { EventListView } from '../../../src/views';

const events = [
    {
        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
        imageUrl: 'https://via.placeholder.com/360x184?text=Placeholder',
    },
    {
        id: _.uniqueId(),
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā',
        location: 'Kuldīgas pilsētas estrāde un estrādes parks',
        date: '16. maijs',
        time: 'Visu dienu',
    },
    {
        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
        imageUrl: 'https://via.placeholder.com/360x184?text=Placeholder',
    },
    {
        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
    },
    {
        id: _.uniqueId(),
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā',
        location: 'Kuldīgas pilsētas estrāde un estrādes parks',
        date: '16. maijs',
        time: 'Visu dienu',
        imageUrl: 'https://via.placeholder.com/360x184?text=Placeholder',
    },
    {
        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
    },
    {
        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
        imageUrl: 'https://via.placeholder.com/360x184?text=Placeholder',
    },
    {
        id: _.uniqueId(),
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā',
        location: 'Kuldīgas pilsētas estrāde un estrādes parks',
        date: '16. maijs',
        time: 'Visu dienu',
    },
    {
        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30. februāris',
        time: '12.30 - 18.00',
        imageUrl: 'https://via.placeholder.com/360x184?text=Placeholder',
    },
];

storiesOf('EventListView', module).add('list', () => <EventListView events={events} />);
