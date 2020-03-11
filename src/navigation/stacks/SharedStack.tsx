import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
    FavoriteListView,
    MarkdownEvent,
    SearchView,
    EventListView,
    VideoView,
    EmptyView,
    EventMapView,
    UserSettings,
} from '@views';
import { FavouriteGroupKey } from '@domain/favourites/types';
import { RouteProp } from '@react-navigation/native';
import { AppTabsNavParams } from '..';
import { NewsListViewIndex } from '@views/NewsListView';

export type SharedStackParamsList = {
    Feed: { payload: string };
    Favorites: undefined;
    Article: { itemId: string; group: FavouriteGroupKey };
    Search: undefined;
    UserCategory: undefined;
};

export type SharedStackNavList<T extends keyof SharedStackParamsList> = {
    navigation: StackNavigationProp<SharedStackParamsList, T>;
    route: RouteProp<SharedStackParamsList, T>;
};

const SharedStack: React.FC<AppTabsNavParams<'NEWS' | 'EVENTS' | 'VIDEO' | 'MAP'>> = ({ route }) => {
    const Stack = createStackNavigator<SharedStackParamsList>();
    /* eslint-disable */
    let feedComponent: React.FC<any> = EmptyView;
    /* eslint-enable */

    if (route.name === 'NEWS') {
        feedComponent = NewsListViewIndex;
    }
    if (route.name === 'EVENTS') {
        feedComponent = EventListView;
    } else if (route.name === 'VIDEO') {
        feedComponent = VideoView;
    } else if (route.name === 'MAP') {
        feedComponent = EventMapView;
    }

    if (!route.name) {
        return null;
    }
    return (
        <Stack.Navigator initialRouteName={'Feed'} headerMode="none">
            <Stack.Screen name="Feed" component={feedComponent} />
            <Stack.Screen name="Favorites" component={FavoriteListView} />
            <Stack.Screen name="Article" component={MarkdownEvent} />
            <Stack.Screen name="Search" component={SearchView} />
            <Stack.Screen name="UserCategory" component={UserSettings} />
        </Stack.Navigator>
    );
};

export default SharedStack;
