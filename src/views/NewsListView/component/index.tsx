import React from 'react';
import { NewsItem } from '../types';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { Card } from './Card';
import NavigationAware from '../../../navigation/NavigationAware';

interface NewsListProps extends NavigationAware {
    loading: boolean;
    items: NewsItem[];
}

export default class NewsListView extends React.Component<NewsListProps> {
    render() {
        const { items } = this.props;
        const navigationHandler = (newsItem: NewsItem) => {
            this.props.navigation.navigate('SingleNewsItem', { newsItem: newsItem });
        };
        return (
            <FlatList<NewsItem>
                data={items}
                renderItem={({ item }): React.ReactElement => (
                    <TouchableOpacity
                        onPress={() => {
                            navigationHandler(item);
                        }}
                        activeOpacity={0.8}
                    >
                        <View>
                            <Card item={item} />
                        </View>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
            />
        );
    }
}
