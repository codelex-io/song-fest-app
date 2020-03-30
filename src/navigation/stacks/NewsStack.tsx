import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SearchView } from '@views';
import { SearchInterface } from '@components/headers/SearchHeader';
import { StatusBar } from 'react-native';
import { colors } from '@styles';
import { NewsFeed } from '@views';

interface NewsScreenRouteParams {
    searchPayload: SearchInterface;
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
    };

    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="none">
            <Stack.Screen initialParams={feedInitialParams} name="Feed" component={NewsFeed} />
            <Stack.Screen name="Search" component={SearchView} />
        </Stack.Navigator>
    );
};

export default NewsStack;
