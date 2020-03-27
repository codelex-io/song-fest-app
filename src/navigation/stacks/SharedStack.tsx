import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
    FavoriteListView,
    SearchView,
    EventListView,
    VideoView,
    EmptyView,
    EventMapView,
    UserSettings,
    Article,
    FeedView,
} from '@views';
import { RouteProp } from '@react-navigation/native';
import { AppTabsNavParams } from '..';
import { NewsListViewIndex } from '@views/NewsListView';
import { AnyType } from '@domain/AnyType';

export type FeedRootName = 'NEWS' | 'EVENTS' | 'VIDEO' | 'MAP'
export type ArticleRouteProp = {
    itemId: string;
    group: FeedRootName;
    hasHistory: boolean
};

export interface FeedRouteProp {
    payload: string;
    rootName: FeedRootName;
}

export type SharedStackParamsList = {
    Feed: FeedRouteProp;
    Favorites: undefined;
    Article: ArticleRouteProp;
    Search: { color: string };
    UserSettings: undefined;
};

export type SharedStackNavList<T extends keyof SharedStackParamsList> = {
    navigation: StackNavigationProp<SharedStackParamsList, T>;
    route: RouteProp<SharedStackParamsList, T>;
};

const SharedStack: React.FC<AppTabsNavParams<'NEWS' | 'EVENTS' | 'VIDEO' | 'MAP'>> = ({ route }) => {
    const Stack = createStackNavigator<SharedStackParamsList>();

    const notificationProp: ArticleRouteProp = {
        ...(route.params as ArticleRouteProp),
    };

    let feedComponent: React.FC<AnyType> = EmptyView;
    let feedParams: FeedRouteProp = {
        payload: '',
        rootName: route.name
    }

    if (route.name === 'NEWS') {
        feedComponent = NewsListViewIndex;
    } else if (route.name === 'EVENTS') {
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
        <Stack.Navigator initialRouteName={notificationProp.itemId ? 'Article' : 'Feed'} headerMode="none">
            <Stack.Screen initialParams={feedParams} name="Feed" component={FeedView} />
            <Stack.Screen name="Favorites" component={FavoriteListView} />
            <Stack.Screen initialParams={notificationProp} name="Article" component={Article} />
            <Stack.Screen name="Search" component={SearchView} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
        </Stack.Navigator>
    );
};

export default SharedStack;
