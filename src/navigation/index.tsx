import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { News } from './News';
import { Events } from './Events';
import { Video } from './Video';
import { More } from './More';
import { TabBarIcon } from '@components';
import { UserSettings } from './UserSettings';
import { createStackNavigator } from 'react-navigation-stack';
import { LanguageView, EventMapView } from '@views';

const StackNavigator = createStackNavigator(
    {
        More: {
            screen: More,
        },
        Settings: {
            screen: UserSettings,
            navigationOptions: () => ({
                title: 'Lietotāja iestatījumi',
            }),
        },
        Language: {
            screen: LanguageView,
            navigationOptions: () => ({
                title: 'Valoda',
            }),
        },
    },
    {
        initialRouteName: 'More',
    },
);

const TabNavigator = createBottomTabNavigator(
    {
        News: News,
        Events: Events,
        Map: EventMapView,
        Video: Video,
        More: StackNavigator,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                return <TabBarIcon route={routeName} focused={focused} />;
            },
            tabBarLabel: () => false,
        }),
    },
);

export default createAppContainer(TabNavigator);
