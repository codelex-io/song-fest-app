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
import { AnyType } from '@domain/AnyType';
import { fromNotificationData, Location, Tab as TabType } from './location';
import { UserCategoryView } from '@views';

const Tab = createBottomTabNavigator<AppTabsParamList>();

let initialLocation: Location | null = null;

const setInitialLocation = (location: Location) => (initialLocation = location);

const navigationRef = React.createRef<NavigationContainerRef>();

const navigate = (location: Location) => {
    navigationRef.current?.navigate('Article', {
        itemId: location.itemId,
        group: location.tab,
        hasHistory: true,
    });
};

export type NotificationProp = {
    group: TabType;
    itemId: string | undefined;
    hasHistory: boolean;
};

type AppTabsParamList = {
    NEWS: NotificationProp;
    EVENTS: NotificationProp;
    MAP: { item: AnyType };
    VIDEO: NotificationProp;
    MORE: undefined;
};

export type AppTabsNavParams<T extends keyof AppTabsParamList> = {
    navigation: StackNavigationProp<AppTabsParamList, T>;
    route: RouteProp<AppTabsParamList, T>;
};

const NavigationTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white,
    },
};

const Navigation: React.FC = () => {
    const { userType } = useSettings();
    if (userType === null) {
        return <UserCategoryView />;
    }

    const initialRouteName = initialLocation?.tab;

    const notificationItem = {
        group: initialLocation?.tab,
        itemId: initialLocation?.itemId,
        hasHistory: false,
    };

    return (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
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
                <Tab.Screen
                    initialParams={notificationItem}
                    options={({ route }) => {
                        return {
                            tabBarVisible: hideOnUserCategoryView(route),
                        };
                    }}
                    name="NEWS"
                    component={SharedStack}
                />
                <Tab.Screen
                    initialParams={notificationItem}
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
                    initialParams={notificationItem}
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
