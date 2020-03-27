import React from 'react'
import { View } from 'react-native';
import { LongSearch, Header } from '@components';
import FeedLayout from '@components/layouts/FeedLayout';
import { SearchInterface } from '@components/headers/SearchHeader';
import { colors } from '@styles';
import { Item } from '../types';
import FlatListComponent from './FlatListComponent';

interface NewsComponentProps {
   items: Item[]
   headerTitle: string;
   goToUserSettings: () => void;
   goToFavorites: () => void;
   onPressSearch: (color: string) => void;
   searchState: SearchInterface
   onResetSearch: () => void
   loading: boolean;
   goToArticle: (item: Item) => void;
   onFavorite: (item: Item) => void;
   onShare: (item: Item) => void;
   refresh: () => void;
}
const Component: React.FC<NewsComponentProps> = ({
   items,
   headerTitle,
   goToUserSettings,
   goToFavorites,
   onPressSearch,
   searchState,
   onResetSearch,
   loading,
   goToArticle,
   onFavorite,
   onShare,
   refresh,
}) => {

   return (
      <FeedLayout
         header={resetHeader => (
            <View>
               <Header
                  title={headerTitle}
                  onButton1={goToUserSettings}
                  onButton2={goToFavorites}
               />
               <LongSearch
                  backgroundColor={colors.blue}
                  onPress={() => {
                     onPressSearch(colors.blue);
                     resetHeader();
                  }}
                  searchInput={searchState.payload}
                  onResetSearch={onResetSearch}
               />
            </View>
         )}
         loading={loading}
         empty={items.length === 0 && searchState.isActive}
      >
         {(resetHeader, headerHeight, animatedScrollOffset) => (
            <FlatListComponent
               {...{
                  items,
                  goToArticle,
                  onFavorite,
                  onShare,
                  loading,
                  animatedScrollOffset,
                  headerHeight,
               }}
               onRefresh={() => {
                  refresh()
                  resetHeader();
               }}
               refreshing={() => !loading}
            />
         )}
      </FeedLayout>
   )
}

export default Component