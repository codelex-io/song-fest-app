import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SearchView, FeedView } from '@views';
import { SearchInterface } from '@components/headers/SearchHeader';
import { BottomTabRoutes } from '@navigation/BottomTabs';
import { StatusBar } from 'react-native';
import { colors } from '@styles';

const Stack = createStackNavigator<EventsStack>();

interface EventsScreenRouteParams {
   searchPayload: SearchInterface,
   rootName: BottomTabRoutes
}

export type EventsStack = {
   Feed: EventsScreenRouteParams;
   Search: { color: string };
};

export type EventsStackNavProps<T extends keyof EventsStack> = {
   navigation: StackNavigationProp<EventsStack, T>;
   route: RouteProp<EventsStack, T>;
};

const EventsStack: React.FC = () => {
   useFocusEffect(
      useCallback(() => {
         StatusBar.setBackgroundColor(colors.white);
      }, []),
   );

   const feedInitialParams: EventsScreenRouteParams = {
      searchPayload: {
         payload: '',
         isActive: false,
      },
      rootName: 'EVENTS'
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

export default EventsStack;
