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

const toItem = (
   item: EventItem,
   isFavourite: (fav: Favourite) => boolean,
   group: FavouriteGroupKey,
): EventArticleItem => {
   return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: group }), tickets: true };
};

const EventArticle: React.FC<SharedStackNavList<'Article'>> = ({ route, navigation }) => {
   const { itemId, group } = route.params;

   const rootNavigation = useNavigation()

   const { loading, data } = useQuery<Data<EventItem>, Variables>(FETCH_TARGET_EVENTS_ITEM, { variables: { id: itemId } });
   const { toggleFavourite, isFavourite } = useFavourites();

   const item: EventArticleItem = !data || loading ? {
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
      tickets: true,
   } : toItem(data.item, isFavourite, group);

   const onFavourite = () => {
      toggleFavourite({ id: item.id, group: 'EVENTS', title: item.title })
   }

   const onShare = () => {
      open(item.link)
   }

   const onBack = () => {
      navigation.goBack()
   }

   const goToMap = () => {
      rootNavigation.navigate('MAP', { item: item })
   }
   return (
      <EventArticleComponent {...{ onBack, item, onFavourite, onShare, goToMap }} loading={loading || !data} />
   );
};



export default EventArticle;
