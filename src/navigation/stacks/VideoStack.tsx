import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SearchView, VideoView } from '@views';
import { SearchInterface } from '@components/headers/SearchHeader';
import { BottomTabRoutes } from '@navigation/BottomTabs';
import { StatusBar } from 'react-native';
import { colors } from '@styles';

const Stack = createStackNavigator<VideoStack>();

interface VideoScreenRouteParams {
   searchPayload: SearchInterface,
   rootName: BottomTabRoutes
}

export type VideoStack = {
   Feed: VideoScreenRouteParams;
   Search: { color: string };
};

export type VideoStackNavProps<T extends keyof VideoStack> = {
   navigation: StackNavigationProp<VideoStack, T>;
   route: RouteProp<VideoStack, T>;
};

const VideoStack: React.FC = () => {
   useFocusEffect(
      useCallback(() => {
         StatusBar.setBackgroundColor(colors.white);
      }, []),
   );

   const feedInitialParams: VideoScreenRouteParams = {
      searchPayload: {
         payload: '',
         isActive: false,
      },
      rootName: 'VIDEO'
   }

   return (
      <Stack.Navigator
         initialRouteName="Feed"
         headerMode="none"
      >
         <Stack.Screen
            initialParams={feedInitialParams}
            name="Feed"
            component={VideoView}
         />
         <Stack.Screen
            name="Search"
            component={SearchView}
         />
      </Stack.Navigator>
   );
};

export default VideoStack;
