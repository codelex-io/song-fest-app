import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import NewsArticleComponent from './component/NewsArticleComponent';
import { FETCH_TARGET_NEWS_ITEM } from './graphql/queries';
import { Data, NewsItem, Variables } from './graphql/types';
import { NewsArticleItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import { open } from '@domain/share';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';

const toItem = (
    item: NewsItem,
    isFavourite: (fav: Favourite) => boolean,
    group: FavouriteGroupKey,
    buyTicket: () => void,
): NewsArticleItem => {
    return {
        ...item,
        isFavourite: isFavourite({
            id: item.id,
            title: item.title,
            group: group,
        }),
        buyTicket,
    };
};

const NewsArticle: React.FC<SharedStackNavList<'Article'>> = ({ route, navigation }) => {
    const { itemId, group, hasHistory } = route.params;

    const { loading, data, error } = useQuery<Data<NewsItem>, Variables>(FETCH_TARGET_NEWS_ITEM, {
        variables: { id: itemId },
    });
    const { toggleFavourite, isFavourite } = useFavourites();

    const onFavourite = () => {
        toggleFavourite({ id: item.id, group: 'NEWS', title: item.title });
    };

    const onShare = () => {
        open(item.link);
    };

    const onBack = () => {
        if (!hasHistory) {
            navigation.navigate('Feed');
        } else {
            navigation.goBack();
        }
    };

    const buyTicket = () => {
        // TODO: implement ticket buying
        open(item.link);
    };

    if (!data && error) {
        navigation.navigate('Feed');
    }

    const item =
        !data || loading
            ? {
                  id: '',
                  title: '',
                  content: '',
                  image: {
                      url: '',
                  },
                  isFavourite: false,
                  link: '',
                  date: '',
                  buyTicket,
              }
            : toItem(data.item, isFavourite, group, buyTicket);

    return <NewsArticleComponent {...{ onBack, item, onFavourite, onShare, buyTicket }} loading={loading || !data} />;
};

export default NewsArticle;
