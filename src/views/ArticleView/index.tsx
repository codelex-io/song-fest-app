import React from 'react';
import { SharedStackNavList } from '@navigation/stacks/SharedStack';
import NewsArticle from './NewsArticle';
import EventArticle from './EventArticle';
import { Empty } from '@components';

const Article: React.FC<SharedStackNavList<'Article'>> = ({ route, navigation }) => {
    const { group } = route.params;

    switch (group) {
        case 'NEWS': {
            return <NewsArticle {...{ route, navigation }} />;
        }
        case 'EVENTS': {
            return <EventArticle {...{ route, navigation }} />;
        }
        default: {
            return <Empty />;
        }
    }
};

export default Article;
