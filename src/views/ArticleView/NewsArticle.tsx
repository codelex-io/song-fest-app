import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import NewsArticleComponent from './component/NewsArticleComponent';
import { FETCH_TARGET_NEWS_ITEM } from './graphql/queries';
import { Data, NewsItem, Variables } from './graphql/types';
import { NewsArticleItem } from './types';
import { useFavourites } from '@domain/favourites';
import { buyTicket } from '@domain/tickets';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import share from '@integration/share';
import { SharedStackNavList, FeedRootName } from 'src/navigation/stacks/SharedStack';

const toItem = (item: NewsItem, isFavourite: (fav: Favourite) => boolean, group: FeedRootName): NewsArticleItem => {
    let favoritesGroup = group as FavouriteGroupKey;
    if (group === 'MAP') {
        favoritesGroup = 'EVENTS';
    }
    return {
        ...item,
        isFavourite: isFavourite({
            id: item.id,
            title: item.title,
            group: favoritesGroup,
        }),
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

    const onBack = () => {
        if (!hasHistory) {
            navigation.navigate('Feed');
        } else {
            navigation.goBack();
        }
    };

    if (!data && error) {
        navigation.navigate('Feed');
        return <></>;
    }

    const item =
        !data || loading
            ? ({
                  id: '',
                  title: '',
                  content: '',
                  image: {
                      url: '',
                  },
                  isFavourite: false,
                  link: '',
                  date: '',
              } as NewsArticleItem)
            : toItem(data.item, isFavourite, group);

    return (
        <NewsArticleComponent
            {...{ onBack, item, onFavourite, onShare: () => share(item.link), buyTicket: () => buyTicket(item.link) }}
            loading={loading || !data}
        />
    );
};

export default NewsArticle;
