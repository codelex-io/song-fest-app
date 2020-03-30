import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@components';
import { SearchInterface } from '@components/headers/SearchHeader';
import NewsStack from './stacks/NewsStack';
import EventsStack from './stacks/EventsStack';
import MapStack from './stacks/MapStack';
import VideoStack from './stacks/VideoStack';
import MoreStack from './stacks/MoreStack';

export type BottomTabRoutes = 'NEWS' | 'EVENTS' | 'MAP' | 'VIDEO' | 'MORE';

export type MapRouteParams = { searchPayload: SearchInterface; item: string };

type BottomTabsParamsList = {
    NEWS: { searchPayload: SearchInterface };
    EVENTS: { searchPayload: SearchInterface };
    MAP: MapRouteParams;
    VIDEO: { searchPayload: SearchInterface };
    MORE: undefined;
};

export type BottomTabsNavProps<T extends keyof BottomTabsParamsList> = {
    navigation: BottomTabNavigationProp<BottomTabsParamsList, T>;
    route: RouteProp<BottomTabsParamsList, T>;
};

const BottomTabs: React.FC = () => {
    const Tab = createBottomTabNavigator<BottomTabsParamsList>();
    const initialRouteName = 'NEWS';
    return (
        <Tab.Navigator
            {...{ initialRouteName }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const { name } = route;
                    return <TabBarIcon route={name} focused={focused} />;
                },
                tabBarLabel: () => false,
            })}
        >
            <Tab.Screen name="NEWS" component={NewsStack} />
            <Tab.Screen name="EVENTS" component={EventsStack} />
            <Tab.Screen name="MAP" component={MapStack} />
            <Tab.Screen name="VIDEO" component={VideoStack} />
            <Tab.Screen name="MORE" component={MoreStack} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
