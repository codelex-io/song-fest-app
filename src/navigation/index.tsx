import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { News } from './News';
import { Events } from './Events';
import { Video } from './Video';
import { More } from './More';
import { Favourites } from './Favourites';
import { TabBarIcon, Header, SimpleHeader } from '@components';
import { UserSettings } from './UserSettings';
import { createStackNavigator } from 'react-navigation-stack';
import { LanguageView, EventMapView } from '@views';

const StackNavigatorMore = createStackNavigator({
    More: {
        screen: More,
        navigationOptions: () => ({
            headerShown: false,
        }),
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
});

const TabNavigator = createBottomTabNavigator(
    {
        News: {
            screen: News,
            navigationOptions: {
                title: 'News',
            },
        },
        Events: {
            screen: Events,
            navigationOptions: {
                title: 'Events',
            },
        },
        Map: {
            screen: EventMapView,
            navigationOptions: {
                title: 'Map',
            },
        },
        Video: {
            screen: Video,
            navigationOptions: {
                title: 'Video',
            },
        },
        More: {
            screen: StackNavigatorMore,
            navigationOptions: {
                title: 'More',
            },
        },
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

const StackScreen = createStackNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: {
            header: ({ navigation, scene }) => (
                <Header
                    title={scene.route.routes[scene.route.index].routeName}
                    onPress={() => navigation.navigate('Favourite')}
                />
            ),
        },
    },
    Favourite: {
        screen: Favourites,
        navigationOptions: {
            header: ({ navigation }) => <SimpleHeader title={'mani favorīti'} onPress={() => navigation.goBack()} />,
        },
    },
});

export default createAppContainer(StackScreen);
