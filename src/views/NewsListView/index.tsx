import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { default as NewsListViewComponent } from './component/index';
import { FETCH_NEWS_ITEMS, FETCH_NEWS_ALL_ITEMS } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem } from './graphql/types';
import { NewsItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite } from '@domain/favourites/types';
import { open } from '@domain/share';
import { FilterButtons, Loading, Header } from '@components';
import { colors } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import StatusBar from '@components/headers/StatusBar';

const toItem = (item: GraphQLNewsItem, isFavourite: (fav: Favourite) => boolean): NewsItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'NEWS' }) };
};

export interface Variables {
    first: number;
}

export const NewsListViewIndex: React.FC<SharedStackNavList<'Feed'>> = ({ navigation }) => {
    const [query, setQuery] = useState(FETCH_NEWS_ITEMS);
    const [isFirstActive, setIsFirstActive] = useState(true);

    const { loading, data, refetch } = useQuery<Data, Variables>(query, {
        variables: { first: 10 },
    });

    const handleCurrentFilter = (isFirstActive: boolean) => {
        if (isFirstActive) {
            setQuery(FETCH_NEWS_ITEMS);
            setIsFirstActive(true);
        } else {
            setQuery(FETCH_NEWS_ALL_ITEMS);
            setIsFirstActive(false);
        }
    };

    useEffect(() => {
        refetch();
    }, [isFirstActive]);

    const { toggleFavourite, isFavourite } = useFavourites();
    const { translations } = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <View>
                <StatusBar />
                <Header title={translations.getString('NEWS')} navigation={navigation} />
                <FilterButtons
                    firstTitle={translations.getString('CURRENT')}
                    secondTitle={translations.getString('ALL')}
                    currentActive={isFirstActive}
                    triggerToggle={handleCurrentFilter}
                />
            </View>
            {loading || !data ? (
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
                    <Loading />
                </View>
            ) : (
                <NewsListViewComponent
                    loading={loading}
                    items={loading || !data ? [] : data.items.map(it => toItem(it, isFavourite))}
                    onNavigate={item => navigation.navigate('Article', { itemId: item.id, group: 'NEWS' })}
                    onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: 'NEWS' })}
                    onShare={item => open(item.link)}
                    onRefresh={() => refetch()}
                    refreshing={() => !loading}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
});
