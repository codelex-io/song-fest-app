import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_TARGET_EVENTS_ITEM } from './graphql/queries';
import { Data, EventItem, Variables } from './graphql/types';
import { EventArticleItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import share from '@integration/share';
import { SharedStackNavList, FeedRootName } from 'src/navigation/stacks/SharedStack';
import EventArticleComponent from './component/EventArticleComponent';
import { useNavigation } from '@react-navigation/native';
import { toFavourite } from '@domain/events';
import { buyTicket } from '@domain/tickets';

const toItem = (item: EventItem, isFavourite: (fav: Favourite) => boolean, group: FeedRootName): EventArticleItem => {
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

const EventArticle: React.FC<SharedStackNavList<'Article'>> = ({ route, navigation }) => {
    const { itemId, group, hasHistory } = route.params;

    const rootNavigation = useNavigation();

    const { loading, data, error } = useQuery<Data<EventItem>, Variables>(FETCH_TARGET_EVENTS_ITEM, {
        variables: { id: itemId },
    });

    const { toggleFavourite, isFavourite } = useFavourites();

    const onFavourite = () => {
        toggleFavourite(toFavourite(item));
    };

    const onBack = () => {
        if (!hasHistory) {
            navigation.navigate('Feed');
        } else {
            navigation.goBack();
        }
    };

    const goToMap = () => {
        rootNavigation.navigate('MAP', { item: item });
    };

    if (!data && error) {
        navigation.navigate('Feed');
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
