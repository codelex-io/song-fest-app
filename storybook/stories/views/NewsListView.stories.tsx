import React from 'react';
import { storiesOf } from '@storybook/react-native';
import NewsListView from '../../../src/views/NewsListView/component';

const items = [
    {
        id: '1',
        image: { url: 'https://via.placeholder.com/360x184?text=Placeholder' },
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '2020-01-23T00:00:00.000Z',
        isFavourite: true,
        link: 'https://codelex.io',
    },
    {
        id: '2',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '2020-01-23T00:00:00.000Z',
        isFavourite: false,
        link: 'https://codelex.io',
    },
    {
        id: '3',
        image: { url: 'https://via.placeholder.com/360x184?text=Placeholder' },
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '2020-01-23T00:00:00.000Z',
        isFavourite: true,
        link: 'https://codelex.io',
    },
    {
        id: '4',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '2020-01-23T00:00:00.000Z',
        isFavourite: false,
        link: 'https://codelex.io',
    },
    {
        id: '5',
        image: { url: 'https://via.placeholder.com/360x184?text=Placeholder' },
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '2020-01-23T00:00:00.000Z',
        isFavourite: true,
        link: 'https://codelex.io',
    },
];

storiesOf('NewsListView', module).add('list', () => (
    <NewsListView loading={false} items={items} onNavigate={() => null} onFavourite={() => null} onShare={() => null} />
));
