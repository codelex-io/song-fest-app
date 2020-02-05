import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FavoriteListView from '../../../src/views/FavoriteListView/component';

const favourites = [
    {
        key: 'NEWS',
        items: [
            { id: '1', title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss' },
            { id: '2', title: 'Ierakstām sevi svētkos' },
            {
                id: '3',
                title:
                    'Aizvadīts pirmais XII Latvijas Skolu jaunatnes dziesmu un deju svētku Mūsdienu deju lielkonce...',
            },
        ],
    },
    {
        key: 'EVENTS',
        items: [
            { id: '1', title: 'Zvaignes atspīd Ālanē' },
            { id: '2', title: 'Baltā galdauta svētki Grobiņas novadā' },
        ],
    },
    {
        title: 'VIDEO',
        items: [
            { id: '1', title: 'Koncerta Zvaignes atspīd Ālanē ieraksts' },
            { id: '2', title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā' },
        ],
    },
];

storiesOf('FavoriteListView', module).add('list', () => <FavoriteListView favourites={favourites} />);
