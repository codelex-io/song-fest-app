import React, { useState, useEffect, useContext } from 'react';
import { SearchInterface } from '@components/headers/SearchHeader';
import { FETCH_NEWS_ITEMS } from './graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { Data, NewsItem, Variables } from './graphql/types';
import { useFavourites } from '@domain/favourites';
import { LocalizationContext } from '@localization/LocalizationContext';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import { Item } from './types';
import Component from './component';
import share from '@integration/share';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { NewsStackNavProps } from '@navigation/stacks/NewsStack';

const NewsFeed: React.FC<NewsStackNavProps<'Feed'>> = ({ route, navigation }) => {
    const { searchPayload } = route.params;
    const tabNavigation = useNavigation();

    const [searchState, setSearchState] = useState<SearchInterface>(searchPayload);

    const query = FETCH_NEWS_ITEMS;

    const variables = { searchBy: searchState.payload };

    const { loading, data, refetch } = useQuery<Data, Variables>(query, { variables });

    useEffect(() => {
        setSearchState({ ...searchPayload });
    }, [searchPayload]);

    useEffect(() => {
        refetch();
    }, [searchState]);

    const { toggleFavourite, isFavourite } = useFavourites();

    const { translations } = useContext(LocalizationContext);

    const items = loading || !data ? [] : mapItems({ data, isFavourite, group: 'NEWS' });

    const goToArticle = (item: Item) => {
        tabNavigation.navigate('Article', {
            itemId: item.id,
            group: 'NEWS',
            hasHistory: true,
        });
    };

    const onFavorite = (item: Item) => {
        toggleFavourite({ id: item.id, title: item.title, group: 'NEWS' });
    };

    const goToMap = (item: Item) => {
        tabNavigation.navigate('MAP', {
            screen: 'Feed',
            params: {
                item: item.id,
                searchPayload: {
                    payload: '',
                    isActive: false,
                },
            },
        });
    };

    const refresh = () => {
        refetch({ ...variables, searchBy: '' });
        setSearchState({ payload: '', isActive: false });
    };

    const goToUserSettings = () => {
        tabNavigation.navigate('UserSettings');
    };
    const goToFavorites = () => {
        tabNavigation.navigate('Favorites');
    };
    const onPressSearch = (color: string) => {
        navigation.navigate('Search', { color });
    };
    const onResetSearch = () => {
        setSearchState({
            payload: '',
            isActive: false,
        });
    };

    const headerTitle = translations.getString('NEWS');

    return (
        <Component
            {...{
                items,
                headerTitle,
                goToUserSettings,
                goToFavorites,
                onPressSearch,
                searchState,
                onResetSearch,
                goToArticle,
                onFavorite,
                onShare: item => share(item.link),
                refresh,
                goToMap,
            }}
            routeName="NEWS"
            loading={loading || !data}
        />
    );
};

export default NewsFeed;

interface MapItemsInterface {
    data: Data;
    isFavourite: (fav: Favourite) => boolean;
    group: FavouriteGroupKey;
}

const mapItems = ({ data, isFavourite, group }: MapItemsInterface): Item[] => {
    const items = data.items as NewsItem[];
    return items.map((item: NewsItem) => ({
        id: item.id,
        group,
        dateBeforeTitle: item.date,
        title: item.title,
        image: item.image,
        link: item.link,
        isFavourite: isFavourite({ id: item.id, title: item.title, group }),
        date: moment(item.date),
    }));
};
