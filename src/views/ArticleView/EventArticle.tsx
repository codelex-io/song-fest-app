import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_TARGET_EVENTS_ITEM } from './graphql/queries';
import { Data, EventItem, Variables } from './graphql/types';
import { EventArticleItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types';
import { open } from '@domain/share';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import EventArticleComponent from './component/EventArticleComponent';
import { useNavigation } from '@react-navigation/native';
import { toFavourite } from '@domain/events';

const toItem = (
    item: EventItem,
    isFavourite: (fav: Favourite) => boolean,
    group: FavouriteGroupKey,
    buyTicket: () => void,
): EventArticleItem => {
    return {
        ...item,
        isFavourite: isFavourite({ id: item.id, title: item.title, group: group }),
        buyTicket,
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

    const goToMap = () => {
        rootNavigation.navigate('MAP', { item: item });
    };

    const buyTicket = () => {
        // TODO: implement ticket buying
        open(item.link);
    };

    if (!data && error) {
        navigation.navigate('Feed');
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
                  buyTicket,
              }
            : toItem(data.item, isFavourite, group, buyTicket);

    return (
        <EventArticleComponent
            {...{ onBack, item, onFavourite, onShare, goToMap, buyTicket }}
            loading={loading || !data}
        />
    );
};

export default EventArticle;
