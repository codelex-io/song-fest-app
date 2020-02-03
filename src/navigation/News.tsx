import React from 'react';
import NewsListView from '../views/NewsListView/index'

const items = [
    {
        id: '1',
        imageURL: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '25.10.2019',
        isFavourite: true,
    },
    {
        id: '2',
        imageURL: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '25.10.2019',
        isFavourite: true,
    },
    {
        id: '3',
        imageURL: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '25.10.2019',
        isFavourite: true,
    },
    {
        id: '4',
        imageURL: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '25.10.2019',
        isFavourite: true,
    },
    {
        id: '5',
        imageURL: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte',
        date: '25.10.2019',
        isFavourite: true,
    },
];

export const News: React.FC = () => <NewsListView items={items}></NewsListView>;
