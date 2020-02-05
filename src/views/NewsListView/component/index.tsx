import React, { useContext } from 'react';
import { NewsItem } from '../types';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { Header } from '@components';
import { LocalizationContext } from '../../../localization/LocalizationContext';

interface Props {
    loading: boolean;
    items: NewsItem[];
    onFavourite: (item: NewsItem) => void;
}

const NewsListView: React.FC<Props> = ({ loading, items, onFavourite }) => (
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
