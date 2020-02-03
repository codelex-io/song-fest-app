import React from 'react';
import { NewsItem } from '../types';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';

interface NewsListProps {
    loading: boolean;
    items: NewsItem[];
}

export default class NewsListView extends React.Component<NewsListProps> {
    render() {
        const { items } = this.props;
        return (
            <FlatList<NewsItem>
                data={items}
                renderItem={({ item, index }): React.ReactElement => (
                    <View>
                        <Card item={item} backgroundColor={colors.findColorByIndex(index)} />
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
            />
        );
    }
}
