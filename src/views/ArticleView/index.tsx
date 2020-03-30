import React from 'react';
import NewsArticle from './NewsArticle';
import EventArticle from './EventArticle';
import { Empty } from '@components';
import { RootNavProps } from '@navigation';
import { EventArticleItem } from './types';
import { MapFeedProps } from '@navigation/stacks/MapStack';

const Article: React.FC<RootNavProps<'Article'>> = ({ route, navigation }) => {
    const { group, hasHistory, itemId: itemId } = route.params;

    const goToFeed = () => {
        navigation.navigate('Tabs', {
            screen: group,
            params: {
                screen: 'Feed',
            },
        });
    };

    const onBack = () => {
        if (!hasHistory) {
            goToFeed();
        } else {
            navigation.goBack();
        }
    };

    const goToMap = (item: EventArticleItem) => {
        const params: MapFeedProps = {
            item: item.id,
            searchPayload: {
                payload: '',
                isActive: false,
            },
        };
        navigation.navigate('Tabs', {
            screen: 'MAP',
            params: {
                screen: 'Feed',
                params,
            },
        });
    };
    switch (group) {
        case 'NEWS': {
            return <NewsArticle {...{ onBack, itemId, group, goToFeed }} />;
        }
        case 'EVENTS': {
            return <EventArticle {...{ onBack, itemId, group, goToFeed, goToMap }} />;
        }
        default: {
            return <Empty />;
        }
    }
};

export default Article;
