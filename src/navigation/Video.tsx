import React from 'react';
import { Text } from 'react-native';
import { VideoView } from '../views/VideoView';

const items = [
    {
        id: '1',
        video: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: '„Augstāk par zemi” un finālkonkurss',
        statistics: 'Skatījumi: 4 349, ievietots 5. maijā',
    },
    {
        id: '2',
        video: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā',
        statistics: 'Skatījumi: 4 349, ievietots 5. maijā',
    },
];

export const Video: React.FC = () => <VideoView items={items}></VideoView>;
