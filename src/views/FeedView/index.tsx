import React, { useState, useEffect, useContext } from 'react'
import { SharedStackNavList, FeedRootName } from '@navigation/stacks/SharedStack'
import { SearchInterface } from '@components/headers/SearchHeader'
import { FETCH_NEWS_ITEMS } from './graphql/queries'
import { useQuery } from '@apollo/react-hooks'
import { Data, NewsItem } from './graphql/types'
import { SearchVariables } from '@views/NewsListView/graphql/types'
import { useFavourites } from '@domain/favourites'
import { LocalizationContext } from '@localization/LocalizationContext'
import { Favourite, FavouriteGroupKey } from '@domain/favourites/types'
import { Item } from './types'
import { AnyType } from '@domain/AnyType'
import Component from './component'
import { open } from '@domain/share'

const FeedView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {

   const { payload, rootName } = route.params

   const [searchState, setSearchState] = useState<SearchInterface>(
      { payload: payload ? payload : '', isActive: false }
   );

   useEffect(() => {
      setSearchState({ payload: route.params.payload, isActive: true });
   }, [payload]);

   type DataType = NewsItem
   type Variables = SearchVariables
   let query = FETCH_NEWS_ITEMS
   let variables = { searchBy: searchState.payload, first: 10 }


   const { loading, data, refetch } = useQuery<Data<DataType>, Variables>(
      query,
      { variables }
   );

   useEffect(() => {
      refetch();
   }, [searchState.payload]);

   const { toggleFavourite, isFavourite } = useFavourites();

   const { translations } = useContext(LocalizationContext);

   const [items, setItems] = useState<Item[]>([])

   useEffect(() => {
      if (!loading && data) {
         const mapped = mapItems<NewsItem>({ data, isFavourite, rootName })
         setItems([...mapped])
      }
   }, [loading, data])

   const goToArticle = (item: Item) => {
      navigation.navigate('Article', {
         itemId: item.id,
         group: rootName,
         hasHistory: true,
      });
   };

   const onFavorite = (item: Item) => {
      let favGroup: FavouriteGroupKey = rootName as FavouriteGroupKey
      if (rootName === 'MAP') {
         favGroup = 'EVENTS'
      }
      toggleFavourite({ id: item.id, title: item.title, group: favGroup })
      if (!loading && data) {
         const mapped = mapItems<NewsItem>({ data, isFavourite, rootName })
         setItems([...mapped])
      }
   }

   const onShare = (item: Item) => {
      open(item.link)
   }

   const refresh = () => {
      refetch()
   }

   const headerTitle = translations.getString(rootName);
   const goToUserSettings = () => {
      navigation.navigate('UserSettings')
   }
   const goToFavorites = () => {
      navigation.navigate('Favorites')
   }
   const onPressSearch = (color: string) => {
      navigation.navigate('Search', { color })
   }
   const onResetSearch = () => {
      setSearchState({
         payload: '',
         isActive: false,
      });
   }

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
            onShare,
            refresh,
         }}
         loading={loading || !data}
      />
   )
}

export default FeedView

interface MapItemsInterface<T> {
   data: Data<T>;
   isFavourite: (fav: Favourite) => boolean;
   rootName: FeedRootName;
}

const mapItems = <T extends {}>({ data, isFavourite, rootName }: MapItemsInterface<T>): Item[] => {
   let favGroup: FavouriteGroupKey = rootName as FavouriteGroupKey
   if (rootName === 'MAP') {
      favGroup = 'EVENTS'
   }

   const mapped: Item[] = data.items.map((item: AnyType) => ({
      ...item,
      isFavourite: isFavourite({ id: item.id, title: item.title, group: favGroup }),
      group: rootName,
   }))

   return mapped
}