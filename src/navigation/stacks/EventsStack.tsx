import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SearchView } from '@views';
import { SearchInterface } from '@components/headers/SearchHeader';
import { colors } from '@styles';
import { EventsFeed } from '@views';
import { setStatusBarBackgroundColor } from '@utils';

const Stack = createStackNavigator<EventsStack>();

interface EventsScreenRouteParams {
    searchPayload: SearchInterface;
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
    useFocusEffect(useCallback(() => setStatusBarBackgroundColor(colors.white), []));

    const feedInitialParams: EventsScreenRouteParams = {
        searchPayload: {
            payload: '',
            isActive: false,
        },
    };

    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="none">
            <Stack.Screen initialParams={feedInitialParams} name="Feed" component={EventsFeed} />
            <Stack.Screen name="Search" component={SearchView} />
        </Stack.Navigator>
    );
};

export default EventsStack;
