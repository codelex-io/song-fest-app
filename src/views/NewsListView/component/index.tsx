import React from 'react';
import { NewsItem } from '../types';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';

interface Props {
    loading: boolean;
    items: NewsItem[];
    onFavourite: (item: NewsItem) => void;
}

const NewsListView: React.FC<Props> = ({ items, onFavourite }) => (
    <FlatList<NewsItem>
        data={items}
        renderItem={({ item, index }): React.ReactElement => (
            <View>
                <Card
                    item={item}
                    backgroundColor={colors.findColorByIndex(index)}
                    onFavourite={() => onFavourite(item)}
                />
            </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
    />
);

export default NewsListView;
