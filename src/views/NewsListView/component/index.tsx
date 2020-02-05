import React, { useContext } from 'react';
import { NewsItem } from '../types';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { Header } from '@components';
import { LocalizationContext } from '../../../localization/LocalizationContext';

interface NewsListProps {
    loading: boolean;
    items: NewsItem[];
}

const NewsListView: React.FC<NewsListProps> = ({ items }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View>
            <Header title={translations.NEWS} />
            <FlatList<NewsItem>
                data={items}
                renderItem={({ item, index }): React.ReactElement => (
                    <View>
                        <Card item={item} backgroundColor={colors.findColorByIndex(index)} />
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
            />
        </View>
    );
};

export default NewsListView;
