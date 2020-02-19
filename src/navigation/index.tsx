import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { News } from './News';
import { SingleNews } from './SingleNews';
import { Events } from './Events';
import { Video } from './Video';
import { More } from './More';
import { Favourites } from './Favourites';
import { TabBarIcon, Header, SimpleHeader } from '@components';
import { UserSettings } from './UserSettings';
import { createStackNavigator } from 'react-navigation-stack';
import { LanguageView, EventMapView } from '@views';
import { UserCategory } from './UserCategory';
import { UserType } from '@domain/settings';

const StackNavigatorMore = createStackNavigator({
    More: {
        screen: More,
        navigationOptions: {
            header: ({ navigation }) => <Header title={'More'} onPress={() => navigation.navigate('Favourite')} />,
        },
    },
    Settings: {
        screen: UserSettings,
        navigationOptions: {
            header: ({ navigation }) => (
                <SimpleHeader title={'Lietotāja iestatījumi'} onPress={() => navigation.goBack()} />
            ),
        },
    },
    Language: {
        screen: LanguageView,
        navigationOptions: () => ({
            title: 'Valoda',
        }),
    },
});

const StackScreen = createStackNavigator({
    Home: {
        screen: createBottomTabNavigator(
            {
                News: {
                    screen: createStackNavigator({
                        News: {
                            screen: News,
                            navigationOptions: {
                                header: ({ navigation }) => (
                                    <Header title={'News'} onPress={() => navigation.navigate('Favourite')} />
                                ),
                            },
                        },
                        SingleNews: {
                            screen: SingleNews,
                            navigationOptions: {
                                header: ({ navigation }) => (
                                    <SimpleHeader title={' '} onPress={() => navigation.goBack()} />
                                ),
                            },
                        },
                    }),
                },
                Events: {
                    screen: createStackNavigator({
                        Events: {
                            screen: Events,
                            navigationOptions: {
                                header: ({ navigation }) => (
                                    <Header title={'Events'} onPress={() => navigation.navigate('Favourite')} />
                                ),
                            },
                        },
                    }),
                },
                Map: {
                    screen: createStackNavigator({
                        Map: {
                            screen: EventMapView,
                            navigationOptions: {
                                header: ({ navigation }) => (
                                    <Header title={'Map'} onPress={() => navigation.navigate('Favourite')} />
                                ),
                            },
                        },
                    }),
                },
                Video: {
                    screen: createStackNavigator({
                        Video: {
                            screen: Video,
                            navigationOptions: {
                                header: ({ navigation }) => (
                                    <Header title={'Video'} onPress={() => navigation.navigate('Favourite')} />
                                ),
                            },
                        },
                    }),
                },
                More: {
                    screen: StackNavigatorMore,
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
        ),
        navigationOptions: () => ({
            headerShown: false,
        }),
    },
    Favourite: {
        screen: Favourites,
        navigationOptions: {
            header: ({ navigation }) => <SimpleHeader title={'MANI FAVORĪTI'} onPress={() => navigation.goBack()} />,
        },
    },
});

const createNavigationContainer = (userType: UserType) =>
    createAppContainer(
        createSwitchNavigator(
            {
                UserCategory: UserCategory,
                App: StackScreen,
            },
            {
                initialRouteName: userType !== null ? 'App' : 'UserCategory',
            },
        ),
    );

export default createNavigationContainer;
