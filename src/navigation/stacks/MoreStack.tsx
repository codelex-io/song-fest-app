import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { MoreView, UserSettings, FavoriteListView, Article } from '@views';
import { AppTabsNavParams } from '..';
import { FavouriteGroupKey } from '@domain/favourites/types';
import { StatusBar } from 'react-native';
import { colors } from '@styles';

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
    useFocusEffect(
        useCallback(() => {
            StatusBar.setBackgroundColor(colors.white);
        }, []),
    );

    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="none">
            <Stack.Screen name="Feed" component={MoreView} />
            <Stack.Screen name="Favorites" component={FavoriteListView} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
            <Stack.Screen name="Article" component={Article} />
        </Stack.Navigator>
    );
};

export default MoreStack;
