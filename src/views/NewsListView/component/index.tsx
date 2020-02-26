import React from 'react';
import { NewsItem } from '../types';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import Card from './Card';

interface Props {
    loading: boolean;
    items: NewsItem[];
    onFavourite: (item: NewsItem) => void;
    onShare: (item: NewsItem) => void;
}

const NewsListView: React.FC<Props> = ({ items, onFavourite, onShare }) => {
    return (
        <FlatList<NewsItem>
            data={items}
            renderItem={({ item, index }): React.ReactElement => (
                <View style={{ paddingHorizontal: 16 }}>
                    <Card
                        item={item}
                        itemId={item.id}
                        backgroundColor={colors.findColorByIndex(index)}
                        onFavourite={() => onFavourite(item)}
                        onShare={() => onShare(item)}
                    />
                </View>
            )}
        />
    );
};

export default NewsListView;
