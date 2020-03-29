import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { UserSettings, FavoriteListView, Article, EventMapView, SearchView } from '@views';
import { AppTabsNavParams } from '..';
import { SearchInterface } from '@components/headers/SearchHeader';
import { FeedRootName, ArticleRouteProp } from './SharedStack';

export interface MapFeedProps {
    item: string;
    searchPayload: SearchInterface;
    rootName: FeedRootName;
}

export type MapViewStackParamsList = {
    Feed: MapFeedProps;
    Favorites: undefined;
    Article: ArticleRouteProp;
    Search: { color: string; route: FeedRootName };
    UserSettings: undefined;
};

export type MapStackNavProps<T extends keyof MapViewStackParamsList> = {
    navigation: StackNavigationProp<MapViewStackParamsList, T>;
    route: RouteProp<MapViewStackParamsList, T>;
};

const Stack = createStackNavigator();

const MapStack: React.FC<AppTabsNavParams<'MAP'>> = () => {
    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="none">
            <Stack.Screen name="Feed" component={EventMapView} />
            <Stack.Screen name="Favorites" component={FavoriteListView} />
            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Search" component={SearchView} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
        </Stack.Navigator>
    );
};

export default MapStack;
