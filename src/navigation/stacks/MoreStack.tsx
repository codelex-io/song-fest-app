import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MoreView, UserSettings, FavoriteListView, MarkdownEvent } from '@views';
import { AppTabsNavParams } from '..';
import { FavouriteGroupKey } from '@domain/favourites/types';

export type MoreViewStackParamsList = {
    Feed: undefined;
    Favorites: undefined;
    Language: undefined;
    UserSettings: undefined;
    Article: { itemId: string; group: FavouriteGroupKey };
};

export type MoreViewStackNavProps<T extends keyof MoreViewStackParamsList> = {
    navigation: StackNavigationProp<MoreViewStackParamsList, T>;
    route: RouteProp<MoreViewStackParamsList, T>;
};

const Stack = createStackNavigator();

const MoreStack: React.FC<AppTabsNavParams<'MORE'>> = () => {
    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="none">
            <Stack.Screen name="Feed" component={MoreView} />
            <Stack.Screen name="Favorites" component={FavoriteListView} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
            <Stack.Screen name="Article" component={MarkdownEvent} />
        </Stack.Navigator>
    );
};

export default MoreStack;
