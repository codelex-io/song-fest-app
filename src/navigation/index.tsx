import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { News } from './News';
import { Events } from './Events';
import { Map } from './Map';
import { Video } from './Video';
import { More } from './More';
import { TabBarIcon } from '@components';

const TabNavigator = createBottomTabNavigator(
    {
        News: News,
        Events: Events,
        Map: Map,
        Video: Video,
        More: More,
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

const AppNavigator = createAppContainer(TabNavigator);

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return <AppNavigator />;
};

export default App;
