import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { FavoriteListView, SearchView, VideoView, EmptyView, UserSettings, Article, FeedView } from '@views';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { AppTabsNavParams } from '..';
import { AnyType } from '@domain/AnyType';
import { SearchInterface } from '@components/headers/SearchHeader';
import { StatusBar } from 'react-native';
import { colors } from '@styles';

export type FeedRootName = 'NEWS' | 'EVENTS' | 'VIDEO' | 'MAP';
export type ArticleRouteProp = {
    itemId: string;
    group: FeedRootName;
    hasHistory: boolean;
};

export interface FeedRouteProp {
    searchPayload: SearchInterface;
    rootName: FeedRootName;
}

export type SharedStackParamsList = {
    Feed: FeedRouteProp;
    Favorites: undefined;
    Article: ArticleRouteProp;
    Search: { color: string; route: FeedRootName };
    UserSettings: undefined;
};

export type SharedStackNavList<T extends keyof SharedStackParamsList> = {
    navigation: StackNavigationProp<SharedStackParamsList, T>;
    route: RouteProp<SharedStackParamsList, T>;
};

const SharedStack: React.FC<AppTabsNavParams<'NEWS' | 'EVENTS' | 'VIDEO'>> = ({ route }) => {
    useFocusEffect(
        useCallback(() => {
            if (route.name !== 'MAP') {
                StatusBar.setBackgroundColor(colors.white);
            }
        }, []),
    );
    const Stack = createStackNavigator<SharedStackParamsList>();

    const notificationProp: ArticleRouteProp = {
        ...(route.params as ArticleRouteProp),
    };

    let feedComponent: React.FC<AnyType> = EmptyView;
    const feedParams: FeedRouteProp = {
        searchPayload: {
            payload: '',
            isActive: false,
        },
        rootName: route.name,
    };

    if (route.name === 'NEWS') {
        feedComponent = FeedView;
    } else if (route.name === 'EVENTS') {
        feedComponent = FeedView;
    } else if (route.name === 'VIDEO') {
        feedComponent = VideoView;
    }

    if (!route.name) {
        return <></>;
    }

    return (
        <Stack.Navigator initialRouteName={notificationProp.itemId ? 'Article' : 'Feed'} headerMode="none">
            <Stack.Screen initialParams={feedParams} name="Feed" component={feedComponent} />
            <Stack.Screen name="Favorites" component={FavoriteListView} />
            <Stack.Screen initialParams={notificationProp} name="Article" component={Article} />
            <Stack.Screen name="Search" component={SearchView} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
        </Stack.Navigator>
    );
};

export default SharedStack;
