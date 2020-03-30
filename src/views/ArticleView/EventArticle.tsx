import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_TARGET_EVENTS_ITEM } from './graphql/queries';
import { Data, EventItem, Variables } from './graphql/types';
import { EventArticleItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import share from '@integration/share';
import EventArticleComponent from './component/EventArticleComponent';
import { toFavourite } from '@domain/events';
import { buyTicket } from '@domain/tickets';
import { BottomTabRoutes } from '@navigation/BottomTabs';

const toItem = (
    item: EventItem,
    isFavourite: (fav: Favourite) => boolean,
    group: BottomTabRoutes,
): EventArticleItem => {
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
    goToMap: (item: EventArticleItem) => void;
}

const EventArticle: React.FC<Props> = ({ onBack, itemId, group, goToFeed, goToMap }) => {
    const { loading, data, error } = useQuery<Data<EventItem>, Variables>(FETCH_TARGET_EVENTS_ITEM, {
        variables: { id: itemId },
    });

    const { toggleFavourite, isFavourite } = useFavourites();

    const onFavourite = () => {
        toggleFavourite(toFavourite(item));
    };

    if (!data && error) {
        goToFeed();
        return <></>;
    }

    const item: EventArticleItem =
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
                  locationTitle: '',
                  location: {
                      latitude: 0,
                      longitude: 0,
                  },
                  time: '',
                  date: '',
              }
            : toItem(data.item, isFavourite, group);

    return (
        <EventArticleComponent
            {...{
                onBack,
                item,
                onFavourite,
                onShare: () => share(item.link),
                goToMap,
                buyTicket: () => buyTicket(item.link),
            }}
            loading={loading || !data}
        />
    );
};

export default EventArticle;
