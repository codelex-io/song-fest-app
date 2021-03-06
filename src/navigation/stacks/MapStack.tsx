import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { EventMapView, SearchView } from '@views';
import { SearchInterface } from '@components/headers/SearchHeader';

export interface MapFeedProps {
    item: string;
    searchPayload: SearchInterface;
}

export type MapViewStackParamsList = {
    Feed: MapFeedProps;
    Search: { color: string };
};

export type MapStackNavProps<T extends keyof MapViewStackParamsList> = {
    navigation: StackNavigationProp<MapViewStackParamsList, T>;
    route: RouteProp<MapViewStackParamsList, T>;
};

const Stack = createStackNavigator();

const MapStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="none">
            <Stack.Screen name="Feed" component={EventMapView} />
            <Stack.Screen name="Search" component={SearchView} />
        </Stack.Navigator>
    );
};

export default MapStack;
