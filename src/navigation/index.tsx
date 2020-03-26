import React from 'react';
import { useSettings } from '@domain/settings';
import { NavigationContainer, DefaultTheme, RouteProp, NavigationContainerRef } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@components';
import { colors } from '@styles';
import { StackNavigationProp } from '@react-navigation/stack';
import SharedStack from './stacks/SharedStack';
import MoreStack from './stacks/MoreStack';
import InitialUserSettingsStack from './stacks/InitialUserSettingsStack';
import { AnyType } from '@domain/AnyType';
import { fromNotificationData, Location } from './location';

let initialLocation: Location | null = null;

const setInitialLocation = (location: Location) => (initialLocation = location);

const navigationRef = React.createRef<NavigationContainerRef>();

const navigate = (location: Location) => {
    navigationRef.current?.navigate(location.tab, { itemId: location.itemId });
};

type AppTabsParamList = {
    NEWS: undefined;
    EVENTS: undefined;
    MAP: { item: AnyType };
    VIDEO: undefined;
    MORE: undefined;
};

export type AppTabsNavParams<T extends keyof AppTabsParamList> = {
    navigation: StackNavigationProp<AppTabsParamList, T>;
    route: RouteProp<AppTabsParamList, T>;
};

const Tab = createBottomTabNavigator<AppTabsParamList>();

const NavigationTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white,
    },
};

const Navigation: React.FC = () => {
    const { userType } = useSettings();
    console.log(initialLocation);
    if (userType === null) {
        return <InitialUserSettingsStack />;
    }
    return (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const { name } = route;
                        return <TabBarIcon route={name} focused={focused} />;
                    },
                    tabBarLabel: () => false,
                })}
            >
                <Tab.Screen
                    options={({ route }) => {
                        return { tabBarVisible: hideOnUserCategoryView(route) };
                    }}
                    name="NEWS"
                    component={SharedStack}
                />
                <Tab.Screen
                    options={({ route }) => {
                        return { tabBarVisible: hideOnUserCategoryView(route) };
                    }}
                    name="EVENTS"
                    component={SharedStack}
                />
                <Tab.Screen
                    options={({ route }) => {
                        return { tabBarVisible: hideOnUserCategoryView(route) };
                    }}
                    name="MAP"
                    component={SharedStack}
                />
                <Tab.Screen
                    options={({ route }) => {
                        return {
                            tabBarVisible: hideOnUserCategoryView(route),
                        };
                    }}
                    name="VIDEO"
                    component={SharedStack}
                />
                <Tab.Screen
                    options={({ route }) => {
                        return { tabBarVisible: hideOnUserCategoryView(route) };
                    }}
                    name="MORE"
                    component={MoreStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const hideOnUserCategoryView = (route: AnyType): boolean => {
    let lastRoute = '';
    if (route.state) {
        lastRoute = route.state.routes[route.state.routes.length - 1].name;
    }
    return lastRoute !== 'UserSettings' && lastRoute !== 'Article';
};

export { fromNotificationData, setInitialLocation, navigate };

export default Navigation;
