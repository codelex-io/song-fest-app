import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SearchView, FeedView } from '@views';
import { SearchInterface } from '@components/headers/SearchHeader';
import { BottomTabRoutes } from '@navigation/BottomTabs';
import { StatusBar } from 'react-native';
import { colors } from '@styles';

interface NewsScreenRouteParams {
   searchPayload: SearchInterface,
   rootName: BottomTabRoutes
}

export type NewsStack = {
   Feed: NewsScreenRouteParams;
   Search: { color: string };
};

export type NewsStackNavProps<T extends keyof NewsStack> = {
   navigation: StackNavigationProp<NewsStack, T>;
   route: RouteProp<NewsStack, T>;
};

const Stack = createStackNavigator<NewsStack>();

const NewsStack: React.FC = () => {

   useFocusEffect(
      useCallback(() => {
         StatusBar.setBackgroundColor(colors.white);
      }, []),
   );

   const feedInitialParams: NewsScreenRouteParams = {
      searchPayload: {
         payload: '',
         isActive: false,
      },
      rootName: 'NEWS'
   }

   return (
      <Stack.Navigator
         initialRouteName="Feed"
         headerMode="none"
      >
         <Stack.Screen
            initialParams={feedInitialParams}
            name="Feed"
            component={FeedView}
         />
         <Stack.Screen
            name="Search"
            component={SearchView}
         />
      </Stack.Navigator>
   );
};

export default NewsStack;
