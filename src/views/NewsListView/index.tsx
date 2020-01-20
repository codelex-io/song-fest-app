import React from 'react';
import { NewsItem } from './types';
import { FlatList, View } from 'react-native';
import { Card } from './Card';

interface NewsListProps {
    items: NewsItem[];
}
export default class NewsListView extends React.Component<NewsListProps> {
    render() {
        const { items } = this.props;
        return (
            <FlatList<NewsItem>
                data={items}
                renderItem={({ item }): React.ReactElement => (
                    <View>
                        <Card item={item} />
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
            />
        );
    }
}
