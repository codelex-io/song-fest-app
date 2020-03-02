import React from 'react';
import { useSettings } from '@domain/settings';
import { NavigationContainer, DefaultTheme, RouteProp } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { UserCategoryView } from '@views';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@components';
import { MapStack, MoreStack, SharedStack } from './stacks';
import { colors } from '@styles';
import { StackNavigationProp } from '@react-navigation/stack';

type AppTabsParamList = {
    NEWS: undefined;
    EVENTS: undefined;
    MAP: undefined;
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
    const { userType, setUserType } = useSettings();

    if (userType === null) {
        return <UserCategoryView onSelect={setUserType} />;
    }

    return (
        <NavigationContainer theme={NavigationTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const { name } = route;
                        return <TabBarIcon route={name} focused={focused} />;
                    },
                    tabBarLabel: () => false,
                })}
            >
                <Tab.Screen name="NEWS" component={SharedStack} />
                <Tab.Screen name="EVENTS" component={SharedStack} />
                <Tab.Screen name="MAP" component={MapStack} />
                <Tab.Screen name="VIDEO" component={SharedStack} />
                <Tab.Screen name="MORE" component={MoreStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
