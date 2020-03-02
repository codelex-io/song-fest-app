import React from 'react';
import { useSettings } from '@domain/settings';
import { NavigationContainer, useNavigation, DefaultTheme } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewsStack, EventsStack, MapStack, VideoStack, MoreStack } from './stacks';
import { UserCategoryView, FavoriteListView, SearchView, MarkdownEvent } from '@views';
import { SimpleHeader, TabBarIcon } from '@components';
import { colors } from '@styles';
import SearchHeader from '@components/headers/SearchHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white,
    },
};

const AppTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const { name } = route;
                    return <TabBarIcon route={name} focused={focused} />;
                },
                tabBarLabel: () => false,
            })}
        >
            <Tab.Screen name="News" component={NewsStack} />
            <Tab.Screen name="Events" component={EventsStack} />
            <Tab.Screen name="Map" component={MapStack} />
            <Tab.Screen name="Video" component={VideoStack} />
            <Tab.Screen name="More" component={MoreStack} />
        </Tab.Navigator>
    );
};

const AppStack: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{ headerShown: false }} component={AppTabs} />
            <Stack.Screen
                name="Favorites"
                options={{
                    header: () => <SimpleHeader title={'MANI FAVORĪTI'} goBack={navigation.goBack} />,
                }}
                component={FavoriteListView}
            />
            <Stack.Screen
                name="Article"
                options={{
                    header: () => <SimpleHeader title={''} goBack={navigation.goBack} />,
                }}
                component={MarkdownEvent}
            />
            <Stack.Screen
                name="Search"
                options={{
                    header: () => <SearchHeader goBack={navigation.goBack} navigate={navigation.navigate} />,
                }}
                component={SearchView}
            />
        </Stack.Navigator>
    );
};

const Navigation: React.FC = () => {
    const { userType, setUserType } = useSettings();

    if (userType === null) {
        return <UserCategoryView onSelect={setUserType} />;
    }

    return (
        <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator>
                <Stack.Screen name="App" options={{ headerShown: false }} component={AppStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
