import React from 'react';
import { NewsItem } from '../types';
import { FlatList, RefreshControl } from 'react-native';
import { colors } from '@styles';
import Card from './Card';

interface Props {
    loading: boolean;
    items: NewsItem[];
    onNavigate: (item: NewsItem) => void;
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
    onRefresh: () => void;
    refreshing: () => boolean;
}

const NewsListView: React.FC<Props> = ({ items, onNavigate, onFavourite, onShare, loading, onRefresh }) => {
    return (
        <FlatList<NewsItem>
            refreshControl={
                <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={loading}
                    colors={[colors.randomColor()]}
                    tintColor={colors.randomColor()}
                />
            }
            data={items}
            renderItem={({ item, index }): React.ReactElement => (
                <Card
                    item={item}
                    backgroundColor={colors.findColorByIndex(index)}
                    onNavigate={() => onNavigate(item)}
                    onFavourite={() => onFavourite(item)}
                    onShare={() => onShare(item)}
                />
            )}
        />
    );
};

export default NewsListView;
