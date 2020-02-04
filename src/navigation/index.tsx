import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
// import { News } from './News';
import NewsListView from '../views/NewsListView/index';
import { Events } from './Events';
import { Map } from './Map';
import { Video } from './Video';
import { More } from './More';
import { TabBarIcon } from '@components';
import { UserSettings } from './UserSettings';
import { createStackNavigator } from 'react-navigation-stack';
import { SingleNews } from './SingleNewsView';

const SettingsStackNavigator = createStackNavigator({
    More: {
        screen: More,
    },
    Settings: {
        screen: UserSettings,
        navigationOptions: () => ({
            title: 'Lietotāja iestatījumi',
        }),
    },
});

const NewsStackNavigator = createStackNavigator({
    News: {
        screen: NewsListView,
        navigationOptions: () => ({
            title: 'Jaunākās ziņas',
            headerStyle: {
                height: 50,
            },
        }),
    },
    SingleNewsItem: {
        screen: SingleNews,
        navigationOptions: () => ({
            title: 'Atpakaļ',
            headerStyle: {
                height: 50,
            },
        }),
    },
});

const TabNavigator = createBottomTabNavigator(
    {
        News: NewsStackNavigator,
        Events: Events,
        Map: Map,
        Video: Video,
        More: SettingsStackNavigator,
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
