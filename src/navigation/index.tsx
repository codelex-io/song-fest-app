import React, { useState } from 'react';
import { UserType } from '@domain/settings';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewsStack, EventsStack, MapStack, VideoStack, MoreStack } from './stacks';
import { UserCategoryView, FavoriteListView, UserSettingsView } from '@views';
import { SimpleHeader, TabBarIcon } from '@components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const AppStack: React.FC = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={AppTabs} />
        <Stack.Screen
            name="Favorites"
            options={{
                header: () => <SimpleHeader title={'MANI FAVORĪTI'} />,
            }}
            component={FavoriteListView}
        />
        <Stack.Screen
            name="Settings"
            options={{
                header: () => <SimpleHeader title={'LIETOTĀJA IESTATĪJUMI'} />,
            }}
            component={UserSettingsView}
        />
    </Stack.Navigator>
);

interface Props {
    userType: UserType;
}

const Navigation: React.FC<Props> = ({ userType }) => {
    const [user, setUser] = useState(userType);

    const handleUserSet = (value: UserType) => {
        setUser(value);
    };

    if (user === null) {
        return <UserCategoryView onUserSet={handleUserSet} />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="App" options={{ headerShown: false }} component={AppStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
