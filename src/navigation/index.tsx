import React from 'react';
import { useSettings } from '@domain/settings';
import { NavigationContainer, DefaultTheme, RouteProp } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { UserCategoryView } from '@views';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@components';
import { colors } from '@styles';
import { StackNavigationProp } from '@react-navigation/stack';
import SharedStack from './stacks/SharedStack';
import MoreStack from './stacks/MoreStack';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                        const onPress = () => { }
                        return {
                            tabBarVisible: hideOnUserCategoryView(route),
                            tabBarButton: () => (
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: colors.lightGrey3A
                                    }}
                                >
                                    <TabBarIcon route={'VIDEO'} focused={false} />
                                </TouchableOpacity>
                            ),
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

export default Navigation;

/*eslint-disable*/
const hideOnUserCategoryView = (route: any): boolean => {
    /*eslint-enable*/
    let lastRoute = '';
    if (route.state) {
        lastRoute = route.state.routes[route.state.routes.length - 1].name;
    }
    return lastRoute !== 'UserCategory';
};
