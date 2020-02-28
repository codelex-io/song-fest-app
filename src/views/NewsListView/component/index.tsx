import React from 'react';
import { NewsItem } from '../types';
import { FlatList } from 'react-native';
import { colors } from '@styles';
import Card from './Card';

interface Props {
    loading: boolean;
    items: NewsItem[];
    onNavigate: (item: NewsItem) => void;
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
}

const NewsListView: React.FC<Props> = ({ items, onNavigate, onFavourite, onShare }) => {
    return (
        <FlatList<NewsItem>
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
