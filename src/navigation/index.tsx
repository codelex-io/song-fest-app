import React from 'react';
import { useSettings } from '@domain/settings';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { UserCategoryView } from '@views';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@components';
import { NewsStack, EventsStack, MapStack, VideoStack, MoreStack } from './stacks';
import { colors } from '@styles';

type AppTabsParamList = {
    NEWS: undefined,
    EVENTS: undefined,
    MAP: undefined,
    VIDEO: undefined,
    MORE: undefined
}

const Tab = createBottomTabNavigator<AppTabsParamList>()

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
                <Tab.Screen name="NEWS" component={NewsStack} />
                <Tab.Screen name="EVENTS" component={EventsStack} />
                <Tab.Screen name="MAP" component={MapStack} />
                <Tab.Screen name="VIDEO" component={VideoStack} />
                <Tab.Screen name="MORE" component={MoreStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
