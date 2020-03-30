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
import { BottomTabRoutes } from '@navigation/BottomTabs';

const toItem = (item: NewsItem, isFavourite: (fav: Favourite) => boolean, group: BottomTabRoutes): NewsArticleItem => {
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

interface Props {
    onBack: () => void;
    itemId: string;
    group: BottomTabRoutes;
    goToFeed: () => void;
}
const NewsArticle: React.FC<Props> = ({ onBack, itemId, group, goToFeed }) => {
    const { loading, data, error } = useQuery<Data<NewsItem>, Variables>(FETCH_TARGET_NEWS_ITEM, {
        variables: { id: itemId },
    });
    const { toggleFavourite, isFavourite } = useFavourites();

    const onFavourite = () => {
        toggleFavourite({ id: item.id, group: 'NEWS', title: item.title });
    };

    if (!data && error) {
        goToFeed();
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
