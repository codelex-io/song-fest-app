import React from 'react';
import { NewsItem } from '../types';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import NavigationAware from '../../../navigation/NavigationAware';

interface Props extends NavigationAware {
    loading: boolean;
    items: NewsItem[];
    onFavourite: (item: NewsItem) => void;
}

const NewsListView: React.FC<Props> = ({ loading, items, onFavourite, navigation }) => (
    <FlatList<NewsItem>
        data={items}
        renderItem={({ item, index }): React.ReactElement => (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SingleNewsItem', { newsItem: item.id });
                }}
                activeOpacity={0.8}
            >
                <Card
                    item={item}
                    backgroundColor={colors.findColorByIndex(index)}
                    onFavourite={() => onFavourite(item)}
                />
            </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
    />
);

export default NewsListView;
